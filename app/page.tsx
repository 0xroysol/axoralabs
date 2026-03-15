"use client";

import Link from "next/link";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { ContactForm } from "@/src/components/sections/ContactForm";
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
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top_left,rgba(15,23,42,0.08),transparent_42%),radial-gradient(circle_at_top_right,rgba(148,163,184,0.18),transparent_38%)]" />
        <div className="mx-auto grid w-full max-w-7xl gap-14 px-6 pb-20 pt-12 md:pb-28 md:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div {...sectionReveal} className="relative z-10 max-w-2xl">
            <LocalizedText text={studioHomeContent.hero.eyebrow} as="p" className="eyebrow-light" />
            <LocalizedText
              text={studioHomeContent.hero.title}
              as="h1"
              className="mt-5 font-display text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-slate-950 md:text-7xl"
            />
            <LocalizedText
              text={studioHomeContent.hero.description}
              as="p"
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#contact"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                <LocalizedText text={studioHomeContent.hero.primaryCta} />
              </Link>
              <Link
                href="#what-we-build"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-[#d6cebf] bg-white/80 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white"
              >
                <LocalizedText text={studioHomeContent.hero.secondaryCta} />
              </Link>
            </div>
          </motion.div>

          <motion.div {...sectionReveal} transition={{ ...sectionReveal.transition, delay: 0.05 }} className="relative">
            <div className="studio-card relative mx-auto max-w-[620px] overflow-hidden rounded-[2rem] p-4 md:p-5">
              <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-[1.6rem] border border-[#ece4d9] bg-[#fffdfa] p-4 shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-700">
                      <LocalizedText text={studioHomeContent.hero.visualCards.dashboard} />
                    </p>
                    <span className="studio-pill">Live</span>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {["Pipeline", "Revenue", "Tasks"].map((item, index) => (
                      <div key={item} className="rounded-2xl border border-[#ece4d9] bg-white p-3">
                        <p className="text-xs text-slate-500">{item}</p>
                        <p className="mt-2 font-display text-2xl font-semibold text-slate-950">
                          {index === 0 ? "128" : index === 1 ? "$84k" : "42"}
                        </p>
                        <div className="mt-3 h-1.5 rounded-full bg-[#efe8db]">
                          <div
                            className="h-1.5 rounded-full bg-slate-900"
                            style={{ width: `${[62, 78, 46][index]}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-[1.4rem] border border-[#ece4d9] bg-[#faf7f1] p-3">
                    <div className="flex items-end justify-between">
                      {[48, 64, 58, 72, 68, 82].map((bar, index) => (
                        <div key={bar + index} className="flex flex-1 items-end justify-center">
                          <div className="w-6 rounded-t-2xl bg-slate-950/90" style={{ height: `${bar}px` }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="rounded-[1.6rem] border border-[#1d2532] bg-slate-950 p-4 text-white shadow-[0_24px_50px_rgba(15,23,42,0.24)]">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-white">
                        <LocalizedText text={studioHomeContent.hero.visualCards.pipeline} />
                      </p>
                      <span className="rounded-full border border-white/10 px-2 py-1 text-[11px] text-slate-300">
                        CRM
                      </span>
                    </div>
                    <div className="mt-4 space-y-3">
                      {[
                        ["Qualified", "24"],
                        ["In review", "12"],
                        ["Waiting", "08"]
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-300">{label}</span>
                            <span className="font-semibold text-white">{value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="ml-auto w-[72%] rounded-[1.8rem] border border-[#e7decf] bg-white p-3 shadow-[0_18px_36px_rgba(15,23,42,0.1)]">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                      <LocalizedText text={studioHomeContent.hero.visualCards.mobile} />
                    </p>
                    <div className="mt-3 rounded-[1.4rem] border border-[#ece4d9] bg-[#faf7f1] p-3">
                      <div className="space-y-2">
                        <div className="h-2 rounded-full bg-slate-900/85" />
                        <div className="h-2 w-4/5 rounded-full bg-slate-300" />
                        <div className="h-16 rounded-2xl border border-[#ebe3d6] bg-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="studio-pill studio-pill-dark">
                  <LocalizedText text={studioHomeContent.hero.visualCards.automation} />
                </span>
                {studioHomeContent.hero.visualCards.metrics.map((metric) => (
                  <span key={metric} className="studio-pill">
                    <LocalizedText text={metric} />
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section id="what-we-build" {...sectionReveal} className="mx-auto w-full max-w-7xl px-6 py-20 md:py-28">
        <SectionTitle title={studioHomeContent.whatWeBuild.title} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {studioHomeContent.whatWeBuild.items.map((item) => (
            <article key={item.title} className="studio-card rounded-[2rem] p-6">
              <div className="mb-5 h-11 w-11 rounded-2xl border border-[#ddd4c6] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.06)]" />
              <LocalizedText text={item.title} as="h3" className="font-display text-2xl font-semibold tracking-[-0.03em] text-slate-950" />
              <LocalizedText text={item.description} as="p" className="mt-3 text-sm leading-relaxed text-slate-600" />
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
                className={`rounded-[2rem] border p-5 ${
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
            {studioHomeContent.selectedSystems.items.map((item) => (
              <article key={item.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <div className="mb-5 rounded-[1.6rem] border border-white/10 bg-white/5 p-4">
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
            <article key={step.name} className="studio-card rounded-[2rem] p-5">
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
              <article key={item} className="rounded-[2rem] border border-[#ded6ca] bg-white p-5">
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
          <div className="studio-card rounded-[2rem] p-6">
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
          <div className="rounded-[2.2rem] border border-white/10 bg-white/5 px-6 py-8 md:px-10 md:py-10">
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
          <div className="studio-card rounded-[2rem] p-6 md:p-8">
            <Suspense fallback={null}>
              <ContactForm mode="studio" />
            </Suspense>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
