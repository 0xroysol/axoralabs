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
    secondaryCta: "What We Build",
    chips: ["Ops Panel", "Workflow", "Mobile", "Automation"]
  },
  whatWeBuild: {
    title: "What We Build",
    subtitle: "Software layers tailored to your workflow, not generic templates.",
    items: [
      {
        title: "Custom Web Apps",
        description: "Custom web-based software systems built around your business.",
        icon: "web"
      },
      {
        title: "Operations Panels",
        description:
          "Modern panels for visibility, reporting, process tracking, and decision-making.",
        icon: "panel"
      },
      {
        title: "Mobile Apps",
        description: "Fast, focused mobile experiences for field teams or end users.",
        icon: "mobile"
      },
      {
        title: "AI Automations",
        description: "Automation layers that simplify, route, and accelerate repetitive workflows.",
        icon: "ai"
      }
    ]
  },
  systems: {
    title: "What Kind of Systems We Design",
    subtitle: "Software should make operations feel simpler, not heavier.",
    items: [
      { label: "CRM & lead management", icon: "crm" },
      { label: "Portfolio / inventory systems", icon: "inventory" },
      { label: "Workflow & follow-up pipelines", icon: "workflow" },
      { label: "Internal team tools", icon: "team" },
      { label: "Reporting & decision dashboards", icon: "reporting" },
      { label: "Customer portals", icon: "portal" },
      { label: "Data integration layers", icon: "data" },
      { label: "Operations control systems", icon: "control" }
    ]
  },
  selectedSystems: {
    title: "Selected System Types",
    items: [
      {
        title: "Custom CRM & Lead System",
        description:
          "A focused system that brings leads, team actions, and follow-up flow into one place.",
        points: ["Leads", "Ownership", "Follow-up"]
      },
      {
        title: "Operations & Decision Dashboard",
        description:
          "A clean decision layer for reporting, visibility, signals, and internal operational rhythm.",
        points: ["Signals", "Reporting", "Visibility"]
      },
      {
        title: "Mobile-Supported Internal System",
        description:
          "A system where web and mobile work together to connect office and field operations.",
        points: ["Field flow", "Sync", "Coordination"]
      }
    ]
  },
  process: {
    title: "How We Work",
    steps: [
      { name: "Discover", detail: "We understand the workflow, roles, and friction points." },
      { name: "Architect", detail: "We define the screens, data model, and experience." },
      { name: "Build", detail: "We develop the web app, mobile layer, or automation system." },
      { name: "Launch", detail: "We complete testing, onboarding, and deployment." },
      { name: "Improve", detail: "We refine the system based on real use." }
    ]
  },
  why: {
    title: "Why AxoraLab?",
    points: [
      "Tailored systems, not off-the-shelf templates",
      "Interfaces that look modern and work in practice",
      "Fast prototyping with production-minded execution",
      "Web, mobile, and automation considered together"
    ]
  },
  about: {
    title: "About the Studio",
    description:
      "AxoraLab is a modern product studio that designs and builds custom software systems around real operational needs. Its focus is clear process design, modern interfaces, and systems that create value in real use."
  },
  finalCta: {
    title: "Let's build your next software system.",
    description:
      "From internal dashboards and workflow tools to mobile apps and automation layers, we can design the right system for your business.",
    cta: "Book a 15-min Call"
  },
  contact: {
    title: "Tell us what you want to build.",
    description:
      "Share the workflow, team, or operational need you want to turn into software.",
    label: "What do you want to build?",
    emailLabel: "hello@axoralabs.ai",
    submit: "Send brief"
  }
};
