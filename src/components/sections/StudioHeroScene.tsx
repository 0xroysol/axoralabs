"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { PointerEvent } from "react";
import { LocalizedText } from "@/src/components/ui/LocalizedText";
import { studioHomeContent } from "@/src/content/studioContent";

const orbitMetrics = [
  ["Signals", "24", 72],
  ["Queues", "08", 48],
  ["Velocity", "91%", 86]
] as const;

const flowBlocks = ["Input", "Routing", "Review", "Live"] as const;

export function StudioHeroScene() {
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [10, -10]), {
    stiffness: 90,
    damping: 18,
    mass: 0.9
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-14, 14]), {
    stiffness: 90,
    damping: 18,
    mass: 0.9
  });

  const mainX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-14, 14]), {
    stiffness: 80,
    damping: 18
  });
  const mainY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-8, 8]), {
    stiffness: 80,
    damping: 18
  });
  const backX = useSpring(useTransform(pointerX, [-0.5, 0.5], [10, -10]), {
    stiffness: 70,
    damping: 16
  });
  const frontY = useTransform(pointerY, [-0.5, 0.5], [-12, 12]);

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
    <div className="relative mx-auto w-full max-w-[980px]">
      <div className="studio-orb left-[8%] top-[4%] h-44 w-44 opacity-70" />
      <div className="studio-orb right-[6%] top-[16%] h-72 w-72 opacity-45" />
      <div className="studio-orb bottom-[10%] left-[24%] h-56 w-56 opacity-35" />

      <motion.div
        className="studio-perspective relative min-h-[420px] md:min-h-[620px]"
        onPointerMove={handleMove}
        onPointerLeave={reset}
        style={reducedMotion ? undefined : { rotateX, rotateY }}
      >
        <motion.div
          className="absolute left-[6%] top-[7%] hidden h-[78%] w-[76%] rounded-[2.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(13,15,27,0.75),rgba(8,9,18,0.25))] shadow-[0_60px_140px_rgba(0,0,0,0.42)] md:block"
          style={reducedMotion ? undefined : { x: backX, y: mainY }}
        />

        <motion.div
          className="absolute inset-x-0 top-[6%] z-20 rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,14,24,0.96),rgba(8,9,17,0.99))] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.55)] md:p-6"
          style={reducedMotion ? undefined : { x: mainX, y: mainY }}
          animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                <LocalizedText text={studioHomeContent.hero.visualCards.mainTitle} />
              </p>
              <p className="mt-2 text-sm text-slate-400">
                <LocalizedText text="Operational visibility layer" />
              </p>
            </div>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-slate-300">Layer 01</span>
          </div>

          <div className="grid gap-3 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[1.8rem] border border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(126,143,255,0.2),transparent_34%),rgba(255,255,255,0.03)] p-4 md:p-5">
              <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-500">
                <span><LocalizedText text="Signal map" /></span>
                <span>Q3</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {orbitMetrics.map(([label, value, width]) => (
                  <div key={label} className="rounded-[1.35rem] border border-white/8 bg-[#0d1120]/85 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                      <LocalizedText text={label} />
                    </p>
                    <p className="mt-3 font-display text-[1.95rem] font-semibold tracking-[-0.06em] text-white">{value}</p>
                    <div className="mt-4 h-1.5 rounded-full bg-white/5">
                      <div className="h-1.5 rounded-full bg-[linear-gradient(90deg,#ffffff,#8aa0ff)]" style={{ width: `${width}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-[1.45rem] border border-white/8 bg-black/20 p-4">
                <div className="grid grid-cols-7 gap-2">
                  {[34, 48, 56, 72, 78, 66, 84].map((height, index) => (
                    <div key={height + index} className="flex items-end justify-center rounded-[1rem] bg-white/[0.03] px-1 pb-1 pt-8">
                      <div className="w-full rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(139,157,255,0.38))]" style={{ height }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-3">
              <div className="rounded-[1.8rem] border border-white/8 bg-white/[0.03] p-4 md:p-5">
                <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-500">
                  <span><LocalizedText text={studioHomeContent.hero.visualCards.sideTitle} /></span>
                  <span>Layer 02</span>
                </div>
                <div className="space-y-3">
                  {["Summary trigger", "Context route", "Approval chain"].map((item, index) => (
                    <div key={item} className="rounded-[1.2rem] border border-white/8 bg-[#0c1020]/85 p-3.5">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm text-slate-200"><LocalizedText text={item} /></span>
                        <span className="h-2.5 w-2.5 rounded-full bg-white/80 shadow-[0_0_16px_rgba(255,255,255,0.4)]" />
                      </div>
                      <div className="mt-3 h-1.5 rounded-full bg-white/5">
                        <div className="h-1.5 rounded-full bg-white/60" style={{ width: `${58 + index * 12}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-4 md:p-5">
                <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-500">
                  <span><LocalizedText text={studioHomeContent.hero.visualCards.bottomTitle} /></span>
                  <span>Layer 03</span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {flowBlocks.map((item, index) => (
                    <div key={item} className="rounded-[1.15rem] border border-white/8 bg-white/[0.04] p-3.5">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                        <LocalizedText text={item} />
                      </p>
                      <div className="mt-4 h-10 rounded-[0.95rem] bg-white/[0.04]" />
                      <div className="mt-3 h-1.5 rounded-full bg-white/5">
                        <div className="h-1.5 rounded-full bg-[linear-gradient(90deg,#ffffff,#8fa8ff)]" style={{ width: `${44 + index * 12}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute -bottom-2 left-[8%] z-30 rounded-[1.5rem] border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-xl md:left-[14%]"
          style={reducedMotion ? undefined : { y: frontY }}
          animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 5.7, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[11px] uppercase tracking-[0.18em] text-slate-300">
            <LocalizedText text="Orchestrated workflows" />
          </span>
        </motion.div>

        <div className="absolute -bottom-3 right-[4%] z-30 flex flex-wrap justify-end gap-2 md:right-[10%]">
          {studioHomeContent.hero.visualCards.metrics.map((metric, index) => (
            <motion.span
              key={metric}
              className="studio-chip-dark"
              animate={reducedMotion ? undefined : { y: [0, -5, 0] }}
              transition={{ duration: 5.1 + index * 0.25, repeat: Infinity, ease: "easeInOut", delay: index * 0.12 }}
            >
              <LocalizedText text={metric} />
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
