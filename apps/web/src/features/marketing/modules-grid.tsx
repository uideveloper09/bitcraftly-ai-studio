import Link from 'next/link';
import type { ReactNode } from 'react';
import { LANDING_COPY, ROUTES } from '@bitcraftly/shared';
import { cn } from '@bitcraftly/ui';
import {
  ArrowRightIcon,
  BannerIcon,
  BlogIcon,
  ImagesIcon,
  PostsIcon,
  ReelsIcon,
  VideosIcon,
} from '@/components/icons';
import {
  LANDING_MAX_WIDTH_CLASS,
  LANDING_PADDING_X_CLASS,
} from '@/features/landing/landing.constants';
import { Reveal } from '@/components/motion/Reveal';
import { ModuleIconElectric } from './ModuleIconElectric';

const MODULES = [
  {
    href: ROUTES.STUDIO_REELS,
    label: LANDING_COPY.MODULE_REELS,
    description: LANDING_COPY.MODULE_REELS_DESC,
    icon: ReelsIcon,
    tone: 'blue',
    cta: LANDING_COPY.CTA_LAUNCH,
    live: true,
  },
  {
    href: ROUTES.STUDIO_POSTS,
    label: LANDING_COPY.MODULE_POSTS,
    description: LANDING_COPY.MODULE_POSTS_DESC,
    icon: PostsIcon,
    tone: 'violet',
    cta: LANDING_COPY.CTA_COMING_SOON,
    live: false,
  },
  {
    href: ROUTES.STUDIO_IMAGES,
    label: LANDING_COPY.MODULE_IMAGES,
    description: LANDING_COPY.MODULE_IMAGES_DESC,
    icon: ImagesIcon,
    tone: 'green',
    cta: LANDING_COPY.CTA_COMING_SOON,
    live: false,
  },
  {
    href: ROUTES.STUDIO_VIDEOS,
    label: LANDING_COPY.MODULE_VIDEOS,
    description: LANDING_COPY.MODULE_VIDEOS_DESC,
    icon: VideosIcon,
    tone: 'violet',
    cta: LANDING_COPY.CTA_COMING_SOON,
    live: false,
  },
  {
    href: ROUTES.STUDIO,
    label: LANDING_COPY.MODULE_BANNERS,
    description: LANDING_COPY.MODULE_BANNERS_DESC,
    icon: BannerIcon,
    tone: 'blue',
    cta: LANDING_COPY.CTA_COMING_SOON,
    live: false,
  },
  {
    href: ROUTES.STUDIO,
    label: LANDING_COPY.MODULE_BLOG,
    description: LANDING_COPY.MODULE_BLOG_DESC,
    icon: BlogIcon,
    tone: 'green',
    cta: LANDING_COPY.CTA_COMING_SOON,
    live: false,
  },
] as const;

type ModuleTone = (typeof MODULES)[number]['tone'];

const toneStyles: Record<
  ModuleTone,
  { stroke: string; icon: string; border: string; launch: string }
> = {
  blue: {
    stroke: '#60a5fa',
    icon: 'text-[#3b82f6]',
    border: 'border-[#c7dbf5]',
    launch: 'border-[#60a5fa] text-[#2563eb] hover:bg-[#eff6ff]',
  },
  violet: {
    stroke: '#a78bfa',
    icon: 'text-[#7c3aed]',
    border: 'border-[#ddd6fe]',
    launch: 'border-[#a78bfa] text-[#7c3aed] hover:bg-[#f5f3ff]',
  },
  green: {
    stroke: '#34d399',
    icon: 'text-[#059669]',
    border: 'border-[#a7f3d0]',
    launch: 'border-[#34d399] text-[#059669] hover:bg-[#ecfdf5]',
  },
};

/** Viewfinder / HUD brackets on all four corners */
function CardHudCorners({ color }: { color: string }) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 size-full"
      viewBox="0 0 200 280"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
    >
      {/* Top-left */}
      <path d="M14 28 V14 H28" stroke={color} strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
      <path
        d="M14 22 H18 M20 14 V18"
        stroke={color}
        strokeWidth="1"
        opacity="0.55"
        vectorEffect="non-scaling-stroke"
      />
      {/* Top-right */}
      <path
        d="M186 28 V14 H172"
        stroke={color}
        strokeWidth="1.4"
        vectorEffect="non-scaling-stroke"
      />
      {/* Bottom-left */}
      <path
        d="M14 252 V266 H28"
        stroke={color}
        strokeWidth="1.4"
        vectorEffect="non-scaling-stroke"
      />
      {/* Bottom-right */}
      <path
        d="M186 252 V266 H172"
        stroke={color}
        strokeWidth="1.4"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M186 258 H182 M180 266 V262"
        stroke={color}
        strokeWidth="1"
        opacity="0.55"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/** Octagon icon frame with side tick marks + traveling electric current */
function ModuleIconFrame({
  tone,
  frameId,
  children,
}: {
  tone: ModuleTone;
  frameId: string;
  children: ReactNode;
}) {
  const { stroke, icon } = toneStyles[tone];
  const outerPath = 'M26 4 H50 L72 26 V50 L50 72 H26 L4 50 V26 Z';
  const innerPath = 'M28 10 H48 L66 28 V48 L48 66 H28 L10 48 V28 Z';

  return (
    <div className="relative mx-auto flex size-[4.75rem] items-center justify-center">
      <svg
        className="absolute inset-0 size-full overflow-visible"
        viewBox="0 0 76 76"
        fill="none"
        aria-hidden
      >
        {/* Outer soft octagon plate */}
        <path d={outerPath} fill="white" stroke={stroke} strokeWidth="1.35" opacity="0.95" />
        {/* Inner dashed octagon accent */}
        <path
          d={innerPath}
          stroke={stroke}
          strokeWidth="0.7"
          strokeDasharray="2.5 2.5"
          opacity="0.35"
        />
        {/* Left tick cluster */}
        <path
          d="M1 34 H7 M1 38 H9 M1 42 H7"
          stroke={stroke}
          strokeWidth="1.15"
          strokeLinecap="round"
        />
        {/* Right tick cluster */}
        <path
          d="M75 34 H69 M75 38 H67 M75 42 H69"
          stroke={stroke}
          strokeWidth="1.15"
          strokeLinecap="round"
        />
        {/* Top / bottom micro ticks */}
        <path
          d="M34 1 V6 M38 1 V8 M42 1 V6"
          stroke={stroke}
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M34 75 V70 M38 75 V68 M42 75 V70"
          stroke={stroke}
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.7"
        />
        {/* Corner nodes (static) */}
        <circle cx="26" cy="4" r="1.35" fill={stroke} />
        <circle cx="50" cy="4" r="1.35" fill={stroke} />
        <circle cx="26" cy="72" r="1.35" fill={stroke} />
        <circle cx="50" cy="72" r="1.35" fill={stroke} />

        <ModuleIconElectric
          frameId={frameId}
          stroke={stroke}
          outerPath={outerPath}
          innerPath={innerPath}
        />
      </svg>
      <span className={cn('motion-icon-pop relative z-[1]', icon)}>{children}</span>
    </div>
  );
}

export function ModulesGrid() {
  return (
    <section
      id="modules"
      className={cn(
        'relative z-10 overflow-hidden',
        'bg-[linear-gradient(180deg,#f4f6fb_0%,#f8f9fc_45%,#ffffff_100%)]',
        'py-12',
        LANDING_PADDING_X_CLASS,
      )}
    >
      <div
        className="motion-glow-pulse pointer-events-none absolute left-1/2 top-16 size-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(147,197,253,0.05)_0%,transparent_70%)] blur-2xl"
        aria-hidden
      />
      <div
        className="motion-glow-pulse pointer-events-none absolute bottom-10 right-[8%] size-[22rem] rounded-full bg-[radial-gradient(circle,rgba(196,181,253,0.04)_0%,transparent_70%)] blur-2xl [animation-delay:1.8s]"
        aria-hidden
      />

      <Reveal className={cn('relative mx-auto', LANDING_MAX_WIDTH_CLASS)}>
        <div className="mx-auto max-w-2xl text-center">
          <span
            className={cn(
              'inline-flex items-center justify-center',
              'border-[#c4b5fd]/bg-[#f5f3ff]/px-3.5 border py-1.5',
              'text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1e3a8a]',
              '[clip-path:polygon(10px_0%,calc(100%-10px)_0%,100%_50%,calc(100%-10px)_100%,10px_100%,0%_50%)]',
            )}
          >
            {LANDING_COPY.SECTION_MODULES_BADGE}
          </span>

          <h2
            className={cn(
              'font-display mt-[var(--space-5)] text-balance text-3xl font-bold uppercase tracking-[0.02em] text-[#0b1220]',
              'md:text-4xl lg:text-[2.65rem] lg:leading-[1.12]',
            )}
          >
            {LANDING_COPY.SECTION_MODULES_TITLE}
          </h2>
          <p className="mt-[var(--space-3)] text-base leading-relaxed text-[#64748b] md:text-lg md:leading-relaxed">
            {LANDING_COPY.SECTION_MODULES_SUPPORT}
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-3.5">
          {MODULES.map((module, index) => {
            const Icon = module.icon;
            const tone = toneStyles[module.tone];
            const indexLabel = String(index + 1).padStart(2, '0');

            const content = (
              <>
                <CardHudCorners color={tone.stroke} />

                {/* Tiny circuit ticks along top edge */}
                <span
                  className="pointer-events-none absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-px gap-1"
                  aria-hidden
                >
                  <span
                    className="h-1.5 w-px"
                    style={{ backgroundColor: tone.stroke, opacity: 0.55 }}
                  />
                  <span
                    className="h-2.5 w-px"
                    style={{ backgroundColor: tone.stroke, opacity: 0.8 }}
                  />
                  <span
                    className="h-1.5 w-px"
                    style={{ backgroundColor: tone.stroke, opacity: 0.55 }}
                  />
                </span>

                <span className="absolute right-5 top-4 font-mono text-[11px] font-medium tabular-nums tracking-wide text-[#c0c9d6]">
                  {indexLabel}
                </span>

                <div className="mt-3 flex flex-1 flex-col items-center text-center">
                  <ModuleIconFrame tone={module.tone} frameId={`m${index}`}>
                    <Icon className="size-[1.65rem]" strokeWidth={1.85} />
                  </ModuleIconFrame>

                  <h3 className="font-display mt-5 text-[13px] font-bold uppercase tracking-[0.08em] text-[#0b1220]">
                    {module.label}
                  </h3>
                  <p className="mt-2 min-h-[2.6rem] max-w-[11.5rem] text-[12.5px] leading-relaxed text-[#64748b]">
                    {module.description}
                  </p>
                </div>

                <span
                  className={cn(
                    'mt-5 inline-flex w-full items-center justify-center gap-1.5',
                    'rounded-full border px-3 py-2.5 text-[12.5px] font-semibold',
                    'transition-[transform,background-color,border-color,color,box-shadow] duration-[var(--duration-normal)] ease-[var(--ease-out)]',
                    module.live
                      ? cn(tone.launch, 'group-hover:shadow-[var(--shadow-xs)]')
                      : 'border-[#e2e8f0] bg-white text-[#64748b] group-hover:border-[#cbd5e1]',
                  )}
                >
                  {module.cta}
                  {module.live ? <ArrowRightIcon className="motion-arrow-slide size-3.5" /> : null}
                </span>
              </>
            );

            const cardClass = cn(
              'group relative flex h-full flex-col overflow-hidden',
              'rounded-[1.5rem] border bg-white/95 p-5 pt-6 backdrop-blur-sm',
              tone.border,
              'shadow-[var(--shadow-card)]',
              'motion-card',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-info)] focus-visible:ring-offset-2',
              module.live
                ? 'hover:-translate-y-1 hover:border-[#93c5fd] hover:shadow-[var(--shadow-md)] focus-visible:-translate-y-1 focus-visible:border-[#93c5fd] focus-visible:shadow-[var(--shadow-md)]'
                : 'hover:-translate-y-0.5 hover:shadow-[var(--shadow-sm)]',
            );

            return (
              <li key={`${module.label}-${index}`} className="min-w-0">
                {module.live ? (
                  <Link href={module.href} className={cardClass}>
                    {content}
                  </Link>
                ) : (
                  <div className={cardClass}>{content}</div>
                )}
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
