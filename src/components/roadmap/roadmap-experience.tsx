"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BadgeCheck, BrainCircuit, Building2, ChartColumnBig, CheckCircle2, ChevronRight, Clock3, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BrandAtmosphere } from "@/components/brand/brand-atmosphere";
import { useDictionary } from "@/components/providers/locale-provider";
import { cn } from "@/lib/utils";

const stageIcons = {
  validate: BadgeCheck,
  explore: Sparkles,
  prototype: BrainCircuit,
  pilot: Clock3,
  build: CheckCircle2,
} as const;

const capabilityIcons = {
  operations: Building2,
  analytics: ChartColumnBig,
  ai: BrainCircuit,
  compliance: ShieldCheck,
  payments: BadgeCheck,
  customerExperience: Users,
} as const;

export function RoadmapExperience() {
  const messages = useDictionary();
  const [selectedStage, setSelectedStage] = useState<"validate" | "explore" | "prototype" | "pilot" | "build">("validate");

  const stages = [
    { key: "validate", ...messages.roadmap.timeline.validate },
    { key: "explore", ...messages.roadmap.timeline.explore },
    { key: "prototype", ...messages.roadmap.timeline.prototype },
    { key: "pilot", ...messages.roadmap.timeline.pilot },
    { key: "build", ...messages.roadmap.timeline.build },
  ] as const;

  const currentStage = stages.find((stage) => stage.key === selectedStage) ?? stages[0];

  return (
    <section className="relative overflow-hidden px-4 pb-24 sm:px-6 lg:px-8">
      <BrandAtmosphere className="opacity-90" />
      <div className="relative mx-auto max-w-6xl pt-20 md:pt-24">
        <div className="mb-8 text-center">
          <Badge className="border-gold/30 bg-gold/10 px-4 py-1.5 text-gold">{messages.roadmap.hero.badge}</Badge>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">{messages.roadmap.hero.title}</h1>
          <p className="mt-4 text-xl text-gold">{messages.roadmap.hero.subtitle}</p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">{messages.roadmap.hero.description}</p>
        </div>

        <div className="mb-8 rounded-[28px] border border-border/60 bg-card/60 p-4 backdrop-blur-sm md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">{messages.roadmap.currentStageLabel}</p>
              <h2 className="mt-2 text-2xl font-bold">{currentStage.title}</h2>
            </div>
            <Badge variant="outline" className="border-emerald/30 bg-emerald/10 text-emerald">
              {messages.roadmap.timeline[selectedStage].label}
            </Badge>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-5">
          {stages.map((stage) => {
            const Icon = stageIcons[stage.key];
            const active = stage.key === selectedStage;
            return (
              <motion.button
                key={stage.key}
                type="button"
                whileHover={{ y: -2 }}
                onClick={() => setSelectedStage(stage.key)}
                className={cn(
                  "group rounded-[22px] border p-4 text-left transition-all md:p-5",
                  active
                    ? "border-gold/35 bg-gold/8 shadow-lg shadow-gold/5"
                    : "border-border/60 bg-card/50 hover:border-gold/20"
                )}
              >
                <div className={cn("mb-3 flex size-10 items-center justify-center rounded-xl", active ? "bg-gold/12 text-gold" : "bg-muted text-muted-foreground")}>
                  <Icon className="size-4" />
                </div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">{stage.label}</p>
                <p className="mt-2 text-base font-semibold text-foreground">{stage.title}</p>
              </motion.button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-border/60 bg-card/60 p-5 backdrop-blur-sm md:p-6">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">{currentStage.label}</p>
                <h3 className="mt-2 text-2xl font-bold">{currentStage.title}</h3>
              </div>
              <div className="rounded-full border border-border/50 bg-background/60 px-3 py-1 text-xs text-muted-foreground">
                {currentStage.purpose}
              </div>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>{currentStage.whatWeExplore}</p>
              <p>{currentStage.whyItMatters}</p>
              <p>{currentStage.openQuestion}</p>
            </div>
          </Card>

          <Card className="border-border/60 bg-card/60 p-5 backdrop-blur-sm md:p-6">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald">{messages.roadmap.capabilityModel.title}</p>
            <h3 className="mt-2 text-xl font-bold">{messages.roadmap.capabilityModel.description}</h3>

            <div className="mt-5 space-y-3">
              {currentStage.capabilityFocus.map((areaKey) => {
                const area = messages.roadmap.capabilityModel.areas[areaKey as keyof typeof messages.roadmap.capabilityModel.areas];
                const Icon = capabilityIcons[areaKey as keyof typeof capabilityIcons] ?? BrainCircuit;

                return (
                  <div key={areaKey} className="flex items-start gap-3 rounded-2xl border border-border/50 bg-background/60 p-3">
                    <span className="mt-0.5 flex size-8 items-center justify-center rounded-lg bg-gold/10 text-gold">
                      <Icon className="size-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">{area.name}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{area.brief}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        <div className="mt-10 flex justify-center">
          <Button type="button" className="bg-gradient-to-l from-gold to-gold-dim text-background hover:opacity-90">
            {messages.roadmap.hero.title}
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
