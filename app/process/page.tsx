import type { Metadata } from "next";
import { PageIntro } from "@/src/components/sections/PageIntro";
import { ProcessTimeline } from "@/src/components/sections/ProcessTimeline";
import { processPageContent } from "@/src/content/siteContent";

export const metadata: Metadata = {
  title: "Process",
  description:
    "AxoraLab 5-step rollout for digital marketing agencies: Discover, Architect, Build, Deploy, Optimize."
};

export default function ProcessPage() {
  return (
    <>
      <PageIntro
        eyebrow={processPageContent.eyebrow}
        title={processPageContent.title}
        description={processPageContent.description}
      />
      <section className="mx-auto w-full max-w-7xl px-6 pb-20">
        <ProcessTimeline />
      </section>
    </>
  );
}
