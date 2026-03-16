"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LocalizedText } from "@/src/components/ui/LocalizedText";

type IconName =
  | "web"
  | "panel"
  | "mobile"
  | "ai"
  | "crm"
  | "inventory"
  | "workflow"
  | "team"
  | "reporting"
  | "portal"
  | "data"
  | "control";

export function StudioIcon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  switch (name) {
    case "web":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" />
          <path d="M3 9h18" stroke="currentColor" />
        </svg>
      );
    case "panel":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M4 19V9M10 19V5M16 19v-8M20 19v-4" stroke="currentColor" strokeLinecap="round" />
        </svg>
      );
    case "mobile":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="7" y="3" width="10" height="18" rx="3" stroke="currentColor" />
          <path d="M10 18h4" stroke="currentColor" strokeLinecap="round" />
        </svg>
      );
    case "ai":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" stroke="currentColor" />
        </svg>
      );
    case "crm":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="8" cy="8" r="3" stroke="currentColor" />
          <circle cx="17" cy="8" r="3" stroke="currentColor" />
          <path d="M4.5 19c.7-2.6 2.6-4 5.5-4s4.8 1.4 5.5 4M14 19c.5-1.7 1.8-2.8 4-3.1" stroke="currentColor" strokeLinecap="round" />
        </svg>
      );
    case "inventory":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 4l7 4-7 4-7-4 7-4zM5 12l7 4 7-4M5 16l7 4 7-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "workflow":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="6" cy="6" r="2" stroke="currentColor" />
          <circle cx="18" cy="12" r="2" stroke="currentColor" />
          <circle cx="6" cy="18" r="2" stroke="currentColor" />
          <path d="M8 6h4a4 4 0 0 1 4 4v0M8 18h4a4 4 0 0 0 4-4v0" stroke="currentColor" strokeLinecap="round" />
        </svg>
      );
    case "team":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="8" cy="9" r="2.5" stroke="currentColor" />
          <circle cx="16" cy="9" r="2.5" stroke="currentColor" />
          <path d="M5 18c.4-2.2 1.9-3.5 4-3.5S12.6 15.8 13 18M11 18c.4-2 1.8-3.2 4-3.5" stroke="currentColor" strokeLinecap="round" />
        </svg>
      );
    case "reporting":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M4 19h16M7 15l3-3 3 2 4-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "portal":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" />
          <path d="M9 12h6M12 9l3 3-3 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "data":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <ellipse cx="12" cy="6" rx="6" ry="2.5" stroke="currentColor" />
          <path d="M6 6v6c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V6M6 12v6c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-6" stroke="currentColor" />
        </svg>
      );
    case "control":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeLinecap="round" />
          <circle cx="9" cy="7" r="2" fill="currentColor" />
          <circle cx="15" cy="12" r="2" fill="currentColor" />
          <circle cx="11" cy="17" r="2" fill="currentColor" />
        </svg>
      );
  }
}

export function StudioHeroScene() {
  const reducedMotion = useReducedMotion();
  const kpiCards = [
    ["Revenue", "$142K"],
    ["Tasks", "124"],
    ["SLA", "94%"]
  ] as const;
  const workflowCards = [
    ["Lead intake", "Queued"],
    ["Owner routing", "Active"],
    ["Approval", "Ready"]
  ] as const;
  const chips = ["Ops panel", "Workflow", "Mobile", "Automation"] as const;

  return (
    <div className="relative mx-auto w-full max-w-[760px] lg:max-w-[860px]">
      <motion.div
        animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="relative rounded-[2rem] border border-[#e4ddd0] bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.08)] md:p-5"
      >
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
          </div>
          <span className="rounded-full border border-[#ece4d7] px-3 py-1 text-[11px] text-slate-500">
            <LocalizedText text="Operations Panel" />
          </span>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[1.55rem] border border-[#efe7db] bg-[#fbf8f3] p-4">
              <div className="grid gap-3 sm:grid-cols-3">
                {kpiCards.map(([label, value]) => (
                  <div key={label} className="rounded-[1.2rem] border border-[#ece4d8] bg-white p-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                      <LocalizedText text={label} />
                    </p>
                    <p className="mt-3 font-display text-[1.7rem] font-semibold tracking-[-0.05em] text-slate-950">{value}</p>
                  <div className="mt-4 h-1.5 rounded-full bg-[#ede6da]">
                    <div className="h-1.5 rounded-full bg-slate-900" style={{ width: label === "SLA" ? "72%" : "84%" }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-[1.3rem] border border-[#ece4d8] bg-white p-4">
              <div className="mb-4 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-slate-400">
                <span>
                  <LocalizedText text="Quarter overview" />
                </span>
                <span>
                  <LocalizedText text="Live data" />
                </span>
              </div>
              <div className="flex items-end gap-2 md:gap-3">
                {[28, 40, 52, 64, 58, 72, 86].map((height, idx) => (
                  <div key={height + idx} className="flex h-36 flex-1 items-end rounded-[1rem] bg-[#f6f1e9] p-2">
                    <div className="w-full rounded-full bg-[linear-gradient(180deg,#111827,#4b5563)]" style={{ height }} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.55rem] border border-[#ece4d8] bg-[#fbf8f3] p-4">
              <div className="mb-4 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-slate-400">
                <span>
                  <LocalizedText text="Workflow" />
                </span>
                <span>
                  <LocalizedText text="CRM" />
                </span>
              </div>
              <div className="space-y-3">
                {workflowCards.map(([title, state], index) => (
                  <div key={title} className="rounded-[1.15rem] border border-[#ece4d8] bg-white p-3.5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm text-slate-800">
                        <LocalizedText text={title} />
                      </span>
                      <span className="rounded-full border border-[#ece4d8] px-2 py-1 text-[10px] text-slate-500">
                        <LocalizedText text={state} />
                      </span>
                    </div>
                    <div className="mt-3 h-1.5 rounded-full bg-[#eee7db]">
                      <div className="h-1.5 rounded-full bg-slate-900" style={{ width: `${60 + index * 12}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.55rem] border border-[#ece4d8] bg-[#fbf8f3] p-4">
              <div className="mb-4 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-slate-400">
                <span>
                  <LocalizedText text="Automation" />
                </span>
                <span>
                  <LocalizedText text="Graph" />
                </span>
              </div>
              <div className="rounded-[1.2rem] border border-[#ece4d8] bg-white p-3">
                <svg viewBox="0 0 280 140" className="h-36 w-full">
                  <circle cx="42" cy="26" r="10" fill="#fff" stroke="#0f172a" />
                  <circle cx="140" cy="26" r="10" fill="#fff" stroke="#0f172a" />
                  <circle cx="238" cy="26" r="10" fill="#fff" stroke="#0f172a" />
                  <circle cx="91" cy="112" r="10" fill="#fff" stroke="#0f172a" />
                  <circle cx="189" cy="112" r="10" fill="#fff" stroke="#0f172a" />
                  <path d="M52 26h78M150 26h78M47 34l35 66M233 34l-35 66M101 112h78" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute -right-3 top-10 hidden w-44 rounded-[1.6rem] border border-[#e8e0d4] bg-white p-3 shadow-[0_24px_60px_rgba(15,23,42,0.08)] md:block"
      >
        <div className="rounded-[1.3rem] border border-[#ece4d8] bg-[#fbf8f3] p-3">
          <div className="mb-3 text-[11px] uppercase tracking-[0.18em] text-slate-400">
            <LocalizedText text="Mobile" />
          </div>
          <div className="mx-auto h-44 w-24 rounded-[1.5rem] border border-[#e7dece] bg-white p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
            <div className="h-full rounded-[1.1rem] bg-[#f7f3eb] p-2">
              <div className="h-16 rounded-[0.8rem] bg-white" />
              <div className="mt-2 space-y-2">
                <div className="h-3 rounded-full bg-white" />
                <div className="h-3 rounded-full bg-white" />
                <div className="h-3 rounded-full bg-white" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="absolute -bottom-4 left-4 flex flex-wrap gap-2 md:left-10">
        {chips.map((chip) => (
          <span key={chip} className="rounded-full border border-[#e5ddcf] bg-white px-3 py-2 text-[11px] font-medium text-slate-600 shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
            <LocalizedText text={chip} />
          </span>
        ))}
      </div>
    </div>
  );
}
