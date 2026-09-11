"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/fade-in";
import { productConcepts } from "@/lib/content";

export function ShowcaseSection() {
  return (
    <section id="showcase" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent" />

      <motion.div
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <SectionHeader
          badge="مسارات المنتج"
          title="تصورات لما قد نبنيه"
          description="نستكشف هذه المسارات لفهم أي workflows تشغيلية تستحق أن تصبح جزءاً من نظام عربي أولاً لمطاعم الخليج."
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productConcepts.map((concept) => (
            <StaggerItem key={concept.name}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="group overflow-hidden border-border/50 bg-card/40 p-0 backdrop-blur transition-shadow hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/10">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={concept.image}
                      alt={concept.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <Badge className="absolute top-3 right-3 border-gold/30 bg-background/80 text-gold backdrop-blur">
                      {concept.tag}
                    </Badge>
                  </div>
                  <div className="space-y-2 p-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-foreground">
                        {concept.name}
                      </h3>
                      <span className="flex shrink-0 items-center gap-0.5 text-sm text-gold">
                        <Sparkles className="size-3.5" />
                        مفهوم
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {concept.focus}
                    </p>
                    <p className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="size-3 text-emerald" />
                      {concept.location}
                    </p>
                  </div>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </motion.div>
    </section>
  );
}
