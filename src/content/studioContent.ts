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
    eyebrow: "Custom Web Apps • Operations Dashboards • Workflow Systems • AI Automations",
    title: "We design software systems that make complex businesses feel clear.",
    description:
      "Operational dashboards, custom web systems, workflow layers, and AI-ready automations shaped into one modern product experience.",
    primaryCta: "Let's Talk",
    secondaryCta: "See the System Types",
    visualCards: {
      commandDeck: "Command Deck",
      workflowLayer: "Workflow Layer",
      orchestration: "AI Orchestration",
      metrics: ["Signals aligned", "Workflows routed", "Decisions visible"]
    }
  },
  whatWeBuild: {
    title: "What We Build",
    description:
      "Not generic websites. Not templates. We design the actual operational layer your team works inside.",
    items: [
      {
        title: "Custom Web Apps",
        description:
          "Purpose-built internal or client-facing systems shaped around your real process logic."
      },
      {
        title: "Operations Dashboards",
        description:
          "Decision surfaces for reporting, visibility, team rhythm, and operational control."
      },
      {
        title: "Workflow Systems",
        description:
          "Lead flow, approval logic, internal actions, and process movement designed as software."
      },
      {
        title: "AI Automations",
        description:
          "AI-ready automations that summarize, route, trigger, and reduce repetitive operational load."
      }
    ]
  },
  systems: {
    title: "What Kind of Systems We Design",
    description:
      "The goal is not to sell a service list. It is to help you imagine your own business workflow as software.",
    items: [
      "Lead and client management systems",
      "Internal workflow and approval pipelines",
      "Reporting and decision layers",
      "Operations control panels",
      "Customer-facing portals",
      "Data integration backbones",
      "Internal team tools",
      "Custom CRM structures"
    ]
  },
  selectedSystems: {
    title: "Selected System Types",
    items: [
      {
        title: "Lead & Workflow Control Layer",
        description:
          "A single operational system that tracks incoming leads, ownership, next actions, and team visibility without friction.",
        points: ["Lead flow", "Ownership", "Next actions"]
      },
      {
        title: "Decision & Reporting Layer",
        description:
          "A cleaner view for performance, financial visibility, pipeline status, and operational signal quality.",
        points: ["Reporting", "Visibility", "Signal quality"]
      },
      {
        title: "Internal Operations System",
        description:
          "A custom internal layer that brings process states, actions, and recurring operational work into one product surface.",
        points: ["Process states", "Actions", "Recurring ops"]
      }
    ]
  },
  process: {
    title: "How We Work",
    steps: [
      {
        name: "Discover",
        detail: "We map workflow reality, user roles, process friction, and the operational context behind the request."
      },
      {
        name: "Architect",
        detail: "We define the system shape: information hierarchy, screen rhythm, data model, and interaction logic."
      },
      {
        name: "Build",
        detail: "We turn the concept into a working software layer with production-minded frontend and clean system logic."
      },
      {
        name: "Launch",
        detail: "We complete testing, onboarding, rollout, and the practical details that make a system usable."
      },
      {
        name: "Improve",
        detail: "We refine the product around real usage patterns and expand it where the workflow proves the need."
      }
    ]
  },
  why: {
    title: "Why AxoraLab?",
    points: [
      "Tailored systems instead of generic agency output",
      "Interfaces that feel premium and stay usable under real operational load",
      "Clear architecture before visual noise",
      "Fast product thinking with production discipline",
      "A studio lens that can connect workflow, reporting, and automation together"
    ]
  },
  about: {
    title: "About the Studio",
    description:
      "AxoraLab is a small product studio focused on turning operational complexity into software that feels clear, modern, and durable in real use."
  },
  finalCta: {
    title: "Let's shape the next system your team actually wants to use.",
    description:
      "From workflow control and reporting layers to custom internal products and AI-ready operational systems, we can design the right structure for your business.",
    cta: "Book a 15-min Call"
  },
  contact: {
    title: "Tell us what kind of system you need.",
    description:
      "If the workflow already exists in spreadsheets, messages, follow-up steps, or disconnected tools, it can likely be turned into a better software system.",
    label: "What do you want to build?",
    emailLabel: "hello@axoralabs.ai",
    submit: "Send brief"
  }
};
