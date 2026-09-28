"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, ChefHat, Clock3, Sparkles, TrendingUp, Users } from "lucide-react";
import { AiCouncilPanel } from "@/components/demo/ai-council-panel";
import { BrandAtmosphere } from "@/components/brand/brand-atmosphere";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { ROUTES } from "@/lib/constants";
import { useLocale } from "@/components/providers/locale-provider";
import { useDictionary } from "@/components/providers/locale-provider";
import { localePath } from "@/lib/i18n";

const signalIconMap = {
  reservationPressure: Users,
  expectedDemand: TrendingUp,
  kitchenLoad: ChefHat,
  customerWaitRisk: Clock3,
} as const;

export function DemoExperience() {
  const locale = useLocale();
  const messages = useDictionary();
  const [step, setStep] = useState(0);

  const signalItems = useMemo(
    () => [
      { key: "reservationPressure", label: messages.demo.signals.reservationPressure, detail: messages.demo.signals.details.reservationPressure },
      { key: "expectedDemand", label: messages.demo.signals.expectedDemand, detail: messages.demo.signals.details.expectedDemand },
      { key: "kitchenLoad", label: messages.demo.signals.kitchenLoad, detail: messages.demo.signals.details.kitchenLoad },
      { key: "customerWaitRisk", label: messages.demo.signals.customerWaitRisk, detail: messages.demo.signals.details.customerWaitRisk },
    ],
    [messages.demo.signals]
  );

  const perspectives = useMemo(
    () => [
      {
        key: "operations" as const,
        title: messages.demo.council.perspectives.operations.title,
        description: messages.demo.council.perspectives.operations.description,
        accent: "border-gold/20 bg-gold/5",
      },
      {
        key: "business" as const,
        title: messages.demo.council.perspectives.business.title,
        description: messages.demo.council.perspectives.business.description,
        accent: "border-emerald/20 bg-emerald/5",
      },
      {
        key: "customer" as const,
        title: messages.demo.council.perspectives.customer.title,
        description: messages.demo.council.perspectives.customer.description,
        accent: "border-border/60 bg-muted/20",
      },
    ],
    [messages.demo.council]
  );

  const steps = [
    {
      title: messages.demo.situation.title,
      body: messages.demo.situation.description,
      tag: messages.demo.conceptSimulation,
    },
    {
      title: messages.demo.signals.title,
      body: messages.demo.signals.description,
      tag: messages.demo.signalLabel,
    },
    {
      title: messages.demo.council.title,
      body: messages.demo.council.description,
      tag: messages.demo.council.label,
    },
    {
      title: messages.demo.synthesis.title,
      body: messages.demo.synthesis.description,
      tag: messages.demo.synthesis.label,
    },
    {
      title: messages.demo.recommendation.title,
      body: messages.demo.recommendation.description,
      tag: messages.demo.recommendation.label,
    },
  ];

  const currentStep = steps[step] ?? steps[0];
  const canAdvance = step < steps.length - 1;

  return (
    <section className="relative overflow-hidden px-4 pb-24 sm:px-6 lg:px-8">
      <BrandAtmosphere className="opacity-90" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 rounded-[28px] border border-border/60 bg-card/60 p-5 backdrop-blur-sm md:p-7"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-gold">
                <Sparkles className="size-3.5" />
                {messages.demo.conceptSimulation}
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{messages.demo.heroTitle}</h2>
            </div>
            <div className="rounded-full border border-border/50 bg-background/60 px-3 py-1 text-xs text-muted-foreground">
              {messages.demo.stepLabel}: {step + 1}/{steps.length}
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <Card className="border-border/60 bg-card/65 p-5 backdrop-blur-sm md:p-6">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-gold">
                  <BrainCircuit className="size-3.5" />
                  {currentStep.tag}
                </div>
              </div>
              <h3 className="text-2xl font-bold md:text-3xl">{currentStep.title}</h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">{currentStep.body}</p>

              {step === 0 && (
                <div className="mt-6 rounded-2xl border border-border/50 bg-background/60 p-4">
                  <p className="text-sm text-muted-foreground">{messages.demo.situation.highlight}</p>
                </div>
              )}

              {step === 1 && (
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {signalItems.map((signal) => {
                    const Icon = signalIconMap[signal.key as keyof typeof signalIconMap];
                    return (
                      <motion.div
                        key={signal.key}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-2xl border border-border/50 bg-background/60 p-4"
                      >
                        <div className="mb-3 flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                            <span className="flex size-8 items-center justify-center rounded-xl bg-gold/10 text-gold">
                              <Icon className="size-4" />
                            </span>
                            {signal.label}
                          </div>
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground">{signal.detail}</p>
                      </motion.div>
                    );
                  })}
                </div>
              )}

              {step >= 2 && step < 4 && (
                <div className="mt-6">
                  <AiCouncilPanel
                    perspectives={perspectives}
                    synthesisTitle={messages.demo.synthesis.title}
                    synthesisText={messages.demo.synthesis.text}
                    recommendationTitle={messages.demo.recommendation.title}
                    recommendationText={messages.demo.recommendation.text}
                    humanDecisionTitle={messages.demo.humanDecision.title}
                    humanDecisionText={messages.demo.humanDecision.text}
                  />
                </div>
              )}

              {step >= 4 && (
                <div className="mt-6 rounded-2xl border border-emerald/25 bg-emerald/5 p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald">{messages.demo.recommendation.label}</p>
                  <p className="mt-3 text-xl font-semibold text-foreground">{messages.demo.recommendation.text}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{messages.demo.recommendation.footer}</p>
                </div>
              )}
            </Card>

            <div className="flex flex-wrap items-center gap-3">
              {canAdvance ? (
                <Button
                  type="button"
                  onClick={() => setStep((current) => Math.min(current + 1, steps.length - 1))}
                  className="bg-gradient-to-l from-gold to-gold-dim text-background hover:opacity-90"
                >
                  {messages.demo.nextAction}
                  <ArrowRight className="size-4" />
                </Button>
              ) : (
                <div className="flex flex-wrap items-center gap-3">
                  <LinkButton href={localePath(ROUTES.roadmap, locale)} className="bg-gradient-to-l from-gold to-gold-dim text-background hover:opacity-90">
                    {messages.demo.ctaRoadmap}
                  </LinkButton>
                  <LinkButton href={localePath(ROUTES.earlyAccess, locale)} variant="outline" className="border-border/60 bg-background/70">
                    {messages.demo.ctaEarlyAccess}
                  </LinkButton>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <Card className="border-border/60 bg-card/60 p-5 backdrop-blur-sm">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">{messages.demo.summaryLabel}</p>
              <h3 className="mt-2 text-xl font-bold">{messages.demo.summaryTitle}</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {messages.demo.summaryPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 size-2 rounded-full bg-gold" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="border-border/60 bg-card/60 p-5 backdrop-blur-sm">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald">{messages.demo.futureLabel}</p>
              <p className="mt-2 text-lg font-semibold">{messages.demo.futureText}</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
