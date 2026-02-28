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
      <line x1="30" y1="6" x2="30" y2="30" stroke="var(--mark-neutral-sub)" strokeWidth="3" strokeLinecap="round" />
      <line x1="54" y1="30" x2="30" y2="30" stroke="var(--mark-neutral-sub)" strokeWidth="3" strokeLinecap="round" />
      <line x1="30" y1="54" x2="30" y2="30" stroke="var(--mark-neutral-sub)" strokeWidth="3" strokeLinecap="round" />
      <line x1="6" y1="30" x2="30" y2="30" stroke="var(--mark-neutral-sub)" strokeWidth="3" strokeLinecap="round" />
      {/* Outer nodes (solid circles) */}
      <circle cx="30" cy="6" r="5.5" fill="var(--mark-neutral)" />
      <circle cx="54" cy="30" r="5.5" fill="var(--mark-neutral)" />
      <circle cx="30" cy="54" r="5.5" fill="var(--mark-neutral)" />
      <circle cx="6" cy="30" r="5.5" fill="var(--mark-neutral)" />
      {/* Center node */}
      <circle cx="30" cy="30" r="7.5" fill="var(--bramble-accent)" />
    </svg>
  );
}
