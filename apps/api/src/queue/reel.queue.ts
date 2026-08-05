/**
 * Redis + BullMQ queue setup for async generation jobs.
 */

import { Queue, Worker, type Job } from 'bullmq';
import { Redis } from 'ioredis';
import { QUEUE_NAMES } from '@bitcraftly/shared';
import { env } from '../config/env.js';

let connection: Redis | undefined;

export function getRedisConnection(): Redis {
  if (!connection) {
    connection = new Redis(env.redisUrl, {
      maxRetriesPerRequest: null,
      enableReadyCheck: false,
    });
  }
  return connection;
}

export function createReelQueue(): Queue {
  return new Queue(QUEUE_NAMES.REEL_GENERATION, {
    connection: getRedisConnection(),
    defaultJobOptions: {
      attempts: 3,
      backoff: { type: 'exponential', delay: 2000 },
      removeOnComplete: 100,
      removeOnFail: 200,
    },
  });
}

export interface ReelJobData {
  generationId: string;
  reelId: string;
  userId: string;
}

export type ReelJobHandler = (job: Job<ReelJobData>) => Promise<void>;

export function createReelWorker(handler: ReelJobHandler): Worker<ReelJobData> {
  return new Worker<ReelJobData>(QUEUE_NAMES.REEL_GENERATION, handler, {
    connection: getRedisConnection(),
    concurrency: 2,
  });
}
