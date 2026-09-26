import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { ComingSoonPage } from "@/components/sections/coming-soon-page";
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
  const messages = getDictionary(locale);
  return (
    <PageLayout locale={locale}>
      <ComingSoonPage
        title={messages.demo.metadata.title}
        subtitle={messages.demo.subtitle}
        description={messages.demo.description}
        badge={messages.demo.badge}
        source="demo_page"
      />
    </PageLayout>
  );
}