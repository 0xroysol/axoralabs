import { LocalizedText } from "@/src/components/ui/LocalizedText";

export function FounderSpotlight() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-14">
      <article className="surface-strong rounded-3xl p-7 md:p-10">
        <LocalizedText text="Founder Spotlight" as="p" className="eyebrow" />
        <div className="mt-4 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="surface rounded-2xl p-6">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-500 bg-slate-800 font-display text-2xl font-semibold text-slate-100">
              MG
            </div>
            <LocalizedText text="Murat Guler" as="h3" className="font-display text-2xl font-semibold text-slate-100" />
            <LocalizedText text="Founder & CEO" as="p" className="mt-2 text-sm font-medium text-slate-300" />
          </div>

          <div>
            <LocalizedText
              text="Building finance-grade AI systems that executives trust and teams actually use."
              as="p"
              className="text-base leading-relaxed text-textSoft md:text-lg"
            />
            <ul className="mt-5 grid gap-3 text-sm text-slate-300 md:grid-cols-2">
              <li className="rounded-xl border border-slate-700 bg-slate-900/45 px-3 py-2">
                <LocalizedText text="Leadership" />
              </li>
              <li className="rounded-xl border border-slate-700 bg-slate-900/45 px-3 py-2">
                <LocalizedText text="Technical Depth" />
              </li>
              <li className="rounded-xl border border-slate-700 bg-slate-900/45 px-3 py-2">
                <LocalizedText text="Finance dashboard architecture" />
              </li>
              <li className="rounded-xl border border-slate-700 bg-slate-900/45 px-3 py-2">
                <LocalizedText text="AI assistant operations" />
              </li>
              <li className="rounded-xl border border-slate-700 bg-slate-900/45 px-3 py-2 md:col-span-2">
                <LocalizedText text="Turkey-first with globally scalable architecture" />
              </li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}
