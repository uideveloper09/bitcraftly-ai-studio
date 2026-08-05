'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { BRAND_LINKS, LANDING_COPY, ROUTES, UI_COPY } from '@bitcraftly/shared';
import { Button, cn } from '@bitcraftly/ui';
import { BrandLogo } from '@/components/brand/brand-logo';
import { BoltIcon, ChevronDownIcon, MenuIcon } from '@/components/icons';

const NAV = [
  { href: '#modules', label: LANDING_COPY.NAV_MODULES },
  { href: ROUTES.STUDIO, label: LANDING_COPY.NAV_STUDIO },
  { href: '#pricing', label: LANDING_COPY.NAV_PRICING },
  { href: '#contact', label: LANDING_COPY.NAV_CONTACT },
] as const;

const RESOURCE_LINKS = [
  { href: BRAND_LINKS.WEBSITE, label: LANDING_COPY.RESOURCES_DOCS },
  { href: BRAND_LINKS.WEBSITE, label: LANDING_COPY.RESOURCES_BLOG },
  { href: BRAND_LINKS.WEBSITE, label: LANDING_COPY.RESOURCES_HELP },
  { href: BRAND_LINKS.WEBSITE, label: LANDING_COPY.RESOURCES_API },
  { href: BRAND_LINKS.WEBSITE, label: LANDING_COPY.RESOURCES_CHANGELOG },
] as const;

const navLinkClass =
  'rounded-full px-3.5 py-2 text-[13px] font-medium text-[var(--color-fg-muted)] transition-colors hover:bg-white/80 hover:text-[var(--color-fg)]';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!resourcesOpen) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!resourcesRef.current?.contains(event.target as Node)) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, [resourcesOpen]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300',
        scrolled
          ? 'border-violet-100/80 bg-white/70 shadow-[0_8px_30px_rgb(99_102_241/0.08)] backdrop-blur-2xl'
          : 'border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:h-[4.25rem] lg:px-8">
        <BrandLogo href={ROUTES.HOME} priority />

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {NAV.slice(0, 3).map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass}>
              {item.label}
            </Link>
          ))}

          <div ref={resourcesRef} className="relative">
            <button
              type="button"
              className={cn(navLinkClass, 'inline-flex items-center gap-1')}
              aria-expanded={resourcesOpen}
              aria-haspopup="menu"
              onClick={() => setResourcesOpen((value) => !value)}
            >
              {LANDING_COPY.NAV_RESOURCES}
              <ChevronDownIcon
                className={cn(
                  'size-3.5 opacity-70 transition-transform',
                  resourcesOpen && 'rotate-180',
                )}
              />
            </button>
            {resourcesOpen ? (
              <div
                role="menu"
                className="absolute left-0 top-full z-50 mt-2 w-48 overflow-hidden rounded-2xl border border-violet-100 bg-white/95 p-1.5 shadow-[0_16px_40px_rgb(15_23_42/0.12)] backdrop-blur-xl"
              >
                {RESOURCE_LINKS.map((item) => (
                  <a
                    key={item.label}
                    role="menuitem"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl px-3 py-2.5 text-[13px] font-medium text-[var(--color-fg)] hover:bg-violet-50"
                    onClick={() => setResourcesOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <Link href="#contact" className={navLinkClass}>
            {LANDING_COPY.NAV_CONTACT}
          </Link>
        </nav>

        <div className="hidden items-center gap-2.5 md:flex">
          <Link href={ROUTES.STUDIO}>
            <Button
              size="sm"
              variant="outline"
              className="rounded-full border-slate-200 bg-white/80 px-4 text-[13px] shadow-none hover:bg-white"
            >
              {UI_COPY.EXPLORE_DASHBOARD}
            </Button>
          </Link>
          <Link href={ROUTES.STUDIO_REELS}>
            <Button size="sm" variant="brand" className="rounded-full px-4 text-[13px]">
              <BoltIcon className="size-3.5" />
              {UI_COPY.GENERATE_REEL}
            </Button>
          </Link>
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden"
          aria-label={UI_COPY.OPEN_NAVIGATION}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <MenuIcon className="size-5" />
        </Button>
      </div>

      {open ? (
        <div className="border-t border-violet-100/80 bg-white/95 backdrop-blur-xl lg:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-6"
            aria-label="Mobile"
          >
            {[...NAV, { href: '#modules', label: LANDING_COPY.NAV_RESOURCES }].map((item) => (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                className="rounded-2xl px-3 py-3 text-sm font-medium text-[var(--color-fg)] hover:bg-violet-50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-violet-100 pt-4">
              <Link href={ROUTES.STUDIO} onClick={() => setOpen(false)}>
                <Button variant="outline" className="w-full rounded-full">
                  {UI_COPY.EXPLORE_DASHBOARD}
                </Button>
              </Link>
              <Link href={ROUTES.STUDIO_REELS} onClick={() => setOpen(false)}>
                <Button variant="brand" className="w-full rounded-full">
                  <BoltIcon className="size-3.5" />
                  {UI_COPY.GENERATE_REEL}
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
