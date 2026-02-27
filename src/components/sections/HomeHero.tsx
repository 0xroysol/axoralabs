"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeroOrb } from "@/src/components/three/HeroOrb";
import { ButtonLink } from "@/src/components/ui/ButtonLink";
import { brand } from "@/src/content/siteContent";

export function HomeHero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 pb-14 pt-10 md:grid-cols-[1.05fr_0.95fr] md:items-center md:pt-16">
      <div>
        <motion.p
          initial={reducedMotion ? undefined : { opacity: 0, y: 10 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-xs uppercase tracking-[0.22em] text-cyan"
        >
          AI-powered business systems studio
        </motion.p>
        <motion.h1
          initial={reducedMotion ? undefined : { opacity: 0, y: 16 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-tight md:text-6xl"
        >
          {brand.headline}
        </motion.h1>
        <motion.p
          initial={reducedMotion ? undefined : { opacity: 0, y: 16 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-5 max-w-xl text-base leading-relaxed text-textSoft md:text-lg"
        >
          {brand.subheadline}
        </motion.p>
        <motion.div
          initial={reducedMotion ? undefined : { opacity: 0, y: 16 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <ButtonLink href="/contact">Book a 15-min Discovery Call</ButtonLink>
          <ButtonLink href="/demos" variant="secondary">
            Explore Demos
          </ButtonLink>
        </motion.div>
      </div>
      <HeroOrb />
    </section>
  );
}
