import Link from 'next/link';
import { Button, cn } from '@bitcraftly/ui';
import { BoltIcon, DashboardIcon } from '@/components/icons';
import { HERO_CONTROL_HEIGHT_CLASS, HERO_PRIMARY_CTA, HERO_SECONDARY_CTA } from './hero.constants';

const controlClassName = cn(
  HERO_CONTROL_HEIGHT_CLASS,
  'rounded-[0.875rem] px-[var(--space-5)] text-[var(--text-xs)] font-semibold sm:text-[13px]',
  'motion-cta duration-[var(--duration-cta)]',
);

/**
 * Primary + secondary CTAs — premium hover / press polish.
 */
export function HeroActions() {
  return (
    <div
      className="relative mt-[var(--space-5)] flex flex-col gap-[var(--space-3)] sm:flex-row sm:items-center"
      aria-label="Hero actions"
    >
      <Link
        href={HERO_PRIMARY_CTA.href}
        className="group-cta inline-flex rounded-[0.875rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-info)] focus-visible:ring-offset-2"
      >
        <Button
          type="button"
          variant="brand"
          size="md"
          className={cn(
            controlClassName,
            'motion-cta-primary w-full text-white sm:w-auto',
            '[&_svg]:text-white',
          )}
          tabIndex={-1}
        >
          <BoltIcon className="size-3.5 shrink-0 text-white" aria-hidden />
          {HERO_PRIMARY_CTA.label}
        </Button>
      </Link>

      <Link
        href={HERO_SECONDARY_CTA.href}
        className="group-cta inline-flex rounded-[0.875rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-info)] focus-visible:ring-offset-2"
      >
        <Button
          type="button"
          variant="outline"
          size="md"
          className={cn(
            controlClassName,
            'motion-cta-secondary w-full border-[var(--border-glass)] bg-white/90 text-[var(--color-fg)] backdrop-blur-sm sm:w-auto',
            'hover:border-[var(--border-glass-strong)] hover:bg-white',
          )}
          tabIndex={-1}
        >
          <DashboardIcon className="size-3.5 shrink-0 text-[var(--color-info)]" aria-hidden />
          {HERO_SECONDARY_CTA.label}
        </Button>
      </Link>
    </div>
  );
}
