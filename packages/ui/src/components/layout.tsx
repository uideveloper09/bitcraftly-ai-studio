import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../lib/cn';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'full';
}

const sizeStyles = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-[var(--content-max)]',
  full: 'max-w-none',
} as const;

export function Container({ children, size = 'lg', className, ...props }: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full', sizeStyles[size], className)} {...props}>
      {children}
    </div>
  );
}

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  gap?: 'sm' | 'md' | 'lg';
}

const gapStyles = {
  sm: 'gap-[var(--space-4)]',
  md: 'gap-[var(--space-6)]',
  lg: 'gap-[var(--space-8)]',
} as const;

export function Section({ children, gap = 'md', className, ...props }: SectionProps) {
  return (
    <section className={cn('flex flex-col', gapStyles[gap], className)} {...props}>
      {children}
    </section>
  );
}
