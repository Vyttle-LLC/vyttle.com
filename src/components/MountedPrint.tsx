import Image from "next/image";

/** A real screenshot held to the album page by four photo corners. */
export default function MountedPrint({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
  return (
    <figure className="mounted">
      {(["tl", "tr", "bl", "br"] as const).map((corner) => (
        <span key={corner} className={`mounted__corner mounted__corner--${corner}`} aria-hidden="true" />
      ))}
      <Image src={src} alt={alt} width={width} height={height} sizes="(min-width: 1024px) 640px, 100vw" />
    </figure>
  );
}
