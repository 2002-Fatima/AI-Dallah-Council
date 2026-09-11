import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock } from "lucide-react";
import { PageLayout } from "@/components/layout/page-layout";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { insightArticles, siteConfig } from "@/lib/content";
import { ROUTES } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insightArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = insightArticles.find((a) => a.slug === slug);
  if (!article) return { title: "غير موجود" };

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | ${siteConfig.name}`,
      description: article.excerpt,
    },
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = insightArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <PageLayout>
      <article className="mx-auto max-w-3xl px-4 pt-28 pb-24 sm:px-6 md:pt-32">
        <Link
          href={ROUTES.insights}
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
        >
          <ArrowRight className="size-4" />
          العودة للرؤى
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
          <h3 className="text-xl font-bold">مهتم بـ مجلس الدلّة؟</h3>
          <p className="mt-2 text-muted-foreground">
            شارك في التحقق من احتياجات مطاعم الخليج واتجاه المنتج
          </p>
          <LinkButton
            href={ROUTES.earlyAccess}
            className="mt-6 bg-gradient-to-l from-gold to-gold-dim text-background hover:opacity-90"
          >
            انضم للوصول المبكر
          </LinkButton>
        </div>
      </article>
    </PageLayout>
  );
}
