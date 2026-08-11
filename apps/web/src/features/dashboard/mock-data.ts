/**
 * Dashboard mock data — UI only, no backend.
 */

export type StatTone = 'sky' | 'emerald' | 'violet' | 'amber';

export interface DashboardStat {
  id: string;
  label: string;
  value: string;
  hint: string;
  trend: string;
  tone: StatTone;
  progress?: number;
}

export interface ActivityItem {
  id: string;
  title: string;
  detail: string;
  time: string;
  tone: 'default' | 'success' | 'warning' | 'info';
}

export interface QueueItem {
  id: string;
  title: string;
  module: string;
  progress: number;
  status: string;
}

export interface SystemStatusItem {
  id: string;
  name: string;
  status: 'operational' | 'degraded' | 'offline';
  latency: string;
}

export interface QuickAction {
  id: string;
  label: string;
  href: string;
  description: string;
}

export const DASHBOARD_STATS: DashboardStat[] = [
  {
    id: 'total-generations',
    label: 'Total Generations',
    value: '1,284',
    hint: 'All modules',
    trend: '+12% this week',
    tone: 'violet',
  },
  {
    id: 'todays-jobs',
    label: "Today's Jobs",
    value: '36',
    hint: 'Completed today',
    trend: '8 in progress',
    tone: 'emerald',
  },
  {
    id: 'queue-status',
    label: 'Queue Status',
    value: 'Healthy',
    hint: '3 active workers',
    trend: 'Avg wait 14s',
    tone: 'sky',
  },
  {
    id: 'storage-used',
    label: 'Storage Used',
    value: '18.4 GB',
    hint: 'of 100 GB',
    trend: '82% free',
    tone: 'amber',
    progress: 18,
  },
];

export const RECENT_ACTIVITY: ActivityItem[] = [
  {
    id: 'a1',
    title: 'Reel rendered',
    detail: '“Future of remote work” completed successfully',
    time: '2 min ago',
    tone: 'success',
  },
  {
    id: 'a2',
    title: 'Script generated',
    detail: 'Educational style · 30s · English',
    time: '11 min ago',
    tone: 'info',
  },
  {
    id: 'a3',
    title: 'Queue spike cleared',
    detail: 'Worker pool scaled back to baseline',
    time: '28 min ago',
    tone: 'default',
  },
  {
    id: 'a4',
    title: 'Settings updated',
    detail: 'Default voice set to Nova',
    time: '1 hr ago',
    tone: 'default',
  },
  {
    id: 'a5',
    title: 'Storage warning',
    detail: 'Workspace approaching soft quota',
    time: '3 hr ago',
    tone: 'warning',
  },
];

export const GENERATION_QUEUE: QueueItem[] = [
  {
    id: 'q1',
    title: 'Brand launch teaser',
    module: 'Reels',
    progress: 72,
    status: 'Rendering',
  },
  {
    id: 'q2',
    title: 'Product tip series #4',
    module: 'Reels',
    progress: 41,
    status: 'Voicing',
  },
  {
    id: 'q3',
    title: 'Weekly recap hook',
    module: 'Reels',
    progress: 18,
    status: 'Scripting',
  },
];

export const SYSTEM_STATUS: SystemStatusItem[] = [
  { id: 's1', name: 'API Gateway', status: 'operational', latency: '42ms' },
  { id: 's2', name: 'Queue Workers', status: 'operational', latency: '11ms' },
  { id: 's3', name: 'Object Storage', status: 'operational', latency: '68ms' },
  { id: 's4', name: 'Auth Service', status: 'operational', latency: '35ms' },
];

export const QUICK_ACTIONS: QuickAction[] = [
  {
    id: 'qa1',
    label: 'New AI Reel',
    href: '/studio/reels',
    description: 'Generate a short-form video from a topic',
  },
  {
    id: 'qa2',
    label: 'Open Analytics',
    href: '/studio/analytics',
    description: 'Review performance across modules',
  },
  {
    id: 'qa3',
    label: 'Workspace settings',
    href: '/settings',
    description: 'Theme, language, and notifications',
  },
];
