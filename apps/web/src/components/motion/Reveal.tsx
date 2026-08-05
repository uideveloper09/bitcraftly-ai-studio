'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@bitcraftly/ui';

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Extra delay utility class e.g. motion-delay-2 */
  delayClassName?: string;
  /** Play once when entering viewport */
  once?: boolean;
};

/**
 * Scroll-once reveal — CSS animation only, no layout shift after reveal.
 * prefers-reduced-motion: stay visible via CSS (no JS setState).
 */
export function Reveal({ children, className, delayClassName, once = true }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setVisible(true);
        if (once) observer.disconnect();
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={cn(
        visible ? cn('motion-reveal', delayClassName) : 'opacity-0 motion-reduce:opacity-100',
        className,
      )}
    >
      {children}
    </div>
  );
}
