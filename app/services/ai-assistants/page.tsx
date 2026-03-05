import type { Metadata } from "next";
import { ServiceDetail } from "@/src/components/sections/ServiceDetail";
import { servicePages } from "@/src/content/siteContent";

export const metadata: Metadata = {
  title: "AI Integrations (AI-ready)",
  description:
    "Optional AI integrations for digital marketing agencies: reporting summaries, document Q&A, and workflow automation."
};

export default function AIAssistantsPage() {
  return <ServiceDetail content={servicePages["ai-assistants"]} />;
}
