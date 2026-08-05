import Image from 'next/image';
import { APP_SHORT_NAME } from '@bitcraftly/shared';
import { cn } from '@bitcraftly/ui';

type RoboticPageLoaderProps = {
  /** Full viewport boot screen vs compact route loader */
  variant?: 'full' | 'compact';
  label?: string;
  className?: string;
};

/**
 * Robotic / HUD page loader — octagon frame, electric current, centered brand logo.
 */
export function RoboticPageLoader({
  variant = 'full',
  label = 'Initializing',
  className,
}: RoboticPageLoaderProps) {
  const isFull = variant === 'full';

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={label}
      className={cn(
        'relative flex flex-col items-center justify-center overflow-hidden',
        isFull
          ? 'min-h-screen w-full bg-[linear-gradient(180deg,#f2f6fb_0%,#f7f9fc_45%,#ffffff_100%)]'
          : 'min-h-[40vh] w-full bg-transparent',
        className,
      )}
    >
      {isFull ? (
        <>
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.28) 1px, transparent 0)',
              backgroundSize: '18px 18px',
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-1/2 top-1/3 size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(147,197,253,0.22)_0%,transparent_70%)] blur-2xl"
            aria-hidden
          />
          {/* Soft circuit rail accents */}
          <svg
            className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-10 w-[min(90%,42rem)] text-[#93c5fd]/50"
            viewBox="0 0 640 40"
            fill="none"
            aria-hidden
          >
            <path
              d="M20 20 H200 L220 8 H420 L440 20 H620"
              stroke="currentColor"
              strokeWidth="1"
              pathLength={1}
              strokeDasharray="0.12 0.88"
              className="animate-[circuit-current_3.2s_linear_infinite] motion-reduce:animate-none"
            />
          </svg>
        </>
      ) : null}

      <div className="relative flex flex-col items-center gap-5">
        {/* HUD octagon + logo core */}
        <div className={cn('relative', isFull ? 'size-[8.5rem] sm:size-[10rem]' : 'size-[6.5rem]')}>
          <svg
            className="absolute inset-0 size-full overflow-visible"
            viewBox="0 0 120 120"
            fill="none"
            aria-hidden
          >
            <defs>
              <filter id="loader-electric-glow" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="1.6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="loader-electric-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#67e8f9" />
                <stop offset="45%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
            </defs>

            <path
              d="M40 8 H80 L112 40 V80 L80 112 H40 L8 80 V40 Z"
              fill="white"
              stroke="#93c5fd"
              strokeWidth="1.5"
            />
            <path
              d="M44 18 H76 L102 44 V76 L76 102 H44 L18 76 V44 Z"
              stroke="#60a5fa"
              strokeWidth="0.9"
              strokeDasharray="3 3"
              opacity="0.45"
            />

            <path
              d="M2 54 H12 M2 60 H16 M2 66 H12"
              stroke="#60a5fa"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
            <path
              d="M118 54 H108 M118 60 H104 M118 66 H108"
              stroke="#60a5fa"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
            <path
              d="M54 2 V10 M60 2 V14 M66 2 V10"
              stroke="#60a5fa"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d="M54 118 V110 M60 118 V106 M66 118 V110"
              stroke="#60a5fa"
              strokeWidth="1.2"
              strokeLinecap="round"
            />

            <circle cx="40" cy="8" r="2" fill="#60a5fa" />
            <circle cx="80" cy="8" r="2" fill="#60a5fa" />
            <circle cx="40" cy="112" r="2" fill="#60a5fa" />
            <circle cx="80" cy="112" r="2" fill="#60a5fa" />

            <g className="motion-reduce:hidden" filter="url(#loader-electric-glow)">
              <path
                d="M40 8 H80 L112 40 V80 L80 112 H40 L8 80 V40 Z"
                stroke="url(#loader-electric-grad)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength={1}
                strokeDasharray="0.16 0.84"
                className="animate-[circuit-current_2.4s_ease-in-out_infinite]"
              />
              <path
                d="M44 18 H76 L102 44 V76 L76 102 H44 L18 76 V44 Z"
                stroke="url(#loader-electric-grad)"
                strokeWidth="1.4"
                strokeLinecap="round"
                pathLength={1}
                strokeDasharray="0.2 0.8"
                className="animate-[circuit-current_3s_ease-in-out_0.5s_infinite]"
              />
            </g>

            <g className="motion-reduce:hidden" fill="#67e8f9" filter="url(#loader-electric-glow)">
              <circle
                cx="40"
                cy="8"
                r="2.4"
                className="animate-[circuit-node-pulse_2.4s_ease-in-out_infinite]"
              />
              <circle
                cx="80"
                cy="8"
                r="2.4"
                className="animate-[circuit-node-pulse_2.4s_ease-in-out_0.4s_infinite]"
              />
              <circle
                cx="80"
                cy="112"
                r="2.4"
                className="animate-[circuit-node-pulse_2.4s_ease-in-out_0.9s_infinite]"
              />
              <circle
                cx="40"
                cy="112"
                r="2.4"
                className="animate-[circuit-node-pulse_2.4s_ease-in-out_1.3s_infinite]"
              />
            </g>

            {/* Orbit rings around logo */}
            <circle
              cx="60"
              cy="60"
              r="28"
              stroke="#93c5fd"
              strokeWidth="1"
              strokeDasharray="6 8"
              className="origin-center animate-[loader-spin_8s_linear_infinite] motion-reduce:animate-none"
              style={{ transformOrigin: '60px 60px' }}
            />
            <circle
              cx="60"
              cy="60"
              r="22"
              stroke="url(#loader-electric-grad)"
              strokeWidth="1.5"
              strokeDasharray="10 20"
              className="origin-center animate-[loader-spin_2.8s_linear_infinite] motion-reduce:animate-none"
              style={{ transformOrigin: '60px 60px' }}
            />
          </svg>

          {/* Center logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={cn(
                'relative flex items-center justify-center rounded-full bg-white/90',
                'shadow-[0_0_24px_rgba(59,130,246,0.28)]',
                'animate-[loader-core_2s_ease-in-out_infinite] motion-reduce:animate-none',
                isFull ? 'size-[3.25rem] sm:size-[3.75rem]' : 'size-[2.75rem]',
              )}
            >
              <Image
                src="/brand/logo.png"
                alt={APP_SHORT_NAME}
                width={56}
                height={56}
                priority
                className={cn('object-contain', isFull ? 'size-9 sm:size-10' : 'size-8')}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <p className="font-display text-[15px] font-bold uppercase tracking-[0.18em] text-[#0b1220] sm:text-[16px]">
            {APP_SHORT_NAME}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#64748b]">
            {label}
            <span className="inline-block w-6 animate-[loader-dots_1.2s_steps(4,end)_infinite] text-left motion-reduce:animate-none">
              ...
            </span>
          </p>
        </div>

        <div className="relative h-[3px] w-40 overflow-hidden rounded-full bg-[#e2e8f0] sm:w-48">
          <span
            className={cn(
              'absolute inset-y-0 left-0 w-1/3 rounded-full',
              'bg-[linear-gradient(90deg,#67e8f9,#3b82f6,#a78bfa)]',
              'animate-[loader-rail_1.4s_ease-in-out_infinite] motion-reduce:animate-none',
            )}
          />
        </div>

        {isFull ? (
          <ul
            className="hidden space-y-1 font-mono text-[10px] uppercase tracking-wide text-[#94a3b8] sm:block"
            aria-hidden
          >
            <li className="animate-[loader-status_2.4s_ease-in-out_infinite] motion-reduce:animate-none">
              <span className="text-[#22c55e]">▸</span> core.link
            </li>
            <li className="animate-[loader-status_2.4s_ease-in-out_0.4s_infinite] motion-reduce:animate-none">
              <span className="text-[#3b82f6]">▸</span> ai.modules
            </li>
            <li className="animate-[loader-status_2.4s_ease-in-out_0.8s_infinite] motion-reduce:animate-none">
              <span className="text-[#a78bfa]">▸</span> studio.ready
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
}
