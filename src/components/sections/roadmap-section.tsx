"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, Circle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/fade-in";
import { cn } from "@/lib/utils";
import { useDictionary } from "@/components/providers/locale-provider";

const statusConfig = {
  completed: {
    icon: CheckCircle2,
    color: "text-emerald",
    bg: "bg-emerald/15",
    border: "border-emerald/30",
  },
  in_progress: {
    icon: Clock,
    color: "text-gold",
    bg: "bg-gold/15",
    border: "border-gold/30",
  },
  planned: {
    icon: Circle,
    color: "text-muted-foreground",
    bg: "bg-muted",
    border: "border-border/50",
  },
} as const;

export function RoadmapSection() {
  const messages = useDictionary();
  const sections = [
    { key: "completed" as const, title: messages.roadmap.stages.completed, items: messages.roadmap.items.completed },
    { key: "in_progress" as const, title: messages.roadmap.stages.inProgress, items: messages.roadmap.items.inProgress },
    { key: "planned" as const, title: messages.roadmap.stages.planned, items: messages.roadmap.items.planned },
  ];

  return (
    <section className="pb-24 md:pb-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {sections.map((section, sectionIndex) => {
          const config = statusConfig[section.key];
          const Icon = config.icon;

          return (
            <FadeIn key={section.key} delay={sectionIndex * 0.1}>
              <div className="mb-12">
                <div className="mb-6 flex items-center gap-3">
                  <span
                    className={cn(
                      "flex size-10 items-center justify-center rounded-xl",
                      config.bg,
                      config.color
                    )}
                  >
                    <Icon className="size-5" />
                  </span>
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                  <Badge variant="outline" className={cn(config.border, config.color)}>
                    {section.items.length} {messages.roadmap.stages.itemCount}
                  </Badge>
                </div>

                <StaggerContainer className="grid gap-4 sm:grid-cols-2">
                  {section.items.map((item) => (
                    <StaggerItem key={item.title}>
                      <motion.div whileHover={{ y: -2 }}>
                        <Card
                          className={cn(
                            "border-border/50 bg-card/50 p-5 backdrop-blur transition-all hover:border-gold/25",
                            section.key === "in_progress" && "ring-1 ring-gold/20"
                          )}
                        >
                          <p className="font-semibold">{item.title}</p>
                          {item.titleEn && (
                            <p className="mt-1 text-sm text-muted-foreground" dir="ltr">
                              {item.titleEn}
                            </p>
                          )}
                        </Card>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
