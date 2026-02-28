import type { Metadata } from "next";
import { PageIntro } from "@/src/components/sections/PageIntro";
import { LocalizedText } from "@/src/components/ui/LocalizedText";
import { BreakdownBars } from "@/src/components/ui/BreakdownBars";
import { KPIWidget } from "@/src/components/ui/KPIWidget";
import { LineChart } from "@/src/components/ui/LineChart";
import { demoData } from "@/src/content/siteContent";

export const metadata: Metadata = {
  title: "Demos",
  description:
    "See AxoraLab demo systems: finance OS, operations panel, and AI assistant workflows."
};

export default function DemosPage() {
  return (
    <>
      <PageIntro
        eyebrow="Demos"
        title="Realistic dashboard and assistant demo systems"
        description="Structured previews of finance intelligence, operational visibility, and assistant automation patterns."
      />

      <section className="mx-auto w-full max-w-7xl px-6 pb-14">
        <article className="surface rounded-2xl p-6 md:p-7">
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
              <LocalizedText text="Finance & Accounting Intelligence" />
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {demoData.finance.kpis.map((kpi) => (
              <KPIWidget key={kpi.label} label={kpi.label} value={kpi.value} delta={kpi.delta} />
            ))}
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
            <LineChart values={demoData.finance.lineSeries} />
            <BreakdownBars items={demoData.finance.breakdown} />
          </div>
        </article>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-4 px-6 pb-14 md:grid-cols-2">
        <article className="surface rounded-2xl p-6">
          <h2 className="font-display text-2xl font-semibold text-slate-100">
            <LocalizedText text={demoData.operations.title} />
          </h2>
          <p className="mt-2 text-sm text-textSoft">
            <LocalizedText text={demoData.operations.summary} />
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {demoData.operations.kpis.map((kpi) => (
              <KPIWidget key={kpi.label} label={kpi.label} value={kpi.value} delta={kpi.delta} />
            ))}
          </div>
        </article>

        <article className="surface rounded-2xl p-6">
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
        </article>
      </section>
    </>
  );
}
