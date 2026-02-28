import { DEMO_REFERENCE_DATE } from "./config";
import type { AgingBuckets, Client, Invoice, MonthlyFinancial } from "./types";

const MS_IN_DAY = 1000 * 60 * 60 * 24;

function round(value: number, digits = 4) {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function parseIsoDate(dateValue: string) {
  return new Date(`${dateValue}T00:00:00Z`);
}

export function calcDaysPastDue(dueDate: string, referenceDate = DEMO_REFERENCE_DATE) {
  const due = parseIsoDate(dueDate);
  const ref = parseIsoDate(referenceDate);
  const dayDiff = Math.floor((ref.getTime() - due.getTime()) / MS_IN_DAY);
  return Math.max(dayDiff, 0);
}

export function calcAgingBuckets(invoices: Invoice[], referenceDate = DEMO_REFERENCE_DATE): AgingBuckets {
  const buckets: AgingBuckets = {
    "0-30": 0,
    "31-60": 0,
    "61-90": 0,
    "90+": 0
  };

  invoices.forEach((invoice) => {
    if (invoice.status === "paid") {
      return;
    }

    const days = calcDaysPastDue(invoice.dueDate, referenceDate);

    if (days <= 30) {
      buckets["0-30"] += invoice.amount;
      return;
    }

    if (days <= 60) {
      buckets["31-60"] += invoice.amount;
      return;
    }

    if (days <= 90) {
      buckets["61-90"] += invoice.amount;
      return;
    }

    buckets["90+"] += invoice.amount;
  });

  return buckets;
}

export function getLatestMonth(monthlyFinancials: MonthlyFinancial[]) {
  return monthlyFinancials.at(-1) ?? null;
}

export function getPreviousMonth(monthlyFinancials: MonthlyFinancial[]) {
  return monthlyFinancials.at(-2) ?? null;
}

export function calcNetMargin(revenue: number, expenses: number) {
  if (revenue <= 0) {
    return 0;
  }
  return round((revenue - expenses) / revenue);
}

export function calcPayrollRatio(payroll: number, revenue: number) {
  if (revenue <= 0) {
    return 0;
  }
  return round(payroll / revenue);
}

export function calcRunwayMonths(cash: number, monthlyBurn: number) {
  if (monthlyBurn <= 0) {
    return 0;
  }
  return round(cash / monthlyBurn, 2);
}

export function calcOverdueTotal(invoices: Invoice[]) {
  return invoices
    .filter((invoice) => invoice.status === "overdue")
    .reduce((sum, invoice) => sum + invoice.amount, 0);
}

export function calcClientConcentration(clients: Client[]) {
  const totalRevenue = clients.reduce((sum, client) => sum + client.revenue, 0);
  if (totalRevenue <= 0) {
    return 0;
  }

  const top2Revenue = [...clients]
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, 2)
    .reduce((sum, client) => sum + client.revenue, 0);

  return round(top2Revenue / totalRevenue);
}

export function calcClientMargin(revenue: number, cost: number) {
  if (revenue <= 0) {
    return 0;
  }
  return round((revenue - cost) / revenue);
}

export function calcRevenuePerClient(clients: Client[]) {
  if (!clients.length) {
    return 0;
  }

  const totalRevenue = clients.reduce((sum, client) => sum + client.revenue, 0);
  return round(totalRevenue / clients.length, 2);
}

export function calcRevenueDeltaPct(latestRevenue: number, previousRevenue: number) {
  if (previousRevenue <= 0) {
    return 0;
  }
  return round((latestRevenue - previousRevenue) / previousRevenue);
}

export function calcNetMarginDeltaPct(latestMargin: number, previousMargin: number) {
  return round(latestMargin - previousMargin);
}
