/**
 * Voice Engine — standalone TTS service interface.
 */

import type { VoiceProvider } from '@bitcraftly/ai';
import type { GeneratedVoice, ReelVoice } from '@bitcraftly/shared';

export interface VoiceService {
  synthesize(text: string, voice: ReelVoice): Promise<GeneratedVoice>;
}

export class DefaultVoiceService implements VoiceService {
  constructor(private readonly provider: VoiceProvider) {}

  async synthesize(text: string, voice: ReelVoice): Promise<GeneratedVoice> {
    return this.provider.synthesize({ text, voice });
  }
}

export function createVoiceService(provider: VoiceProvider): VoiceService {
  return new DefaultVoiceService(provider);
}
