"use client";

import { useLanguage } from "@/src/i18n/LanguageProvider";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  const buttonClasses = (target: "tr" | "en") =>
    `focus-ring rounded-md px-2.5 py-1.5 text-xs font-semibold tracking-wide transition ${
      locale === target
        ? "bg-slate-100 text-slate-900"
        : "bg-slate-900/70 text-slate-300 hover:text-slate-100"
    }`;

  return (
    <div className="inline-flex items-center gap-1 rounded-lg border border-slate-600 bg-slate-900/50 p-1" aria-label="Language switcher">
      <button type="button" className={buttonClasses("tr")} onClick={() => setLocale("tr")}>
        TR
      </button>
      <button type="button" className={buttonClasses("en")} onClick={() => setLocale("en")}>
        EN
      </button>
    </div>
  );
}
