"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { LocalizedText, useTranslate } from "@/src/components/ui/LocalizedText";
import { financeOsShellContent } from "@/src/content/siteContent";

type FinanceDemoLayoutShellProps = {
  children: ReactNode;
};

export function FinanceDemoLayoutShell({ children }: FinanceDemoLayoutShellProps) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const t = useTranslate();

  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-20 pt-8">
      <motion.header
        initial={reducedMotion ? undefined : { opacity: 0, y: 10 }}
        animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="surface-strong rounded-2xl p-4 md:flex md:items-center md:justify-between"
      >
        <p className="font-display text-base font-semibold text-slate-100 md:text-lg">
          <LocalizedText text={financeOsShellContent.agencyLabel} />
        </p>
        <span className="mt-2 inline-flex rounded-full border border-slate-500 bg-slate-900/70 px-3 py-1 text-xs font-semibold tracking-[0.12em] text-slate-200 md:mt-0">
          <LocalizedText text={financeOsShellContent.sampleDataLabel} />
        </span>
      </motion.header>

      <div className="mt-6 grid gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="surface sticky top-24 h-fit rounded-2xl p-4">
          <p className="eyebrow">
            <LocalizedText text={financeOsShellContent.navLabel} />
          </p>
          <nav className="mt-3 space-y-1.5" aria-label={t(financeOsShellContent.navLabel)}>
            {financeOsShellContent.navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`focus-ring block rounded-lg border px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? "border-slate-400 bg-slate-900 text-slate-100"
                      : "border-transparent text-slate-300 hover:border-slate-700 hover:bg-slate-900/50 hover:text-slate-100"
                  }`}
                >
                  <LocalizedText text={item.label} />
                </Link>
              );
            })}
          </nav>

          <Link
            href="/"
            className="focus-ring mt-5 inline-flex rounded-md border border-slate-600 px-3 py-2 text-sm text-slate-200 transition-colors hover:border-slate-400 hover:text-white"
          >
            <LocalizedText text={financeOsShellContent.backToSiteLabel} />
          </Link>
        </aside>

        <div>{children}</div>
      </div>
    </section>
  );
}
