import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { PageHero } from "@/components/sections/page-hero";
import { EarlyAccessForm } from "@/components/forms/early-access-form";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "الوصول المبكر",
  description: `انضم لبرنامج الوصول المبكر في ${siteConfig.name} — كن من أوائل شركاء المطاعم في الخليج.`,
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
        subtitle="كن من أوائل شركاء مجلس الدلّة"
        description="نضمّ حالياً أول شركاء المطاعم عبر منطقة الخليج. سجّل اهتمامك وسنتواصل معك فور فتح المنصة."
      />
      <div className="mx-auto max-w-2xl px-4 pb-24 sm:px-6">
        <div className="rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur md:p-10">
          <EarlyAccessForm />
        </div>
      </div>
    </PageLayout>
  );
}
