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
      height={size * (36 / 49)}
      viewBox="-1 0 49 36"
      fill="none"
      className={className}
      style={style}
      aria-label="Reviso logomark"
    >
      {/* Top context line */}
      <rect x="0" y="0" width="20" height="5" rx="2.5" fill="var(--reviso-structural)" />
      {/* Active line: dot + line */}
      <circle cx="3.5" cy="15.5" r="4" fill="var(--reviso-accent)" />
      <rect x="10" y="13" width="26" height="5" rx="2.5" fill="var(--reviso-accent)" />
      {/* Bottom context line */}
      <rect x="0" y="26" width="22" height="5" rx="2.5" fill="var(--reviso-structural)" />
    </svg>
  );
}
