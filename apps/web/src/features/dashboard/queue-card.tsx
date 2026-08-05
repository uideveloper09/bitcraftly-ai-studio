import { Card, CardDescription, CardHeader, CardTitle, Progress } from '@bitcraftly/ui';
import { UI_COPY } from '@bitcraftly/shared';
import type { QueueItem } from '@/features/dashboard/mock-data';

export function QueueCard({ items }: { items: QueueItem[] }) {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>{UI_COPY.GENERATION_QUEUE}</CardTitle>
          <CardDescription>Active jobs in the pipeline</CardDescription>
        </div>
      </CardHeader>
      <ul className="space-y-[var(--space-4)]">
        {items.map((item) => (
          <li
            key={item.id}
            className="rounded-[var(--radius-xl)] bg-[var(--color-surface-elevated)] p-[var(--space-3)]"
          >
            <div className="mb-[var(--space-2)] flex items-center justify-between gap-[var(--space-2)]">
              <div className="min-w-0">
                <p className="truncate font-medium text-[var(--text-sm)]">{item.title}</p>
                <p className="text-[var(--color-fg-subtle)] text-[var(--text-xs)]">
                  {item.module} · {item.status}
                </p>
              </div>
            </div>
            <Progress value={item.progress} label={item.status} />
          </li>
        ))}
      </ul>
    </Card>
  );
}
