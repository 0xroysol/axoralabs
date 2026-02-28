import { processSteps } from "@/src/content/siteContent";
import { LocalizedText } from "@/src/components/ui/LocalizedText";

export function ProcessTimeline() {
  return (
    <ol className="grid gap-4 md:grid-cols-5">
      {processSteps.map((step, index) => (
        <li key={step.name} className="surface relative rounded-2xl p-5">
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-500 bg-slate-800 text-sm font-semibold text-slate-100">
              {index + 1}
            </span>
            <LocalizedText text={step.name} as="h3" className="font-display text-lg font-semibold text-slate-100" />
          </div>
          <LocalizedText text={step.detail} as="p" className="text-sm leading-relaxed text-textSoft" />
        </li>
      ))}
    </ol>
  );
}
