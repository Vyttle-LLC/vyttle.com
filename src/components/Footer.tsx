import Link from "next/link";
import { getAppsByKind, productHref, type ProductKind } from "@/lib/apps";
import { ColorBar } from "./PrinterMarks";
import VyttleMark from "./marks/VyttleMark";
import VyttleWordmark from "./marks/VyttleWordmark";

const STUDIO_LINKS = [
  { href: "/support", label: "Support" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string; external?: boolean }[] }) {
  return (
    <div>
      <h2 className="t-label mb-3" style={{ color: "var(--text-secondary)" }}>
        {title}
      </h2>
      <ul className="list-none flex flex-col">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="link-quiet inline-flex items-center min-h-[40px]"
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {link.label}
              {link.external && <span aria-hidden="true">&nbsp;↗</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function productLinks(kind: ProductKind) {
  return getAppsByKind(kind).map((app) => ({ href: productHref(app), label: app.name, external: Boolean(app.externalUrl) }));
}

export default function Footer() {
  return (
    <footer className="page-x mt-[clamp(96px,14vw,176px)]">
      <div className="page-width">
        <div className="perf-rule" aria-hidden="true" />
        <div className="grid grid-cols-1 gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-flex items-center gap-3 self-start min-h-[44px]" style={{ color: "var(--text-primary)" }}>
              <VyttleMark size={22} />
              <VyttleWordmark height={14} />
            </Link>
            <p style={{ color: "var(--text-secondary)" }}>Small by design.</p>
          </div>
          <FooterColumn title="Apps" links={productLinks("app")} />
          <FooterColumn title="Open source" links={productLinks("tool")} />
          <FooterColumn title="Studio" links={STUDIO_LINKS} />
        </div>
        <div className="flex flex-col-reverse gap-4 pb-12 md:flex-row md:items-center md:justify-between">
          <p className="t-label" style={{ color: "var(--text-secondary)" }}>
            © 2026 Vyttle LLC
          </p>
          <ColorBar />
        </div>
      </div>
    </footer>
  );
}
