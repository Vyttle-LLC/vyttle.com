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
      viewBox="0 0 60 60"
      fill="none"
      className={className}
      style={style}
      aria-label="Bramble logomark"
    >
      {/* Connection lines */}
      <line x1="30" y1="12" x2="30" y2="30" stroke="var(--bramble-structural)" strokeWidth="2" />
      <line x1="30" y1="48" x2="30" y2="30" stroke="var(--bramble-structural)" strokeWidth="2" />
      <line x1="12" y1="30" x2="30" y2="30" stroke="var(--bramble-structural)" strokeWidth="2" />
      <line x1="48" y1="30" x2="30" y2="30" stroke="var(--bramble-structural)" strokeWidth="2" />
      {/* Outer nodes (solid circles) */}
      <circle cx="30" cy="12" r="5" fill="var(--bramble-structural)" />
      <circle cx="30" cy="48" r="5" fill="var(--bramble-structural)" />
      <circle cx="12" cy="30" r="5" fill="var(--bramble-structural)" />
      <circle cx="48" cy="30" r="5" fill="var(--bramble-structural)" />
      {/* Center node (filled) */}
      <circle cx="30" cy="30" r="6.5" fill="var(--bramble-accent)" />
    </svg>
  );
}
