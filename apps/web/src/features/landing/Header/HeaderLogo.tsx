import Image from 'next/image';
import Link from 'next/link';
import { APP_BRAND_TAGLINE, APP_SHORT_NAME, ROUTES } from '@bitcraftly/shared';

/**
 * Header brand — matched to bitcraftly.com header logo.
 * Mark + wordmark + tagline (items-end, 12px gap).
 */
export function HeaderLogo() {
  return (
    <Link
      href={ROUTES.HOME}
      className="group inline-flex min-w-0 max-w-full items-end gap-3 text-[var(--color-fg)] no-underline transition-opacity duration-200 hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
      aria-label={`${APP_SHORT_NAME} — ${APP_BRAND_TAGLINE}`}
    >
      <span className="relative h-[52px] w-[77px] shrink-0 bg-transparent transition-transform duration-200 group-hover:scale-[1.03]">
        <Image
          src="/brand/logo.png"
          alt=""
          fill
          sizes="77px"
          className="object-contain object-left"
          priority
        />
      </span>
      <span className="flex min-w-0 flex-col justify-end gap-[6px] pb-px">
        <span className="whitespace-nowrap font-sans text-[20px] font-bold leading-none tracking-[-0.03em] text-[#000726]">
          {APP_SHORT_NAME}
        </span>
        <span className="max-w-[260px] truncate font-sans text-[11px] font-medium leading-none tracking-[0.01em] text-[#346c84]">
          {APP_BRAND_TAGLINE}
        </span>
      </span>
    </Link>
  );
}
