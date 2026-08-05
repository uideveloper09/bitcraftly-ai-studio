/**
 * Mock voice provider — simulates TTS without external APIs.
 */

import type { GeneratedVoice, ReelVoice } from '@bitcraftly/shared';
import { sleep } from '@bitcraftly/shared';
import type { VoiceProvider } from './interfaces.js';

export class MockVoiceProvider implements VoiceProvider {
  readonly name = 'mock-voice';

  async synthesize(params: { text: string; voice: ReelVoice }): Promise<GeneratedVoice> {
    await sleep(350);

    // Rough estimate: ~150 words per minute → ~2.5 words/sec
    const wordCount = params.text.split(/\s+/).filter(Boolean).length;
    const durationSeconds = Math.max(3, Number((wordCount / 2.5).toFixed(2)));

    return {
      url: `mock://audio/${params.voice}/${Buffer.from(params.text).toString('base64url').slice(0, 24)}.mp3`,
      durationSeconds,
      voice: params.voice,
      format: 'mp3',
    };
  }
}
