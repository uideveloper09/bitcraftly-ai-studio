import type { ReactNode } from 'react';
import { cn } from '../lib/cn';

export interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: ReactNode;
  className?: string;
}

export function PageHeader({ title, description, actions, className }: PageHeaderProps) {
  return (
    <div className={cn('flex flex-wrap items-end justify-between gap-[var(--space-4)]', className)}>
      <div className="min-w-0">
        <h1 className="font-semibold tracking-tight text-[var(--color-fg)] text-[var(--text-2xl)]">
          {title}
        </h1>
        {description ? (
          <p className="mt-[var(--space-1)] text-[var(--color-fg-muted)] text-[var(--text-sm)]">
            {description}
          </p>
        ) : null}
      </div>
      {actions ? (
        <div className="flex flex-wrap items-center gap-[var(--space-2)]">{actions}</div>
      ) : null}
    </div>
  );
}
