/**
 * Reel Engine — orchestrates the full reel generation pipeline.
 *
 * Topic → Script → Images → Voice → Video → Preview/Download
 */

import type { AiProviderRegistry } from '@bitcraftly/ai';
import type {
  GeneratedImage,
  GeneratedScript,
  GeneratedVideo,
  GeneratedVoice,
  ReelInput,
} from '@bitcraftly/shared';
import { GENERATION_STATUS } from '@bitcraftly/shared';

export type ReelPipelineStep =
  | typeof GENERATION_STATUS.SCRIPTING
  | typeof GENERATION_STATUS.IMAGING
  | typeof GENERATION_STATUS.VOICING
  | typeof GENERATION_STATUS.RENDERING
  | typeof GENERATION_STATUS.COMPLETED;

export interface ReelPipelineProgress {
  step: ReelPipelineStep;
  progress: number;
  message: string;
}

export interface ReelPipelineResult {
  script: GeneratedScript;
  images: GeneratedImage[];
  voice: GeneratedVoice;
  video: GeneratedVideo;
}

export type ProgressCallback = (progress: ReelPipelineProgress) => void | Promise<void>;

export interface ReelEngine {
  generate(input: ReelInput, onProgress?: ProgressCallback): Promise<ReelPipelineResult>;
}

export class DefaultReelEngine implements ReelEngine {
  constructor(private readonly providers: AiProviderRegistry) {}

  async generate(input: ReelInput, onProgress?: ProgressCallback): Promise<ReelPipelineResult> {
    await onProgress?.({
      step: GENERATION_STATUS.SCRIPTING,
      progress: 10,
      message: 'Generating script…',
    });

    const script = await this.providers.text.generateScript(input);

    await onProgress?.({
      step: GENERATION_STATUS.IMAGING,
      progress: 35,
      message: 'Generating images…',
    });

    const images = await this.providers.image.generateImages(
      script.scenes.map((scene) => ({
        prompt: scene.visualPrompt,
        sceneIndex: scene.index,
      })),
    );

    await onProgress?.({
      step: GENERATION_STATUS.VOICING,
      progress: 60,
      message: 'Synthesizing voice…',
    });

    const voice = await this.providers.voice.synthesize({
      text: script.fullNarration,
      voice: input.voice,
    });

    await onProgress?.({
      step: GENERATION_STATUS.RENDERING,
      progress: 85,
      message: 'Rendering video…',
    });

    const video = await this.providers.video.render({
      images,
      voice,
      script,
      duration: input.duration,
    });

    await onProgress?.({
      step: GENERATION_STATUS.COMPLETED,
      progress: 100,
      message: 'Reel ready',
    });

    return { script, images, voice, video };
  }
}

export function createReelEngine(providers: AiProviderRegistry): ReelEngine {
  return new DefaultReelEngine(providers);
}

export { createScriptService, DefaultScriptService, type ScriptService } from './script.service.js';
