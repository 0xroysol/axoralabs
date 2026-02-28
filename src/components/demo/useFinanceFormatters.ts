"use client";

import { useMemo } from "react";
import { useLanguage } from "@/src/i18n/LanguageProvider";

export function useFinanceFormatters() {
  const { locale } = useLanguage();
  const region = locale === "tr" ? "tr-TR" : "en-US";

  const currencyFormatter = useMemo(
    () =>
      new Intl.NumberFormat(region, {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0
      }),
    [region]
  );

  const percentFormatter = useMemo(
    () =>
      new Intl.NumberFormat(region, {
        maximumFractionDigits: 1,
        minimumFractionDigits: 1
      }),
    [region]
  );

  const numberFormatter = useMemo(
    () =>
      new Intl.NumberFormat(region, {
        maximumFractionDigits: 1
      }),
    [region]
  );

  const dateFormatter = useMemo(
    () =>
      new Intl.DateTimeFormat(region, {
        year: "numeric",
        month: "short",
        day: "2-digit",
        timeZone: "UTC"
      }),
    [region]
  );

  return {
    locale,
    formatCurrency: (value: number) => currencyFormatter.format(value),
    formatPercentRatio: (value: number) => `${percentFormatter.format(value * 100)}%`,
    formatPercentValue: (value: number) => `${percentFormatter.format(value)}%`,
    formatMonths: (value: number) => numberFormatter.format(value),
    formatNumber: (value: number) => numberFormatter.format(value),
    formatDate: (isoDate: string) => dateFormatter.format(new Date(`${isoDate}T00:00:00Z`))
  };
}
