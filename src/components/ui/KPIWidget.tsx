type KPIWidgetProps = {
  label: string;
  value: string;
  delta?: string;
};

export function KPIWidget({ label, value, delta }: KPIWidgetProps) {
  const positive = delta?.trim().startsWith("+");
  const negative = delta?.trim().startsWith("-");

  return (
    <article className="surface rounded-xl p-4">
      <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <div className="mt-2 flex items-end justify-between gap-3">
        <p className="font-display text-lg font-semibold text-slate-100">{value}</p>
        {delta ? (
          <span
            className={`text-xs font-semibold ${
              positive ? "text-emerald-300" : negative ? "text-rose-300" : "text-slate-300"
            }`}
          >
            {delta}
          </span>
        ) : null}
      </div>
    </article>
  );
}
