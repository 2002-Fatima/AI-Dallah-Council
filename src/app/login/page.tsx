import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { PageHero } from "@/components/sections/page-hero";
import { LoginForm } from "@/components/forms/login-form";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "تسجيل الدخول",
  description: `سجّل دخولك إلى ${siteConfig.name} — نظام التشغيل الذكي لمطاعم الخليج.`,
};

export default function LoginPage() {
  return (
    <PageLayout>
      <PageHero
        badge="حسابك"
        title="تسجيل الدخول"
        description="ادخل إلى حسابك للوصول إلى منصة مجلس الدلّة"
      />
      <div className="mx-auto max-w-md px-4 pb-24 sm:px-6">
        <div className="rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur">
          <LoginForm />
        </div>
      </div>
    </PageLayout>
  );
}
