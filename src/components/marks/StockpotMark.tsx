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
      viewBox="17 17 66 66"
      fill="none"
      className={className}
      style={style}
      aria-label="Stockpot logomark"
    >
      {/* Pot body */}
      <path d="M50,26 A24,24 0 1,1 50,74 A24,24 0 1,1 50,26 Z" fill="var(--stockpot-structural)" />
      <circle cx="50" cy="50" r="8" fill="var(--bg-primary)" />
      {/* Left handle */}
      <rect x="17" y="46" width="10" height="8" rx="3" fill="var(--stockpot-structural)" />
      {/* Right handle */}
      <rect x="73" y="46" width="10" height="8" rx="3" fill="var(--stockpot-structural)" />
      {/* Tomato dot */}
      <circle cx="50" cy="50" r="5.5" fill={color} />
    </svg>
  );
}
