import { processSteps } from "@/src/content/siteContent";

export function ProcessTimeline() {
  return (
    <ol className="grid gap-4 md:grid-cols-5">
      {processSteps.map((step, index) => (
        <li key={step.name} className="surface relative rounded-2xl p-5">
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan/45 bg-cyan/10 text-sm font-semibold text-cyan">
              {index + 1}
            </span>
            <h3 className="font-display text-lg font-semibold">{step.name}</h3>
          </div>
          <p className="text-sm leading-relaxed text-textSoft">{step.detail}</p>
        </li>
      ))}
    </ol>
  );
}
