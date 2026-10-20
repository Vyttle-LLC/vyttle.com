import { apps } from "@/lib/apps";

export function RegistrationMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true" className="shrink-0">
      <circle cx="8" cy="8" r="4.5" />
      <path d="M8 0v16M0 8h16" />
    </svg>
  );
}

/** One square per product accent, as printed in a sheet's margin. */
export function ColorBar({ className = "" }: { className?: string }) {
  return (
    <span className={`flex ${className}`} aria-hidden="true">
      {apps.map((app) => (
        <span key={app.slug} className="block w-3 h-3" style={{ background: app.accent }} />
      ))}
    </span>
  );
}

/** The printer's marks a sheet carries in its margin: registration cross, a
 *  line of printed text, and the colour bar. */
export default function PrinterMarks({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <div className="flex items-center gap-3" style={{ color: "var(--text-secondary)" }}>
      <RegistrationMark />
      <span id={id} className="t-label whitespace-nowrap overflow-hidden text-ellipsis">
        {children}
      </span>
      <ColorBar className="ml-auto" />
    </div>
  );
}
