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
  color = "#A63D2F",
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
      {/* Rim circle */}
      <circle
        cx="30"
        cy="30"
        r="22"
        fill="none"
        stroke="var(--mark-neutral)"
        strokeWidth="1.5"
      />
      {/* Left handle */}
      <line
        x1="2"
        y1="30"
        x2="8"
        y2="30"
        stroke="var(--mark-neutral)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Right handle */}
      <line
        x1="52"
        y1="30"
        x2="58"
        y2="30"
        stroke="var(--mark-neutral)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Center dot */}
      <circle cx="30" cy="30" r="4" fill={color} />
    </svg>
  );
}
