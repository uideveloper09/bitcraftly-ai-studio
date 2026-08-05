'use client';

import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';
import { cn } from '../lib/cn';

const fieldBase =
  'w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-2.5 text-sm text-[var(--color-fg)] placeholder:text-[var(--color-fg-subtle)] transition-colors focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20 disabled:cursor-not-allowed disabled:opacity-50';

export interface FieldProps {
  label: string;
  htmlFor: string;
  hint?: string;
  error?: string;
  children: ReactNode;
}

export function Field({ label, htmlFor, hint, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-[var(--color-fg)]">
        {label}
      </label>
      {children}
      {hint && !error ? <p className="text-xs text-[var(--color-fg-muted)]">{hint}</p> : null}
      {error ? (
        <p className="text-xs text-[var(--color-danger)]" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return <input className={cn(fieldBase, className)} {...props} />;
}

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className, ...props }: TextareaProps) {
  return <textarea className={cn(fieldBase, 'min-h-[96px] resize-y', className)} {...props} />;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: ReadonlyArray<{ value: string | number; label: string }>;
}

export function Select({ className, options, ...props }: SelectProps) {
  return (
    <select className={cn(fieldBase, 'appearance-none pr-8', className)} {...props}>
      {options.map((opt) => (
        <option key={String(opt.value)} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
