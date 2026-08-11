import Link from 'next/link';
import { Card, CardDescription, CardHeader, CardTitle, cn } from '@bitcraftly/ui';
import { UI_COPY } from '@bitcraftly/shared';
import { ArrowRightIcon } from '@/components/icons';
import type { QuickAction } from '@/features/dashboard/mock-data';
import { studioCardClass } from '@/features/dashboard/dashboard-styles';

export function QuickActionsCard({ actions }: { actions: QuickAction[] }) {
  return (
    <Card className={studioCardClass}>
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
              className={cn(
                'group flex items-center justify-between gap-[var(--space-3)]',
                'rounded-[var(--radius-xl)] border border-[var(--border-glass)] bg-white/70',
                'px-[var(--space-4)] py-[var(--space-3)] shadow-[var(--shadow-xs)]',
                'transition-[transform,background-color,border-color,box-shadow] duration-[var(--duration-card)] ease-[var(--ease-premium)]',
                'hover:-translate-y-px hover:border-[var(--border-glass-strong)] hover:bg-[#f8fbff] hover:shadow-[var(--shadow-sm)]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-info)] focus-visible:ring-offset-2',
              )}
            >
              <span className="min-w-0">
                <span className="block font-medium text-[var(--color-fg)] text-[var(--text-sm)]">
                  {action.label}
                </span>
                <span className="mt-1 block text-[var(--color-fg-muted)] text-[var(--text-xs)]">
                  {action.description}
                </span>
              </span>
              <ArrowRightIcon className="size-4 shrink-0 text-[#93c5fd] transition-transform duration-[var(--duration-card)] group-hover:translate-x-1 group-hover:text-[#3b82f6]" />
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
}
