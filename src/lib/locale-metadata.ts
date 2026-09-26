import type { Metadata } from "next";
import { siteConfig } from "@/lib/content";
import { localeConfig, localePath, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n/dictionaries";

export function withLocaleMetadata(
  locale: Locale,
  pathname: string,
  pageMetadata: Metadata
): Metadata {
  const url = new URL(localePath(pathname, locale), siteConfig.url);
  const description =
    typeof pageMetadata.description === "string"
      ? pageMetadata.description
      : getDictionary(locale).seo.description;
  const title =
    typeof pageMetadata.title === "string"
      ? `${pageMetadata.title} | ${siteConfig.name}`
      : siteConfig.name;

  return {
    ...pageMetadata,
    alternates: {
      ...pageMetadata.alternates,
      canonical: url,
    },
    openGraph: {
      type: "website",
      ...pageMetadata.openGraph,
      locale: localeConfig[locale].openGraphLocale,
      url: url.toString(),
      siteName: siteConfig.name,
      title: pageMetadata.openGraph?.title ?? title,
      description: pageMetadata.openGraph?.description ?? description,
    },
  };
}