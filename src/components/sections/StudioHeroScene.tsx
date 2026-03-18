"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LocalizedText } from "@/src/components/ui/LocalizedText";
import { studioHomeContent } from "@/src/content/studioContent";

const floatMotion = {
  duration: 10,
  repeat: Infinity,
  ease: "easeInOut" as const
};

function Label({ text }: { text: string }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
      <LocalizedText text={text} />
    </p>
  );
}

function QueueRow({
  title,
  detail,
  state
}: {
  title: string;
  detail: string;
  state: string;
}) {
  return (
    <div className="flex items-start justify-between gap-3 rounded-2xl border border-white/8 bg-[#0D1326]/92 px-4 py-3.5">
      <div>
        <p className="text-sm font-medium text-slate-100">
          <LocalizedText text={title} />
        </p>
        <p className="mt-1 text-xs leading-5 text-slate-500">
          <LocalizedText text={detail} />
        </p>
      </div>
      <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-400">
        <LocalizedText text={state} />
      </span>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-3.5 py-3">
      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
        <LocalizedText text={label} />
      </p>
      <p className="mt-2 text-sm leading-6 text-slate-200">
        <LocalizedText text={value} />
      </p>
    </div>
  );
}

function Event({ label, detail }: { label: string; detail: string }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.025] px-4 py-3.5">
      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
        <LocalizedText text={label} />
      </p>
      <p className="mt-2 text-sm leading-6 text-slate-200">
        <LocalizedText text={detail} />
      </p>
    </div>
  );
}

function HeroDesktopScene() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative hidden lg:block">
      <div className="absolute left-8 top-8 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(77,163,255,0.16),transparent_68%)] blur-3xl" />
      <div className="absolute right-10 top-14 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(119,101,255,0.14),transparent_70%)] blur-3xl" />

      <motion.div
        animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
        transition={floatMotion}
        className="relative [perspective:2400px]"
      >
        <div className="relative rounded-[2.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(10,14,24,0.98),rgba(5,6,10,1))] p-4 shadow-[0_56px_180px_rgba(0,0,0,0.52)] [transform:rotateX(7deg)_rotateY(-10deg)]">
          <div className="absolute inset-0 rounded-[2.8rem] bg-[radial-gradient(circle_at_14%_18%,rgba(77,163,255,0.08),transparent_24%),radial-gradient(circle_at_84%_16%,rgba(119,101,255,0.08),transparent_24%)]" />

          <div className="relative overflow-hidden rounded-[2.15rem] border border-white/8 bg-[linear-gradient(180deg,rgba(8,10,18,0.98),rgba(4,5,9,1))] p-5">
            <div className="flex items-center justify-between border-b border-white/8 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/24" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
              </div>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-400">
                <LocalizedText text="Operations command" />
              </span>
            </div>

            <div className="mt-5 grid gap-4 xl:grid-cols-[0.34fr_0.43fr_0.23fr]">
              <div className="rounded-[1.7rem] border border-white/8 bg-white/[0.025] p-4">
                <div className="flex items-center justify-between">
                  <Label text="Queue" />
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] text-slate-400">
                    <LocalizedText text="Live" />
                  </span>
                </div>
                <div className="mt-4 space-y-2.5">
                  <div className="rounded-2xl border border-white/8 bg-[#0D1326]/92 px-4 py-3.5">
                    <p className="text-sm font-medium text-slate-100">
                      <LocalizedText text="New intake record" />
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      <LocalizedText text="Waiting owner assignment" />
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-[#0D1326]/92 px-4 py-3.5">
                    <p className="text-sm font-medium text-slate-100">
                      <LocalizedText text="Approval request" />
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      <LocalizedText text="Review route active" />
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-[#0D1326]/92 px-4 py-3.5">
                    <p className="text-sm font-medium text-slate-100">
                      <LocalizedText text="Sync validation" />
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      <LocalizedText text="Destination rule check" />
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.7rem] border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.94),rgba(10,13,22,0.98))] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.3)]">
                <div className="flex items-center justify-between">
                  <Label text="Workflow" />
                  <span className="rounded-full border border-[#7765ff]/20 bg-[#7765ff]/10 px-2.5 py-1 text-[10px] text-[#e2dcff]">
                    <LocalizedText text="Review lane" />
                  </span>
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-3.5 py-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                      <LocalizedText text="Intake" />
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      <LocalizedText text="Record normalized" />
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-[#131A2D] px-3.5 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.28)]">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                      <LocalizedText text="Review" />
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-100">
                      <LocalizedText text="Owner visible" />
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-3.5 py-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                      <LocalizedText text="Execution" />
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      <LocalizedText text="Ready for release" />
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-[1.3rem] border border-white/8 bg-white/[0.025] p-4">
                  <Label text="Activity" />
                  <div className="mt-3 space-y-2.5">
                    <div className="flex items-start justify-between gap-4 rounded-2xl border border-white/8 bg-black/20 px-4 py-3">
                      <div>
                        <p className="text-sm text-slate-100"><LocalizedText text="Owner reassigned" /></p>
                        <p className="mt-1 text-xs text-slate-500"><LocalizedText text="Operational timeline updated" /></p>
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">14:22</span>
                    </div>
                    <div className="flex items-start justify-between gap-4 rounded-2xl border border-white/8 bg-black/20 px-4 py-3">
                      <div>
                        <p className="text-sm text-slate-100"><LocalizedText text="Validation passed" /></p>
                        <p className="mt-1 text-xs text-slate-500"><LocalizedText text="Destination updated" /></p>
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">14:27</span>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                animate={reducedMotion ? undefined : { y: [0, 7, 0] }}
                transition={{ ...floatMotion, duration: 12.5, delay: 0.35 }}
                className="rounded-[1.7rem] border border-white/8 bg-[linear-gradient(180deg,rgba(12,16,30,0.98),rgba(7,9,18,1))] p-4 shadow-[0_32px_90px_rgba(0,0,0,0.38)]"
              >
                <Label text="Inspector" />
                <div className="mt-3 rounded-[1rem] border border-white/8 bg-white/[0.03] p-3.5">
                  <p className="text-sm font-medium text-slate-100"><LocalizedText text="Record context" /></p>
                  <p className="mt-1 text-xs text-slate-500"><LocalizedText text="Release handoff" /></p>
                </div>
                <div className="mt-3 space-y-3">
                  <Field label="Owner" value="Operations lead" />
                  <Field label="Deadline" value="Review before release" />
                  <Field label="Next" value="Lock final route" />
                </div>
              </motion.div>
            </div>

            <motion.div
              animate={reducedMotion ? undefined : { y: [0, 4, 0] }}
              transition={{ ...floatMotion, duration: 12, delay: 0.12 }}
              className="mt-4 rounded-[1.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(8,11,20,0.92),rgba(6,8,15,1))] p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <Label text="Sync" />
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] text-slate-400">
                  <LocalizedText text="Validation clean" />
                </span>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <Event label="Source" detail="Payload normalized" />
                <Event label="Mapping" detail="Routing rules confirmed" />
                <Event label="Destination" detail="Operations surface updated" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function HeroMobileScene() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative lg:hidden">
      <div className="absolute inset-x-10 top-6 h-32 bg-[radial-gradient(circle,rgba(77,163,255,0.16),transparent_68%)] blur-3xl" />
      <div className="absolute right-4 top-14 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(119,101,255,0.14),transparent_68%)] blur-3xl" />

      <motion.div
        animate={reducedMotion ? undefined : { y: [0, -5, 0] }}
        transition={{ ...floatMotion, duration: 9 }}
        className="relative"
      >
        <div className="rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(10,14,24,0.98),rgba(5,6,10,1))] p-3 shadow-[0_34px_110px_rgba(0,0,0,0.44)]">
          <div className="rounded-[1.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(7,10,18,0.98),rgba(4,5,9,1))] p-4">
            <div className="flex items-center justify-between gap-3 border-b border-white/8 pb-3">
              <Label text="Operations command" />
              <span className="rounded-full border border-[#4da3ff]/20 bg-[#4da3ff]/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-[#d7e9ff]">
                <LocalizedText text="Live" />
              </span>
            </div>

            <div className="mt-4 space-y-3">
              <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.025] p-3.5">
                <div className="flex items-center justify-between gap-3">
                  <Label text="Queue" />
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] text-slate-400">
                    <LocalizedText text="Review" />
                  </span>
                </div>
                <div className="mt-3 space-y-2.5">
                  <QueueRow title="New intake record" detail="Waiting owner assignment" state="Review" />
                  <QueueRow title="Sync validation" detail="Destination rule check" state="Queued" />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-[0.58fr_0.42fr]">
                <div className="rounded-[1.25rem] border border-white/8 bg-[#111827] p-3.5 shadow-[0_18px_50px_rgba(0,0,0,0.26)]">
                  <Label text="Workflow" />
                  <div className="mt-3 space-y-2.5">
                    <Field label="Lane" value="Review lane" />
                    <Field label="Next" value="Assign owner" />
                  </div>
                </div>
                <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.025] p-3.5">
                  <Label text="Sync" />
                  <div className="mt-3 space-y-2.5">
                    <Event label="Source" detail="Payload normalized" />
                    <Event label="Destination" detail="State updated" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ShowcaseShell({
  title,
  subtitle,
  children
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,16,32,0.94),rgba(7,9,18,0.99))] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.34)]"
    >
      <div className="absolute inset-x-12 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)]" />
      <h3 className="font-display text-[1.55rem] font-semibold tracking-[-0.05em] text-white">
        <LocalizedText text={title} />
      </h3>
      <p className="mt-2 max-w-[32ch] text-sm leading-7 text-slate-400">
        <LocalizedText text={subtitle} />
      </p>
      <div className="mt-5">{children}</div>
    </motion.article>
  );
}

export function StudioHeroScene() {
  return (
    <>
      <HeroMobileScene />
      <HeroDesktopScene />
    </>
  );
}

export function StudioShowcaseModules() {
  const modules = studioHomeContent.showcase.modules;

  return (
    <div className="grid gap-6 xl:grid-cols-3">
      <ShowcaseShell title={modules[0].title} subtitle={modules[0].subtitle}>
        <div className="rounded-[1.35rem] border border-white/8 bg-white/[0.025] p-4">
          <div className="space-y-2.5">
            <QueueRow title="New intake record" detail="Waiting owner assignment" state="Queued" />
            <QueueRow title="Approval request" detail="Review route active" state="Review" />
            <QueueRow title="Execution handoff" detail="Ready for release" state="Live" />
          </div>
        </div>
      </ShowcaseShell>

      <ShowcaseShell title={modules[1].title} subtitle={modules[1].subtitle}>
        <div className="grid gap-3">
          <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.025] p-4">
            <div className="grid gap-2.5">
              <Field label="Records" value="Open records filtered by owner and state" />
              <Field label="Drawer" value="Detail context stays visible during review" />
            </div>
          </div>
          <div className="rounded-[1.25rem] border border-white/8 bg-[#101626] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.26)]">
            <Label text="Recent activity" />
            <div className="mt-3 space-y-2.5">
              <Event label="Update" detail="Owner changed after handoff" />
              <Event label="Comment" detail="Timeline updated with a new note" />
            </div>
          </div>
        </div>
      </ShowcaseShell>

      <ShowcaseShell title={modules[2].title} subtitle={modules[2].subtitle}>
        <div className="grid gap-3">
          <Event label="Source" detail="Lead payload enters sync layer" />
          <Event label="Mapping" detail="Ownership and routing rules confirmed" />
          <Event label="Destination" detail="Operations surface updated with event state" />
        </div>
      </ShowcaseShell>
    </div>
  );
}
