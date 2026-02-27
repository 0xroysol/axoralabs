import type { Metadata } from "next";
import { ServiceDetail } from "@/src/components/sections/ServiceDetail";
import { servicePages } from "@/src/content/siteContent";

export const metadata: Metadata = {
  title: "Industry Panels",
  description:
    "Industry-specific operational panels for throughput, SLA compliance, and profitability control."
};

export default function IndustryPanelsPage() {
  return <ServiceDetail content={servicePages["industry-panels"]} />;
}
