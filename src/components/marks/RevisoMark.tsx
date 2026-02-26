interface RevisoMarkProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function RevisoMark({
  size = 60,
  className = "",
  style,
}: RevisoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      className={className}
      style={style}
      aria-label="Reviso logomark"
    >
      {/* Top context line */}
      <rect x="6" y="12" width="20" height="5" rx="2.5" fill="var(--mark-neutral-sub)" />
      {/* Active line: dot + line */}
      <circle cx="9.5" cy="27.5" r="4" fill="var(--reviso-accent)" />
      <rect x="16" y="25" width="26" height="5" rx="2.5" fill="var(--reviso-accent)" />
      {/* Bottom context line */}
      <rect x="6" y="38" width="22" height="5" rx="2.5" fill="var(--mark-neutral-sub)" />
    </svg>
  );
}
