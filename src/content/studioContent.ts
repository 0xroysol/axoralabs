export type StudioNavItem = {
  label: string;
  href: string;
};

export const studioBrand = {
  name: "AxoraLab",
  copyrightLabel: "AxoraLab",
  footerStatement: "Custom software systems for modern teams."
};

export const studioSeoByLocale = {
  tr: {
    title: "AxoraLab | Özel Yazılım Sistemleri ve Operasyon Katmanları",
    description:
      "AxoraLab; özel web tabanlı yazılım sistemleri, operasyon panelleri, workflow katmanları ve AI-ready otomasyon akışları tasarlayan modern bir product studio’dur."
  },
  en: {
    title: "AxoraLab | Custom Software Systems & Operational Layers",
    description:
      "AxoraLab is a modern product studio designing custom web systems, operational dashboards, workflow layers, and AI-ready automations."
  }
} as const;

export const studioNavLinks: StudioNavItem[] = [
  { label: "What We Build", href: "/#what-we-build" },
  { label: "Systems", href: "/#systems" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" }
];

export const studioHomeContent = {
  hero: {
    eyebrow: "Custom Web Apps • Dashboards • Workflow Systems • AI Automations",
    title: "We build the software layer behind modern operations.",
    description:
      "Custom panels, workflow systems, automation logic, and AI-ready tools designed around how your business actually runs.",
    primaryCta: "Let's Talk",
    secondaryCta: "See What We Build",
    metaPills: ["Custom systems", "Cinematic UI", "AI-ready logic"],
    visualCards: {
      mainTitle: "Ops Console",
      sideTitle: "Workflow Engine",
      bottomTitle: "Automation Graph",
      metrics: ["Signals synced", "Queues active", "Actions routed"]
    }
  },
  whatWeBuild: {
    title: "What We Build",
    description: "Not websites. The system itself.",
    items: [
      {
        title: "Custom Web Apps",
        description: "Internal or client-facing products built around your business logic.",
        icon: "grid"
      },
      {
        title: "Operations Dashboards",
        description: "Clean visibility for reporting, performance, and team movement.",
        icon: "pulse"
      },
      {
        title: "Workflow Systems",
        description: "Approvals, follow-up, ownership, and recurring process flows.",
        icon: "path"
      },
      {
        title: "AI Automations",
        description: "AI-ready layers that summarize, route, trigger, and reduce repetition.",
        icon: "spark"
      }
    ]
  },
  systems: {
    title: "What Kind of Systems We Design",
    statement: "Software should make operations feel obvious.",
    items: [
      { label: "Lead systems", icon: "stack" },
      { label: "Client portals", icon: "portal" },
      { label: "Approval flows", icon: "route" },
      { label: "Reporting layers", icon: "chart" },
      { label: "Ops control panels", icon: "control" },
      { label: "Data bridges", icon: "nodes" }
    ]
  },
  selectedSystems: {
    title: "Selected System Types",
    items: [
      {
        title: "Lead Control",
        description: "A focused operating layer for ownership, status, and next actions.",
        points: ["Ownership", "Status", "Pipeline"]
      },
      {
        title: "Decision Dashboard",
        description: "A cleaner reporting surface for performance, finance, and signal visibility.",
        points: ["Metrics", "Visibility", "Reporting"]
      },
      {
        title: "Internal Workflow",
        description: "A custom system for recurring tasks, handoffs, and operational rhythm.",
        points: ["Tasks", "Approvals", "Coordination"]
      }
    ]
  },
  process: {
    title: "How We Work",
    steps: [
      { name: "Discover", detail: "Workflow, roles, and friction." },
      { name: "Architect", detail: "System shape and interaction logic." },
      { name: "Build", detail: "A product-grade software layer." },
      { name: "Launch", detail: "Rollout, onboarding, and testing." },
      { name: "Improve", detail: "Iterate around real usage." }
    ]
  },
  why: {
    title: "Why AxoraLab?",
    points: [
      "Tailored systems, not generic agency output",
      "Modern interfaces with real operational clarity",
      "Workflow, reporting, and automation designed together"
    ]
  },
  about: {
    title: "About the Studio",
    description:
      "AxoraLab is a small product studio that turns operational complexity into software that feels clear, modern, and durable."
  },
  finalCta: {
    title: "Let's build the system your team should have had earlier.",
    description:
      "A dashboard, workflow layer, internal panel, or automation system shaped around how your business actually moves.",
    cta: "Book a 15-min Call"
  },
  contact: {
    title: "Tell us what you want to build.",
    description:
      "If the workflow already exists in spreadsheets, messages, approvals, or disconnected tools, we can likely turn it into software.",
    label: "What do you want to build?",
    emailLabel: "hello@axoralabs.ai",
    submit: "Send brief"
  }
};
