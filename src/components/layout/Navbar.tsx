"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/src/components/ui/LanguageSwitcher";
import { useTranslate } from "@/src/components/ui/LocalizedText";
import { studioNavLinks } from "@/src/content/studioContent";

type NavbarProps = {
  brandName: string;
};

export function Navbar({ brandName }: NavbarProps) {
  const pathname = usePathname();
  const t = useTranslate();
  const [menuOpen, setMenuOpen] = useState(false);
  const isDemoRoute = pathname.startsWith("/demo/");

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const headerClasses = isDemoRoute
    ? "border-slate-800/70 bg-[#0a1018]/88 text-slate-100"
    : "border-[#d9d1c3]/80 bg-[#f6f1e8]/88 text-slate-950";

  const linkClasses = isDemoRoute
    ? "text-slate-300 hover:text-white"
    : "text-slate-600 hover:text-slate-950";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl ${headerClasses}`}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-6">
        <Link
          href="/"
          className="focus-ring inline-flex items-center gap-3 rounded-full px-1 py-1 font-display text-base font-semibold tracking-[-0.02em] md:text-lg"
        >
          <span
            className={`inline-flex h-9 w-9 items-center justify-center rounded-2xl border text-sm font-semibold ${
              isDemoRoute
                ? "border-slate-700 bg-slate-900 text-slate-100"
                : "border-[#d8cfbf] bg-white text-slate-900 shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
            }`}
          >
            A
          </span>
          <span>{brandName}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {studioNavLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`focus-ring rounded-full px-4 py-2 text-sm font-medium transition-colors ${linkClasses}`}
            >
              {t(item.label)}
            </Link>
          ))}
          <div className="ml-3">
            <LanguageSwitcher compact={isDemoRoute} />
          </div>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher compact={isDemoRoute} />
          <button
            type="button"
            className={`focus-ring rounded-full border px-3 py-2 text-sm ${
              isDemoRoute
                ? "border-slate-700 bg-slate-900/70 text-slate-100"
                : "border-[#d7cfbf] bg-white text-slate-900"
            }`}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {t("Menu")}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`border-t px-5 pb-5 md:hidden ${
              isDemoRoute ? "border-slate-800 bg-[#0a1018]/96" : "border-[#e2dbce] bg-[#f6f1e8]/96"
            }`}
          >
            <div className="mt-4 flex flex-col gap-1">
              {studioNavLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`focus-ring rounded-2xl px-4 py-3 text-sm font-medium ${linkClasses}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {t(item.label)}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
