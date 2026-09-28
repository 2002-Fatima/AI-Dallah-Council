import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import type { Locale } from "@/lib/i18n";

interface PageLayoutProps {
  children: React.ReactNode;
  locale: Locale;
}

export function PageLayout({ children, locale }: PageLayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 md:pt-28 lg:pt-32">{children}</main>
      <Footer locale={locale} />
    </>
  );
}
