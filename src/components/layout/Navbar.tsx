"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { studioNavLinks } from "@/src/content/studioContent";

type NavbarProps = {
  brandName: string;
};

export function Navbar({ brandName }: NavbarProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5">
      <div className="mx-auto max-w-[90rem]">
        <div className="relative flex w-full items-center justify-between rounded-[1.6rem] border border-white/10 bg-[#070A12]/74 px-4 py-3 text-white shadow-[0_24px_80px_rgba(0,0,0,0.4)] backdrop-blur-2xl md:px-5">
          <div className="absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)]" />
          <Link
            href="/"
            className="focus-ring inline-flex items-center gap-3 rounded-full px-1 py-1 font-display text-base font-semibold tracking-[-0.03em] md:text-lg"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <span className="h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)]" />
            </span>
            <span className="flex flex-col leading-none">
              <span>{brandName}</span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.24em] text-slate-500">
                software studio
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
            {studioNavLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/[0.04] hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/#contact"
              className="focus-ring inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Start a Project
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              className="focus-ring rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              Menu
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            className="mx-auto mt-3 w-full max-w-[90rem] overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#090D17]/96 px-5 pb-5 pt-4 text-white shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {studioNavLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="focus-ring rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/[0.04] hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="focus-ring mt-2 inline-flex items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950"
                onClick={() => setMenuOpen(false)}
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
