export default function CustomerNetworkIllustration({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      className={className}
      role="img"
      aria-label="Customers connected in a network with flowing rewards"
    >
      <title>Customer rewards network</title>
      <defs>
        <radialGradient id="bgGlow" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.25" />
          <stop offset="60%" stopColor="var(--color-primary)" stopOpacity="0.1" />
          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="tokenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="var(--color-accent)" />
          <stop offset="100%" stopColor="var(--color-support)" />
        </linearGradient>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>
        <circle id="avatar" r="22" />
        <g id="coin">
          <ellipse cx="0" cy="0" rx="10" ry="6" fill="url(#tokenGrad)" />
          <ellipse cx="0" cy="0" rx="10" ry="6" className="fill-white/25" />
        </g>
        {/* Motion paths */}
        <path id="p1" d="M300 220 C 420 160, 520 160, 520 240" />
        <path id="p2" d="M300 220 C 180 160, 80 160, 80 240" />
        <path id="p3" d="M300 220 C 420 280, 520 320, 520 420" />
        <path id="p4" d="M300 220 C 180 280, 80 320, 80 420" />
        <path id="p5" d="M300 220 C 300 360, 300 460, 300 540" />
      </defs>

      {/* Dark base */}
      <rect x="0" y="0" width="600" height="600" className="fill-white/[0.02]" />
      <ellipse cx="300" cy="240" rx="250" ry="180" fill="url(#bgGlow)" />

      {/* Connections */}
      <g strokeWidth="2" strokeLinecap="round" strokeDasharray="4 10" className="stroke-white/25">
        <path d="M300 220 L520 240" />
        <path d="M300 220 L520 420" />
        <path d="M300 220 L80 240" />
        <path d="M300 220 L80 420" />
        <path d="M300 220 L300 540" />
      </g>

      {/* Avatars */}
      {[
        { x: 300, y: 220 },
        { x: 520, y: 240 },
        { x: 520, y: 420 },
        { x: 80, y: 240 },
        { x: 80, y: 420 },
        { x: 300, y: 540 },
      ].map((p, i) => (
        <g key={i} transform={`translate(${p.x} ${p.y})`}>
          <use href="#avatar" className="fill-white/10 stroke-white/15" strokeWidth="2" />
          <circle r="8" cy="-6" className="fill-white/50" />
          <path d="M-14 10c6-8 20-8 26 0" className="fill-none stroke-white/45" strokeWidth="3" strokeLinecap="round" />
        </g>
      ))}

      {/* Animated tokens: multiple coins flowing along defined paths */}
      <g filter="url(#soft)">
        {[
          { path: "p1", dur: 5, delay: 0 },
          { path: "p1", dur: 6.5, delay: 1.2 },
          { path: "p2", dur: 5.4, delay: 0.6 },
          { path: "p2", dur: 7, delay: 1.8 },
          { path: "p3", dur: 6, delay: 0.3 },
          { path: "p4", dur: 6.2, delay: 0.9 },
          { path: "p5", dur: 7.2, delay: 0 },
          { path: "p5", dur: 8, delay: 1.4 },
        ].map((t, i) => (
          <g key={i}>
            <use href="#coin">
              <animateMotion
                dur={`${t.dur}s`}
                repeatCount="indefinite"
                begin={`${t.delay}s`}
                keyPoints="0;1"
                keyTimes="0;1"
                calcMode="linear"
              >
                <mpath href={`#${t.path}`} />
              </animateMotion>
            </use>
          </g>
        ))}
      </g>
    </svg>
  );
}


