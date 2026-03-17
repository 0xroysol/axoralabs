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
  { label: "Systems", href: "/#showcase" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" }
];

export const studioFooterLinks: StudioNavItem[] = [
  { label: "What We Build", href: "/#what-we-build" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" }
];

export const studioHomeContent = {
  hero: {
    eyebrow:
      "Custom Web Apps • Operations Panels • Workflow Systems • AI Automations",
    title: "We build software systems tailored to your business.",
    description:
      "We design custom software systems that make internal processes, workflows, and operations simpler, faster, and more scalable.",
    primaryCta: "Let's Talk",
    secondaryCta: "What We Build"
  },
  showcase: {
    title: "Interfaces designed for real operations.",
    subtitle:
      "More than attractive screens: software surfaces teams actually use.",
    modules: [
      {
        title: "Workflow Control",
        subtitle:
          "Queue, routing, approval state, and task ownership in one controlled layer."
      },
      {
        title: "Operations Console",
        subtitle:
          "Records, filters, detail context, and recent actions in a single operational surface."
      },
      {
        title: "Data Sync Layer",
        subtitle:
          "Source, mapping, validation, and destination state handled in one sync flow."
      }
    ]
  },
  whatWeBuild: {
    title: "What We Build",
    subtitle: "Not generic templates - systems built around real workflows.",
    items: [
      {
        title: "Custom Web Apps",
        description: "Custom web systems designed around your workflow."
      },
      {
        title: "Operations Panels",
        description:
          "Modern panels for visibility, reporting, and decision-making."
      },
      {
        title: "Workflow Systems",
        description:
          "Workflow layers that simplify approvals, tasks, and repeated processes."
      },
      {
        title: "AI Automations",
        description:
          "Automation layers that reduce repetition and improve operational flow."
      }
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
        detail: "We shape the screens, data structure, and user experience."
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
      "Let's design the right internal tool, workflow system, operations panel, or automation layer for your business.",
    cta: "Book a 15-min Call",
    email: "hello@axoralabs.ai"
  }
};
