import type { HTMLAttributes } from 'react';
import { cn } from '../lib/cn';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-[var(--color-surface-elevated)] text-[var(--color-fg-muted)]',
  success: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400',
  warning: 'bg-amber-500/15 text-amber-700 dark:text-amber-400',
  danger: 'bg-red-500/15 text-red-600 dark:text-red-400',
  info: 'bg-sky-500/15 text-sky-700 dark:text-sky-400',
};

export function Badge({ variant = 'default', className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
