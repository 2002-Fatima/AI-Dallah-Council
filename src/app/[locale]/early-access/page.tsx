import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { PageHero } from "@/components/sections/page-hero";
import { EarlyAccessForm } from "@/components/forms/early-access-form";
import { siteConfig } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { withLocaleMetadata } from "@/lib/locale-metadata";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return withLocaleMetadata(locale, "/early-access", {
    title: "الوصول المبكر",
    description: `شارك في تحقق ${siteConfig.name} من احتياجات مطاعم الخليج واتجاه المنتج.`,
    openGraph: {
      title: `الوصول المبكر | ${siteConfig.name}`,
      description: siteConfig.description,
    },
  });
}

export default async function EarlyAccessPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return (
    <PageLayout locale={locale}>
      <PageHero
        badge="برنامج الوصول المبكر"
        title="انضم للوصول المبكر"
        subtitle="ساعدنا نتحقق من احتياجات مطاعم الخليج"
        description="شارك سياق مطعمك وتحدياته لمساعدتنا على تحديد المشكلة والقدرة الأولى التي تستحق البناء."
      />
      <div className="mx-auto max-w-2xl px-4 pb-24 sm:px-6">
        <div className="rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur md:p-10">
          <EarlyAccessForm />
        </div>
      </div>
    </PageLayout>
  );
}