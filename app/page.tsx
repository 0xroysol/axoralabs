"use client";

import Link from "next/link";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { ContactForm } from "@/src/components/sections/ContactForm";
import { StudioHeroScene, StudioShowcaseModules } from "@/src/components/sections/StudioHeroScene";
import { LocalizedText } from "@/src/components/ui/LocalizedText";
import { studioHomeContent } from "@/src/content/studioContent";

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
} as const;

function SectionLabel({ text }: { text: string }) {
  return <LocalizedText text={text} as="p" className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500" />;
}

export default function HomePage() {
  return (
    <div className="bg-[#05060A] text-[#F5F7FB]">
      <section className="relative overflow-hidden border-b border-white/8 bg-[#05060A]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_14%,rgba(77,163,255,0.12),transparent_24%),radial-gradient(circle_at_84%_12%,rgba(119,101,255,0.12),transparent_24%),linear-gradient(180deg,#05060A_0%,#070A12_56%,#05060A_100%)]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-6 pb-24 pt-12 md:pb-28 md:pt-20 lg:grid-cols-[0.74fr_1.26fr] lg:items-center xl:pt-28">
          <motion.div {...reveal} className="max-w-xl">
            <SectionLabel text={studioHomeContent.hero.eyebrow} />
            <LocalizedText
              text={studioHomeContent.hero.title}
              as="h1"
              className="mt-6 max-w-[11ch] font-display text-[3.35rem] font-semibold leading-[0.88] tracking-[-0.09em] text-white md:text-[5.4rem]"
            />
            <LocalizedText
              text={studioHomeContent.hero.description}
              as="p"
              className="mt-6 max-w-[34rem] text-base leading-8 text-slate-300 md:text-lg"
            />
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                <LocalizedText text={studioHomeContent.hero.primaryCta} />
              </Link>
              <Link
                href="/#what-we-build"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.06]"
              >
                <LocalizedText text={studioHomeContent.hero.secondaryCta} />
              </Link>
            </div>
          </motion.div>

          <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.08 }}>
            <StudioHeroScene />
          </motion.div>
        </div>
      </section>

      <motion.section id="showcase" {...reveal} className="border-b border-white/8 bg-[#070A12]">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-30">
          <div className="max-w-3xl">
            <SectionLabel text={studioHomeContent.showcase.title} />
            <LocalizedText
              text={studioHomeContent.showcase.title}
              as="h2"
              className="mt-4 font-display text-[2.7rem] font-semibold leading-[0.92] tracking-[-0.08em] text-white md:text-[4.35rem]"
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
            <SectionLabel text={studioHomeContent.whatWeBuild.title} />
            <LocalizedText text={studioHomeContent.whatWeBuild.title} as="h2" className="mt-4 font-display text-[2.7rem] font-semibold tracking-[-0.08em] text-white md:text-[4.1rem]" />
            <LocalizedText text={studioHomeContent.whatWeBuild.subtitle} as="p" className="mt-5 max-w-2xl text-lg leading-8 text-slate-400" />
          </div>

          <div className="mt-14 grid gap-x-14 gap-y-10 md:grid-cols-2">
            {studioHomeContent.whatWeBuild.items.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="border-t border-white/8 pt-6"
              >
                <LocalizedText text={item.title} as="h3" className="font-display text-[2rem] font-semibold tracking-[-0.05em] text-white" />
                <LocalizedText text={item.description} as="p" className="mt-3 max-w-[32ch] text-base leading-8 text-slate-400" />
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="process" {...reveal} className="border-b border-white/8 bg-[#070A12]">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-28">
          <div className="max-w-3xl">
            <SectionLabel text={studioHomeContent.process.title} />
            <LocalizedText text={studioHomeContent.process.title} as="h2" className="mt-4 font-display text-[2.7rem] font-semibold tracking-[-0.08em] text-white md:text-[4.1rem]" />
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-5 lg:gap-5">
            {studioHomeContent.process.steps.map((step, index) => (
              <motion.article
                key={step.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="relative pt-8"
              >
                <div className="absolute left-0 top-0 h-px w-full bg-white/8" />
                <div className="absolute left-0 top-0 h-px w-14 bg-white/25" />
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">0{index + 1}</p>
                <LocalizedText text={step.name} as="h3" className="mt-4 font-display text-[1.45rem] font-semibold tracking-[-0.05em] text-white" />
                <LocalizedText text={step.detail} as="p" className="mt-3 max-w-[22ch] text-sm leading-7 text-slate-400" />
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="about" {...reveal} className="bg-[#05060A]">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-30">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div className="max-w-lg">
              <SectionLabel text={studioHomeContent.about.title} />
              <LocalizedText text={studioHomeContent.about.title} as="h2" className="mt-4 max-w-[10ch] font-display text-[2.7rem] font-semibold leading-[0.92] tracking-[-0.08em] text-white md:text-[4.1rem]" />
              <LocalizedText text={studioHomeContent.about.description} as="p" className="mt-5 text-base leading-8 text-slate-400" />
            </div>

            <div id="contact" className="relative overflow-hidden rounded-[2.2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,16,32,0.96),rgba(6,8,15,1))] p-6 shadow-[0_36px_120px_rgba(0,0,0,0.36)] md:p-8">
              <div className="absolute right-[-4rem] top-[-3rem] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(119,101,255,0.12),transparent_68%)] blur-3xl" />
              <div className="absolute bottom-[-4rem] left-[-3rem] h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(77,163,255,0.1),transparent_68%)] blur-3xl" />
              <div className="relative">
                <SectionLabel text={studioHomeContent.finalCta.title} />
                <LocalizedText text={studioHomeContent.finalCta.title} as="h2" className="mt-4 max-w-[12ch] font-display text-[2.7rem] font-semibold leading-[0.92] tracking-[-0.08em] text-white md:text-[4rem]" />
                <LocalizedText text={studioHomeContent.finalCta.description} as="p" className="mt-5 max-w-2xl text-base leading-8 text-slate-300" />
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-400">
                  <a href={`mailto:${studioHomeContent.finalCta.email}`} className="focus-ring inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 transition hover:text-white">
                    {studioHomeContent.finalCta.email}
                  </a>
                  <Link href="/contact" className="focus-ring inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 font-semibold text-slate-950 transition hover:bg-slate-100">
                    <LocalizedText text={studioHomeContent.finalCta.cta} />
                  </Link>
                </div>

                <div className="mt-8 border-t border-white/8 pt-8">
                  <Suspense fallback={null}>
                    <ContactForm />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
