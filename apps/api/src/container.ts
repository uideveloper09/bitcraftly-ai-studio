/**
 * Dependency container — wires providers and engines (simple DI).
 */

import { createAiProviders, createStorageProvider } from '@bitcraftly/ai';
import { createReelEngine, type ReelEngine } from '@bitcraftly/reel-engine';
import type { AiProviderRegistry, StorageProvider } from '@bitcraftly/ai';
import { env } from './config/env.js';

export interface AppContainer {
  ai: AiProviderRegistry;
  storage: StorageProvider;
  reelEngine: ReelEngine;
}

let container: AppContainer | undefined;

export function getContainer(): AppContainer {
  if (!container) {
    const ai = createAiProviders('mock');
    const storage = createStorageProvider('local', {
      basePath: env.storagePath,
      publicBaseUrl: `${env.apiUrl}/storage`,
    });
    container = {
      ai,
      storage,
      reelEngine: createReelEngine(ai),
    };
  }
  return container;
}
