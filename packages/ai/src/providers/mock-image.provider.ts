/**
 * Mock image provider — returns placeholder image URLs.
 */

import type { GeneratedImage } from '@bitcraftly/shared';
import { sleep } from '@bitcraftly/shared';
import type { ImageProvider } from './interfaces.js';

const DEFAULT_WIDTH = 1080;
const DEFAULT_HEIGHT = 1920;

export class MockImageProvider implements ImageProvider {
  readonly name = 'mock-image';

  async generateImage(params: {
    prompt: string;
    sceneIndex: number;
    width?: number;
    height?: number;
  }): Promise<GeneratedImage> {
    await sleep(300);

    const width = params.width ?? DEFAULT_WIDTH;
    const height = params.height ?? DEFAULT_HEIGHT;
    const seed = encodeURIComponent(params.prompt.slice(0, 40));

    return {
      sceneIndex: params.sceneIndex,
      url: `https://picsum.photos/seed/${seed}/${width}/${height}`,
      prompt: params.prompt,
      width,
      height,
    };
  }

  async generateImages(
    prompts: Array<{ prompt: string; sceneIndex: number }>,
  ): Promise<GeneratedImage[]> {
    const results: GeneratedImage[] = [];
    for (const item of prompts) {
      results.push(await this.generateImage(item));
    }
    return results;
  }
}
