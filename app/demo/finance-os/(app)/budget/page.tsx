"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useFinanceData } from "@/lib/demo/hooks/useFinanceData";
import { DemoPageSkeleton } from "@/src/components/demo/DemoSkeleton";
import { useFinanceFormatters } from "@/src/components/demo/useFinanceFormatters";
import { LocalizedText } from "@/src/components/ui/LocalizedText";
import { financeBudgetContent } from "@/src/content/siteContent";

export default function FinanceBudgetPage() {
  const reducedMotion = useReducedMotion();
  const { data, isLoading } = useFinanceData();
  const { formatCurrency, formatPercentValue } = useFinanceFormatters();

  if (isLoading) {
    return <DemoPageSkeleton cards={2} rows={3} />;
  }

  const maxAmount = Math.max(
    ...data.budget.flatMap((line) => [line.budget, line.actual]),
    1
  );

  return (
    <motion.div
      initial={reducedMotion ? undefined : { opacity: 0, y: 8 }}
      animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <header>
        <LocalizedText text={financeBudgetContent.heading} as="h1" className="font-display text-3xl font-semibold text-slate-100" />
        <LocalizedText text={financeBudgetContent.subtitle} as="p" className="mt-2 text-sm text-textSoft" />
      </header>

      <section className="surface rounded-2xl p-5">
        <h2 className="font-display text-lg font-semibold text-slate-100">
          <LocalizedText text={financeBudgetContent.chartTitle} />
        </h2>

        <div className="mt-4 space-y-4">
          {data.budget.map((line) => (
            <div key={line.category}>
              <div className="mb-1 flex items-center justify-between text-sm text-slate-200">
                <span>{line.category}</span>
                <span>
                  {formatCurrency(line.budget)} / {formatCurrency(line.actual)}
                </span>
              </div>

              <div className="space-y-1">
                <div className="h-2 rounded-full bg-slate-800">
                  <div
                    className="h-2 rounded-full bg-slate-500"
                    style={{ width: `${(line.budget / maxAmount) * 100}%` }}
                  />
                </div>
                <div className="h-2 rounded-full bg-slate-800">
                  <div
                    className="h-2 rounded-full bg-[var(--accent)]"
                    style={{ width: `${(line.actual / maxAmount) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-slate-500" />
            <LocalizedText text="Budget" />
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            <LocalizedText text="Actual" />
          </span>
        </div>
      </section>

      <section className="surface rounded-2xl p-5">
        <h2 className="font-display text-lg font-semibold text-slate-100">
          <LocalizedText text={financeBudgetContent.tableTitle} />
        </h2>

        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="pb-3 pr-4"><LocalizedText text={financeBudgetContent.columns.category} /></th>
                <th className="pb-3 pr-4"><LocalizedText text={financeBudgetContent.columns.budget} /></th>
                <th className="pb-3 pr-4"><LocalizedText text={financeBudgetContent.columns.actual} /></th>
                <th className="pb-3 pr-4"><LocalizedText text={financeBudgetContent.columns.variance} /></th>
                <th className="pb-3"><LocalizedText text={financeBudgetContent.columns.percent} /></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-200">
              {data.budget.map((line) => {
                const variance = line.actual - line.budget;
                const variancePct = line.budget > 0 ? (variance / line.budget) * 100 : 0;
                const tone = variance > 0 ? "text-rose-300" : "text-emerald-300";

                return (
                  <tr key={line.category}>
                    <td className="py-3 pr-4">{line.category}</td>
                    <td className="py-3 pr-4">{formatCurrency(line.budget)}</td>
                    <td className="py-3 pr-4">{formatCurrency(line.actual)}</td>
                    <td className={`py-3 pr-4 font-semibold ${tone}`}>
                      {variance >= 0 ? "+" : ""}
                      {formatCurrency(variance)}
                    </td>
                    <td className={`py-3 font-semibold ${tone}`}>
                      {variancePct >= 0 ? "+" : ""}
                      {formatPercentValue(variancePct)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </motion.div>
  );
}
