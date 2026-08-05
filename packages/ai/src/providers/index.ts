/**
 * Factory for AI providers — select via env without touching business logic.
 */

import type { AiProviderRegistry } from './interfaces.js';
import { MockImageProvider } from './mock-image.provider.js';
import { MockTextProvider } from './mock-text.provider.js';
import { MockVideoProvider } from './mock-video.provider.js';
import { MockVoiceProvider } from './mock-voice.provider.js';

export type ProviderKind = 'mock';

export function createAiProviders(_kind: ProviderKind = 'mock'): AiProviderRegistry {
  return {
    text: new MockTextProvider(),
    image: new MockImageProvider(),
    voice: new MockVoiceProvider(),
    video: new MockVideoProvider(),
  };
}

export * from './interfaces.js';
export { MockTextProvider } from './mock-text.provider.js';
export { MockImageProvider } from './mock-image.provider.js';
export { MockVoiceProvider } from './mock-voice.provider.js';
export { MockVideoProvider } from './mock-video.provider.js';
