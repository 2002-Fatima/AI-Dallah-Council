import type { MetadataRoute } from "next";
import { siteConfig, insightArticles } from "@/lib/content";
import { LOCALES, localePath } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const staticRoutes = ["/", "/about", "/demo", "/roadmap", "/insights", "/early-access"];

  const localizedRoutes = LOCALES.flatMap((locale) =>
    staticRoutes.map((route) => localePath(route, locale))
  );

  const localizedInsights = LOCALES.flatMap((locale) =>
    insightArticles.map((article) => localePath(`/insights/${article.slug}`, locale))
  );

  const urls = [...new Set([...localizedRoutes, ...localizedInsights])];

  return urls.map((path) => {
    const normalizedPath = path === "/" ? "" : path;
    const isHome = path === "/ar" || path === "/en" || path === "/ur";

    return {
      url: `${baseUrl}${normalizedPath}`,
      lastModified: new Date(),
      changeFrequency: isHome ? "weekly" : "monthly",
      priority: isHome ? 1 : path.includes("/early-access") ? 0.9 : 0.7,
    };
  });
}
