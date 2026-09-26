import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { PageHero } from "@/components/sections/page-hero";
import { AboutContent } from "@/components/sections/about-content";
import { siteConfig } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { withLocaleMetadata } from "@/lib/locale-metadata";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return withLocaleMetadata(locale, "/about", {
    title: "من نحن",
    description: `تعرّف على ${siteConfig.name} — نظام التشغيل الذكي الذي نبنيه لمطاعم الخليج.`,
  });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return (
    <PageLayout locale={locale}>
      <PageHero
        badge="قصتنا"
        title="من نحن"
        subtitle="نبني مستقبل تشغيل المطاعم في الخليج"
        description="AI Dallah — an Arabic-first AI operating system concept for Gulf restaurants"
      />
      <AboutContent />
    </PageLayout>
  );
}