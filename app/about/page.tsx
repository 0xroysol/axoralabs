import type { Metadata } from "next";
import { PageIntro } from "@/src/components/sections/PageIntro";
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
          <h2 className="font-display text-xl font-semibold">Vision</h2>
          <p className="mt-3 text-sm leading-relaxed text-textSoft">
            A future where every company operates with a trusted, intelligent decision layer.
          </p>
        </article>
        <article className="surface rounded-2xl p-6">
          <h2 className="font-display text-xl font-semibold">Positioning</h2>
          <p className="mt-3 text-sm leading-relaxed text-textSoft">
            We are a technical studio focused on AI-powered business systems and executive-grade interfaces.
          </p>
        </article>
        <article className="surface rounded-2xl p-6">
          <h2 className="font-display text-xl font-semibold">Credibility</h2>
          <p className="mt-3 text-sm leading-relaxed text-textSoft">
            Every delivery is scoped for operational adoption, measurable ROI, and long-term governance.
          </p>
        </article>
      </section>
    </>
  );
}
