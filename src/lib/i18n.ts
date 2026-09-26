export const LOCALES = ["ar", "en", "ur"] as const;

export type Locale = (typeof LOCALES)[number];

export const localeConfig = {
  ar: { direction: "rtl", openGraphLocale: "ar_SA" },
  en: { direction: "ltr", openGraphLocale: "en_US" },
  ur: { direction: "rtl", openGraphLocale: "ur_PK" },
} as const satisfies Record<Locale, { direction: "rtl" | "ltr"; openGraphLocale: string }>;

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function localePath(path: string, locale: Locale = "ar") {
  const normalizedPath = path.replace(/^\/(ar|en|ur)(?=\/|$)/, "") || "/";
  return `/${locale}${normalizedPath === "/" ? "" : normalizedPath}`;
}
