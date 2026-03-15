import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/src/components/sections/ContactForm";
import { PageIntro } from "@/src/components/sections/PageIntro";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to AxoraLab about custom web apps, mobile apps, operations dashboards, and AI-ready internal systems."
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Let's scope the right system for your team."
        description="Tell us about your workflow, users, and what kind of system you need. We'll shape the right product direction with you."
      />
      <section className="mx-auto w-full max-w-3xl px-6 pb-20">
        <article className="surface-strong rounded-2xl p-6 md:p-7">
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </article>
      </section>
    </>
  );
}
