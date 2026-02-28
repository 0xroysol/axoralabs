"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeroOrb } from "@/src/components/three/HeroOrb";
import { useTranslate } from "@/src/components/ui/LocalizedText";
import { ButtonLink } from "@/src/components/ui/ButtonLink";
import { brand } from "@/src/content/siteContent";

export function HomeHero() {
  const reducedMotion = useReducedMotion();
  const t = useTranslate();

  return (
    <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 pb-14 pt-10 md:grid-cols-[1.08fr_0.92fr] md:items-center md:pt-16">
      <div>
        <motion.p
          initial={reducedMotion ? undefined : { opacity: 0, y: 10 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="eyebrow"
        >
          {t("Executive AI systems studio")}
        </motion.p>
        <motion.h1
          initial={reducedMotion ? undefined : { opacity: 0, y: 16 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-[1.06] text-slate-100 md:text-6xl"
        >
          {t(brand.headline)}
        </motion.h1>
        <motion.p
          initial={reducedMotion ? undefined : { opacity: 0, y: 16 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-5 max-w-xl text-base leading-relaxed text-textSoft md:text-lg"
        >
          {t(brand.subheadline)}
        </motion.p>
        <motion.div
          initial={reducedMotion ? undefined : { opacity: 0, y: 16 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.11 }}
          className="mt-6 flex flex-wrap gap-2"
        >
          <span className="rounded-full border border-slate-600 px-3 py-1 text-xs font-medium text-slate-300">
            {t("Investor-ready UX")}
          </span>
          <span className="rounded-full border border-slate-600 px-3 py-1 text-xs font-medium text-slate-300">
            {t("Finance-grade trust")}
          </span>
          <span className="rounded-full border border-slate-600 px-3 py-1 text-xs font-medium text-slate-300">
            {t("AI-native workflows")}
          </span>
        </motion.div>
        <motion.div
          initial={reducedMotion ? undefined : { opacity: 0, y: 16 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <ButtonLink href="/contact">{t("Book a 15-min Discovery Call")}</ButtonLink>
          <ButtonLink href="/demos" variant="secondary">
            {t("Explore Demos")}
          </ButtonLink>
        </motion.div>
        <motion.p
          initial={reducedMotion ? undefined : { opacity: 0, y: 16 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.14 }}
          className="mt-5 text-sm text-slate-300"
        >
          {t("Founder & CEO: Murat Guler")}
        </motion.p>
      </div>
      <div className="surface-strong rounded-3xl p-3">
        <HeroOrb />
      </div>
    </section>
  );
}
