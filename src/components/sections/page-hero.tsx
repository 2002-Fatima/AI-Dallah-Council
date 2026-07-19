"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/shared/fade-in";

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: "center" | "start";
}

export function PageHero({
  badge,
  title,
  subtitle,
  description,
  align = "center",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-12 md:pt-32 md:pb-16">
      <motion.div
        className="pointer-events-none absolute -top-32 right-1/3 size-[400px] rounded-full bg-gold/8 blur-[100px]"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className={align === "center" ? "text-center" : "text-start"}>
            {badge && (
              <Badge className="mb-6 border-gold/30 bg-gold/10 px-4 py-1.5 text-gold">
                {badge}
              </Badge>
            )}
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-xl text-gold md:text-2xl">{subtitle}</p>
            )}
            {description && (
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
