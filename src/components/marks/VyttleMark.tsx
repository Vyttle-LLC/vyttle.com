interface VyttleMarkProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function VyttleMark({ size = 56, strokeWidth = 1.2, className = "", style }: VyttleMarkProps) {
  return (
    <svg
      width={size}
      height={size * (64 / 56)}
      viewBox="0 0 56 64"
      fill="none"
      className={className}
      style={style}
      aria-label="Vyttle logomark"
    >
      <polygon
        points="28,0 56,32 28,64 0,32"
        fill="none"
        stroke="var(--mark-neutral)"
        strokeWidth={strokeWidth}
      />
      <circle cx="28" cy="32" r="3.5" fill="#D4933D" />
    </svg>
  );
}
