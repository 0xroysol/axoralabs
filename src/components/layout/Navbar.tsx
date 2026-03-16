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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 text-white md:px-5">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#070911]/78 px-4 py-3 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:px-5">
        <Link
          href="/"
          className="focus-ring inline-flex items-center gap-3 rounded-full px-1 py-1 font-display text-base font-semibold tracking-[-0.03em] md:text-lg"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.25)]">
            A
          </span>
          <span>{brandName}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {studioNavLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher compact />
          <Link
            href="/#contact"
            className="focus-ring inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
          >
            {t("Let's Talk")}
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher compact />
          <button
            type="button"
            className="focus-ring rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white"
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
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            className="mx-auto mt-3 w-full max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#070911]/96 px-5 pb-5 pt-4 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {studioNavLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="focus-ring rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {t(item.label)}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="focus-ring mt-2 inline-flex items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950"
                onClick={() => setMenuOpen(false)}
              >
                {t("Let's Talk")}
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
