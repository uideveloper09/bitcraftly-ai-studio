/**
 * Mock video provider — simulates a render pipeline.
 */

import type {
  GeneratedImage,
  GeneratedScript,
  GeneratedVideo,
  GeneratedVoice,
} from '@bitcraftly/shared';
import { sleep, slugify } from '@bitcraftly/shared';
import type { VideoProvider } from './interfaces.js';

export class MockVideoProvider implements VideoProvider {
  readonly name = 'mock-video';

  async render(params: {
    images: GeneratedImage[];
    voice: GeneratedVoice;
    script: GeneratedScript;
    duration: number;
  }): Promise<GeneratedVideo> {
    await sleep(500);

    const slug = slugify(params.script.title) || 'reel';
    const id = `${slug}-${Date.now()}`;

    return {
      url: `mock://video/${id}.mp4`,
      thumbnailUrl: params.images[0]?.url ?? `https://picsum.photos/seed/${id}/1080/1920`,
      durationSeconds: params.duration,
      width: 1080,
      height: 1920,
      format: 'mp4',
    };
  }
}
