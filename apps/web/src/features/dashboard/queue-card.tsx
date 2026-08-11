import { Badge, Card, CardDescription, CardHeader, CardTitle, Progress } from '@bitcraftly/ui';
import { UI_COPY } from '@bitcraftly/shared';
import type { QueueItem } from '@/features/dashboard/mock-data';
import { studioCardClass } from '@/features/dashboard/dashboard-styles';

export function QueueCard({ items }: { items: QueueItem[] }) {
  return (
    <Card className={studioCardClass}>
      <CardHeader>
        <div>
          <CardTitle>{UI_COPY.GENERATION_QUEUE}</CardTitle>
          <CardDescription>Active jobs in the pipeline</CardDescription>
        </div>
        <Badge variant="info">{items.length} live</Badge>
      </CardHeader>
      <ul className="space-y-[var(--space-3)]">
        {items.map((item) => (
          <li
            key={item.id}
            className="rounded-[var(--radius-xl)] border border-[var(--border-glass)] bg-white/75 p-[var(--space-3)] shadow-[var(--shadow-xs)]"
          >
            <div className="mb-[var(--space-2)] flex items-center justify-between gap-[var(--space-2)]">
              <div className="min-w-0">
                <p className="truncate font-medium text-[var(--color-fg)] text-[var(--text-sm)]">
                  {item.title}
                </p>
                <p className="text-[var(--color-fg-subtle)] text-[var(--text-xs)]">
                  {item.module} · {item.status}
                </p>
              </div>
              <Badge variant="info">{item.status}</Badge>
            </div>
            <Progress value={item.progress} variant="brand" label={item.status} />
          </li>
        ))}
      </ul>
    </Card>
  );
}
