import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { ComingSoonPage } from "@/components/sections/coming-soon-page";
import { comingSoonPages } from "@/lib/content";

export const metadata: Metadata = {
  title: comingSoonPages.enterprise.title,
  description: comingSoonPages.enterprise.description,
};

export default function EnterprisePage() {
  return (
    <PageLayout>
      <ComingSoonPage
        {...comingSoonPages.enterprise}
        source="enterprise_page"
      />
    </PageLayout>
  );
}
