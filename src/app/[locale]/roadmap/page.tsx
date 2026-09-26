import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { PageHero } from "@/components/sections/page-hero";
import { RoadmapSection } from "@/components/sections/roadmap-section";
import type { Locale } from "@/lib/i18n";
import { withLocaleMetadata } from "@/lib/locale-metadata";
import { getDictionary } from "@/lib/i18n/dictionaries";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return withLocaleMetadata(locale, "/roadmap", getDictionary(locale).roadmap.metadata);
}

export default async function RoadmapPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const messages = getDictionary(locale);
  return (
    <PageLayout locale={locale}>
      <PageHero {...messages.roadmap.hero} />
      <RoadmapSection />
    </PageLayout>
  );
}