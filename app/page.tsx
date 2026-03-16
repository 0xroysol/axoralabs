"use client";

import Link from "next/link";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { ContactForm } from "@/src/components/sections/ContactForm";
import { StudioHeroScene, StudioIcon } from "@/src/components/sections/StudioHeroScene";
import { LocalizedText } from "@/src/components/ui/LocalizedText";
import { studioHomeContent } from "@/src/content/studioContent";

const sectionReveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
} as const;

function SectionLabel({ text }: { text: string }) {
  return <LocalizedText text={text} as="p" className="eyebrow-light" />;
}

export default function HomePage() {
  return (
    <div className="bg-[#f6f1e8] text-slate-950">
      <section className="relative overflow-hidden bg-[#f6f1e8]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,23,42,0.04),transparent_22%),radial-gradient(circle_at_85%_18%,rgba(15,23,42,0.05),transparent_18%)]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-6 pb-24 pt-16 md:pb-28 md:pt-24 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-10">
          <motion.div {...sectionReveal} className="max-w-xl">
            <SectionLabel text={studioHomeContent.hero.eyebrow} />
            <LocalizedText
              text={studioHomeContent.hero.title}
              as="h1"
              className="mt-6 max-w-[11ch] font-display text-[3.25rem] font-semibold leading-[0.92] tracking-[-0.08em] text-slate-950 md:text-[5.2rem]"
            />
            <LocalizedText
              text={studioHomeContent.hero.description}
              as="p"
              className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 md:text-lg"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#contact"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-900"
              >
                <LocalizedText text={studioHomeContent.hero.primaryCta} />
              </Link>
              <Link
                href="#what-we-build"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-[#ddd4c6] bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
              >
                <LocalizedText text={studioHomeContent.hero.secondaryCta} />
              </Link>
            </div>
          </motion.div>

          <motion.div {...sectionReveal} transition={{ ...sectionReveal.transition, delay: 0.08 }} className="relative">
            <StudioHeroScene />
          </motion.div>
        </div>
      </section>

      <motion.section id="what-we-build" {...sectionReveal} className="border-t border-[#e4dccf] bg-[#fbf7f0]">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-28">
          <div className="max-w-2xl">
            <SectionLabel text={studioHomeContent.whatWeBuild.title} />
            <LocalizedText text={studioHomeContent.whatWeBuild.subtitle} as="p" className="mt-4 text-lg leading-relaxed text-slate-600 md:text-xl" />
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {studioHomeContent.whatWeBuild.items.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="rounded-[2rem] border border-[#e4dccf] bg-white p-6 shadow-[0_24px_52px_rgba(15,23,42,0.05)]"
              >
                <div className="mb-7 inline-flex h-12 w-12 items-center justify-center rounded-[1.1rem] border border-[#e8dfd2] bg-[#faf6ef] text-slate-900">
                  <StudioIcon name={item.icon as never} />
                </div>
                <LocalizedText text={item.title} as="h3" className="font-display text-[1.9rem] font-semibold tracking-[-0.05em] text-slate-950" />
                <LocalizedText text={item.description} as="p" className="mt-4 text-sm leading-relaxed text-slate-600" />
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="systems" {...sectionReveal} className="bg-[#f6f1e8]">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-24 md:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="max-w-lg">
            <SectionLabel text={studioHomeContent.systems.title} />
            <LocalizedText text={studioHomeContent.systems.subtitle} as="h2" className="mt-5 max-w-[10ch] font-display text-[3.1rem] font-semibold leading-[0.9] tracking-[-0.08em] text-slate-950 md:text-[4.8rem]" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {studioHomeContent.systems.items.map((item, index) => (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className={`rounded-[2rem] border border-[#e4dccf] bg-white p-5 shadow-[0_20px_46px_rgba(15,23,42,0.05)] ${index % 2 === 1 ? "sm:translate-y-6" : ""}`}
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-[1rem] border border-[#e8dfd2] bg-[#faf6ef] text-slate-900">
                  <StudioIcon name={item.icon as never} />
                </div>
                <LocalizedText text={item.label} as="p" className="text-lg leading-snug text-slate-800" />
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="border-y border-white/10 bg-[#0c0f18] text-white" {...sectionReveal}>
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-28">
          <SectionLabel text={studioHomeContent.selectedSystems.title} />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {studioHomeContent.selectedSystems.items.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5 shadow-[0_30px_70px_rgba(0,0,0,0.28)]"
              >
                <div className="mb-6 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[56, 72, 63, 80].map((width, rowIndex) => (
                      <div key={width + rowIndex} className="rounded-[1rem] border border-white/8 bg-white/[0.04] p-3">
                        <div className="h-12 rounded-[0.8rem] bg-white/[0.05]" />
                        <div className="mt-3 h-1.5 rounded-full bg-white/8">
                          <div className="h-1.5 rounded-full bg-white" style={{ width: `${width}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <LocalizedText text={item.title} as="h3" className="font-display text-[1.9rem] font-semibold tracking-[-0.05em] text-white" />
                <LocalizedText text={item.description} as="p" className="mt-4 text-sm leading-relaxed text-slate-300" />
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.points.map((point) => (
                    <span key={point} className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-[11px] font-medium text-slate-300">
                      <LocalizedText text={point} />
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="process" {...sectionReveal} className="bg-[#fbf7f0]">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-28">
          <SectionLabel text={studioHomeContent.process.title} />
          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            {studioHomeContent.process.steps.map((step, index) => (
              <motion.article
                key={step.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-[1.8rem] border border-[#e4dccf] bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.04)]"
              >
                <span className="text-[11px] uppercase tracking-[0.22em] text-slate-400">0{index + 1}</span>
                <LocalizedText text={step.name} as="h3" className="mt-4 font-display text-[1.55rem] font-semibold tracking-[-0.05em] text-slate-950" />
                <LocalizedText text={step.detail} as="p" className="mt-3 text-sm leading-relaxed text-slate-600" />
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="bg-[#f6f1e8]" {...sectionReveal}>
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-28">
          <SectionLabel text={studioHomeContent.why.title} />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {studioHomeContent.why.points.map((item) => (
              <article key={item} className="rounded-[1.9rem] border border-[#e4dccf] bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.04)]">
                <div className="mb-5 h-10 w-10 rounded-[1rem] border border-[#e8dfd2] bg-[#faf6ef]" />
                <LocalizedText text={item} as="p" className="text-base leading-relaxed text-slate-700" />
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="about" {...sectionReveal} className="border-y border-[#e4dccf] bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-24 md:py-28 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div>
            <SectionLabel text={studioHomeContent.about.title} />
            <LocalizedText text={studioHomeContent.about.description} as="h2" className="mt-4 max-w-[14ch] font-display text-[3rem] font-semibold leading-[0.92] tracking-[-0.08em] text-slate-950 md:text-[4.8rem]" />
          </div>
          <div className="rounded-[2rem] border border-[#e4dccf] bg-[#fbf7f0] p-6 text-sm leading-relaxed text-slate-600 shadow-[0_18px_40px_rgba(15,23,42,0.04)] md:p-8">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">AxoraLab</p>
            <p className="mt-4">
              <LocalizedText text="Clear workflows. Modern interfaces. Systems that actually get used." />
            </p>
            <p className="mt-4">
              <LocalizedText text="We work like a small product team: understanding the process, designing the right system, and shipping with long-term clarity in mind." />
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section className="bg-[#0c0f18] text-white" {...sectionReveal}>
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-28">
          <div className="rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] px-6 py-10 md:px-10 md:py-12">
            <SectionLabel text="Contact" />
            <LocalizedText text={studioHomeContent.finalCta.title} as="h2" className="mt-4 max-w-[12ch] font-display text-[3rem] font-semibold leading-[0.92] tracking-[-0.08em] text-white md:text-[4.8rem]" />
            <LocalizedText text={studioHomeContent.finalCta.description} as="p" className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300" />
            <div className="mt-8">
              <Link href="#contact" className="focus-ring inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100">
                <LocalizedText text={studioHomeContent.finalCta.cta} />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section id="contact" {...sectionReveal} className="bg-[#fbf7f0] text-slate-950">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-24 md:py-28 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel text={studioHomeContent.contact.title} />
            <LocalizedText text={studioHomeContent.contact.description} as="p" className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg" />
            <a href={`mailto:${studioHomeContent.contact.emailLabel}`} className="focus-ring mt-7 inline-flex rounded-full border border-[#ddd4c6] bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.04)] transition hover:text-slate-950">
              {studioHomeContent.contact.emailLabel}
            </a>
          </div>
          <div className="rounded-[2rem] border border-[#e4dccf] bg-white p-6 shadow-[0_24px_50px_rgba(15,23,42,0.05)] md:p-8">
            <Suspense fallback={null}>
              <ContactForm mode="studio" />
            </Suspense>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
