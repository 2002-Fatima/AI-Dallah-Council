import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { ProfileContent } from "@/components/pages/profile-content";
import type { Locale } from "@/lib/i18n";
import { withLocaleMetadata } from "@/lib/locale-metadata";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return withLocaleMetadata(locale, "/profile", {
    title: "الملف الشخصي",
    description: "معلومات حسابك في مجلس الدلّة.",
    robots: {
      index: false,
      follow: false,
    },
  });
}

export default async function ProfilePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return (
    <PageLayout locale={locale}>
      <ProfileContent />
    </PageLayout>
  );
}