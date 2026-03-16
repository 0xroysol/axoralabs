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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#05060c]/72 text-white backdrop-blur-2xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-6">
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
          <div className="ml-3">
            <LanguageSwitcher compact />
          </div>
        </nav>

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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/8 bg-[#05060c]/96 px-5 pb-5 md:hidden"
          >
            <div className="mt-4 flex flex-col gap-1">
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
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
