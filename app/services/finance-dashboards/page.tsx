import type { Metadata } from "next";
import { ServiceDetail } from "@/src/components/sections/ServiceDetail";
import { servicePages } from "@/src/content/siteContent";

export const metadata: Metadata = {
  title: "Finance Dashboards",
  description:
    "Finance and accounting dashboards with board-ready KPIs, forecasts, and trusted decision visibility."
};

export default function FinanceDashboardsPage() {
  return <ServiceDetail content={servicePages["finance-dashboards"]} />;
}
