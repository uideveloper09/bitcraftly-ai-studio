import { Badge, Card, CardDescription, CardHeader, CardTitle, cn } from '@bitcraftly/ui';
import { UI_COPY } from '@bitcraftly/shared';
import type { SystemStatusItem } from '@/features/dashboard/mock-data';
import { studioCardClass } from '@/features/dashboard/dashboard-styles';

const statusVariant = {
  operational: 'success',
  degraded: 'warning',
  offline: 'danger',
} as const;

const statusDot = {
  operational: 'bg-[var(--color-success)]',
  degraded: 'bg-[var(--color-warning)]',
  offline: 'bg-[var(--color-danger)]',
} as const;

export function SystemStatusCard({ items }: { items: SystemStatusItem[] }) {
  return (
    <Card className={studioCardClass}>
      <CardHeader>
        <div>
          <CardTitle>{UI_COPY.SYSTEM_STATUS}</CardTitle>
          <CardDescription>{UI_COPY.ALL_SYSTEMS_OPERATIONAL}</CardDescription>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[color-mix(in_oklab,var(--color-success)_12%,white)] px-2.5 py-1 text-[11px] font-semibold text-[var(--color-success)] ring-1 ring-[color-mix(in_oklab,var(--color-success)_22%,transparent)]">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-[var(--color-success)] opacity-40 motion-reduce:animate-none" />
            <span className="relative inline-flex size-1.5 rounded-full bg-[var(--color-success)]" />
          </span>
          {UI_COPY.READY}
        </span>
      </CardHeader>
      <ul className="divide-y divide-[var(--border-glass)]">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between gap-[var(--space-3)] py-[var(--space-3)] first:pt-0 last:pb-0"
          >
            <div className="flex min-w-0 items-start gap-[var(--space-2)]">
              <span
                className={cn('mt-1.5 size-1.5 shrink-0 rounded-full', statusDot[item.status])}
                aria-hidden
              />
              <div>
                <p className="font-medium text-[var(--color-fg)] text-[var(--text-sm)]">
                  {item.name}
                </p>
                <p className="text-[var(--color-fg-subtle)] text-[var(--text-xs)]">
                  Latency {item.latency}
                </p>
              </div>
            </div>
            <Badge variant={statusVariant[item.status]}>{item.status}</Badge>
          </li>
        ))}
      </ul>
    </Card>
  );
}
