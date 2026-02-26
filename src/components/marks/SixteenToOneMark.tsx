interface SixteenToOneMarkProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
}

export default function SixteenToOneMark({
  size = 70,
  className = "",
  style,
  color = "#C4956A",
}: SixteenToOneMarkProps) {
  return (
    <svg
      width={size}
      height={size * (84 / 70)}
      viewBox="0 0 70 84"
      fill="none"
      className={className}
      style={style}
      aria-label="Sixteen to One logomark"
    >
      {/* Large circle (water / 16) */}
      <circle cx="35" cy="24" r="20" fill="var(--sixteen-structural)" />
      {/* Divider bar */}
      <rect x="15" y="50" width="40" height="4" rx="2" fill="#736860" />
      {/* Accent dot (coffee / 1) */}
      <circle cx="35" cy="68" r="7" fill={color} />
    </svg>
  );
}
