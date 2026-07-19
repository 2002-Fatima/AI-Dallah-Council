import { siteConfig } from "./content";

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.nameAr,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.webp`,
    description: siteConfig.description,
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
    description: siteConfig.description,
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
    description: siteConfig.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "SAR",
      description: "برنامج الوصول المبكر",
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Restaurant owners in GCC",
    },
  };
}
