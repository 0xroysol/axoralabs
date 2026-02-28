import type { MetadataRoute } from "next";

const baseUrl = "https://axoralabs.ai";

const routes = [
  "",
  "/services",
  "/services/finance-dashboards",
  "/services/industry-panels",
  "/services/ai-assistants",
  "/services/vibe-coding",
  "/demos",
  "/demo/finance-os",
  "/demo/finance-os/overview",
  "/demo/finance-os/clients",
  "/demo/finance-os/receivables",
  "/demo/finance-os/budget",
  "/process",
  "/about",
  "/contact"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date();
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: updated,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
