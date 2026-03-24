"use client";

import { Suspense } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ContactForm } from "@/src/components/sections/ContactForm";
import { studioHomeContent } from "@/src/content/studioContent";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] }
} as const;

function SparklesIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3 w-3 text-white/80"
    >
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
      <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z" />
      <path d="M5 15l.9 2.1L8 18l-2.1.9L5 21l-.9-2.1L2 18l2.1-.9L5 15z" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function SplitText({
  text,
  className,
  startDelay = 0
}: {
  text: string;
  className?: string;
  startDelay?: number;
}) {
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="hero-word mr-[0.24em] inline-block last:mr-0"
          style={{ animationDelay: `${startDelay + index * 0.08}s` }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

function HeroSection() {
  const lineOne = "Unlock the Power of AI";
  const lineTwo = "for Your";
  const lineThree = "Business.";
  const lineOneCount = lineOne.split(" ").length;
  const lineTwoCount = lineTwo.split(" ").length;

  return (
    <section className="relative -mt-24 h-screen w-full overflow-hidden bg-[#070612] md:-mt-28">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          aria-hidden="true"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="ml-[200px] h-full w-full origin-left scale-[1.2] object-cover"
        >
          <source
            src="https://stream.mux.com/s8pMcOvMQXc4GD6AX4e1o01xFogFxipmuKltNfSYza0200.m3u8"
            type="application/x-mpegURL"
          />
        </video>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-[#070612] to-transparent" />

      <div className="relative z-20 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-6">
                <div
                  className="hero-blur-in inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-sm"
                  style={{ animationDelay: "0s" }}
                >
                  <SparklesIcon />
                  <span className="text-sm font-medium text-white/80">
                    New AI Automation Ally
                  </span>
                </div>

                <div className="flex flex-col gap-6">
                  <h1 className="text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl lg:leading-[1.2]">
                    <span className="block">
                      <SplitText text={lineOne} />
                    </span>
                    <span className="block">
                      <span className="inline-flex flex-wrap items-baseline gap-x-[0.24em]">
                        <SplitText text={lineTwo} startDelay={lineOneCount * 0.08} />
                        <SplitText
                          text={lineThree}
                          startDelay={(lineOneCount + lineTwoCount) * 0.08}
                          className="font-serif italic"
                        />
                      </span>
                    </span>
                  </h1>

                  <p
                    className="hero-blur-in max-w-xl text-lg font-normal leading-relaxed text-white/80"
                    style={{ animationDelay: "0.4s" }}
                  >
                    Our cutting-edge AI platform automates, analyzes, and accelerates
                    your workflows so you can focus on what really matters.
                  </p>
                </div>
              </div>

              <div className="hero-blur-in flex flex-wrap gap-4" style={{ animationDelay: "0.6s" }}>
                <Link
                  href="/book-call"
                  className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#070612] transition hover:bg-white/90"
                >
                  Book A Free Call
                  <ArrowRightIcon />
                </Link>
                <Link
                  href="/#what-we-build"
                  className="focus-ring inline-flex items-center rounded-full bg-white/20 px-8 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/25"
                >
                  Learn now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="bg-[#04050A] text-[#F5F7FB]">
      <HeroSection />

      <motion.section
        id="what-we-build"
        {...reveal}
        className="relative overflow-hidden border-b border-white/8 bg-[#06070D]"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)]" />
        <div className="mx-auto grid w-full max-w-[90rem] gap-14 px-6 py-24 md:px-8 md:py-28 xl:grid-cols-[0.72fr_1.28fr] xl:gap-20">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
              Studio Scope
            </p>
            <h2 className="mt-5 font-display text-[3rem] font-semibold tracking-[-0.08em] text-white md:text-[4rem]">
              {studioHomeContent.whatWeBuild.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
              {studioHomeContent.whatWeBuild.subtitle}
            </p>
            <p className="mt-8 max-w-[32ch] border-l border-white/10 pl-5 text-sm leading-7 text-slate-500">
              {studioHomeContent.whatWeBuild.statement}
            </p>
          </div>

          <div className="border-t border-white/8">
            {studioHomeContent.whatWeBuild.items.map((item) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.5 }}
                className="group grid gap-4 border-b border-white/8 py-8 md:grid-cols-[7rem_1fr_1.2fr] md:items-start md:gap-8"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-600 transition group-hover:text-slate-400">
                  {item.label}
                </p>
                <h3 className="font-display text-[1.9rem] font-semibold tracking-[-0.06em] text-white md:text-[2.3rem]">
                  {item.title}
                </h3>
                <p className="max-w-[42ch] text-sm leading-7 text-slate-400 md:text-base md:leading-8">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="process"
        {...reveal}
        className="relative overflow-hidden border-b border-white/8 bg-[#04050A]"
      >
        <div className="absolute right-[-10rem] top-[-8rem] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(94,116,255,0.14),transparent_70%)] blur-[120px]" />
        <div className="mx-auto grid w-full max-w-[90rem] gap-14 px-6 py-24 md:px-8 md:py-28 xl:grid-cols-[0.78fr_1.22fr] xl:gap-20">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
              Studio Rhythm
            </p>
            <h2 className="mt-5 font-display text-[3rem] font-semibold tracking-[-0.08em] text-white md:text-[4rem]">
              {studioHomeContent.process.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
              {studioHomeContent.process.subtitle}
            </p>
            <p className="mt-10 max-w-[30ch] text-sm leading-7 text-slate-500">
              We do not start from templates. We start from the actual operating
              problem and design the product surface around it.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-[1.3rem] top-6 hidden h-[calc(100%-3rem)] w-px bg-[linear-gradient(180deg,rgba(125,211,252,0.4),rgba(167,139,250,0.22),transparent)] md:block" />

            <div className="space-y-8">
              {studioHomeContent.process.steps.map((step) => (
                <motion.article
                  key={step.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.16 }}
                  transition={{ duration: 0.46 }}
                  className="relative grid gap-4 md:grid-cols-[4.5rem_1fr] md:gap-8"
                >
                  <div className="relative flex md:justify-center">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#090C15] text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300 shadow-[0_0_0_8px_rgba(4,5,10,1)]">
                      {step.label}
                    </span>
                  </div>

                  <div className="rounded-[1.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(10,13,24,0.84),rgba(6,8,14,0.96))] px-5 py-5 md:px-6 md:py-6">
                    <h3 className="max-w-[18ch] font-display text-[1.8rem] font-semibold leading-[1.02] tracking-[-0.05em] text-white md:text-[2.2rem]">
                      {step.name}
                    </h3>
                    <p className="mt-4 max-w-[52ch] text-sm leading-7 text-slate-400 md:text-base md:leading-8">
                      {step.detail}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section id="contact" {...reveal} className="relative overflow-hidden bg-[#04050A]">
        <div className="absolute left-[-8rem] top-[10%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(107,149,255,0.14),transparent_70%)] blur-[120px]" />
        <div className="mx-auto grid w-full max-w-[90rem] gap-10 px-6 py-24 md:px-8 md:py-28 xl:grid-cols-[0.72fr_1.28fr] xl:items-start xl:gap-14">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
              Contact
            </p>
            <h2 className="mt-5 max-w-[12ch] font-display text-[3rem] font-semibold leading-[0.9] tracking-[-0.08em] text-white md:text-[4.4rem]">
              {studioHomeContent.finalCta.title}
            </h2>
            <p className="mt-5 max-w-[34ch] text-base leading-8 text-slate-300 md:text-lg">
              {studioHomeContent.finalCta.description}
            </p>

            <div className="mt-8 rounded-[1.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(9,12,21,0.84),rgba(5,7,13,0.94))] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-500">
                {studioHomeContent.finalCta.fitTitle}
              </p>
              <div className="mt-4 space-y-3">
                {studioHomeContent.finalCta.fitItems.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <p className="text-sm leading-7 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={`mailto:${studioHomeContent.finalCta.email}`}
              className="focus-ring mt-6 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
            >
              {studioHomeContent.finalCta.email}
            </a>
          </div>

          <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(11,15,29,0.98),rgba(5,7,13,1))] shadow-[0_40px_140px_rgba(0,0,0,0.45)]">
            <div className="border-b border-white/8 px-6 py-5 md:px-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                Project Intake
              </p>
              <h3 className="mt-3 font-display text-[2rem] font-semibold tracking-[-0.06em] text-white md:text-[2.5rem]">
                {studioHomeContent.finalCta.formIntroTitle}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 md:text-base md:leading-8">
                {studioHomeContent.finalCta.formIntroDescription}
              </p>
            </div>

            <div className="px-6 py-6 md:px-7 md:py-7">
              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
