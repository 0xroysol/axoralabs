"use client";

import { motion, useReducedMotion } from "framer-motion";

type PricingCardProps = {
  title: string;
  price: string;
  outcome: string;
};

export function PricingCard({ title, price, outcome }: PricingCardProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={reducedMotion ? undefined : { scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="surface relative overflow-hidden rounded-2xl p-6"
    >
      <div className="pointer-events-none absolute -right-12 top-1 h-28 w-28 rounded-full bg-cyan/20 blur-3xl" />
      <h3 className="font-display text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-xl font-semibold text-cyan">{price}</p>
      <p className="mt-3 text-sm leading-relaxed text-textSoft">{outcome}</p>
    </motion.article>
  );
}
