/**
 * Better Auth configuration — email/password ready; OAuth providers plug in later.
 *
 * UI routes do not depend on this module. It is only used by /api/auth/*.
 */

import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { prisma } from '@bitcraftly/database';

function resolveAuthSecret(): string {
  const secret = process.env['BETTER_AUTH_SECRET'];
  if (!secret || secret.length < 32 || secret.startsWith('change-me')) {
    // Dev fallback — never use the Better Auth built-in default (it surfaces as a Next Issue).
    return 'bitcraftly-dev-only-secret-replace-in-production-32+';
  }
  return secret;
}

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
  },
  appName: 'Bitcraftly AI Studio',
  secret: resolveAuthSecret(),
  baseURL: process.env['BETTER_AUTH_URL'] ?? process.env['APP_URL'] ?? 'http://localhost:3000',
});

export type Session = typeof auth.$Infer.Session;
