"use client";

import { useState } from "react";

export default function CopyButton({ value, label = "Copy" }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setCopied(true);
          setTimeout(() => setCopied(false), 1200);
        } catch {
          // ignore
        }
      }}
      className="inline-flex items-center gap-2 rounded-md border border-black/10 dark:border-white/15 h-9 px-3 text-sm hover:border-[--color-primary]"
      aria-label={`Copy ${label}`}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M8 8h12v12H8z" stroke="currentColor" strokeWidth="2" />
        <path d="M4 4h12v4" stroke="currentColor" strokeWidth="2" />
      </svg>
      {copied ? "Copied" : label}
    </button>
  );
}


