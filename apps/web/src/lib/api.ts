/**
 * Typed API client for the Fastify backend.
 */

import type { ApiResponse, DashboardStats, GenerateReelInput } from '@bitcraftly/shared';
import { getApiUrl } from '@/lib/env';

async function request<T>(path: string, init?: RequestInit): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${getApiUrl()}${path}`, {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        ...init?.headers,
      },
      cache: 'no-store',
    });

    return (await response.json()) as ApiResponse<T>;
  } catch {
    return {
      success: false,
      error: {
        code: 'NETWORK_ERROR',
        message: 'Unable to reach the API. Is the backend running?',
      },
    };
  }
}

export interface ReelRecord {
  id: string;
  title: string;
  topic: string;
  language: string;
  style: string;
  voice: string;
  duration: number;
  status: string;
  thumbnailUrl: string | null;
  videoUrl: string | null;
  errorMessage: string | null;
  createdAt: string;
  completedAt: string | null;
  generations?: GenerationRecord[];
}

export interface GenerationRecord {
  id: string;
  status: string;
  progress: number;
  currentStep: string | null;
  reelId: string | null;
  createdAt: string;
  reel?: ReelRecord | null;
}

export interface ActivityRecord {
  id: string;
  type: string;
  message: string;
  createdAt: string;
}

export interface SettingsRecord {
  id: string;
  displayName: string | null;
  defaultLanguage: string;
  defaultStyle: string;
  defaultVoice: string;
  defaultDuration: number;
  theme: string;
  emailNotifications: boolean;
}

export const api = {
  getStats: () => request<DashboardStats>('/api/v1/stats'),
  getReels: (page = 1) => request<ReelRecord[]>(`/api/v1/reels?page=${page}&pageSize=20`),
  getReel: (id: string) => request<ReelRecord>(`/api/v1/reels/${id}`),
  generateReel: (input: GenerateReelInput) =>
    request<{ reel: ReelRecord; generation: GenerationRecord }>('/api/v1/reels/generate', {
      method: 'POST',
      body: JSON.stringify(input),
    }),
  getGenerations: () => request<GenerationRecord[]>('/api/v1/generations'),
  getGeneration: (id: string) => request<GenerationRecord>(`/api/v1/generations/${id}`),
  getActivity: () => request<ActivityRecord[]>('/api/v1/activity'),
  getSettings: () => request<SettingsRecord | null>('/api/v1/settings'),
  updateSettings: (data: Partial<SettingsRecord>) =>
    request<SettingsRecord>('/api/v1/settings', {
      method: 'PATCH',
      body: JSON.stringify(data),
    }),
};
