"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
};

export function PageHero({ badge, title, description, className }: PageHeroProps) {
  return (
    <section className={cn("relative pt-28 pb-12 md:pt-32 md:pb-16", className)}>
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute -top-20 right-1/4 size-80 rounded-full bg-gold/10 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 size-64 rounded-full bg-emerald/10 blur-[80px]" />
      </motion.div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-6 border-gold/30 bg-gold/10 px-4 py-1.5 text-gold">
              {badge}
            </Badge>
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl"
        >
          <span className="bg-gradient-to-l from-gold via-gold-light to-gold bg-clip-text text-transparent">
            {title}
          </span>
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
