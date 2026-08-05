'use client';

import { useEffect, type ReactNode } from 'react';
import { cn } from '../lib/cn';
import { Button } from './button';

export interface DrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  children: ReactNode;
  side?: 'left' | 'right';
  className?: string;
}

export function Drawer({
  open,
  onOpenChange,
  title,
  children,
  side = 'left',
  className,
}: DrawerProps) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onOpenChange(false);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50" role="presentation">
      <button
        type="button"
        className="animate-fade-in absolute inset-0 bg-[var(--color-overlay)]"
        aria-label="Close navigation drawer"
        onClick={() => onOpenChange(false)}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={title ?? 'Drawer'}
        className={cn(
          'absolute top-0 flex h-full w-[min(100%,var(--sidebar-width))] flex-col',
          'border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-lg)]',
          'animate-slide-in-left',
          side === 'left' ? 'left-0 border-r' : 'right-0 border-l',
          className,
        )}
      >
        {title ? (
          <div className="flex h-[var(--topbar-height)] items-center justify-between border-b border-[var(--color-border)] px-[var(--space-4)]">
            <p className="font-semibold text-[var(--text-sm)]">{title}</p>
            <Button
              variant="ghost"
              size="sm"
              aria-label="Close"
              onClick={() => onOpenChange(false)}
            >
              ✕
            </Button>
          </div>
        ) : null}
        <div className="flex-1 overflow-y-auto">{children}</div>
      </aside>
    </div>
  );
}
