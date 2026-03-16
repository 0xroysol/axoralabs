"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { StudioHeroScene, StudioShowcaseModules } from "@/src/components/sections/StudioHeroScene";
import { LocalizedText } from "@/src/components/ui/LocalizedText";
import { studioHomeContent } from "@/src/content/studioContent";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
} as const;

function Eyebrow({ text }: { text: string }) {
  return <LocalizedText text={text} as="p" className="eyebrow-light" />;
}

export default function HomePage() {
  return (
    <div className="bg-[#05060A] text-[#f5f7fb]">
      <section className="relative overflow-hidden border-b border-white/8 bg-[#05060A]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(77,163,255,0.16),transparent_24%),radial-gradient(circle_at_78%_22%,rgba(119,101,255,0.18),transparent_28%),linear-gradient(180deg,#05060A_0%,#070A12_50%,#05060A_100%)]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-6 pb-24 pt-12 md:pb-28 md:pt-20 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-12 xl:pt-24">
          <motion.div {...reveal} className="max-w-xl">
            <Eyebrow text={studioHomeContent.hero.eyebrow} />
            <LocalizedText
              text={studioHomeContent.hero.title}
              as="h1"
              className="mt-6 max-w-[10ch] font-display text-[3.35rem] font-semibold leading-[0.9] tracking-[-0.09em] text-white md:text-[5.4rem]"
            />
            <LocalizedText
              text={studioHomeContent.hero.description}
              as="p"
              className="mt-6 max-w-[34rem] text-base leading-8 text-slate-300 md:text-lg"
            />
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
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

      <motion.section {...reveal} className="border-b border-white/8 bg-[#070A12]">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-28">
          <div className="max-w-3xl">
            <LocalizedText
              text={studioHomeContent.showcase.title}
              as="h2"
              className="font-display text-[2.6rem] font-semibold leading-[0.94] tracking-[-0.08em] text-white md:text-[4.1rem]"
            />
            <LocalizedText
              text={studioHomeContent.showcase.subtitle}
              as="p"
              className="mt-4 max-w-2xl text-lg leading-8 text-slate-400"
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
            <LocalizedText text={studioHomeContent.whatWeBuild.title} as="h2" className="font-display text-[2.6rem] font-semibold tracking-[-0.08em] text-white md:text-[4rem]" />
            <LocalizedText text={studioHomeContent.whatWeBuild.subtitle} as="p" className="mt-4 max-w-2xl text-lg leading-8 text-slate-400" />
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {studioHomeContent.whatWeBuild.items.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,16,32,0.92),rgba(8,10,20,0.98))] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.28)]"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">0{index + 1}</p>
                <LocalizedText text={item.title} as="h3" className="mt-8 font-display text-[1.7rem] font-semibold tracking-[-0.05em] text-white" />
                <LocalizedText text={item.description} as="p" className="mt-4 text-sm leading-7 text-slate-400" />
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="systems" {...reveal} className="border-b border-white/8 bg-[#070A12]">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-24 md:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="max-w-xl">
            <LocalizedText text={studioHomeContent.systems.title} as="h2" className="font-display text-[2.8rem] font-semibold leading-[0.92] tracking-[-0.09em] text-white md:text-[4.4rem]" />
            <LocalizedText text={studioHomeContent.systems.subtitle} as="p" className="mt-4 max-w-lg text-lg leading-8 text-slate-400" />
          </div>

          <div className="grid gap-4">
            {studioHomeContent.systems.items.map((item, index) => (
              <motion.article
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -3 }}
                className="flex items-center justify-between rounded-[1.6rem] border border-white/8 bg-white/[0.03] px-5 py-5 shadow-[0_16px_50px_rgba(0,0,0,0.22)]"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xs font-semibold text-slate-400">
                    0{index + 1}
                  </span>
                  <LocalizedText text={item} as="p" className="text-base text-slate-200 md:text-lg" />
                </div>
                <span className="h-px w-10 bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.2))]" />
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="process" {...reveal} className="border-b border-white/8 bg-[#05060A]">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-28">
          <div className="max-w-3xl">
            <LocalizedText text={studioHomeContent.process.title} as="h2" className="font-display text-[2.6rem] font-semibold tracking-[-0.08em] text-white md:text-[4rem]" />
          </div>

          <div className="relative mt-14 grid gap-5 lg:grid-cols-5">
            <div className="pointer-events-none absolute left-8 right-8 top-5 hidden h-px bg-white/8 lg:block" />
            {studioHomeContent.process.steps.map((step, index) => (
              <motion.article
                key={step.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="relative"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0b1020] text-[11px] font-semibold text-slate-300">
                  0{index + 1}
                </div>
                <LocalizedText text={step.name} as="h3" className="font-display text-[1.35rem] font-semibold tracking-[-0.05em] text-white" />
                <LocalizedText text={step.detail} as="p" className="mt-3 max-w-[22ch] text-sm leading-7 text-slate-400" />
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="about" {...reveal} className="border-b border-white/8 bg-[#070A12]">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-24 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <LocalizedText text={studioHomeContent.about.title} as="h2" className="font-display text-[2.8rem] font-semibold leading-[0.92] tracking-[-0.09em] text-white md:text-[4.2rem]" />
          </div>
          <div className="max-w-2xl">
            <LocalizedText text={studioHomeContent.about.description} as="p" className="text-lg leading-8 text-slate-300" />
          </div>
        </div>
      </motion.section>

      <motion.section id="contact" {...reveal} className="bg-[#05060A]">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-28">
          <div className="relative overflow-hidden rounded-[2.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,16,32,0.96),rgba(6,8,15,1))] px-6 py-10 shadow-[0_40px_140px_rgba(0,0,0,0.4)] md:px-10 md:py-12">
            <div className="absolute right-[-6rem] top-[-4rem] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(119,101,255,0.18),transparent_65%)] blur-3xl" />
            <div className="absolute left-[-4rem] bottom-[-6rem] h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(77,163,255,0.15),transparent_65%)] blur-3xl" />
            <div className="relative">
              <LocalizedText text={studioHomeContent.finalCta.title} as="h2" className="max-w-[12ch] font-display text-[3rem] font-semibold leading-[0.9] tracking-[-0.09em] text-white md:text-[4.8rem]" />
              <LocalizedText text={studioHomeContent.finalCta.description} as="p" className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg" />
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/contact" className="focus-ring inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100">
                  <LocalizedText text={studioHomeContent.finalCta.cta} />
                </Link>
                <a href={`mailto:${studioHomeContent.finalCta.email}`} className="focus-ring inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300 transition hover:text-white">
                  {studioHomeContent.finalCta.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
