"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LocalizedText } from "@/src/components/ui/LocalizedText";

const slowFloat = {
  duration: 11,
  repeat: Infinity,
  ease: "easeInOut" as const
};

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
      <LocalizedText text={text} />
    </p>
  );
}

function QueueRow({ title, state, detail }: { title: string; state: string; detail: string }) {
  return (
    <div className="rounded-[1.1rem] border border-white/8 bg-[#0d1326]/90 px-4 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-100">
            <LocalizedText text={title} />
          </p>
          <p className="mt-1 text-xs text-slate-500">
            <LocalizedText text={detail} />
          </p>
        </div>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium text-slate-300">
          <LocalizedText text={state} />
        </span>
      </div>
    </div>
  );
}

function MetaField({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1rem] border border-white/8 bg-white/[0.03] px-3.5 py-3">
      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
        <LocalizedText text={label} />
      </p>
      <p className="mt-2 text-sm text-slate-100">
        <LocalizedText text={value} />
      </p>
    </div>
  );
}

function ActivityLine({ time, text }: { time: string; text: string }) {
  return (
    <div className="flex min-w-[220px] items-start gap-3 rounded-[1rem] border border-white/8 bg-[#0d1326]/88 px-3.5 py-3">
      <span className="mt-0.5 rounded-full border border-white/10 bg-white/[0.05] px-2 py-1 text-[10px] font-medium text-slate-400">
        {time}
      </span>
      <p className="text-sm text-slate-300">
        <LocalizedText text={text} />
      </p>
    </div>
  );
}

function ShowcaseFrame({ title, subtitle, children, className = "" }: { title: string; subtitle: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(12,16,31,0.96),rgba(7,9,18,0.99))] p-5 shadow-[0_35px_90px_rgba(0,0,0,0.36)] ${className}`}>
      <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)]" />
      <SectionLabel text={title} />
      <p className="mt-2 max-w-[20ch] text-sm text-slate-400">
        <LocalizedText text={subtitle} />
      </p>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function HologramCube() {
  const reducedMotion = useReducedMotion();

  const tiles = [
    "bg-[linear-gradient(180deg,#181b22_0%,#0a0d13_100%)]",
    "bg-[linear-gradient(180deg,#1e2128_0%,#0b0d12_100%)]",
    "bg-[linear-gradient(180deg,#161920_0%,#06080d_100%)]",
    "bg-[linear-gradient(180deg,#12151c_0%,#06080d_100%)]",
    "bg-[linear-gradient(180deg,#0d1017_0%,#030507_100%)]",
    "bg-[linear-gradient(180deg,#171a21_0%,#07090d_100%)]",
    "bg-[linear-gradient(180deg,#11141b_0%,#05070b_100%)] bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.08),transparent_40%),linear-gradient(180deg,#11141b_0%,#05070b_100%)]",
    "bg-[linear-gradient(180deg,#0c0f15_0%,#020305_100%)]",
    "bg-[linear-gradient(180deg,#171a20_0%,#06080c_100%)] bg-[radial-gradient(circle_at_75%_22%,rgba(255,255,255,0.12),transparent_28%),linear-gradient(180deg,#171a20_0%,#06080c_100%)]"
  ];

  return (
    <motion.div
      animate={
        reducedMotion
          ? undefined
          : {
              y: [0, -10, 0],
              rotateZ: [-10, -8, -10],
              rotateX: [57, 60, 57]
            }
      }
      transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      className="pointer-events-none absolute right-0 top-[-84px] z-30 hidden origin-center [perspective:2200px] xl:block"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative h-[300px] w-[300px] [transform:rotateX(58deg)_rotateY(-6deg)_rotateZ(-33deg)]" style={{ transformStyle: "preserve-3d" }}>
        <div className="absolute inset-[20%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_68%)] blur-2xl" />
        <div className="absolute left-8 top-10 h-44 w-44 rounded-[2rem] bg-black/60 blur-2xl" style={{ transform: "translateZ(-80px) translateX(50px) translateY(58px)" }} />
        <div className="absolute left-[78px] top-[218px] h-10 w-40 rounded-full bg-black/70 blur-xl" />

        <div className="grid grid-cols-3 gap-3" style={{ transformStyle: "preserve-3d" }}>
          {tiles.map((tile, index) => (
            <div
              key={index}
              className={`relative h-[82px] w-[82px] rounded-[1.05rem] border border-white/8 shadow-[0_18px_30px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)] ${tile}`}
              style={{
                transform: `translateZ(${index % 3 === 1 ? 8 : index === 8 ? 12 : 0}px)`,
                transformStyle: "preserve-3d"
              }}
            >
              <div className="absolute inset-[1px] rounded-[0.95rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_42%)]" />
              <div className="absolute inset-x-2 bottom-2 h-[2px] rounded-full bg-[linear-gradient(90deg,rgba(255,255,255,0.0),rgba(255,255,255,0.35),rgba(255,255,255,0.0))]" />
              {(index === 6 || index === 8) && (
                <div className="absolute inset-0 rounded-[0.95rem] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.04),transparent_56%),radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:auto,8px_8px] opacity-60" />
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function StudioHeroScene() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[860px] lg:max-w-[980px] xl:min-h-[760px]">
      <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(77,163,255,0.2),transparent_62%)] blur-3xl" />
      <div className="absolute right-8 top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(119,101,255,0.16),transparent_66%)] blur-3xl" />
      <div className="absolute left-12 bottom-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_70%)] blur-3xl" />
      <HologramCube />

      <motion.div
        animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
        transition={slowFloat}
        className="relative z-10 pt-10 xl:mr-20 xl:pt-40 [perspective:2400px]"
      >
        <div className="relative rounded-[2.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,16,32,0.96),rgba(7,9,18,0.99))] p-4 shadow-[0_50px_180px_rgba(0,0,0,0.55)] md:p-5 lg:[transform:rotateX(9deg)_rotateY(-14deg)] xl:max-w-[760px]">
          <div className="absolute inset-0 rounded-[2.8rem] bg-[radial-gradient(circle_at_15%_15%,rgba(77,163,255,0.08),transparent_22%),radial-gradient(circle_at_80%_18%,rgba(119,101,255,0.1),transparent_24%)]" />

          <div className="relative rounded-[2.3rem] border border-white/8 bg-[linear-gradient(180deg,rgba(7,10,21,0.96),rgba(5,6,10,0.99))] p-4 md:p-5">
            <div className="flex items-center justify-between gap-4 border-b border-white/8 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/28" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/14" />
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                  <LocalizedText text="Operations command surface" />
                </span>
                <span className="rounded-full border border-[#4da3ff]/20 bg-[#4da3ff]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#d7e9ff]">
                  <LocalizedText text="Live system" />
                </span>
              </div>
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="relative rounded-[1.9rem] border border-white/8 bg-white/[0.025] p-4">
                <div className="flex items-center justify-between gap-3">
                  <SectionLabel text="Priority queue" />
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Open queue",
                      "Pending review",
                      "Assigned"
                    ].map((chip) => (
                      <span key={chip} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium text-slate-400">
                        <LocalizedText text={chip} />
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid gap-3">
                  <QueueRow title="New partner application" state="Needs review" detail="Triggered by contact form" />
                  <QueueRow title="Approval chain for contract update" state="Waiting approval" detail="Mapped to operations owner" />
                  <QueueRow title="Data routing issue in intake form" state="Assigned" detail="Validation warning in sync rules" />
                  <QueueRow title="Record merge request" state="Review ready" detail="Queued for final operations review" />
                </div>

                <motion.div
                  animate={reducedMotion ? undefined : { y: [0, 5, 0] }}
                  transition={{ ...slowFloat, duration: 12, delay: 0.4 }}
                  className="pointer-events-none absolute -right-8 top-16 hidden w-[220px] rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.96),rgba(10,14,28,0.98))] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.42)] xl:block"
                >
                  <SectionLabel text="Inspector" />
                  <div className="mt-3 rounded-[1rem] border border-white/8 bg-white/[0.03] p-3">
                    <p className="text-sm font-medium text-slate-100">
                      <LocalizedText text="Record inspector" />
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      <LocalizedText text="Approval path" />
                    </p>
                  </div>
                  <div className="mt-3 grid gap-3">
                    <MetaField label="Assigned owner" value="Operations lead" />
                    <MetaField label="Due today" value="Validate contract route" />
                  </div>
                </motion.div>
              </div>

              <motion.div
                animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
                transition={{ ...slowFloat, duration: 13, delay: 0.8 }}
                className="rounded-[1.9rem] border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.94),rgba(10,14,28,0.99))] p-4 shadow-[0_26px_90px_rgba(0,0,0,0.34)] lg:translate-y-6"
              >
                <SectionLabel text="Data sync layer" />
                <div className="mt-4 rounded-[1.25rem] border border-white/8 bg-white/[0.03] p-3.5">
                  <div className="grid gap-3">
                    {[
                      ["Source", "HubSpot form records"],
                      ["Mapping", "Owner and status normalization"],
                      ["Destination", "Operations command surface"]
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-[1rem] border border-white/8 bg-[#0b1020] px-3 py-3">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                          <LocalizedText text={label} />
                        </p>
                        <p className="mt-2 text-sm text-slate-300">
                          <LocalizedText text={value} />
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-3 rounded-[1.2rem] border border-white/8 bg-white/[0.03] p-3.5">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                    <LocalizedText text="Event stream" />
                  </p>
                  <div className="mt-3 space-y-2.5 text-sm text-slate-300">
                    <p><LocalizedText text="Payload received 2 minutes ago" /></p>
                    <p><LocalizedText text="2 fields require validation review" /></p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              animate={reducedMotion ? undefined : { y: [0, 4, 0] }}
              transition={{ ...slowFloat, duration: 12.5, delay: 0.3 }}
              className="mt-4 rounded-[1.9rem] border border-white/8 bg-white/[0.025] p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <SectionLabel text="Activity stream" />
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                  <LocalizedText text="Sync health" />
                </span>
              </div>
              <div className="mt-4 flex gap-3 overflow-hidden">
                <ActivityLine time="09:14" text="Lead created from contact form" />
                <ActivityLine time="09:21" text="Approval request routed to operations" />
                <ActivityLine time="09:37" text="Record synced into reporting layer" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function StudioShowcaseModules() {
  return (
    <div className="grid gap-6 xl:grid-cols-3">
      <motion.article
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="[perspective:1800px]"
      >
        <ShowcaseFrame title="Workflow Control" subtitle="Queue, approval state, and task routing in one controlled surface." className="xl:[transform:rotateY(-7deg)]">
          <div className="rounded-[1.35rem] border border-white/8 bg-white/[0.03] p-3.5">
            <div className="grid gap-3">
              {[
                ["Queued", "New intake submitted"],
                ["Review", "Owner assignment required"],
                ["Active", "Waiting legal signoff"],
                ["Ready", "Push to operations queue"]
              ].map(([state, text]) => (
                <div key={state + text} className="flex items-center justify-between gap-3 rounded-[1rem] border border-white/8 bg-[#0b1020] px-3 py-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                      <LocalizedText text={state} />
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      <LocalizedText text={text} />
                    </p>
                  </div>
                  <span className="h-2 w-2 rounded-full bg-[#4da3ff] shadow-[0_0_18px_rgba(77,163,255,0.5)]" />
                </div>
              ))}
            </div>
          </div>
        </ShowcaseFrame>
      </motion.article>

      <motion.article
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="[perspective:1800px]"
      >
        <ShowcaseFrame title="Operations Console" subtitle="Records, filters, detail context, and recent actions in one place." className="xl:translate-y-8 xl:[transform:rotateX(4deg)]">
          <div className="grid gap-3">
            <div className="flex flex-wrap gap-2">
              {[
                "Records",
                "Filters",
                "Inspector"
              ].map((chip) => (
                <span key={chip} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-slate-400">
                  <LocalizedText text={chip} />
                </span>
              ))}
            </div>
            <div className="grid gap-3 md:grid-cols-[1fr_0.82fr]">
              <div className="rounded-[1.2rem] border border-white/8 bg-[#0b1020] p-3">
                <div className="space-y-2.5">
                  {[
                    "Customer record updated",
                    "Approval owner reassigned",
                    "Task queue merged"
                  ].map((row) => (
                    <div key={row} className="rounded-[0.95rem] border border-white/8 bg-white/[0.03] px-3 py-3 text-sm text-slate-300">
                      <LocalizedText text={row} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.03] p-3">
                <SectionLabel text="Inspector" />
                <div className="mt-3 space-y-3">
                  <MetaField label="Assigned owner" value="Operations lead" />
                  <MetaField label="Due today" value="Review queue routing" />
                </div>
              </div>
            </div>
          </div>
        </ShowcaseFrame>
      </motion.article>

      <motion.article
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="[perspective:1800px]"
      >
        <ShowcaseFrame title="Data Sync Layer" subtitle="Source mapping, validation, and destination health in a single flow." className="xl:[transform:rotateY(7deg)]">
          <div className="rounded-[1.35rem] border border-white/8 bg-white/[0.03] p-3.5">
            <div className="grid gap-3 sm:grid-cols-3">
              <MetaField label="Sources" value="HubSpot + Typeform" />
              <MetaField label="Mappings" value="Normalize status and owner" />
              <MetaField label="Destination" value="Operations command surface" />
            </div>
            <div className="mt-3 rounded-[1.1rem] border border-white/8 bg-[#0b1020] p-3.5">
              <SectionLabel text="Event stream" />
              <div className="mt-3 space-y-2.5 text-sm text-slate-300">
                <p><LocalizedText text="Payload received 2 minutes ago" /></p>
                <p><LocalizedText text="2 fields require validation review" /></p>
                <p><LocalizedText text="Destination sync marked healthy" /></p>
              </div>
            </div>
          </div>
        </ShowcaseFrame>
      </motion.article>
    </div>
  );
}
