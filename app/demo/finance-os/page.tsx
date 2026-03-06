"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/src/components/ui/ButtonLink";
import { LocalizedText } from "@/src/components/ui/LocalizedText";
import { financeDemoRoutes, financeOsLandingContent } from "@/src/content/siteContent";

export default function FinanceOsLandingPage() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="mx-auto flex min-h-[calc(100vh-180px)] w-full max-w-5xl items-center justify-center px-6 pb-20 pt-10 md:pt-12">
      <motion.article
        initial={reducedMotion ? undefined : { opacity: 0, y: 8 }}
        animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.28 }}
        className="surface-strong w-full rounded-3xl p-8 text-center md:p-10"
      >
        <LocalizedText
          text={financeOsLandingContent.eyebrow}
          as="p"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan"
        />
        <LocalizedText
          text={financeOsLandingContent.title}
          as="h1"
          className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-slate-100 md:text-5xl"
        />
        <LocalizedText
          text={financeOsLandingContent.description}
          as="p"
          className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-textSoft md:text-lg"
        />

        <div className="mx-auto mt-8 w-full max-w-xl rounded-2xl border border-slate-700/70 bg-slate-900/55 p-5 text-left">
          <LocalizedText
            text={financeOsLandingContent.environmentTitle}
            as="h2"
            className="font-display text-lg font-semibold text-slate-100"
          />
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {financeOsLandingContent.environmentItems.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                <LocalizedText text={item} />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <ButtonLink
            href={financeDemoRoutes.overview}
            className="w-full max-w-xs border-cyan/70 bg-cyan text-slate-950 hover:bg-cyan/90"
          >
            <LocalizedText text={financeOsLandingContent.cta} />
          </ButtonLink>
          <LocalizedText
            text={financeOsLandingContent.noSignupNote}
            as="p"
            className="-mt-1 text-xs text-slate-400"
          />
          <Link
            href="/"
            className="focus-ring text-sm text-slate-400 transition-colors hover:text-slate-200"
          >
            <LocalizedText text={financeOsLandingContent.backLink} />
          </Link>
        </div>
      </motion.article>
    </section>
  );
}
