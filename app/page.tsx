"use client";

import { Suspense } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ContactForm } from "@/src/components/sections/ContactForm";
import {
  StudioHeroScene,
  StudioMobileHeroScene
} from "@/src/components/sections/StudioHeroScene";
import { studioHomeContent } from "@/src/content/studioContent";

const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] }
} as const;

export default function HomePage() {
  return (
    <div className="bg-[#05060A] text-[#F5F7FB]">
      <section className="relative overflow-hidden border-b border-white/8 bg-[#05060A]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(77,163,255,0.16),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(119,101,255,0.14),transparent_24%),linear-gradient(180deg,#05060A_0%,#070A12_45%,#05060A_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,transparent,rgba(5,6,10,0.96))]" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-6 pb-20 pt-28 md:pb-24 md:pt-32 lg:grid-cols-[0.64fr_1.36fr] lg:items-center lg:gap-8 xl:pt-36">
          <motion.div {...reveal} className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              {studioHomeContent.hero.eyebrow}
            </p>
            <h1 className="mt-6 max-w-[10ch] font-display text-[3.5rem] font-semibold leading-[0.88] tracking-[-0.09em] text-white md:text-[5.6rem]">
              {studioHomeContent.hero.title}
            </h1>
            <p className="mt-6 max-w-[34rem] text-base leading-8 text-slate-300 md:text-lg">
              {studioHomeContent.hero.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
              >
                {studioHomeContent.hero.primaryCta}
              </Link>
              <Link
                href="/#what-we-build"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08]"
              >
                {studioHomeContent.hero.secondaryCta}
              </Link>
            </div>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.06 }}
            className="hidden lg:block"
          >
            <StudioHeroScene />
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.06 }}
            className="lg:hidden"
          >
            <StudioMobileHeroScene />
          </motion.div>
        </div>
      </section>

      <motion.section id="what-we-build" {...reveal} className="border-b border-white/8 bg-[#070A12]">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-28">
          <div className="max-w-3xl">
            <h2 className="font-display text-[3rem] font-semibold tracking-[-0.08em] text-white md:text-[4rem]">
              {studioHomeContent.whatWeBuild.title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              {studioHomeContent.whatWeBuild.subtitle}
            </p>
          </div>

          <div className="mt-16 grid gap-x-12 gap-y-12 border-t border-white/8 pt-10 md:grid-cols-2">
            {studioHomeContent.whatWeBuild.items.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -3 }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,16,32,0.84),rgba(6,8,15,0.98))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(77,163,255,0),rgba(77,163,255,0.8),rgba(119,101,255,0.72),rgba(119,101,255,0))] opacity-70" />
                <h3 className="font-display text-[2rem] font-semibold tracking-[-0.06em] text-white">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[31ch] text-base leading-8 text-slate-400">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="process" {...reveal} className="border-b border-white/8 bg-[#05060A]">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-28">
          <div className="max-w-3xl">
            <h2 className="font-display text-[3rem] font-semibold tracking-[-0.08em] text-white md:text-[4rem]">
              {studioHomeContent.process.title}
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-[0.22fr_0.78fr] lg:items-start">
            <div className="hidden lg:block">
              <div className="relative ml-3 h-full min-h-[22rem] w-px bg-white/10">
                <div className="absolute left-1/2 top-0 h-24 w-px -translate-x-1/2 bg-[linear-gradient(180deg,#4DA3FF,#7765FF,transparent)]" />
              </div>
            </div>

            <div className="space-y-6">
              {studioHomeContent.process.steps.map((step, index) => (
                <motion.article
                  key={step.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="relative overflow-hidden rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,16,32,0.86),rgba(6,8,15,0.98))] px-5 py-5 md:px-6"
                >
                  <div className="absolute left-0 top-0 h-full w-px bg-[linear-gradient(180deg,#4DA3FF,#7765FF,transparent)] opacity-90" />
                  <div className="flex items-start gap-4 md:gap-5">
                    <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-[11px] font-semibold tracking-[0.2em] text-slate-300">
                      0{index + 1}
                    </div>
                    <div>
                      <h3 className="font-display text-[1.5rem] font-semibold tracking-[-0.05em] text-white">
                        {step.name}
                      </h3>
                      <p className="mt-2 max-w-[48ch] text-sm leading-7 text-slate-400">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section id="contact" {...reveal} className="bg-[#05060A]">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-28">
          <div className="overflow-hidden rounded-[2.25rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,16,32,0.98),rgba(6,8,15,1))] shadow-[0_40px_140px_rgba(0,0,0,0.4)]">
            <div className="grid gap-10 px-6 py-8 md:px-8 md:py-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-start lg:gap-12">
              <div className="relative max-w-lg">
                <div className="absolute -left-8 top-0 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(77,163,255,0.12),transparent_70%)] blur-3xl" />
                <div className="relative">
                  <h2 className="max-w-[12ch] font-display text-[3rem] font-semibold leading-[0.92] tracking-[-0.08em] text-white md:text-[4.2rem]">
                    {studioHomeContent.finalCta.title}
                  </h2>
                  <p className="mt-5 max-w-[34ch] text-base leading-8 text-slate-400">
                    {studioHomeContent.finalCta.description}
                  </p>
                  <a
                    href={`mailto:${studioHomeContent.finalCta.email}`}
                    className="focus-ring mt-8 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-slate-300 transition hover:text-white"
                  >
                    {studioHomeContent.finalCta.email}
                  </a>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[1.9rem] border border-white/8 bg-[linear-gradient(180deg,rgba(9,12,23,0.98),rgba(5,7,13,1))] p-5 md:p-7">
                <div className="absolute right-[-3rem] top-[-3rem] h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(119,101,255,0.12),transparent_68%)] blur-3xl" />
                <div className="relative">
                  <h3 className="font-display text-[2rem] font-semibold tracking-[-0.06em] text-white md:text-[2.2rem]">
                    {studioHomeContent.finalCta.formIntroTitle}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                    {studioHomeContent.finalCta.formIntroDescription}
                  </p>
                  <div className="mt-8 border-t border-white/8 pt-8">
                    <Suspense fallback={null}>
                      <ContactForm />
                    </Suspense>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
