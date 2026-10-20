import { apps } from "@/lib/apps";
import Stamp from "./Stamp";
import PrinterMarks, { RegistrationMark } from "./PrinterMarks";

/** The whole issue as one perforated sheet, with its printer's marks. */
export default function StampSheet() {
  return (
    <figure aria-labelledby="sheet-caption">
      <div className="mb-4">
        <PrinterMarks id="sheet-caption">The Vyttle issue</PrinterMarks>
      </div>
      <div className="sheet">
        {apps.map((app) => (
          <Stamp key={app.slug} app={app} href={`#${app.slug}`} />
        ))}
      </div>
      <div className="flex justify-end mt-4" style={{ color: "var(--text-secondary)" }}>
        <RegistrationMark />
      </div>
    </figure>
  );
}
