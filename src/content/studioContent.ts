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
    title: "AxoraLab | Web App, Mobil App ve Operasyon Sistemleri",
    description:
      "AxoraLab; web app, mobil uygulama, operasyon paneli ve AI otomasyonları geliştiren modern bir product studio’dur."
  },
  en: {
    title: "AxoraLab | Custom Web Apps, Mobile Apps & Operational Systems",
    description:
      "AxoraLab is a modern product studio building custom web apps, mobile apps, operations dashboards, and AI automations."
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
    eyebrow: "Web Apps • Mobile Apps • Operations Panels • AI Automations",
    title: "We build software systems tailored to your business.",
    description:
      "From web apps and mobile apps to operations dashboards and AI automations, we turn complex workflows into modern, scalable systems.",
    primaryCta: "Let's Talk",
    secondaryCta: "See what we build",
    visualCards: {
      dashboard: "Operations Overview",
      pipeline: "Workflow Pipeline",
      mobile: "Field App",
      automation: "Automation Layer",
      metrics: ["Tasks synced", "Approvals routed", "Reports ready"]
    }
  },
  whatWeBuild: {
    title: "What We Build",
    items: [
      {
        title: "Custom Web Apps",
        description:
          "Custom web-based software systems tailored to your business or workflow."
      },
      {
        title: "Operations Dashboards",
        description:
          "Operational visibility, reporting, process tracking, and decision dashboards."
      },
      {
        title: "Mobile Apps",
        description:
          "Mobile experiences for field teams or end users."
      },
      {
        title: "AI Automations",
        description:
          "AI-ready automation layers that streamline, summarize, and orchestrate repetitive workflows."
      }
    ]
  },
  systems: {
    title: "What Kind of Systems We Design",
    items: [
      "Lead & client management systems",
      "Portfolio / inventory / record systems",
      "Follow-up and workflow pipelines",
      "Internal team tools",
      "Reporting and decision dashboards",
      "Data integration layers",
      "Customer portals",
      "Operations control panels"
    ]
  },
  selectedSystems: {
    title: "Selected System Types",
    items: [
      {
        title: "Real Estate Operations Platform",
        description:
          "Lead, portfolio, and day-to-day follow-up workflows unified in one operational system.",
        points: ["Lead inbox", "Portfolio tracking", "Task rhythm"]
      },
      {
        title: "Agency Finance & Operations Dashboard",
        description:
          "A decision layer that brings profitability, receivables, reporting, and team rhythm together.",
        points: ["Receivables", "Margins", "Operational cadence"]
      },
      {
        title: "Custom CRM & Workflow System",
        description:
          "A custom software layer that simplifies lead flow, client process, and team actions.",
        points: ["Pipeline logic", "Client statuses", "Team coordination"]
      }
    ]
  },
  process: {
    title: "How We Work",
    steps: [
      {
        name: "Discover",
        detail: "We understand your workflow, user roles, and data sources."
      },
      {
        name: "Architect",
        detail: "We define the screens, data model, and experience architecture."
      },
      {
        name: "Build",
        detail: "We build the web app, mobile layer, or automation system."
      },
      {
        name: "Launch",
        detail: "We complete testing, onboarding, and deployment."
      },
      {
        name: "Improve",
        detail: "We improve the system iteratively based on real usage."
      }
    ]
  },
  why: {
    title: "Why AxoraLab?",
    points: [
      "Tailored systems, not off-the-shelf templates",
      "Interfaces that look modern and work in practice",
      "Fast prototyping with production-quality thinking",
      "Scalable architecture",
      "Web, mobile, and automation considered together"
    ]
  },
  about: {
    title: "About the Studio",
    description:
      "AxoraLab is a product studio that designs and builds tailored software systems around real operational needs. Its focus is modern interfaces, clear workflow design, and systems that deliver value in real use."
  },
  finalCta: {
    title: "Let's build your next operational system.",
    description:
      "From internal dashboards and workflow tools to mobile apps and automation layers, we can design the right system for your business.",
    cta: "Book a 15-min Call"
  },
  contact: {
    title: "Let's scope the right system for your team.",
    description:
      "Tell us about your workflow, users, and what kind of system you need. We'll shape the right product direction with you.",
    label: "What do you want to build?",
    emailLabel: "hello@axoralabs.ai",
    submit: "Send brief"
  }
};
