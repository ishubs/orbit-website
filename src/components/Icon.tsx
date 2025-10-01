export type IconName =
  | "network"
  | "token"
  | "swap"
  | "trophy"
  | "chart"
  | "game"
  | "food"
  | "retail"
  | "entertainment"
  | "wellness"
  | "travel"
  | "cost"
  | "speed"
  | "shield";

export default function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  const stroke = "currentColor";
  const common = { fill: "none", stroke, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" } as const;

  switch (name) {
    case "network":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <circle cx="12" cy="12" r="3" {...common} />
          <path d="M12 5v4M12 15v4M5 12h4M15 12h4M7.5 7.5l2.5 2.5M14 14l2.5 2.5M16.5 7.5L14 10M10 14l-2.5 2.5" {...common} />
        </svg>
      );
    case "token":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <ellipse cx="12" cy="6" rx="7" ry="3" {...common} />
          <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" {...common} />
          <path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" {...common} />
        </svg>
      );
    case "swap":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M7 7h10l-3-3M17 17H7l3 3" {...common} />
        </svg>
      );
    case "trophy":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M8 21h8M9 17h6M9 3h6v4a3 3 0 0 1-3 3 3 3 0 0 1-3-3V3z" {...common} />
          <path d="M5 5h2v2a5 5 0 0 1-5 5V7a2 2 0 0 1 2-2zm12 0h2a2 2 0 0 1 2 2v5a5 5 0 0 1-5-5V5z" {...common} />
        </svg>
      );
    case "chart":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M4 19V5M20 19H4" {...common} />
          <path d="M8 17V9M12 17v-6M16 17v-3" {...common} />
        </svg>
      );
    case "game":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <rect x="3" y="9" width="18" height="8" rx="4" {...common} />
          <path d="M7 13h2M8 12v2M16 12h.01M18 14h.01" {...common} />
        </svg>
      );
    case "food":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M6 3v8M10 3v8M8 3v8M14 6h5l-1 12h-3z" {...common} />
        </svg>
      );
    case "retail":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M3 7h18l-2 11H5L3 7z" {...common} />
          <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" {...common} />
        </svg>
      );
    case "entertainment":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <rect x="3" y="6" width="18" height="12" rx="2" {...common} />
          <path d="M10 9l6 3-6 3V9z" {...common} />
        </svg>
      );
    case "wellness":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M12 21s-7-4.35-7-10a7 7 0 0 1 14 0c0 5.65-7 10-7 10z" {...common} />
        </svg>
      );
    case "travel":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M10 21l2-5 8-8a3 3 0 0 0-4-4l-8 8-5 2 5 2 2 5z" {...common} />
        </svg>
      );
    case "cost":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <circle cx="12" cy="12" r="9" {...common} />
          <path d="M8 12h8M12 8v8" {...common} />
        </svg>
      );
    case "speed":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M21 12a9 9 0 1 1-18 0" {...common} />
          <path d="M12 12l6-3" {...common} />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M12 3l7 4v6c0 4-3 7-7 8-4-1-7-4-7-8V7l7-4z" {...common} />
        </svg>
      );
    default:
      return null;
  }
}


