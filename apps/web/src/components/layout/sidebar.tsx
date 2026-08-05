'use client';

import { ROUTES, UI_COPY } from '@bitcraftly/shared';
import { Button, cn } from '@bitcraftly/ui';
import { BrandLogo } from '@/components/brand/brand-logo';
import { PanelLeftIcon } from '@/components/icons';
import { NavLinks } from '@/components/layout/nav-links';
import { useShell } from '@/providers/shell-provider';

export function Sidebar() {
  const { sidebarCollapsed, toggleSidebarCollapsed } = useShell();

  return (
    <aside
      className={cn(
        'flex h-full shrink-0 flex-col border-r border-[var(--color-border)] bg-[var(--color-surface)] transition-[width] duration-[var(--duration-normal)]',
        sidebarCollapsed ? 'w-[4.5rem]' : 'w-[var(--sidebar-width)]',
      )}
    >
      <div
        className={cn(
          'flex min-h-[var(--topbar-height)] items-center border-b border-[var(--color-border)] py-2',
          sidebarCollapsed ? 'justify-center px-2' : 'justify-between gap-2 px-[var(--space-3)]',
        )}
      >
        <BrandLogo href={ROUTES.STUDIO} compact={sidebarCollapsed} />
        {!sidebarCollapsed ? (
          <Button
            variant="ghost"
            size="sm"
            aria-label={UI_COPY.COLLAPSE_SIDEBAR}
            onClick={toggleSidebarCollapsed}
          >
            <PanelLeftIcon className="size-4" />
          </Button>
        ) : null}
      </div>

      <NavLinks collapsed={sidebarCollapsed} />

      <div className="border-t border-[var(--color-border)] p-[var(--space-3)]">
        {sidebarCollapsed ? (
          <Button
            variant="ghost"
            size="sm"
            className="w-full"
            aria-label={UI_COPY.EXPAND_SIDEBAR}
            onClick={toggleSidebarCollapsed}
          >
            <PanelLeftIcon className="size-4" />
          </Button>
        ) : (
          <div>
            <p className="text-[var(--color-fg-subtle)] text-[var(--text-xs)]">Workspace</p>
            <p className="mt-0.5 font-medium text-[var(--text-sm)]">{UI_COPY.WORKSPACE}</p>
          </div>
        )}
      </div>
    </aside>
  );
}
