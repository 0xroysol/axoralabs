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
    <div className="rounded-[1rem] border border-white/8 bg-[#0d1326]/90 px-3.5 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:rounded-[1.1rem] sm:px-4 sm:py-3.5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-medium text-slate-100">
            <LocalizedText text={title} />
          </p>
          <p className="mt-1 text-xs leading-5 text-slate-500">
            <LocalizedText text={detail} />
          </p>
        </div>
        <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium text-slate-300">
          <LocalizedText text={state} />
        </span>
      </div>
    </div>
  );
}

function MetaField({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[0.95rem] border border-white/8 bg-white/[0.03] px-3 py-2.5 sm:rounded-[1rem] sm:px-3.5 sm:py-3">
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
    <div className="flex w-full min-w-0 items-start gap-3 rounded-[1rem] border border-white/8 bg-[#0d1326]/88 px-3.5 py-3 sm:min-w-[220px]">
      <span className="mt-0.5 shrink-0 rounded-full border border-white/10 bg-white/[0.05] px-2 py-1 text-[10px] font-medium text-slate-400">
        {time}
      </span>
      <p className="text-sm leading-6 text-slate-300">
        <LocalizedText text={text} />
      </p>
    </div>
  );
}

function ShowcaseFrame({ title, subtitle, children, className = "" }: { title: string; subtitle: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[1.7rem] border border-white/8 bg-[linear-gradient(180deg,rgba(12,16,31,0.96),rgba(7,9,18,0.99))] p-4 shadow-[0_35px_90px_rgba(0,0,0,0.36)] sm:rounded-[2rem] sm:p-5 ${className}`}>
      <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)]" />
      <SectionLabel text={title} />
      <p className="mt-2 max-w-[20ch] text-sm text-slate-400">
        <LocalizedText text={subtitle} />
      </p>
      <div className="mt-5">{children}</div>
    </div>
  );
}

export function StudioHeroScene() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-full overflow-hidden sm:max-w-[820px] lg:max-w-[900px]">
      <div className="absolute left-1/2 top-8 h-52 w-52 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(77,163,255,0.16),transparent_62%)] blur-3xl sm:top-10 sm:h-80 sm:w-80 sm:bg-[radial-gradient(circle,rgba(77,163,255,0.2),transparent_62%)]" />
      <div className="absolute right-0 top-20 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(119,101,255,0.12),transparent_66%)] blur-3xl sm:right-8 sm:top-24 sm:h-72 sm:w-72 sm:bg-[radial-gradient(circle,rgba(119,101,255,0.16),transparent_66%)]" />
      <div className="absolute bottom-6 left-2 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.05),transparent_70%)] blur-3xl sm:bottom-10 sm:left-12 sm:h-56 sm:w-56 sm:bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_70%)]" />

      <motion.div
        animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
        transition={slowFloat}
        className="relative [perspective:2000px] sm:[perspective:2400px]"
      >
        <div className="relative rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,16,32,0.96),rgba(7,9,18,0.99))] p-3 shadow-[0_35px_120px_rgba(0,0,0,0.45)] sm:rounded-[2.8rem] sm:p-4 sm:shadow-[0_50px_180px_rgba(0,0,0,0.55)] lg:[transform:rotateX(9deg)_rotateY(-14deg)]">
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_15%_15%,rgba(77,163,255,0.08),transparent_22%),radial-gradient(circle_at_80%_18%,rgba(119,101,255,0.1),transparent_24%)] sm:rounded-[2.8rem]" />

          <div className="relative rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(7,10,21,0.96),rgba(5,6,10,0.99))] p-3.5 sm:rounded-[2.3rem] sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/8 pb-3.5 sm:pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/28" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/14" />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400 sm:px-3">
                  <LocalizedText text="Operations command surface" />
                </span>
                <span className="rounded-full border border-[#4da3ff]/20 bg-[#4da3ff]/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#d7e9ff] sm:px-3">
                  <LocalizedText text="Live system" />
                </span>
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:mt-5 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="relative rounded-[1.45rem] border border-white/8 bg-white/[0.025] p-3.5 sm:rounded-[1.9rem] sm:p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <SectionLabel text="Priority queue" />
                  <div className="flex flex-wrap gap-2">
                    {["Open queue", "Pending review", "Assigned"].map((chip, index) => (
                      <span
                        key={chip}
                        className={`rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium text-slate-400 ${index === 2 ? "hidden sm:inline-flex" : ""}`}
                      >
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

                <div className="mt-4 grid gap-3 rounded-[1.15rem] border border-white/8 bg-[#0f1529]/80 p-3.5 xl:hidden">
                  <div>
                    <SectionLabel text="Inspector" />
                    <p className="mt-2 text-sm font-medium text-slate-100">
                      <LocalizedText text="Record inspector" />
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      <LocalizedText text="Approval path" />
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <MetaField label="Assigned owner" value="Operations lead" />
                    <MetaField label="Due today" value="Validate contract route" />
                  </div>
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
                className="rounded-[1.45rem] border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.94),rgba(10,14,28,0.99))] p-3.5 shadow-[0_22px_70px_rgba(0,0,0,0.28)] sm:rounded-[1.9rem] sm:p-4 sm:shadow-[0_26px_90px_rgba(0,0,0,0.34)] lg:translate-y-6"
              >
                <SectionLabel text="Data sync layer" />
                <div className="mt-4 rounded-[1.1rem] border border-white/8 bg-white/[0.03] p-3 sm:rounded-[1.25rem] sm:p-3.5">
                  <div className="grid gap-3">
                    {[
                      ["Source", "HubSpot form records"],
                      ["Mapping", "Owner and status normalization"],
                      ["Destination", "Operations command surface"]
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-[0.95rem] border border-white/8 bg-[#0b1020] px-3 py-3 sm:rounded-[1rem]">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                          <LocalizedText text={label} />
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          <LocalizedText text={value} />
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-3 rounded-[1.1rem] border border-white/8 bg-white/[0.03] p-3 sm:rounded-[1.2rem] sm:p-3.5">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                    <LocalizedText text="Event stream" />
                  </p>
                  <div className="mt-3 space-y-2.5 text-sm leading-6 text-slate-300">
                    <p><LocalizedText text="Payload received 2 minutes ago" /></p>
                    <p><LocalizedText text="2 fields require validation review" /></p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              animate={reducedMotion ? undefined : { y: [0, 4, 0] }}
              transition={{ ...slowFloat, duration: 12.5, delay: 0.3 }}
              className="mt-4 rounded-[1.45rem] border border-white/8 bg-white/[0.025] p-3.5 sm:rounded-[1.9rem] sm:p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <SectionLabel text="Activity stream" />
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                  <LocalizedText text="Sync health" />
                </span>
              </div>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:overflow-hidden">
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
              {["Active records", "Ops owner", "Needs action"].map((chip) => (
                <span key={chip} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium text-slate-400">
                  <LocalizedText text={chip} />
                </span>
              ))}
            </div>
            <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] p-3.5">
              <div className="grid gap-3">
                {["Aurex onboarding", "Contract review", "Owner assignment"].map((record, index) => (
                  <div key={record} className="flex items-center justify-between gap-3 rounded-[1rem] border border-white/8 bg-[#0b1020] px-3 py-3">
                    <p className="text-sm text-slate-300">
                      <LocalizedText text={record} />
                    </p>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] text-slate-400">0{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] p-3.5">
              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                <LocalizedText text="Recent activity" />
              </p>
              <div className="mt-3 space-y-2.5 text-sm text-slate-300">
                <p><LocalizedText text="Record status changed to review" /></p>
                <p><LocalizedText text="Follow-up route assigned to operations" /></p>
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
        <ShowcaseFrame title="Data Sync Layer" subtitle="Source mapping, validation rules, and sync health across systems." className="xl:[transform:rotateY(7deg)]">
          <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] p-3.5">
            <div className="grid gap-3">
              {[
                ["Source", "Lead capture form"],
                ["Validation", "Owner and stage mapping"],
                ["Destination", "Reporting and operations layer"]
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
            <div className="mt-3 rounded-[1rem] border border-dashed border-[#4da3ff]/30 bg-[#4da3ff]/6 px-3 py-3 text-sm text-[#dcecff]">
              <LocalizedText text="2 sync events waiting for validation" />
            </div>
          </div>
        </ShowcaseFrame>
      </motion.article>
    </div>
  );
}
