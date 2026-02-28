import {
  calcClientConcentration,
  calcNetMargin,
  calcOverdueTotal,
  calcPayrollRatio,
  getLatestMonth
} from "./kpi";
import type { AlertItem, FinanceDemoData } from "./types";

function pct(value: number) {
  return Math.round(value * 1000) / 10;
}

export function buildFinanceAlerts(data: FinanceDemoData): AlertItem[] {
  const alerts: AlertItem[] = [];

  const latestMonth = getLatestMonth(data.monthlyFinancials);
  if (!latestMonth) {
    return alerts;
  }

  const concentration = calcClientConcentration(data.clients);
  const payrollRatio = calcPayrollRatio(data.expenseBreakdown.payroll, latestMonth.revenue);
  const netMargin = calcNetMargin(latestMonth.revenue, latestMonth.expenses);
  const overdueTotal = calcOverdueTotal(data.invoices);
  const overdueThreshold = latestMonth.revenue * 0.25;

  const contractorsBudget = data.budget.find(
    (line) => line.category.toLowerCase() === "contractors"
  );
  const contractorsVariance = contractorsBudget
    ? (contractorsBudget.actual - contractorsBudget.budget) / contractorsBudget.budget
    : 0;

  if (concentration > 0.35) {
    alerts.push({
      level: "warning",
      code: "alert_high_concentration",
      meta: { valuePct: pct(concentration) }
    });
  }

  if (payrollRatio > 0.55) {
    alerts.push({
      level: "warning",
      code: "alert_payroll_ratio_high",
      meta: { valuePct: pct(payrollRatio) }
    });
  }

  if (netMargin < 0.15) {
    alerts.push({
      level: "danger",
      code: "alert_net_margin_low",
      meta: { valuePct: pct(netMargin) }
    });
  }

  if (overdueTotal > overdueThreshold) {
    alerts.push({
      level: "danger",
      code: "alert_overdue_high",
      meta: { value: overdueTotal, threshold: overdueThreshold }
    });
  }

  if (contractorsVariance > 0.2) {
    alerts.push({
      level: "warning",
      code: "alert_contractors_over_budget",
      meta: { variancePct: pct(contractorsVariance) }
    });
  }

  return alerts;
}
