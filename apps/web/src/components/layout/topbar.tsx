'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { ROUTES, UI_COPY } from '@bitcraftly/shared';
import { Breadcrumbs, Button, Input, cn } from '@bitcraftly/ui';
import { BrandLogo } from '@/components/brand/brand-logo';
import { BellIcon, MenuIcon, SearchIcon, ThemeIcon } from '@/components/icons';
import { UserMenu } from '@/components/layout/user-menu';
import { useShell } from '@/providers/shell-provider';
import { getBreadcrumbs, getPageTitle } from '@/utils/navigation';

export function Topbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const { setMobileNavOpen } = useShell();
  const title = getPageTitle(pathname);
  const crumbs = getBreadcrumbs(pathname);

  return (
    <header className="sticky top-0 z-20 flex h-[var(--topbar-height)] shrink-0 items-center justify-between gap-[var(--space-4)] border-b border-[var(--border-glass)] bg-[color-mix(in_oklab,var(--color-surface)_78%,transparent)] px-[var(--space-4)] shadow-[var(--shadow-xs)] backdrop-blur-xl md:px-[var(--space-6)]">
      <div className="flex min-w-0 items-center gap-[var(--space-3)]">
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          aria-label={UI_COPY.OPEN_NAVIGATION}
          onClick={() => setMobileNavOpen(true)}
        >
          <MenuIcon className="size-4" />
        </Button>

        <div className="hidden min-w-0 lg:block">
          <BrandLogo href={ROUTES.STUDIO} />
        </div>

        <div className="min-w-0 lg:border-l lg:border-[var(--border-glass)] lg:pl-[var(--space-4)]">
          <Breadcrumbs
            className="hidden sm:block"
            items={crumbs}
            renderLink={(item, className) =>
              item.href ? (
                <Link href={item.href} className={className}>
                  {item.label}
                </Link>
              ) : null
            }
          />
          <h1 className="truncate font-semibold tracking-tight text-[var(--color-fg)] text-[var(--text-sm)] sm:mt-0.5">
            {title}
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-1 sm:gap-2">
        <div className={cn('relative hidden min-w-[12rem] md:block lg:min-w-[16rem]')}>
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[var(--color-fg-subtle)]" />
          <Input
            type="search"
            aria-label={UI_COPY.SEARCH_PLACEHOLDER}
            placeholder={UI_COPY.SEARCH_PLACEHOLDER}
            className="h-9 border-[var(--border-glass)] bg-white/80 pl-9 shadow-[var(--shadow-xs)]"
            disabled
          />
        </div>

        <Button
          variant="ghost"
          size="sm"
          aria-label={UI_COPY.NOTIFICATIONS}
          title={UI_COPY.NOTIFICATIONS}
        >
          <BellIcon className="size-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          aria-label="Toggle theme"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <ThemeIcon className="size-4" />
        </Button>
        <UserMenu />
      </div>
    </header>
  );
}
