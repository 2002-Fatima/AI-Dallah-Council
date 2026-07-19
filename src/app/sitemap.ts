import type { MetadataRoute } from "next";
import { siteConfig, insightArticles } from "@/lib/content";
import { ROUTES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages = [
    ROUTES.home,
    ROUTES.about,
    ROUTES.earlyAccess,
    ROUTES.contactSales,
    ROUTES.login,
    ROUTES.signup,
    ROUTES.roadmap,
    ROUTES.insights,
    ROUTES.demo,
    ROUTES.pricing,
    ROUTES.enterprise,
    ROUTES.platform,
    ROUTES.resources,
  ];

  const insightPages = insightArticles.map((a) => `/insights/${a.slug}`);

  return [...staticPages, ...insightPages].map((path) => ({
    url: `${baseUrl}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: path === ROUTES.home ? "weekly" : "monthly",
    priority: path === ROUTES.home ? 1 : path === ROUTES.earlyAccess ? 0.9 : 0.7,
  }));
}
