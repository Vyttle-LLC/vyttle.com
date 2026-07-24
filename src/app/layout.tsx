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
    <html lang="en" suppressHydrationWarning>
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
