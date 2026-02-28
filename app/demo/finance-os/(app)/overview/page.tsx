"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { buildFinanceAlerts } from "@/lib/demo/alerts";
import {
  calcClientConcentration,
  calcNetMargin,
  calcNetMarginDeltaPct,
  calcOverdueTotal,
  calcPayrollRatio,
  calcRevenueDeltaPct,
  calcRunwayMonths,
  getLatestMonth,
  getPreviousMonth
} from "@/lib/demo/kpi";
import { useFinanceData } from "@/lib/demo/hooks/useFinanceData";
import { DemoPageSkeleton } from "@/src/components/demo/DemoSkeleton";
import { useFinanceFormatters } from "@/src/components/demo/useFinanceFormatters";
import { LocalizedText, useTranslate, useTranslateTemplate } from "@/src/components/ui/LocalizedText";
import { financeOverviewContent } from "@/src/content/siteContent";

function buildPoints(values: number[], width: number, height: number, padding = 6) {
  const max = Math.max(...values);
  const min = Math.min(...values);

  return values
    .map((value, index) => {
      const x = padding + (index / Math.max(values.length - 1, 1)) * (width - padding * 2);
      const y = height - padding - ((value - min) / Math.max(max - min, 1)) * (height - padding * 2);
      return `${x},${y}`;
    })
    .join(" ");
}

function Sparkline({ values }: { values: number[] }) {
  const points = buildPoints(values, 160, 40);

  return (
    <svg viewBox="0 0 160 40" className="h-10 w-full" aria-hidden="true">
      <polyline
        points={points}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function KpiCard({
  label,
  value,
  delta,
  series
}: {
  label: string;
  value: string;
  delta: string;
  series: number[];
}) {
  const deltaValue = Number(delta.replace(/[^0-9+.\-]/g, ""));
  const isPositive = Number.isFinite(deltaValue) && deltaValue > 0;
  const isNegative = Number.isFinite(deltaValue) && deltaValue < 0;

  return (
    <article className="surface rounded-xl p-4">
      <p className="text-xs uppercase tracking-[0.14em] text-slate-500">
        <LocalizedText text={label} />
      </p>
      <div className="mt-2 flex items-end justify-between gap-2">
        <p className="font-display text-xl font-semibold text-slate-100">{value}</p>
        <span
          className={`text-xs font-semibold ${
            isPositive ? "text-emerald-300" : isNegative ? "text-rose-300" : "text-slate-300"
          }`}
        >
          {delta}
        </span>
      </div>
      <div className="mt-3">
        <Sparkline values={series} />
      </div>
    </article>
  );
}

function RevenueExpensesChart({
  months,
  revenue,
  expenses
}: {
  months: string[];
  revenue: number[];
  expenses: number[];
}) {
  const revenuePoints = buildPoints(revenue, 640, 220, 20);
  const expensePoints = buildPoints(expenses, 640, 220, 20);

  return (
    <article className="surface rounded-2xl p-5">
      <h3 className="font-display text-lg font-semibold text-slate-100">
        <LocalizedText text={financeOverviewContent.charts.revenueExpenses} />
      </h3>
      <div className="mt-3 flex items-center gap-4 text-xs text-slate-300">
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
          <LocalizedText text="Revenue" />
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <LocalizedText text="Expenses" />
        </span>
      </div>
      <svg
        viewBox="0 0 640 220"
        className="mt-4 h-60 w-full"
        role="img"
        aria-label={financeOverviewContent.charts.revenueExpensesAria}
      >
        <line x1="20" y1="200" x2="620" y2="200" stroke="rgba(148,163,184,0.25)" strokeWidth="1" />
        <polyline points={expensePoints} fill="none" stroke="rgba(148,163,184,0.8)" strokeWidth="2.5" strokeLinecap="round" />
        <polyline points={revenuePoints} fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <div className="mt-2 grid grid-cols-6 gap-2 text-[11px] text-slate-500 md:grid-cols-12">
        {months.map((month) => (
          <span key={month}>{month}</span>
        ))}
      </div>
    </article>
  );
}

function CashFlowChart({
  months,
  cashIn,
  cashOut,
  formatCurrency
}: {
  months: string[];
  cashIn: number[];
  cashOut: number[];
  formatCurrency: (value: number) => string;
}) {
  const maxValue = Math.max(...cashIn, ...cashOut, 1);

  return (
    <article className="surface rounded-2xl p-5">
      <h3 className="font-display text-lg font-semibold text-slate-100">
        <LocalizedText text={financeOverviewContent.charts.cashFlow} />
      </h3>
      <div className="mt-3 space-y-3">
        {months.map((month, index) => (
          <div key={month} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>{month}</span>
              <span>
                {formatCurrency(cashIn[index])} / {formatCurrency(cashOut[index])}
              </span>
            </div>
            <div className="space-y-1">
              <div className="h-2 rounded-full bg-slate-800">
                <div
                  className="h-2 rounded-full bg-[var(--accent)]"
                  style={{ width: `${(cashIn[index] / maxValue) * 100}%` }}
                />
              </div>
              <div className="h-2 rounded-full bg-slate-800">
                <div
                  className="h-2 rounded-full bg-slate-400"
                  style={{ width: `${(cashOut[index] / maxValue) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
          <LocalizedText text="Cash In" />
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <LocalizedText text="Cash Out" />
        </span>
      </div>
    </article>
  );
}

export default function FinanceOverviewPage() {
  const reducedMotion = useReducedMotion();
  const { data, isLoading } = useFinanceData();
  const { formatCurrency, formatPercentRatio, formatPercentValue, formatMonths, formatNumber } =
    useFinanceFormatters();
  const t = useTranslate();
  const translateTemplate = useTranslateTemplate();

  const analytics = useMemo(() => {
    const latest = getLatestMonth(data.monthlyFinancials);
    const previous = getPreviousMonth(data.monthlyFinancials);

    if (!latest || !previous) {
      return null;
    }

    const latestNetMargin = calcNetMargin(latest.revenue, latest.expenses);
    const previousNetMargin = calcNetMargin(previous.revenue, previous.expenses);
    const payrollRatio = calcPayrollRatio(data.expenseBreakdown.payroll, latest.revenue);
    const previousPayrollRatio = calcPayrollRatio(data.expenseBreakdown.payroll, previous.revenue);
    const runway = calcRunwayMonths(data.cashData.currentCash, data.cashData.monthlyBurn);
    const cumulativeNet = data.monthlyFinancials.reduce(
      (sum, month) => sum + (month.revenue - month.expenses),
      0
    );
    const startingCash = data.cashData.currentCash - cumulativeNet;

    const historicalCash = data.monthlyFinancials.reduce<number[]>((series, month, index) => {
      const previousCash = series[index - 1] ?? startingCash;
      series.push(previousCash + (month.revenue - month.expenses));
      return series;
    }, []);

    const runwaySeries = historicalCash.map((cash) => calcRunwayMonths(cash, data.cashData.monthlyBurn));
    const previousRunway = runwaySeries.at(-2) ?? runway;

    const overdueTotal = calcOverdueTotal(data.invoices);
    const overdueBaseSeries = data.monthlyFinancials.map((month) =>
      Math.max(month.expenses - month.revenue * 0.82, 0)
    );
    const overdueScale = overdueBaseSeries.at(-1) ? overdueTotal / (overdueBaseSeries.at(-1) ?? 1) : 0;
    const overdueSeries = overdueBaseSeries.map((value) => value * overdueScale);
    const previousOverdue = overdueSeries.at(-2) ?? overdueTotal;

    const concentration = calcClientConcentration(data.clients);
    const concentrationSeries = data.monthlyFinancials.map((_, index, list) => {
      const drift = (index - (list.length - 1)) * 0.002;
      return Math.min(0.95, Math.max(0.05, concentration - drift));
    });
    const previousConcentration = concentrationSeries.at(-2) ?? concentration;

    return {
      latest,
      previous,
      latestNetMargin,
      previousNetMargin,
      payrollRatio,
      previousPayrollRatio,
      runway,
      previousRunway,
      overdueTotal,
      previousOverdue,
      concentration,
      previousConcentration,
      runwaySeries,
      overdueSeries,
      concentrationSeries
    };
  }, [data]);

  if (isLoading) {
    return <DemoPageSkeleton cards={6} rows={2} />;
  }

  if (!analytics) {
    return null;
  }

  const revenueSeries = data.monthlyFinancials.map((item) => item.revenue);
  const expenseSeries = data.monthlyFinancials.map((item) => item.expenses);
  const netMarginSeries = data.monthlyFinancials.map((item) => calcNetMargin(item.revenue, item.expenses));
  const payrollSeries = data.monthlyFinancials.map((item) =>
    calcPayrollRatio(data.expenseBreakdown.payroll, item.revenue)
  );
  const months = data.monthlyFinancials.map((item) => item.month);
  const lastSixMonths = data.monthlyFinancials.slice(-6);

  const revenueDeltaPct = calcRevenueDeltaPct(analytics.latest.revenue, analytics.previous.revenue);
  const netMarginDeltaPct = calcNetMarginDeltaPct(analytics.latestNetMargin, analytics.previousNetMargin);
  const payrollDeltaPct = analytics.payrollRatio - analytics.previousPayrollRatio;
  const runwayDelta = analytics.runway - analytics.previousRunway;
  const overdueDeltaPct =
    analytics.previousOverdue > 0
      ? (analytics.overdueTotal - analytics.previousOverdue) / analytics.previousOverdue
      : 0;
  const concentrationDeltaPct = analytics.concentration - analytics.previousConcentration;

  const alerts = buildFinanceAlerts(data);

  const kpis = [
    {
      label: financeOverviewContent.kpi.monthlyRevenue,
      value: formatCurrency(analytics.latest.revenue),
      delta: `${revenueDeltaPct >= 0 ? "+" : ""}${formatPercentValue(revenueDeltaPct * 100)} ${t(financeOverviewContent.monthTag)}`,
      series: revenueSeries
    },
    {
      label: financeOverviewContent.kpi.netMargin,
      value: formatPercentRatio(analytics.latestNetMargin),
      delta: `${netMarginDeltaPct >= 0 ? "+" : ""}${formatPercentValue(netMarginDeltaPct * 100)} ${t(financeOverviewContent.monthTag)}`,
      series: netMarginSeries
    },
    {
      label: financeOverviewContent.kpi.payrollRatio,
      value: formatPercentRatio(analytics.payrollRatio),
      delta: `${payrollDeltaPct >= 0 ? "+" : ""}${formatPercentValue(payrollDeltaPct * 100)} ${t(financeOverviewContent.monthTag)}`,
      series: payrollSeries
    },
    {
      label: financeOverviewContent.kpi.runway,
      value: `${formatMonths(analytics.runway)} ${t("months")}`,
      delta: `${runwayDelta >= 0 ? "+" : ""}${formatMonths(runwayDelta)}m ${t(financeOverviewContent.monthTag)}`,
      series: analytics.runwaySeries
    },
    {
      label: financeOverviewContent.kpi.overdueInvoices,
      value: formatCurrency(analytics.overdueTotal),
      delta: `${overdueDeltaPct >= 0 ? "+" : ""}${formatPercentValue(overdueDeltaPct * 100)} ${t(financeOverviewContent.monthTag)}`,
      series: analytics.overdueSeries
    },
    {
      label: financeOverviewContent.kpi.clientConcentration,
      value: formatPercentRatio(analytics.concentration),
      delta: `${concentrationDeltaPct >= 0 ? "+" : ""}${formatPercentValue(concentrationDeltaPct * 100)} ${t(financeOverviewContent.monthTag)}`,
      series: analytics.concentrationSeries
    }
  ];

  return (
    <motion.div
      initial={reducedMotion ? undefined : { opacity: 0, y: 8 }}
      animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <header>
        <LocalizedText text={financeOverviewContent.heading} as="h1" className="font-display text-3xl font-semibold text-slate-100" />
        <LocalizedText text={financeOverviewContent.subtitle} as="p" className="mt-2 text-sm text-textSoft" />
      </header>

      <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {kpis.map((kpi) => (
          <KpiCard key={kpi.label} label={kpi.label} value={kpi.value} delta={kpi.delta} series={kpi.series} />
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.4fr_1fr]">
        <RevenueExpensesChart months={months} revenue={revenueSeries} expenses={expenseSeries} />
        <CashFlowChart
          months={lastSixMonths.map((item) => item.month)}
          cashIn={lastSixMonths.map((item) => item.revenue)}
          cashOut={lastSixMonths.map((item) => item.expenses)}
          formatCurrency={formatCurrency}
        />
      </section>

      <section className="surface rounded-2xl p-5">
        <h2 className="font-display text-lg font-semibold text-slate-100">
          <LocalizedText text={financeOverviewContent.alertsTitle} />
        </h2>
        {alerts.length ? (
          <ul className="mt-4 space-y-2">
            {alerts.map((alert) => {
              const toneClass =
                alert.level === "danger"
                  ? "border-rose-500/30 bg-rose-500/10 text-rose-100"
                  : alert.level === "warning"
                    ? "border-amber-400/30 bg-amber-400/10 text-amber-100"
                    : "border-slate-500/30 bg-slate-500/10 text-slate-100";

              const translated = translateTemplate(`alerts.${alert.code}`, {
                valuePct: formatNumber(alert.meta.valuePct ?? 0),
                variancePct: formatNumber(alert.meta.variancePct ?? 0),
                value: formatCurrency(alert.meta.value ?? 0),
                threshold: formatCurrency(alert.meta.threshold ?? 0)
              });

              return (
                <li key={alert.code} className={`rounded-lg border px-3 py-2 text-sm ${toneClass}`}>
                  {translated}
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="mt-3 text-sm text-textSoft">
            <LocalizedText text={financeOverviewContent.noAlerts} />
          </p>
        )}
      </section>
    </motion.div>
  );
}
