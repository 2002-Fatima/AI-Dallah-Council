import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { PageHero } from "@/components/sections/page-hero";
import { SignupForm } from "@/components/forms/signup-form";
import type { Locale } from "@/lib/i18n";
import { withLocaleMetadata } from "@/lib/locale-metadata";
import { getDictionary } from "@/lib/i18n/dictionaries";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return withLocaleMetadata(locale, "/signup", getDictionary(locale).auth.metadataSignup);
}

export default async function SignupPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const messages = getDictionary(locale);
  return (
    <PageLayout locale={locale}>
      <PageHero
        badge={messages.auth.signup.badge}
        title={messages.auth.signup.title}
        description={messages.auth.signup.description}
      />
      <div className="mx-auto max-w-md px-4 pb-24 sm:px-6">
        <div className="rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur">
          <SignupForm />
        </div>
      </div>
    </PageLayout>
  );
}