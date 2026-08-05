import type { ReactNode } from 'react';
import { cn } from '../lib/cn';

export interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
  className?: string;
}

export function EmptyState({ title, description, icon, action, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center rounded-[var(--radius-2xl)] border border-dashed border-[var(--color-border)]',
        'bg-[var(--color-surface)] px-[var(--space-8)] py-[var(--space-12)] text-center',
        className,
      )}
    >
      {icon ? (
        <div className="mb-[var(--space-4)] text-[var(--color-fg-subtle)]" aria-hidden>
          {icon}
        </div>
      ) : null}
      <h3 className="font-semibold tracking-tight text-[var(--color-fg)] text-[var(--text-base)]">
        {title}
      </h3>
      {description ? (
        <p className="mt-[var(--space-2)] max-w-sm text-[var(--color-fg-muted)] text-[var(--text-sm)]">
          {description}
        </p>
      ) : null}
      {action ? <div className="mt-[var(--space-5)]">{action}</div> : null}
    </div>
  );
}
