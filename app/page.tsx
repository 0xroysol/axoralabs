import Link from "next/link";
import { HomeHero } from "@/src/components/sections/HomeHero";
import { ProcessTimeline } from "@/src/components/sections/ProcessTimeline";
import { ButtonLink } from "@/src/components/ui/ButtonLink";
import { PricingCard } from "@/src/components/ui/PricingCard";
import { ServiceCard } from "@/src/components/ui/ServiceCard";
import { coreServices, demoData, pricingHighlights, whyAxora } from "@/src/content/siteContent";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="mx-auto w-full max-w-7xl px-6 py-14">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cyan">Core Services</p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">Built for measurable operating outcomes</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {coreServices.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-14">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan">Demo Preview</p>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">Production-style dashboard experiences</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <article className="surface rounded-2xl p-5">
            <h3 className="font-display text-xl font-semibold">{demoData.finance.title}</h3>
            <p className="mt-3 text-sm text-textSoft">{demoData.finance.summary}</p>
            <div className="mt-4 space-y-2 text-sm text-slate-200">
              <p>Revenue: {demoData.finance.kpis[0].value}</p>
              <p>Net Margin: {demoData.finance.kpis[1].value}</p>
              <p>Runway: {demoData.finance.kpis[2].value}</p>
            </div>
          </article>
          <article className="surface rounded-2xl p-5">
            <h3 className="font-display text-xl font-semibold">{demoData.operations.title}</h3>
            <p className="mt-3 text-sm text-textSoft">{demoData.operations.summary}</p>
            <div className="mt-4 space-y-2 text-sm text-slate-200">
              <p>Active Orders: {demoData.operations.kpis[0].value}</p>
              <p>SLA: {demoData.operations.kpis[1].value}</p>
              <p>Utilization: {demoData.operations.kpis[3].value}</p>
            </div>
          </article>
          <article className="surface rounded-2xl p-5">
            <h3 className="font-display text-xl font-semibold">{demoData.assistant.title}</h3>
            <p className="mt-3 text-sm text-textSoft">{demoData.assistant.summary}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              {demoData.assistant.features.slice(0, 3).map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
          </article>
        </div>
        <div className="mt-6">
          <ButtonLink href="/demos" variant="secondary">
            Explore full demos
          </ButtonLink>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-14">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan">Engagement Process</p>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">A focused 5-step delivery model</h2>
        </div>
        <ProcessTimeline />
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-14 md:grid-cols-[1fr_1fr]">
        <article className="surface rounded-2xl p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan">Why AxoraLab</p>
          <h2 className="mt-3 font-display text-3xl font-semibold">Trust-centric systems for finance and operations</h2>
          <ul className="mt-5 space-y-3 text-sm text-textSoft">
            {whyAxora.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
        <div className="grid gap-4 md:grid-cols-2">
          {pricingHighlights.slice(0, 2).map((item) => (
            <PricingCard key={item.title} title={item.title} price={item.price} outcome={item.outcome} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-20 pt-10">
        <article className="surface rounded-3xl p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan">Ready to build</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight md:text-4xl">
            Build a high-trust AI operating layer for your company in weeks, not quarters.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-textSoft md:text-base">
            We combine strategy, engineering, and design to deliver systems leadership teams actually use.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <ButtonLink href="/contact">Book a 15-min Discovery Call</ButtonLink>
            <Link
              href="/services"
              className="focus-ring inline-flex rounded-md px-4 py-2 text-sm font-semibold text-cyan transition-opacity hover:opacity-80"
            >
              Review services
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
