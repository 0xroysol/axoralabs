"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { PointerEvent } from "react";
import { LocalizedText } from "@/src/components/ui/LocalizedText";
import { studioHomeContent } from "@/src/content/studioContent";

const bars = [48, 64, 58, 72, 68, 82];
const kpiCards = [
  ["Pipeline", "128", 62],
  ["Revenue", "$84k", 78],
  ["Tasks", "42", 46]
] as const;
const pipelineRows = [
  ["Qualified", "24"],
  ["In review", "12"],
  ["Waiting", "08"]
] as const;

export function StudioHeroScene() {
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [10, -10]), {
    stiffness: 110,
    damping: 18,
    mass: 0.8
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 110,
    damping: 18,
    mass: 0.8
  });
  const translateX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 90,
    damping: 20
  });
  const translateY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-8, 8]), {
    stiffness: 90,
    damping: 20
  });
  const sidePanelX = useTransform(pointerX, [-0.5, 0.5], [8, -8]);
  const mobileCardX = useTransform(pointerX, [-0.5, 0.5], [-14, 14]);

  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reducedMotion) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    pointerX.set(x);
    pointerY.set(y);
  };

  const resetTilt = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div className="relative mx-auto max-w-[680px]">
      <div className="studio-ambient-orb left-[6%] top-[9%] h-36 w-36 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.95),rgba(255,255,255,0.05)_58%)]" />
      <div className="studio-ambient-orb bottom-[10%] right-[2%] h-56 w-56 bg-[radial-gradient(circle_at_30%_30%,rgba(15,23,42,0.18),rgba(15,23,42,0.02)_62%)]" />
      <motion.div
        className="studio-perspective relative"
        onPointerMove={handleMove}
        onPointerLeave={resetTilt}
        style={
          reducedMotion
            ? undefined
            : {
                rotateX,
                rotateY
              }
        }
      >
        <motion.div
          className="studio-card studio-depth-grid relative overflow-hidden rounded-[2.2rem] p-4 md:p-5"
          style={reducedMotion ? undefined : { x: translateX, y: translateY }}
        >
          <div className="grid gap-5 md:grid-cols-[1.08fr_0.92fr]">
            <motion.div
              className="studio-panel relative rounded-[1.7rem] bg-[#fffdfa] p-4 md:p-5"
              animate={reducedMotion ? undefined : { y: [0, -4, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="mb-5 flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-700">
                  <LocalizedText text={studioHomeContent.hero.visualCards.dashboard} />
                </p>
                <span className="studio-pill">
                  <LocalizedText text="Live" />
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {kpiCards.map(([label, value, width]) => (
                  <div key={label} className="rounded-[1.4rem] border border-[#ece4d9] bg-white p-3 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-slate-400">
                      <LocalizedText text={label} />
                    </p>
                    <p className="mt-2 font-display text-[1.7rem] font-semibold tracking-[-0.04em] text-slate-950">
                      {value}
                    </p>
                    <div className="mt-3 h-1.5 rounded-full bg-[#efe8db]">
                      <div className="h-1.5 rounded-full bg-slate-950" style={{ width: `${width}%` }} />
                    </div>
                  </div>
                ))}
              </div>

                <div className="mt-4 rounded-[1.4rem] border border-[#ece4d9] bg-[#faf7f1] p-4">
                  <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-slate-400">
                    <span>
                      <LocalizedText text="Overview" />
                    </span>
                    <span>Q2</span>
                  </div>
                <div className="flex items-end justify-between gap-2">
                  {bars.map((bar, index) => (
                    <div key={bar + index} className="flex flex-1 items-end justify-center">
                      <div
                        className="w-full max-w-[28px] rounded-t-[1rem] bg-[linear-gradient(180deg,#111827,#334155)] shadow-[0_10px_22px_rgba(15,23,42,0.16)]"
                        style={{ height: `${bar}px` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="relative flex min-h-[420px] flex-col justify-between gap-5">
              <motion.div
                className="rounded-[1.7rem] border border-[#111827] bg-slate-950 p-4 text-white shadow-[0_26px_56px_rgba(15,23,42,0.24)]"
                animate={reducedMotion ? undefined : { y: [0, 6, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                style={reducedMotion ? undefined : { x: sidePanelX }}
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-white">
                    <LocalizedText text={studioHomeContent.hero.visualCards.pipeline} />
                  </p>
                  <span className="rounded-full border border-white/10 px-2 py-1 text-[11px] text-slate-300">CRM</span>
                </div>
                <div className="mt-4 space-y-3">
                  {pipelineRows.map(([label, value]) => (
                    <div key={label} className="rounded-[1.2rem] border border-white/10 bg-white/5 p-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-300">
                          <LocalizedText text={label} />
                        </span>
                        <span className="font-semibold text-white">{value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="ml-auto w-[76%] rounded-[1.9rem] border border-[#e7decf] bg-white p-3 shadow-[0_22px_42px_rgba(15,23,42,0.1)]"
                animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 6.6, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
                style={reducedMotion ? undefined : { x: mobileCardX }}
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                  <LocalizedText text={studioHomeContent.hero.visualCards.mobile} />
                </p>
                <div className="mt-3 rounded-[1.5rem] border border-[#ece4d9] bg-[#faf7f1] p-3">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="h-8 w-8 rounded-2xl bg-slate-950" />
                    <div className="flex-1 space-y-2">
                      <div className="h-2 rounded-full bg-slate-900/85" />
                      <div className="h-2 w-3/5 rounded-full bg-slate-300" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-14 rounded-[1.2rem] border border-[#ebe3d6] bg-white" />
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-12 rounded-[1rem] border border-[#ebe3d6] bg-white" />
                      <div className="h-12 rounded-[1rem] border border-[#ebe3d6] bg-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="studio-pill studio-pill-dark">
              <LocalizedText text={studioHomeContent.hero.visualCards.automation} />
            </span>
            {studioHomeContent.hero.visualCards.metrics.map((metric, index) => (
              <motion.span
                key={metric}
                className="studio-pill"
                animate={reducedMotion ? undefined : { y: [0, -3, 0] }}
                transition={{ duration: 4.6 + index * 0.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.18 }}
              >
                <LocalizedText text={metric} />
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
