"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, delay = 0, y = 12 }: { children: React.ReactNode; delay?: number; y?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      style={{
        transform: `translateY(${visible ? 0 : y}px)`,
        opacity: visible ? 1 : 0,
        transition: "opacity 600ms ease, transform 600ms ease",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}


