import type { Metadata } from "next";
import { ServiceDetail } from "@/src/components/sections/ServiceDetail";
import { servicePages } from "@/src/content/siteContent";

export const metadata: Metadata = {
  title: "Finance Dashboards",
  description:
    "Agency Finance MVP dashboards for cash flow, payroll ratio, receivables aging, and client profitability."
};

export default function FinanceDashboardsPage() {
  return <ServiceDetail content={servicePages["finance-dashboards"]} />;
}
