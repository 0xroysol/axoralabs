import type { Metadata } from "next";
import { PageIntro } from "@/src/components/sections/PageIntro";
import { FounderSpotlight } from "@/src/components/sections/FounderSpotlight";
import { LocalizedText } from "@/src/components/ui/LocalizedText";
import { aboutContent } from "@/src/content/siteContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "AxoraLab.ai builds intelligent operating systems for modern companies."
};

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About" title={aboutContent.title} description={aboutContent.text} />
      <section className="mx-auto grid w-full max-w-7xl gap-4 px-6 pb-20 md:grid-cols-3">
        <article className="surface rounded-2xl p-6">
          <LocalizedText text="Vision" as="h2" className="font-display text-xl font-semibold text-slate-100" />
          <LocalizedText
            text="A future where agencies run with trusted, real-time financial and operational visibility."
            as="p"
            className="mt-3 text-sm leading-relaxed text-textSoft"
          />
        </article>
        <article className="surface rounded-2xl p-6">
          <LocalizedText text="Positioning" as="h2" className="font-display text-xl font-semibold text-slate-100" />
          <LocalizedText
            text="We are a product-focused studio building AI-powered systems for digital marketing agencies."
            as="p"
            className="mt-3 text-sm leading-relaxed text-textSoft"
          />
        </article>
        <article className="surface rounded-2xl p-6">
          <LocalizedText text="Credibility" as="h2" className="font-display text-xl font-semibold text-slate-100" />
          <LocalizedText
            text="Every delivery is scoped for measurable ROI, team adoption, and consistent execution quality."
            as="p"
            className="mt-3 text-sm leading-relaxed text-textSoft"
          />
        </article>
      </section>
      <FounderSpotlight />
    </>
  );
}
