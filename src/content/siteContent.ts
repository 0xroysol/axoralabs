export type ServiceSlug =
  | "finance-dashboards"
  | "industry-panels"
  | "ai-assistants"
  | "vibe-coding";

export type FaqItem = {
  question: string;
  answer: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type ServicePageContent = {
  slug: ServiceSlug;
  navLabel: string;
  heroTitle: string;
  heroSubtitle: string;
  forWho: string[];
  deliverables: string[];
  kpis: string[];
  pricingTitle: string;
  pricingValue: string;
  pricingNote: string;
  engagementModel: string[];
  faqs: FaqItem[];
};

export type PricingHighlight = {
  title: string;
  price: string;
  outcome: string;
  includes?: string[];
};

export const brand = {
  name: "AxoraLab",
  domain: "AxoraLab.ai",
  headline: "Financial Clarity for Digital Marketing Agencies.",
  subheadline:
    "Track cash flow, profitability, payroll ratio, and overdue invoices in one place — with Axora Finance OS.",
  segmentBadge: "Built for 5–20 person agencies",
  heroPrimaryCta: "Explore Agency Demo",
  heroSecondaryCta: "Book a 15-min Call",
  footerStatement:
    "AxoraLab builds AI-powered operating systems for digital marketing agencies."
};

export const productNavLinks: NavItem[] = [
  { label: "Axora Finance OS (Agency Edition)", href: "/demos#axora-finance-os" },
  { label: "Axora Operations Panel (Agency Edition)", href: "/demos#axora-operations-panel" },
  { label: "Axora AI Assistant", href: "/demos#axora-ai-assistant" }
];

export const serviceNavLinks: NavItem[] = [
  { label: "Custom Dashboards", href: "/services/finance-dashboards" },
  { label: "Integration & Support", href: "/services/industry-panels" },
  { label: "Vibe Coding Education", href: "/services/vibe-coding" }
];

export const companyNavLinks: NavItem[] = [
  { label: "Demos", href: "/demos" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const coreServices = [
  {
    title: "Custom Dashboards",
    description:
      "Finance and delivery dashboards tailored to agency workflows, margin visibility, and owner-level decisions.",
    href: "/services/finance-dashboards"
  },
  {
    title: "Integration & Support",
    description:
      "Bring invoices, bank activity, expenses, and project operations into one integrated reporting layer.",
    href: "/services/industry-panels"
  },
  {
    title: "AI Assistant Systems",
    description:
      "Automate proposal drafts, KPI summaries, and internal knowledge Q&A for faster team execution.",
    href: "/services/ai-assistants"
  },
  {
    title: "Vibe Coding Education",
    description:
      "Practical upskilling for agency teams that want to build and ship AI-native internal tools.",
    href: "/services/vibe-coding"
  }
];

export const homeProductSpotlight = {
  eyebrow: "Product: Axora Finance OS",
  title: "Axora Finance OS (Agency Edition)",
  subtitle: "Know exactly which clients make you money.",
  features: [
    "Payroll Ratio",
    "Client Concentration",
    "Revenue Mix",
    "Receivables Aging"
  ],
  cta: "See Finance OS Demo",
  href: "/demos#axora-finance-os"
};

export const homePageContent = {
  servicesEyebrow: "Core Services",
  servicesTitle: "Agency-focused service tracks",
  demosEyebrow: "Demo Preview",
  demosTitle: "Agency edition product previews",
  demoCardCta: "Request this demo",
  demoSectionCta: "Explore Agency Demo",
  processEyebrow: "Engagement Process",
  processTitle: "Agency rollout in 5 practical steps",
  whyEyebrow: "Why AxoraLab",
  whyTitle: "Built for agency financial and operational clarity",
  finalEyebrow: "Ready to build",
  finalTitle: "Build your agency operating layer in weeks, not quarters.",
  finalDescription:
    "Designed for digital marketing agencies and flexible for other service-based teams.",
  finalPrimaryCta: "Book a 15-min Call",
  finalSecondaryCta: "Explore Agency Demo"
};

export const demosPageContent = {
  eyebrow: "Demos",
  title: "Agency-ready product demos for finance, operations, and AI workflows",
  description:
    "Explore how Axora products help 5–20 person digital marketing agencies operate with clarity.",
  financeBadge: "Axora Finance OS",
  requestDemoCta: "Request this demo"
};

export const servicesPageContent = {
  eyebrow: "Services",
  title: "Agency-focused systems for finance clarity and operational control",
  description:
    "Built for digital marketing agencies and adaptable for other service-based teams."
};

export const processPageContent = {
  eyebrow: "Process",
  title: "A practical 5-step rollout for agency systems",
  description:
    "From data connection to monthly optimization, we keep delivery tight and measurable for agency teams."
};

export const pricingHighlights: PricingHighlight[] = [
  {
    title: "Agency Finance MVP",
    price: "Starting from $3,500",
    outcome: "Financial command view for agency owners and finance leads.",
    includes: [
      "Payroll ratio + revenue mix",
      "Client revenue breakdown",
      "Receivables aging + alerts",
      "12-month trends"
    ]
  },
  {
    title: "Agency Growth Suite",
    price: "Starting from $4,500",
    outcome: "Growth-layer package for planning, forecasting, and delivery visibility.",
    includes: [
      "Budget vs actual",
      "Forecast extension",
      "Ops panel add-on"
    ]
  },
  {
    title: "AI Assistant System",
    price: "Starting from $2,500",
    outcome:
      "Automate agency proposals, weekly KPI updates, and internal knowledge flow."
  },
  {
    title: "AI + Dashboard Integrated Suite",
    price: "Starting from $8,000",
    outcome: "Unified intelligence layer across finance, operations, and execution."
  },
  {
    title: "Vibe Coding Bootcamp",
    price: "$590 per seat",
    outcome: "Hands-on AI system building capability for agency product and ops teams."
  },
  {
    title: "Corporate Training Workshop",
    price: "Starting from $2,500",
    outcome: "Team-wide framework for AI-native execution and governance."
  }
];

export const processSteps = [
  {
    name: "Discover",
    detail:
      "Connect data sources and align goals across invoices, bank activity, and expenses."
  },
  {
    name: "Architect",
    detail:
      "Define KPI map and decision screens for owners, ops, and finance."
  },
  {
    name: "Build",
    detail:
      "Build dashboard layers, alerts, and weekly reporting flows."
  },
  {
    name: "Deploy",
    detail: "Roll out with onboarding, training, and handoff."
  },
  {
    name: "Optimize",
    detail:
      "Run monthly improvement cycles for KPI quality and operating speed."
  }
];

export const whyAxora = [
  "Move beyond spreadsheet chaos and manual reconciliation.",
  "Reduce receivables risk before it impacts payroll.",
  "Understand true client profitability, not just topline revenue.",
  "Monitor payroll pressure with ratio-based visibility."
];

export const servicePages: Record<ServiceSlug, ServicePageContent> = {
  "finance-dashboards": {
    slug: "finance-dashboards",
    navLabel: "Finance Dashboards",
    heroTitle: "Agency Finance MVP",
    heroSubtitle:
      "Financial clarity stack for digital marketing agencies and adaptable service-based teams.",
    forWho: [
      "Agency founders and finance leads needing weekly financial truth",
      "Teams managing payroll pressure and overdue receivables",
      "5–20 person agencies preparing for stable growth"
    ],
    deliverables: [
      "Payroll ratio + revenue mix dashboard",
      "Client revenue breakdown and concentration view",
      "Receivables aging with overdue alert layer",
      "12-month trend and monthly close view"
    ],
    kpis: [
      "Monthly Revenue",
      "Net Margin",
      "Payroll Ratio",
      "Receivables Aging",
      "Cash Forecast (30d)"
    ],
    pricingTitle: "Agency Finance MVP",
    pricingValue: "Starting from $3,500",
    pricingNote:
      "Premium base package for agency finance visibility and faster monthly decisions.",
    engagementModel: [
      "Week 1: source mapping + KPI alignment",
      "Week 2-3: dashboard implementation + alerts",
      "Week 4: onboarding, training, and handoff"
    ],
    faqs: [
      {
        question: "How fast can an agency go live?",
        answer:
          "Most agencies launch an MVP in 3-4 weeks depending on data readiness and tool access."
      },
      {
        question: "Can you connect invoicing and bank data together?",
        answer:
          "Yes. We combine invoicing, banking, and expense data into one decision-ready finance layer."
      },
      {
        question: "Do you include receivables and overdue visibility?",
        answer:
          "Yes. Receivables aging and overdue alerts are core parts of the agency package."
      },
      {
        question: "Can founders and account managers use the same system?",
        answer:
          "Yes. We configure role-aware views for owner-level clarity and team-level follow-up."
      },
      {
        question: "What happens after launch?",
        answer:
          "We offer monthly optimization cycles for KPI governance, alert tuning, and new modules."
      }
    ]
  },
  "industry-panels": {
    slug: "industry-panels",
    navLabel: "Industry Panels",
    heroTitle: "Agency Growth Suite",
    heroSubtitle:
      "Operational panel extension for agency throughput, delivery health, and planning alignment.",
    forWho: [
      "Agency ops leads needing clear delivery visibility",
      "Teams balancing utilization with service quality",
      "Service-based teams tracking revenue and operations together"
    ],
    deliverables: [
      "Budget vs actual view with forecast extension",
      "Project throughput and delivery health panels",
      "Utilization snapshot and SLA-style task tracker",
      "Ops add-on linked with finance metrics"
    ],
    kpis: [
      "Utilization Snapshot",
      "Project Throughput",
      "Delivery Health",
      "SLA Task Compliance",
      "Revenue per Client"
    ],
    pricingTitle: "Agency Growth Suite",
    pricingValue: "Starting from $4,500",
    pricingNote:
      "Growth layer for agencies that need planning, delivery, and finance in one command view.",
    engagementModel: [
      "Phase 1: workflow mapping and KPI architecture",
      "Phase 2: panel build and integration",
      "Phase 3: rollout governance and iteration"
    ],
    faqs: [
      {
        question: "Can the panel match our agency workflow?",
        answer:
          "Yes. We model screens around your service model, delivery cadence, and team structure."
      },
      {
        question: "Do we get a light operations layer or full PM replacement?",
        answer:
          "This is a focused executive layer, not a heavy PM replacement system."
      },
      {
        question: "Can we tie operations to finance outcomes?",
        answer:
          "Yes. We connect delivery and utilization signals to revenue and margin context."
      },
      {
        question: "What if our operational data is noisy?",
        answer:
          "We add a hardening pass and confidence indicators before scaling decision automation."
      },
      {
        question: "Is ongoing support available?",
        answer:
          "Yes. Monthly support is available for optimization, extensions, and governance updates."
      }
    ]
  },
  "ai-assistants": {
    slug: "ai-assistants",
    navLabel: "AI Assistants",
    heroTitle: "AI Assistant Systems",
    heroSubtitle:
      "Agency-ready assistants for proposal drafts, KPI communication, and internal knowledge access.",
    forWho: [
      "Agency teams with repetitive reporting and proposal workflows",
      "Founders and managers needing faster weekly updates",
      "Service teams that want private, context-aware automation"
    ],
    deliverables: [
      "Proposal and report draft assistant",
      "Weekly KPI summary generation",
      "Internal document Q&A",
      "Meeting and update summary automation"
    ],
    kpis: [
      "Response Time Reduction",
      "Weekly Reporting Hours Saved",
      "Draft-to-Approval Cycle Time",
      "Knowledge Retrieval Accuracy",
      "Automation Adoption Rate"
    ],
    pricingTitle: "AI Assistant System",
    pricingValue: "Starting from $2,500",
    pricingNote:
      "Built for agency communication velocity, consistent output quality, and practical ROI.",
    engagementModel: [
      "Sprint 1: use-case prioritization and guardrails",
      "Sprint 2: assistant setup and context wiring",
      "Sprint 3: pilot rollout and optimization"
    ],
    faqs: [
      {
        question: "Can assistants use our agency docs securely?",
        answer:
          "Yes. We design private-context retrieval with role-aware access boundaries."
      },
      {
        question: "Will this replace our team?",
        answer:
          "No. It removes repetitive workload so your team can focus on higher-value work."
      },
      {
        question: "Can we automate weekly KPI updates?",
        answer:
          "Yes. Weekly KPI digest and summary workflows are core assistant use cases."
      },
      {
        question: "Can outputs follow our tone and structure?",
        answer:
          "Yes. We configure style, structure, and review checkpoints for consistency."
      },
      {
        question: "How do we measure ROI?",
        answer:
          "We baseline reporting effort and cycle times, then track before/after improvements."
      }
    ]
  },
  "vibe-coding": {
    slug: "vibe-coding",
    navLabel: "Vibe Coding",
    heroTitle: "Vibe Coding Education",
    heroSubtitle:
      "Upskill teams to design and ship AI-native internal systems with speed and rigor.",
    forWho: [
      "Product, ops, and finance teams adopting AI workflows",
      "Leadership teams building AI-native operating culture",
      "Organizations seeking practical, non-theoretical training"
    ],
    deliverables: [
      "Vibe Coding Bootcamp curriculum and exercises",
      "Hands-on dashboard and assistant prototyping labs",
      "Applied governance, evaluation, and rollout playbooks",
      "Team enablement materials and operating templates"
    ],
    kpis: [
      "AI Workflow Adoption",
      "Internal Tool Prototypes Shipped",
      "Time-to-Prototype",
      "Team Confidence Score",
      "Post-Training Execution Velocity"
    ],
    pricingTitle: "Vibe Coding Bootcamp",
    pricingValue: "$590 per seat",
    pricingNote:
      "Structured for practical outcomes and immediate implementation momentum.",
    engagementModel: [
      "Module 1: foundations and opportunity mapping",
      "Module 2: live build sprints",
      "Module 3: rollout strategy and measurement"
    ],
    faqs: [
      {
        question: "Is this for technical teams only?",
        answer:
          "No. Programs are designed for cross-functional teams, including operations and finance."
      },
      {
        question: "How long is the bootcamp?",
        answer:
          "Standard bootcamp tracks run 1-2 days with optional follow-up implementation sessions."
      },
      {
        question: "Can the workshop be customized for our business model?",
        answer:
          "Yes. We tailor exercises around your workflows, data, and real internal use cases."
      },
      {
        question: "Do participants build real artifacts?",
        answer:
          "Yes. Participants leave with prototype dashboards, assistant flows, and reusable templates."
      },
      {
        question: "Do you provide enterprise training options?",
        answer:
          "Yes. Corporate training workshops start from $2,500 with scoped customization."
      }
    ]
  }
};

export const demoData = {
  finance: {
    title: "Axora Finance OS — Agency Edition",
    summary:
      "Agency financial clarity layer across cash flow, margin, payroll, and receivables.",
    bullets: [
      "Monthly Revenue, Net Margin, Payroll Ratio",
      "Client Concentration & Revenue per Client",
      "Receivables Aging & Overdue Alerts",
      "Simple Cash Forecast (30 days)"
    ],
    kpis: [
      { label: "Monthly Revenue", value: "$214,200", delta: "+7.4%" },
      { label: "Net Margin", value: "19.8%", delta: "+1.6pt" },
      { label: "Payroll Ratio", value: "42%", delta: "-2.1pt" },
      { label: "Client Concentration", value: "31%", delta: "-4.0pt" },
      { label: "Revenue per Client", value: "$8,940", delta: "+6.5%" },
      { label: "Receivables Aging", value: "29 days", delta: "-5 days" },
      { label: "Overdue Alerts", value: "6", delta: "-3" },
      { label: "Cash Forecast (30d)", value: "$86,400", delta: "+9.2%" }
    ],
    lineSeries: [58, 62, 67, 71, 74, 79, 83, 88, 92, 96, 101, 109],
    breakdown: [
      { name: "Payroll", share: 42 },
      { name: "Media Spend", share: 24 },
      { name: "Tools", share: 13 },
      { name: "Operations", share: 14 },
      { name: "Other", share: 7 }
    ]
  },
  operations: {
    title: "Axora Operations Panel — Agency Edition",
    summary:
      "Operational visibility layer for utilization, delivery health, and client work cadence.",
    bullets: [
      "Utilization snapshot (high-level)",
      "Project throughput & delivery health",
      "SLA-style task tracking (light)"
    ],
    kpis: [
      { label: "Utilization Snapshot", value: "81%", delta: "+3pt" },
      { label: "Project Throughput", value: "27 / wk", delta: "+4" },
      { label: "Delivery Health", value: "92%", delta: "+2pt" },
      { label: "SLA Task Compliance", value: "95%", delta: "+1.1pt" },
      { label: "Team Capacity Balance", value: "Stable", delta: "On target" }
    ]
  },
  assistant: {
    title: "Axora AI Assistant",
    summary:
      "Private assistant workflows designed for agency communication and reporting speed.",
    features: [
      "Proposal & report drafts",
      "Weekly KPI summaries",
      "Internal doc Q&A"
    ]
  }
};

export const aboutContent = {
  title:
    "We build AI-powered operating layers for digital marketing agencies and service-based teams.",
  text: "AxoraLab.ai is a product and systems studio focused on financial clarity, operational visibility, and practical AI automation. We help 5–20 person agencies move from scattered spreadsheets to reliable decision infrastructure. Every delivery is designed for measurable outcomes, team adoption, and sustained execution quality."
};

export const serviceTypeOptions = [
  "Agency Finance MVP",
  "Agency Growth Suite",
  "AI Assistant System",
  "Integration & Support",
  "Vibe Coding Education",
  "Integrated Suite"
];
