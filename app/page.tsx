"use client";

import { Suspense } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ContactForm } from "@/src/components/sections/ContactForm";
import {
  StudioHeroScene,
  StudioMobileHeroScene,
  StudioShowcaseModules
} from "@/src/components/sections/StudioHeroScene";
import { LocalizedText } from "@/src/components/ui/LocalizedText";
import { studioHomeContent } from "@/src/content/studioContent";

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] }
} as const;

export default function HomePage() {
  return (
    <div className="bg-[#05060A] text-[#F5F7FB]">
      <section className="relative overflow-hidden border-b border-white/8 bg-[#05060A]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_14%,rgba(77,163,255,0.16),transparent_26%),radial-gradient(circle_at_82%_16%,rgba(119,101,255,0.14),transparent_24%),linear-gradient(180deg,#05060A_0%,#060913_42%,#05060A_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,rgba(5,6,10,0.96))]" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 pb-20 pt-28 md:pb-24 md:pt-32 lg:grid lg:grid-cols-[0.68fr_1.32fr] lg:items-center lg:gap-8 xl:pt-36">
          <motion.div {...reveal} className="max-w-xl">
            <LocalizedText
              text={studioHomeContent.hero.eyebrow}
              as="p"
              className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500"
            />
            <LocalizedText
              text={studioHomeContent.hero.title}
              as="h1"
              className="mt-6 max-w-[10ch] font-display text-[3.6rem] font-semibold leading-[0.88] tracking-[-0.09em] text-white md:text-[5.8rem]"
            />
            <LocalizedText
              text={studioHomeContent.hero.description}
              as="p"
              className="mt-6 max-w-[34rem] text-base leading-8 text-slate-300 md:text-lg"
            />
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
              >
                <LocalizedText text={studioHomeContent.hero.primaryCta} />
              </Link>
              <Link
                href="/#what-we-build"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08]"
              >
                <LocalizedText text={studioHomeContent.hero.secondaryCta} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.08 }}
            className="hidden lg:block"
          >
            <StudioHeroScene />
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.08 }}
            className="lg:hidden"
          >
            <StudioMobileHeroScene />
          </motion.div>
        </div>
      </section>

      <motion.section id="showcase" {...reveal} className="border-b border-white/8 bg-[#070A12]">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-28">
          <div className="max-w-3xl">
            <LocalizedText
              text={studioHomeContent.showcase.title}
              as="h2"
              className="font-display text-[2.9rem] font-semibold leading-[0.92] tracking-[-0.08em] text-white md:text-[4.4rem]"
            />
            <LocalizedText
              text={studioHomeContent.showcase.subtitle}
              as="p"
              className="mt-5 max-w-2xl text-lg leading-8 text-slate-400"
            />
          </div>

          <div className="mt-12">
            <StudioShowcaseModules />
          </div>
        </div>
      </motion.section>

      <motion.section id="what-we-build" {...reveal} className="border-b border-white/8 bg-[#05060A]">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-28">
          <div className="max-w-3xl">
            <LocalizedText
              text={studioHomeContent.whatWeBuild.title}
              as="h2"
              className="font-display text-[2.9rem] font-semibold tracking-[-0.08em] text-white md:text-[4rem]"
            />
            <LocalizedText
              text={studioHomeContent.whatWeBuild.subtitle}
              as="p"
              className="mt-5 max-w-2xl text-lg leading-8 text-slate-400"
            />
          </div>

          <div className="mt-16 grid gap-x-10 gap-y-12 border-t border-white/8 pt-10 md:grid-cols-2">
            {studioHomeContent.whatWeBuild.items.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ y: -3 }}
                className="group relative border-t border-white/8 pt-6 md:border-t-0 md:pt-0"
              >
                <span className="absolute left-0 top-0 h-px w-0 bg-[linear-gradient(90deg,#4DA3FF,#7765FF)] transition-all duration-500 group-hover:w-24 md:top-auto md:bottom-[-0.75rem]" />
                <LocalizedText
                  text={item.title}
                  as="h3"
                  className="font-display text-[2rem] font-semibold tracking-[-0.06em] text-white"
                />
                <LocalizedText
                  text={item.description}
                  as="p"
                  className="mt-3 max-w-[28ch] text-base leading-8 text-slate-400"
                />
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="process" {...reveal} className="border-b border-white/8 bg-[#070A12]">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-28">
          <div className="max-w-3xl">
            <LocalizedText
              text={studioHomeContent.process.title}
              as="h2"
              className="font-display text-[2.9rem] font-semibold tracking-[-0.08em] text-white md:text-[4rem]"
            />
          </div>

          <div className="mt-14 overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,16,32,0.92),rgba(6,8,15,0.98))] px-5 py-8 shadow-[0_32px_120px_rgba(0,0,0,0.34)] md:px-7 md:py-10">
            <div className="grid gap-8 lg:grid-cols-5 lg:gap-5">
              {studioHomeContent.process.steps.map((step, index) => (
                <motion.article
                  key={step.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="relative pt-8"
                >
                  <div className="absolute left-0 top-0 h-px w-full bg-white/8" />
                  <div className="absolute left-0 top-0 h-px w-16 bg-[linear-gradient(90deg,#4DA3FF,#7765FF)]" />
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
                    <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">0{index + 1}</p>
                  </div>
                  <LocalizedText
                    text={step.name}
                    as="h3"
                    className="font-display text-[1.45rem] font-semibold tracking-[-0.05em] text-white"
                  />
                  <LocalizedText
                    text={step.detail}
                    as="p"
                    className="mt-3 max-w-[22ch] text-sm leading-7 text-slate-400"
                  />
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section id="contact" {...reveal} className="bg-[#05060A]">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-28">
          <div className="overflow-hidden rounded-[2.4rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,16,32,0.96),rgba(6,8,15,1))] shadow-[0_40px_140px_rgba(0,0,0,0.42)]">
            <div className="grid gap-10 px-6 py-8 md:px-8 md:py-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-12">
              <div className="relative max-w-lg">
                <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(77,163,255,0.12),transparent_68%)] blur-3xl" />
                <div className="relative">
                  <LocalizedText
                    text={studioHomeContent.finalCta.title}
                    as="h2"
                    className="max-w-[12ch] font-display text-[2.9rem] font-semibold leading-[0.92] tracking-[-0.08em] text-white md:text-[4.1rem]"
                  />
                  <LocalizedText
                    text={studioHomeContent.finalCta.description}
                    as="p"
                    className="mt-5 max-w-[34ch] text-base leading-8 text-slate-400"
                  />
                  <a
                    href={`mailto:${studioHomeContent.finalCta.email}`}
                    className="focus-ring mt-8 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-slate-300 transition hover:text-white"
                  >
                    {studioHomeContent.finalCta.email}
                  </a>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(9,12,23,0.98),rgba(5,7,13,1))] p-5 md:p-7">
                <div className="absolute right-[-3rem] top-[-3rem] h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(119,101,255,0.12),transparent_68%)] blur-3xl" />
                <div className="relative">
                  <LocalizedText
                    text={studioHomeContent.finalCta.formIntroTitle}
                    as="h3"
                    className="font-display text-[2rem] font-semibold tracking-[-0.06em] text-white md:text-[2.35rem]"
                  />
                  <LocalizedText
                    text={studioHomeContent.finalCta.formIntroDescription}
                    as="p"
                    className="mt-4 max-w-2xl text-sm leading-7 text-slate-400"
                  />
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
