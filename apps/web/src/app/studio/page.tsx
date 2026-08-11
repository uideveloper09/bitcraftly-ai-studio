import type { Metadata } from 'next';
import Link from 'next/link';
import { ROUTES, UI_COPY } from '@bitcraftly/shared';
import { Button, Container, PageHeader, Section } from '@bitcraftly/ui';
import { BoltIcon } from '@/components/icons';
import { ActivityCard } from '@/features/dashboard/activity-card';
import {
  DASHBOARD_STATS,
  GENERATION_QUEUE,
  QUICK_ACTIONS,
  RECENT_ACTIVITY,
  SYSTEM_STATUS,
} from '@/features/dashboard/mock-data';
import { QueueCard } from '@/features/dashboard/queue-card';
import { QuickActionsCard } from '@/features/dashboard/quick-actions-card';
import { StatCardGrid } from '@/features/dashboard/stat-card';
import { SystemStatusCard } from '@/features/dashboard/system-status-card';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function StudioDashboardPage() {
  return (
    <Container>
      <Section>
        <PageHeader
          className="rounded-[1.25rem] border border-[var(--border-glass)] bg-[color-mix(in_oklab,var(--color-surface)_90%,transparent)] px-[var(--space-5)] py-[var(--space-4)] shadow-[var(--shadow-dashboard)] backdrop-blur-sm"
          title={UI_COPY.STATISTICS}
          description="Overview of your AI content workspace"
          actions={
            <Link
              href={ROUTES.STUDIO_REELS}
              className="inline-flex rounded-[0.875rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-info)] focus-visible:ring-offset-2"
            >
              <Button variant="brand" className="rounded-[0.875rem]" tabIndex={-1}>
                <BoltIcon className="size-3.5 shrink-0" aria-hidden />
                {UI_COPY.GENERATE_REEL}
              </Button>
            </Link>
          }
        />

        <StatCardGrid stats={DASHBOARD_STATS} />

        <div className="grid gap-[var(--space-6)] lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ActivityCard items={RECENT_ACTIVITY} />
          </div>
          <div className="lg:col-span-2">
            <QueueCard items={GENERATION_QUEUE} />
          </div>
        </div>

        <div className="grid gap-[var(--space-6)] lg:grid-cols-2">
          <QuickActionsCard actions={QUICK_ACTIONS} />
          <SystemStatusCard items={SYSTEM_STATUS} />
        </div>
      </Section>
    </Container>
  );
}
