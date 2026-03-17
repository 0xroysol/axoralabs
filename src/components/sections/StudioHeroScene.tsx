"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LocalizedText } from "@/src/components/ui/LocalizedText";
import { studioHomeContent } from "@/src/content/studioContent";

type QueueRowProps = {
  title: string;
  detail: string;
  state: string;
};

type FieldProps = {
  label: string;
  value: string;
};

type EventProps = {
  label: string;
  detail: string;
};

const floatMotion = {
  duration: 11,
  repeat: Infinity,
  ease: "easeInOut" as const
};

function MetaLabel({ text }: { text: string }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
      <LocalizedText text={text} />
    </p>
  );
}

function QueueRow({ title, detail, state }: QueueRowProps) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-medium text-slate-100">
            <LocalizedText text={title} />
          </p>
          <p className="mt-1 text-xs leading-5 text-slate-500">
            <LocalizedText text={detail} />
          </p>
        </div>
        <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[10px] text-slate-300">
          <LocalizedText text={state} />
        </span>
      </div>
    </div>
  );
}

function Field({ label, value }: FieldProps) {
  return (
    <div className="rounded-2xl border border-white/8 bg-black/20 px-3.5 py-3.5">
      <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
        <LocalizedText text={label} />
      </p>
      <p className="mt-2 text-sm text-slate-100">
        <LocalizedText text={value} />
      </p>
    </div>
  );
}

function Event({ label, detail }: EventProps) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-3.5 py-3">
      <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
        <LocalizedText text={label} />
      </p>
      <p className="mt-2 text-sm leading-6 text-slate-300">
        <LocalizedText text={detail} />
      </p>
    </div>
  );
}

function HeroDesktopScene() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative hidden lg:block">
      <div className="absolute -left-16 top-8 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(77,163,255,0.14),transparent_68%)] blur-3xl" />
      <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(119,101,255,0.14),transparent_68%)] blur-3xl" />
      <div className="absolute inset-x-24 bottom-0 h-36 bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_72%)] blur-3xl" />

      <motion.div
        animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
        transition={floatMotion}
        className="relative [perspective:2400px]"
      >
        <div className="relative rounded-[2.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(10,14,24,0.98),rgba(5,6,10,1))] p-4 shadow-[0_60px_200px_rgba(0,0,0,0.54)] [transform:rotateX(8deg)_rotateY(-11deg)]">
          <div className="absolute inset-0 rounded-[2.8rem] bg-[radial-gradient(circle_at_14%_18%,rgba(77,163,255,0.08),transparent_24%),radial-gradient(circle_at_82%_14%,rgba(119,101,255,0.08),transparent_22%)]" />

          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(8,10,18,0.98),rgba(4,5,9,1))] p-6">
            <div className="flex items-center justify-between border-b border-white/8 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/24" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  <LocalizedText text="Operational Command Surface" />
                </span>
                <span className="rounded-full border border-[#4da3ff]/20 bg-[#4da3ff]/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#d7e9ff]">
                  <LocalizedText text="Operational routing live" />
                </span>
              </div>
            </div>

            <div className="mt-5 grid gap-4 xl:grid-cols-[0.34fr_0.42fr_0.24fr]">
              <div className="rounded-[1.8rem] border border-white/8 bg-white/[0.025] p-4">
                <div className="flex items-center justify-between gap-3">
                  <MetaLabel text="Incoming queue" />
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] text-slate-400">
                    <LocalizedText text="Assigned routing" />
                  </span>
                </div>
                <div className="mt-4 grid gap-3">
                  <QueueRow title="New intake request" detail="Created from inbound request form" state="Waiting review" />
                  <QueueRow title="Contract revision" detail="Needs approval chain before release" state="Needs owner" />
                  <QueueRow title="Sync validation issue" detail="Destination rule needs confirmation" state="Review required" />
                </div>
              </div>

              <div className="rounded-[1.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.94),rgba(10,13,22,0.98))] p-4 shadow-[0_28px_80px_rgba(0,0,0,0.34)]">
                <div className="flex items-center justify-between gap-3">
                  <MetaLabel text="Workflow state" />
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] text-slate-400">
                    <LocalizedText text="Approval path active" />
                  </span>
                </div>

                <div className="mt-4 grid gap-3">
                  <div className="rounded-[1.3rem] border border-white/8 bg-[#0D1326] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <MetaLabel text="Current routing" />
                      <span className="rounded-full border border-[#7765ff]/20 bg-[#7765ff]/10 px-2.5 py-1 text-[10px] text-[#e2dcff]">
                        <LocalizedText text="Review lane" />
                      </span>
                    </div>
                    <div className="mt-4 grid gap-3 md:grid-cols-3">
                      <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-3.5 py-3.5">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                          <LocalizedText text="Intake" />
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          <LocalizedText text="Record normalized and ready for routing." />
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/8 bg-[#131A2D] px-3.5 py-3.5 shadow-[0_12px_40px_rgba(0,0,0,0.28)]">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                          <LocalizedText text="Review" />
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-100">
                          <LocalizedText text="Approval and owner visibility stay active here." />
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-3.5 py-3.5">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                          <LocalizedText text="Execution" />
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          <LocalizedText text="Confirmed records move into operational delivery." />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.3rem] border border-white/8 bg-white/[0.025] p-4">
                    <MetaLabel text="Recent activity" />
                    <div className="mt-4 grid gap-2.5">
                      <div className="flex items-start justify-between gap-4 rounded-2xl border border-white/8 bg-black/20 px-4 py-3">
                        <div>
                          <p className="text-sm text-slate-100"><LocalizedText text="Owner reassigned after review" /></p>
                          <p className="mt-1 text-xs text-slate-500"><LocalizedText text="Operational log updated with new handoff state." /></p>
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">14:22</span>
                      </div>
                      <div className="flex items-start justify-between gap-4 rounded-2xl border border-white/8 bg-black/20 px-4 py-3">
                        <div>
                          <p className="text-sm text-slate-100"><LocalizedText text="Validation passed for destination write" /></p>
                          <p className="mt-1 text-xs text-slate-500"><LocalizedText text="Record prepared for final sync and release." /></p>
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">14:27</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                animate={reducedMotion ? undefined : { y: [0, 7, 0] }}
                transition={{ ...floatMotion, duration: 12.5, delay: 0.35 }}
                className="rounded-[1.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(12,16,30,0.98),rgba(7,9,18,1))] p-4 shadow-[0_36px_100px_rgba(0,0,0,0.4)]"
              >
                <MetaLabel text="Detail drawer" />
                <div className="mt-3 rounded-[1rem] border border-white/8 bg-white/[0.03] p-3.5">
                  <p className="text-sm font-medium text-slate-100">
                    <LocalizedText text="Record context" />
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    <LocalizedText text="Operational release handoff" />
                  </p>
                </div>
                <div className="mt-3 grid gap-3">
                  <Field label="Owner" value="Operations lead" />
                  <Field label="Deadline" value="Review before release window" />
                  <Field label="Next action" value="Lock approval path after final review" />
                </div>
              </motion.div>
            </div>

            <motion.div
              animate={reducedMotion ? undefined : { y: [0, 4, 0] }}
              transition={{ ...floatMotion, duration: 12, delay: 0.15 }}
              className="mt-4 rounded-[1.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(8,11,20,0.92),rgba(6,8,15,1))] p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <MetaLabel text="Sync layer" />
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] text-slate-400">
                  <LocalizedText text="Validation clean" />
                </span>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <Event label="Source" detail="Incoming payload normalized before handoff." />
                <Event label="Mapping" detail="Owner, stage, and routing rules confirmed." />
                <Event label="Destination" detail="Operations surface updated with fresh event state." />
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
              <MetaLabel text="Operational Command Surface" />
              <span className="rounded-full border border-[#4da3ff]/20 bg-[#4da3ff]/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-[#d7e9ff]">
                <LocalizedText text="Operational routing live" />
              </span>
            </div>

            <div className="mt-4 space-y-3">
              <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.025] p-3.5">
                <div className="flex items-center justify-between gap-3">
                  <MetaLabel text="Incoming queue" />
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] text-slate-400">
                    <LocalizedText text="Assigned routing" />
                  </span>
                </div>
                <div className="mt-3 grid gap-2.5">
                  <QueueRow title="New intake request" detail="Created from inbound request form" state="Waiting review" />
                  <QueueRow title="Sync validation issue" detail="Destination rule needs confirmation" state="Review required" />
                </div>
              </div>

              <div className="rounded-[1.25rem] border border-white/8 bg-[#111827] p-3.5 shadow-[0_20px_60px_rgba(0,0,0,0.26)]">
                <MetaLabel text="Workflow state" />
                <div className="mt-3 grid gap-2.5">
                  <Field label="Current lane" value="Review lane" />
                  <Field label="Next action" value="Assign owner and release final route" />
                </div>
              </div>

              <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.025] p-3.5">
                <MetaLabel text="Sync layer" />
                <div className="mt-3 grid gap-2.5">
                  <Event label="Source" detail="Incoming payload normalized before handoff." />
                  <Event label="Destination" detail="Operations surface updated with fresh event state." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ShowcasePanel({
  kicker,
  title,
  description,
  children,
  reverse = false
}: {
  kicker: string;
  title: string;
  description: string;
  children: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center ${reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}
    >
      <div className="max-w-md">
        <MetaLabel text={kicker} />
        <h3 className="mt-3 font-display text-[2rem] font-semibold tracking-[-0.06em] text-white md:text-[2.6rem]">
          <LocalizedText text={title} />
        </h3>
        <p className="mt-4 text-base leading-8 text-slate-400">
          <LocalizedText text={description} />
        </p>
      </div>
      <div className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,16,32,0.94),rgba(7,9,18,0.99))] p-5 shadow-[0_34px_110px_rgba(0,0,0,0.34)]">
        <div className="absolute inset-x-12 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)]" />
        {children}
      </div>
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
    <div className="space-y-8 lg:space-y-12">
      <ShowcasePanel kicker={modules[0].title} title={modules[0].title} description={modules[0].subtitle}>
        <div className="grid gap-3 md:grid-cols-[0.52fr_0.48fr]">
          <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.025] p-4">
            <MetaLabel text="Incoming queue" />
            <div className="mt-3 grid gap-2.5">
              <QueueRow title="New intake request" detail="Waiting owner assignment before routing." state="Queued" />
              <QueueRow title="Approval update" detail="Review lane requested a final confirmation." state="Review" />
              <QueueRow title="Execution handoff" detail="Operational team is ready for release." state="Active" />
            </div>
          </div>
          <div className="rounded-[1.4rem] border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.94),rgba(10,13,22,0.98))] p-4">
            <MetaLabel text="Route visibility" />
            <div className="mt-3 grid gap-2.5">
              <Event label="Intake" detail="Record enters the correct approval path immediately." />
              <Event label="Review" detail="Required owner and approval state stay visible." />
              <Event label="Execution" detail="Cleared work moves into the delivery queue." />
            </div>
          </div>
        </div>
      </ShowcasePanel>

      <ShowcasePanel kicker={modules[1].title} title={modules[1].title} description={modules[1].subtitle} reverse>
        <div className="grid gap-3 md:grid-cols-[0.58fr_0.42fr]">
          <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.025] p-4">
            <div className="grid gap-2.5">
              <Field label="Open records" value="Filtered by owner, state, and release priority" />
              <Field label="Detail drawer" value="Status, notes, and handoff context stay visible" />
            </div>
          </div>
          <div className="rounded-[1.4rem] border border-white/8 bg-[#101626] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.26)]">
            <MetaLabel text="Recent actions" />
            <div className="mt-3 grid gap-2.5">
              <Event label="Update" detail="Owner changed after review handoff." />
              <Event label="Comment" detail="Operational timeline updated with a new note." />
              <Event label="Release" detail="Execution route unlocked for downstream team." />
            </div>
          </div>
        </div>
      </ShowcasePanel>

      <ShowcasePanel kicker={modules[2].title} title={modules[2].title} description={modules[2].subtitle}>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.025] p-4">
            <MetaLabel text="Source" />
            <p className="mt-3 text-sm leading-7 text-slate-300">
              <LocalizedText text="Lead payload enters the sync layer with routing metadata." />
            </p>
          </div>
          <div className="rounded-[1.4rem] border border-white/8 bg-[#101626] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.24)]">
            <MetaLabel text="Mapping" />
            <p className="mt-3 text-sm leading-7 text-slate-300">
              <LocalizedText text="Ownership, stage, and validation rules are confirmed in one pass." />
            </p>
          </div>
          <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.025] p-4">
            <MetaLabel text="Destination" />
            <p className="mt-3 text-sm leading-7 text-slate-300">
              <LocalizedText text="Validated data writes into the operations surface with event logging." />
            </p>
          </div>
        </div>
      </ShowcasePanel>
    </div>
  );
}
