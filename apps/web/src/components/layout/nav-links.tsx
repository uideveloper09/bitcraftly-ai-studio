'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS, ROUTES } from '@bitcraftly/shared';
import { cn } from '@bitcraftly/ui';
import {
  AnalyticsIcon,
  DashboardIcon,
  ImagesIcon,
  PostsIcon,
  ReelsIcon,
  SettingsIcon,
  VideosIcon,
} from '@/components/icons';

const links = [
  { href: ROUTES.STUDIO, label: NAV_ITEMS.DASHBOARD, icon: DashboardIcon },
  { href: ROUTES.STUDIO_REELS, label: NAV_ITEMS.REELS, icon: ReelsIcon },
  { href: ROUTES.STUDIO_POSTS, label: NAV_ITEMS.POSTS, icon: PostsIcon },
  { href: ROUTES.STUDIO_IMAGES, label: NAV_ITEMS.IMAGES, icon: ImagesIcon },
  { href: ROUTES.STUDIO_VIDEOS, label: NAV_ITEMS.VIDEOS, icon: VideosIcon },
  { href: ROUTES.STUDIO_ANALYTICS, label: NAV_ITEMS.ANALYTICS, icon: AnalyticsIcon },
  { href: ROUTES.SETTINGS, label: NAV_ITEMS.SETTINGS, icon: SettingsIcon },
] as const;

export function NavLinks({
  onNavigate,
  collapsed = false,
}: {
  onNavigate?: () => void;
  collapsed?: boolean;
}) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-1 flex-col gap-0.5 p-[var(--space-3)]" aria-label="Studio navigation">
      {links.map(({ href, label, icon: Icon }) => {
        const active =
          href === ROUTES.STUDIO
            ? pathname === href
            : pathname === href || pathname.startsWith(`${href}/`);

        return (
          <Link
            key={href}
            href={href}
            onClick={onNavigate}
            title={collapsed ? label : undefined}
            className={cn(
              'flex items-center gap-2.5 rounded-[var(--radius-xl)] px-3 py-2 font-medium text-[var(--text-sm)]',
              'transition-[background-color,color,box-shadow] duration-[var(--duration-cta)] ease-[var(--ease-out)]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-info)] focus-visible:ring-offset-2',
              collapsed && 'justify-center px-2',
              active
                ? 'bg-[color-mix(in_oklab,#3b82f6_12%,white)] text-[#1d4ed8] shadow-[var(--shadow-xs)]'
                : 'text-[var(--color-fg-muted)] hover:bg-[color-mix(in_oklab,#eff6ff_80%,white)] hover:text-[#2563eb]',
            )}
            aria-current={active ? 'page' : undefined}
          >
            <Icon className={cn('size-4 shrink-0', active ? 'opacity-100' : 'opacity-70')} />
            {!collapsed ? <span>{label}</span> : <span className="sr-only">{label}</span>}
          </Link>
        );
      })}
    </nav>
  );
}
