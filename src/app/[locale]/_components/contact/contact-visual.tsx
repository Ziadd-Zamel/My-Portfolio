export function ContactVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-8 rounded-full bg-brand/12 blur-3xl dark:bg-brand/10"
      />

      <svg
        viewBox="0 0 480 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative w-full drop-shadow-[0_24px_50px_-28px_rgba(15,23,42,0.35)]"
        role="img"
        aria-label="Contact illustration"
      >
        <defs>
          <linearGradient id="contactGlow" x1="80" y1="40" x2="400" y2="380">
            <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="var(--copper)" stopOpacity="0.12" />
          </linearGradient>
          <linearGradient id="envelopeFace" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--canvas-raised)" />
            <stop offset="100%" stopColor="var(--brand-subtle)" />
          </linearGradient>
        </defs>

        {/* backdrop */}
        <circle cx="240" cy="215" r="158" fill="url(#contactGlow)" />
        <circle
          cx="240"
          cy="215"
          r="128"
          stroke="var(--brand)"
          strokeOpacity="0.28"
          strokeWidth="1.5"
          strokeDasharray="5 9"
        />

        {/* envelope */}
        <g>
          <rect
            x="110"
            y="155"
            width="260"
            height="175"
            rx="24"
            fill="url(#envelopeFace)"
            stroke="var(--line)"
            strokeWidth="1.5"
          />
          <path
            d="M122 168 L240 248 L358 168"
            stroke="var(--brand)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M122 168 V300"
            stroke="var(--line)"
            strokeWidth="1.5"
            strokeOpacity="0.7"
          />
          <path
            d="M358 168 V300"
            stroke="var(--line)"
            strokeWidth="1.5"
            strokeOpacity="0.7"
          />
          <path
            d="M148 286 H250"
            stroke="var(--ink-faint)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M148 312 H220"
            stroke="var(--ink-faint)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <circle cx="318" cy="296" r="24" fill="var(--brand)" />
          <path
            d="M308 296 L315 303 L330 286"
            stroke="var(--brand-foreground)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* chat bubble */}
        <g>
          <rect
            x="328"
            y="72"
            width="108"
            height="72"
            rx="18"
            fill="var(--canvas-raised)"
            stroke="var(--line)"
            strokeWidth="1.5"
          />
          <path
            d="M356 144 L372 164 L388 144"
            fill="var(--canvas-raised)"
            stroke="var(--line)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="358" cy="108" r="6" fill="var(--brand)" />
          <circle cx="382" cy="108" r="6" fill="var(--brand)" fillOpacity="0.55" />
          <circle cx="406" cy="108" r="6" fill="var(--brand)" fillOpacity="0.3" />
        </g>

        {/* link card */}
        <g>
          <rect
            x="52"
            y="248"
            width="84"
            height="84"
            rx="20"
            fill="var(--canvas-raised)"
            stroke="var(--line)"
            strokeWidth="1.5"
          />
          <path
            d="M78 278 H90 A14 14 0 0 1 90 306 H78"
            stroke="var(--copper)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M110 278 H98 A14 14 0 0 0 98 306 H110"
            stroke="var(--brand)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M88 292 H100"
            stroke="var(--ink-muted)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>

        {/* accent dots */}
        <circle cx="96" cy="118" r="7" fill="var(--copper)" />
        <circle cx="392" cy="248" r="6" fill="var(--brand)" />
        <circle cx="356" cy="348" r="5" fill="var(--info)" />
        <circle cx="148" cy="92" r="4" fill="var(--brand)" fillOpacity="0.45" />
      </svg>
    </div>
  );
}
