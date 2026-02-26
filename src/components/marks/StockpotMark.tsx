interface StockpotMarkProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
}

export default function StockpotMark({
  size = 60,
  className = "",
  style,
  color = "#C0392B",
}: StockpotMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      className={className}
      style={style}
      aria-label="Stockpot logomark"
    >
      {/* Pot body (cutout) */}
      <path
        d="M30,8 A22,22 0 1,1 30,52 A22,22 0 1,1 30,8 Z M30,23 A7,7 0 1,0 30,37 A7,7 0 1,0 30,23 Z"
        fill="var(--stockpot-structural)"
        fillRule="evenodd"
      />
      {/* Left handle */}
      <rect x="2" y="26" width="8" height="8" rx="3" fill="var(--stockpot-structural)" />
      {/* Right handle */}
      <rect x="50" y="26" width="8" height="8" rx="3" fill="var(--stockpot-structural)" />
      {/* Center dot */}
      <circle cx="30" cy="30" r="5" fill={color} />
    </svg>
  );
}
