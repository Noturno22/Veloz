export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const text = variant === "dark" ? "text-navy" : "text-white";
  return (
    <div className="flex items-center gap-2.5">
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
        <defs>
          <linearGradient id="zg" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#E8C46B" />
            <stop offset="55%" stopColor="#D4A017" />
            <stop offset="100%" stopColor="#9C7510" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="44" height="44" rx="10" fill="var(--navy)" />
        <path
          d="M14 14 H34 L18 32 H34"
          stroke="url(#zg)"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="34" cy="14" r="2.2" fill="url(#zg)" />
        <circle cx="14" cy="32" r="2.2" fill="url(#zg)" />
      </svg>
      <div className="leading-tight">
        <div className={`font-display text-[1.15rem] font-bold tracking-wide ${variant === "dark" ? "text-navy" : "text-white"}`} style={variant === "dark" ? { color: "var(--navy)" } : undefined}>
          ZENTRA
        </div>
        <div className="text-[0.62rem] font-semibold tracking-[0.32em] text-gold -mt-0.5">
          TRADING
        </div>
      </div>
    </div>
  );
}
