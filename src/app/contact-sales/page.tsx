import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { PageHero } from "@/components/sections/page-hero";
import { ContactSalesForm } from "@/components/forms/contact-sales-form";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "تواصل مع المبيعات",
  description: `تواصل مع فريق المبيعات في ${siteConfig.name} — حلول مخصصة لمطاعم وسلاسل المطاعم في الخليج.`,
};

export default function ContactSalesPage() {
  return (
    <PageLayout>
      <PageHero
        badge="فريق المبيعات"
        title="تواصل مع المبيعات"
        subtitle="حلول مخصصة لمطعمك"
        description="سواء كنت مطعماً فردياً أو سلسلة كبرى — فريقنا جاهز لمساعدتك في فهم كيف يمكن لـ مجلس الدلّة تحسين عملياتك."
      />
      <div className="mx-auto max-w-2xl px-4 pb-24 sm:px-6">
        <div className="rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur md:p-10">
          <ContactSalesForm />
        </div>
      </div>
    </PageLayout>
  );
}
