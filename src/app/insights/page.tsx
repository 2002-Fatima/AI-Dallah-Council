import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { PageHero } from "@/components/sections/page-hero";
import { InsightsGrid } from "@/components/sections/insights-grid";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "الرؤى",
  description: `مقالات ورؤى من ${siteConfig.name} — مستقبل المطاعم، الامتثال، والتحول الرقمي في الخليج.`,
};

export default function InsightsPage() {
  return (
    <PageLayout>
      <PageHero
        badge="الرؤى والمعرفة"
        title="رؤى"
        subtitle="محتوى لرواد مطاعم الخليج"
        description="مقالات عن التحول الرقمي، الامتثال، المدفوعات، والذكاء الاصطناعي في قطاع الضيافة."
      />
      <InsightsGrid />
    </PageLayout>
  );
}
