"use client";

import { useEffect, useRef } from "react";

export default function ParallaxHero({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const y = window.scrollY;
      el.style.setProperty("--p-y1", `${Math.min(40, y * 0.15)}px`);
      el.style.setProperty("--p-y2", `${Math.min(80, y * 0.25)}px`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} className="relative overflow-hidden rounded-3xl border border-black/5 dark:border-white/10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[--color-support]/25 blur-3xl" style={{ transform: `translateY(var(--p-y1, 0px))` }} />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[--color-accent]/25 blur-3xl" style={{ transform: `translateY(var(--p-y2, 0px))` }} />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}


