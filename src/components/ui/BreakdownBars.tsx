type BreakdownBarsProps = {
  items: { name: string; share: number }[];
};

export function BreakdownBars({ items }: BreakdownBarsProps) {
  return (
    <div className="surface rounded-xl p-4">
      <p className="mb-3 text-xs uppercase tracking-[0.16em] text-slate-400">Cost Structure</p>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.name}>
            <div className="mb-1 flex items-center justify-between text-sm text-slate-200">
              <span>{item.name}</span>
              <span>{item.share}%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-800">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-cyan to-violet"
                style={{ width: `${item.share}%` }}
                aria-hidden="true"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
