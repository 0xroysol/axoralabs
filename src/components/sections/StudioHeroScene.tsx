"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LocalizedText } from "@/src/components/ui/LocalizedText";
import { studioHomeContent } from "@/src/content/studioContent";

type QueueItemProps = {
  title: string;
  detail: string;
  state: string;
};

type FlowCardProps = {
  title: string;
  detail: string;
};

type DetailFieldProps = {
  label: string;
  value: string;
};

type EventItemProps = {
  label: string;
  detail: string;
};

const surfaceMotion = {
  duration: 10,
  repeat: Infinity,
  ease: "easeInOut" as const
};

function TinyLabel({ text }: { text: string }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
      <LocalizedText text={text} />
    </p>
  );
}

function QueueItem({ title, detail, state }: QueueItemProps) {
  return (
    <div className="rounded-[1rem] border border-white/8 bg-[#0d1326]/92 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
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

function FlowCard({ title, detail }: FlowCardProps) {
  return (
    <div className="rounded-[1rem] border border-white/8 bg-[#0d1326]/88 px-4 py-3.5">
      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
        <LocalizedText text={title} />
      </p>
      <p className="mt-2 text-sm leading-6 text-slate-300">
        <LocalizedText text={detail} />
      </p>
    </div>
  );
}

function DetailField({ label, value }: DetailFieldProps) {
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

function EventItem({ label, detail }: EventItemProps) {
  return (
    <div className="rounded-[1rem] border border-white/8 bg-[#0d1326]/88 px-3.5 py-3">
      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
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
    <div className="relative hidden md:block">
      <div className="absolute left-10 top-8 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(77,163,255,0.18),transparent_65%)] blur-3xl" />
      <div className="absolute right-8 top-10 h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(119,101,255,0.16),transparent_66%)] blur-3xl" />
      <div className="absolute inset-x-16 bottom-0 h-32 bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_70%)] blur-3xl" />

      <motion.div
        animate={reducedMotion ? undefined : { y: [0, -10, 0] }}
        transition={surfaceMotion}
        className="relative [perspective:2200px]"
      >
        <div className="relative rounded-[2.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,16,32,0.96),rgba(6,8,15,1))] p-4 shadow-[0_55px_180px_rgba(0,0,0,0.52)] lg:[transform:rotateX(8deg)_rotateY(-12deg)]">
          <div className="absolute inset-0 rounded-[2.8rem] bg-[radial-gradient(circle_at_14%_20%,rgba(77,163,255,0.08),transparent_24%),radial-gradient(circle_at_80%_18%,rgba(119,101,255,0.1),transparent_24%)]" />

          <div className="relative rounded-[2.2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(7,10,21,0.98),rgba(5,6,10,1))] p-5">
            <div className="flex items-center justify-between gap-4 border-b border-white/8 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/28" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/14" />
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                  <LocalizedText text="Operational Command Surface" />
                </span>
                <span className="rounded-full border border-[#4da3ff]/20 bg-[#4da3ff]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#d7e9ff]">
                  <LocalizedText text="Routing active" />
                </span>
              </div>
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-[0.95fr_1.05fr_0.8fr]">
              <div className="rounded-[1.8rem] border border-white/8 bg-white/[0.025] p-4">
                <div className="flex items-center justify-between gap-3">
                  <TinyLabel text="Incoming Records" />
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] text-slate-400">
                    <LocalizedText text="Assigned to team" />
                  </span>
                </div>
                <div className="mt-4 grid gap-3">
                  <QueueItem title="New partner request" detail="Submitted from intake form" state="Waiting review" />
                  <QueueItem title="Contract update request" detail="Needs legal approval route" state="Needs owner" />
                  <QueueItem title="Sync conflict" detail="Validation rule needs confirmation" state="Review required" />
                </div>
              </div>

              <div className="rounded-[1.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(17,24,39,0.92),rgba(10,14,28,0.98))] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.32)]">
                <div className="flex items-center justify-between gap-3">
                  <TinyLabel text="Workflow Routing" />
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] text-slate-400">
                    <LocalizedText text="Approval path" />
                  </span>
                </div>
                <div className="mt-4 grid gap-3">
                  <FlowCard title="Intake" detail="Record normalized and assigned to the right operational owner." />
                  <FlowCard title="Review" detail="Approval state and required actions stay visible before handoff." />
                  <FlowCard title="Deploy" detail="Confirmed records move into execution with sync logging preserved." />
                </div>
              </div>

              <motion.div
                animate={reducedMotion ? undefined : { y: [0, 6, 0] }}
                transition={{ ...surfaceMotion, duration: 12, delay: 0.4 }}
                className="rounded-[1.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(14,18,34,0.96),rgba(9,12,22,0.99))] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.36)]"
              >
                <TinyLabel text="Inspector" />
                <div className="mt-3 rounded-[1rem] border border-white/8 bg-white/[0.03] p-3">
                  <p className="text-sm font-medium text-slate-100">
                    <LocalizedText text="Record details" />
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    <LocalizedText text="Operational handoff" />
                  </p>
                </div>
                <div className="mt-3 grid gap-3">
                  <DetailField label="Owner" value="Operations lead" />
                  <DetailField label="Deadline" value="Review before release window" />
                  <DetailField label="Notes" value="Approval path locked after final review" />
                </div>
              </motion.div>
            </div>

            <motion.div
              animate={reducedMotion ? undefined : { y: [0, 4, 0] }}
              transition={{ ...surfaceMotion, duration: 11.5, delay: 0.2 }}
              className="mt-4 rounded-[1.8rem] border border-white/8 bg-white/[0.025] p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <TinyLabel text="Sync Activity" />
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] text-slate-400">
                  <LocalizedText text="Event state clean" />
                </span>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <EventItem label="Source" detail="Incoming payload normalized and ready for routing." />
                <EventItem label="Validation" detail="Status rules checked before destination write." />
                <EventItem label="Destination" detail="Operations layer updated and activity log appended." />
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
    <div className="relative md:hidden">
      <div className="absolute inset-x-8 top-6 h-32 bg-[radial-gradient(circle,rgba(77,163,255,0.18),transparent_66%)] blur-3xl" />
      <div className="absolute right-2 top-14 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(119,101,255,0.14),transparent_68%)] blur-3xl" />

      <motion.div
        animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
        transition={{ ...surfaceMotion, duration: 9 }}
        className="relative"
      >
        <div className="relative rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,16,32,0.96),rgba(6,8,15,1))] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.42)]">
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_18%_18%,rgba(77,163,255,0.08),transparent_26%),radial-gradient(circle_at_86%_24%,rgba(119,101,255,0.08),transparent_26%)]" />
          <div className="relative rounded-[1.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(7,10,21,0.98),rgba(5,6,10,1))] p-3.5">
            <div className="flex items-center justify-between gap-3 border-b border-white/8 pb-3">
              <TinyLabel text="Operational Command Surface" />
              <span className="rounded-full border border-[#4da3ff]/20 bg-[#4da3ff]/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-[#d7e9ff]">
                <LocalizedText text="Routing active" />
              </span>
            </div>

            <div className="mt-4 grid gap-3">
              <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.025] p-3.5">
                <TinyLabel text="Incoming Records" />
                <div className="mt-3 grid gap-2.5">
                  <QueueItem title="New partner request" detail="Submitted from intake form" state="Waiting review" />
                  <QueueItem title="Contract update request" detail="Needs legal approval route" state="Needs owner" />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.2rem] border border-white/8 bg-[#111827] p-3.5 shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
                  <TinyLabel text="Workflow Routing" />
                  <div className="mt-3 grid gap-2.5">
                    <FlowCard title="Intake" detail="Normalized" />
                    <FlowCard title="Review" detail="Approval state visible" />
                  </div>
                </div>
                <div className="rounded-[1.2rem] border border-white/8 bg-[#0e1222] p-3.5 shadow-[0_18px_50px_rgba(0,0,0,0.3)]">
                  <TinyLabel text="Inspector" />
                  <div className="mt-3 grid gap-2.5">
                    <DetailField label="Owner" value="Operations lead" />
                    <DetailField label="Deadline" value="Review before release" />
                  </div>
                </div>
              </div>

              <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.025] p-3.5">
                <TinyLabel text="Sync Activity" />
                <div className="mt-3 grid gap-2.5">
                  <EventItem label="Source" detail="Payload ready for routing." />
                  <EventItem label="Destination" detail="Operations layer updated." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ShowcaseSurface({
  title,
  subtitle,
  children,
  className = ""
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(11,16,32,0.94),rgba(7,9,18,0.99))] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.34)] ${className}`}
    >
      <div className="absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)]" />
      <h3 className="font-display text-[1.55rem] font-semibold tracking-[-0.05em] text-white">
        <LocalizedText text={title} />
      </h3>
      <p className="mt-2 max-w-[30ch] text-sm leading-7 text-slate-400">
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
      <ShowcaseSurface title={modules[0].title} subtitle={modules[0].subtitle} className="xl:[transform:rotateY(-6deg)] xl:[perspective:1800px]">
        <div className="rounded-[1.35rem] border border-white/8 bg-white/[0.03] p-3.5">
          <div className="grid gap-3">
            <QueueItem title="New intake request" detail="Waiting owner assignment" state="Queued" />
            <QueueItem title="Approval update" detail="Routed to reviewer lane" state="Review" />
            <QueueItem title="Operational handoff" detail="Ready for execution queue" state="Active" />
          </div>
        </div>
      </ShowcaseSurface>

      <ShowcaseSurface title={modules[1].title} subtitle={modules[1].subtitle} className="xl:translate-y-8 xl:[transform:rotateX(4deg)] xl:[perspective:1800px]">
        <div className="grid gap-3">
          <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] p-3.5">
            <div className="grid gap-2.5">
              <FlowCard title="Filter" detail="Open records for operations owner" />
              <FlowCard title="Detail" detail="Record drawer keeps status and notes visible" />
            </div>
          </div>
          <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] p-3.5">
            <TinyLabel text="Recent Actions" />
            <div className="mt-3 grid gap-2.5">
              <EventItem label="Update" detail="Owner changed after review handoff." />
              <EventItem label="Log" detail="Comment appended to operational timeline." />
            </div>
          </div>
        </div>
      </ShowcaseSurface>

      <ShowcaseSurface title={modules[2].title} subtitle={modules[2].subtitle} className="xl:[transform:rotateY(6deg)] xl:[perspective:1800px]">
        <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] p-3.5">
          <div className="grid gap-3">
            <FlowCard title="Source" detail="Lead capture payload enters sync layer." />
            <FlowCard title="Mapping" detail="Owner, stage, and routing rules are normalized." />
            <FlowCard title="Destination" detail="Validated data writes into the operations surface." />
          </div>
          <div className="mt-3 rounded-[1rem] border border-dashed border-[#4da3ff]/30 bg-[#4da3ff]/6 px-3 py-3 text-sm text-[#dcecff]">
            <LocalizedText text="Validation state clean" />
          </div>
        </div>
      </ShowcaseSurface>
    </div>
  );
}
