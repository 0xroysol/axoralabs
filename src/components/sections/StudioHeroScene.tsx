"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { LocalizedText } from "@/src/components/ui/LocalizedText";
import { studioHomeContent } from "@/src/content/studioContent";

const floatMotion = {
  duration: 11,
  repeat: Infinity,
  ease: "easeInOut" as const
};

function SceneTag({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400">
      <LocalizedText text={text} />
    </span>
  );
}

function QueueEntry({ title, detail, state }: { title: string; detail: string; state: string }) {
  return (
    <div className="rounded-[1.15rem] border border-white/8 bg-[linear-gradient(180deg,rgba(14,18,30,0.96),rgba(10,12,22,0.98))] px-4 py-3.5 shadow-[0_10px_35px_rgba(0,0,0,0.22)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-100">
            <LocalizedText text={title} />
          </p>
          <p className="mt-1 text-xs leading-5 text-slate-500">
            <LocalizedText text={detail} />
          </p>
        </div>
        <SceneTag text={state} />
      </div>
    </div>
  );
}

function DrawerField({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1rem] border border-white/8 bg-white/[0.03] px-3.5 py-3">
      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
        <LocalizedText text={label} />
      </p>
      <p className="mt-2 text-sm leading-6 text-slate-200">
        <LocalizedText text={value} />
      </p>
    </div>
  );
}

function ActivityItem({ label, detail }: { label: string; detail: string }) {
  return (
    <div className="rounded-[1rem] border border-white/8 bg-white/[0.03] px-3.5 py-3">
      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
        <LocalizedText text={label} />
      </p>
      <p className="mt-2 text-sm leading-6 text-slate-200">
        <LocalizedText text={detail} />
      </p>
    </div>
  );
}

function ShowcaseFrame({ title, subtitle, children }: { title: string; subtitle: string; children: ReactNode }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,16,32,0.96),rgba(7,9,18,0.98))] p-5 shadow-[0_34px_110px_rgba(0,0,0,0.36)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(119,101,255,0.08),transparent_28%),radial-gradient(circle_at_14%_24%,rgba(77,163,255,0.08),transparent_26%)]" />
      <div className="relative">
        <h3 className="font-display text-[1.65rem] font-semibold tracking-[-0.05em] text-white">
          <LocalizedText text={title} />
        </h3>
        <p className="mt-2 max-w-[32ch] text-sm leading-7 text-slate-400">
          <LocalizedText text={subtitle} />
        </p>
        <div className="mt-5">{children}</div>
      </div>
    </motion.article>
  );
}

export function StudioHeroScene() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative [perspective:2600px]">
      <div className="absolute left-12 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(77,163,255,0.18),transparent_68%)] blur-3xl" />
      <div className="absolute right-6 top-8 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(119,101,255,0.16),transparent_70%)] blur-3xl" />

      <motion.div
        animate={reducedMotion ? undefined : { y: [0, -8, 0], rotateX: [8, 7, 8], rotateY: [-10, -8, -10] }}
        transition={floatMotion}
        className="relative rounded-[2.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(10,14,24,0.98),rgba(5,6,10,1))] p-4 shadow-[0_60px_180px_rgba(0,0,0,0.55)] [transform:rotateX(8deg)_rotateY(-10deg)]"
      >
        <div className="absolute inset-0 rounded-[2.8rem] bg-[radial-gradient(circle_at_14%_18%,rgba(77,163,255,0.08),transparent_24%),radial-gradient(circle_at_86%_14%,rgba(119,101,255,0.08),transparent_24%)]" />

        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/8 bg-[linear-gradient(180deg,rgba(8,10,18,0.98),rgba(4,5,9,1))] p-5">
          <div className="flex items-center justify-between border-b border-white/8 pb-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/24" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
            </div>
            <SceneTag text="Operations command" />
          </div>

          <div className="mt-5 grid gap-4 xl:grid-cols-[0.35fr_0.4fr_0.25fr]">
            <div className="rounded-[1.8rem] border border-white/8 bg-white/[0.025] p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  <LocalizedText text="Queue" />
                </p>
                <SceneTag text="Live" />
              </div>
              <div className="mt-4 space-y-3">
                <QueueEntry title="New intake record" detail="Waiting owner assignment" state="Queued" />
                <QueueEntry title="Approval request" detail="Review route active" state="Review" />
                <QueueEntry title="Sync validation" detail="Destination rule check" state="Active" />
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.96),rgba(10,13,22,0.98))] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.28)]">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  <LocalizedText text="Workflow" />
                </p>
                <SceneTag text="Review lane" />
              </div>
              <div className="mt-4 grid gap-3">
                <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] px-4 py-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    <LocalizedText text="Record context" />
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">
                    <LocalizedText text="Record normalized" />
                  </p>
                </div>
                <div className="rounded-[1.25rem] border border-[#7765ff]/18 bg-[#131A2D] px-4 py-4 shadow-[0_16px_55px_rgba(0,0,0,0.26)]">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    <LocalizedText text="Review" />
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-100">
                    <LocalizedText text="Owner visible" />
                  </p>
                </div>
                <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] px-4 py-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    <LocalizedText text="Execution" />
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">
                    <LocalizedText text="Ready for release" />
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              animate={reducedMotion ? undefined : { y: [0, 8, 0] }}
              transition={{ ...floatMotion, duration: 12.5, delay: 0.35 }}
              className="rounded-[1.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(12,16,30,0.98),rgba(7,9,18,1))] p-4 shadow-[0_32px_90px_rgba(0,0,0,0.38)]"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                <LocalizedText text="Inspector" />
              </p>
              <div className="mt-4 space-y-3">
                <DrawerField label="Owner" value="Operations lead" />
                <DrawerField label="Deadline" value="Review before release" />
                <DrawerField label="Next" value="Lock final route" />
              </div>
            </motion.div>
          </div>

          <motion.div
            animate={reducedMotion ? undefined : { y: [0, 5, 0] }}
            transition={{ ...floatMotion, duration: 12, delay: 0.12 }}
            className="mt-4 rounded-[1.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(8,11,20,0.92),rgba(6,8,15,1))] p-4"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                <LocalizedText text="Sync" />
              </p>
              <SceneTag text="Validation clean" />
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <ActivityItem label="Source" detail="Payload normalized" />
              <ActivityItem label="Mapping" detail="Routing rules confirmed" />
              <ActivityItem label="Destination" detail="Operations surface updated" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export function StudioMobileHeroScene() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden rounded-[2.2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(10,14,24,0.98),rgba(5,6,10,1))] p-3 shadow-[0_34px_110px_rgba(0,0,0,0.44)]">
      <div className="absolute inset-x-10 top-4 h-32 bg-[radial-gradient(circle,rgba(77,163,255,0.16),transparent_68%)] blur-3xl" />
      <div className="absolute right-4 top-14 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(119,101,255,0.14),transparent_68%)] blur-3xl" />

      <motion.div
        animate={reducedMotion ? undefined : { y: [0, -5, 0] }}
        transition={{ ...floatMotion, duration: 9 }}
        className="relative overflow-hidden rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(7,10,18,0.98),rgba(4,5,9,1))] p-4"
      >
        <div className="flex items-center justify-between gap-3 border-b border-white/8 pb-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
            <LocalizedText text="Operations command" />
          </p>
          <SceneTag text="Live" />
        </div>

        <div className="mt-4 space-y-3">
          <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.025] p-3.5">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                <LocalizedText text="Queue" />
              </p>
              <SceneTag text="Review" />
            </div>
            <div className="mt-3 space-y-2.5">
              <QueueEntry title="New intake record" detail="Waiting owner assignment" state="Queued" />
              <QueueEntry title="Approval request" detail="Review route active" state="Review" />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-[0.56fr_0.44fr]">
            <div className="rounded-[1.25rem] border border-white/8 bg-[#111827] p-3.5 shadow-[0_18px_50px_rgba(0,0,0,0.26)]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                <LocalizedText text="Inspector" />
              </p>
              <div className="mt-3 space-y-2.5">
                <DrawerField label="Owner" value="Operations lead" />
                <DrawerField label="Next" value="Lock final route" />
              </div>
            </div>
            <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.025] p-3.5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                <LocalizedText text="Sync" />
              </p>
              <div className="mt-3 space-y-2.5">
                <ActivityItem label="Source" detail="Payload normalized" />
                <ActivityItem label="Destination" detail="Operations surface updated" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function StudioShowcaseModules() {
  const modules = studioHomeContent.showcase.modules;

  return (
    <div className="grid gap-6 xl:grid-cols-[1.16fr_0.84fr]">
      <ShowcaseFrame title={modules[0].title} subtitle={modules[0].subtitle}>
        <div className="grid gap-3 md:grid-cols-[0.62fr_0.38fr]">
          <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.025] p-4">
            <div className="space-y-2.5">
              <QueueEntry title="New intake record" detail="Waiting owner assignment" state="Queued" />
              <QueueEntry title="Approval request" detail="Review route active" state="Review" />
              <QueueEntry title="Sync validation" detail="Destination rule check" state="Active" />
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-white/8 bg-[#111827] p-4 shadow-[0_18px_55px_rgba(0,0,0,0.28)]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              <LocalizedText text="Inspector" />
            </p>
            <div className="mt-3 space-y-2.5">
              <DrawerField label="Owner" value="Operations lead" />
              <DrawerField label="Next" value="Lock final route" />
            </div>
          </div>
        </div>
      </ShowcaseFrame>

      <div className="grid gap-6">
        <ShowcaseFrame title={modules[1].title} subtitle={modules[1].subtitle}>
          <div className="grid gap-3">
            <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.025] p-4">
              <div className="grid gap-2.5">
                <DrawerField label="Records" value="Open records filtered by owner and state" />
                <DrawerField label="Drawer" value="Detail context stays visible during review" />
              </div>
            </div>
            <div className="rounded-[1.4rem] border border-white/8 bg-[#111827] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.26)]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                <LocalizedText text="Recent activity" />
              </p>
              <div className="mt-3 space-y-2.5">
                <ActivityItem label="Update" detail="Owner changed after handoff" />
                <ActivityItem label="Comment" detail="Timeline updated with a new note" />
              </div>
            </div>
          </div>
        </ShowcaseFrame>

        <ShowcaseFrame title={modules[2].title} subtitle={modules[2].subtitle}>
          <div className="grid gap-3 md:grid-cols-3">
            <ActivityItem label="Source" detail="Lead payload enters sync layer" />
            <ActivityItem label="Mapping" detail="Ownership and routing rules confirmed" />
            <ActivityItem label="Destination" detail="Operations surface updated with event state" />
          </div>
        </ShowcaseFrame>
      </div>
    </div>
  );
}
