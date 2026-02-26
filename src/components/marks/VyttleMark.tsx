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
      <path
        d="M28,0 L56,32 L28,64 L0,32 Z M38,32 A10,10 0 1,0 18,32 A10,10 0 1,0 38,32 Z"
        fill="var(--mark-neutral)"
        fillRule="evenodd"
      />
      <circle cx="28" cy="32" r="7" fill="#D4933D" />
    </svg>
  );
}
