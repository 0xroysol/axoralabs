export type ServiceSlug =
  | "finance-dashboards"
  | "industry-panels"
  | "ai-assistants"
  | "vibe-coding";

export type FaqItem = {
  question: string;
  answer: string;
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

export const brand = {
  name: "AxoraLab",
  domain: "AxoraLab.ai",
  headline: "Engineering Intelligent Business Systems.",
  subheadline:
    "AI-powered dashboards, finance infrastructure, and intelligent assistants for modern companies.",
  footerStatement:
    "AxoraLab builds AI-powered operating systems for modern companies."
};

export const coreServices = [
  {
    title: "Finance & Accounting Dashboards",
    description:
      "Executive-grade financial visibility with trusted KPI pipelines, variance tracking, and forecasting layers.",
    href: "/services/finance-dashboards"
  },
  {
    title: "Industry Operational Panels",
    description:
      "Role-specific command centers for operations, SLA performance, and revenue-linked delivery throughput.",
    href: "/services/industry-panels"
  },
  {
    title: "AI Assistant Systems",
    description:
      "Private-context copilots for document Q&A, summaries, proposal drafting, and KPI communication workflows.",
    href: "/services/ai-assistants"
  },
  {
    title: "Vibe Coding Education",
    description:
      "Practical upskilling programs that teach teams to design, validate, and ship AI-native internal systems.",
    href: "/services/vibe-coding"
  }
];

export const pricingHighlights = [
  {
    title: "Finance Dashboard MVP",
    price: "Starting from $3,500",
    outcome: "Board-ready financial visibility with reliable KPI definitions."
  },
  {
    title: "Industry Operational Panel",
    price: "Starting from $4,500",
    outcome: "Operational clarity with measurable throughput and SLA gains."
  },
  {
    title: "AI Assistant System",
    price: "Starting from $2,500",
    outcome: "Faster knowledge access and reduced internal response time."
  },
  {
    title: "AI + Dashboard Integrated Suite",
    price: "Starting from $8,000",
    outcome: "Unified intelligence layer for finance, operations, and decisioning."
  },
  {
    title: "Vibe Coding Bootcamp",
    price: "$590 per seat",
    outcome: "Hands-on AI system building capabilities for product and ops teams."
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
      "Align on business objectives, constraints, and decision-critical metrics."
  },
  {
    name: "Architect",
    detail:
      "Design the data model, dashboard logic, and assistant workflow architecture."
  },
  {
    name: "Build",
    detail:
      "Ship a production-grade, secure, and instrumented working system."
  },
  {
    name: "Deploy",
    detail:
      "Launch with enablement, governance controls, and stakeholder onboarding."
  },
  {
    name: "Optimize",
    detail:
      "Continuously improve KPI integrity, automation depth, and business ROI."
  }
];

export const whyAxora = [
  "Finance-grade clarity with executive-ready outputs",
  "Minimal interfaces designed for rapid decisions",
  "AI systems grounded in your internal data context",
  "Production engineering discipline from day one"
];

export const servicePages: Record<ServiceSlug, ServicePageContent> = {
  "finance-dashboards": {
    slug: "finance-dashboards",
    navLabel: "Finance Dashboards",
    heroTitle: "Finance & Accounting Dashboards",
    heroSubtitle:
      "Turn fragmented financial data into decision-grade, board-ready intelligence.",
    forWho: [
      "Founders and CFOs needing monthly and weekly financial truth",
      "Finance teams managing budget variance and runway pressure",
      "Scale-ups preparing for investors or debt financing"
    ],
    deliverables: [
      "Revenue, margin, and cash-flow dashboard layers",
      "Budget vs Actual and department-level drilldowns",
      "Receivables and payables aging views",
      "Forecast model and scenario comparison widgets"
    ],
    kpis: [
      "Monthly Revenue",
      "Net Profit Margin",
      "Cash Runway",
      "Burn Rate",
      "EBITDA Trend"
    ],
    pricingTitle: "Finance Dashboard MVP",
    pricingValue: "Starting from $3,500",
    pricingNote:
      "Designed for immediate leadership visibility and finance operating cadence.",
    engagementModel: [
      "Week 1: metric alignment + data source audit",
      "Week 2-3: dashboard build + QA",
      "Week 4: rollout, enablement, and handoff"
    ],
    faqs: [
      {
        question: "How quickly can we launch the first version?",
        answer:
          "Most teams launch an MVP in 3-4 weeks depending on data readiness and integration scope."
      },
      {
        question: "Can you connect multiple accounting tools?",
        answer:
          "Yes. We can merge accounting, ERP, and spreadsheet sources into a single KPI layer."
      },
      {
        question: "Do you include forecasting?",
        answer:
          "Yes. Baseline forecasting and scenario views are included in standard finance delivery packages."
      },
      {
        question: "Will the dashboard work for non-finance executives?",
        answer:
          "Yes. We design multi-layer views so executives get clarity while finance teams keep depth."
      },
      {
        question: "What support is available after launch?",
        answer:
          "Optimization retainers are available for model refinements, KPI governance, and new modules."
      }
    ]
  },
  "industry-panels": {
    slug: "industry-panels",
    navLabel: "Industry Panels",
    heroTitle: "Industry-Specific Operational Panels",
    heroSubtitle:
      "Build a real-time command center for throughput, quality, and service reliability.",
    forWho: [
      "Operations leaders needing daily performance visibility",
      "Service organizations managing SLA and utilization",
      "Multi-team environments with fragmented operational reporting"
    ],
    deliverables: [
      "Operational KPI cockpit with role-based views",
      "Alert blocks for SLA risk and delivery bottlenecks",
      "Team utilization and client-level profitability overlays",
      "Daily performance digest dashboard"
    ],
    kpis: [
      "Active Orders",
      "SLA Compliance %",
      "Inventory Turnover",
      "Team Utilization Rate",
      "Revenue per Client"
    ],
    pricingTitle: "Industry Operational Panel",
    pricingValue: "Starting from $4,500",
    pricingNote:
      "Structured to reduce operational blind spots and improve execution tempo.",
    engagementModel: [
      "Phase 1: operations mapping and KPI architecture",
      "Phase 2: panel design and data integration",
      "Phase 3: performance governance and iteration"
    ],
    faqs: [
      {
        question: "Can the panel reflect our specific industry workflow?",
        answer:
          "Yes. Each panel is custom-modeled for your process logic and decision cadence."
      },
      {
        question: "Do we get role-based dashboards?",
        answer:
          "Yes. Teams can have specific views while leadership keeps a consolidated executive layer."
      },
      {
        question: "Can we track both operations and revenue outcomes?",
        answer:
          "Yes. We link performance metrics to financial outcomes wherever possible."
      },
      {
        question: "What if our data quality is inconsistent?",
        answer:
          "We include a data quality hardening step and flag confidence levels transparently."
      },
      {
        question: "How do you handle ongoing improvements?",
        answer:
          "We run optimization cycles focused on bottleneck removal and KPI accuracy gains."
      }
    ]
  },
  "ai-assistants": {
    slug: "ai-assistants",
    navLabel: "AI Assistants",
    heroTitle: "AI Assistant Systems",
    heroSubtitle:
      "Deploy trusted internal assistants that accelerate reporting, communication, and execution.",
    forWho: [
      "Teams with high document volume and repetitive reporting tasks",
      "Founders and managers who need faster decision support",
      "Organizations seeking private, context-aware AI workflows"
    ],
    deliverables: [
      "Internal document Q&A assistant",
      "Financial report summary generator",
      "Automated weekly KPI email draft workflow",
      "Proposal and meeting summary automation"
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
      "Built for practical productivity impact with clear governance boundaries.",
    engagementModel: [
      "Sprint 1: use-case prioritization and policy baseline",
      "Sprint 2: assistant build and context wiring",
      "Sprint 3: pilot rollout and workflow refinement"
    ],
    faqs: [
      {
        question: "Can assistants use our internal documents securely?",
        answer:
          "Yes. We design private-context retrieval flows with clear access boundaries."
      },
      {
        question: "Will this replace our team?",
        answer:
          "No. The system is designed to augment teams by removing repetitive communication overhead."
      },
      {
        question: "Can we automate weekly KPI emails?",
        answer:
          "Yes. KPI digest and summary generation workflows are a common deployment pattern."
      },
      {
        question: "Can outputs follow our brand tone?",
        answer:
          "Yes. We configure style, structure, and approval controls for consistent communications."
      },
      {
        question: "How do we measure ROI?",
        answer:
          "We define baseline effort and cycle-time metrics, then track before/after performance changes."
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
    title: "Axora Finance OS",
    summary:
      "Executive financial operating view with recurring close metrics and planning alignment.",
    kpis: [
      { label: "Monthly Revenue", value: "$412,000", delta: "+8.6%" },
      { label: "Net Profit Margin", value: "22.4%", delta: "+2.1pt" },
      { label: "Cash Runway", value: "17.2 mo", delta: "+1.4 mo" },
      { label: "Burn Rate", value: "$48,700", delta: "-6.3%" },
      { label: "AR Aging", value: "34 days", delta: "-4 days" },
      { label: "AP Aging", value: "41 days", delta: "+2 days" },
      { label: "Budget vs Actual", value: "96.8%", delta: "+3.2%" },
      { label: "EBITDA Trend", value: "$78,900", delta: "+11.9%" }
    ],
    lineSeries: [58, 63, 66, 74, 81, 89, 92, 101, 108, 112, 121, 129],
    breakdown: [
      { name: "COGS", share: 37 },
      { name: "Payroll", share: 26 },
      { name: "Sales & Marketing", share: 18 },
      { name: "R&D", share: 12 },
      { name: "Other", share: 7 }
    ]
  },
  operations: {
    title: "Axora Operations Panel",
    summary:
      "Throughput and reliability control tower for service and fulfillment organizations.",
    kpis: [
      { label: "Active Orders", value: "1,284", delta: "+4.9%" },
      { label: "SLA Compliance", value: "97.2%", delta: "+1.8pt" },
      { label: "Inventory Turnover", value: "6.4x", delta: "+0.7x" },
      { label: "Team Utilization", value: "84%", delta: "+5pt" },
      { label: "Revenue per Client", value: "$5,740", delta: "+9.4%" }
    ]
  },
  assistant: {
    title: "Axora AI Assistant",
    summary:
      "Private-context assistant workflows for internal intelligence and communication velocity.",
    features: [
      "Internal document Q&A",
      "Financial report summary generation",
      "Automated KPI weekly email draft",
      "Proposal draft automation",
      "Meeting summary extraction"
    ]
  }
};

export const aboutContent = {
  title: "We build intelligent operating systems for ambitious companies.",
  text: "AxoraLab.ai is a studio focused on AI-powered business systems, finance infrastructure, and execution intelligence. We partner with leadership teams to convert fragmented data into trusted decision architecture and practical automation. Every delivery is shaped for measurable outcomes, enterprise trust, and long-term operating leverage."
};

export const serviceTypeOptions = [
  "Finance Dashboards",
  "Industry Panels",
  "AI Assistants",
  "Vibe Coding",
  "Integrated Suite"
];
