import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { InsightArticle } from "@/lib/types";
import { localePath } from "@/lib/i18n";

type InsightCardProps = {
  article: InsightArticle;
};

export function InsightCard({ article }: InsightCardProps) {
  return (
    <Link href={localePath(`/insights/${article.slug}`)} className="group block h-full">
      <Card className="h-full overflow-hidden border-border/50 bg-card/50 p-0 backdrop-blur transition-all hover:-translate-y-1 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5">
        <div className="relative aspect-[16/10] overflow-hidden">
          {article.image ? (
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-bl from-gold/20 via-card to-emerald/10" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <Badge className="absolute top-3 right-3 border-gold/30 bg-background/80 text-gold backdrop-blur">
            {article.category}
          </Badge>
        </div>
        <CardContent className="space-y-3 p-5">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="size-3" />
            {article.readTime} · {article.date}
          </div>
          <h3 className="text-lg font-bold leading-snug transition-colors group-hover:text-gold">
            {article.title}
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {article.excerpt}
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-gold">
            اقرأ المزيد
            <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
