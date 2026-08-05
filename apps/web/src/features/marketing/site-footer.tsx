import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import {
  APP_BRAND_TAGLINE,
  APP_SHORT_NAME,
  BRAND_CONTACT,
  BRAND_LINKS,
  LANDING_COPY,
  NAV_ITEMS,
  ROUTES,
} from '@bitcraftly/shared';
import { cn } from '@bitcraftly/ui';
import {
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon,
  YouTubeIcon,
} from '@/components/icons';
import {
  LANDING_MAX_WIDTH_CLASS,
  LANDING_PADDING_X_CLASS,
} from '@/features/landing/landing.constants';
import { Reveal } from '@/components/motion/Reveal';

const PRODUCT_LINKS = [
  { href: ROUTES.STUDIO, label: LANDING_COPY.NAV_STUDIO },
  { href: ROUTES.STUDIO_REELS, label: LANDING_COPY.MODULE_REELS },
  { href: ROUTES.STUDIO_POSTS, label: LANDING_COPY.MODULE_POSTS },
  { href: ROUTES.STUDIO_IMAGES, label: LANDING_COPY.MODULE_IMAGES },
  { href: ROUTES.STUDIO_VIDEOS, label: LANDING_COPY.MODULE_VIDEOS },
  { href: ROUTES.SETTINGS, label: NAV_ITEMS.SETTINGS },
  { href: '#pricing', label: LANDING_COPY.NAV_PRICING },
] as const;

const COMPANY_LINKS = [
  { href: BRAND_LINKS.WEBSITE, label: LANDING_COPY.COMPANY_ABOUT },
  { href: BRAND_LINKS.WEBSITE, label: LANDING_COPY.COMPANY_WORK },
  { href: BRAND_LINKS.WEBSITE, label: LANDING_COPY.COMPANY_INDUSTRY },
  { href: BRAND_LINKS.WEBSITE, label: LANDING_COPY.COMPANY_CAREERS },
  { href: BRAND_LINKS.EMAIL, label: LANDING_COPY.COMPANY_EMAIL },
] as const;

const RESOURCE_LINKS = [
  { href: BRAND_LINKS.WEBSITE, label: LANDING_COPY.RESOURCES_DOCS },
  { href: BRAND_LINKS.WEBSITE, label: LANDING_COPY.RESOURCES_BLOG },
  { href: BRAND_LINKS.WEBSITE, label: LANDING_COPY.RESOURCES_HELP },
  { href: BRAND_LINKS.WEBSITE, label: LANDING_COPY.RESOURCES_API },
  { href: BRAND_LINKS.WEBSITE, label: LANDING_COPY.RESOURCES_CHANGELOG },
] as const;

/** Order + URLs matched to https://bitcraftly.com footer */
const SOCIAL = [
  { href: BRAND_LINKS.LINKEDIN, label: 'LinkedIn', icon: LinkedInIcon },
  { href: BRAND_LINKS.INSTAGRAM, label: 'Instagram', icon: InstagramIcon },
  { href: BRAND_LINKS.YOUTUBE, label: 'YouTube', icon: YouTubeIcon },
  { href: BRAND_LINKS.TWITTER, label: 'X', icon: TwitterIcon },
  { href: BRAND_LINKS.FACEBOOK, label: 'Facebook', icon: FacebookIcon },
] as const;

const CONTACT_ROWS = [
  {
    href: BRAND_LINKS.EMAIL,
    label: BRAND_CONTACT.EMAIL,
    icon: MailIcon,
  },
  {
    href: BRAND_LINKS.PHONE,
    label: BRAND_CONTACT.PHONE,
    icon: PhoneIcon,
  },
  {
    href: undefined,
    label: BRAND_CONTACT.LOCATION,
    icon: MapPinIcon,
  },
] as const;

/** HUD / schematic frame with notched corners */
function TechFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('relative', className)}>
      <div className="relative border border-[var(--border-glass)] bg-[color-mix(in_oklab,#fbfcfe_92%,white)] shadow-[var(--shadow-xs)] backdrop-blur-[2px]">
        {/* Corner L-brackets */}
        <span
          className="pointer-events-none absolute left-[-1px] top-[-1px] size-4 border-l-[1.5px] border-t-[1.5px] border-[#7aa2d6]/80"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute right-[-1px] top-[-1px] size-4 border-r-[1.5px] border-t-[1.5px] border-[#7aa2d6]/80"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute bottom-[-1px] left-[-1px] size-4 border-b-[1.5px] border-l-[1.5px] border-[#7aa2d6]/80"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute bottom-[-1px] right-[-1px] size-4 border-b-[1.5px] border-r-[1.5px] border-[#7aa2d6]/80"
          aria-hidden
        />

        {/* Edge ticks */}
        <span
          className="pointer-events-none absolute left-1/2 top-[-1px] h-2.5 w-10 -translate-x-1/2 border-t-[1.5px] border-[#93b4de]"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute bottom-[-1px] left-1/2 h-2.5 w-10 -translate-x-1/2 border-b-[1.5px] border-[#93b4de]"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute left-[-1px] top-1/2 h-10 w-2.5 -translate-y-1/2 border-l-[1.5px] border-[#93b4de]"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute right-[-1px] top-1/2 h-10 w-2.5 -translate-y-1/2 border-r-[1.5px] border-[#93b4de]"
          aria-hidden
        />

        {/* Small mid-side notches */}
        <span
          className="pointer-events-none absolute left-[-1px] top-8 h-3 w-2 border-b border-l border-t border-[#a8c0e0] bg-[#fbfcfe]"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute right-[-1px] top-8 h-3 w-2 border-b border-r border-t border-[#a8c0e0] bg-[#fbfcfe]"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute bottom-8 left-[-1px] h-3 w-2 border-b border-l border-t border-[#a8c0e0] bg-[#fbfcfe]"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute bottom-8 right-[-1px] h-3 w-2 border-b border-r border-t border-[#a8c0e0] bg-[#fbfcfe]"
          aria-hidden
        />

        {children}
      </div>
    </div>
  );
}

function FooterLogo() {
  return (
    <Link
      href={ROUTES.HOME}
      className="group inline-flex min-w-0 max-w-full items-end gap-2.5 no-underline"
      aria-label={`${APP_SHORT_NAME} — ${APP_BRAND_TAGLINE}`}
    >
      <span className="relative h-11 w-[64px] shrink-0 bg-transparent">
        <Image
          src="/brand/logo.png"
          alt=""
          fill
          sizes="64px"
          className="object-contain object-left"
        />
      </span>
      <span className="flex min-w-0 flex-col justify-end gap-1 pb-px">
        <span className="whitespace-nowrap text-[18px] font-bold leading-none tracking-[-0.03em] text-[#000726]">
          {APP_SHORT_NAME}
        </span>
        <span className="max-w-[220px] truncate text-[10px] font-medium leading-none text-[#346c84]">
          {APP_BRAND_TAGLINE}
        </span>
      </span>
    </Link>
  );
}

function PoweredByBadge() {
  const bevel =
    '[clip-path:polygon(9px_0%,calc(100%-9px)_0%,100%_9px,100%_calc(100%-9px),calc(100%-9px)_100%,9px_100%,0%_calc(100%-9px),0%_9px)]';

  return (
    <a
      href={BRAND_LINKS.WEBSITE}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group relative inline-flex items-center justify-center',
        'px-[1.15rem] py-[0.55rem]',
        bevel,
      )}
    >
      <span className={cn('absolute inset-0 bg-[#8eb4e8]', bevel)} aria-hidden />
      <span
        className={cn(
          'absolute inset-[1px] bg-white transition-colors group-hover:bg-[#f8faff]',
          bevel,
        )}
        aria-hidden
      />

      <span className="relative z-[1] inline-flex items-center gap-[0.55rem]">
        <span aria-hidden className="text-[13px] font-semibold leading-none text-[#3b82f6]">
          +
        </span>
        <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#2563eb]">
          {LANDING_COPY.FOOTER_POWERED_BY}
        </span>
        <span
          aria-hidden
          className="text-[13px] leading-none text-[#93c5fd] transition-transform group-hover:translate-x-0.5 group-hover:text-[#60a5fa]"
        >
          →
        </span>
      </span>
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className={cn(
        'relative z-10 overflow-hidden',
        'bg-[linear-gradient(180deg,#f7f8fc_0%,#f3f5fa_55%,#eef1f8_100%)]',
        'pb-[var(--space-6)] pt-[var(--space-12)]',
        LANDING_PADDING_X_CLASS,
      )}
    >
      {/* Soft grain / atmosphere — very light */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.22)_1px,transparent_0)] [background-size:18px_18px]"
        aria-hidden
      />
      <div
        className="motion-glow-pulse pointer-events-none absolute left-1/2 top-10 size-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(147,197,253,0.05)_0%,transparent_70%)] blur-2xl"
        aria-hidden
      />

      <Reveal className={cn('relative mx-auto', LANDING_MAX_WIDTH_CLASS)}>
        <TechFrame>
          <div
            className={cn(
              'grid gap-10 px-6 py-10 sm:px-8 lg:px-10 lg:py-12',
              'lg:grid-cols-[1.45fr_1fr_1fr_1fr_1.2fr] lg:gap-8',
            )}
          >
            {/* Brand */}
            <div>
              <FooterLogo />
              <p className="mt-5 max-w-[16.5rem] text-[13px] leading-relaxed text-[#64748b]">
                {LANDING_COPY.FOOTER_BLURB}
              </p>
              <div className="mt-6 flex items-center gap-2.5">
                {SOCIAL.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Bitcraftly on ${item.label}`}
                      className={cn(
                        'motion-social inline-flex size-9 items-center justify-center rounded-full',
                        'border border-[var(--border-glass)] bg-white/95 text-[#64748b] shadow-[var(--shadow-xs)]',
                        'hover:border-[var(--border-glass-strong)] hover:text-[#2563eb]',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-info)] focus-visible:ring-offset-2',
                      )}
                    >
                      <Icon className="size-3.5" />
                    </a>
                  );
                })}
              </div>
            </div>

            <FooterColumn title={LANDING_COPY.FOOTER_PRODUCT} links={PRODUCT_LINKS} />
            <FooterColumn title={LANDING_COPY.FOOTER_COMPANY} links={COMPANY_LINKS} external />
            <FooterColumn title={LANDING_COPY.FOOTER_RESOURCES} links={RESOURCE_LINKS} external />

            {/* Contact */}
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#1e293b]">
                {LANDING_COPY.FOOTER_CONTACT}
              </p>
              <ul className="mt-4 space-y-3">
                {CONTACT_ROWS.map((row) => {
                  const Icon = row.icon;
                  const content = (
                    <>
                      <Icon className="mt-0.5 size-3.5 shrink-0 text-[#3b82f6]" />
                      <span>{row.label}</span>
                    </>
                  );
                  return (
                    <li key={row.label}>
                      {row.href ? (
                        <a
                          href={row.href}
                          className="motion-link-underline inline-flex items-start gap-2 text-[13px] text-[#64748b] hover:text-[#2563eb]"
                        >
                          {content}
                        </a>
                      ) : (
                        <span className="inline-flex items-start gap-2 text-[13px] text-[#64748b]">
                          {content}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>

              <a
                href={BRAND_LINKS.WEBSITE}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'motion-cta mt-6 inline-flex items-center gap-1.5 rounded-[0.875rem] border border-[#c4b5fd]/90 bg-white/95',
                  'px-4 py-2.5 text-[13px] font-semibold text-[#2563eb] shadow-[var(--shadow-xs)]',
                  'duration-[var(--duration-cta)]',
                  'hover:-translate-y-px hover:border-[#a78bfa] hover:bg-[#f8f7ff] hover:shadow-[var(--shadow-sm)]',
                  'active:scale-[0.98]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-info)] focus-visible:ring-offset-2',
                )}
              >
                {LANDING_COPY.CTA_BOOK_DEMO}
                <ArrowRightIcon className="size-3.5" />
              </a>
            </div>
          </div>
        </TechFrame>

        {/* Bottom legal bar */}
        <div
          id="pricing"
          className="mt-5 flex flex-col items-center gap-4 py-4 text-[12px] text-[#94a3b8] md:flex-row md:justify-between"
        >
          <p className="order-2 text-center md:order-1 md:text-left">
            {LANDING_COPY.FOOTER_RIGHTS}
          </p>

          <div className="order-1 md:order-2">
            <PoweredByBadge />
          </div>

          <div className="order-3 flex flex-wrap items-center justify-center gap-5">
            <a
              href={BRAND_LINKS.WEBSITE}
              className="motion-link-underline transition-colors hover:text-[#475569]"
            >
              {LANDING_COPY.FOOTER_PRIVACY}
            </a>
            <a
              href={BRAND_LINKS.WEBSITE}
              className="motion-link-underline transition-colors hover:text-[#475569]"
            >
              {LANDING_COPY.FOOTER_TERMS}
            </a>
            <a
              href={BRAND_LINKS.WEBSITE}
              target="_blank"
              rel="noopener noreferrer"
              className="motion-link-underline font-medium text-[#2563eb] hover:text-[#1d4ed8]"
            >
              bitcraftly.com
            </a>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  external = false,
}: {
  title: string;
  links: ReadonlyArray<{ href: string; label: string }>;
  external?: boolean;
}) {
  return (
    <div>
      <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#1e293b]">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((item) => {
          const linkClass = 'motion-link-underline text-[13px] text-[#64748b] hover:text-[#2563eb]';
          return (
            <li key={`${title}-${item.label}`}>
              {external || item.href.startsWith('http') || item.href.startsWith('mailto:') ? (
                <a
                  href={item.href}
                  className={linkClass}
                  {...(item.href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {item.label}
                </a>
              ) : (
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
