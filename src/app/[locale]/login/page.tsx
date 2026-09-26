import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { PageHero } from "@/components/sections/page-hero";
import { LoginForm } from "@/components/forms/login-form";
import type { Locale } from "@/lib/i18n";
import { withLocaleMetadata } from "@/lib/locale-metadata";
import { getDictionary } from "@/lib/i18n/dictionaries";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return withLocaleMetadata(locale, "/login", getDictionary(locale).auth.metadataLogin);
}

export default async function LoginPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const messages = getDictionary(locale);
  return (
    <PageLayout locale={locale}>
      <PageHero
        badge={messages.auth.login.badge}
        title={messages.auth.login.title}
        description={messages.auth.login.description}
      />
      <div className="mx-auto max-w-md px-4 pb-24 sm:px-6">
        <div className="rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur">
          <LoginForm />
        </div>
      </div>
    </PageLayout>
  );
}