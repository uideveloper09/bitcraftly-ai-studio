/** Shared landing content rail — header, hero, modules, footer left edge aligns. */
export const LANDING_MAX_WIDTH_CLASS = 'max-w-7xl' as const;

/**
 * Horizontal inset matching target (~32px → 40px → 48px).
 * Keeps hero left gap aligned with header logo and footer.
 */
export const LANDING_PADDING_X_CLASS =
  'px-[var(--space-6)] sm:px-[var(--space-8)] lg:px-[var(--space-10)] xl:px-[var(--space-12)]' as const;
