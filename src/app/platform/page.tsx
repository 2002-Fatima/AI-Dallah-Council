import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { ComingSoonPage } from "@/components/sections/coming-soon-page";
import { comingSoonPages } from "@/lib/content";

export const metadata: Metadata = {
  title: comingSoonPages.platform.title,
  description: comingSoonPages.platform.description,
};

export default function PlatformPage() {
  return (
    <PageLayout>
      <ComingSoonPage {...comingSoonPages.platform} source="platform_page" />
    </PageLayout>
  );
}
