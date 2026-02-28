import type { Metadata } from "next";
import { ServiceDetail } from "@/src/components/sections/ServiceDetail";
import { servicePages } from "@/src/content/siteContent";

export const metadata: Metadata = {
  title: "AI Assistants",
  description:
    "AI assistant systems for digital marketing agencies: proposals, KPI updates, and internal document Q&A."
};

export default function AIAssistantsPage() {
  return <ServiceDetail content={servicePages["ai-assistants"]} />;
}
