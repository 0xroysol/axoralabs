"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslate } from "@/src/components/ui/LocalizedText";

type PricingCardProps = {
  title: string;
  price: string;
  outcome: string;
};

export function PricingCard({ title, price, outcome }: PricingCardProps) {
  const reducedMotion = useReducedMotion();
  const t = useTranslate();

  return (
    <motion.article
      whileHover={reducedMotion ? undefined : { scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="surface relative overflow-hidden rounded-2xl p-6"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/40 to-transparent" />
      <h3 className="font-display text-lg font-semibold">{t(title)}</h3>
      <p className="mt-3 text-xl font-semibold text-slate-100">{t(price)}</p>
      <p className="mt-3 text-sm leading-relaxed text-textSoft">{t(outcome)}</p>
    </motion.article>
  );
}
