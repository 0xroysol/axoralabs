"use client";

import Link from "next/link";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { ContactForm } from "@/src/components/sections/ContactForm";
import { StudioHeroScene } from "@/src/components/sections/StudioHeroScene";
import { LocalizedText } from "@/src/components/ui/LocalizedText";
import { studioHomeContent } from "@/src/content/studioContent";

const sectionReveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
} as const;

function SectionTitle({ title, description }: { title: string; description?: string }) {
  return (
    <div className="max-w-3xl">
      <LocalizedText
        text={title}
        as="h2"
        className="font-display text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl"
      />
      {description ? (
        <LocalizedText text={description} as="p" className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg" />
      ) : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-[#f5f1e8] text-slate-950">
      <section className="relative overflow-hidden border-b border-[#e3dbcf]">
        <div className="absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(circle_at_top_left,rgba(15,23,42,0.08),transparent_42%),radial-gradient(circle_at_top_right,rgba(148,163,184,0.18),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.28),transparent_72%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.42))]" />
        <div className="mx-auto grid w-full max-w-7xl gap-16 px-6 pb-24 pt-14 md:pb-32 md:pt-20 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <motion.div {...sectionReveal} className="relative z-10 max-w-2xl">
            <LocalizedText text={studioHomeContent.hero.eyebrow} as="p" className="eyebrow-light" />
            <LocalizedText
              text={studioHomeContent.hero.title}
              as="h1"
              className="mt-5 max-w-[13ch] font-display text-[3.35rem] font-semibold leading-[0.92] tracking-[-0.075em] text-slate-950 md:text-[5.6rem]"
            />
            <LocalizedText
              text={studioHomeContent.hero.description}
              as="p"
              className="mt-7 max-w-xl text-base leading-relaxed text-slate-600 md:text-[1.1rem]"
            />
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="#contact"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                <LocalizedText text={studioHomeContent.hero.primaryCta} />
              </Link>
              <Link
                href="#what-we-build"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-[#d6cebf] bg-white/80 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:bg-white"
              >
                <LocalizedText text={studioHomeContent.hero.secondaryCta} />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {["Custom Systems", "Modern UX", "AI-ready Layers"].map((item) => (
                <span key={item} className="studio-pill studio-pill-dark">
                  <LocalizedText text={item} />
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div {...sectionReveal} transition={{ ...sectionReveal.transition, delay: 0.05 }} className="relative">
            <StudioHeroScene />
          </motion.div>
        </div>
      </section>

      <motion.section id="what-we-build" {...sectionReveal} className="mx-auto w-full max-w-7xl px-6 py-20 md:py-28">
        <SectionTitle title={studioHomeContent.whatWeBuild.title} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {studioHomeContent.whatWeBuild.items.map((item, index) => (
            <article
              key={item.title}
              className={`studio-card studio-hover-card rounded-[2rem] p-6 ${
                index === 1 ? "xl:-translate-y-4" : index === 2 ? "xl:translate-y-4" : ""
              }`}
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="h-11 w-11 rounded-2xl border border-[#ddd4c6] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.06)]" />
                <span className="text-[11px] uppercase tracking-[0.18em] text-slate-400">0{index + 1}</span>
              </div>
              <LocalizedText text={item.title} as="h3" className="font-display text-2xl font-semibold tracking-[-0.03em] text-slate-950" />
              <LocalizedText text={item.description} as="p" className="mt-3 text-sm leading-relaxed text-slate-600" />
              <div className="mt-6 h-px bg-[linear-gradient(90deg,rgba(15,23,42,0.12),transparent)]" />
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section id="systems" {...sectionReveal} className="border-y border-[#e2dbcf] bg-[#fbf8f2]">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:py-28">
          <SectionTitle title={studioHomeContent.systems.title} />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {studioHomeContent.systems.items.map((item, index) => (
              <div
                key={item}
                className={`studio-hover-card rounded-[2rem] border p-5 transition-transform xl:${index % 4 === 1 ? "translate-y-6" : index % 4 === 2 ? "-translate-y-3" : ""} ${
                  index % 3 === 0
                    ? "border-[#dcd3c5] bg-white"
                    : index % 3 === 1
                      ? "border-[#d8d0c2] bg-[#f4efe6]"
                      : "border-[#d0c8bc] bg-[#f8f5ef]"
                }`}
              >
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">0{index + 1}</span>
                <LocalizedText text={item} as="p" className="mt-4 text-lg leading-snug text-slate-800" />
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionReveal} className="bg-slate-950 text-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:py-28">
          <SectionTitle title={studioHomeContent.selectedSystems.title} />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {studioHomeContent.selectedSystems.items.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] ${
                  index === 1 ? "lg:-translate-y-5" : ""
                }`}
              >
                <div className="mb-5 rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_55%),rgba(255,255,255,0.04)] p-4">
                  <div className="grid grid-cols-3 gap-2">
                    {[42, 70, 56, 84, 62, 48].map((bar, index) => (
                      <div key={bar + index} className="rounded-2xl bg-white/5 p-2">
                        <div className="h-12 rounded-xl bg-white/5" />
                        <div className="mt-2 h-1.5 rounded-full bg-white/10">
                          <div className="h-1.5 rounded-full bg-white/70" style={{ width: `${bar}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <LocalizedText text={item.title} as="h3" className="font-display text-2xl font-semibold tracking-[-0.03em] text-white" />
                <LocalizedText text={item.description} as="p" className="mt-3 text-sm leading-relaxed text-slate-300" />
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.points.map((point) => (
                    <span key={point} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                      <LocalizedText text={point} />
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="process" {...sectionReveal} className="mx-auto w-full max-w-7xl px-6 py-20 md:py-28">
        <SectionTitle title={studioHomeContent.process.title} />
        <div className="mt-10 grid gap-4 lg:grid-cols-5">
          {studioHomeContent.process.steps.map((step, index) => (
            <article key={step.name} className={`studio-card studio-hover-card rounded-[2rem] p-5 ${index % 2 === 1 ? "lg:translate-y-6" : ""}`}>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#ddd3c6] bg-white text-sm font-semibold text-slate-950">
                0{index + 1}
              </span>
              <LocalizedText text={step.name} as="h3" className="mt-5 font-display text-2xl font-semibold tracking-[-0.03em] text-slate-950" />
              <LocalizedText text={step.detail} as="p" className="mt-3 text-sm leading-relaxed text-slate-600" />
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...sectionReveal} className="border-y border-[#e2dbcf] bg-[#fbf8f2]">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-20 md:py-28 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionTitle title={studioHomeContent.why.title} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {studioHomeContent.why.points.map((item) => (
              <article key={item} className="studio-hover-card rounded-[2rem] border border-[#ded6ca] bg-white p-5 shadow-[0_14px_30px_rgba(15,23,42,0.04)]">
                <div className="mb-4 h-10 w-10 rounded-2xl border border-[#ddd4c6] bg-[#faf6ef]" />
                <LocalizedText text={item} as="p" className="text-base leading-relaxed text-slate-700" />
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="about" {...sectionReveal} className="mx-auto w-full max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <SectionTitle title={studioHomeContent.about.title} description={studioHomeContent.about.description} />
          <div className="studio-card rounded-[2rem] p-6 shadow-[0_24px_48px_rgba(15,23,42,0.08)]">
            <p className="text-sm uppercase tracking-[0.18em] text-slate-400">AxoraLab</p>
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

      <motion.section {...sectionReveal} className="bg-slate-950 text-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:py-24">
          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_35%),rgba(255,255,255,0.05)] px-6 py-8 md:px-10 md:py-10">
            <div className="absolute -right-10 top-6 h-36 w-36 rounded-full bg-white/5 blur-3xl" />
            <LocalizedText
              text={studioHomeContent.finalCta.title}
              as="h2"
              className="max-w-3xl font-display text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl"
            />
            <LocalizedText
              text={studioHomeContent.finalCta.description}
              as="p"
              className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300"
            />
            <div className="mt-8">
              <Link
                href="#contact"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                <LocalizedText text={studioHomeContent.finalCta.cta} />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section id="contact" {...sectionReveal} className="mx-auto w-full max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <SectionTitle title={studioHomeContent.contact.title} description={studioHomeContent.contact.description} />
            <a
              href={`mailto:${studioHomeContent.contact.emailLabel}`}
              className="focus-ring mt-6 inline-flex rounded-full border border-[#d8cfbf] bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:text-slate-950"
            >
              {studioHomeContent.contact.emailLabel}
            </a>
          </div>
          <div className="studio-card rounded-[2rem] p-6 shadow-[0_24px_50px_rgba(15,23,42,0.08)] md:p-8">
            <Suspense fallback={null}>
              <ContactForm mode="studio" />
            </Suspense>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
