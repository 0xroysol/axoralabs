import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import { Footer } from "@/src/components/layout/Footer";
import { Navbar } from "@/src/components/layout/Navbar";
import { brand } from "@/src/content/siteContent";

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
    default: "AxoraLab.ai | AI-powered business systems studio",
    template: "%s | AxoraLab.ai"
  },
  description:
    "AxoraLab.ai designs AI-powered business systems, finance dashboards, operational panels, and intelligent assistants.",
  openGraph: {
    title: "AxoraLab.ai",
    description:
      "Engineering intelligent business systems for finance, operations, and AI-enabled execution.",
    url: "https://axoralabs.ai",
    siteName: "AxoraLab.ai",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AxoraLab.ai",
    description:
      "AI-powered dashboards, finance infrastructure, and intelligent assistants for modern companies."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-bg text-white antialiased">
        <a
          href="#main-content"
          className="focus-ring sr-only z-[999] rounded-md border border-slate-100 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-950 focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <div className="relative min-h-screen overflow-x-clip">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-slate-700/10 to-transparent" />
          <Navbar brandName={brand.name} />
          <main id="main-content" className="pt-20">
            {children}
          </main>
          <Footer statement={brand.footerStatement} domain={brand.domain} />
        </div>
      </body>
    </html>
  );
}
