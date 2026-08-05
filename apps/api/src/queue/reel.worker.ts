/**
 * Reel generation worker — runs the pipeline and persists progress.
 */

import { db } from '@bitcraftly/database';
import { ACTIVITY_TYPE, GENERATION_STATUS, getErrorMessage } from '@bitcraftly/shared';
import type { ReelInput } from '@bitcraftly/shared';
import { getContainer } from '../container.js';
import { createReelWorker, type ReelJobData } from './reel.queue.js';
import type { Job } from 'bullmq';

async function processReelJob(job: Job<ReelJobData>): Promise<void> {
  const { generationId, reelId, userId } = job.data;
  const { reelEngine } = getContainer();

  const generation = await db.generation.findUnique({ where: { id: generationId } });
  if (!generation) {
    throw new Error(`Generation not found: ${generationId}`);
  }

  const input = generation.input as unknown as ReelInput;

  try {
    await db.generation.update({
      where: { id: generationId },
      data: {
        status: 'PROCESSING',
        startedAt: new Date(),
        progress: 5,
        currentStep: GENERATION_STATUS.PROCESSING,
      },
    });

    await db.reel.update({
      where: { id: reelId },
      data: { status: 'PROCESSING' },
    });

    const result = await reelEngine.generate(input, async (progress) => {
      await db.generation.update({
        where: { id: generationId },
        data: {
          status: progress.step as never,
          progress: progress.progress,
          currentStep: progress.message,
        },
      });
      await job.updateProgress(progress.progress);
    });

    await db.reel.update({
      where: { id: reelId },
      data: {
        status: 'COMPLETED',
        title: result.script.title,
        script: result.script as object,
        thumbnailUrl: result.video.thumbnailUrl,
        videoUrl: result.video.url,
        completedAt: new Date(),
      },
    });

    await db.generation.update({
      where: { id: generationId },
      data: {
        status: 'COMPLETED',
        progress: 100,
        currentStep: GENERATION_STATUS.COMPLETED,
        output: result as object,
        completedAt: new Date(),
      },
    });

    await db.activityLog.create({
      data: {
        type: ACTIVITY_TYPE.REEL_GENERATED,
        message: `Reel "${result.script.title}" generated successfully`,
        userId,
        metadata: { reelId, generationId },
      },
    });
  } catch (error) {
    const message = getErrorMessage(error);

    await db.generation.update({
      where: { id: generationId },
      data: {
        status: 'FAILED',
        errorMessage: message,
        completedAt: new Date(),
      },
    });

    await db.reel.update({
      where: { id: reelId },
      data: {
        status: 'FAILED',
        errorMessage: message,
      },
    });

    await db.activityLog.create({
      data: {
        type: ACTIVITY_TYPE.REEL_FAILED,
        message: `Reel generation failed: ${message}`,
        userId,
        metadata: { reelId, generationId },
      },
    });

    throw error;
  }
}

export function startReelWorker() {
  const worker = createReelWorker(processReelJob);

  worker.on('failed', (job, err) => {
    console.error(`[reel-worker] Job ${job?.id} failed:`, err.message);
  });

  worker.on('completed', (job) => {
    console.info(`[reel-worker] Job ${job.id} completed`);
  });

  return worker;
}
