import Link from 'next/link';
import { Button, cn } from '@bitcraftly/ui';
import { BoltIcon, DashboardIcon } from '@/components/icons';
import {
  HEADER_CONTROL_HEIGHT_CLASS,
  HEADER_PRIMARY_ACTION,
  HEADER_SECONDARY_ACTION,
  HEADER_TEXT_CLASS,
} from './header.constants';

const controlClassName = cn(
  HEADER_CONTROL_HEIGHT_CLASS,
  HEADER_TEXT_CLASS,
  'rounded-[0.875rem] px-[1.15rem]',
  'motion-cta duration-[var(--duration-cta)]',
);

/**
 * Header right CTAs — premium glass / glow polish.
 */
export function HeaderActions() {
  return (
    <div className="hidden items-center gap-[0.625rem] md:flex" aria-label="Header actions">
      <Link
        href={HEADER_SECONDARY_ACTION.href}
        className="group-cta inline-flex rounded-[0.875rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-info)] focus-visible:ring-offset-2"
      >
        <Button
          type="button"
          variant="outline"
          size="md"
          className={cn(
            controlClassName,
            'motion-cta-secondary border-[#c4b5fd]/80 bg-white/90 text-[#0f172a] backdrop-blur-sm',
            'hover:border-[#a78bfa] hover:bg-[#f8f7ff]',
            'shadow-[var(--shadow-xs)]',
          )}
          tabIndex={-1}
        >
          <DashboardIcon className="size-3.5 shrink-0 text-[#7c3aed]" aria-hidden />
          {HEADER_SECONDARY_ACTION.label}
        </Button>
      </Link>

      <Link
        href={HEADER_PRIMARY_ACTION.href}
        className="group-cta inline-flex rounded-[0.875rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-info)] focus-visible:ring-offset-2"
      >
        <Button
          type="button"
          variant="brand"
          size="md"
          className={cn(
            controlClassName,
            'motion-cta-primary border-transparent text-white',
            '[&_svg]:text-white',
          )}
          tabIndex={-1}
        >
          <BoltIcon className="size-3.5 shrink-0 text-white" aria-hidden />
          {HEADER_PRIMARY_ACTION.label}
        </Button>
      </Link>
    </div>
  );
}
