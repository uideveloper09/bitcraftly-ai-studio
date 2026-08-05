'use client';

import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../lib/cn';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline' | 'brand';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-accent)] text-[var(--color-accent-fg)] shadow-[var(--shadow-sm)] hover:opacity-92 active:scale-[0.98]',
  brand:
    'bg-[image:var(--gradient-brand)] bg-[length:200%_200%] bg-[position:0%_50%] text-white shadow-[var(--shadow-brand)] hover:bg-[position:100%_50%] hover:shadow-[var(--shadow-brand-hover)] hover:brightness-[1.04] hover:scale-[1.02] active:scale-[0.98]',
  secondary:
    'bg-[var(--color-surface-elevated)] text-[var(--color-fg)] hover:bg-[var(--color-border)] active:scale-[0.98]',
  ghost:
    'bg-transparent text-[var(--color-fg-muted)] hover:bg-[var(--color-surface-elevated)] hover:text-[var(--color-fg)] active:scale-[0.98]',
  danger: 'bg-[var(--color-danger)] text-white hover:opacity-90 active:scale-[0.98]',
  outline:
    'border border-[var(--border-glass)] bg-[var(--color-surface)]/85 text-[var(--color-fg)] shadow-[var(--shadow-xs)] backdrop-blur-sm hover:border-[var(--border-glass-strong)] hover:bg-[var(--color-surface)] hover:shadow-[var(--shadow-sm)] active:scale-[0.98]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-sm rounded-lg',
  md: 'h-10 px-4 text-sm rounded-xl',
  lg: 'h-12 px-6 text-base rounded-xl',
};

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled || loading}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-medium',
        'transition-[transform,box-shadow,opacity,background-color,border-color,filter,background-position] duration-[var(--duration-cta)] ease-[var(--ease-out)]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-info)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]',
        'disabled:pointer-events-none disabled:opacity-50',
        'motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100',
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? (
        <span
          className="size-4 animate-spin rounded-full border-2 border-current border-r-transparent"
          aria-hidden
        />
      ) : null}
      {children}
    </button>
  );
}
