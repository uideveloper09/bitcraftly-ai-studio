'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ROUTES, UI_COPY } from '@bitcraftly/shared';
import { Button, cn } from '@bitcraftly/ui';
import { ChevronDownIcon } from '@/components/icons';
import type { UserMenuProfile } from '@/types';

const DEFAULT_PROFILE: UserMenuProfile = {
  name: 'Demo User',
  email: 'demo@bitcraftly.com',
  initials: 'DU',
};

export function UserMenu({ profile = DEFAULT_PROFILE }: { profile?: UserMenuProfile }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <Button
        variant="ghost"
        size="sm"
        className="gap-2 pl-1"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="flex size-7 items-center justify-center rounded-full bg-[var(--color-surface-elevated)] font-semibold text-[var(--text-xs)]">
          {profile.initials}
        </span>
        <span className="hidden max-w-[8rem] truncate sm:inline">{profile.name}</span>
        <ChevronDownIcon className="size-3.5 opacity-60" />
      </Button>

      {open ? (
        <div
          role="menu"
          className={cn(
            'absolute right-0 top-full z-40 mt-2 w-56 overflow-hidden rounded-[var(--radius-xl)]',
            'animate-scale-in border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-md)]',
          )}
        >
          <div className="border-b border-[var(--color-border)] px-3 py-2.5">
            <p className="truncate font-medium text-[var(--text-sm)]">{profile.name}</p>
            <p className="truncate text-[var(--color-fg-muted)] text-[var(--text-xs)]">
              {profile.email}
            </p>
          </div>
          <div className="p-1">
            <Link
              role="menuitem"
              href={ROUTES.SETTINGS}
              className="block rounded-[var(--radius-md)] px-3 py-2 text-[var(--color-fg)] text-[var(--text-sm)] transition-colors hover:bg-[var(--color-surface-elevated)]"
              onClick={() => setOpen(false)}
            >
              {UI_COPY.PROFILE}
            </Link>
            <Link
              role="menuitem"
              href={ROUTES.SETTINGS}
              className="block rounded-[var(--radius-md)] px-3 py-2 text-[var(--color-fg)] text-[var(--text-sm)] transition-colors hover:bg-[var(--color-surface-elevated)]"
              onClick={() => setOpen(false)}
            >
              Account settings
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
