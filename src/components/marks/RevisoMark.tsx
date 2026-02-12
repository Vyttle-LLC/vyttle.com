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
      <rect x="14" y="18" width="22" height="2.5" rx="1.25" fill="var(--mark-neutral-sub)" />
      {/* Active line: dot + line */}
      <circle cx="17" cy="30" r="3.5" fill="var(--reviso-accent)" />
      <rect x="23" y="28.75" width="28" height="2.5" rx="1.25" fill="var(--reviso-accent)" opacity="0.85" />
      {/* Bottom context line */}
      <rect x="14" y="40" width="25" height="2.5" rx="1.25" fill="var(--mark-neutral-sub)" />
    </svg>
  );
}
