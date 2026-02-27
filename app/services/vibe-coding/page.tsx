import type { Metadata } from "next";
import { ServiceDetail } from "@/src/components/sections/ServiceDetail";
import { servicePages } from "@/src/content/siteContent";

export const metadata: Metadata = {
  title: "Vibe Coding",
  description:
    "Vibe coding education programs and workshops for AI-native team execution and system delivery."
};

export default function VibeCodingPage() {
  return <ServiceDetail content={servicePages["vibe-coding"]} />;
}
