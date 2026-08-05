import { ROUTES, UI_COPY } from '@bitcraftly/shared';
import type {
  HeroActivityItem,
  HeroFeature,
  HeroQueueItem,
  HeroSidebarItem,
  HeroStat,
} from './hero.types';

export const HERO_BADGE_NEW = 'NEW' as const;
export const HERO_BADGE_LABEL = 'AI Reel Generator is live' as const;

export const HERO_TITLE_LINES = ['CREATE.', 'PUBLISH.'] as const;
export const HERO_TITLE_ACCENT = 'SCALE' as const;
export const HERO_TITLE_TAIL = 'WITH AI.' as const;

export const HERO_DESCRIPTION =
  'Enterprise AI content studio for reels, posts, images, and video — one workspace to create, automate, and publish at scale.' as const;

export const HERO_PRIMARY_CTA = {
  label: UI_COPY.GENERATE_REEL,
  href: ROUTES.STUDIO_REELS,
} as const;

export const HERO_SECONDARY_CTA = {
  label: UI_COPY.EXPLORE_DASHBOARD,
  href: ROUTES.STUDIO,
} as const;

export const HERO_FEATURES: readonly HeroFeature[] = [
  {
    id: 'ai-powered',
    title: 'AI-POWERED',
    description: 'Smart content creation',
    tone: 'cyan',
  },
  {
    id: 'multi-format',
    title: 'MULTI-FORMAT',
    description: 'Reels, posts, images & more',
    tone: 'violet',
  },
  {
    id: 'scale-securely',
    title: 'SECURE & SCALABLE',
    description: 'Enterprise grade security',
    tone: 'emerald',
  },
] as const;

export const HERO_ROBOT_SRC = '/hero/robot.png' as const;
export const HERO_DASHBOARD_STRIP_BG = '/hero/dashboard-strip-bg.png' as const;

export const HERO_DASHBOARD_OVERVIEW = 'OVERVIEW' as const;
export const HERO_DASHBOARD_WELCOME = 'Welcome back, Sanjay!' as const;
export const HERO_ACTIVITY_FOOTER = 'View all activity →' as const;
export const HERO_QUEUE_FOOTER = 'View full queue →' as const;

export type HeroStatExtended = HeroStat & {
  readonly delta?: string;
  readonly detail?: string;
  readonly progress?: number;
};

export const HERO_STATS: readonly HeroStatExtended[] = [
  {
    id: 'generations',
    label: 'Total Generations',
    value: '2,486',
    tone: 'violet',
    delta: '+12.5%',
  },
  {
    id: 'jobs',
    label: "Today's Jobs",
    value: '128',
    tone: 'emerald',
    delta: '+8.2%',
  },
  {
    id: 'queue',
    label: 'Queue Status',
    value: '8',
    tone: 'amber',
    detail: 'In progress',
  },
  {
    id: 'storage',
    label: 'Storage Used',
    value: '42.6 GB',
    tone: 'sky',
    detail: 'of 100 GB',
    progress: 43,
  },
] as const;

export const HERO_ACTIVITY: readonly HeroActivityItem[] = [
  {
    id: 'a1',
    title: 'AI Reel — Travel Tips',
    meta: 'Rendered successfully',
    time: '2m ago',
    status: 'success',
  },
  {
    id: 'a2',
    title: 'AI Post — Product Launch',
    meta: 'Ready for review',
    time: '15m ago',
    status: 'info',
  },
  {
    id: 'a3',
    title: 'AI Image — Brand Pack',
    meta: 'Queued',
    time: '28m ago',
    status: 'pending',
  },
  {
    id: 'a4',
    title: 'AI Video — Launch Teaser',
    meta: 'Uploading assets',
    time: '41m ago',
    status: 'info',
  },
] as const;

export const HERO_QUEUE: readonly HeroQueueItem[] = [
  {
    id: 'q1',
    title: 'AI Reel — Fitness Tips',
    progress: 72,
    state: 'running',
    stateLabel: 'Processing',
  },
  {
    id: 'q2',
    title: 'AI Post — Social Media',
    progress: 41,
    state: 'queued',
    stateLabel: 'Queued',
  },
  {
    id: 'q3',
    title: 'AI Image — Ad Creative',
    progress: 0,
    state: 'queued',
    stateLabel: 'Queued',
  },
] as const;

export const HERO_QUEUE_WIDTH_CLASS: Record<number, string> = {
  72: 'w-[72%]',
  41: 'w-[41%]',
  0: 'w-0',
  43: 'w-[43%]',
  68: 'w-[68%]',
};

export const HERO_SIDEBAR: readonly HeroSidebarItem[] = [
  { id: 'dashboard', label: 'Dashboard', active: true },
  { id: 'reels', label: 'AI Reels' },
  { id: 'posts', label: 'AI Posts' },
  { id: 'images', label: 'AI Images' },
  { id: 'videos', label: 'AI Videos' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'settings', label: 'Settings' },
] as const;

export const HERO_PRO_PLAN = {
  label: 'PRO PLAN',
  usagePercent: '68%',
  usageLabel: 'Credits Used',
  storage: '13.6 GB / 20 GB',
  percent: 68,
  cta: 'Upgrade Plan',
} as const;

export const HERO_BANNER_TITLE = 'Create content 10x faster with Bitcraftly AI Studio.' as const;
export const HERO_BANNER_SUB = 'From idea to publish — all in one place.' as const;

export const HERO_CONTROL_HEIGHT_CLASS = 'h-10' as const;
export const HERO_DESC_MAX_CLASS = 'max-w-[18.5rem] sm:max-w-[19.5rem] lg:max-w-[20.5rem]' as const;
