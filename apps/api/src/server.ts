/**
 * API server entrypoint.
 */

import { buildApp } from './app.js';
import { env } from './config/env.js';
import { ensureDemoUser } from './lib/demo-user.js';
import { startReelWorker } from './queue/reel.worker.js';

async function main() {
  const app = await buildApp();

  try {
    await ensureDemoUser();
  } catch (error) {
    app.log.warn(
      { err: error },
      'Could not ensure demo user (database may be unavailable). Starting anyway.',
    );
  }

  let worker: ReturnType<typeof startReelWorker> | undefined;
  try {
    worker = startReelWorker();
    app.log.info('Reel generation worker started');
  } catch (error) {
    app.log.warn({ err: error }, 'Could not start BullMQ worker (Redis may be unavailable)');
  }

  await app.listen({ port: env.port, host: '0.0.0.0' });
  app.log.info(`API listening on ${env.apiUrl}`);

  const shutdown = async () => {
    app.log.info('Shutting down…');
    await worker?.close();
    await app.close();
    process.exit(0);
  };

  process.on('SIGINT', () => void shutdown());
  process.on('SIGTERM', () => void shutdown());
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
