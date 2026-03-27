interface PicaMarkProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
}

export default function PicaMark({
  size = 82,
  className = "",
  style,
  color = "#4A6FE0",
}: PicaMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="10 10 80 80"
      fill="none"
      className={className}
      style={style}
      aria-label="Pica logomark"
    >
      <g transform="translate(9,9)">
        {/* Bottom-left cell (neutral) */}
        <rect x="1" y="53" width="26" height="26" rx="3" fill="var(--pica-structural)" />
        {/* Center cell (accent) */}
        <rect x="28" y="28" width="26" height="26" rx="3" fill={color} />
        {/* Top-right cell (neutral) */}
        <rect x="55" y="3" width="26" height="26" rx="3" fill="var(--pica-structural)" />
      </g>
    </svg>
  );
}
