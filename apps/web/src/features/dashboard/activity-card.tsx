import { Badge, Card, CardDescription, CardHeader, CardTitle } from '@bitcraftly/ui';
import { UI_COPY } from '@bitcraftly/shared';
import type { ActivityItem } from '@/features/dashboard/mock-data';

const toneVariant = {
  default: 'default',
  success: 'success',
  warning: 'warning',
  info: 'info',
} as const;

export function ActivityCard({ items }: { items: ActivityItem[] }) {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>{UI_COPY.RECENT_ACTIVITY}</CardTitle>
          <CardDescription>Latest events across your workspace</CardDescription>
        </div>
      </CardHeader>
      <ul className="space-y-[var(--space-4)]">
        {items.map((item) => (
          <li key={item.id} className="flex gap-[var(--space-3)]">
            <span
              className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--color-fg-subtle)]"
              aria-hidden
            />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-[var(--space-2)]">
                <p className="font-medium text-[var(--text-sm)]">{item.title}</p>
                <Badge variant={toneVariant[item.tone]}>{item.time}</Badge>
              </div>
              <p className="mt-1 text-[var(--color-fg-muted)] text-[var(--text-sm)]">
                {item.detail}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
