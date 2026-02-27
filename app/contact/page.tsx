import type { Metadata } from "next";
import { ContactForm } from "@/src/components/sections/ContactForm";
import { PageIntro } from "@/src/components/sections/PageIntro";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a discovery call with AxoraLab.ai for finance dashboards, operations panels, AI assistants, or training."
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Let’s scope your intelligent system"
        description="Share your business context and priority outcomes. We will return with a focused implementation path."
      />
      <section className="mx-auto w-full max-w-3xl px-6 pb-20">
        <article className="surface rounded-2xl p-6 md:p-7">
          <ContactForm />
        </article>
      </section>
    </>
  );
}
