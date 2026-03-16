"use client";

import Link from "next/link";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { ContactForm } from "@/src/components/sections/ContactForm";
import { MiniIcon, StudioHeroScene } from "@/src/components/sections/StudioHeroScene";
import { LocalizedText } from "@/src/components/ui/LocalizedText";
import { studioHomeContent } from "@/src/content/studioContent";

const sectionReveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
} as const;

function SectionLabel({ text, light = false }: { text: string; light?: boolean }) {
  return <LocalizedText text={text} as="p" className={light ? "eyebrow-light" : "eyebrow-cinematic"} />;
}

export default function HomePage() {
  return (
    <div className="bg-[#05060c] text-white">
      <section className="relative overflow-hidden border-b border-white/8 bg-[radial-gradient(circle_at_top,rgba(94,111,255,0.18),transparent_18%),linear-gradient(180deg,#03040a_0%,#05070f_46%,#070a13_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.07),transparent_14%),radial-gradient(circle_at_78%_24%,rgba(100,120,255,0.16),transparent_20%),linear-gradient(180deg,transparent,rgba(0,0,0,0.28))]" />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-6 pb-24 pt-24 text-center md:pb-32 md:pt-32">
          <motion.div {...sectionReveal} className="max-w-4xl">
            <SectionLabel text={studioHomeContent.hero.eyebrow} />
            <LocalizedText
              text={studioHomeContent.hero.title}
              as="h1"
              className="mx-auto mt-6 max-w-[12ch] font-display text-[3.15rem] font-semibold leading-[0.9] tracking-[-0.08em] text-white md:text-[5.6rem] lg:text-[6.8rem]"
            />
            <LocalizedText
              text={studioHomeContent.hero.description}
              as="p"
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-[1.04rem]"
            />
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="#contact"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_20px_50px_rgba(255,255,255,0.08)] transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                <LocalizedText text={studioHomeContent.hero.primaryCta} />
              </Link>
              <Link
                href="#what-we-build"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/[0.07]"
              >
                <LocalizedText text={studioHomeContent.hero.secondaryCta} />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
              {studioHomeContent.hero.metaPills.map((pill) => (
                <span key={pill} className="studio-chip-dark">
                  <LocalizedText text={pill} />
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div {...sectionReveal} transition={{ ...sectionReveal.transition, delay: 0.08 }} className="mt-16 w-full">
            <StudioHeroScene />
          </motion.div>
        </div>
      </section>

      <motion.section id="what-we-build" {...sectionReveal} className="relative border-b border-white/8 bg-[linear-gradient(180deg,#060811_0%,#0a0d17_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(255,255,255,0.04),transparent_16%),radial-gradient(circle_at_86%_18%,rgba(108,126,255,0.12),transparent_18%)]" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 md:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel text={studioHomeContent.whatWeBuild.title} />
              <LocalizedText text={studioHomeContent.whatWeBuild.description} as="h2" className="mt-4 font-display text-4xl font-semibold tracking-[-0.06em] text-white md:text-[4rem]" />
            </div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {studioHomeContent.whatWeBuild.items.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 34, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, rotateX: 6, rotateY: index % 2 === 0 ? -6 : 6 }}
                className={`studio-cinematic-card studio-perspective rounded-[2.15rem] p-6 ${index === 1 ? "xl:translate-y-10" : index === 2 ? "xl:-translate-y-4" : ""}`}
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-[1.2rem] border border-white/10 bg-white/[0.04] shadow-[0_18px_32px_rgba(0,0,0,0.25)]">
                    <MiniIcon type={item.icon as never} />
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-slate-500">0{index + 1}</span>
                </div>
                <LocalizedText text={item.title} as="h3" className="font-display text-[2rem] font-semibold tracking-[-0.05em] text-white" />
                <LocalizedText text={item.description} as="p" className="mt-4 text-sm leading-relaxed text-slate-300" />
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="systems" {...sectionReveal} className="relative overflow-hidden bg-[#f6f0e6] text-slate-950">
        <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(6,8,17,0.92),transparent)]" />
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-24 md:py-28 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionLabel text={studioHomeContent.systems.title} light />
            <LocalizedText
              text={studioHomeContent.systems.statement}
              as="h2"
              className="mt-4 max-w-[10ch] font-display text-[3.2rem] font-semibold leading-[0.9] tracking-[-0.08em] text-slate-950 md:text-[5.2rem]"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {studioHomeContent.systems.items.map((item, index) => (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                whileHover={{ y: -6, rotateZ: index % 2 === 0 ? -1.2 : 1.2 }}
                className="rounded-[2rem] border border-[#ddd4c6] bg-white p-5 shadow-[0_26px_54px_rgba(15,23,42,0.08)]"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-[1rem] border border-[#e3d9ca] bg-[#faf7f1] text-slate-900">
                  <MiniIcon type={item.icon as never} />
                </div>
                <LocalizedText text={item.label} as="p" className="text-lg leading-snug text-slate-800" />
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="relative overflow-hidden border-y border-white/8 bg-[linear-gradient(180deg,#070910_0%,#0b1020_100%)] text-white" {...sectionReveal}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_16%),radial-gradient(circle_at_80%_20%,rgba(113,129,255,0.16),transparent_18%)]" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 md:py-28">
          <SectionLabel text={studioHomeContent.selectedSystems.title} />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {studioHomeContent.selectedSystems.items.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className={`studio-cinematic-card rounded-[2.1rem] p-5 ${index === 1 ? "lg:-translate-y-6" : ""}`}
              >
                <div className="mb-6 rounded-[1.7rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-4">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[58, 82, 67, 74].map((width, rowIndex) => (
                      <div key={width + rowIndex} className="rounded-[1.1rem] border border-white/7 bg-white/[0.04] p-3">
                        <div className="h-12 rounded-[0.95rem] bg-white/[0.04]" />
                        <div className="mt-3 h-1.5 rounded-full bg-white/6">
                          <div className="h-1.5 rounded-full bg-[linear-gradient(90deg,#ffffff,#8fa8ff)]" style={{ width: `${width}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <LocalizedText text={item.title} as="h3" className="font-display text-[2rem] font-semibold tracking-[-0.05em] text-white" />
                <LocalizedText text={item.description} as="p" className="mt-4 text-sm leading-relaxed text-slate-300" />
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.points.map((point) => (
                    <span key={point} className="studio-chip-dark">
                      <LocalizedText text={point} />
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="process" {...sectionReveal} className="bg-[#f8f2e9] text-slate-950">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-28">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-sm">
              <SectionLabel text={studioHomeContent.process.title} light />
            </div>
            <div className="grid flex-1 gap-4 md:grid-cols-5">
              {studioHomeContent.process.steps.map((step, index) => (
                <motion.article
                  key={step.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="rounded-[1.8rem] border border-[#ddd3c5] bg-white p-5 shadow-[0_18px_42px_rgba(15,23,42,0.05)]"
                >
                  <span className="text-[11px] uppercase tracking-[0.22em] text-slate-400">0{index + 1}</span>
                  <LocalizedText text={step.name} as="h3" className="mt-4 font-display text-[1.6rem] font-semibold tracking-[-0.05em] text-slate-950" />
                  <LocalizedText text={step.detail} as="p" className="mt-3 text-sm leading-relaxed text-slate-600" />
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section className="relative overflow-hidden border-y border-white/8 bg-[#080b14] text-white" {...sectionReveal}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.05),transparent_16%),radial-gradient(circle_at_84%_26%,rgba(109,126,255,0.15),transparent_18%)]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-6 py-24 md:py-28 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel text={studioHomeContent.why.title} />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {studioHomeContent.why.points.map((item) => (
              <article key={item} className="rounded-[2rem] border border-white/8 bg-white/[0.05] p-5 backdrop-blur-sm">
                <div className="mb-5 h-10 w-10 rounded-2xl border border-white/8 bg-white/[0.04]" />
                <LocalizedText text={item} as="p" className="text-base leading-relaxed text-slate-200" />
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="about" {...sectionReveal} className="bg-[#f4eee4] text-slate-950">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-24 md:py-28 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <div>
            <SectionLabel text={studioHomeContent.about.title} light />
            <LocalizedText
              text={studioHomeContent.about.description}
              as="h2"
              className="mt-4 max-w-[12ch] font-display text-[3.2rem] font-semibold leading-[0.9] tracking-[-0.08em] text-slate-950 md:text-[5rem]"
            />
          </div>
          <div className="rounded-[2.1rem] border border-[#ddd3c5] bg-white p-6 shadow-[0_28px_54px_rgba(15,23,42,0.08)] md:p-8">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">AxoraLab</p>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-600">
              <p>
                <LocalizedText text="Clear workflows. Modern interfaces. Systems that actually get used." />
              </p>
              <p>
                <LocalizedText text="We work like a small product team: understanding the process, designing the right system, and shipping with long-term clarity in mind." />
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section className="relative overflow-hidden border-y border-white/8 bg-[linear-gradient(180deg,#05060c_0%,#090d18_100%)] text-white" {...sectionReveal}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(123,136,255,0.14),transparent_22%),radial-gradient(circle_at_left_center,rgba(255,255,255,0.04),transparent_16%)]" />
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-28">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.05] px-6 py-10 md:px-10 md:py-12">
            <div className="absolute -right-8 top-3 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
            <SectionLabel text="Contact" />
            <LocalizedText text={studioHomeContent.finalCta.title} as="h2" className="mt-5 max-w-[12ch] font-display text-[3rem] font-semibold leading-[0.9] tracking-[-0.08em] text-white md:text-[5rem]" />
            <LocalizedText text={studioHomeContent.finalCta.description} as="p" className="mt-5 max-w-xl text-base leading-relaxed text-slate-300" />
            <div className="mt-8">
              <Link href="#contact" className="focus-ring inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100">
                <LocalizedText text={studioHomeContent.finalCta.cta} />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section id="contact" {...sectionReveal} className="bg-[#f4eee4] text-slate-950">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-24 md:py-28 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel text={studioHomeContent.contact.title} light />
            <LocalizedText text={studioHomeContent.contact.description} as="p" className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg" />
            <a href={`mailto:${studioHomeContent.contact.emailLabel}`} className="focus-ring mt-7 inline-flex rounded-full border border-[#d8cfbf] bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.05)] transition hover:text-slate-950">
              {studioHomeContent.contact.emailLabel}
            </a>
          </div>
          <div className="rounded-[2.1rem] border border-[#ddd3c5] bg-white p-6 shadow-[0_28px_54px_rgba(15,23,42,0.08)] md:p-8">
            <Suspense fallback={null}>
              <ContactForm mode="studio" />
            </Suspense>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
