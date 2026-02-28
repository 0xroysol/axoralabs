"use client";

import { LocalizedText } from "@/src/components/ui/LocalizedText";

type DemoPageSkeletonProps = {
  cards?: number;
  rows?: number;
};

export function DemoPageSkeleton({ cards = 4, rows = 4 }: DemoPageSkeletonProps) {
  return (
    <div className="space-y-5" aria-live="polite" aria-busy="true">
      <p className="text-sm text-textSoft">
        <LocalizedText text="Loading finance data..." />
      </p>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: cards }).map((_, index) => (
          <div key={`card-${index}`} className="surface animate-pulse rounded-xl p-4">
            <div className="h-3 w-20 rounded bg-slate-700/70" />
            <div className="mt-3 h-6 w-28 rounded bg-slate-600/70" />
            <div className="mt-4 h-8 w-full rounded bg-slate-800/80" />
          </div>
        ))}
      </div>
      <div className="grid gap-3 lg:grid-cols-2">
        {Array.from({ length: rows }).map((_, index) => (
          <div key={`row-${index}`} className="surface animate-pulse rounded-xl p-4">
            <div className="h-4 w-40 rounded bg-slate-700/70" />
            <div className="mt-3 h-20 w-full rounded bg-slate-800/80" />
          </div>
        ))}
      </div>
    </div>
  );
}
