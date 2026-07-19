import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { ComingSoonPage } from "@/components/sections/coming-soon-page";
import { comingSoonPages } from "@/lib/content";

export const metadata: Metadata = {
  title: comingSoonPages.resources.title,
  description: comingSoonPages.resources.description,
};

export default function ResourcesPage() {
  return (
    <PageLayout>
      <ComingSoonPage {...comingSoonPages.resources} source="resources_page" />
    </PageLayout>
  );
}
