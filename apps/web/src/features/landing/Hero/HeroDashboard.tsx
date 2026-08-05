import Image from 'next/image';
import { APP_BRAND_TAGLINE, APP_NAME } from '@bitcraftly/shared';
import { cn } from '@bitcraftly/ui';
import {
  AnalyticsIcon,
  DashboardIcon,
  ImagesIcon,
  PostsIcon,
  ReelsIcon,
  SettingsIcon,
  VideosIcon,
} from '@/components/icons';
import {
  HERO_ACTIVITY,
  HERO_ACTIVITY_FOOTER,
  HERO_BANNER_SUB,
  HERO_BANNER_TITLE,
  HERO_DASHBOARD_OVERVIEW,
  HERO_DASHBOARD_STRIP_BG,
  HERO_DASHBOARD_WELCOME,
  HERO_PRO_PLAN,
  HERO_QUEUE,
  HERO_QUEUE_FOOTER,
  HERO_QUEUE_WIDTH_CLASS,
  HERO_SIDEBAR,
  HERO_STATS,
} from './hero.constants';

const sidebarIcons = {
  dashboard: DashboardIcon,
  reels: ReelsIcon,
  posts: PostsIcon,
  images: ImagesIcon,
  videos: VideosIcon,
  analytics: AnalyticsIcon,
  settings: SettingsIcon,
} as const;

const statTone = {
  violet:
    'bg-[color-mix(in_oklab,var(--color-info)_16%,var(--color-surface))] text-[var(--color-info)]',
  emerald:
    'bg-[color-mix(in_oklab,var(--color-success)_14%,var(--color-surface))] text-[var(--color-success)]',
  amber:
    'bg-[color-mix(in_oklab,var(--color-warning)_14%,var(--color-surface))] text-[var(--color-warning)]',
  sky: 'bg-[color-mix(in_oklab,var(--color-info)_14%,var(--color-surface))] text-[var(--color-info)]',
} as const;

const statusDot = {
  success: 'bg-[var(--color-success)]',
  info: 'bg-[var(--color-info)]',
  pending: 'bg-[var(--color-warning)]',
} as const;

/**
 * Right-section studio dashboard — matched to target image2.
 */
export function HeroDashboard() {
  return (
    <div className="relative w-full">
      {/* Soft depth glow behind dashboard */}
      <div
        className="pointer-events-none absolute -inset-[8%] -z-10 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,rgba(147,197,253,0.12)_0%,transparent_68%)] blur-2xl"
        aria-hidden
      />
      <div
        className={cn(
          'relative overflow-hidden rounded-[1.35rem] opacity-90',
          'border border-[var(--border-glass)]',
          'bg-[color-mix(in_oklab,var(--color-surface)_92%,transparent)]',
          'shadow-[var(--shadow-dashboard)] backdrop-blur-xl',
          'transition-[box-shadow,transform] duration-[var(--duration-slow)] ease-[var(--ease-out)]',
          'motion-safe:hover:shadow-[var(--shadow-dashboard-hover)]',
        )}
        aria-label="Studio dashboard preview"
        role="img"
      >
        <div className="flex min-h-[calc(30rem-15px)] lg:min-h-[calc(32rem-15px)]">
          <aside className="hidden w-[12.5rem] shrink-0 flex-col border-r border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface-elevated)_40%,var(--color-surface))] px-[var(--space-3)] py-[var(--space-4)] sm:flex">
            <div className="mb-[var(--space-5)] flex items-center gap-[0.5rem] px-[var(--space-1)]">
              <Image
                src="/brand/logo-mark.webp"
                alt=""
                width={28}
                height={28}
                className="size-7 shrink-0 object-contain"
              />
              <span className="flex min-w-0 flex-col gap-[3px] leading-none">
                <span className="truncate text-[11px] font-bold tracking-[-0.02em] text-[#000726]">
                  {APP_NAME}
                </span>
                <span className="truncate text-[8px] font-medium tracking-[0.01em] text-[#346c84]">
                  {APP_BRAND_TAGLINE}
                </span>
              </span>
            </div>

            <nav className="flex flex-1 flex-col gap-[2px]" aria-hidden>
              {HERO_SIDEBAR.map((item) => {
                const Icon = sidebarIcons[item.id as keyof typeof sidebarIcons];
                return (
                  <div
                    key={item.id}
                    className={cn(
                      'flex items-center gap-[var(--space-2)] rounded-[var(--radius-md)] px-[var(--space-2)] py-[7px] text-[11px] font-medium',
                      item.active
                        ? 'bg-[color-mix(in_oklab,var(--color-info)_14%,var(--color-surface))] text-[var(--color-info)]'
                        : 'text-[var(--color-fg-muted)]',
                    )}
                  >
                    {Icon ? <Icon className="size-3.5 shrink-0 opacity-80" /> : null}
                    <span className="truncate">{item.label}</span>
                  </div>
                );
              })}
            </nav>

            <div className="mb-[63px] mt-auto overflow-hidden rounded-[0.9rem] border border-[var(--border-glass-strong)] bg-white/90 shadow-[var(--shadow-sm)] backdrop-blur-sm">
              <div className="bg-[color-mix(in_oklab,#93c5fd_18%,white)] px-[0.6rem] py-[0.35rem]">
                <p className="text-[8px] font-semibold uppercase tracking-[0.1em] text-[#64748b]">
                  {HERO_PRO_PLAN.label}
                </p>
              </div>

              <div className="px-[0.6rem] pb-[0.6rem] pt-[0.55rem]">
                <p className="text-[1.2rem] font-bold leading-none tracking-[-0.035em] text-[#3B82F6]">
                  {HERO_PRO_PLAN.usagePercent}
                </p>
                <p className="mt-[0.3rem] text-[9px] font-semibold leading-none text-[#0f172a]">
                  {HERO_PRO_PLAN.usageLabel}
                </p>

                <div className="mt-[0.5rem] h-[5px] overflow-hidden rounded-full bg-[#eef2f7]">
                  <div
                    className={cn(
                      'motion-progress-fill h-full rounded-full bg-[linear-gradient(90deg,#60a5fa,#3b82f6)]',
                      HERO_QUEUE_WIDTH_CLASS[HERO_PRO_PLAN.percent],
                    )}
                  />
                </div>

                <p className="mt-[0.4rem] text-[8px] leading-none text-[#64748b]">
                  {HERO_PRO_PLAN.storage}
                </p>

                <span className="mt-[0.55rem] inline-flex w-full items-center justify-center rounded-[0.55rem] bg-[linear-gradient(180deg,#f8fbff_0%,#eff6ff_100%)] py-[0.4rem] text-[9px] font-bold leading-none text-[#2563EB] shadow-[inset_0_0_0_1px_rgba(147,197,253,0.5)]">
                  {HERO_PRO_PLAN.cta}
                </span>
              </div>
            </div>
          </aside>

          <div className="min-w-0 flex-1 p-[var(--space-4)] sm:p-[var(--space-5)]">
            <div className="flex items-start justify-between gap-[var(--space-3)]">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.16em] text-[var(--color-fg-subtle)]">
                  {HERO_DASHBOARD_OVERVIEW}
                </p>
                <p className="mt-[var(--space-1)] font-sans text-[15px] font-semibold tracking-normal text-[var(--color-fg)]">
                  {HERO_DASHBOARD_WELCOME} <span aria-hidden>👋</span>
                </p>
              </div>
              <span className="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-full)] bg-[color-mix(in_oklab,var(--color-success)_12%,var(--color-surface))] px-[var(--space-2)] py-[var(--space-1)] text-[10px] font-semibold text-[var(--color-success)] ring-1 ring-[color-mix(in_oklab,var(--color-success)_22%,transparent)]">
                <span className="size-1.5 rounded-[var(--radius-full)] bg-[var(--color-success)]" />
                Live
              </span>
            </div>

            <div className="mt-[var(--space-4)] grid grid-cols-2 gap-[var(--space-2)] lg:grid-cols-4">
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.id}
                  className="motion-stat-card rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--space-3)] shadow-[var(--shadow-xs)]"
                >
                  <span
                    className={cn(
                      'mb-[var(--space-2)] inline-flex size-6 items-center justify-center rounded-[var(--radius-full)] text-[9px] font-bold',
                      statTone[stat.tone],
                    )}
                    aria-hidden
                  >
                    ●
                  </span>
                  <p className="truncate text-[9px] font-medium text-[var(--color-fg-subtle)]">
                    {stat.label}
                  </p>
                  <p className="mt-[2px] text-[13px] font-semibold tabular-nums text-[var(--color-fg)]">
                    {stat.value}
                  </p>
                  {stat.delta ? (
                    <p className="mt-[2px] text-[9px] font-semibold text-[var(--color-success)]">
                      ↑ {stat.delta.replace('+', '')}
                    </p>
                  ) : null}
                  {stat.detail && !stat.progress ? (
                    <p className="mt-[2px] text-[9px] text-[var(--color-fg-subtle)]">
                      {stat.detail}
                    </p>
                  ) : null}
                  {stat.progress ? (
                    <>
                      <div className="mt-[var(--space-2)] h-1 overflow-hidden rounded-[var(--radius-full)] bg-[var(--color-surface-elevated)]">
                        <div
                          className={cn(
                            'motion-progress-fill h-full rounded-[var(--radius-full)] bg-[var(--color-info)]',
                            HERO_QUEUE_WIDTH_CLASS[stat.progress],
                          )}
                        />
                      </div>
                      {stat.detail ? (
                        <p className="mt-[2px] text-[9px] text-[var(--color-fg-subtle)]">
                          {stat.detail}
                        </p>
                      ) : null}
                    </>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-[var(--space-3)] grid gap-[var(--space-3)] sm:grid-cols-2">
              <div className="flex flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--space-3)]">
                <p className="text-[12px] font-semibold text-[var(--color-fg)]">Recent Activity</p>
                <ul className="mt-[var(--space-3)] flex-1 space-y-[var(--space-2)]">
                  {HERO_ACTIVITY.map((item, index) => (
                    <li
                      key={item.id}
                      className={cn(
                        'motion-activity-in flex items-start gap-[var(--space-2)]',
                        index === 1 && 'motion-delay-1',
                        index === 2 && 'motion-delay-2',
                        index === 3 && 'motion-delay-3',
                      )}
                    >
                      <span
                        className={cn(
                          'mt-1.5 size-1.5 shrink-0 rounded-[var(--radius-full)]',
                          statusDot[item.status],
                        )}
                      />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[11px] font-medium text-[var(--color-fg)]">
                          {item.title}
                        </span>
                        <span className="mt-[1px] flex items-center justify-between gap-[var(--space-2)] text-[9px] text-[var(--color-fg-subtle)]">
                          <span className="truncate">{item.meta}</span>
                          <span className="shrink-0">{item.time}</span>
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-[var(--space-3)] text-[10px] font-semibold text-[var(--color-info)]">
                  {HERO_ACTIVITY_FOOTER}
                </p>
              </div>

              <div className="flex flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--space-3)]">
                <p className="text-[12px] font-semibold text-[var(--color-fg)]">Generation Queue</p>
                <div className="mt-[var(--space-3)] flex-1 space-y-[var(--space-3)]">
                  {HERO_QUEUE.map((job, index) => (
                    <div key={job.id}>
                      <div className="mb-[var(--space-1)] flex items-center justify-between gap-[var(--space-2)] text-[10px]">
                        <span className="truncate font-medium text-[var(--color-fg)]">
                          {job.title}
                        </span>
                        <span
                          className={cn(
                            'shrink-0 font-semibold',
                            job.state === 'running'
                              ? 'text-[var(--color-info)]'
                              : 'text-[var(--color-fg-subtle)]',
                          )}
                        >
                          {job.stateLabel}
                        </span>
                      </div>
                      <div className="flex items-center gap-[var(--space-2)]">
                        <div className="h-1.5 flex-1 overflow-hidden rounded-[var(--radius-full)] bg-[var(--color-surface-elevated)]">
                          <div
                            className={cn(
                              'motion-progress-fill h-full rounded-[var(--radius-full)]',
                              job.state === 'running'
                                ? 'bg-[image:var(--gradient-brand)]'
                                : 'bg-[color-mix(in_oklab,var(--color-info)_55%,var(--color-border))]',
                              HERO_QUEUE_WIDTH_CLASS[job.progress],
                              index === 1 && 'motion-delay-1',
                              index === 2 && 'motion-delay-2',
                            )}
                          />
                        </div>
                        <span className="w-7 shrink-0 text-right text-[9px] tabular-nums text-[var(--color-fg-subtle)]">
                          {job.progress}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-[var(--space-3)] text-[10px] font-semibold text-[var(--color-info)]">
                  {HERO_QUEUE_FOOTER}
                </p>
              </div>
            </div>

            <div
              className={cn(
                'relative mt-[var(--space-5)] overflow-hidden rounded-[var(--radius-lg)]',
                'border border-[color-mix(in_oklab,#93c5fd_40%,var(--color-border))]',
                'bg-[linear-gradient(180deg,#d7e7f8_0%,#e6f0fb_38%,#f3f8fd_72%,#ffffff_100%)]',
                'px-[var(--space-4)] py-[1.4rem]',
              )}
            >
              {/* Right AI art — fades into shared gradient, no hard color seam */}
              <div
                className="pointer-events-none absolute inset-y-0 right-0 w-[38%] sm:w-[34%]"
                aria-hidden
              >
                <Image
                  src={HERO_DASHBOARD_STRIP_BG}
                  alt=""
                  fill
                  sizes="180px"
                  className={cn(
                    'object-cover object-right opacity-90',
                    '[mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.35)_28%,black_58%)]',
                    '[-webkit-mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.35)_28%,black_58%)]',
                  )}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(215,231,248,0.45)_0%,rgba(243,248,253,0.2)_55%,rgba(255,255,255,0.12)_100%)]" />
              </div>

              <div className="relative z-10 min-w-0 max-w-[88%] pr-[var(--space-2)] sm:max-w-[82%]">
                <p className="whitespace-nowrap text-[11px] font-semibold leading-none text-[var(--color-fg)]">
                  {HERO_BANNER_TITLE}
                </p>
                <p className="mt-[4px] whitespace-nowrap text-[10px] leading-none text-[var(--color-fg-muted)]">
                  {HERO_BANNER_SUB}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
