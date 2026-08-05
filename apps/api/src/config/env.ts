/**
 * API configuration loaded from environment.
 */

import { config as loadEnv } from 'dotenv';
import { resolve } from 'node:path';

loadEnv({ path: resolve(process.cwd(), '../../.env') });
loadEnv();

function required(key: string, fallback?: string): string {
  const value = process.env[key] ?? fallback;
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

export const env = {
  nodeEnv: process.env['NODE_ENV'] ?? 'development',
  port: Number(process.env['API_PORT'] ?? 4000),
  appUrl: required('APP_URL', 'http://localhost:3000'),
  apiUrl: required('API_URL', 'http://localhost:4000'),
  databaseUrl: required(
    'DATABASE_URL',
    'postgresql://bitcraftly:bitcraftly@localhost:5432/bitcraftly_ai_studio?schema=public',
  ),
  redisUrl: required('REDIS_URL', 'redis://localhost:6379'),
  storagePath: process.env['STORAGE_LOCAL_PATH'] ?? './storage',
  logLevel: process.env['LOG_LEVEL'] ?? 'info',
  demoUserId: process.env['DEMO_USER_ID'] ?? 'demo-user',
} as const;
