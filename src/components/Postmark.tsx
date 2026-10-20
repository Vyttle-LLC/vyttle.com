import { useId } from "react";

/** An amber cancellation: a double-ring date stamp trailing wavy cancel lines.
 *  Decorative — the issue date is also stated in text wherever it appears. */
export default function Postmark({ issued }: { issued: string }) {
  const [month, year] = issued.toUpperCase().split(" ");
  // Unique per instance (the hero sheet and the featured entry both print one),
  // reduced to characters that are safe in a url fragment.
  const id = useId().replace(/[^\w-]/g, "");
  return (
    <svg className="postmark" viewBox="0 0 200 120" aria-hidden="true">
      <defs>
        <path id={`${id}-top`} d="M 22 60 A 38 38 0 0 1 98 60" />
        <path id={`${id}-bottom`} d="M 18 60 A 42 42 0 0 0 102 60" />
      </defs>
      <g fill="none" stroke="currentColor">
        <circle cx="60" cy="60" r="50" strokeWidth="3" />
        <circle cx="60" cy="60" r="31" strokeWidth="1.6" />
        {[38, 52, 66, 80].map((y) => (
          <path
            key={y}
            d={`M 112 ${y} q 11 -7 22 0 t 22 0 t 22 0 t 22 0`}
            strokeWidth="3"
            strokeLinecap="round"
          />
        ))}
      </g>
      <g fill="currentColor" fontFamily="var(--font-body)" style={{ fontVariationSettings: '"wdth" 112' }}>
        <text fontSize="10.5" fontWeight="700" letterSpacing="2.6">
          <textPath href={`#${id}-top`} startOffset="50%" textAnchor="middle">
            VYTTLE
          </textPath>
        </text>
        <text fontSize="9" fontWeight="700" letterSpacing="2.4">
          <textPath href={`#${id}-bottom`} startOffset="50%" textAnchor="middle">
            ISSUED
          </textPath>
        </text>
        <text x="60" y="58" fontSize="13" fontWeight="800" textAnchor="middle" letterSpacing="1">
          {month}
        </text>
        <text x="60" y="73" fontSize="13" fontWeight="800" textAnchor="middle" letterSpacing="1">
          {year}
        </text>
      </g>
    </svg>
  );
}
