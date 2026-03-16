"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LocalizedText } from "@/src/components/ui/LocalizedText";

const floatTransition = {
  duration: 10,
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

function QueueItem({ title, state, owner }: { title: string; state: string; owner: string }) {
  return (
    <div className="rounded-[1.1rem] border border-white/8 bg-white/[0.03] px-4 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-100">
            <LocalizedText text={title} />
          </p>
          <p className="mt-1 text-xs text-slate-500">
            <LocalizedText text={owner} />
          </p>
        </div>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium text-slate-300">
          <LocalizedText text={state} />
        </span>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
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

function ActivityItem({ time, text }: { time: string; text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-[1rem] border border-white/8 bg-white/[0.03] px-3.5 py-3">
      <span className="mt-0.5 rounded-full border border-white/10 bg-white/[0.05] px-2 py-1 text-[10px] font-medium text-slate-400">
        {time}
      </span>
      <p className="text-sm text-slate-300">
        <LocalizedText text={text} />
      </p>
    </div>
  );
}

function ShowcaseSurface({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(12,16,31,0.92),rgba(8,10,20,0.98))] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
      <SectionLabel text={title} />
      <div className="mt-4">{children}</div>
    </div>
  );
}

export function StudioHeroScene() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[780px] lg:max-w-[860px]">
      <div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(77,163,255,0.18),transparent_62%)] blur-3xl" />
      <div className="absolute right-12 top-20 h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(119,101,255,0.16),transparent_68%)] blur-3xl" />

      <motion.div
        animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
        transition={floatTransition}
        className="relative [perspective:2200px]"
      >
        <div className="rounded-[2.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,16,32,0.96),rgba(7,9,18,0.98))] p-4 shadow-[0_40px_140px_rgba(0,0,0,0.5)] md:p-5 lg:[transform:rotateX(8deg)_rotateY(-12deg)]">
          <div className="rounded-[2.15rem] border border-white/8 bg-[linear-gradient(180deg,rgba(8,11,24,0.94),rgba(5,6,10,0.98))] p-4 md:p-5">
            <div className="flex items-center justify-between gap-4 border-b border-white/8 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
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

            <div className="mt-5 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[1.8rem] border border-white/8 bg-white/[0.025] p-4">
                <div className="flex items-center justify-between gap-3">
                  <SectionLabel text="Queue" />
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Open queue",
                      "Pending review",
                      "Assigned"
                    ].map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium text-slate-400"
                      >
                        <LocalizedText text={chip} />
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid gap-3">
                  <QueueItem title="New partner application" state="Needs review" owner="Owner: Operations lead" />
                  <QueueItem title="Approval chain for contract update" state="Waiting approval" owner="Owner: Finance + Ops" />
                  <QueueItem title="Data routing issue in intake form" state="Assigned" owner="Owner: Product ops" />
                  <QueueItem title="Record merge request" state="Review ready" owner="Owner: Customer success" />
                </div>
              </div>

              <div className="rounded-[1.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.9),rgba(10,14,28,0.96))] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.3)]">
                <SectionLabel text="Active record" />
                <div className="mt-4 rounded-[1.3rem] border border-white/8 bg-white/[0.035] p-3.5">
                  <p className="text-sm font-medium text-slate-100">
                    <LocalizedText text="Operations detail" />
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    <LocalizedText text="Approval path" />
                  </p>
                </div>
                <div className="mt-3 grid gap-3">
                  <Field label="Owner" value="Operations lead" />
                  <Field label="State" value="Waiting approval" />
                  <Field label="Next step" value="Validate legal copy before release" />
                </div>
                <div className="mt-3 rounded-[1.2rem] border border-white/8 bg-white/[0.03] p-3.5">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                    <LocalizedText text="Approval path" />
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                    <span className="rounded-full border border-white/10 px-2.5 py-1">
                      <LocalizedText text="Legal review" />
                    </span>
                    <span className="text-slate-600">→</span>
                    <span className="rounded-full border border-white/10 px-2.5 py-1">
                      <LocalizedText text="Operations signoff" />
                    </span>
                    <span className="text-slate-600">→</span>
                    <span className="rounded-full border border-white/10 px-2.5 py-1">
                      <LocalizedText text="Release" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-[1.8rem] border border-white/8 bg-white/[0.025] p-4">
              <div className="flex items-center justify-between gap-3">
                <SectionLabel text="Activity" />
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                  <LocalizedText text="Sync health" />
                </span>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <ActivityItem time="09:14" text="Lead created from contact form" />
                <ActivityItem time="09:21" text="Approval request routed to operations" />
                <ActivityItem time="09:37" text="Record synced into reporting layer" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function StudioShowcaseModules() {
  return (
    <div className="grid gap-5 xl:grid-cols-3">
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <ShowcaseSurface title="Workflow Control">
          <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-3">
            <div className="grid grid-cols-3 gap-2.5">
              {[
                ["Queued", "New partner intake"],
                ["Review", "Contract approval"],
                ["Ready", "Route to owner"],
                ["Queued", "Validation fix"],
                ["Review", "Ops checklist"],
                ["Ready", "Final handoff"]
              ].map(([state, title]) => (
                <div key={state + title} className="rounded-[1rem] border border-white/8 bg-[#0b1020] px-3 py-3">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                    <LocalizedText text={state} />
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    <LocalizedText text={title} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ShowcaseSurface>
      </motion.article>

      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <ShowcaseSurface title="Operations Console">
          <div className="grid gap-3">
            <div className="flex flex-wrap gap-2">
              {[
                "Records",
                "Filters",
                "Detail drawer"
              ].map((chip) => (
                <span key={chip} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-slate-400">
                  <LocalizedText text={chip} />
                </span>
              ))}
            </div>
            <div className="rounded-[1.3rem] border border-white/8 bg-white/[0.03] p-3.5">
              <div className="space-y-2.5">
                {[
                  "Customer record updated",
                  "Approval owner reassigned",
                  "Task queue merged"
                ].map((row) => (
                  <div key={row} className="rounded-[1rem] border border-white/8 bg-[#0b1020] px-3 py-3 text-sm text-slate-300">
                    <LocalizedText text={row} />
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-[1rem] border border-white/8 bg-[#0b1020] px-3 py-3">
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                  <LocalizedText text="Recent activity" />
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  <LocalizedText text="Approval request routed to operations" />
                </p>
              </div>
            </div>
          </div>
        </ShowcaseSurface>
      </motion.article>

      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <ShowcaseSurface title="Data Sync Layer">
          <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-3.5">
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-[1rem] border border-white/8 bg-[#0b1020] px-3 py-3">
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                  <LocalizedText text="Sources" />
                </p>
                <div className="mt-3 space-y-2 text-sm text-slate-300">
                  <p><LocalizedText text="HubSpot" /></p>
                  <p><LocalizedText text="Typeform" /></p>
                </div>
              </div>
              <div className="rounded-[1rem] border border-white/8 bg-[#0b1020] px-3 py-3">
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                  <LocalizedText text="Mappings" />
                </p>
                <div className="mt-3 space-y-2 text-sm text-slate-300">
                  <p><LocalizedText text="Normalize owner field" /></p>
                  <p><LocalizedText text="Validate status map" /></p>
                </div>
              </div>
              <div className="rounded-[1rem] border border-white/8 bg-[#0b1020] px-3 py-3">
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                  <LocalizedText text="Destination" /></p>
                <div className="mt-3 space-y-2 text-sm text-slate-300">
                  <p><LocalizedText text="Operations DB" /></p>
                  <p><LocalizedText text="Reporting layer" /></p>
                </div>
              </div>
            </div>
            <div className="mt-3 rounded-[1rem] border border-white/8 bg-[#0b1020] px-3 py-3">
              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                <LocalizedText text="Event log" />
              </p>
              <div className="mt-2 space-y-2 text-sm text-slate-300">
                <p><LocalizedText text="Synced 2 minutes ago" /></p>
                <p><LocalizedText text="2 mismatches require review" /></p>
              </div>
            </div>
          </div>
        </ShowcaseSurface>
      </motion.article>
    </div>
  );
}
