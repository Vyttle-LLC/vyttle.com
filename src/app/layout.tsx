import type { Metadata, Viewport } from "next";
import { Outfit, DM_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

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
  "A software studio building intentionally small, privacy-first mobile apps and developer tools. No accounts. No tracking. No servers.";

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
        alt: "The Vyttle diamond mark above the wordmark and the line “Small by design”.",
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
        {/* The product grid and interior sections start at opacity 0 and are
            revealed by an IntersectionObserver. With scripting unavailable that
            reveal never fires and the homepage is a hero above an empty page,
            so restore them. Deliberately scoped to [data-reveal]: .fade-in is a
            pure CSS animation with `forwards` and needs no fallback. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important;transition:none!important}`}</style>
        </noscript>
      </head>
      <body
        className={`${outfit.variable} ${dmSans.variable} ${sourceSerif.variable} antialiased`}
      >
        {/* Skip link — first focusable element, visible only on keyboard focus */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100]"
          style={{
            background: "var(--surface-glass)",
            color: "var(--text-primary)",
            border: "1px solid var(--amber)",
            borderRadius: "10px",
            padding: "10px 16px",
            fontFamily: "var(--font-dm-sans), DM Sans, sans-serif",
            fontSize: "16px",
          }}
        >
          Skip to content
        </a>
        {/* Hidden form for Netlify Forms detection during static build.
            Mirrors the real form's Netlify attributes (incl. reCAPTCHA) so
            Netlify registers the "support" form with reCAPTCHA required. */}
        <form
          name="support"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          data-netlify-recaptcha="true"
          hidden
        >
          <input type="hidden" name="form-name" value="support" />
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="text" name="app" />
          <textarea name="message" />
        </form>

        {children}
      </body>
    </html>
  );
}
