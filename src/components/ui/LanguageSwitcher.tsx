"use client";

import { useLanguage } from "@/src/i18n/LanguageProvider";

type LanguageSwitcherProps = {
  compact?: boolean;
};

export function LanguageSwitcher({ compact = false }: LanguageSwitcherProps) {
  const { locale, setLocale } = useLanguage();

  const buttonClasses = (target: "tr" | "en") =>
    `focus-ring rounded-full px-2.5 py-1.5 text-xs font-semibold tracking-wide transition ${
      locale === target
        ? compact
          ? "bg-white text-slate-950"
          : "bg-slate-950 text-white"
        : compact
          ? "bg-slate-900/60 text-slate-300 hover:text-white"
          : "bg-white/80 text-slate-500 hover:text-slate-950"
    }`;

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border p-1 ${
        compact ? "border-slate-700 bg-slate-950/70" : "border-[#d8cfbf] bg-white/80"
      }`}
      aria-label="Language switcher"
    >
      <button type="button" className={buttonClasses("tr")} onClick={() => setLocale("tr")}>
        TR
      </button>
      <button type="button" className={buttonClasses("en")} onClick={() => setLocale("en")}>
        EN
      </button>
    </div>
  );
}
