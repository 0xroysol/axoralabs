import Link from "next/link";
import { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
};

export function ButtonLink({ href, variant = "primary", children, className = "" }: ButtonLinkProps) {
  const classes =
    variant === "primary"
      ? "bg-cyan text-bg hover:opacity-90"
      : "border border-slate-600 bg-slate-900/50 text-slate-100 hover:border-cyan/60 hover:text-cyan";

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition ${classes} ${className}`}
    >
      {children}
    </Link>
  );
}
