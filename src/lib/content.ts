import { ROUTES } from "@/lib/constants";
import type { Dictionary } from "@/lib/i18n/types";

export const siteConfig = {
  name: "مجلس الدلّة",
  nameEn: "AI Dallah",
  taglineEn: "Run Your Restaurant Smarter. Powered by AI. Built for the Gulf.",
  descriptionEn:
    "An Arabic-first AI operating system concept for Gulf restaurants, currently validating which workflows and capabilities should be built first.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aidallah.com",
  email: "hello@aidallah.com",
  locale: "ar_SA",
};

export const navLinks = [
  { href: ROUTES.about, key: "about" },
  { href: ROUTES.demo, key: "demo" },
  { href: ROUTES.roadmap, key: "roadmap" },
  { href: ROUTES.insights, key: "insights" },
] as const;

export const featureKeys = [
  "operations",
  "analytics",
  "zatca",
  "mada",
  "automation",
  "compliance",
] as const;

export const problemKeys = [
  "orders",
  "payments",
  "analytics",
  "compliance",
  "marketing",
  "operations",
] as const;

export const productConcepts = [
  {
    key: "operations",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
  },
  {
    key: "analytics",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
  },
  {
    key: "compliance",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
  },
  {
    key: "payments",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
  },
] as const;

export const footerLinks = {
  product: [
    { key: "demo", href: ROUTES.demo },
    { key: "roadmap", href: ROUTES.roadmap },
  ],
  company: [
    { key: "about", href: ROUTES.about },
    { key: "insights", href: ROUTES.insights },
    { key: "earlyAccess", href: ROUTES.earlyAccess },
  ],
  legal: [] as { key: keyof Dictionary["navigation"]; href: string }[],
} as const;

export const insightArticles = [
  {
    slug: "future-ai-gulf-restaurants",
    contentKey: "futureAiGulfRestaurants",
  },
  {
    slug: "vision-2030-restaurant-tech",
    contentKey: "vision2030RestaurantTech",
  },
  {
    slug: "arabic-first-digital-products",
    contentKey: "arabicFirstDigitalProducts",
  },
  {
    slug: "restaurant-automation",
    contentKey: "restaurantAutomation",
  },
  {
    slug: "zatca-explained",
    contentKey: "zatcaExplained",
  },
  {
    slug: "mada-explained",
    contentKey: "madaExplained",
  },
  {
    slug: "ai-for-hospitality",
    contentKey: "aiForHospitality",
  },
] as const;
