"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

const floatMotion = {
  duration: 12,
  repeat: Infinity,
  ease: "easeInOut" as const
};

function SurfaceLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400">
      {children}
    </span>
  );
}

function QueueEntry({ title, detail, state }: { title: string; detail: string; state: string }) {
  return (
    <div className="rounded-[1.15rem] border border-white/8 bg-[linear-gradient(180deg,rgba(14,18,30,0.96),rgba(10,12,22,0.98))] px-4 py-3.5 shadow-[0_10px_35px_rgba(0,0,0,0.22)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-100">{title}</p>
          <p className="mt-1 text-xs leading-5 text-slate-500">{detail}</p>
        </div>
        <SurfaceLabel>{state}</SurfaceLabel>
      </div>
    </div>
  );
}

function DrawerField({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1rem] border border-white/8 bg-white/[0.03] px-3.5 py-3">
      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">{label}</p>
      <p className="mt-2 text-sm leading-6 text-slate-200">{value}</p>
    </div>
  );
}

function ActivityItem({ label, detail }: { label: string; detail: string }) {
  return (
    <div className="rounded-[1rem] border border-white/8 bg-white/[0.03] px-3.5 py-3">
      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">{label}</p>
      <p className="mt-2 text-sm leading-6 text-slate-200">{detail}</p>
    </div>
  );
}


export function StudioHeroScene() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative [perspective:2600px]">
      <div className="absolute left-12 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(77,163,255,0.18),transparent_68%)] blur-3xl" />
      <div className="absolute right-4 top-12 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(119,101,255,0.16),transparent_70%)] blur-3xl" />
      <div className="absolute inset-x-16 bottom-8 h-24 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_72%)] blur-3xl" />

      <motion.div
        animate={reducedMotion ? undefined : { y: [0, -8, 0], rotateX: [9, 7, 9], rotateY: [-11, -8, -11] }}
        transition={floatMotion}
        className="relative rounded-[2.9rem] border border-white/8 bg-[linear-gradient(180deg,rgba(10,14,24,0.98),rgba(5,6,10,1))] p-4 shadow-[0_60px_190px_rgba(0,0,0,0.58)] [transform:rotateX(9deg)_rotateY(-11deg)]"
      >
        <div className="absolute inset-0 rounded-[2.9rem] bg-[radial-gradient(circle_at_18%_18%,rgba(77,163,255,0.08),transparent_22%),radial-gradient(circle_at_85%_16%,rgba(119,101,255,0.08),transparent_24%)]" />

        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/8 bg-[linear-gradient(180deg,rgba(8,10,18,0.98),rgba(4,5,9,1))] p-5">
          <div className="flex items-center justify-between border-b border-white/8 pb-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/24" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
            </div>
            <SurfaceLabel>Operational command surface</SurfaceLabel>
          </div>

          <div className="mt-5 grid gap-4 xl:grid-cols-[0.36fr_0.39fr_0.25fr]">
            <div className="rounded-[1.8rem] border border-white/8 bg-white/[0.025] p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">Incoming queue</p>
                <SurfaceLabel>Live routing</SurfaceLabel>
              </div>
              <div className="mt-4 space-y-3">
                <QueueEntry title="Partner application" detail="Waiting owner assignment before review" state="Queued" />
                <QueueEntry title="Approval request" detail="Contract update needs review routing" state="Review" />
                <QueueEntry title="Sync validation" detail="Destination rule requires confirmation" state="Active" />
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.96),rgba(10,13,22,0.98))] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.28)]">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">Workflow state</p>
                <SurfaceLabel>Review lane</SurfaceLabel>
              </div>
              <div className="mt-4 grid gap-3">
                <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] px-4 py-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Normalize</p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">Record structure is validated before routing.</p>
                </div>
                <div className="rounded-[1.25rem] border border-[#7765ff]/18 bg-[#131A2D] px-4 py-4 shadow-[0_16px_55px_rgba(0,0,0,0.26)]">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Review</p>
                  <p className="mt-3 text-sm leading-7 text-slate-100">Ownership, approval state, and release context stay visible.</p>
                </div>
                <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] px-4 py-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Execute</p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">Confirmed records move into the next operational action.</p>
                </div>
              </div>
            </div>

            <motion.div
              animate={reducedMotion ? undefined : { y: [0, 8, 0] }}
              transition={{ ...floatMotion, duration: 12.5, delay: 0.35 }}
              className="rounded-[1.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(12,16,30,0.98),rgba(7,9,18,1))] p-4 shadow-[0_32px_90px_rgba(0,0,0,0.38)]"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">Inspector</p>
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
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">Sync activity</p>
              <SurfaceLabel>Validation clean</SurfaceLabel>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <ActivityItem label="Source" detail="Payload normalized and ready for routing." />
              <ActivityItem label="Mapping" detail="Ownership and validation rules confirmed." />
              <ActivityItem label="Destination" detail="Operations surface updated with event state." />
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
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">Operational command surface</p>
          <SurfaceLabel>Live</SurfaceLabel>
        </div>

        <div className="mt-4 space-y-3">
          <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.025] p-3.5">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">Queue</p>
              <SurfaceLabel>Review</SurfaceLabel>
            </div>
            <div className="mt-3 space-y-2.5">
              <QueueEntry title="Partner application" detail="Waiting owner assignment" state="Queued" />
              <QueueEntry title="Approval request" detail="Review route active" state="Active" />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-[0.56fr_0.44fr]">
            <div className="rounded-[1.25rem] border border-white/8 bg-[#111827] p-3.5 shadow-[0_18px_50px_rgba(0,0,0,0.26)]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">Inspector</p>
              <div className="mt-3 space-y-2.5">
                <DrawerField label="Owner" value="Operations lead" />
                <DrawerField label="Next" value="Lock final route" />
              </div>
            </div>
            <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.025] p-3.5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">Sync</p>
              <div className="mt-3 space-y-2.5">
                <ActivityItem label="Source" detail="Payload normalized." />
                <ActivityItem label="Destination" detail="Operations surface updated." />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
