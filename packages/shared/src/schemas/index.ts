/**
 * Zod schemas for request/response validation across the platform.
 */

import { z } from 'zod';

export const reelLanguageSchema = z.enum(['en', 'es', 'fr', 'de', 'hi', 'pt', 'ja', 'ko']);

export const reelStyleSchema = z.enum([
  'cinematic',
  'minimal',
  'energetic',
  'educational',
  'storytelling',
  'corporate',
]);

export const reelVoiceSchema = z.enum(['alloy', 'echo', 'fable', 'onyx', 'nova', 'shimmer']);

export const reelDurationSchema = z.union([
  z.literal(15),
  z.literal(30),
  z.literal(45),
  z.literal(60),
]);

export const generateReelSchema = z.object({
  topic: z
    .string()
    .min(3, 'Topic must be at least 3 characters')
    .max(200, 'Topic must be at most 200 characters'),
  language: reelLanguageSchema.default('en'),
  style: reelStyleSchema.default('cinematic'),
  voice: reelVoiceSchema.default('nova'),
  duration: reelDurationSchema.default(30),
  projectId: z.string().cuid().optional(),
});

export type GenerateReelInput = z.infer<typeof generateReelSchema>;

export const paginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(20),
});

export type PaginationInput = z.infer<typeof paginationSchema>;

export const updateSettingsSchema = z.object({
  displayName: z.string().min(1).max(100).optional(),
  defaultLanguage: reelLanguageSchema.optional(),
  defaultStyle: reelStyleSchema.optional(),
  defaultVoice: reelVoiceSchema.optional(),
  defaultDuration: reelDurationSchema.optional(),
  theme: z.enum(['system', 'light', 'dark']).optional(),
  emailNotifications: z.boolean().optional(),
});

export type UpdateSettingsInput = z.infer<typeof updateSettingsSchema>;

export const idParamSchema = z.object({
  id: z.string().min(1),
});
