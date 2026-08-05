import Image from 'next/image';
import { cn } from '@bitcraftly/ui';
import { LANDING_MAX_WIDTH_CLASS, LANDING_PADDING_X_CLASS } from '../landing.constants';
import { HERO_ROBOT_SRC } from './hero.constants';
import { HeroActions } from './HeroActions';
import { HeroBackground } from './HeroBackground';
import { HeroCircuitStrip } from './HeroCircuitStrip';
import { HeroContent } from './HeroContent';
import { HeroDashboard } from './HeroDashboard';
import { HeroFeatureList } from './HeroFeatureList';
import { HeroRobotElectric } from './HeroRobotElectric';

/**
 * Left copy top-aligned · lead strip bottom-aligned with dashboard.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative isolate w-full overflow-x-clip">
      <HeroBackground />
      <HeroCircuitStrip position="top" />
      <HeroCircuitStrip position="bottom" />

      <div
        className={cn(
          'relative z-10 mx-auto',
          LANDING_MAX_WIDTH_CLASS,
          LANDING_PADDING_X_CLASS,
          'py-12',
        )}
      >
        <div
          className={cn(
            'relative flex flex-col gap-[var(--space-10)]',
            'lg:flex-row lg:items-start lg:gap-[var(--space-4)]',
          )}
        >
          <div
            className={cn(
              'relative z-30 w-full max-w-[34rem] shrink-0 lg:w-[44%]',
              'motion-stagger-in motion-delay-1',
            )}
          >
            <HeroContent />
            <HeroActions />
          </div>

          <div
            className={cn(
              'relative z-10 w-full lg:min-w-0 lg:flex-1',
              'motion-stagger-in motion-delay-3',
            )}
          >
            <div className="relative ml-auto w-full max-w-[40rem] lg:max-w-none">
              <div className="relative ml-auto w-full lg:w-[94%]">
                <div className="motion-float-dashboard">
                  <HeroDashboard />
                </div>

                <div
                  className={cn(
                    'pointer-events-none absolute z-30 select-none bg-transparent',
                    'bottom-2 left-[-22%] h-[64%] w-auto sm:bottom-3 sm:left-[-25%] sm:h-[68%]',
                    'lg:bottom-3 lg:left-[-32%] lg:h-[72%]',
                  )}
                  aria-hidden
                >
                  <div className="motion-float-robot relative inline-block h-full">
                    <Image
                      src={HERO_ROBOT_SRC}
                      alt=""
                      width={514}
                      height={1024}
                      className={cn(
                        'h-full w-auto max-w-none bg-transparent object-contain object-bottom',
                        'drop-shadow-[0_24px_48px_rgba(59,130,246,0.18)]',
                        '[mask-image:linear-gradient(to_bottom,black_92%,transparent_100%)]',
                        '[-webkit-mask-image:linear-gradient(to_bottom,black_92%,transparent_100%)]',
                      )}
                      priority
                    />
                    <HeroRobotElectric />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lead strip — 54% width, slightly above dashboard bottom */}
          <div className="motion-stagger-in motion-delay-5 absolute bottom-1 left-0 z-40 hidden w-full max-w-[40rem] lg:bottom-2 lg:block lg:w-[54%] lg:max-w-[42rem]">
            <HeroFeatureList />
          </div>
        </div>

        <div className="motion-stagger-in motion-delay-5 relative z-40 mt-[var(--space-8)] w-full max-w-[40rem] lg:hidden">
          <HeroFeatureList />
        </div>
      </div>
    </section>
  );
}
