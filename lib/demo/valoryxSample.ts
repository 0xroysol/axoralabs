import type { BudgetLine, CashData, Client, ExpenseBreakdown, FinanceDemoData, Invoice, MonthlyFinancial } from "./types";

export const monthlyFinancials: MonthlyFinancial[] = [
  { month: "Jan", revenue: 148000, expenses: 121000 },
  { month: "Feb", revenue: 152000, expenses: 124000 },
  { month: "Mar", revenue: 158000, expenses: 129000 },
  { month: "Apr", revenue: 164000, expenses: 136000 },
  { month: "May", revenue: 171000, expenses: 142000 },
  { month: "Jun", revenue: 176000, expenses: 148000 },
  { month: "Jul", revenue: 182000, expenses: 156000 },
  { month: "Aug", revenue: 189000, expenses: 165000 },
  { month: "Sep", revenue: 178000, expenses: 160000 },
  { month: "Oct", revenue: 173000, expenses: 158000 },
  { month: "Nov", revenue: 168000, expenses: 154000 },
  { month: "Dec", revenue: 165000, expenses: 152000 }
];

export const expenseBreakdown: ExpenseBreakdown = {
  payroll: 82000,
  contractors: 18000,
  tools: 9500,
  overhead: 14000,
  taxes: 8500
};

export const cashData: CashData = {
  currentCash: 420000,
  monthlyBurn: 58000
};

export const clients: Client[] = [
  { name: "Aurex Fitness", revenue: 42000, cost: 30000 },
  { name: "Novera Tech", revenue: 32000, cost: 23000 },
  { name: "Skalix Apparel", revenue: 21000, cost: 15000 },
  { name: "Zenaro Health", revenue: 18000, cost: 13000 },
  { name: "Lumetri Home", revenue: 15000, cost: 11000 },
  { name: "Virexo Labs", revenue: 12000, cost: 9000 },
  { name: "Cortava Beauty", revenue: 9000, cost: 7000 },
  { name: "Branvia Foods", revenue: 8000, cost: 6000 },
  { name: "Orlanta Media", revenue: 7000, cost: 5500 },
  { name: "Kenvra Auto", revenue: 6000, cost: 4500 },
  { name: "Silvona Retail", revenue: 5000, cost: 3800 },
  { name: "Torvix Studio", revenue: 4000, cost: 3200 }
];

export const invoices: Invoice[] = [
  { client: "Aurex Fitness", amount: 42000, status: "paid", dueDate: "2026-02-10" },
  { client: "Novera Tech", amount: 32000, status: "overdue", dueDate: "2026-01-15" },
  { client: "Skalix Apparel", amount: 21000, status: "overdue", dueDate: "2026-01-06" },
  { client: "Zenaro Health", amount: 18000, status: "pending", dueDate: "2026-02-02" },
  { client: "Lumetri Home", amount: 15000, status: "overdue", dueDate: "2025-12-22" },
  { client: "Virexo Labs", amount: 12000, status: "pending", dueDate: "2026-01-28" },
  { client: "Cortava Beauty", amount: 9000, status: "overdue", dueDate: "2025-12-09" }
];

export const budget: BudgetLine[] = [
  { category: "Payroll", budget: 78000, actual: 82000 },
  { category: "Contractors", budget: 15000, actual: 18000 },
  { category: "Tools", budget: 10000, actual: 9500 },
  { category: "Overhead", budget: 12000, actual: 14000 },
  { category: "Taxes", budget: 9000, actual: 8500 }
];

export const valoryxSample: FinanceDemoData = {
  monthlyFinancials,
  expenseBreakdown,
  cashData,
  clients,
  invoices,
  budget
};
