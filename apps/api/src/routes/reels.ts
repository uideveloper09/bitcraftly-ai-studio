/**
 * Reel REST routes — generate, list, get, download metadata.
 */

import type { FastifyPluginAsync } from 'fastify';
import { db } from '@bitcraftly/database';
import {
  ACTIVITY_TYPE,
  API_ROUTES,
  ERROR_CODES,
  createApiError,
  createApiSuccess,
  generateReelSchema,
  paginationSchema,
} from '@bitcraftly/shared';
import { ensureDemoUser } from '../lib/demo-user.js';
import { createReelQueue } from '../queue/reel.queue.js';

export const reelRoutes: FastifyPluginAsync = async (app) => {
  const queue = createReelQueue();

  app.post(API_ROUTES.REELS_GENERATE, async (request, reply) => {
    const parsed = generateReelSchema.safeParse(request.body);
    if (!parsed.success) {
      return reply.status(400).send(
        createApiError(ERROR_CODES.VALIDATION_ERROR, 'Invalid reel input', parsed.error.flatten()),
      );
    }

    const userId = await ensureDemoUser();
    const input = parsed.data;

    const reel = await db.reel.create({
      data: {
        title: input.topic,
        topic: input.topic,
        language: input.language,
        style: input.style,
        voice: input.voice,
        duration: input.duration,
        status: 'QUEUED',
        userId,
        projectId: input.projectId,
      },
    });

    const generation = await db.generation.create({
      data: {
        type: 'REEL',
        status: 'QUEUED',
        progress: 0,
        currentStep: 'Queued',
        input,
        userId,
        reelId: reel.id,
        projectId: input.projectId,
      },
    });

    await db.activityLog.create({
      data: {
        type: ACTIVITY_TYPE.REEL_CREATED,
        message: `Reel queued: ${input.topic}`,
        userId,
        metadata: { reelId: reel.id, generationId: generation.id },
      },
    });

    await queue.add('generate-reel', {
      generationId: generation.id,
      reelId: reel.id,
      userId,
    });

    return reply.status(202).send(
      createApiSuccess({
        reel,
        generation,
      }),
    );
  });

  app.get(API_ROUTES.REELS, async (request, reply) => {
    const parsed = paginationSchema.safeParse(request.query);
    if (!parsed.success) {
      return reply.status(400).send(
        createApiError(ERROR_CODES.VALIDATION_ERROR, 'Invalid pagination', parsed.error.flatten()),
      );
    }

    const userId = await ensureDemoUser();
    const { page, pageSize } = parsed.data;
    const skip = (page - 1) * pageSize;

    const [items, total] = await Promise.all([
      db.reel.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
        skip,
        take: pageSize,
        include: {
          generations: {
            orderBy: { createdAt: 'desc' },
            take: 1,
          },
        },
      }),
      db.reel.count({ where: { userId } }),
    ]);

    return createApiSuccess(items, {
      page,
      pageSize,
      total,
      totalPages: Math.ceil(total / pageSize),
    });
  });

  app.get('/api/v1/reels/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    const userId = await ensureDemoUser();

    const reel = await db.reel.findFirst({
      where: { id, userId },
      include: {
        generations: { orderBy: { createdAt: 'desc' } },
        media: true,
      },
    });

    if (!reel) {
      return reply.status(404).send(createApiError(ERROR_CODES.NOT_FOUND, 'Reel not found'));
    }

    return createApiSuccess(reel);
  });
};
