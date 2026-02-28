"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useFinanceData } from "@/lib/demo/hooks/useFinanceData";
import { calcClientMargin } from "@/lib/demo/kpi";
import { DemoPageSkeleton } from "@/src/components/demo/DemoSkeleton";
import { useFinanceFormatters } from "@/src/components/demo/useFinanceFormatters";
import { LocalizedText } from "@/src/components/ui/LocalizedText";
import { financeClientsContent } from "@/src/content/siteContent";

type RiskCode = "overdue" | "lowMargin" | "concentration";

const riskPriority: RiskCode[] = ["overdue", "lowMargin", "concentration"];

function RiskBadge({ code }: { code: RiskCode | "stable" }) {
  const styleMap: Record<string, string> = {
    overdue: "border-rose-500/30 bg-rose-500/10 text-rose-200",
    lowMargin: "border-amber-400/30 bg-amber-400/10 text-amber-200",
    concentration: "border-violet-500/30 bg-violet-500/10 text-violet-200",
    stable: "border-slate-500/30 bg-slate-500/10 text-slate-200"
  };

  const labelMap: Record<string, string> = {
    overdue: financeClientsContent.risk.overdue,
    lowMargin: financeClientsContent.risk.lowMargin,
    concentration: financeClientsContent.risk.concentration,
    stable: financeClientsContent.risk.stable
  };

  return (
    <span className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-semibold ${styleMap[code]}`}>
      <LocalizedText text={labelMap[code]} />
    </span>
  );
}

export default function FinanceClientsPage() {
  const reducedMotion = useReducedMotion();
  const { data, isLoading } = useFinanceData();
  const { formatCurrency, formatPercentRatio } = useFinanceFormatters();

  const rows = useMemo(() => {
    const totalRevenue = data.clients.reduce((sum, client) => sum + client.revenue, 0);
    const overdueByClient = data.invoices
      .filter((invoice) => invoice.status === "overdue")
      .reduce<Record<string, number>>((acc, invoice) => {
        acc[invoice.client] = (acc[invoice.client] ?? 0) + invoice.amount;
        return acc;
      }, {});

    return [...data.clients]
      .sort((a, b) => b.revenue - a.revenue)
      .map((client) => {
        const margin = calcClientMargin(client.revenue, client.cost);
        const overdue = overdueByClient[client.name] ?? 0;
        const concentrationShare = client.revenue / Math.max(totalRevenue, 1);

        const flags: RiskCode[] = [];
        if (overdue > 0) {
          flags.push("overdue");
        }
        if (margin < 0.25) {
          flags.push("lowMargin");
        }
        if (concentrationShare > 0.2) {
          flags.push("concentration");
        }

        const primaryRisk = riskPriority.find((item) => flags.includes(item)) ?? "stable";
        const otherFlags = flags.filter((flag) => flag !== primaryRisk);

        return {
          ...client,
          margin,
          overdue,
          primaryRisk,
          otherFlags
        };
      });
  }, [data.clients, data.invoices]);

  if (isLoading) {
    return <DemoPageSkeleton cards={2} rows={3} />;
  }

  const topTen = rows.slice(0, 10);
  const maxRevenue = Math.max(...topTen.map((client) => client.revenue), 1);

  return (
    <motion.div
      initial={reducedMotion ? undefined : { opacity: 0, y: 8 }}
      animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <header>
        <LocalizedText text={financeClientsContent.heading} as="h1" className="font-display text-3xl font-semibold text-slate-100" />
        <LocalizedText text={financeClientsContent.subtitle} as="p" className="mt-2 text-sm text-textSoft" />
      </header>

      <section className="surface rounded-2xl p-5">
        <h2 className="font-display text-lg font-semibold text-slate-100">
          <LocalizedText text={financeClientsContent.chartTitle} />
        </h2>
        <div className="mt-4 space-y-3">
          {topTen.map((client) => (
            <div key={client.name}>
              <div className="mb-1 flex items-center justify-between text-sm text-slate-200">
                <span>{client.name}</span>
                <span>{formatCurrency(client.revenue)}</span>
              </div>
              <div className="h-2 rounded-full bg-slate-800">
                <div
                  className="h-2 rounded-full bg-[var(--accent)]"
                  style={{ width: `${(client.revenue / maxRevenue) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="surface rounded-2xl p-5">
        <h2 className="font-display text-lg font-semibold text-slate-100">
          <LocalizedText text={financeClientsContent.tableTitle} />
        </h2>

        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="pb-3 pr-4"><LocalizedText text={financeClientsContent.columns.client} /></th>
                <th className="pb-3 pr-4"><LocalizedText text={financeClientsContent.columns.revenue} /></th>
                <th className="pb-3 pr-4"><LocalizedText text={financeClientsContent.columns.cost} /></th>
                <th className="pb-3 pr-4"><LocalizedText text={financeClientsContent.columns.margin} /></th>
                <th className="pb-3 pr-4"><LocalizedText text={financeClientsContent.columns.overdue} /></th>
                <th className="pb-3"><LocalizedText text={financeClientsContent.columns.risk} /></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-200">
              {rows.map((row) => (
                <tr key={row.name}>
                  <td className="py-3 pr-4">{row.name}</td>
                  <td className="py-3 pr-4">{formatCurrency(row.revenue)}</td>
                  <td className="py-3 pr-4">{formatCurrency(row.cost)}</td>
                  <td className="py-3 pr-4">{formatPercentRatio(row.margin)}</td>
                  <td className="py-3 pr-4">{formatCurrency(row.overdue)}</td>
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <RiskBadge code={row.primaryRisk as RiskCode | "stable"} />

                      {row.otherFlags.length ? (
                        <details className="relative">
                          <summary className="cursor-pointer list-none text-xs text-slate-400 hover:text-slate-200">
                            <LocalizedText text={financeClientsContent.risk.otherFlags} />
                          </summary>
                          <div className="surface-strong absolute right-0 z-20 mt-2 w-36 rounded-lg p-2">
                            <div className="flex flex-wrap gap-1">
                              {row.otherFlags.map((flag) => (
                                <RiskBadge key={`${row.name}-${flag}`} code={flag} />
                              ))}
                            </div>
                          </div>
                        </details>
                      ) : null}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </motion.div>
  );
}
