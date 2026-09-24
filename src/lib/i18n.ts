export const LOCALES = ["ar", "en", "ur"] as const;

export type Locale = (typeof LOCALES)[number];

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function localePath(path: string, locale: Locale = "ar") {
  return `/${locale}${path === "/" ? "" : path}`;
}