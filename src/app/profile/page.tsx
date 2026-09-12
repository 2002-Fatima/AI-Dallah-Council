import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { ProfileContent } from "@/components/pages/profile-content";

export const metadata: Metadata = {
  title: "الملف الشخصي",
  description: "معلومات حسابك في مجلس الدلّة.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ProfilePage() {
  return (
    <PageLayout>
      <ProfileContent />
    </PageLayout>
  );
}
