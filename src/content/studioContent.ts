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
      "We design custom software systems that make operations, workflows, and internal processes simpler, faster, and more scalable.",
    primaryCta: "Let's Talk",
    secondaryCta: "What We Build"
  },
  showcase: {
    title: "Modern interfaces. Real operational workflows.",
    subtitle:
      "More than attractive screens: software surfaces teams actually rely on."
  },
  whatWeBuild: {
    title: "What We Build",
    subtitle: "Not generic templates - systems built around the way your team works.",
    items: [
      {
        title: "Custom Web Apps",
        description: "Custom web systems designed around your workflow."
      },
      {
        title: "Operations Panels",
        description: "Modern panels for visibility, reporting, and decision-making."
      },
      {
        title: "Workflow Systems",
        description: "Workflow layers that simplify approvals, tasks, and repeated processes."
      },
      {
        title: "AI Automations",
        description:
          "Automation layers that reduce repetition and improve operational flow."
      }
    ]
  },
  systems: {
    title: "What Kind of Systems We Design",
    subtitle: "Clean system structures that turn workflows into software.",
    items: [
      "CRM & lead management",
      "Internal operations tools",
      "Workflow / approval systems",
      "Reporting & decision layers",
      "Customer portals",
      "Data integration systems"
    ]
  },
  process: {
    title: "How We Work",
    steps: [
      {
        name: "Discover",
        detail: "We understand the workflow and operational needs."
      },
      {
        name: "Architect",
        detail: "We shape the screens, data structure, and user flow."
      },
      {
        name: "Build",
        detail: "We build the system and make it operational."
      },
      {
        name: "Launch",
        detail: "We complete testing and rollout."
      },
      {
        name: "Improve",
        detail: "We improve the system based on real use."
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
