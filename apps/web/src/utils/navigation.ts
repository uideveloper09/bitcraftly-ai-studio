/**
 * Client-safe path helpers for the web app.
 */

import { NAV_ITEMS, ROUTES } from '@bitcraftly/shared';
import type { BreadcrumbEntry } from '@/types';

const TITLE_MAP: Record<string, string> = {
  [ROUTES.STUDIO]: NAV_ITEMS.DASHBOARD,
  [ROUTES.STUDIO_REELS]: NAV_ITEMS.REELS,
  [ROUTES.STUDIO_POSTS]: NAV_ITEMS.POSTS,
  [ROUTES.STUDIO_IMAGES]: NAV_ITEMS.IMAGES,
  [ROUTES.STUDIO_VIDEOS]: NAV_ITEMS.VIDEOS,
  [ROUTES.STUDIO_ANALYTICS]: NAV_ITEMS.ANALYTICS,
  [ROUTES.SETTINGS]: NAV_ITEMS.SETTINGS,
};

export function getPageTitle(pathname: string): string {
  return TITLE_MAP[pathname] ?? 'Studio';
}

export function getBreadcrumbs(pathname: string): BreadcrumbEntry[] {
  if (pathname === ROUTES.STUDIO) {
    return [{ label: 'Studio' }, { label: NAV_ITEMS.DASHBOARD }];
  }

  const modules: Array<{ prefix: string; label: string }> = [
    { prefix: ROUTES.STUDIO_REELS, label: NAV_ITEMS.REELS },
    { prefix: ROUTES.STUDIO_POSTS, label: NAV_ITEMS.POSTS },
    { prefix: ROUTES.STUDIO_IMAGES, label: NAV_ITEMS.IMAGES },
    { prefix: ROUTES.STUDIO_VIDEOS, label: NAV_ITEMS.VIDEOS },
    { prefix: ROUTES.STUDIO_ANALYTICS, label: NAV_ITEMS.ANALYTICS },
    { prefix: ROUTES.SETTINGS, label: NAV_ITEMS.SETTINGS },
  ];

  for (const entry of modules) {
    if (pathname === entry.prefix || pathname.startsWith(`${entry.prefix}/`)) {
      return [{ label: 'Studio', href: ROUTES.STUDIO }, { label: entry.label }];
    }
  }

  return [{ label: 'Studio' }];
}
