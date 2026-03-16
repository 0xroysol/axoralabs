"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { PointerEvent } from "react";
import { LocalizedText } from "@/src/components/ui/LocalizedText";
import { studioHomeContent } from "@/src/content/studioContent";

const commandMetrics = [
  ["Signals", "48", 64],
  ["Queues", "12", 48],
  ["Velocity", "84%", 84]
] as const;

const workflowStates = [
  ["Intake", "Open"],
  ["Routing", "Active"],
  ["Approval", "Pending"],
  ["Output", "Ready"]
] as const;

export function StudioHeroScene() {
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [9, -9]), {
    stiffness: 110,
    damping: 20,
    mass: 0.9
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-13, 13]), {
    stiffness: 110,
    damping: 20,
    mass: 0.9
  });
  const sceneX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 90,
    damping: 20
  });
  const sceneY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-8, 8]), {
    stiffness: 90,
    damping: 20
  });
  const frontX = useTransform(pointerX, [-0.5, 0.5], [-18, 18]);
  const rearX = useTransform(pointerX, [-0.5, 0.5], [14, -14]);
  const chipY = useTransform(pointerY, [-0.5, 0.5], [-10, 10]);

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

  const reset = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div className="relative mx-auto max-w-[760px]">
      <div className="studio-cinema-glow left-[10%] top-[12%] h-44 w-44 bg-[radial-gradient(circle_at_center,rgba(112,128,255,0.18),rgba(112,128,255,0.02)_68%)]" />
      <div className="studio-cinema-glow bottom-[8%] right-[4%] h-60 w-60 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),rgba(255,255,255,0.01)_70%)]" />

      <motion.div
        className="studio-perspective relative min-h-[560px] md:min-h-[640px]"
        onPointerMove={handleMove}
        onPointerLeave={reset}
        style={reducedMotion ? undefined : { rotateX, rotateY }}
      >
        <motion.div
          className="absolute inset-x-[6%] top-[10%] rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,22,35,0.94),rgba(8,10,18,0.98))] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
          style={reducedMotion ? undefined : { x: rearX, y: sceneY }}
        >
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
              <LocalizedText text={studioHomeContent.hero.visualCards.workflowLayer} />
            </p>
            <span className="rounded-full border border-white/10 px-2 py-1 text-[11px] text-slate-300">Layer 02</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {workflowStates.map(([label, value]) => (
              <div key={label} className="rounded-[1.3rem] border border-white/8 bg-white/[0.04] p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-slate-300">{label}</span>
                  <span className="rounded-full border border-white/10 px-2 py-1 text-[11px] text-white">{value}</span>
                </div>
                <div className="mt-4 h-1.5 rounded-full bg-white/5">
                  <div className="h-1.5 rounded-full bg-white/60" style={{ width: `${label === "Approval" ? 46 : 72}%` }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-x-0 top-[19%] z-20 rounded-[2.2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(14,17,28,0.96),rgba(7,9,16,0.99))] p-5 shadow-[0_40px_100px_rgba(0,0,0,0.45)]"
          style={reducedMotion ? undefined : { x: sceneX, y: sceneY }}
          animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                <LocalizedText text={studioHomeContent.hero.visualCards.commandDeck} />
              </p>
              <p className="mt-2 text-sm text-slate-300">
                <LocalizedText text="Operational visibility layer" />
              </p>
            </div>
            <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-slate-300">Layer 01</span>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {commandMetrics.map(([label, value, width]) => (
              <div key={label} className="rounded-[1.4rem] border border-white/8 bg-white/[0.05] p-4 backdrop-blur-sm">
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  <LocalizedText text={label} />
                </p>
                <p className="mt-3 font-display text-[2rem] font-semibold tracking-[-0.05em] text-white">{value}</p>
                <div className="mt-4 h-1.5 rounded-full bg-white/5">
                  <div
                    className="h-1.5 rounded-full bg-[linear-gradient(90deg,#ffffff,#8fa8ff)]"
                    style={{ width: `${width}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[1.6rem] border border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(143,168,255,0.14),transparent_42%),rgba(255,255,255,0.04)] p-4">
              <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-400">
                <span>
                  <LocalizedText text="Signal map" />
                </span>
                <span>Q2</span>
              </div>
              <div className="flex items-end gap-2">
                {[56, 78, 62, 94, 76, 88, 72].map((height, index) => (
                  <div key={height + index} className="flex flex-1 items-end justify-center">
                    <div
                      className="w-full max-w-[24px] rounded-t-[1rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(120,139,255,0.45))] shadow-[0_12px_28px_rgba(114,131,255,0.18)]"
                      style={{ height: `${height}px` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.04] p-4">
              <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-400">
                <span>
                  <LocalizedText text={studioHomeContent.hero.visualCards.orchestration} />
                </span>
                <span>Layer 03</span>
              </div>
              <div className="space-y-3">
                {["Summary trigger", "Context route", "Approval chain"].map((item, index) => (
                  <div key={item} className="rounded-[1.15rem] border border-white/8 bg-white/[0.04] p-3">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm text-slate-200">
                        <LocalizedText text={item} />
                      </span>
                      <span className="h-2.5 w-2.5 rounded-full bg-white/70 shadow-[0_0_16px_rgba(255,255,255,0.35)]" />
                    </div>
                    <div className="mt-3 h-1.5 rounded-full bg-white/5">
                      <div className="h-1.5 rounded-full bg-white/65" style={{ width: `${64 + index * 8}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-[9%] left-[10%] z-30 rounded-[1.4rem] border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl"
          style={reducedMotion ? undefined : { x: frontX, y: chipY }}
          animate={reducedMotion ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        >
          <span className="text-[11px] uppercase tracking-[0.18em] text-slate-300">
            <LocalizedText text={studioHomeContent.hero.visualCards.orchestration} />
          </span>
        </motion.div>

        <div className="absolute bottom-[4%] right-[6%] z-30 flex flex-wrap justify-end gap-2">
          {studioHomeContent.hero.visualCards.metrics.map((metric, index) => (
            <motion.span
              key={metric}
              className="studio-chip-dark"
              style={reducedMotion ? undefined : { y: chipY }}
              animate={reducedMotion ? undefined : { y: [0, -4, 0] }}
              transition={{ duration: 4.8 + index * 0.3, repeat: Infinity, ease: "easeInOut", delay: index * 0.18 }}
            >
              <LocalizedText text={metric} />
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
