import type { Metadata } from 'next';
import { APP_NAME, APP_DESCRIPTION } from '@bitcraftly/shared';
import { Footer, Header, Hero, Modules } from '@/features/landing';

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

/**
 * Landing page skeleton — layout hierarchy only.
 */
export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:border focus:border-neutral-300 focus:bg-neutral-100 focus:px-3 focus:py-2"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <Modules />
      </main>

      <Footer />
    </div>
  );
}
