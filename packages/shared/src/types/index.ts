/**
 * Shared domain types for Bitcraftly AI Studio.
 */

import type {
  ACTIVITY_TYPE,
  GENERATION_STATUS,
  MEDIA_TYPE,
  MODULE_IDS,
} from '../constants/index.js';

export type ModuleId = (typeof MODULE_IDS)[keyof typeof MODULE_IDS];
export type GenerationStatus = (typeof GENERATION_STATUS)[keyof typeof GENERATION_STATUS];
export type MediaType = (typeof MEDIA_TYPE)[keyof typeof MEDIA_TYPE];
export type ActivityType = (typeof ACTIVITY_TYPE)[keyof typeof ACTIVITY_TYPE];

export type ReelLanguage = 'en' | 'es' | 'fr' | 'de' | 'hi' | 'pt' | 'ja' | 'ko';

export type ReelStyle =
  'cinematic' | 'minimal' | 'energetic' | 'educational' | 'storytelling' | 'corporate';

export type ReelVoice = 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer';

export type ReelDuration = 15 | 30 | 45 | 60;

export interface ReelInput {
  topic: string;
  language: ReelLanguage;
  style: ReelStyle;
  voice: ReelVoice;
  duration: ReelDuration;
  projectId?: string;
}

export interface ScriptScene {
  index: number;
  narration: string;
  visualPrompt: string;
  durationSeconds: number;
}

export interface GeneratedScript {
  title: string;
  hook: string;
  scenes: ScriptScene[];
  fullNarration: string;
}

export interface GeneratedImage {
  sceneIndex: number;
  url: string;
  prompt: string;
  width: number;
  height: number;
}

export interface GeneratedVoice {
  url: string;
  durationSeconds: number;
  voice: ReelVoice;
  format: 'mp3' | 'wav';
}

export interface GeneratedVideo {
  url: string;
  thumbnailUrl: string;
  durationSeconds: number;
  width: number;
  height: number;
  format: 'mp4';
}

export interface ApiSuccessResponse<T> {
  success: true;
  data: T;
  meta?: Record<string, unknown>;
}

export interface ApiErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

export interface PaginatedMeta {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

export interface DashboardStats {
  totalReels: number;
  completedReels: number;
  processingReels: number;
  failedReels: number;
  totalGenerations: number;
}

export interface StorageObject {
  key: string;
  url: string;
  mimeType: string;
  sizeBytes: number;
}
