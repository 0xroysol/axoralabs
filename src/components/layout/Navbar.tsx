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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border border-[#e4dccf] bg-white/88 px-4 py-3 text-slate-950 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl md:px-5">
        <Link href="/" className="focus-ring inline-flex items-center gap-3 rounded-full px-1 py-1 font-display text-base font-semibold tracking-[-0.03em] md:text-lg">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-[#e6ded2] bg-[#faf6ef] text-sm font-semibold text-slate-950">
            A
          </span>
          <span>{brandName}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {studioNavLinks.map((item) => (
            <Link key={item.href} href={item.href} className="focus-ring rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-950">
              {t(item.label)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher compact />
          <Link href="/#contact" className="focus-ring inline-flex items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-900">
            {t("Let's Talk")}
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher compact />
          <button
            type="button"
            className="focus-ring rounded-full border border-[#e4dccf] bg-[#faf6ef] px-3 py-2 text-sm text-slate-950"
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
            className="mx-auto mt-3 w-full max-w-7xl overflow-hidden rounded-[2rem] border border-[#e4dccf] bg-white px-5 pb-5 pt-4 text-slate-950 shadow-[0_18px_40px_rgba(15,23,42,0.06)] md:hidden"
          >
            <div className="flex flex-col gap-1">
              {studioNavLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="focus-ring rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 hover:text-slate-950"
                  onClick={() => setMenuOpen(false)}
                >
                  {t(item.label)}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="focus-ring mt-2 inline-flex items-center justify-center rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white"
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
