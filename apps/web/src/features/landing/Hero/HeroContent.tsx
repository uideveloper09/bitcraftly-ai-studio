import type { CSSProperties } from 'react';
import {
  HERO_DESCRIPTION,
  HERO_DESC_MAX_CLASS,
  HERO_TITLE_ACCENT,
  HERO_TITLE_LINES,
  HERO_TITLE_TAIL,
} from './hero.constants';
import { HeroBadge } from './HeroBadge';

const titleLineClass =
  'block motion-safe:animate-[hero-title-in_0.75s_var(--ease-out)_both] motion-reduce:animate-none';

/**
 * Badge → CREATE / PUBLISH / SCALE (gradient) / WITH AI. → description.
 */
export function HeroContent() {
  return (
    <div className="relative flex flex-col">
      <HeroBadge />

      <h1
        id="hero-heading"
        className={[
          'font-display mt-[var(--space-5)] flex flex-col gap-[0.04em]',
          'text-[2.35rem] font-black uppercase tracking-[0.012em] text-[#0f172a]',
          'sm:text-[2.85rem] sm:tracking-[0.016em]',
          'lg:mt-[var(--space-6)] lg:gap-[0.045em] lg:text-[3.85rem] lg:tracking-[0.02em]',
          '[&>span:last-child]:leading-[0.95] [&>span]:leading-[0.9]',
        ].join(' ')}
      >
        {HERO_TITLE_LINES.map((line, index) => (
          <span
            key={line}
            className={titleLineClass}
            style={{ animationDelay: `${120 + index * 110}ms` } satisfies CSSProperties}
          >
            {line}
          </span>
        ))}
        <span
          className="block bg-[linear-gradient(90deg,#3B82F6_0%,#6366F1_42%,#7C3AED_62%,#3B82F6_100%)] bg-[length:200%_100%] bg-clip-text text-transparent motion-safe:animate-[hero-title-in_0.75s_var(--ease-out)_both,hero-scale-shine_5s_ease-in-out_1.2s_infinite] motion-reduce:animate-none"
          style={{ animationDelay: '340ms, 1.1s' } satisfies CSSProperties}
        >
          {HERO_TITLE_ACCENT}
        </span>
        <span
          className={`${titleLineClass} font-sans font-extrabold tracking-[-0.035em] text-[#0f172a]`}
          style={{ animationDelay: '450ms' } satisfies CSSProperties}
        >
          {HERO_TITLE_TAIL}
        </span>
      </h1>

      <p
        className={[
          HERO_DESC_MAX_CLASS,
          'mt-[var(--space-4)] text-pretty leading-[1.65] text-[var(--color-fg-muted)] text-[var(--text-sm)]',
          'sm:text-[0.9375rem] sm:leading-[1.7]',
          'lg:mt-[var(--space-5)]',
        ].join(' ')}
      >
        {HERO_DESCRIPTION}
      </p>
    </div>
  );
}
