/**
 * Analytics Service — stub for future module metrics.
 */

export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, string | number | boolean>;
  userId?: string;
}

export interface AnalyticsService {
  track(event: AnalyticsEvent): Promise<void>;
  getSummary(userId: string): Promise<{
    totalEvents: number;
    lastEventAt: string | null;
  }>;
}

export class MockAnalyticsService implements AnalyticsService {
  private readonly events: AnalyticsEvent[] = [];

  async track(event: AnalyticsEvent): Promise<void> {
    this.events.push(event);
  }

  async getSummary(userId: string) {
    const filtered = this.events.filter((e) => e.userId === userId);
    const last = filtered.at(-1);
    return {
      totalEvents: filtered.length,
      lastEventAt: last ? new Date().toISOString() : null,
    };
  }
}

export function createAnalyticsService(): AnalyticsService {
  return new MockAnalyticsService();
}
