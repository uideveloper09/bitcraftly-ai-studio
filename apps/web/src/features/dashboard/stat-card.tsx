import { Badge, Card, cn } from '@bitcraftly/ui';
import type { DashboardStat } from '@/features/dashboard/mock-data';

export function StatCard({ stat }: { stat: DashboardStat }) {
  return (
    <Card className="transition-transform duration-[var(--duration-normal)] hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-[var(--space-3)]">
        <p className="text-[var(--color-fg-muted)] text-[var(--text-sm)]">{stat.label}</p>
        <Badge variant="info">{stat.hint}</Badge>
      </div>
      <p className="mt-[var(--space-3)] font-semibold tabular-nums tracking-tight text-[var(--text-3xl)]">
        {stat.value}
      </p>
      <p className="mt-[var(--space-2)] text-[var(--color-fg-subtle)] text-[var(--text-xs)]">
        {stat.trend}
      </p>
    </Card>
  );
}

export function StatCardGrid({ stats }: { stats: DashboardStat[] }) {
  return (
    <div className={cn('grid gap-[var(--space-4)] sm:grid-cols-2 xl:grid-cols-4')}>
      {stats.map((stat) => (
        <StatCard key={stat.id} stat={stat} />
      ))}
    </div>
  );
}
