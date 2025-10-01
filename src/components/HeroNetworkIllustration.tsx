export default function HeroNetworkIllustration({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 500"
      className={className}
      role="img"
      aria-label="Connected customers with central token ecosystem"
    >
      <title>Shared loyalty network</title>
      <desc>Multiple customer avatars connected by dotted lines to a central stack of tokens.</desc>

      <defs>
        <radialGradient id="glow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.30" />
          <stop offset="60%" stopColor="var(--color-accent)" stopOpacity="0.12" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="coin" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="var(--color-accent)" />
          <stop offset="100%" stopColor="var(--color-primary)" />
        </linearGradient>
      </defs>

      {/* Soft glow behind center */}
      <ellipse cx="400" cy="250" rx="220" ry="160" fill="url(#glow)" />

      {/* Dotted connections */}
      <g
        strokeDasharray="4 8"
        className="stroke-black/25 dark:stroke-white/25"
        strokeWidth="2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      >
        <line x1="400" y1="250" x2="400" y2="60" />
        <line x1="400" y1="250" x2="650" y2="150" />
        <line x1="400" y1="250" x2="650" y2="340" />
        <line x1="400" y1="250" x2="400" y2="440" />
        <line x1="400" y1="250" x2="150" y2="340" />
        <line x1="400" y1="250" x2="150" y2="150" />
      </g>

      {/* Center coin stack */}
      <g transform="translate(400 250)">
        {/* Bottom coin */}
        <ellipse cx="0" cy="32" rx="56" ry="12" className="fill-black/5 dark:fill-white/10" />
        <g transform="translate(0 16)">
          <ellipse cx="0" cy="16" rx="56" ry="16" fill="url(#coin)" className="opacity-90" />
          <rect x="-56" y="16" width="112" height="24" rx="10" fill="url(#coin)" className="opacity-90" />
          <ellipse cx="0" cy="40" rx="56" ry="16" fill="url(#coin)" className="opacity-90" />
          <ellipse cx="0" cy="16" rx="56" ry="16" className="fill-white/20" />
        </g>
        {/* Top coin */}
        <g>
          <ellipse cx="0" cy="0" rx="56" ry="16" fill="url(#coin)" />
          <rect x="-56" y="0" width="112" height="24" rx="10" fill="url(#coin)" />
          <ellipse cx="0" cy="24" rx="56" ry="16" fill="url(#coin)" />
          <ellipse cx="0" cy="0" rx="56" ry="16" className="fill-white/25" />
        </g>
      </g>

      {/* Avatar Nodes */}
      {[
        { x: 400, y: 60 },
        { x: 650, y: 150 },
        { x: 650, y: 340 },
        { x: 400, y: 440 },
        { x: 150, y: 340 },
        { x: 150, y: 150 },
      ].map((p, i) => (
        <g key={i} transform={`translate(${p.x} ${p.y})`}>
          <circle r="32" className="fill-white/80 dark:fill-white/10 stroke-black/10 dark:stroke-white/15" strokeWidth="2" />
          {/* Simple avatar glyph */}
          <circle r="10" cy="-6" className="fill-black/25 dark:fill-white/40" />
          <path d="M-16 14c6-8 22-8 28 0" className="fill-none stroke-black/25 dark:stroke-white/40" strokeWidth="3" strokeLinecap="round" />
        </g>
      ))}
    </svg>
  );
}


