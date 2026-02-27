import type { Metadata } from "next";
import { PageIntro } from "@/src/components/sections/PageIntro";
import { ProcessTimeline } from "@/src/components/sections/ProcessTimeline";

export const metadata: Metadata = {
  title: "Process",
  description:
    "AxoraLab 5-step process: Discover, Architect, Build, Deploy, Optimize."
};

export default function ProcessPage() {
  return (
    <>
      <PageIntro
        eyebrow="Process"
        title="A disciplined 5-step model for shipping intelligent systems"
        description="Our process balances strategic clarity, engineering speed, and operational adoption for measurable business outcomes."
      />
      <section className="mx-auto w-full max-w-7xl px-6 pb-20">
        <ProcessTimeline />
      </section>
    </>
  );
}
