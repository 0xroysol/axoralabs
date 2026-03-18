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
  { label: "Interfaces", href: "/#showcase" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" }
];

export const studioFooterLinks: StudioNavItem[] = [
  { label: "What We Build", href: "/#what-we-build" },
  { label: "Process", href: "/#process" },
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
          "Queue, routing, approval states, and task flow in one controlled surface."
      },
      {
        title: "Operations Console",
        subtitle:
          "Records, filters, detail context, and recent actions gathered in one operational view."
      },
      {
        title: "Data Sync Layer",
        subtitle:
          "Source, mapping, validation, and destination state handled in one visible flow."
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
        description: "Modern control surfaces for visibility, tracking, and decisions."
      },
      {
        title: "Workflow Systems",
        description:
          "Workflow layers that simplify approvals, tasks, and repeated processes."
      },
      {
        title: "AI Automations",
        description:
          "Automation layers that reduce repetition and keep operations moving."
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
  finalCta: {
    title: "Let's build your next system together.",
    description:
      "Let's design the right internal tool, workflow system, operations panel, or automation layer for your business.",
    cta: "Request a Call",
    email: "hello@axoralabs.ai",
    formIntroTitle: "Tell us what you want to build.",
    formIntroDescription:
      "If the workflow already lives in spreadsheets, messages, approvals, or disconnected tools, it can likely become a better software system."
  }
};
