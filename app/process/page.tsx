import type { Metadata } from "next";
import { PageIntro } from "@/src/components/sections/PageIntro";
import { ProcessTimeline } from "@/src/components/sections/ProcessTimeline";

export const metadata: Metadata = {
  title: "Process",
  description:
    "AxoraLab 5-step rollout for digital marketing agencies: Discover, Architect, Build, Deploy, Optimize."
};

export default function ProcessPage() {
  return (
    <>
      <PageIntro
        eyebrow="Process"
        title="A practical 5-step rollout for agency systems"
        description="From data connection to monthly optimization, we keep delivery tight and measurable for agency teams."
      />
      <section className="mx-auto w-full max-w-7xl px-6 pb-20">
        <ProcessTimeline />
      </section>
    </>
  );
}
