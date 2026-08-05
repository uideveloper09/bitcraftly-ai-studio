/**
 * Health check route.
 */

import type { FastifyPluginAsync } from 'fastify';
import { createApiSuccess } from '@bitcraftly/shared';

export const healthRoutes: FastifyPluginAsync = async (app) => {
  app.get('/health', async () => {
    return createApiSuccess({
      status: 'ok',
      service: 'bitcraftly-api',
      timestamp: new Date().toISOString(),
    });
  });
};
