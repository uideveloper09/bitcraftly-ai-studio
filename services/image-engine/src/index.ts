/**
 * Image Engine — standalone image generation service interface.
 */

import type { ImageProvider } from '@bitcraftly/ai';
import type { GeneratedImage } from '@bitcraftly/shared';

export interface ImageService {
  generate(prompt: string, sceneIndex?: number): Promise<GeneratedImage>;
  generateBatch(prompts: string[]): Promise<GeneratedImage[]>;
}

export class DefaultImageService implements ImageService {
  constructor(private readonly provider: ImageProvider) {}

  async generate(prompt: string, sceneIndex = 0): Promise<GeneratedImage> {
    return this.provider.generateImage({ prompt, sceneIndex });
  }

  async generateBatch(prompts: string[]): Promise<GeneratedImage[]> {
    return this.provider.generateImages(
      prompts.map((prompt, sceneIndex) => ({ prompt, sceneIndex })),
    );
  }
}

export function createImageService(provider: ImageProvider): ImageService {
  return new DefaultImageService(provider);
}
