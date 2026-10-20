import Link from "next/link";
import type { VyttleApp } from "@/lib/apps";
import Stamp from "@/components/Stamp";
import IssueLine from "@/components/IssueLine";
import CopyCommand from "@/components/CopyCommand";
import MountedPrint from "@/components/MountedPrint";

const WIFFLETREE_INSTALL =
  "curl -fsSL https://raw.githubusercontent.com/Vyttle-LLC/wiffletree/main/scripts/install.sh | bash";

// From wiffletree.dev's principles; the description above already covers the coordinator.
const WIFFLETREE_POINTS = [
  "Every ticket is its own workspace: one repository, one branch, one worktree.",
  "Runs Claude Code, Codex, or both, on the plans you already have.",
  "Native Rust on GPUI, not a web view. It opens the pull request; the merge button is yours.",
];

// From the Reviso README. Codex has its own install, documented there.
const REVISO_COMMANDS = [
  "/plugin marketplace add https://github.com/Vyttle-LLC/reviso.git",
  "/plugin install reviso@reviso",
  "/reviso:review",
];

function ExternalLink({ href, children, primary = false }: { href: string; children: React.ReactNode; primary?: boolean }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`btn ${primary ? "btn--primary" : "btn--secondary"}`}>
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

/** Series B: the developer tools, each with the real way to install it. */
export default function OpenSource({ wiffletree, reviso }: { wiffletree: VyttleApp; reviso: VyttleApp }) {
  const screenshot = wiffletree.screenshots?.[0];

  return (
    <section id="open-source" className="section-y scroll-mt-16" aria-labelledby="oss-heading">
      <div className="page-x">
        <div className="page-width">
          <header className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end mb-16">
            <h2 id="oss-heading" className="t-headline">
              Open-source tools for working with coding agents.
            </h2>
            <p className="t-body md:justify-self-end md:max-w-[44ch]">
              Free to use, read, and fork. They run on your own machine, with the Claude and Codex plans you
              already have.
            </p>
          </header>

          <article id="wiffletree" className="scroll-mt-24 grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center">
            <div>
              <div className="flex items-center gap-6">
                <Stamp app={wiffletree} className="w-[104px] shrink-0" />
                {/* The lockup is the product's name, so it is the heading. */}
                <h3>
                  {/* eslint-disable @next/next/no-img-element */}
                  <img src="/brand/wiffletree/lockup-dark.svg" alt="Wiffletree" width={196} height={29} className="only-dark" />
                  <img src="/brand/wiffletree/lockup-light.svg" alt="Wiffletree" width={196} height={29} className="only-light" />
                  {/* eslint-enable @next/next/no-img-element */}
                </h3>
              </div>
              <div className="mt-8">
                <IssueLine app={wiffletree} extra={[wiffletree.license!]} />
              </div>
              <p className="t-title mt-5" style={{ fontSize: "clamp(1.75rem, 3vw, 2.375rem)", lineHeight: 1.08 }}>
                {wiffletree.tagline}
              </p>
              <p className="t-body mt-4">{wiffletree.description}</p>
              <ul className="list-none mt-6 flex flex-col gap-3">
                {WIFFLETREE_POINTS.map((point) => (
                  <li key={point} className="flex gap-3" style={{ color: "var(--text-primary)" }}>
                    <span aria-hidden="true" className="mt-[0.6em] inline-block w-2 h-2 shrink-0" style={{ background: "var(--wiffletree-accent)" }} />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CopyCommand command={WIFFLETREE_INSTALL} label="the Wiffletree install command" />
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <ExternalLink href={wiffletree.externalUrl!} primary>
                  Visit wiffletree.dev
                </ExternalLink>
                <ExternalLink href={wiffletree.repoUrl!}>Source on GitHub</ExternalLink>
              </div>
            </div>
            {screenshot && <MountedPrint {...screenshot} />}
          </article>

          <article
            id="reviso"
            className="scroll-mt-24 mt-24 pt-12 grid grid-cols-1 gap-10 md:grid-cols-[128px_minmax(0,1fr)] lg:grid-cols-[128px_minmax(0,5fr)_minmax(0,6fr)] lg:gap-12"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <Stamp app={reviso} className="w-[104px] md:w-[128px]" />
            <div>
              <IssueLine app={reviso} extra={[reviso.license!]} />
              <h3 className="t-title mt-4" style={{ fontSize: "clamp(1.625rem, 2.6vw, 2.125rem)" }}>
                {reviso.name}
              </h3>
              <p className="mt-1" style={{ color: "var(--text-primary)" }}>
                {reviso.tagline}
              </p>
              <p className="t-body mt-3">{reviso.description}</p>
              <div className="mt-6 flex flex-wrap items-center gap-x-6">
                <Link href={`/${reviso.slug}`} className="link-arrow">
                  More about Reviso <span aria-hidden="true">→</span>
                </Link>
                <a href={reviso.repoUrl} target="_blank" rel="noopener noreferrer" className="link-arrow">
                  Source on GitHub <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <figure className="ink-plate md:col-span-2 lg:col-span-1 self-start rounded-md p-5">
              <figcaption className="t-label mb-4" style={{ color: "#a8adbd" }}>
                In Claude Code: install, then review a branch
              </figcaption>
              <pre className="t-mono leading-7" style={{ fontSize: 13 }}>
                {REVISO_COMMANDS.map((line) => (
                  <code key={line} className="block whitespace-pre-wrap break-all py-0.5 pl-4 -indent-4">
                    <span aria-hidden="true" style={{ color: "#22d3ee" }}>
                      ›{" "}
                    </span>
                    {line}
                  </code>
                ))}
              </pre>
              <p className="mt-4 pt-4 text-[14px]" style={{ borderTop: "1px solid rgb(168 173 189 / 0.2)", color: "#a8adbd" }}>
                Using Codex?{" "}
                <a href={`${reviso.repoUrl}#codex-installation`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4" style={{ color: "var(--fog)", textDecorationColor: "var(--amber)" }}>
                  Codex install steps
                </a>{" "}
                are in the README.
              </p>
            </figure>
          </article>
        </div>
      </div>
    </section>
  );
}
