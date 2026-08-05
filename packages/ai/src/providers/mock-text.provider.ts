/**
 * Mock text provider — generates deterministic scripts without paid APIs.
 */

import type { GeneratedScript, ReelInput, ScriptScene } from '@bitcraftly/shared';
import { sleep } from '@bitcraftly/shared';
import type { TextProvider } from './interfaces.js';

const STYLE_HOOKS: Record<string, string> = {
  cinematic: 'In a world where',
  minimal: 'Simply put:',
  energetic: "Ready? Let's go!",
  educational: 'Did you know that',
  storytelling: 'Once upon a time,',
  corporate: "Here's what matters:",
};

export class MockTextProvider implements TextProvider {
  readonly name = 'mock-text';

  async generateTitle(topic: string): Promise<string> {
    await sleep(200);
    const trimmed = topic.trim();
    return trimmed.length > 60 ? `${trimmed.slice(0, 57)}…` : trimmed;
  }

  async generateScript(input: ReelInput): Promise<GeneratedScript> {
    await sleep(400);

    const title = await this.generateTitle(input.topic);
    const hook = STYLE_HOOKS[input.style] ?? STYLE_HOOKS['cinematic'] ?? 'Discover';
    const sceneCount = Math.max(3, Math.floor(input.duration / 10));
    const sceneDuration = input.duration / sceneCount;

    const scenes: ScriptScene[] = Array.from({ length: sceneCount }, (_, index) => {
      const sceneNumber = index + 1;
      return {
        index,
        narration: this.buildNarration(input.topic, sceneNumber, sceneCount, input.language),
        visualPrompt: this.buildVisualPrompt(input.topic, input.style, sceneNumber),
        durationSeconds: Number(sceneDuration.toFixed(2)),
      };
    });

    const fullNarration = scenes.map((s) => s.narration).join(' ');

    return {
      title,
      hook: `${hook} ${input.topic}.`,
      scenes,
      fullNarration,
    };
  }

  private buildNarration(
    topic: string,
    sceneNumber: number,
    total: number,
    language: string,
  ): string {
    const langNote = language === 'en' ? '' : ` [${language}]`;
    if (sceneNumber === 1) {
      return `Welcome — today we explore ${topic}.${langNote}`;
    }
    if (sceneNumber === total) {
      return `That's the essence of ${topic}. Follow for more.${langNote}`;
    }
    return `Key insight ${sceneNumber - 1}: ${topic} shapes how we create and connect.${langNote}`;
  }

  private buildVisualPrompt(topic: string, style: string, sceneNumber: number): string {
    return `${style} style visual for "${topic}", scene ${sceneNumber}, vertical 9:16, high quality, no text overlay`;
  }
}
