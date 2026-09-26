import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { PageHero } from "@/components/sections/page-hero";
import { InsightsGrid } from "@/components/sections/insights-grid";
import { siteConfig } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { withLocaleMetadata } from "@/lib/locale-metadata";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return withLocaleMetadata(locale, "/insights", {
    title: "الرؤى",
    description: `مقالات ورؤى من ${siteConfig.name} — مستقبل المطاعم، الامتثال، والتحول الرقمي في الخليج.`,
  });
}

export default async function InsightsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return (
    <PageLayout locale={locale}>
      <PageHero
        badge="الرؤى والمعرفة"
        title="رؤى"
        subtitle="محتوى لرواد مطاعم الخليج"
        description="مقالات عن التحول الرقمي، الامتثال، المدفوعات، والذكاء الاصطناعي في قطاع الضيافة."
      />
      <InsightsGrid />
    </PageLayout>
  );
}