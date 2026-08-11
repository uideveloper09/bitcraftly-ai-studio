import { APP_NAME, UI_COPY } from '@bitcraftly/shared';

export function AppFooter() {
  return (
    <footer className="shrink-0 border-t border-[var(--border-glass)] bg-[color-mix(in_oklab,var(--color-surface)_85%,transparent)] px-[var(--space-4)] py-[var(--space-3)] backdrop-blur-md md:px-[var(--space-6)]">
      <div className="flex flex-wrap items-center justify-between gap-[var(--space-2)] text-[var(--color-fg-subtle)] text-[var(--text-xs)]">
        <p>{UI_COPY.FOOTER_COPYRIGHT}</p>
        <p className="font-medium text-[var(--color-fg-muted)]">{APP_NAME}</p>
      </div>
    </footer>
  );
}
