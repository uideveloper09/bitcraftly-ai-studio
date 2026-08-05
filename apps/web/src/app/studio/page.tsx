import type { Metadata } from 'next';
import Link from 'next/link';
import { ROUTES, UI_COPY } from '@bitcraftly/shared';
import { Button, Container, PageHeader, Section } from '@bitcraftly/ui';
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
          title={UI_COPY.STATISTICS}
          description="Overview of your AI content workspace"
          actions={
            <Link href={ROUTES.STUDIO_REELS}>
              <Button>{UI_COPY.GENERATE_REEL}</Button>
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
