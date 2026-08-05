/**
 * Publisher Service — future multi-platform publishing (stub for Phase 1).
 */

export type PublishPlatform = 'instagram' | 'tiktok' | 'youtube' | 'linkedin';

export interface PublishRequest {
  mediaUrl: string;
  caption: string;
  platforms: PublishPlatform[];
}

export interface PublishResult {
  platform: PublishPlatform;
  success: boolean;
  externalId?: string;
  error?: string;
}

export interface PublisherService {
  publish(request: PublishRequest): Promise<PublishResult[]>;
}

/**
 * Mock publisher — records intent without calling social APIs.
 */
export class MockPublisherService implements PublisherService {
  async publish(request: PublishRequest): Promise<PublishResult[]> {
    return request.platforms.map((platform) => ({
      platform,
      success: true,
      externalId: `mock-${platform}-${Date.now()}`,
    }));
  }
}

export function createPublisherService(): PublisherService {
  return new MockPublisherService();
}

export {
  createAnalyticsService,
  MockAnalyticsService,
  type AnalyticsEvent,
  type AnalyticsService,
} from './analytics.service.js';
