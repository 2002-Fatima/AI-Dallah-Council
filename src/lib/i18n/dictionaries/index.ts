import type { Locale } from "@/lib/i18n";
import { ar } from "@/lib/i18n/dictionaries/ar";
import type { Dictionary } from "@/lib/i18n/types";

const dictionaries: Record<Locale, Dictionary> = {
  ar,
  en: ar,
  ur: ar,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}