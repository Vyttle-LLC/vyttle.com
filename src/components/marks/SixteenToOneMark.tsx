interface SixteenToOneMarkProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
}

export default function SixteenToOneMark({
  size = 80,
  className = "",
  style,
  color = "#C4956A",
}: SixteenToOneMarkProps) {
  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 80 60"
      fill="none"
      className={className}
      style={style}
      aria-label="Sixteen to One logomark"
    >
      {/* Large circle (water / 16) */}
      <circle
        cx="22"
        cy="30"
        r="18"
        fill="none"
        stroke={color}
        strokeWidth="1.2"
      />
      {/* Colon dots */}
      <circle cx="48" cy="22" r="2.5" fill="var(--mark-neutral-sub)" />
      <circle cx="48" cy="38" r="2.5" fill="var(--mark-neutral-sub)" />
      {/* Small dot (coffee / 1) */}
      <circle cx="65" cy="30" r="5" fill={color} />
    </svg>
  );
}
