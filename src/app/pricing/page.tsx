import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { ComingSoonPage } from "@/components/sections/coming-soon-page";
import { comingSoonPages } from "@/lib/content";

export const metadata: Metadata = {
  title: comingSoonPages.pricing.title,
  description: comingSoonPages.pricing.description,
};

export default function PricingPage() {
  return (
    <PageLayout>
      <ComingSoonPage {...comingSoonPages.pricing} source="pricing_page" />
    </PageLayout>
  );
}
