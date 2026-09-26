import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { PageHero } from "@/components/sections/page-hero";
import { RoadmapSection } from "@/components/sections/roadmap-section";
import { siteConfig } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { withLocaleMetadata } from "@/lib/locale-metadata";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return withLocaleMetadata(locale, "/roadmap", {
    title: "خارطة الطريق",
    description: `اطّلع على خارطة طريق ${siteConfig.name} — ما بنيناه، ما نعمل عليه، وما نخطط له.`,
  });
}

export default async function RoadmapPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return (
    <PageLayout locale={locale}>
      <PageHero
        badge="الشفافية"
        title="خارطة الطريق"
        subtitle="نبني علناً — مع شركائنا"
        description="نشارككم تقدمنا في بناء نظام التشغيل الذكي لمطاعم الخليج. ملاحظاتكم تُشكّل أولوياتنا."
      />
      <RoadmapSection />
    </PageLayout>
  );
}