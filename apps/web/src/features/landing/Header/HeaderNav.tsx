'use client';

import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';
import { cn } from '@bitcraftly/ui';
import { ChevronDownIcon } from '@/components/icons';
import { HEADER_NAV_ITEMS, HEADER_RESOURCE_LINKS, HEADER_TEXT_CLASS } from './header.constants';

const navLinkClassName = cn(
  'motion-nav-link inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-full)]',
  'px-[var(--space-3)] py-[var(--space-2)]',
  HEADER_TEXT_CLASS,
  'text-[var(--color-fg-muted)]',
  'transition-colors duration-[var(--duration-cta)] ease-[var(--ease-out)]',
  'hover:bg-[#eff6ff] hover:text-[#2563eb]',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2',
);

/**
 * Landing header center navigation with Resources dropdown (opens on hover).
 */
export function HeaderNav() {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLLIElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuId = useId();

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openResources = () => {
    clearCloseTimer();
    setResourcesOpen(true);
  };

  const scheduleCloseResources = () => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setResourcesOpen(false);
    }, 120);
  };

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  useEffect(() => {
    if (!resourcesOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!resourcesRef.current?.contains(event.target as Node)) {
        setResourcesOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setResourcesOpen(false);
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [resourcesOpen]);

  return (
    <nav className="hidden lg:block" aria-label="Primary">
      <ul className="flex items-center gap-[var(--space-1)]">
        {HEADER_NAV_ITEMS.map((item) => {
          if (item.hasChevron) {
            return (
              <li
                key={item.id}
                ref={resourcesRef}
                className="relative"
                onMouseEnter={openResources}
                onMouseLeave={scheduleCloseResources}
              >
                <button
                  type="button"
                  className={cn(navLinkClassName, resourcesOpen && 'bg-[#eff6ff] text-[#2563eb]')}
                  aria-expanded={resourcesOpen}
                  aria-haspopup="menu"
                  aria-controls={menuId}
                  onClick={() => setResourcesOpen((open) => !open)}
                  onFocus={openResources}
                >
                  <span>{item.label}</span>
                  <ChevronDownIcon
                    className={cn(
                      'size-3.5 shrink-0 opacity-70 transition-transform duration-[var(--duration-cta)] ease-[var(--ease-premium)]',
                      resourcesOpen && 'rotate-180',
                    )}
                    aria-hidden
                  />
                </button>

                {resourcesOpen ? (
                  <div
                    id={menuId}
                    role="menu"
                    aria-label={item.label}
                    className={cn(
                      'absolute left-1/2 top-full z-50 mt-1 w-48 -translate-x-1/2 pt-1',
                    )}
                  >
                    <div
                      className={cn(
                        'overflow-hidden rounded-[0.875rem]',
                        'border border-[#e2e8f0] bg-white/95 p-1.5',
                        'shadow-[0_16px_40px_rgb(15_23_42/0.12)] backdrop-blur-xl',
                      )}
                    >
                      {HEADER_RESOURCE_LINKS.map((link) => (
                        <a
                          key={link.label}
                          role="menuitem"
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            'block rounded-[0.625rem] px-3 py-2.5',
                            HEADER_TEXT_CLASS,
                            'text-[var(--color-fg)] transition-colors',
                            'hover:bg-[#eff6ff] hover:text-[#2563eb]',
                          )}
                          onClick={() => setResourcesOpen(false)}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}
              </li>
            );
          }

          return (
            <li key={item.id}>
              <Link href={item.href} className={navLinkClassName}>
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
