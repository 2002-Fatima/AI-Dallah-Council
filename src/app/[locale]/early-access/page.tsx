import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { PageHero } from "@/components/sections/page-hero";
import { EarlyAccessForm } from "@/components/forms/early-access-form";
import type { Locale } from "@/lib/i18n";
import { withLocaleMetadata } from "@/lib/locale-metadata";
import { getDictionary } from "@/lib/i18n/dictionaries";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const messages = getDictionary(locale);
  return withLocaleMetadata(locale, "/early-access", {
    ...messages.earlyAccess.metadata,
    openGraph: {
      title: messages.earlyAccess.metadata.openGraphTitle,
      description: messages.seo.description,
    },
  });
}

export default async function EarlyAccessPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const messages = getDictionary(locale);
  return (
    <PageLayout locale={locale}>
      <PageHero {...messages.earlyAccess.hero} />
      <div className="mx-auto max-w-2xl px-4 pb-24 sm:px-6">
        <div className="rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur md:p-10">
          <EarlyAccessForm />
        </div>
      </div>
    </PageLayout>
  );
}