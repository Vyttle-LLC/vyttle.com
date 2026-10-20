interface WiffletreeMarkProps {
  size?: number;
  className?: string;
}

/** The Interlock symbol. The joint is Signal red in every theme; the arms
 *  follow --wiffletree-structural. Outlined from the Wiffletree brand kit. */
export default function WiffletreeMark({ size = 60, className = "" }: WiffletreeMarkProps) {
  return (
    <svg
      width={size}
      height={size * (214 / 444)}
      viewBox="0 0 444 214"
      fill="none"
      className={className}
      aria-label="Wiffletree logomark"
    >
      <path
        fill="var(--wiffletree-structural)"
        d="M18 0 H79 Q97 0 107 16 L190 146 Q193 150 190 155 L149 201 Q128 223 107 203 L3 29 Q0 10 7 2 Q11 0 18 0 Z M277 106 L324 18 Q334 0 355 0 H425 Q453 0 439 26 L326 191 Z M212 147 H265 L302 201 Q310 210 299 210 H269 Q248 210 239 192 Z"
      />
      <path fill="#D63C35" d="M176 74 H207 Q220 74 229 88 L265 143 Q268 147 261 147 H212 L169 83 Q165 74 176 74 Z" />
    </svg>
  );
}
