import Image from "next/image";
import Link from "next/link";
import type { VyttleApp } from "@/lib/apps";
import Stamp from "@/components/Stamp";
import IssueLine from "@/components/IssueLine";
import StoreBadges from "@/components/StoreBadges";
import ProductName from "@/components/ProductName";

/** The shipped app's catalogue entry: postmarked stamp, entry, and two real screens. */
export default function FeaturedApp({ app }: { app: VyttleApp }) {
  const [front, back] = app.screenshots ?? [];

  return (
    <article id={app.slug} className="scroll-mt-24 grid grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
      <div className="grid grid-cols-1 items-start gap-10 sm:grid-cols-[176px_minmax(0,1fr)] sm:gap-14">
        <Stamp app={app} className="w-[150px] sm:w-[176px]" />
        <div>
          <IssueLine app={app} extra={["Free"]} />
          <h3 className="mt-5" style={{ fontSize: "clamp(2.5rem, 4.6vw, 3.5rem)", lineHeight: 1.02 }}>
            <ProductName app={app} />
          </h3>
          <p className="t-title mt-3">{app.tagline}</p>
          <p className="t-body mt-4">{app.description}</p>
          <div className="mt-8">
            <StoreBadges app={app} />
          </div>
          <Link href={`/${app.slug}`} className="link-arrow mt-5">
            More about {app.name} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {front && back && (
        <div className="relative mx-auto w-full max-w-[420px] aspect-[5/6]" aria-hidden="true">
          {[back, front].map((shot, i) => (
            <Image
              key={shot.src}
              src={shot.src}
              alt=""
              width={shot.width}
              height={shot.height}
              sizes="220px"
              className="absolute w-[54%] h-auto rounded-[26px]"
              style={{
                top: i === 0 ? "0" : "9%",
                left: i === 0 ? "44%" : "4%",
                transform: `rotate(${i === 0 ? 5 : -4}deg)`,
                border: "1px solid var(--border-strong)",
                boxShadow: "0 2px 4px rgb(0 0 0 / 0.25), 0 24px 48px rgb(0 0 0 / 0.35)",
              }}
            />
          ))}
        </div>
      )}
    </article>
  );
}
