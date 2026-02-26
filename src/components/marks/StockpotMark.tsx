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
  color = "#D4735A",
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
      {/* Pot body */}
      <circle cx="30" cy="30" r="22" fill="var(--mark-neutral)" />
      {/* Left handle */}
      <rect x="2" y="26" width="8" height="8" rx="3" fill="var(--mark-neutral)" />
      {/* Right handle */}
      <rect x="50" y="26" width="8" height="8" rx="3" fill="var(--mark-neutral)" />
      {/* Center dot */}
      <circle cx="30" cy="30" r="4.5" fill={color} />
    </svg>
  );
}
