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
    title: "AxoraLab | Özel Yazılım Sistemleri ve Operasyon Panelleri",
    description:
      "AxoraLab; özel web uygulamaları, operasyon panelleri, workflow sistemleri ve AI otomasyonları geliştiren modern bir product studio’dur."
  },
  en: {
    title: "AxoraLab | Custom Software Systems & Operations Panels",
    description:
      "AxoraLab is a modern product studio building custom web apps, operations panels, workflow systems, and AI automations."
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
    eyebrow: "Custom Web Apps • Operations Panels • Workflow Systems • AI Automations",
    title: "We build software systems tailored to your business.",
    description:
      "We design custom software systems that make operations, workflows, and internal processes simpler, cleaner, and more scalable.",
    primaryCta: "Let's Talk",
    secondaryCta: "What We Build"
  },
  preview: {
    title: "Modern interfaces. Real operational workflows.",
    subtitle:
      "Not just attractive interfaces, but systems teams actually use.",
    items: ["Dashboard", "Workflow", "Data Sync"]
  },
  whatWeBuild: {
    title: "What We Build",
    subtitle: "Not generic sites - systems built around real workflows.",
    items: [
      {
        title: "Custom Web Apps",
        description: "Custom web systems designed around your workflow.",
        icon: "web"
      },
      {
        title: "Operations Panels",
        description: "Modern panels for visibility, reporting, and decision-making.",
        icon: "panel"
      },
      {
        title: "Workflow Systems",
        description: "Workflow layers that simplify approvals, tasks, and repeated processes.",
        icon: "workflow"
      },
      {
        title: "AI Automations",
        description:
          "Automation layers that reduce repetition and improve operational flow.",
        icon: "ai"
      }
    ]
  },
  systems: {
    title: "What Kind of Systems We Design",
    subtitle: "Clean system structures that turn workflows into software.",
    items: [
      { label: "CRM & lead management", icon: "crm" },
      { label: "Internal operations tools", icon: "team" },
      { label: "Reporting & decision dashboards", icon: "reporting" },
      { label: "Workflow & approval pipelines", icon: "workflow" },
      { label: "Customer portals", icon: "portal" },
      { label: "Data integration layers", icon: "data" }
    ]
  },
  process: {
    title: "How We Work",
    steps: [
      {
        name: "Discover",
        detail: "We understand the workflow, user roles, and friction points."
      },
      {
        name: "Architect",
        detail: "We define the screens, data model, and user experience."
      },
      {
        name: "Build",
        detail: "We build the system and make it operational."
      },
      {
        name: "Launch",
        detail: "We complete testing, onboarding, and deployment."
      },
      {
        name: "Improve",
        detail: "We refine the system iteratively based on real usage."
      }
    ]
  },
  about: {
    title: "About AxoraLab",
    description:
      "AxoraLab is a modern product studio that designs and builds custom software systems around real operational needs. Its focus is clear process design, strong interfaces, and systems that create value in real use."
  },
  finalCta: {
    title: "Let's build your next system together.",
    description:
      "Let's design the right internal tool, workflow system, dashboard, or automation layer for your business.",
    cta: "Book a 15-min Call",
    email: "hello@axoralabs.ai"
  }
};
