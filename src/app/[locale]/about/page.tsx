import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { PageHero } from "@/components/sections/page-hero";
import { AboutContent } from "@/components/sections/about-content";
import type { Locale } from "@/lib/i18n";
import { withLocaleMetadata } from "@/lib/locale-metadata";
import { getDictionary } from "@/lib/i18n/dictionaries";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return withLocaleMetadata(locale, "/about", getDictionary(locale).about.metadata);
}

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const messages = getDictionary(locale);
  return (
    <PageLayout locale={locale}>
      <PageHero {...messages.about.hero} />
      <AboutContent />
    </PageLayout>
  );
}