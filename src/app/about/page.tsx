import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { PageHero } from "@/components/sections/page-hero";
import { AboutContent } from "@/components/sections/about-content";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "من نحن",
  description: `تعرّف على ${siteConfig.name} — نظام التشغيل الذكي الذي نبنيه لمطاعم الخليج.`,
};

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        badge="قصتنا"
        title="من نحن"
        subtitle="نبني مستقبل تشغيل المطاعم في الخليج"
        description="AI Dallah — The AI Operating System for Gulf Restaurants"
      />
      <AboutContent />
    </PageLayout>
  );
}
