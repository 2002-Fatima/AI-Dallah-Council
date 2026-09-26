import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { ComingSoonPage } from "@/components/sections/coming-soon-page";
import { comingSoonPages } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { withLocaleMetadata } from "@/lib/locale-metadata";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return withLocaleMetadata(locale, "/demo", {
    title: comingSoonPages.demo.title,
    description: comingSoonPages.demo.description,
  });
}

export default async function DemoPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const page = comingSoonPages.demo;
  return (
    <PageLayout locale={locale}>
      <ComingSoonPage {...page} source="demo_page" />
    </PageLayout>
  );
}