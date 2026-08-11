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
    <div className="relative flex min-h-screen bg-[var(--color-bg)]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute right-[-8%] top-[-12%] h-[42%] w-[46%] rounded-full bg-[radial-gradient(circle,rgba(147,197,253,0.09)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-6%] h-[36%] w-[40%] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.07)_0%,transparent_70%)] blur-3xl" />
      </div>

      <div className="relative z-10 hidden md:flex">
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

      <div className="relative z-10 flex min-w-0 flex-1 flex-col">
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
