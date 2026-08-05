/**
 * Web app shared types (presentation layer only).
 */

export interface NavItem {
  href: string;
  label: string;
  icon?: 'dashboard' | 'reels' | 'analytics' | 'settings';
}

export interface BreadcrumbEntry {
  label: string;
  href?: string;
}

export interface UserMenuProfile {
  name: string;
  email: string;
  initials: string;
}
