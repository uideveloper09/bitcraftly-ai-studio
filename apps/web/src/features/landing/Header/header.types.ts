import type { Route } from 'next';

export type HeaderNavItem = {
  readonly id: string;
  readonly label: string;
  readonly href: Route | string;
  readonly hasChevron?: boolean;
};

export type HeaderActionItem = {
  readonly id: string;
  readonly label: string;
  readonly href: Route | string;
};
