import { BRAND_LINKS, LANDING_COPY, ROUTES, UI_COPY } from '@bitcraftly/shared';
import { LANDING_MAX_WIDTH_CLASS, LANDING_PADDING_X_CLASS } from '../landing.constants';
import type { HeaderActionItem, HeaderNavItem } from './header.types';

/** 88px — matches bitcraftly.com header bar */
export const HEADER_HEIGHT_CLASS = 'h-[5.5rem]' as const;

/** @deprecated Use LANDING_MAX_WIDTH_CLASS */
export const HEADER_MAX_WIDTH_CLASS = LANDING_MAX_WIDTH_CLASS;

/** @deprecated Use LANDING_PADDING_X_CLASS */
export const HEADER_PADDING_X_CLASS = LANDING_PADDING_X_CLASS;

/** 44px control height */
export const HEADER_CONTROL_HEIGHT_CLASS = 'h-11' as const;

/** Shared nav + CTA type size */
export const HEADER_TEXT_CLASS = 'text-[13px] leading-none font-medium tracking-[-0.01em]' as const;

export const HEADER_SCROLL_THRESHOLD_PX = 8 as const;

export const HEADER_NAV_ITEMS: readonly HeaderNavItem[] = [
  { id: 'modules', label: LANDING_COPY.NAV_MODULES, href: '#modules' },
  { id: 'studio', label: LANDING_COPY.NAV_STUDIO, href: ROUTES.STUDIO },
  { id: 'pricing', label: LANDING_COPY.NAV_PRICING, href: '#pricing' },
  {
    id: 'resources',
    label: LANDING_COPY.NAV_RESOURCES,
    href: '#resources',
    hasChevron: true,
  },
  { id: 'contact', label: LANDING_COPY.NAV_CONTACT, href: '#contact' },
] as const;

export const HEADER_RESOURCE_LINKS = [
  { href: BRAND_LINKS.WEBSITE, label: LANDING_COPY.RESOURCES_DOCS },
  { href: BRAND_LINKS.WEBSITE, label: LANDING_COPY.RESOURCES_BLOG },
  { href: BRAND_LINKS.WEBSITE, label: LANDING_COPY.RESOURCES_HELP },
  { href: BRAND_LINKS.WEBSITE, label: LANDING_COPY.RESOURCES_API },
  { href: BRAND_LINKS.WEBSITE, label: LANDING_COPY.RESOURCES_CHANGELOG },
] as const;

export const HEADER_SECONDARY_ACTION: HeaderActionItem = {
  id: 'explore-dashboard',
  label: UI_COPY.EXPLORE_DASHBOARD,
  href: ROUTES.STUDIO,
};

export const HEADER_PRIMARY_ACTION: HeaderActionItem = {
  id: 'generate-reel',
  label: UI_COPY.GENERATE_REEL,
  href: ROUTES.STUDIO_REELS,
};
