import { Badge, Card, CardDescription, CardHeader, CardTitle } from '@bitcraftly/ui';
import { UI_COPY } from '@bitcraftly/shared';
import type { SystemStatusItem } from '@/features/dashboard/mock-data';

const statusVariant = {
  operational: 'success',
  degraded: 'warning',
  offline: 'danger',
} as const;

export function SystemStatusCard({ items }: { items: SystemStatusItem[] }) {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>{UI_COPY.SYSTEM_STATUS}</CardTitle>
          <CardDescription>{UI_COPY.ALL_SYSTEMS_OPERATIONAL}</CardDescription>
        </div>
        <Badge variant="success">{UI_COPY.READY}</Badge>
      </CardHeader>
      <ul className="divide-y divide-[var(--color-border)]">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between gap-[var(--space-3)] py-[var(--space-3)] first:pt-0 last:pb-0"
          >
            <div>
              <p className="font-medium text-[var(--text-sm)]">{item.name}</p>
              <p className="text-[var(--color-fg-subtle)] text-[var(--text-xs)]">
                Latency {item.latency}
              </p>
            </div>
            <Badge variant={statusVariant[item.status]}>{item.status}</Badge>
          </li>
        ))}
      </ul>
    </Card>
  );
}
