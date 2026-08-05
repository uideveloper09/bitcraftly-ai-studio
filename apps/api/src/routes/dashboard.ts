/**
 * Dashboard stats, activity, settings, and generation status routes.
 */

import type { FastifyPluginAsync } from 'fastify';
import { db } from '@bitcraftly/database';
import {
  ACTIVITY_TYPE,
  ERROR_CODES,
  createApiError,
  createApiSuccess,
  paginationSchema,
  updateSettingsSchema,
} from '@bitcraftly/shared';
import { ensureDemoUser } from '../lib/demo-user.js';

export const statsRoutes: FastifyPluginAsync = async (app) => {
  app.get('/api/v1/stats', async () => {
    const userId = await ensureDemoUser();

    const [totalReels, completedReels, processingReels, failedReels, totalGenerations] =
      await Promise.all([
        db.reel.count({ where: { userId } }),
        db.reel.count({ where: { userId, status: 'COMPLETED' } }),
        db.reel.count({
          where: { userId, status: { in: ['QUEUED', 'PROCESSING'] } },
        }),
        db.reel.count({ where: { userId, status: 'FAILED' } }),
        db.generation.count({ where: { userId } }),
      ]);

    return createApiSuccess({
      totalReels,
      completedReels,
      processingReels,
      failedReels,
      totalGenerations,
    });
  });
};

export const activityRoutes: FastifyPluginAsync = async (app) => {
  app.get('/api/v1/activity', async (request, reply) => {
    const parsed = paginationSchema.safeParse(request.query);
    if (!parsed.success) {
      return reply.status(400).send(
        createApiError(ERROR_CODES.VALIDATION_ERROR, 'Invalid pagination', parsed.error.flatten()),
      );
    }

    const userId = await ensureDemoUser();
    const { page, pageSize } = parsed.data;

    const items = await db.activityLog.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * pageSize,
      take: pageSize,
    });

    return createApiSuccess(items);
  });
};

export const generationRoutes: FastifyPluginAsync = async (app) => {
  app.get('/api/v1/generations', async (request) => {
    const userId = await ensureDemoUser();
    const query = request.query as { status?: string };

    const items = await db.generation.findMany({
      where: {
        userId,
        ...(query.status ? { status: query.status as never } : {}),
      },
      orderBy: { createdAt: 'desc' },
      take: 50,
      include: { reel: true },
    });

    return createApiSuccess(items);
  });

  app.get('/api/v1/generations/:id', async (request, reply) => {
    const { id } = request.params as { id: string };
    const userId = await ensureDemoUser();

    const generation = await db.generation.findFirst({
      where: { id, userId },
      include: { reel: true },
    });

    if (!generation) {
      return reply.status(404).send(createApiError(ERROR_CODES.NOT_FOUND, 'Generation not found'));
    }

    return createApiSuccess(generation);
  });
};

export const settingsRoutes: FastifyPluginAsync = async (app) => {
  app.get('/api/v1/settings', async () => {
    const userId = await ensureDemoUser();
    const settings = await db.settings.findUnique({ where: { userId } });
    return createApiSuccess(settings);
  });

  app.patch('/api/v1/settings', async (request, reply) => {
    const parsed = updateSettingsSchema.safeParse(request.body);
    if (!parsed.success) {
      return reply.status(400).send(
        createApiError(ERROR_CODES.VALIDATION_ERROR, 'Invalid settings', parsed.error.flatten()),
      );
    }

    const userId = await ensureDemoUser();
    const settings = await db.settings.upsert({
      where: { userId },
      create: { userId, ...parsed.data },
      update: parsed.data,
    });

    await db.activityLog.create({
      data: {
        type: ACTIVITY_TYPE.SETTINGS_UPDATED,
        message: 'Account settings updated',
        userId,
      },
    });

    return createApiSuccess(settings);
  });
};
