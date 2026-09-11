import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { PageHero } from "@/components/sections/page-hero";
import { EarlyAccessForm } from "@/components/forms/early-access-form";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "الوصول المبكر",
  description: `شارك في تحقق ${siteConfig.name} من احتياجات مطاعم الخليج واتجاه المنتج.`,
  openGraph: {
    title: `الوصول المبكر | ${siteConfig.name}`,
    description: siteConfig.description,
  },
};

export default function EarlyAccessPage() {
  return (
    <PageLayout>
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
