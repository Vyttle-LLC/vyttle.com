import Link from "next/link";
import type { CSSProperties } from "react";
import { issueNumber, type VyttleApp } from "@/lib/apps";
import ProductMark from "./marks/ProductMark";
import Postmark from "./Postmark";

interface StampProps {
  app: VyttleApp;
  href?: string;
  /** A chip is too small to carry type: mark and band only. */
  chip?: boolean;
  className?: string;
}

/** A product printed as a stamp: perforated paper, the product's field, its
 *  mark, and its accent as the printed band. Shipped products are postmarked. */
export default function Stamp({ app, href, chip = false, className = "" }: StampProps) {
  const classes = ["stamp", chip ? "stamp--chip stamp--small" : "", className].filter(Boolean).join(" ");
  const style = { "--accent": app.accent, "--field": app.field } as CSSProperties;

  const face = (
    <>
      <span className="stamp__field">
        {!chip && (
          <span className="stamp__issuer">
            <span>Vyttle</span>
            <span className="stamp__number">{issueNumber(app)}</span>
          </span>
        )}
        <span className="stamp__mark" aria-hidden="true">
          <ProductMark app={app} />
        </span>
        {!chip && (
          <span>
            <span className="stamp__name block">{app.name}</span>
            <span className="stamp__meta block">{app.platforms}</span>
          </span>
        )}
        <span className="stamp__band block" />
      </span>
      {app.issued && !chip && <Postmark issued={app.issued} />}
    </>
  );

  // Unlinked stamps always sit beside the product's name, so they are illustration.
  if (!href) {
    return (
      <span className={classes} style={style} aria-hidden="true">
        {face}
      </span>
    );
  }

  return (
    <Link href={href} className={classes} style={style} aria-label={chip ? app.name : undefined}>
      {face}
    </Link>
  );
}
