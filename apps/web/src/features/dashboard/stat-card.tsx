import { Card, Progress, cn } from '@bitcraftly/ui';
import { studioCardClass } from '@/features/dashboard/dashboard-styles';
import type { DashboardStat, StatTone } from '@/features/dashboard/mock-data';

const toneStyles: Record<StatTone, { badge: string; glow: string; value: string }> = {
  sky: {
    badge:
      'bg-[color-mix(in_oklab,#38bdf8_14%,white)] text-[#0284c7] ring-1 ring-[color-mix(in_oklab,#7dd3fc_40%,transparent)]',
    glow: 'from-[#e0f2fe]/70 to-transparent',
    value: 'text-[#0369a1]',
  },
  emerald: {
    badge:
      'bg-[color-mix(in_oklab,#34d399_14%,white)] text-[#059669] ring-1 ring-[color-mix(in_oklab,#6ee7b7_40%,transparent)]',
    glow: 'from-[#ecfdf5]/70 to-transparent',
    value: 'text-[#047857]',
  },
  violet: {
    badge:
      'bg-[color-mix(in_oklab,#a78bfa_14%,white)] text-[#7c3aed] ring-1 ring-[color-mix(in_oklab,#c4b5fd_40%,transparent)]',
    glow: 'from-[#f5f3ff]/70 to-transparent',
    value: 'text-[#6d28d9]',
  },
  amber: {
    badge:
      'bg-[color-mix(in_oklab,#fbbf24_16%,white)] text-[#d97706] ring-1 ring-[color-mix(in_oklab,#fcd34d_45%,transparent)]',
    glow: 'from-[#fffbeb]/70 to-transparent',
    value: 'text-[#b45309]',
  },
};

export function StatCard({ stat }: { stat: DashboardStat }) {
  const tone = toneStyles[stat.tone];

  return (
    <Card className={studioCardClass}>
      <div
        className={cn(
          'pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b',
          tone.glow,
        )}
        aria-hidden
      />
      <div className="relative">
        <div className="flex items-start justify-between gap-[var(--space-3)]">
          <p className="font-medium text-[var(--color-fg-muted)] text-[var(--text-sm)]">
            {stat.label}
          </p>
          <span
            className={cn(
              'inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide',
              tone.badge,
            )}
          >
            {stat.hint}
          </span>
        </div>
        <p
          className={cn(
            'mt-[var(--space-3)] font-semibold tabular-nums tracking-tight text-[var(--text-3xl)]',
            tone.value,
          )}
        >
          {stat.value}
        </p>
        <p className="mt-[var(--space-2)] text-[var(--color-fg-subtle)] text-[var(--text-xs)]">
          {stat.trend}
        </p>
        {typeof stat.progress === 'number' ? (
          <Progress
            value={stat.progress}
            variant="brand"
            className="mt-[var(--space-3)]"
            aria-label={`${stat.label} usage`}
          />
        ) : null}
      </div>
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
