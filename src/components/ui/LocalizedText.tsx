"use client";

import { createElement, type ElementType } from "react";
import { useLanguage } from "@/src/i18n/LanguageProvider";
import { translateText } from "@/src/i18n/translations";

type LocalizedTextProps = {
  text: string;
  as?: ElementType;
  className?: string;
};

export function LocalizedText({ text, as = "span", className }: LocalizedTextProps) {
  const { locale } = useLanguage();
  return createElement(as, { className }, translateText(text, locale));
}

export function useTranslate() {
  const { locale } = useLanguage();
  return (text: string) => translateText(text, locale);
}
