import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono, Source_Serif_4 } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

// One family across its width axis: expanded for display, normal for reading,
// slightly wide for printed labels (see DESIGN.md).
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

// Only Sixteen to One's name uses it — its brand kit sets the name in serif.
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
});

/* viewport-fit=cover is load-bearing, not cosmetic: the mobile menu and the
   screenshot lightbox already pad themselves with env(safe-area-inset-*), and
   without it those six declarations resolve to 0, so every notch and
   home-indicator allowance in this codebase was silently inert. Enabling it
   lets content reach the physical screen edge, which is why `body` and the
   fixed nav now carry their own inset gutters — see globals.css. */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const SITE_URL = "https://vyttle.com";
const DESCRIPTION =
  "An independent software studio making small, private apps for iPhone and Android, and open-source tools for developers who work with coding agents.";

export const metadata: Metadata = {
  // Without metadataBase, Next cannot resolve relative og/canonical URLs and
  // drops them. Store listings and policy pages get shared around, so a bare
  // text card was the first impression of every shared link.
  metadataBase: new URL(SITE_URL),
  title: "Vyttle — Small by design",
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Vyttle — Small by design",
    description: DESCRIPTION,
    type: "website",
    siteName: "Vyttle",
    url: "/",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "“Small by design.” beside a perforated sheet of six Vyttle stamps, one per product, with Sixteen to One postmarked April 2026.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vyttle — Small by design",
    description: DESCRIPTION,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('vyttle-theme')||'dark';document.documentElement.setAttribute('data-theme',t)})()`,
          }}
        />
      </head>
      <body
        className={`${archivo.variable} ${jetbrainsMono.variable} ${sourceSerif.variable} antialiased`}
      >
        {/* Skip link — first focusable element, visible only on keyboard focus */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100]"
          style={{
            background: "var(--surface-glass)",
            color: "var(--text-primary)",
            border: "1px solid var(--amber)",
            borderRadius: "6px",
            padding: "10px 16px",
            fontSize: "16px",
          }}
        >
          Skip to content
        </a>
        {/* Hidden form for Netlify Forms detection during static build.
            Mirrors the support fields and honeypot so Netlify registers them. */}
        <form
          name="support"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          hidden
        >
          <input type="hidden" name="form-name" value="support" />
          <input type="text" name="bot-field" />
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="text" name="app" />
          <textarea name="message" />
        </form>

        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
