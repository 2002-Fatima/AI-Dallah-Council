import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { PageHero } from "@/components/sections/page-hero";
import { RoadmapSection } from "@/components/sections/roadmap-section";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "خارطة الطريق",
  description: `اطّلع على خارطة طريق ${siteConfig.name} — ما بنيناه، ما نعمل عليه، وما نخطط له.`,
};

export default function RoadmapPage() {
  return (
    <PageLayout>
      <PageHero
        badge="الشفافية"
        title="خارطة الطريق"
        subtitle="نبني علناً — مع شركائنا"
        description="نشارككم تقدمنا في بناء نظام التشغيل الذكي لمطاعم الخليج. ملاحظاتكم تُشكّل أولوياتنا."
      />
      <RoadmapSection />
    </PageLayout>
  );
}
