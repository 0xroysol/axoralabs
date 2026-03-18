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
  en: {
    title: "AxoraLab | Custom Software Systems & Operations Panels",
    description:
      "AxoraLab is a premium software studio building custom web apps, operations panels, workflow systems, and AI automations."
  }
} as const;

export const studioNavLinks: StudioNavItem[] = [
  { label: "What We Build", href: "/#what-we-build" },
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
      "From internal tools to workflow systems and AI automations, we design software that makes operations cleaner, faster, and more scalable.",
    primaryCta: "Start a Project",
    secondaryCta: "See What We Build"
  },
  whatWeBuild: {
    title: "What We Build",
    subtitle: "Tailored systems designed around real workflows — not generic templates.",
    items: [
      {
        title: "Custom Web Apps",
        description:
          "Custom software experiences built around your internal or customer-facing workflows."
      },
      {
        title: "Operations Panels",
        description:
          "Clean control surfaces for visibility, decisions, and operational flow."
      },
      {
        title: "Workflow Systems",
        description:
          "Systems that simplify approvals, routing, recurring tasks, and team coordination."
      },
      {
        title: "AI Automations",
        description:
          "Automation layers that reduce manual repetition and improve process speed."
      }
    ]
  },
  process: {
    title: "How We Work",
    steps: [
      {
        name: "Discover",
        detail: "We understand the workflow, context, and friction points."
      },
      {
        name: "Architect",
        detail: "We define the system structure, experience, and operational logic."
      },
      {
        name: "Build",
        detail: "We design and develop the software layer with production quality in mind."
      },
      {
        name: "Refine",
        detail: "We improve the system based on real use and iteration."
      }
    ]
  },
  finalCta: {
    title: "Let’s build your next system.",
    description:
      "Whether you need an internal tool, workflow layer, operations panel, or automation system, we can design the right software for your business.",
    cta: "Request a Call",
    email: "hello@axoralabs.ai",
    formIntroTitle: "Tell us what you want to build.",
    formIntroDescription:
      "Briefly describe the workflow, internal tool, or operational layer you want to improve and we will help shape the right system."
  }
};
