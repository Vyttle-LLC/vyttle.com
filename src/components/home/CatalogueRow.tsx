import Link from "next/link";
import { productHref, type VyttleApp } from "@/lib/apps";
import Stamp from "@/components/Stamp";
import IssueLine from "@/components/IssueLine";

/** One line of the catalogue: stamp, entry, and the way in. */
export default function CatalogueRow({ app }: { app: VyttleApp }) {
  return (
    <li
      id={app.slug}
      className="scroll-mt-24 grid grid-cols-[88px_minmax(0,1fr)] items-start gap-x-6 gap-y-2 py-10 md:grid-cols-[128px_minmax(0,1fr)_auto] md:gap-x-12"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <Stamp app={app} className="w-[88px] md:w-[128px] row-span-2 md:row-span-1" />
      <div>
        <IssueLine app={app} />
        <h3 className="t-title mt-4" style={{ fontSize: "clamp(1.625rem, 2.6vw, 2.125rem)" }}>
          {app.name}
        </h3>
        <p className="mt-1" style={{ color: "var(--text-primary)" }}>
          {app.tagline}
        </p>
        <p className="t-body mt-3">{app.description}</p>
      </div>
      <Link href={productHref(app)} className="link-arrow md:self-center">
        {app.name} <span aria-hidden="true">→</span>
      </Link>
    </li>
  );
}
