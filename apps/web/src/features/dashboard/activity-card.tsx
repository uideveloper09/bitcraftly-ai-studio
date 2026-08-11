import { Badge, Card, CardDescription, CardHeader, CardTitle, cn } from '@bitcraftly/ui';
import { UI_COPY } from '@bitcraftly/shared';
import type { ActivityItem } from '@/features/dashboard/mock-data';
import { studioCardClass } from '@/features/dashboard/dashboard-styles';

const toneVariant = {
  default: 'default',
  success: 'success',
  warning: 'warning',
  info: 'info',
} as const;

const toneDot = {
  default: 'bg-[var(--color-fg-subtle)]',
  success:
    'bg-[var(--color-success)] shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-success)_18%,transparent)]',
  warning:
    'bg-[var(--color-warning)] shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-warning)_18%,transparent)]',
  info: 'bg-[var(--color-info)] shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-info)_18%,transparent)]',
} as const;

export function ActivityCard({ items }: { items: ActivityItem[] }) {
  return (
    <Card className={studioCardClass}>
      <CardHeader>
        <div>
          <CardTitle>{UI_COPY.RECENT_ACTIVITY}</CardTitle>
          <CardDescription>Latest events across your workspace</CardDescription>
        </div>
      </CardHeader>
      <ul className="space-y-[var(--space-1)]">
        {items.map((item) => (
          <li
            key={item.id}
            className={cn(
              'flex gap-[var(--space-3)] rounded-[var(--radius-xl)] px-[var(--space-2)] py-[var(--space-3)]',
              'transition-colors duration-[var(--duration-cta)] hover:bg-[color-mix(in_oklab,#eff6ff_55%,transparent)]',
            )}
          >
            <span
              className={cn('mt-2 size-1.5 shrink-0 rounded-full', toneDot[item.tone])}
              aria-hidden
            />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-[var(--space-2)]">
                <p className="font-medium text-[var(--color-fg)] text-[var(--text-sm)]">
                  {item.title}
                </p>
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
