import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { ComingSoonPage } from "@/components/sections/coming-soon-page";
import { comingSoonPages } from "@/lib/content";

export const metadata: Metadata = {
  title: comingSoonPages.demo.title,
  description: comingSoonPages.demo.description,
};

export default function DemoPage() {
  const page = comingSoonPages.demo;
  return (
    <PageLayout>
      <ComingSoonPage {...page} source="demo_page" />
    </PageLayout>
  );
}
