import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { VisionSection } from "@/components/sections/vision";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "رؤيتنا",
  description: `تعرّف على رؤية ${siteConfig.name} — نظام تشغيل عربي أولاً لمطاعم الخليج.`,
};

export default function VisionPage() {
  return (
    <PageLayout>
      <VisionSection />
    </PageLayout>
  );
}
