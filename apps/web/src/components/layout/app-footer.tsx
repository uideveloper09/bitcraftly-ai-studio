import { APP_NAME, UI_COPY } from '@bitcraftly/shared';

export function AppFooter() {
  return (
    <footer className="shrink-0 border-t border-[var(--color-border)] bg-[var(--color-surface)] px-[var(--space-4)] py-[var(--space-3)] md:px-[var(--space-6)]">
      <div className="flex flex-wrap items-center justify-between gap-[var(--space-2)] text-[var(--color-fg-subtle)] text-[var(--text-xs)]">
        <p>{UI_COPY.FOOTER_COPYRIGHT}</p>
        <p>{APP_NAME} · UI Foundation</p>
      </div>
    </footer>
  );
}
