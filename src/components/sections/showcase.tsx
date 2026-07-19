"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/fade-in";
import { restaurants } from "@/lib/content";

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
          badge="شركاؤنا المبكرون"
          title="مطاعم تنتظر مجلس الدلّة"
          description="شركاء مبكرون من الرياض إلى دبي — يسجلون اهتمامهم بالمنصة قبل الإطلاق الرسمي."
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {restaurants.map((restaurant) => (
            <StaggerItem key={restaurant.name}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="group overflow-hidden border-border/50 bg-card/40 p-0 backdrop-blur transition-shadow hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/10">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={restaurant.image}
                      alt={restaurant.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <Badge className="absolute top-3 right-3 border-gold/30 bg-background/80 text-gold backdrop-blur">
                      {restaurant.tag}
                    </Badge>
                  </div>
                  <div className="space-y-2 p-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-foreground">
                        {restaurant.name}
                      </h3>
                      <span className="flex shrink-0 items-center gap-0.5 text-sm text-gold">
                        <Star className="size-3.5 fill-gold" />
                        {restaurant.rating}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {restaurant.cuisine}
                    </p>
                    <p className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="size-3 text-emerald" />
                      {restaurant.location}
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
