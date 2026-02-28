import type { Metadata } from "next";
import { PageIntro } from "@/src/components/sections/PageIntro";
import { LocalizedText } from "@/src/components/ui/LocalizedText";
import { PricingCard } from "@/src/components/ui/PricingCard";
import { ServiceCard } from "@/src/components/ui/ServiceCard";
import { coreServices, pricingHighlights } from "@/src/content/siteContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore AxoraLab services: finance dashboards, industry panels, AI assistant systems, and vibe coding education."
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="High-trust AI systems for finance, operations, and execution"
        description="AxoraLab delivers focused implementation tracks that combine strategic architecture, premium interface design, and production engineering discipline."
      />

      <section className="mx-auto w-full max-w-7xl px-6 pb-12">
        <div className="grid gap-4 md:grid-cols-2">
          {coreServices.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-20">
        <LocalizedText text="Investment ranges" as="h2" className="mb-4 font-display text-2xl font-semibold text-slate-100" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pricingHighlights.map((item) => (
            <PricingCard key={item.title} title={item.title} price={item.price} outcome={item.outcome} />
          ))}
        </div>
      </section>
    </>
  );
}
