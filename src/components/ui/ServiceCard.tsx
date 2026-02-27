"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
};

export function ServiceCard({ title, description, href }: ServiceCardProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={reducedMotion ? undefined : { y: -5 }}
      transition={{ duration: 0.2 }}
      className="surface rounded-2xl p-6 shadow-[0_0_20px_rgba(0,229,255,0.08)]"
    >
      <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-textSoft">{description}</p>
      <Link href={href} className="focus-ring mt-6 inline-flex rounded-md text-sm font-semibold text-cyan transition-opacity hover:opacity-85">
        Learn more
      </Link>
    </motion.article>
  );
}
