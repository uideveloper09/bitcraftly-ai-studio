import Link from 'next/link';
import { cn } from '@bitcraftly/ui';
import { HERO_BADGE_LABEL, HERO_BADGE_NEW, HERO_PRIMARY_CTA } from './hero.constants';

/**
 * Announcement pill — soft brand chip + outlined NEW micro-tag.
 */
export function HeroBadge() {
  return (
    <Link
      href={HERO_PRIMARY_CTA.href}
      className={cn(
        'group inline-flex w-fit items-center gap-2.5',
        'rounded-full border border-[var(--border-glass)]',
        'bg-white/80 shadow-[var(--shadow-xs)] backdrop-blur-md',
        'py-[0.35rem] pl-[0.35rem] pr-[1rem]',
        'transition-[transform,box-shadow,border-color,background-color] duration-[var(--duration-normal)] ease-[var(--ease-out)]',
        'motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-[var(--border-glass-strong)] motion-safe:hover:shadow-[var(--shadow-sm)]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-info)] focus-visible:ring-offset-2',
      )}
    >
      <span
        className={cn(
          'relative inline-flex items-center overflow-hidden rounded-full',
          'border border-[#c7d2fe] bg-white',
          'px-2.5 py-[0.3rem]',
        )}
      >
        <span
          className={cn(
            'pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-[-20deg]',
            'bg-[linear-gradient(90deg,transparent,rgba(99,102,241,0.18),transparent)]',
            'motion-safe:animate-[badge-shimmer_2.4s_ease-in-out_infinite]',
          )}
          aria-hidden
        />
        <span className="relative bg-[linear-gradient(90deg,#3B82F6,#7C3AED)] bg-clip-text text-[9px] font-bold uppercase leading-none tracking-[0.14em] text-transparent">
          {HERO_BADGE_NEW}
        </span>
      </span>

      <span className="text-[13px] font-semibold leading-none tracking-[-0.01em] text-[#081d4a]">
        {HERO_BADGE_LABEL}
      </span>

      <span
        className="text-[13px] font-semibold leading-none text-[#4F46E5] transition-transform duration-[var(--duration-normal)] group-hover:translate-x-0.5"
        aria-hidden
      >
        →
      </span>
    </Link>
  );
}
