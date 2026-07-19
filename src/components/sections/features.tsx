"use client";

import { motion } from "framer-motion";
import {
  Brain,
  BarChart3,
  ShieldCheck,
  CreditCard,
  Workflow,
  FileCheck,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/fade-in";
import { features } from "@/lib/content";
import { cn } from "@/lib/utils";

const iconMap = {
  operations: Workflow,
  analytics: BarChart3,
  zatca: FileCheck,
  mada: CreditCard,
  automation: Brain,
  compliance: ShieldCheck,
} as const;

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <motion.div
        className="pointer-events-none absolute top-1/2 left-0 size-72 -translate-y-1/2 rounded-full bg-gold/5 blur-[100px]"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="حلول تشغيلية"
          title="كل ما يحتاجه مطعمك — في منصة واحدة"
          description="نركز على نتائج أعمالك: تقليل التكاليف، تسريع العمليات، وامتثال أسهل. الذكاء الاصطناعي يعمل خلف الكواليس."
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <StaggerItem key={feature.title}>
                <Card
                  className={cn(
                    "group h-full border-border/50 bg-card/50 py-6 backdrop-blur transition-all duration-300",
                    "hover:-translate-y-1 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5"
                  )}
                >
                  <CardHeader className="px-6">
                    <motion.div
                      className={cn(
                        "mb-4 flex size-12 items-center justify-center rounded-2xl transition-colors",
                        index % 2 === 0
                          ? "bg-gold/15 text-gold group-hover:bg-gold/25"
                          : "bg-emerald/15 text-emerald group-hover:bg-emerald/25"
                      )}
                      whileHover={{ rotate: [0, -8, 8, 0] }}
                      transition={{ duration: 0.4 }}
                    >
                      <Icon className="size-6" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-6">
                    <p className="leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
