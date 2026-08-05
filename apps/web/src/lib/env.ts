import { z } from 'zod';

/**
 * Validated public/runtime environment for the web app.
 * Fails fast on invalid configuration during bootstrap.
 */

const webEnvSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url().default('http://localhost:4000'),
  NEXT_PUBLIC_APP_URL: z.string().url().optional(),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
});

export type WebEnv = z.infer<typeof webEnvSchema>;

function readEnv(): WebEnv {
  const parsed = webEnvSchema.safeParse({
    NEXT_PUBLIC_API_URL: process.env['NEXT_PUBLIC_API_URL'],
    NEXT_PUBLIC_APP_URL: process.env['NEXT_PUBLIC_APP_URL'] ?? process.env['APP_URL'],
    NODE_ENV: process.env['NODE_ENV'],
  });

  if (!parsed.success) {
    const details = parsed.error.flatten().fieldErrors;
    throw new Error(`Invalid web environment: ${JSON.stringify(details)}`);
  }

  return parsed.data;
}

export const env = readEnv();

export function getAppUrl(): string {
  return env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000';
}

export function getApiUrl(): string {
  return env.NEXT_PUBLIC_API_URL;
}
