import type { Locale } from "@/lib/i18n";
import { ar } from "@/lib/i18n/dictionaries/ar";
import { en } from "@/lib/i18n/dictionaries/en";
import type { Dictionary } from "@/lib/i18n/types";

const dictionaries: Record<Locale, Dictionary> = {
  ar,
  en,
  ur: ar,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}