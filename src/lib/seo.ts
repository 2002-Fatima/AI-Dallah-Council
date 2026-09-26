import { siteConfig } from "./content";
import { getDictionary } from "@/lib/i18n/dictionaries";

const description = getDictionary("ar").seo.description;

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.nameEn,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.webp`,
    description,
    email: siteConfig.email,
    areaServed: ["SA", "AE", "QA", "KW", "BH", "OM"],
    knowsLanguage: ["ar", "en"],
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description,
    inLanguage: "ar",
  };
}

export function getSoftwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description,
    applicationSubCategory: "Arabic-first restaurant operations concept",
    featureList: ["Arabic-first product concept", "Gulf restaurant workflows"],
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Restaurant owners in GCC",
    },
  };
}
