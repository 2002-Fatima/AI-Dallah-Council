import { siteConfig } from "@/lib/content";

export function StructuredData({ description }: { description: string }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.nameEn,
    url: siteConfig.url,
    description,
    email: siteConfig.email,
    areaServed: ["SA", "AE", "QA", "KW", "BH", "OM"],
    knowsLanguage: ["ar", "en", "ur"],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description,
    inLanguage: ["ar", "en", "ur"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
