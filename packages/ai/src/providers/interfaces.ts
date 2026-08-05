/**
 * AI provider interfaces — swap implementations without changing business logic.
 */

import type {
  GeneratedImage,
  GeneratedScript,
  GeneratedVideo,
  GeneratedVoice,
  ReelInput,
  ReelVoice,
} from '@bitcraftly/shared';

export interface TextProvider {
  readonly name: string;
  generateScript(input: ReelInput): Promise<GeneratedScript>;
  generateTitle(topic: string): Promise<string>;
}

export interface ImageProvider {
  readonly name: string;
  generateImage(params: {
    prompt: string;
    sceneIndex: number;
    width?: number;
    height?: number;
  }): Promise<GeneratedImage>;
  generateImages(prompts: Array<{ prompt: string; sceneIndex: number }>): Promise<GeneratedImage[]>;
}

export interface VoiceProvider {
  readonly name: string;
  synthesize(params: { text: string; voice: ReelVoice }): Promise<GeneratedVoice>;
}

export interface VideoProvider {
  readonly name: string;
  render(params: {
    images: GeneratedImage[];
    voice: GeneratedVoice;
    script: GeneratedScript;
    duration: number;
  }): Promise<GeneratedVideo>;
}

export interface AiProviderRegistry {
  text: TextProvider;
  image: ImageProvider;
  voice: VoiceProvider;
  video: VideoProvider;
}
