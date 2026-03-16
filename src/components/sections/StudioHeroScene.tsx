"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { PointerEvent } from "react";
import { LocalizedText } from "@/src/components/ui/LocalizedText";
import { studioHomeContent } from "@/src/content/studioContent";

function MiniIcon({ type }: { type: "grid" | "pulse" | "path" | "spark" | "stack" | "portal" | "route" | "chart" | "control" | "nodes" }) {
  const cls = "h-5 w-5 text-white/80";
  switch (type) {
    case "grid":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <rect x="3" y="3" width="7" height="7" rx="2" stroke="currentColor" />
          <rect x="14" y="3" width="7" height="7" rx="2" stroke="currentColor" />
          <rect x="3" y="14" width="7" height="7" rx="2" stroke="currentColor" />
          <rect x="14" y="14" width="7" height="7" rx="2" stroke="currentColor" />
        </svg>
      );
    case "pulse":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <path d="M3 12h4l2-4 4 8 2-4h6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "path":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <path d="M6 6h4v4H6zM14 14h4v4h-4z" stroke="currentColor" />
          <path d="M10 8h4a2 2 0 0 1 2 2v4" stroke="currentColor" strokeLinecap="round" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3z" stroke="currentColor" />
        </svg>
      );
    case "stack":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <path d="M12 4l8 4-8 4-8-4 8-4zM4 12l8 4 8-4M4 16l8 4 8-4" stroke="currentColor" strokeLinecap="round" />
        </svg>
      );
    case "portal":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" />
          <path d="M9 12h6M12 9l3 3-3 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "route":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <circle cx="6" cy="6" r="2" stroke="currentColor" />
          <circle cx="18" cy="18" r="2" stroke="currentColor" />
          <path d="M8 6h4a4 4 0 0 1 4 4v6" stroke="currentColor" strokeLinecap="round" />
        </svg>
      );
    case "chart":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <path d="M4 19h16M7 15l3-3 3 2 4-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "control":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeLinecap="round" />
          <circle cx="9" cy="7" r="2" fill="currentColor" />
          <circle cx="15" cy="12" r="2" fill="currentColor" />
          <circle cx="11" cy="17" r="2" fill="currentColor" />
        </svg>
      );
    case "nodes":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <circle cx="6" cy="12" r="2" stroke="currentColor" />
          <circle cx="18" cy="6" r="2" stroke="currentColor" />
          <circle cx="18" cy="18" r="2" stroke="currentColor" />
          <path d="M8 12h4M14.5 7.5l-2 3M14.5 16.5l-2-3" stroke="currentColor" strokeLinecap="round" />
        </svg>
      );
  }
}

export function StudioHeroScene() {
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [8, -8]), {
    stiffness: 85,
    damping: 18,
    mass: 0.9
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 85,
    damping: 18,
    mass: 0.9
  });
  const layerX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-14, 14]), {
    stiffness: 80,
    damping: 18
  });
  const layerY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-10, 10]), {
    stiffness: 80,
    damping: 18
  });
  const rearX = useSpring(useTransform(pointerX, [-0.5, 0.5], [10, -10]), {
    stiffness: 70,
    damping: 16
  });

  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const reset = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div className="relative mx-auto w-full max-w-[1100px]">
      <div className="studio-orb left-[4%] top-[14%] h-52 w-52 opacity-65" />
      <div className="studio-orb right-[7%] top-[10%] h-80 w-80 opacity-40" />
      <div className="studio-orb bottom-[12%] left-[30%] h-64 w-64 opacity-35" />

      <motion.div
        className="studio-perspective relative min-h-[420px] md:min-h-[660px]"
        onPointerMove={handleMove}
        onPointerLeave={reset}
        style={reducedMotion ? undefined : { rotateX, rotateY }}
      >
        <motion.div
          className="absolute left-[8%] top-[10%] hidden h-[74%] w-[68%] rounded-[2.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(12,13,24,0.6),rgba(7,8,16,0.2))] shadow-[0_80px_180px_rgba(0,0,0,0.42)] md:block"
          style={reducedMotion ? undefined : { x: rearX, y: layerY }}
        />

        <motion.div
          className="absolute inset-x-[3%] top-[8%] z-20 rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,14,24,0.97),rgba(7,8,16,0.99))] p-4 shadow-[0_45px_140px_rgba(0,0,0,0.58)] md:inset-x-[10%] md:p-6"
          style={reducedMotion ? undefined : { x: layerX, y: layerY }}
          animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                <LocalizedText text={studioHomeContent.hero.visualCards.mainTitle} />
              </p>
              <p className="mt-2 text-sm text-slate-400">
                <LocalizedText text="AxoraLab Studio Layer" />
              </p>
            </div>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-slate-300">
              <LocalizedText text="Live stack" />
            </span>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[1.9rem] border border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(128,144,255,0.2),transparent_34%),rgba(255,255,255,0.03)] p-4 md:p-5">
              <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-500">
                <span>
                  <LocalizedText text="Dashboard panel" />
                </span>
                <span>01</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["Revenue", "$184K"],
                  ["Active ops", "28"],
                  ["Risk", "Low"]
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[1.2rem] border border-white/8 bg-[#0e1220]/90 p-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                      <LocalizedText text={label} />
                    </p>
                    <p className="mt-3 font-display text-[1.8rem] font-semibold tracking-[-0.05em] text-white">{value}</p>
                    <div className="mt-4 h-1.5 rounded-full bg-white/5">
                      <div className="h-1.5 rounded-full bg-[linear-gradient(90deg,#ffffff,#8ea5ff)]" style={{ width: label === "Risk" ? "38%" : "72%" }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-[1.35rem] border border-white/8 bg-black/20 p-4">
                <div className="flex items-end gap-2 md:gap-3">
                  {[32, 44, 52, 64, 76, 68, 82].map((height, idx) => (
                    <div key={height + idx} className="flex h-36 flex-1 items-end rounded-[1rem] bg-white/[0.03] p-2">
                      <div className="w-full rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(135,151,255,0.32))]" style={{ height }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[1.9rem] border border-white/8 bg-white/[0.03] p-4 md:p-5">
                <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-500">
                  <span><LocalizedText text={studioHomeContent.hero.visualCards.sideTitle} /></span>
                  <span>02</span>
                </div>
                <div className="space-y-3">
                  {[
                    ["Lead intake", "Queued"],
                    ["Ops routing", "Running"],
                    ["Approval sync", "Ready"]
                  ].map(([title, status], index) => (
                    <div key={title} className="rounded-[1.2rem] border border-white/8 bg-[#0d1020]/86 p-3.5">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm text-slate-200">
                          <LocalizedText text={title} />
                        </span>
                        <span className="rounded-full border border-white/10 px-2 py-1 text-[10px] text-slate-300">
                          <LocalizedText text={status} />
                        </span>
                      </div>
                      <div className="mt-3 h-1.5 rounded-full bg-white/5">
                        <div className="h-1.5 rounded-full bg-white/65" style={{ width: `${56 + index * 14}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.9rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-4 md:p-5">
                <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-500">
                  <span><LocalizedText text={studioHomeContent.hero.visualCards.bottomTitle} /></span>
                  <span>03</span>
                </div>
                <div className="relative overflow-hidden rounded-[1.4rem] border border-white/8 bg-[#0c101e]/88 p-4">
                  <svg viewBox="0 0 320 160" className="h-40 w-full">
                    <defs>
                      <linearGradient id="flow" x1="0" x2="1">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.92" />
                        <stop offset="100%" stopColor="#8da4ff" stopOpacity="0.72" />
                      </linearGradient>
                    </defs>
                    <circle cx="52" cy="36" r="11" fill="#0f1424" stroke="url(#flow)" />
                    <circle cx="160" cy="36" r="11" fill="#0f1424" stroke="url(#flow)" />
                    <circle cx="268" cy="36" r="11" fill="#0f1424" stroke="url(#flow)" />
                    <circle cx="106" cy="122" r="11" fill="#0f1424" stroke="url(#flow)" />
                    <circle cx="214" cy="122" r="11" fill="#0f1424" stroke="url(#flow)" />
                    <path d="M63 36h86M171 36h86M59 44l40 66M261 44l-40 66M117 122h86" stroke="url(#flow)" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute -bottom-2 left-[10%] z-30 hidden rounded-[1.4rem] border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-xl md:block"
          animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[11px] uppercase tracking-[0.18em] text-slate-300">
            <LocalizedText text="System orchestration" />
          </span>
        </motion.div>

        <div className="absolute -bottom-3 right-[4%] z-30 flex flex-wrap justify-end gap-2 md:right-[10%]">
          {studioHomeContent.hero.visualCards.metrics.map((metric, index) => (
            <motion.span
              key={metric}
              className="studio-chip-dark"
              animate={reducedMotion ? undefined : { y: [0, -4, 0] }}
              transition={{ duration: 5 + index * 0.25, repeat: Infinity, ease: "easeInOut", delay: index * 0.15 }}
            >
              <LocalizedText text={metric} />
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export { MiniIcon };
