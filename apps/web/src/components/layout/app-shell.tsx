'use client';

import type { ReactNode } from 'react';
import { Drawer } from '@bitcraftly/ui';
import { APP_SHORT_NAME } from '@bitcraftly/shared';
import { AppFooter } from '@/components/layout/app-footer';
import { NavLinks } from '@/components/layout/nav-links';
import { Sidebar } from '@/components/layout/sidebar';
import { Topbar } from '@/components/layout/topbar';
import { ShellProvider, useShell } from '@/providers/shell-provider';

function ShellFrame({ children }: { children: ReactNode }) {
  const { mobileNavOpen, setMobileNavOpen } = useShell();

  return (
    <div className="flex min-h-screen bg-[var(--color-bg)]">
      <div className="hidden md:flex">
        <Sidebar />
      </div>

      <Drawer
        open={mobileNavOpen}
        onOpenChange={setMobileNavOpen}
        title={APP_SHORT_NAME}
        side="left"
      >
        <NavLinks onNavigate={() => setMobileNavOpen(false)} />
      </Drawer>

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />
        <main className="flex-1 overflow-auto p-[var(--space-4)] md:p-[var(--space-6)] lg:p-[var(--space-8)]">
          {children}
        </main>
        <AppFooter />
      </div>
    </div>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <ShellProvider>
      <ShellFrame>{children}</ShellFrame>
    </ShellProvider>
  );
}
