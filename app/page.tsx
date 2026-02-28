import Link from "next/link";
import { FounderSpotlight } from "@/src/components/sections/FounderSpotlight";
import { HomeHero } from "@/src/components/sections/HomeHero";
import { ProcessTimeline } from "@/src/components/sections/ProcessTimeline";
import { ProductSpotlight } from "@/src/components/sections/ProductSpotlight";
import { LocalizedText } from "@/src/components/ui/LocalizedText";
import { ButtonLink } from "@/src/components/ui/ButtonLink";
import { PricingCard } from "@/src/components/ui/PricingCard";
import { ServiceCard } from "@/src/components/ui/ServiceCard";
import { coreServices, demoData, demoRequestLinks, homePageContent, pricingHighlights, whyAxora } from "@/src/content/siteContent";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ProductSpotlight />

      <section className="mx-auto w-full max-w-7xl px-6 py-14">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <LocalizedText text={homePageContent.servicesEyebrow} as="p" className="eyebrow" />
            <LocalizedText
              text={homePageContent.servicesTitle}
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
          <LocalizedText text={homePageContent.demosEyebrow} as="p" className="eyebrow" />
          <LocalizedText
            text={homePageContent.demosTitle}
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
              {demoData.finance.bullets.map((bullet) => (
                <li key={bullet}>• <LocalizedText text={bullet} /></li>
              ))}
            </ul>
            <Link href={demoRequestLinks.finance} className="focus-ring mt-5 inline-flex text-sm font-semibold text-slate-100 hover:opacity-80">
              <LocalizedText text={homePageContent.demoCardCta} />
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
            <Link href={demoRequestLinks.operations} className="focus-ring mt-5 inline-flex text-sm font-semibold text-slate-100 hover:opacity-80">
              <LocalizedText text={homePageContent.demoCardCta} />
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
            <Link href={demoRequestLinks.assistant} className="focus-ring mt-5 inline-flex text-sm font-semibold text-slate-100 hover:opacity-80">
              <LocalizedText text={homePageContent.demoCardCta} />
            </Link>
          </article>
        </div>
        <div className="mt-6">
          <ButtonLink href="/demos" variant="secondary">
            <LocalizedText text={homePageContent.demoSectionCta} />
          </ButtonLink>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-14">
        <div className="mb-8">
          <LocalizedText text={homePageContent.processEyebrow} as="p" className="eyebrow" />
          <LocalizedText
            text={homePageContent.processTitle}
            as="h2"
            className="mt-3 font-display text-3xl font-semibold text-slate-100 md:text-4xl"
          />
        </div>
        <ProcessTimeline />
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-14 md:grid-cols-[1fr_1fr]">
        <article className="surface-strong rounded-2xl p-6">
          <LocalizedText text={homePageContent.whyEyebrow} as="p" className="eyebrow" />
          <LocalizedText
            text={homePageContent.whyTitle}
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
          <LocalizedText text={homePageContent.finalEyebrow} as="p" className="eyebrow" />
          <LocalizedText
            text={homePageContent.finalTitle}
            as="h2"
            className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight text-slate-100 md:text-4xl"
          />
          <LocalizedText
            text={homePageContent.finalDescription}
            as="p"
            className="mt-4 max-w-2xl text-sm leading-relaxed text-textSoft md:text-base"
          />
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <ButtonLink href="/contact">
              <LocalizedText text={homePageContent.finalPrimaryCta} />
            </ButtonLink>
            <Link
              href="/demos"
              className="focus-ring inline-flex rounded-md border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-100 transition-colors hover:border-slate-400"
            >
              <LocalizedText text={homePageContent.finalSecondaryCta} />
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
