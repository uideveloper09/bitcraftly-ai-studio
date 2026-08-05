import Image from 'next/image';
import { LANDING_COPY, UI_COPY } from '@bitcraftly/shared';
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

const SIDEBAR = [
  { label: 'Dashboard', icon: DashboardIcon, active: true },
  { label: 'AI Reels', icon: ReelsIcon, active: false },
  { label: 'AI Posts', icon: PostsIcon, active: false },
  { label: 'AI Images', icon: ImagesIcon, active: false },
  { label: 'AI Videos', icon: VideosIcon, active: false },
  { label: 'Analytics', icon: AnalyticsIcon, active: false },
  { label: 'Settings', icon: SettingsIcon, active: false },
] as const;

const STATS = [
  { label: UI_COPY.TOTAL_GENERATIONS, value: '1,284', delta: '+12%' },
  { label: UI_COPY.TODAYS_JOBS, value: '36', delta: '+4' },
  { label: UI_COPY.QUEUE_STATUS, value: 'Healthy', delta: 'Live' },
  { label: UI_COPY.STORAGE_USED, value: '18 GB', delta: '62%' },
] as const;

const ACTIVITY = [
  { title: 'Product launch reel', meta: 'Rendered · 2m ago', tone: 'ok' },
  { title: 'Script: Q2 tips series', meta: 'Ready · 14m ago', tone: 'info' },
  { title: 'Brand voice draft', meta: 'Queued · 28m ago', tone: 'warn' },
] as const;

/**
 * Decorative studio dashboard preview for the marketing hero.
 */
export function HeroDashboardPreview() {
  return (
    <div className="landing-preview relative mx-auto w-full max-w-[560px] lg:mx-0 lg:justify-self-end">
      <div
        className="absolute -inset-8 rounded-[2.5rem] bg-[image:var(--gradient-brand-soft)] opacity-90 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -right-2 -top-3 size-24 rounded-full bg-cyan-300/30 blur-2xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-6 -left-4 size-28 rounded-full bg-violet-400/25 blur-2xl"
        aria-hidden
      />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/90 shadow-[0_24px_80px_rgb(79_70_229/0.18)] backdrop-blur-md">
        <div className="flex min-h-[340px]">
          <aside className="hidden w-[148px] shrink-0 border-r border-slate-100 bg-slate-50/90 p-3 sm:flex sm:flex-col">
            <div className="mb-4 flex items-center gap-2 px-1">
              <Image
                src="/brand/logo-mark.webp"
                alt=""
                width={28}
                height={28}
                className="size-7 object-contain"
              />
              <span className="text-[11px] font-semibold tracking-tight text-slate-800">
                Studio
              </span>
            </div>

            <nav className="flex flex-1 flex-col gap-0.5" aria-hidden>
              {SIDEBAR.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={cn(
                      'flex items-center gap-2 rounded-xl px-2 py-1.5 text-[10px] font-medium',
                      item.active
                        ? 'bg-white text-violet-700 shadow-sm ring-1 ring-violet-100'
                        : 'text-slate-500',
                    )}
                  >
                    <Icon className="size-3.5 shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </div>
                );
              })}
            </nav>

            <div className="mt-3 rounded-2xl border border-violet-100 bg-white p-2.5">
              <p className="text-[9px] font-semibold text-slate-700">Pro Plan</p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[68%] rounded-full bg-[image:var(--gradient-brand)]" />
              </div>
              <p className="mt-1.5 text-[9px] text-slate-500">68% credits used</p>
              <span className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[image:var(--gradient-brand)] py-1 text-[9px] font-semibold text-white">
                Upgrade
              </span>
            </div>
          </aside>

          <div className="min-w-0 flex-1 p-4 sm:p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                  Overview
                </p>
                <p className="mt-0.5 font-sans text-sm font-semibold tracking-normal text-slate-900 sm:text-[15px]">
                  {LANDING_COPY.PREVIEW_WELCOME}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700 ring-1 ring-emerald-100">
                <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
                Live
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-100 bg-gradient-to-b from-white to-slate-50/80 p-2.5 shadow-[0_1px_2px_rgb(15_23_42/0.04)]"
                >
                  <p className="truncate text-[9px] font-medium text-slate-400">{stat.label}</p>
                  <p className="mt-1 text-[13px] font-semibold tabular-nums tracking-tight text-slate-900">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[9px] font-medium text-violet-600">{stat.delta}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-100 bg-white p-3">
                <p className="text-[11px] font-semibold text-slate-800">
                  {LANDING_COPY.PREVIEW_ACTIVITY}
                </p>
                <ul className="mt-2.5 space-y-2">
                  {ACTIVITY.map((item) => (
                    <li key={item.title} className="flex items-start gap-2">
                      <span
                        className={cn(
                          'mt-1 size-1.5 shrink-0 rounded-full',
                          item.tone === 'ok' && 'bg-emerald-500',
                          item.tone === 'info' && 'bg-sky-500',
                          item.tone === 'warn' && 'bg-amber-500',
                        )}
                      />
                      <span className="min-w-0">
                        <span className="block truncate text-[11px] font-medium text-slate-700">
                          {item.title}
                        </span>
                        <span className="block text-[9px] text-slate-400">{item.meta}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-3">
                <p className="text-[11px] font-semibold text-slate-800">
                  {LANDING_COPY.PREVIEW_QUEUE}
                </p>
                <div className="mt-3 space-y-3">
                  {[
                    { label: 'Brand teaser reel', value: 72 },
                    { label: 'Product tip #4', value: 41 },
                  ].map((job) => (
                    <div key={job.label}>
                      <div className="mb-1 flex items-center justify-between text-[10px]">
                        <span className="font-medium text-slate-600">{job.label}</span>
                        <span className="tabular-nums text-slate-400">{job.value}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-[image:var(--gradient-brand)]"
                          style={{ width: `${job.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
