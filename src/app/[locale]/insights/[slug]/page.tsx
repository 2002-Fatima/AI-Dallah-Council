import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock } from "lucide-react";
import { PageLayout } from "@/components/layout/page-layout";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { insightArticles, siteConfig } from "@/lib/content";
import { ROUTES } from "@/lib/constants";
import { LOCALES, localePath, type Locale } from "@/lib/i18n";
import { withLocaleMetadata } from "@/lib/locale-metadata";
import { getDictionary } from "@/lib/i18n/dictionaries";

interface Props {
  params: Promise<{ locale: Locale; slug: string }>;
}

export async function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    insightArticles.map((article) => ({ locale, slug: article.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const articleReference = insightArticles.find((item) => item.slug === slug);
  if (!articleReference) return { title: "غير موجود" };
  const article = getDictionary(locale).insights.articles[articleReference.contentKey];

  return withLocaleMetadata(locale, `/insights/${slug}`, {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | ${siteConfig.name}`,
      description: article.excerpt,
    },
  });
}

export default async function InsightArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  const articleReference = insightArticles.find((item) => item.slug === slug);
  if (!articleReference) notFound();
  const messages = getDictionary(locale);
  const article = messages.insights.articles[articleReference.contentKey];

  return (
    <PageLayout locale={locale}>
      <article className="mx-auto max-w-3xl px-4 pt-28 pb-24 sm:px-6 md:pt-32">
        <Link
          href={localePath(ROUTES.insights, locale)}
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
        >
          <ArrowRight className="size-4" />
          {messages.insights.back}
        </Link>

        <Badge variant="outline" className="border-gold/30 text-gold">
          {article.category}
        </Badge>

        <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
          {article.title}
        </h1>

        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>{article.date}</span>
          <span className="flex items-center gap-1">
            <Clock className="size-3.5" />
            {article.readTime}
          </span>
        </div>

        <div className="mt-10 space-y-6">
          {article.content.map((paragraph, i) => (
            <p key={i} className="text-lg leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-gold/30 bg-gold/5 p-8 text-center">
          <h3 className="text-xl font-bold">{messages.insights.articleCtaTitle}</h3>
          <p className="mt-2 text-muted-foreground">
            {messages.insights.articleCtaDescription}
          </p>
          <LinkButton
            href={localePath(ROUTES.earlyAccess, locale)}
            className="mt-6 bg-gradient-to-l from-gold to-gold-dim text-background hover:opacity-90"
          >
            {messages.insights.articleCtaButton}
          </LinkButton>
        </div>
      </article>
    </PageLayout>
  );
}