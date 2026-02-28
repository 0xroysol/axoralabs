import Link from "next/link";
import { FounderSpotlight } from "@/src/components/sections/FounderSpotlight";
import { HomeHero } from "@/src/components/sections/HomeHero";
import { ProcessTimeline } from "@/src/components/sections/ProcessTimeline";
import { ProductSpotlight } from "@/src/components/sections/ProductSpotlight";
import { LocalizedText } from "@/src/components/ui/LocalizedText";
import { ButtonLink } from "@/src/components/ui/ButtonLink";
import { PricingCard } from "@/src/components/ui/PricingCard";
import { ServiceCard } from "@/src/components/ui/ServiceCard";
import { coreServices, demoData, pricingHighlights, whyAxora } from "@/src/content/siteContent";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ProductSpotlight />

      <section className="mx-auto w-full max-w-7xl px-6 py-14">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <LocalizedText text="Core Services" as="p" className="eyebrow" />
            <LocalizedText
              text="Agency-focused service tracks"
              as="h2"
              className="mt-3 font-display text-3xl font-semibold text-slate-100 md:text-4xl"
            />
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
          <LocalizedText text="Demo Preview" as="p" className="eyebrow" />
          <LocalizedText
            text="Agency edition product previews"
            as="h2"
            className="mt-3 font-display text-3xl font-semibold text-slate-100 md:text-4xl"
          />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <article className="surface rounded-2xl p-5">
            <h3 className="font-display text-xl font-semibold text-slate-100">
              <LocalizedText text={demoData.finance.title} />
            </h3>
            <p className="mt-3 text-sm text-textSoft">
              <LocalizedText text={demoData.finance.summary} />
            </p>
            <div className="mt-4 space-y-2 text-sm text-slate-300">
              <p><LocalizedText text="Monthly Revenue" />: {demoData.finance.kpis[0].value}</p>
              <p><LocalizedText text="Net Margin" />: {demoData.finance.kpis[1].value}</p>
              <p><LocalizedText text="Payroll Ratio" />: {demoData.finance.kpis[2].value}</p>
            </div>
            <ul className="mt-4 space-y-2 text-xs text-slate-300">
              {demoData.finance.bullets.slice(0, 2).map((bullet) => (
                <li key={bullet}>• <LocalizedText text={bullet} /></li>
              ))}
            </ul>
            <Link href="/contact" className="focus-ring mt-5 inline-flex text-sm font-semibold text-slate-100 hover:opacity-80">
              <LocalizedText text="Request this demo" />
            </Link>
          </article>

          <article className="surface rounded-2xl p-5">
            <h3 className="font-display text-xl font-semibold text-slate-100">
              <LocalizedText text={demoData.operations.title} />
            </h3>
            <p className="mt-3 text-sm text-textSoft">
              <LocalizedText text={demoData.operations.summary} />
            </p>
            <div className="mt-4 space-y-2 text-sm text-slate-300">
              <p><LocalizedText text="Utilization Snapshot" />: {demoData.operations.kpis[0].value}</p>
              <p><LocalizedText text="Project Throughput" />: {demoData.operations.kpis[1].value}</p>
              <p><LocalizedText text="Delivery Health" />: {demoData.operations.kpis[2].value}</p>
            </div>
            <ul className="mt-4 space-y-2 text-xs text-slate-300">
              {demoData.operations.bullets.map((bullet) => (
                <li key={bullet}>• <LocalizedText text={bullet} /></li>
              ))}
            </ul>
            <Link href="/contact" className="focus-ring mt-5 inline-flex text-sm font-semibold text-slate-100 hover:opacity-80">
              <LocalizedText text="Request this demo" />
            </Link>
          </article>

          <article className="surface rounded-2xl p-5">
            <h3 className="font-display text-xl font-semibold text-slate-100">
              <LocalizedText text={demoData.assistant.title} />
            </h3>
            <p className="mt-3 text-sm text-textSoft">
              <LocalizedText text={demoData.assistant.summary} />
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {demoData.assistant.features.map((feature) => (
                <li key={feature}>• <LocalizedText text={feature} /></li>
              ))}
            </ul>
            <Link href="/contact" className="focus-ring mt-5 inline-flex text-sm font-semibold text-slate-100 hover:opacity-80">
              <LocalizedText text="Request this demo" />
            </Link>
          </article>
        </div>
        <div className="mt-6">
          <ButtonLink href="/demos" variant="secondary">
            <LocalizedText text="Explore Agency Demo" />
          </ButtonLink>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-14">
        <div className="mb-8">
          <LocalizedText text="Engagement Process" as="p" className="eyebrow" />
          <LocalizedText
            text="Agency rollout in 5 practical steps"
            as="h2"
            className="mt-3 font-display text-3xl font-semibold text-slate-100 md:text-4xl"
          />
        </div>
        <ProcessTimeline />
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-14 md:grid-cols-[1fr_1fr]">
        <article className="surface-strong rounded-2xl p-6">
          <LocalizedText text="Why AxoraLab" as="p" className="eyebrow" />
          <LocalizedText
            text="Built for agency financial and operational clarity"
            as="h2"
            className="mt-3 font-display text-3xl font-semibold text-slate-100"
          />
          <ul className="mt-5 space-y-3 text-sm text-textSoft">
            {whyAxora.map((item) => (
              <li key={item}>• <LocalizedText text={item} /></li>
            ))}
          </ul>
        </article>
        <div className="grid gap-4 md:grid-cols-2">
          {pricingHighlights.slice(0, 2).map((item) => (
            <PricingCard key={item.title} title={item.title} price={item.price} outcome={item.outcome} includes={item.includes} />
          ))}
        </div>
      </section>

      <FounderSpotlight />

      <section className="mx-auto w-full max-w-7xl px-6 pb-20 pt-10">
        <article className="surface-strong rounded-3xl p-8 md:p-10">
          <LocalizedText text="Ready to build" as="p" className="eyebrow" />
          <LocalizedText
            text="Build your agency operating layer in weeks, not quarters."
            as="h2"
            className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight text-slate-100 md:text-4xl"
          />
          <LocalizedText
            text="Designed for digital marketing agencies and flexible for other service-based teams."
            as="p"
            className="mt-4 max-w-2xl text-sm leading-relaxed text-textSoft md:text-base"
          />
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <ButtonLink href="/contact">
              <LocalizedText text="Book a 15-min Call" />
            </ButtonLink>
            <Link
              href="/demos"
              className="focus-ring inline-flex rounded-md border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-100 transition-colors hover:border-slate-400"
            >
              <LocalizedText text="Explore Agency Demo" />
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
