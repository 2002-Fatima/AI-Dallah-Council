import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { PageHero } from "@/components/sections/page-hero";
import { SignupForm } from "@/components/forms/signup-form";
import { siteConfig } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { withLocaleMetadata } from "@/lib/locale-metadata";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return withLocaleMetadata(locale, "/signup", {
    title: "إنشاء حساب",
    description: `أنشئ حساباً في ${siteConfig.name} لاستكشاف رؤية المنتج.`,
  });
}

export default async function SignupPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return (
    <PageLayout locale={locale}>
      <PageHero
        badge="ابدأ الآن"
        title="إنشاء حساب"
        description="أنشئ حساباً في مجلس الدلّة لاستكشاف رؤية نظام تشغيل عربي أولاً لمطاعم الخليج"
      />
      <div className="mx-auto max-w-md px-4 pb-24 sm:px-6">
        <div className="rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur">
          <SignupForm />
        </div>
      </div>
    </PageLayout>
  );
}