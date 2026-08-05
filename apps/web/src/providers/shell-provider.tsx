'use client';

/**
 * UI shell context — navigation chrome only (no business state).
 */

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

interface ShellContextValue {
  mobileNavOpen: boolean;
  setMobileNavOpen: (open: boolean) => void;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;
  toggleSidebarCollapsed: () => void;
}

const ShellContext = createContext<ShellContextValue | null>(null);

export function ShellProvider({ children }: { children: ReactNode }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const value = useMemo(
    () => ({
      mobileNavOpen,
      setMobileNavOpen,
      sidebarCollapsed,
      setSidebarCollapsed,
      toggleSidebarCollapsed: () => setSidebarCollapsed((current) => !current),
    }),
    [mobileNavOpen, sidebarCollapsed],
  );

  return <ShellContext.Provider value={value}>{children}</ShellContext.Provider>;
}

export function useShell(): ShellContextValue {
  const context = useContext(ShellContext);
  if (!context) {
    throw new Error('useShell must be used within ShellProvider');
  }
  return context;
}
