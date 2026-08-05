import { cn } from '@bitcraftly/ui';
import { LayersIcon, ShieldIcon, SparkIcon } from '@/components/icons';
import { HERO_FEATURES } from './hero.constants';
import type { HeroFeature } from './hero.types';

const toneIconWrap: Record<HeroFeature['tone'], string> = {
  cyan: 'bg-[color-mix(in_oklab,var(--color-info)_14%,var(--color-surface))] text-[var(--color-info)]',
  violet: 'bg-[color-mix(in_oklab,#7c3aed_12%,var(--color-surface))] text-[#7c3aed]',
  emerald:
    'bg-[color-mix(in_oklab,var(--color-info)_14%,var(--color-surface))] text-[var(--color-info)]',
};

const featureIcons = {
  'ai-powered': SparkIcon,
  'multi-format': LayersIcon,
  'scale-securely': ShieldIcon,
} as const;

/**
 * Lead-strip row — white cards, full text, single-line title + subtitle.
 */
export function HeroFeatureList() {
  return (
    <ul
      className="grid w-full grid-cols-1 gap-[var(--space-3)] sm:grid-cols-3 sm:gap-[var(--space-2)]"
      aria-label="Hero features"
    >
      {HERO_FEATURES.map((feature) => {
        const Icon = featureIcons[feature.id as keyof typeof featureIcons];
        return (
          <li key={feature.id} className="min-w-0">
            <div
              className={cn(
                'flex h-full items-center gap-[var(--space-2)]',
                'rounded-[0.875rem] border border-[var(--border-glass)] bg-white/90',
                'px-[var(--space-3)] py-[var(--space-3)] backdrop-blur-sm',
                'shadow-[var(--shadow-card)]',
                'motion-chip',
              )}
            >
              <span
                className={cn(
                  'inline-flex size-8 shrink-0 items-center justify-center rounded-[0.5rem]',
                  toneIconWrap[feature.tone],
                )}
                aria-hidden
              >
                <Icon className="size-3.5" strokeWidth={1.5} />
              </span>
              <span className="min-w-0">
                <span className="block whitespace-nowrap text-[9px] font-bold uppercase leading-none tracking-[0.06em] text-[var(--color-fg)]">
                  {feature.title}
                </span>
                <span className="mt-[5px] block whitespace-nowrap text-[11px] leading-none text-[var(--color-fg-muted)]">
                  {feature.description}
                </span>
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
