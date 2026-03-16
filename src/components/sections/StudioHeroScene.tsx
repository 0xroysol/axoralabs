"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LocalizedText } from "@/src/components/ui/LocalizedText";

type IconName =
  | "web"
  | "panel"
  | "ai"
  | "crm"
  | "workflow"
  | "team"
  | "reporting"
  | "portal"
  | "data";

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
  }
}

function SurfaceMetric({ label, value, width }: { label: string; value: string; width: string }) {
  return (
    <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
        <LocalizedText text={label} />
      </p>
      <p className="mt-3 font-display text-[1.8rem] font-semibold tracking-[-0.05em] text-white">{value}</p>
      <div className="mt-4 h-1.5 rounded-full bg-white/8">
        <div className="h-1.5 rounded-full bg-white" style={{ width }} />
      </div>
    </div>
  );
}

export function StudioHeroScene() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[760px] lg:max-w-[820px]">
      <div className="absolute inset-x-[12%] top-10 h-64 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.2),transparent_60%)] blur-3xl" />
      <div className="absolute right-8 top-28 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_62%)] blur-3xl" />

      <motion.div
        animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="relative grid gap-4 [perspective:1800px] lg:grid-cols-[1.08fr_0.92fr]"
      >
        <div className="rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,22,37,0.92),rgba(10,13,24,0.98))] p-5 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/50" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            </div>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-slate-300">
              <LocalizedText text="Dashboard" />
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <SurfaceMetric label="Visibility" value="91%" width="78%" />
            <SurfaceMetric label="Workflow" value="128" width="65%" />
            <SurfaceMetric label="Signals" value="24" width="56%" />
          </div>

          <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
            <div className="mb-4 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-slate-400">
              <span>
                <LocalizedText text="Operational flow" />
              </span>
              <span>
                <LocalizedText text="Live data" />
              </span>
            </div>
            <div className="flex items-end gap-2 md:gap-3">
              {[30, 48, 62, 76, 58, 68, 88].map((height, idx) => (
                <div key={height + idx} className="flex h-40 flex-1 items-end rounded-[1rem] bg-white/[0.04] p-2">
                  <div
                    className="w-full rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(135,146,255,0.55))]"
                    style={{ height }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 pt-6 lg:pt-10">
          <motion.div
            animate={reducedMotion ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="origin-bottom-left rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(23,27,44,0.95),rgba(13,17,28,0.98))] p-4 shadow-[0_32px_90px_rgba(0,0,0,0.34)] lg:translate-x-2 lg:rotate-[-3deg]"
          >
            <div className="mb-4 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-slate-400">
              <span>
                <LocalizedText text="Workflow" />
              </span>
              <span>
                <LocalizedText text="CRM" />
              </span>
            </div>
            <div className="space-y-3">
              {[
                ["Lead intake", "Queued", "62%"],
                ["Approval", "Active", "74%"],
                ["Routing", "Ready", "58%"]
              ].map(([title, state, width]) => (
                <div key={title} className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-3.5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm text-slate-100">
                      <LocalizedText text={title} />
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] text-slate-300">
                      <LocalizedText text={state} />
                    </span>
                  </div>
                  <div className="mt-3 h-1.5 rounded-full bg-white/8">
                    <div className="h-1.5 rounded-full bg-white" style={{ width }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            animate={reducedMotion ? undefined : { y: [0, -5, 0] }}
            transition={{ duration: 8.6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="origin-top-right rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(16,20,34,0.95),rgba(10,13,24,0.98))] p-4 shadow-[0_28px_80px_rgba(0,0,0,0.3)] lg:-translate-x-4 lg:rotate-[2.5deg]"
          >
            <div className="mb-4 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-slate-400">
              <span>
                <LocalizedText text="Data Sync" />
              </span>
              <span>
                <LocalizedText text="Integration" />
              </span>
            </div>
            <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-3">
              <svg viewBox="0 0 280 140" className="h-32 w-full">
                <circle cx="42" cy="28" r="10" fill="#0f172a" stroke="rgba(255,255,255,0.75)" />
                <circle cx="138" cy="28" r="10" fill="#0f172a" stroke="rgba(255,255,255,0.75)" />
                <circle cx="234" cy="28" r="10" fill="#0f172a" stroke="rgba(255,255,255,0.75)" />
                <circle cx="90" cy="112" r="10" fill="#0f172a" stroke="rgba(255,255,255,0.75)" />
                <circle cx="186" cy="112" r="10" fill="#0f172a" stroke="rgba(255,255,255,0.75)" />
                <path d="M52 28h76M148 28h76M47 36l34 66M229 36l-34 66M100 112h76" stroke="rgba(255,255,255,0.78)" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Source",
                "Sync",
                "Rules"
              ].map((chip) => (
                <span key={chip} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] text-slate-300">
                  <LocalizedText text={chip} />
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export function StudioPreviewStrip() {
  const surfaces = [
    {
      title: "Dashboard",
      subtitle: "Visibility",
      bars: [68, 84, 60, 76]
    },
    {
      title: "Workflow",
      subtitle: "Approvals",
      bars: [54, 70, 88]
    },
    {
      title: "Data Sync",
      subtitle: "Integrations",
      bars: [76, 52, 64, 88]
    }
  ] as const;

  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {surfaces.map((surface, index) => (
        <motion.article
          key={surface.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: index * 0.07 }}
          whileHover={{ y: -4 }}
          className="overflow-hidden rounded-[2rem] border border-[#e7dece] bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.07)]"
        >
          <div className="rounded-[1.45rem] border border-[#ece3d4] bg-[#f8f3ea] p-4">
            <div className="mb-4 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-slate-400">
              <span>
                <LocalizedText text={surface.title} />
              </span>
              <span>
                <LocalizedText text={surface.subtitle} />
              </span>
            </div>
            <div className={`grid gap-3 ${surface.bars.length === 3 ? "grid-cols-3" : "grid-cols-4"}`}>
              {surface.bars.map((height, itemIndex) => (
                <div key={height + itemIndex} className="flex h-28 items-end rounded-[1rem] bg-white p-2">
                  <div className="w-full rounded-full bg-[linear-gradient(180deg,#111827,#6b7280)]" style={{ height }} />
                </div>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
