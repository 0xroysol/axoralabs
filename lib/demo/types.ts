export type MonthlyFinancial = {
  month: string;
  revenue: number;
  expenses: number;
};

export type ExpenseBreakdown = {
  payroll: number;
  contractors: number;
  tools: number;
  overhead: number;
  taxes: number;
};

export type CashData = {
  currentCash: number;
  monthlyBurn: number;
};

export type Client = {
  name: string;
  revenue: number;
  cost: number;
};

export type InvoiceStatus = "paid" | "pending" | "overdue";

export type Invoice = {
  client: string;
  amount: number;
  status: InvoiceStatus;
  dueDate: string;
};

export type BudgetLine = {
  category: string;
  budget: number;
  actual: number;
};

export type FinanceDemoData = {
  monthlyFinancials: MonthlyFinancial[];
  expenseBreakdown: ExpenseBreakdown;
  cashData: CashData;
  clients: Client[];
  invoices: Invoice[];
  budget: BudgetLine[];
};

export type AgingBuckets = {
  "0-30": number;
  "31-60": number;
  "61-90": number;
  "90+": number;
};

export type AlertLevel = "info" | "warning" | "danger";

export type AlertCode =
  | "alert_high_concentration"
  | "alert_payroll_ratio_high"
  | "alert_net_margin_low"
  | "alert_overdue_high"
  | "alert_contractors_over_budget";

export type AlertItem = {
  level: AlertLevel;
  code: AlertCode;
  meta: Record<string, number>;
};
