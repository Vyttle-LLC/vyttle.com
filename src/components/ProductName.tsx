import type { VyttleApp } from "@/lib/apps";

/** A product's display name. Sixteen to One's brand kit sets its name in
 *  serif with a light "to"; everything else uses the display face. */
export default function ProductName({ app }: { app: VyttleApp }) {
  if (app.nameHtml) {
    return <span className="t-serif" dangerouslySetInnerHTML={{ __html: app.nameHtml }} />;
  }
  return (
    <span style={{ fontVariationSettings: '"wdth" 118', fontWeight: 720, letterSpacing: "-0.025em" }}>{app.name}</span>
  );
}
