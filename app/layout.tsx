import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import { Footer } from "@/src/components/layout/Footer";
import { Navbar } from "@/src/components/layout/Navbar";
import { LocalizedText } from "@/src/components/ui/LocalizedText";
import { LanguageProvider } from "@/src/i18n/LanguageProvider";
import { studioBrand, studioSeoByLocale } from "@/src/content/studioContent";

const display = Sora({
  subsets: ["latin"],
  variable: "--font-display"
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://axoralabs.ai"),
  title: {
    default: studioSeoByLocale.tr.title,
    template: "%s | AxoraLab"
  },
  description: studioSeoByLocale.tr.description,
  openGraph: {
    title: studioSeoByLocale.en.title,
    description: studioSeoByLocale.en.description,
    url: "https://axoralabs.ai",
    siteName: "AxoraLab",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: studioSeoByLocale.en.title,
    description: studioSeoByLocale.en.description
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${display.variable} ${body.variable}`}>
      <body className="bg-bg text-slate-950 antialiased">
        <LanguageProvider>
          <a
            href="#main-content"
            className="focus-ring sr-only z-[999] rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-950 focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
          >
            <LocalizedText text="Skip to content" />
          </a>
          <div className="relative min-h-screen overflow-x-clip bg-[#f5f1e8]">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[280px] bg-[radial-gradient(circle_at_top_left,rgba(15,23,42,0.06),transparent_44%),radial-gradient(circle_at_top_right,rgba(148,163,184,0.15),transparent_36%)]" />
            <Navbar brandName={studioBrand.name} />
            <main id="main-content" className="pt-24 md:pt-28">
              {children}
            </main>
            <Footer statement={studioBrand.footerStatement} domain={studioBrand.copyrightLabel} />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
