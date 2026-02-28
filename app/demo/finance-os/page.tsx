import { ButtonLink } from "@/src/components/ui/ButtonLink";
import { LocalizedText } from "@/src/components/ui/LocalizedText";
import { financeDemoRoutes, financeOsLandingContent, homeProductSpotlight } from "@/src/content/siteContent";

export default function FinanceOsLandingPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-20 pt-8 md:pt-12">
      <article className="surface-strong rounded-3xl p-8 md:p-10">
        <LocalizedText text={financeOsLandingContent.eyebrow} as="p" className="eyebrow" />
        <LocalizedText
          text={financeOsLandingContent.title}
          as="h1"
          className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-slate-100 md:text-5xl"
        />
        <LocalizedText
          text={financeOsLandingContent.description}
          as="p"
          className="mt-5 max-w-3xl text-base leading-relaxed text-textSoft md:text-lg"
        />

        <div className="mt-6 flex flex-wrap gap-2">
          {homeProductSpotlight.features.map((feature) => (
            <span
              key={feature}
              className="rounded-full border border-slate-600 bg-slate-900/55 px-3 py-1 text-xs font-medium tracking-wide text-slate-200"
            >
              <LocalizedText text={feature} />
            </span>
          ))}
        </div>

        <div className="mt-8">
          <ButtonLink href={financeDemoRoutes.overview}>
            <LocalizedText text={financeOsLandingContent.cta} />
          </ButtonLink>
        </div>
      </article>
    </section>
  );
}
