/**
 * Ensures a demo user exists for MVP (auth integration comes next).
 */

import { db } from '@bitcraftly/database';
import { env } from '../config/env.js';

export async function ensureDemoUser(): Promise<string> {
  const existing = await db.user.findFirst({
    where: { email: 'demo@bitcraftly.com' },
  });

  if (existing) {
    return existing.id;
  }

  const user = await db.user.create({
    data: {
      id: env.demoUserId === 'demo-user' ? undefined : env.demoUserId,
      name: 'Demo User',
      email: 'demo@bitcraftly.com',
      emailVerified: true,
      settings: {
        create: {
          displayName: 'Demo User',
        },
      },
    },
  });

  return user.id;
}
