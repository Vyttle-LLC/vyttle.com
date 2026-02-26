interface VyttleMarkProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function VyttleMark({ size = 56, className = "", style }: VyttleMarkProps) {
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
        fill="var(--mark-neutral)"
      />
      <circle cx="28" cy="32" r="5" fill="#D4933D" />
    </svg>
  );
}
