import type { HTMLAttributes } from 'react';
import { cn } from '../lib/cn';

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  label?: string;
  variant?: 'default' | 'brand';
}

export function Progress({
  value,
  max = 100,
  label,
  variant = 'default',
  className,
  ...props
}: ProgressProps) {
  const clamped = Math.min(Math.max(value, 0), max);
  const percent = max === 0 ? 0 : Math.round((clamped / max) * 100);

  return (
    <div className={cn('flex flex-col gap-[var(--space-2)]', className)} {...props}>
      {label ? (
        <div className="flex items-center justify-between text-[var(--color-fg-muted)] text-[var(--text-xs)]">
          <span>{label}</span>
          <span className="tabular-nums">{percent}%</span>
        </div>
      ) : null}
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={clamped}
        aria-label={label}
        className="h-1.5 overflow-hidden rounded-[var(--radius-full)] bg-[var(--color-surface-elevated)]"
      >
        <div
          className={cn(
            'h-full rounded-[var(--radius-full)] transition-[width] duration-[var(--duration-normal)] ease-[var(--ease-out)]',
            variant === 'brand' ? 'bg-[image:var(--gradient-brand)]' : 'bg-[var(--color-accent)]',
          )}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
