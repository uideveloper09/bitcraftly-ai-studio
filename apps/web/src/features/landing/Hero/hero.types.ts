export type HeroFeature = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly tone: 'violet' | 'cyan' | 'emerald';
};

export type HeroStat = {
  readonly id: string;
  readonly label: string;
  readonly value: string;
  readonly tone: 'violet' | 'emerald' | 'amber' | 'sky';
};

export type HeroActivityItem = {
  readonly id: string;
  readonly title: string;
  readonly meta: string;
  readonly time: string;
  readonly status: 'success' | 'info' | 'pending';
};

export type HeroQueueItem = {
  readonly id: string;
  readonly title: string;
  readonly progress: number;
  readonly state: 'running' | 'queued';
  readonly stateLabel: string;
};

export type HeroSidebarItem = {
  readonly id: string;
  readonly label: string;
  readonly active?: boolean;
};
