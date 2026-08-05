import Link from 'next/link';
import { Card, CardDescription, CardHeader, CardTitle } from '@bitcraftly/ui';
import { UI_COPY } from '@bitcraftly/shared';
import type { QuickAction } from '@/features/dashboard/mock-data';

export function QuickActionsCard({ actions }: { actions: QuickAction[] }) {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>{UI_COPY.QUICK_ACTIONS}</CardTitle>
          <CardDescription>Jump into common workflows</CardDescription>
        </div>
      </CardHeader>
      <ul className="space-y-[var(--space-2)]">
        {actions.map((action) => (
          <li key={action.id}>
            <Link
              href={action.href}
              className="block rounded-[var(--radius-xl)] border border-[var(--color-border)] px-[var(--space-4)] py-[var(--space-3)] transition-colors hover:bg-[var(--color-surface-elevated)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
            >
              <p className="font-medium text-[var(--text-sm)]">{action.label}</p>
              <p className="mt-1 text-[var(--color-fg-muted)] text-[var(--text-xs)]">
                {action.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
}
