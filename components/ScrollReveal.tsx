"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Wraps children in a container that fades + slides in on scroll.
 *
 * Uses native CSS scroll-driven animations in supporting browsers
 * (Chrome 115+, Safari 26+) and falls back to IntersectionObserver
 * for Firefox and older browsers.
 */
export function ScrollReveal({ children, className = "", delay }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If the browser supports native scroll-driven animations, bail out —
    // the CSS handles everything via the .scroll-reveal class.
    if (
      CSS.supports("(animation-timeline: view()) and (animation-range: entry)")
    ) {
      return;
    }

    // Fallback: use IntersectionObserver
    el.classList.add("scroll-reveal-fallback");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${className}`}
      data-delay={delay}
    >
      {children}
    </div>
  );
}
