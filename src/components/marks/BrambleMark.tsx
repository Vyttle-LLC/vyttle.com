interface BrambleMarkProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function BrambleMark({
  size = 60,
  className = "",
  style,
}: BrambleMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="13 13 74 74"
      fill="none"
      className={className}
      style={style}
      aria-label="Bramble logomark"
    >
      <g transform="translate(10,10)">
        {/* Connection lines */}
        <line x1="40" y1="10" x2="40" y2="40" stroke="var(--bramble-structural)" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="70" y1="40" x2="40" y2="40" stroke="var(--bramble-structural)" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="40" y1="70" x2="40" y2="40" stroke="var(--bramble-structural)" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="10" y1="40" x2="40" y2="40" stroke="var(--bramble-structural)" strokeWidth="3.5" strokeLinecap="round" />
        {/* Outer nodes */}
        <circle cx="40" cy="10" r="7" fill="var(--bramble-node)" />
        <circle cx="70" cy="40" r="7" fill="var(--bramble-node)" />
        <circle cx="40" cy="70" r="7" fill="var(--bramble-node)" />
        <circle cx="10" cy="40" r="7" fill="var(--bramble-node)" />
        {/* Center node */}
        <circle cx="40" cy="40" r="9.5" fill="var(--bramble-accent)" />
      </g>
    </svg>
  );
}
