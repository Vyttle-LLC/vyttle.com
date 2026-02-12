import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="py-12 px-6 md:px-12 max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      {/* Left */}
      <div className="flex flex-col gap-1.5">
        <span
          className="text-sm font-semibold uppercase transition-colors duration-400"
          style={{
            fontFamily: "var(--font-outfit), Outfit, sans-serif",
            letterSpacing: "5px",
            color: "var(--text-primary)",
          }}
        >
          VYTTLE
        </span>
        <span
          className="text-xs font-light uppercase transition-colors duration-400"
          style={{
            fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
            letterSpacing: "3px",
            color: "var(--text-tertiary)",
          }}
        >
          Small by design
        </span>
      </div>

      {/* Right */}
      <div className="flex flex-col items-center md:items-end gap-3">
        <ul className="flex gap-6 list-none">
          {[
            { href: "/privacy", label: "Privacy" },
            { href: "/support", label: "Support" },
            { href: "/terms", label: "Terms" },
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs font-light no-underline transition-colors duration-200 hover:text-amber"
                style={{
                  fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
                  letterSpacing: "1px",
                  color: "var(--text-secondary)",
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <span
          className="text-xs font-light transition-colors duration-400"
          style={{
            fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
            color: "var(--text-tertiary)",
          }}
        >
          &copy; 2026 Vyttle LLC
        </span>
      </div>
    </footer>
  );
}
