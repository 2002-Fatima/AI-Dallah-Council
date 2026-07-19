import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { PageHero } from "@/components/sections/page-hero";
import { OnboardingForm } from "@/components/forms/onboarding-form";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "إعداد الحساب",
  description: `أكمل إعداد حسابك في ${siteConfig.name}.`,
};

export default function OnboardingPage() {
  return (
    <PageLayout>
      <PageHero
        badge="خطوة أخيرة"
        title="مرحباً بك في مجلس الدلّة"
        description="ساعدنا نفهم دورك لنخصّص تجربتك"
      />
      <div className="mx-auto max-w-lg px-4 pb-24 sm:px-6">
        <div className="rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur">
          <OnboardingForm />
        </div>
      </div>
    </PageLayout>
  );
}
