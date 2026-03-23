export type StudioNavItem = {
  label: string;
  href: string;
};

export const studioBrand = {
  name: "AxoraLab",
  copyrightLabel: "AxoraLab",
  footerStatement: "Custom software systems shaped around real operations."
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
    eyebrow: "AxoraLab / Premium Software Studio",
    title: "Custom software for teams running real operations.",
    description:
      "AxoraLab designs and builds high-trust web apps, operations panels, workflow systems, and AI automations for companies that need software shaped around the way they actually work.",
    primaryCta: "Start a Project",
    secondaryCta: "What We Build",
    highlights: [
      "Custom Web Apps",
      "Operations Panels",
      "Workflow Systems",
      "AI Automations"
    ]
  },
  whatWeBuild: {
    title: "What We Build",
    subtitle:
      "We build the operational software layer between people, approvals, systems, and action.",
    statement: "No template dashboards. No fake analytics. No agency theater.",
    items: [
      {
        label: "01",
        title: "Custom Web Apps",
        description:
          "Purpose-built web products for internal teams or customer-facing flows where the default SaaS stack is not enough."
      },
      {
        label: "02",
        title: "Operations Panels",
        description:
          "Operational control surfaces designed for routing, visibility, approvals, and day-to-day execution."
      },
      {
        label: "03",
        title: "Workflow Systems",
        description:
          "Structured systems for approvals, handoffs, recurring tasks, escalations, and internal coordination."
      },
      {
        label: "04",
        title: "AI Automations",
        description:
          "Automation layers that connect tools, remove manual repetition, and keep real work moving."
      }
    ]
  },
  process: {
    title: "Process",
    subtitle: "A focused studio rhythm from messy workflow to durable software.",
    steps: [
      {
        label: "01",
        name: "Discover the operating reality",
        detail:
          "We start with the workflow itself: who touches it, where it breaks, and what the system actually needs to support."
      },
      {
        label: "02",
        name: "Architect the product layer",
        detail:
          "We define interfaces, data flows, permissions, integrations, and the product logic that will hold up in real use."
      },
      {
        label: "03",
        name: "Build the system",
        detail:
          "We design and ship the actual software with production-grade engineering, visual discipline, and clear user flows."
      },
      {
        label: "04",
        name: "Refine with live feedback",
        detail:
          "We sharpen the product against real usage so the final system feels cleaner, faster, and easier to operate over time."
      }
    ]
  },
  finalCta: {
    title: "Bring the workflow. We will shape the system.",
    description:
      "If your team is stitching together operations with spreadsheets, chat threads, and workarounds, we can turn that into a product-grade software layer.",
    cta: "Send Project Brief",
    email: "hello@axoralabs.ai",
    fitTitle: "A strong fit when you need",
    fitItems: [
      "a custom system instead of another plugin stack",
      "one operational surface across fragmented tools",
      "workflow clarity, permissions, and automation in one layer"
    ],
    formIntroTitle: "Tell us what needs to exist.",
    formIntroDescription:
      "Share the workflow, bottleneck, or internal product you want to build. We will help define the right software surface for it."
  }
};
