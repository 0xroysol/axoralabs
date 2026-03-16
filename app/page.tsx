"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { StudioHeroScene, StudioIcon, StudioPreviewStrip } from "@/src/components/sections/StudioHeroScene";
import { LocalizedText } from "@/src/components/ui/LocalizedText";
import { studioHomeContent } from "@/src/content/studioContent";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
} as const;

function HeroEyebrow({ text }: { text: string }) {
  return <LocalizedText text={text} as="p" className="eyebrow-light" />;
}

export default function HomePage() {
  return (
    <div className="bg-[#f6f1e8] text-slate-950">
      <section className="relative overflow-hidden bg-[#090d17] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_80%_22%,rgba(124,58,237,0.18),transparent_24%),linear-gradient(180deg,#090d17_0%,#0c1120_54%,#12172a_100%)]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-6 pb-24 pt-12 md:pb-28 md:pt-20 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-10">
          <motion.div {...reveal} className="max-w-xl">
            <HeroEyebrow text={studioHomeContent.hero.eyebrow} />
            <LocalizedText
              text={studioHomeContent.hero.title}
              as="h1"
              className="mt-6 max-w-[10ch] font-display text-[3.45rem] font-semibold leading-[0.9] tracking-[-0.09em] text-white md:text-[5.8rem]"
            />
            <LocalizedText
              text={studioHomeContent.hero.description}
              as="p"
              className="mt-6 max-w-lg text-base leading-relaxed text-slate-300 md:text-lg"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                <LocalizedText text={studioHomeContent.hero.primaryCta} />
              </Link>
              <Link
                href="/#what-we-build"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-white/14 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.08]"
              >
                <LocalizedText text={studioHomeContent.hero.secondaryCta} />
              </Link>
            </div>
          </motion.div>

          <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.08 }} className="relative lg:pl-4">
            <StudioHeroScene />
          </motion.div>
        </div>
      </section>

      <motion.section {...reveal} className="border-b border-[#e5dccd] bg-[#fbf7f0]">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-28">
          <div className="max-w-3xl">
            <LocalizedText text={studioHomeContent.preview.title} as="h2" className="font-display text-[2.7rem] font-semibold leading-[0.94] tracking-[-0.08em] text-slate-950 md:text-[4rem]" />
            <LocalizedText text={studioHomeContent.preview.subtitle} as="p" className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl" />
          </div>
          <div className="mt-12">
            <StudioPreviewStrip />
          </div>
        </div>
      </motion.section>

      <motion.section id="what-we-build" {...reveal} className="bg-[#f6f1e8]">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-28">
          <div className="max-w-3xl">
            <LocalizedText text={studioHomeContent.whatWeBuild.title} as="h2" className="font-display text-[2.7rem] font-semibold tracking-[-0.08em] text-slate-950 md:text-[4rem]" />
            <LocalizedText text={studioHomeContent.whatWeBuild.subtitle} as="p" className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl" />
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {studioHomeContent.whatWeBuild.items.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="rounded-[2rem] border border-[#e5dccd] bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.05)]"
              >
                <div className="mb-7 inline-flex h-12 w-12 items-center justify-center rounded-[1rem] border border-[#ece3d4] bg-[#fbf7ef] text-slate-900">
                  <StudioIcon name={item.icon as never} />
                </div>
                <LocalizedText text={item.title} as="h3" className="font-display text-[1.85rem] font-semibold tracking-[-0.05em] text-slate-950" />
                <LocalizedText text={item.description} as="p" className="mt-4 max-w-[24ch] text-sm leading-relaxed text-slate-600" />
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="systems" {...reveal} className="border-y border-[#e5dccd] bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-24 md:py-28 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="max-w-lg">
            <LocalizedText text={studioHomeContent.systems.title} as="h2" className="font-display text-[3.2rem] font-semibold leading-[0.9] tracking-[-0.09em] text-slate-950 md:text-[5rem]" />
            <LocalizedText text={studioHomeContent.systems.subtitle} as="p" className="mt-4 max-w-md text-lg leading-relaxed text-slate-600" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {studioHomeContent.systems.items.map((item, index) => (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className={`rounded-[1.8rem] border border-[#e8dfd0] bg-[#fbf7f0] p-5 shadow-[0_16px_32px_rgba(15,23,42,0.04)] ${index % 2 === 1 ? "sm:translate-y-6" : ""}`}
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-[0.95rem] border border-[#ece3d4] bg-white text-slate-900">
                  <StudioIcon name={item.icon as never} />
                </div>
                <LocalizedText text={item.label} as="p" className="max-w-[20ch] text-lg leading-snug text-slate-800" />
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="process" {...reveal} className="bg-[#f6f1e8]">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-28">
          <div className="max-w-3xl">
            <LocalizedText text={studioHomeContent.process.title} as="h2" className="font-display text-[2.7rem] font-semibold tracking-[-0.08em] text-slate-950 md:text-[4rem]" />
          </div>
          <div className="relative mt-12 grid gap-4 lg:grid-cols-5">
            <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-[#e4dccf] lg:block" />
            {studioHomeContent.process.steps.map((step, index) => (
              <motion.article
                key={step.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative rounded-[1.8rem] border border-[#e5dccd] bg-white p-5 shadow-[0_16px_32px_rgba(15,23,42,0.04)]"
              >
                <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#e5dccd] bg-[#fbf7ef] text-[11px] font-semibold text-slate-500">
                  0{index + 1}
                </div>
                <LocalizedText text={step.name} as="h3" className="font-display text-[1.45rem] font-semibold tracking-[-0.05em] text-slate-950" />
                <LocalizedText text={step.detail} as="p" className="mt-3 text-sm leading-relaxed text-slate-600" />
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="about" {...reveal} className="border-y border-[#e5dccd] bg-[#fbf7f0]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-24 md:py-28 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <LocalizedText text={studioHomeContent.about.title} as="h2" className="font-display text-[2.9rem] font-semibold tracking-[-0.08em] text-slate-950 md:text-[4.2rem]" />
            <LocalizedText text={studioHomeContent.about.description} as="p" className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600" />
          </div>
          <div className="rounded-[2rem] border border-[#e5dccd] bg-white p-6 shadow-[0_18px_38px_rgba(15,23,42,0.04)] md:p-8">
            <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">AxoraLab</p>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              <LocalizedText text="Clear process design. Strong interfaces. Systems that create value in real use." />
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-500 md:text-base">
              <LocalizedText text="We work with a product-minded approach: understanding the workflow, shaping the right system, and keeping the output durable as the operation grows." />
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section id="contact" {...reveal} className="bg-[#0b101b] text-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-28">
          <div className="rounded-[2.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] px-6 py-10 shadow-[0_40px_120px_rgba(0,0,0,0.3)] md:px-10 md:py-12">
            <LocalizedText text={studioHomeContent.finalCta.title} as="h2" className="max-w-[12ch] font-display text-[3.2rem] font-semibold leading-[0.9] tracking-[-0.09em] text-white md:text-[5rem]" />
            <LocalizedText text={studioHomeContent.finalCta.description} as="p" className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg" />
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
      </motion.section>
    </div>
  );
}
