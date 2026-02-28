import type { Metadata } from "next";
import { ServiceDetail } from "@/src/components/sections/ServiceDetail";
import { servicePages } from "@/src/content/siteContent";

export const metadata: Metadata = {
  title: "Industry Panels",
  description:
    "Agency Growth Suite for utilization snapshots, delivery health, and operational planning visibility."
};

export default function IndustryPanelsPage() {
  return <ServiceDetail content={servicePages["industry-panels"]} />;
}
