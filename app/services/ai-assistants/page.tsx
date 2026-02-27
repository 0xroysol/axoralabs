import type { Metadata } from "next";
import { ServiceDetail } from "@/src/components/sections/ServiceDetail";
import { servicePages } from "@/src/content/siteContent";

export const metadata: Metadata = {
  title: "AI Assistants",
  description:
    "Enterprise AI assistant systems for document intelligence, reporting, and workflow automation."
};

export default function AIAssistantsPage() {
  return <ServiceDetail content={servicePages["ai-assistants"]} />;
}
