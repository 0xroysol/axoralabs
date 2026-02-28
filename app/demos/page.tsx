import Link from "next/link";
import type { Metadata } from "next";
import { PageIntro } from "@/src/components/sections/PageIntro";
import { LocalizedText } from "@/src/components/ui/LocalizedText";
import { BreakdownBars } from "@/src/components/ui/BreakdownBars";
import { KPIWidget } from "@/src/components/ui/KPIWidget";
import { LineChart } from "@/src/components/ui/LineChart";
import { demoData, demoRequestLinks, demosPageContent, financeOsLandingContent } from "@/src/content/siteContent";

export const metadata: Metadata = {
  title: "Demos",
  description:
    "Agency-ready product demos for finance, operations, and AI workflows."
};

export default function DemosPage() {
  return (
    <>
      <PageIntro
        eyebrow={demosPageContent.eyebrow}
        title={demosPageContent.title}
        description={demosPageContent.description}
      />

      <section className="mx-auto w-full max-w-7xl px-6 pb-14">
        <article id="axora-finance-os" className="surface rounded-2xl p-6 md:p-7 scroll-mt-28">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-semibold text-slate-100">
                <LocalizedText text={demoData.finance.title} />
              </h2>
              <p className="mt-2 text-sm text-textSoft">
                <LocalizedText text={demoData.finance.summary} />
              </p>
            </div>
            <p className="rounded-full border border-slate-600 bg-slate-800/60 px-3 py-1 text-xs font-semibold tracking-wide text-slate-200">
              <LocalizedText text={demosPageContent.financeBadge} />
            </p>
          </div>

          <ul className="mt-5 grid gap-2 text-sm text-slate-300 md:grid-cols-2">
            {demoData.finance.bullets.map((bullet) => (
              <li key={bullet}>• <LocalizedText text={bullet} /></li>
            ))}
          </ul>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {demoData.finance.kpis.map((kpi) => (
              <KPIWidget key={kpi.label} label={kpi.label} value={kpi.value} delta={kpi.delta} />
            ))}
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
            <LineChart values={demoData.finance.lineSeries} />
            <BreakdownBars items={demoData.finance.breakdown} />
          </div>

          <Link href={demoRequestLinks.finance} className="focus-ring mt-6 inline-flex text-sm font-semibold text-slate-100 hover:opacity-80">
            <LocalizedText text={financeOsLandingContent.cta} />
          </Link>
        </article>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-4 px-6 pb-14 md:grid-cols-2">
        <article id="axora-operations-panel" className="surface rounded-2xl p-6 scroll-mt-28">
          <h2 className="font-display text-2xl font-semibold text-slate-100">
            <LocalizedText text={demoData.operations.title} />
          </h2>
          <p className="mt-2 text-sm text-textSoft">
            <LocalizedText text={demoData.operations.summary} />
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {demoData.operations.bullets.map((bullet) => (
              <li key={bullet}>• <LocalizedText text={bullet} /></li>
            ))}
          </ul>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {demoData.operations.kpis.map((kpi) => (
              <KPIWidget key={kpi.label} label={kpi.label} value={kpi.value} delta={kpi.delta} />
            ))}
          </div>
          <Link href={demoRequestLinks.operations} className="focus-ring mt-6 inline-flex text-sm font-semibold text-slate-100 hover:opacity-80">
            <LocalizedText text={demosPageContent.requestDemoCta} />
          </Link>
        </article>

        <article id="axora-ai-assistant" className="surface rounded-2xl p-6 scroll-mt-28">
          <h2 className="font-display text-2xl font-semibold text-slate-100">
            <LocalizedText text={demoData.assistant.title} />
          </h2>
          <p className="mt-2 text-sm text-textSoft">
            <LocalizedText text={demoData.assistant.summary} />
          </p>
          <ul className="mt-5 space-y-3 text-sm text-slate-100">
            {demoData.assistant.features.map((feature) => (
              <li key={feature} className="rounded-lg border border-slate-700 bg-slate-900/45 px-3 py-2">
                <LocalizedText text={feature} />
              </li>
            ))}
          </ul>
          <Link href={demoRequestLinks.assistant} className="focus-ring mt-6 inline-flex text-sm font-semibold text-slate-100 hover:opacity-80">
            <LocalizedText text={demosPageContent.requestDemoCta} />
          </Link>
        </article>
      </section>
    </>
  );
}
