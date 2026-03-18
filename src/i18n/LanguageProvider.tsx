"use client";

import { createContext, useContext, useEffect, useMemo } from "react";
import { studioSeoByLocale } from "@/src/content/studioContent";
import type { Locale } from "@/src/i18n/translations";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (_next: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);
const FORCED_LOCALE: Locale = "en";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = FORCED_LOCALE;
    const seo = studioSeoByLocale.en;
    document.title = seo.title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute("content", seo.description);
    }
  }, []);

  const value = useMemo(
    () => ({
      locale: FORCED_LOCALE,
      setLocale: () => undefined
    }),
    []
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
