'use client';

import { useEffect, useId, useRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../lib/cn';
import { Button } from './button';

export interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

export function Dialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  className,
}: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    const node = dialogRef.current;
    if (!node) return;

    if (open && !node.open) {
      node.showModal();
    } else if (!open && node.open) {
      node.close();
    }
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className={cn(
        'm-auto w-[min(100%-2rem,28rem)] rounded-[var(--radius-2xl)] border border-[var(--color-border)]',
        'bg-[var(--color-surface)] p-0 text-[var(--color-fg)] shadow-[var(--shadow-overlay)]',
        'open:animate-scale-in backdrop:bg-[var(--color-overlay)]',
        className,
      )}
      aria-labelledby={titleId}
      aria-describedby={description ? descriptionId : undefined}
      onClose={() => onOpenChange(false)}
      onClick={(event) => {
        if (event.target === dialogRef.current) {
          onOpenChange(false);
        }
      }}
    >
      <div className="flex flex-col gap-[var(--space-4)] p-[var(--space-6)]">
        <div className="flex items-start justify-between gap-[var(--space-3)]">
          <div>
            <h2 id={titleId} className="font-semibold tracking-tight text-[var(--text-lg)]">
              {title}
            </h2>
            {description ? (
              <p
                id={descriptionId}
                className="mt-[var(--space-1)] text-[var(--color-fg-muted)] text-[var(--text-sm)]"
              >
                {description}
              </p>
            ) : null}
          </div>
          <Button
            variant="ghost"
            size="sm"
            aria-label="Close dialog"
            onClick={() => onOpenChange(false)}
          >
            ✕
          </Button>
        </div>
        <div>{children}</div>
        {footer ? <div className="flex justify-end gap-[var(--space-2)]">{footer}</div> : null}
      </div>
    </dialog>
  );
}

export interface DialogTriggerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
