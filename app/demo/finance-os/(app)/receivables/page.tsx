"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { DEMO_REFERENCE_DATE } from "@/lib/demo/config";
import { calcAgingBuckets, calcDaysPastDue } from "@/lib/demo/kpi";
import { useFinanceData } from "@/lib/demo/hooks/useFinanceData";
import { DemoPageSkeleton } from "@/src/components/demo/DemoSkeleton";
import { useFinanceFormatters } from "@/src/components/demo/useFinanceFormatters";
import { LocalizedText } from "@/src/components/ui/LocalizedText";
import { financeReceivablesContent } from "@/src/content/siteContent";

export default function FinanceReceivablesPage() {
  const reducedMotion = useReducedMotion();
  const { data, isLoading } = useFinanceData();
  const { formatCurrency, formatDate } = useFinanceFormatters();

  const buckets = useMemo(() => calcAgingBuckets(data.invoices, DEMO_REFERENCE_DATE), [data.invoices]);

  if (isLoading) {
    return <DemoPageSkeleton cards={2} rows={3} />;
  }

  const segments = [
    { label: "0-30", value: buckets["0-30"], color: "var(--accent)" },
    { label: "31-60", value: buckets["31-60"], color: "rgba(148,163,184,0.9)" },
    { label: "61-90", value: buckets["61-90"], color: "rgba(124,58,237,0.9)" },
    { label: "90+", value: buckets["90+"], color: "rgba(244,63,94,0.9)" }
  ];

  const totalAging = segments.reduce((sum, segment) => sum + segment.value, 0);
  let running = 0;
  const conicStops = segments
    .map((segment) => {
      const start = totalAging > 0 ? (running / totalAging) * 100 : 0;
      running += segment.value;
      const end = totalAging > 0 ? (running / totalAging) * 100 : 0;
      return `${segment.color} ${start}% ${end}%`;
    })
    .join(", ");

  return (
    <motion.div
      initial={reducedMotion ? undefined : { opacity: 0, y: 8 }}
      animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <header>
        <LocalizedText text={financeReceivablesContent.heading} as="h1" className="font-display text-3xl font-semibold text-slate-100" />
        <LocalizedText text={financeReceivablesContent.subtitle} as="p" className="mt-2 text-sm text-textSoft" />
      </header>

      <section className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <article className="surface rounded-2xl p-5">
          <h2 className="font-display text-lg font-semibold text-slate-100">
            <LocalizedText text={financeReceivablesContent.agingTitle} />
          </h2>
          <div className="mt-5 flex items-center gap-5">
            <div className="relative h-44 w-44 rounded-full" style={{ background: `conic-gradient(${conicStops})` }}>
              <div className="absolute inset-4 flex items-center justify-center rounded-full bg-slate-950/95 text-center">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">USD</p>
                  <p className="font-display text-lg font-semibold text-slate-100">{formatCurrency(totalAging)}</p>
                </div>
              </div>
            </div>

            <ul className="space-y-2 text-sm text-slate-200">
              {segments.map((segment) => (
                <li key={segment.label} className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: segment.color }} />
                  <span>{segment.label}</span>
                  <span className="text-slate-400">{formatCurrency(segment.value)}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className="surface rounded-2xl p-5">
          <h2 className="font-display text-lg font-semibold text-slate-100">
            <LocalizedText text={financeReceivablesContent.tableTitle} />
          </h2>

          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="pb-3 pr-4"><LocalizedText text={financeReceivablesContent.columns.client} /></th>
                  <th className="pb-3 pr-4"><LocalizedText text={financeReceivablesContent.columns.dueDate} /></th>
                  <th className="pb-3 pr-4"><LocalizedText text={financeReceivablesContent.columns.amount} /></th>
                  <th className="pb-3 pr-4"><LocalizedText text={financeReceivablesContent.columns.status} /></th>
                  <th className="pb-3"><LocalizedText text={financeReceivablesContent.columns.daysPastDue} /></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-200">
                {data.invoices.map((invoice) => {
                  const daysPastDue = calcDaysPastDue(invoice.dueDate, DEMO_REFERENCE_DATE);
                  const statusTone =
                    invoice.status === "overdue"
                      ? "border-rose-500/30 bg-rose-500/10 text-rose-200"
                      : invoice.status === "pending"
                        ? "border-amber-400/30 bg-amber-400/10 text-amber-200"
                        : "border-emerald-400/30 bg-emerald-400/10 text-emerald-200";

                  return (
                    <tr key={`${invoice.client}-${invoice.dueDate}`}>
                      <td className="py-3 pr-4">{invoice.client}</td>
                      <td className="py-3 pr-4">{formatDate(invoice.dueDate)}</td>
                      <td className="py-3 pr-4">{formatCurrency(invoice.amount)}</td>
                      <td className="py-3 pr-4">
                        <span className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-semibold ${statusTone}`}>
                          <LocalizedText text={financeReceivablesContent.status[invoice.status]} />
                        </span>
                      </td>
                      <td className="py-3">{daysPastDue}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </article>
      </section>
    </motion.div>
  );
}
