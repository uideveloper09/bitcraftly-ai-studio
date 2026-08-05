'use client';

import { useEffect, useState } from 'react';
import { Button, cn } from '@bitcraftly/ui';
import { UI_COPY } from '@bitcraftly/shared';
import { MenuIcon } from '@/components/icons';
import {
  HEADER_CONTROL_HEIGHT_CLASS,
  HEADER_HEIGHT_CLASS,
  HEADER_MAX_WIDTH_CLASS,
  HEADER_PADDING_X_CLASS,
  HEADER_SCROLL_THRESHOLD_PX,
} from './header.constants';
import { HeaderActions } from './HeaderActions';
import { HeaderLogo } from './HeaderLogo';
import { HeaderNav } from './HeaderNav';

/**
 * Pixel-perfect landing header.
 * Client boundary is limited to sticky scroll state + hamburger placeholder.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > HEADER_SCROLL_THRESHOLD_PX);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'motion-stagger-in sticky top-0 z-50 w-full',
        'border-b',
        'transition-[background-color,border-color,box-shadow,backdrop-filter,-webkit-backdrop-filter] duration-[var(--duration-cta)] ease-[var(--ease-out)]',
        scrolled
          ? 'border-[var(--border-glass)] bg-[color-mix(in_oklab,var(--color-surface)_78%,transparent)] shadow-[var(--shadow-sm)] backdrop-blur-2xl'
          : 'border-transparent bg-[color-mix(in_oklab,var(--color-surface)_48%,transparent)] backdrop-blur-xl',
      )}
    >
      <div
        className={cn(
          HEADER_HEIGHT_CLASS,
          HEADER_MAX_WIDTH_CLASS,
          HEADER_PADDING_X_CLASS,
          'mx-auto flex items-center justify-between gap-[var(--space-4)]',
        )}
      >
        <HeaderLogo />
        <HeaderNav />
        <HeaderActions />

        <Button
          type="button"
          variant="ghost"
          size="md"
          className={cn(
            HEADER_CONTROL_HEIGHT_CLASS,
            'rounded-[var(--radius-full)] px-[var(--space-3)] lg:hidden',
          )}
          aria-label={UI_COPY.OPEN_NAVIGATION}
          aria-haspopup="true"
          aria-expanded={false}
        >
          <MenuIcon className="size-5" aria-hidden />
        </Button>
      </div>
    </header>
  );
}
