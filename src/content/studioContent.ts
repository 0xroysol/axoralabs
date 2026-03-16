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
    title: "We build software systems that bring structure to complex operations.",
    description:
      "From internal tools and reporting layers to workflow control and AI-ready automation, we shape the product layer your team actually works inside.",
    primaryCta: "Let's Talk",
    secondaryCta: "Explore the System Types",
    metaPills: ["Operational Clarity", "Product-grade UX", "AI-ready Layers"],
    visualCards: {
      mainTitle: "System Core",
      sideTitle: "Automation Logic",
      bottomTitle: "Decision Layer",
      metrics: ["Processes routed", "Signals visible", "Actions synced"]
    }
  },
  whatWeBuild: {
    title: "What We Build",
    description:
      "AxoraLab is not a template agency. We design the actual software layer behind your workflow, reporting, and operations.",
    items: [
      {
        title: "Custom Web Apps",
        description:
          "Purpose-built software products for internal teams, client operations, or business-specific workflows."
      },
      {
        title: "Operations Dashboards",
        description:
          "Decision surfaces for visibility, reporting, performance tracking, and operational rhythm."
      },
      {
        title: "Workflow Systems",
        description:
          "Process flows, approvals, follow-up loops, and internal action layers designed as software."
      },
      {
        title: "AI Automations",
        description:
          "AI-ready automation layers that summarize, route, trigger, and reduce repetitive operational work."
      }
    ]
  },
  systems: {
    title: "What Kind of Systems We Design",
    description:
      "The point is not to list services. It is to help you see how your business logic can become a clean software system.",
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
          "A single operating surface for lead ownership, follow-up steps, handoffs, and internal momentum.",
        points: ["Ownership", "Status logic", "Next actions"]
      },
      {
        title: "Decision & Reporting Layer",
        description:
          "A modern panel for operational visibility, reporting, performance signals, and key business metrics.",
        points: ["Reporting", "Visibility", "Decision signals"]
      },
      {
        title: "Internal Operations System",
        description:
          "A custom internal system that keeps tasks, actions, recurring workflows, and team coordination in one place.",
        points: ["Coordination", "Task rhythm", "Operational flow"]
      }
    ]
  },
  process: {
    title: "How We Work",
    steps: [
      {
        name: "Discover",
        detail: "We map the workflow, user roles, process bottlenecks, and the data reality behind the request."
      },
      {
        name: "Architect",
        detail: "We define screen structure, interaction logic, system model, and the product shape around the operation."
      },
      {
        name: "Build",
        detail: "We design and build the working software layer with production-minded frontend and durable logic."
      },
      {
        name: "Launch",
        detail: "We complete testing, onboarding, rollout, and the details that make the system usable in practice."
      },
      {
        name: "Improve",
        detail: "We refine the system around real usage and expand it where the workflow proves the value."
      }
    ]
  },
  why: {
    title: "Why AxoraLab?",
    points: [
      "Tailored systems instead of generic agency output",
      "Interfaces that feel modern, controlled, and actually usable",
      "Fast product thinking with production discipline",
      "Architecture that can expand as the business evolves",
      "Workflow, reporting, and automation considered together"
    ]
  },
  about: {
    title: "About the Studio",
    description:
      "AxoraLab is a small product studio focused on turning operational complexity into software that feels clear, modern, and durable in real use."
  },
  finalCta: {
    title: "Let's shape the next system your team will rely on.",
    description:
      "From workflow control and reporting layers to custom internal tools and AI-ready operational systems, we can design the right structure for your business.",
    cta: "Book a 15-min Call"
  },
  contact: {
    title: "Tell us what kind of system you need.",
    description:
      "If the workflow already lives across spreadsheets, messages, approvals, or disconnected tools, it can likely become a clearer software system.",
    label: "What do you want to build?",
    emailLabel: "hello@axoralabs.ai",
    submit: "Send brief"
  }
};
