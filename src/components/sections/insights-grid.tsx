"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { StaggerContainer, StaggerItem } from "@/components/shared/fade-in";
import { insightArticles } from "@/lib/content";
import { useLocale } from "@/components/providers/locale-provider";
import { useDictionary } from "@/components/providers/locale-provider";
import { localePath } from "@/lib/i18n";

export function InsightsGrid() {
  const locale = useLocale();
  const messages = useDictionary();
  const articles = insightArticles.map((reference) => ({
    slug: reference.slug,
    ...messages.insights.articles[reference.contentKey],
  }));

  return (
    <section className="pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <StaggerItem key={article.slug}>
              <motion.div whileHover={{ y: -6 }}>
                <Link href={localePath(`/insights/${article.slug}`, locale)}>
                  <Card className="group h-full border-border/50 bg-card/50 p-6 backdrop-blur transition-all hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5">
                    <Badge variant="outline" className="border-gold/30 text-gold">
                      {article.category}
                    </Badge>
                    <h2 className="mt-4 text-lg font-bold leading-snug group-hover:text-gold">
                      {article.title}
                    </h2>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                      {article.excerpt}
                    </p>
                    <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                      <span>{article.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="size-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm text-gold opacity-0 transition-opacity group-hover:opacity-100">
                      {messages.common.readMore}
                      <ArrowLeft className="size-3" />
                    </span>
                  </Card>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
