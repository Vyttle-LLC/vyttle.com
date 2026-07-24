import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Vyttle — Small by design",
  description:
    "A software studio building intentionally small, privacy-first mobile apps and developer tools. No accounts. No tracking. No servers.",
  openGraph: {
    title: "Vyttle — Small by design",
    description:
      "A software studio building intentionally small, privacy-first mobile apps and developer tools.",
    type: "website",
    siteName: "Vyttle",
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
        {/* Hidden form for Netlify Forms detection during static build */}
        <form
          name="support"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
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
