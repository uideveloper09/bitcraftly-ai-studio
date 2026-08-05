/**
 * Script Service — thin façade over TextProvider for script generation.
 */

import type { TextProvider } from '@bitcraftly/ai';
import type { GeneratedScript, ReelInput } from '@bitcraftly/shared';

export interface ScriptService {
  generateTitle(topic: string): Promise<string>;
  generateScript(input: ReelInput): Promise<GeneratedScript>;
}

export class DefaultScriptService implements ScriptService {
  constructor(private readonly provider: TextProvider) {}

  generateTitle(topic: string): Promise<string> {
    return this.provider.generateTitle(topic);
  }

  generateScript(input: ReelInput): Promise<GeneratedScript> {
    return this.provider.generateScript(input);
  }
}

export function createScriptService(provider: TextProvider): ScriptService {
  return new DefaultScriptService(provider);
}
