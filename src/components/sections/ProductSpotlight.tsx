"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/src/components/ui/ButtonLink";
import { LocalizedText } from "@/src/components/ui/LocalizedText";
import { homeProductSpotlight } from "@/src/content/siteContent";

export function ProductSpotlight() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-14">
      <motion.article
        initial={reducedMotion ? undefined : { opacity: 0, y: 18 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45 }}
        className="surface-strong rounded-3xl p-8 md:p-10"
      >
        <LocalizedText text={homeProductSpotlight.eyebrow} as="p" className="eyebrow" />
        <LocalizedText
          text={homeProductSpotlight.title}
          as="h2"
          className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight text-slate-100 md:text-4xl"
        />
        <LocalizedText text={homeProductSpotlight.subtitle} as="p" className="mt-4 max-w-2xl text-sm leading-relaxed text-textSoft md:text-base" />

        <div className="mt-6 flex flex-wrap gap-2">
          {homeProductSpotlight.features.map((feature) => (
            <span
              key={feature}
              className="rounded-full border border-slate-600 bg-slate-900/55 px-3 py-1 text-xs font-medium tracking-wide text-slate-200"
            >
              <LocalizedText text={feature} />
            </span>
          ))}
        </div>

        <div className="mt-7">
          <ButtonLink href={homeProductSpotlight.href}>
            <LocalizedText text={homeProductSpotlight.cta} />
          </ButtonLink>
        </div>
      </motion.article>
    </section>
  );
}
