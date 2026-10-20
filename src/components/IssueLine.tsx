import { STATUS_LABEL, issueNumber, type VyttleApp } from "@/lib/apps";

/** The catalogue line for an issue: number, status, platforms. Set as running
 *  text that can only break after a separator dot, so a wrapped line never
 *  starts with a dot or splits a phrase like "In development". */
export default function IssueLine({ app, extra = [] }: { app: VyttleApp; extra?: string[] }) {
  const issued = app.issued ? [`Issued ${app.issued}`] : [];
  const parts = [STATUS_LABEL[app.status], ...issued, app.platforms, ...extra];
  return (
    <p className="t-label" style={{ color: "var(--text-secondary)", lineHeight: 1.9 }}>
      <span aria-hidden="true" className="inline-block w-2 h-2 mr-2 align-[0.05em]" style={{ background: app.accentVar ?? app.accent }} />
      <span style={{ color: "var(--text-primary)" }}>No. {issueNumber(app)}</span>
      {parts.map((part) => (
        <span key={part}>
          {"\u00A0\u00A0· "}
          {part.replaceAll(" ", "\u00A0")}
        </span>
      ))}
    </p>
  );
}
