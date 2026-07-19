"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/fade-in";
import { testimonials } from "@/lib/content";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-20 md:py-28">
      <motion.div
        className="pointer-events-none absolute bottom-0 left-1/2 size-96 -translate-x-1/2 rounded-full bg-emerald/5 blur-[120px]"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="آراء العملاء"
          title="ما يقوله شركاؤنا المبكرون"
          description="آراء من رواد مطاعم في الخليج — سجّلوا اهتمامهم وينتظرون الإطلاق."
        />

        <StaggerContainer className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={testimonial.author}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card
                  className={`h-full border-border/50 bg-card/50 py-6 backdrop-blur transition-all hover:border-gold/25 hover:shadow-lg ${
                    index === 1 ? "md:-mt-4 md:mb-4 ring-1 ring-gold/20" : ""
                  }`}
                >
                  <CardContent className="space-y-6 px-6">
                    <Quote className="size-8 text-gold/40" />
                    <p className="leading-relaxed text-foreground/90">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3 border-t border-border/50 pt-4">
                      <span className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-gold to-emerald text-sm font-bold text-background">
                        {testimonial.avatar}
                      </span>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
