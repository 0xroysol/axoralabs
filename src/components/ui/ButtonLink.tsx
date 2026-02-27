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
      ? "border border-slate-100 bg-slate-50 text-slate-950 hover:bg-white"
      : "border border-slate-600 bg-slate-900/40 text-slate-100 hover:border-slate-400 hover:bg-slate-900";

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold tracking-wide transition ${classes} ${className}`}
    >
      {children}
    </Link>
  );
}
