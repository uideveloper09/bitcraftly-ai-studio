import Image from 'next/image';
import Link from 'next/link';
import { APP_BRAND_TAGLINE, APP_SHORT_NAME } from '@bitcraftly/shared';
import { cn } from '@bitcraftly/ui';

export interface BrandLogoProps {
  href?: string;
  /** Compact mark-only (collapsed sidebar) */
  compact?: boolean;
  className?: string;
  priority?: boolean;
}

/**
 * Official Bitcraftly mark (from bitcraftly.com) with brand tagline under the logo.
 */
export function BrandLogo({
  href = '/',
  compact = false,
  className,
  priority = false,
}: BrandLogoProps) {
  if (compact) {
    return (
      <Link
        href={href}
        className={cn('inline-flex shrink-0', className)}
        aria-label={APP_SHORT_NAME}
      >
        <Image
          src="/brand/logo-mark.webp"
          alt={APP_SHORT_NAME}
          width={28}
          height={28}
          className="size-7 object-contain"
          priority={priority}
        />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn('inline-flex min-w-0 items-center gap-2.5', className)}
      aria-label={`${APP_SHORT_NAME} — ${APP_BRAND_TAGLINE}`}
    >
      <Image
        src="/brand/logo-mark.webp"
        alt=""
        width={36}
        height={36}
        className="size-9 shrink-0 object-contain"
        priority={priority}
      />
      <span className="flex min-w-0 flex-col leading-tight">
        <span className="truncate font-semibold tracking-tight text-[var(--color-fg)] text-[var(--text-sm)]">
          {APP_SHORT_NAME}
        </span>
        <span className="truncate text-[10px] text-[var(--color-fg-muted)] sm:text-[11px]">
          {APP_BRAND_TAGLINE}
        </span>
      </span>
    </Link>
  );
}
