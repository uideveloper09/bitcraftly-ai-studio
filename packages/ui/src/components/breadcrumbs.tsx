import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../lib/cn';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  renderLink?: (item: BreadcrumbItem, className: string) => ReactNode;
}

export function Breadcrumbs({ items, renderLink, className, ...props }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('text-[var(--text-sm)]', className)} {...props}>
      <ol className="flex flex-wrap items-center gap-[var(--space-2)] text-[var(--color-fg-muted)]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const linkClass = isLast
            ? 'font-medium text-[var(--color-fg)]'
            : 'transition-colors hover:text-[var(--color-fg)]';

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-[var(--space-2)]">
              {index > 0 ? (
                <span className="text-[var(--color-fg-subtle)]" aria-hidden>
                  /
                </span>
              ) : null}
              {item.href && !isLast && renderLink ? (
                renderLink(item, linkClass)
              ) : (
                <span className={linkClass} aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
