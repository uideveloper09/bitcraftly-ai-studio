/**
 * Video Engine — standalone video render service interface.
 */

import type { VideoProvider } from '@bitcraftly/ai';
import type {
  GeneratedImage,
  GeneratedScript,
  GeneratedVideo,
  GeneratedVoice,
} from '@bitcraftly/shared';

export interface VideoRenderInput {
  images: GeneratedImage[];
  voice: GeneratedVoice;
  script: GeneratedScript;
  duration: number;
}

export interface VideoService {
  render(input: VideoRenderInput): Promise<GeneratedVideo>;
}

export class DefaultVideoService implements VideoService {
  constructor(private readonly provider: VideoProvider) {}

  async render(input: VideoRenderInput): Promise<GeneratedVideo> {
    return this.provider.render(input);
  }
}

export function createVideoService(provider: VideoProvider): VideoService {
  return new DefaultVideoService(provider);
}
