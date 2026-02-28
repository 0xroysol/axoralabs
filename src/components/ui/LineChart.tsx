"use client";

import { useTranslate } from "@/src/components/ui/LocalizedText";

type LineChartProps = {
  values: number[];
};

export function LineChart({ values }: LineChartProps) {
  const t = useTranslate();
  const width = 520;
  const height = 180;
  const padding = 16;
  const maxValue = Math.max(...values);
  const minValue = Math.min(...values);

  const points = values
    .map((value, index) => {
      const x = padding + (index / (values.length - 1)) * (width - padding * 2);
      const y = height - padding - ((value - minValue) / (maxValue - minValue || 1)) * (height - padding * 2);
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="surface rounded-xl p-4">
      <p className="mb-3 text-xs uppercase tracking-[0.16em] text-slate-500">{t("Revenue Trend (12 Months)")}</p>
      <svg viewBox={`0 0 ${width} ${height}`} className="h-44 w-full" role="img" aria-label="Revenue trend line chart">
        <line x1={16} y1={164} x2={504} y2={164} stroke="rgba(148,163,184,0.24)" strokeWidth="1" />
        <polyline
          points={points}
          fill="none"
          stroke="#bfdbfe"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
