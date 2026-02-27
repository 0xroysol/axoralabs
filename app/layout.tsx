import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Footer } from "@/src/components/layout/Footer";
import { Navbar } from "@/src/components/layout/Navbar";
import { brand } from "@/src/content/siteContent";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://axoralab.ai"),
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
    url: "https://axoralab.ai",
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
          className="focus-ring sr-only z-[999] rounded-md bg-cyan px-3 py-2 text-sm font-semibold text-bg focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <div className="relative min-h-screen overflow-x-clip">
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
