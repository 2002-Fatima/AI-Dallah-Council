import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { DemoExperience } from "@/components/demo/demo-experience";
import type { Locale } from "@/lib/i18n";
import { withLocaleMetadata } from "@/lib/locale-metadata";
import { getDictionary } from "@/lib/i18n/dictionaries";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const messages = getDictionary(locale);
  return withLocaleMetadata(locale, "/demo", messages.demo.metadata);
}

export default async function DemoPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return (
    <PageLayout locale={locale}>
      <DemoExperience />
    </PageLayout>
  );
}