import Link from "next/link";
import { FAQAccordion } from "@/src/components/ui/FAQAccordion";
import { LocalizedText } from "@/src/components/ui/LocalizedText";
import { PricingCard } from "@/src/components/ui/PricingCard";
import type { ServicePageContent } from "@/src/content/siteContent";

export function ServiceDetail({ content }: { content: ServicePageContent }) {
  return (
    <>
      <section className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-10 md:grid-cols-[1.2fr_0.8fr] md:py-14">
        <div>
          <LocalizedText text="Service" as="p" className="eyebrow" />
          <LocalizedText
            text={content.heroTitle}
            as="h1"
            className="mt-3 font-display text-4xl font-semibold leading-tight text-slate-100 md:text-5xl"
          />
          <LocalizedText text={content.heroSubtitle} as="p" className="mt-5 max-w-2xl text-base leading-relaxed text-textSoft md:text-lg" />
        </div>
        <div className="surface-strong rounded-2xl p-6">
          <LocalizedText text="Fast Next Step" as="p" className="text-xs uppercase tracking-[0.2em] text-slate-400" />
          <LocalizedText
            text="Book a scoped discovery call to align business outcomes, data constraints, and rollout plan."
            as="p"
            className="mt-2 text-sm text-textSoft"
          />
          <Link
            href="/contact"
            className="focus-ring mt-5 inline-flex rounded-md border border-slate-100 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white"
          >
            <LocalizedText text="Book a 15-min Discovery Call" />
          </Link>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 pb-12 md:grid-cols-2">
        <article className="surface rounded-2xl p-6">
          <LocalizedText text="Who it's for" as="h2" className="font-display text-2xl font-semibold text-slate-100" />
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-textSoft">
            {content.forWho.map((item) => (
              <li key={item}>• <LocalizedText text={item} /></li>
            ))}
          </ul>
        </article>
        <article className="surface rounded-2xl p-6">
          <LocalizedText text="What we deliver" as="h2" className="font-display text-2xl font-semibold text-slate-100" />
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-textSoft">
            {content.deliverables.map((item) => (
              <li key={item}>• <LocalizedText text={item} /></li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-12">
        <article className="surface rounded-2xl p-6">
          <LocalizedText text="KPI examples" as="h2" className="font-display text-2xl font-semibold text-slate-100" />
          <div className="mt-4 flex flex-wrap gap-2">
            {content.kpis.map((kpi) => (
              <span
                key={kpi}
                className="rounded-full border border-slate-600 bg-slate-900/55 px-3 py-1 text-xs font-medium tracking-wide text-slate-200"
              >
                <LocalizedText text={kpi} />
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-12">
        <LocalizedText text="Pricing" as="h2" className="mb-4 font-display text-2xl font-semibold text-slate-100" />
        <PricingCard
          title={content.pricingTitle}
          price={content.pricingValue}
          outcome={content.pricingNote}
        />
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-12">
        <article className="surface rounded-2xl p-6">
          <LocalizedText text="Engagement model" as="h2" className="font-display text-2xl font-semibold text-slate-100" />
          <ol className="mt-4 space-y-3 text-sm leading-relaxed text-textSoft">
            {content.engagementModel.map((step, index) => (
              <li key={step}>
                {index + 1}. <LocalizedText text={step} />
              </li>
            ))}
          </ol>
        </article>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-20">
        <LocalizedText text="FAQ" as="h2" className="mb-4 font-display text-2xl font-semibold text-slate-100" />
        <FAQAccordion items={content.faqs} />
      </section>
    </>
  );
}
