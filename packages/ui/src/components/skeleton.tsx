import type { HTMLAttributes } from 'react';
import { cn } from '../lib/cn';

export type SkeletonProps = HTMLAttributes<HTMLDivElement>;

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn('animate-pulse rounded-xl bg-[var(--color-surface-elevated)]', className)}
      aria-hidden
      {...props}
    />
  );
}

export function Spinner({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn(
        'size-5 animate-spin rounded-full border-2 border-[var(--color-border)] border-t-[var(--color-accent)]',
        className,
      )}
      {...props}
    />
  );
}
