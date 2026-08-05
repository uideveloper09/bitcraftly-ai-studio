/**
 * Fastify application factory.
 */

import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import sensible from '@fastify/sensible';
import { ERROR_CODES, createApiError, getErrorMessage } from '@bitcraftly/shared';
import { env } from './config/env.js';
import { healthRoutes } from './routes/health.js';
import { reelRoutes } from './routes/reels.js';
import {
  activityRoutes,
  generationRoutes,
  settingsRoutes,
  statsRoutes,
} from './routes/dashboard.js';

export async function buildApp() {
  const app = Fastify({
    logger: {
      level: env.logLevel,
      transport:
        env.nodeEnv === 'development'
          ? { target: 'pino-pretty', options: { colorize: true } }
          : undefined,
    },
  });

  await app.register(cors, {
    origin: [env.appUrl, 'http://localhost:3000'],
    credentials: true,
  });
  await app.register(helmet, { contentSecurityPolicy: false });
  await app.register(sensible);

  await app.register(healthRoutes);
  await app.register(reelRoutes);
  await app.register(statsRoutes);
  await app.register(activityRoutes);
  await app.register(generationRoutes);
  await app.register(settingsRoutes);

  app.setErrorHandler((error: unknown, _request, reply) => {
    app.log.error(error);
    const statusCode =
      typeof error === 'object' &&
      error !== null &&
      'statusCode' in error &&
      typeof (error as { statusCode: unknown }).statusCode === 'number'
        ? (error as { statusCode: number }).statusCode
        : 500;

    return reply.status(statusCode).send(
      createApiError(ERROR_CODES.INTERNAL_ERROR, getErrorMessage(error)),
    );
  });

  app.setNotFoundHandler((_request, reply) => {
    return reply.status(404).send(createApiError(ERROR_CODES.NOT_FOUND, 'Route not found'));
  });

  return app;
}
