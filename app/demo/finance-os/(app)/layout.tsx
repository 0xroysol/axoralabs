import type { ReactNode } from "react";
import { FinanceDemoLayoutShell } from "@/src/components/demo/FinanceDemoLayoutShell";

export default function FinanceOsAppLayout({
  children
}: {
  children: ReactNode;
}) {
  return <FinanceDemoLayoutShell>{children}</FinanceDemoLayoutShell>;
}
