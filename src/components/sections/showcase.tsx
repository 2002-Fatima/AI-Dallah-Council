"use client";

import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, ChefHat, Clock3, Sparkles, TrendingUp, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { SectionHeader } from "@/components/shared/section-header";
import { productConcepts } from "@/lib/content";
import { ROUTES } from "@/lib/constants";
import { trackCtaClick } from "@/lib/analytics";
import { useLocale } from "@/components/providers/locale-provider";
import { useDictionary } from "@/components/providers/locale-provider";
import { localePath } from "@/lib/i18n";

const flowSteps = [
  { label: "Situation", detail: "A busy service window arrives." },
  { label: "Signals", detail: "Orders, staffing, and wait-time pressure converge." },
  { label: "Council", detail: "Operations, business, and customer perspectives align." },
  { label: "Synthesis", detail: "The picture becomes decision-ready and actionable." },
  { label: "Action", detail: "The team chooses the next intervention." },
] as const;

export function ShowcaseSection() {
  const locale = useLocale();
  const messages = useDictionary();
  const localizedPath = (path: string) => localePath(path, locale);

  const councilPerspectives = [
    {
      title: messages.demo.council.perspectives.operations.title,
      description: messages.demo.council.perspectives.operations.description,
      accent: "border-gold/20 bg-gold/10 text-gold",
      icon: ChefHat,
    },
    {
      title: messages.demo.council.perspectives.business.title,
      description: messages.demo.council.perspectives.business.description,
      accent: "border-emerald/20 bg-emerald/10 text-emerald",
      icon: TrendingUp,
    },
    {
      title: messages.demo.council.perspectives.customer.title,
      description: messages.demo.council.perspectives.customer.description,
      accent: "border-border/60 bg-card/50 text-foreground",
      icon: Users,
    },
  ] as const;

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
          badge={messages.home.showcase.badge}
          title={messages.home.showcase.title}
          description={messages.home.showcase.description}
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-5">
            <Card className="border-border/60 bg-card/50 p-5 backdrop-blur-sm md:p-6">
              <div className="mb-5 flex items-center justify-between gap-3">
                <Badge className="border-gold/30 bg-gold/10 px-3 py-1 text-gold">
                  <Sparkles className="size-3.5" />
                  {messages.demo.conceptSimulation}
                </Badge>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {messages.demo.signalLabel}
                </span>
              </div>

              <div className="space-y-4">
                {flowSteps.map((step, index) => {
                  const isCouncil = step.label === "Council";
                  const isLast = index === flowSteps.length - 1;

                  return (
                    <div key={step.label} className="relative">
                      <div className="flex items-start gap-3">
                        <div className="flex flex-col items-center">
                          <div
                            className={`flex size-8 items-center justify-center rounded-full border text-[10px] font-bold ${
                              isCouncil
                                ? "border-gold/30 bg-gold/15 text-gold"
                                : "border-border/60 bg-background/70 text-muted-foreground"
                            }`}
                          >
                            {index + 1}
                          </div>
                          {!isLast && <div className="mt-2 h-8 w-px bg-gradient-to-b from-border to-transparent" />}
                        </div>

                        <div
                          className={`flex-1 rounded-2xl border p-3 md:p-4 ${
                            isCouncil
                              ? "border-gold/25 bg-gold/[0.04] shadow-[0_0_0_1px_rgba(214,170,92,0.08)]"
                              : "border-border/60 bg-background/50"
                          }`}
                        >
                          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                            {step.label}
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {productConcepts.map((concept) => {
                const content = messages.home.showcase.items[concept.key];
                return (
                  <div
                    key={concept.key}
                    className="rounded-2xl border border-border/60 bg-background/40 p-3 transition-colors hover:border-gold/20 hover:bg-card/40"
                  >
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      {content.tag}
                    </p>
                    <p className="mt-2 text-base font-semibold text-foreground">{content.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{content.focus}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <Card className="border-gold/20 bg-gradient-to-b from-card/80 to-background/70 p-5 shadow-[0_18px_46px_rgba(0,0,0,0.12)] backdrop-blur-sm md:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
                    {messages.demo.council.label}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-foreground">{messages.demo.council.title}</h3>
                </div>
                <span className="flex size-10 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold">
                  <BrainCircuit className="size-5" />
                </span>
              </div>

              <div className="space-y-3">
                {councilPerspectives.map(({ title, description, accent, icon: Icon }) => (
                  <div key={title} className={`rounded-2xl border p-3 ${accent}`}>
                    <div className="flex items-center gap-2">
                      <span className="flex size-8 items-center justify-center rounded-lg bg-background/60">
                        <Icon className="size-4" />
                      </span>
                      <p className="font-semibold">{title}</p>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed opacity-80">{description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-emerald/20 bg-emerald/10 p-4">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-emerald">
                  {messages.demo.synthesis.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{messages.demo.synthesis.text}</p>
              </div>

              <div className="mt-5 flex items-center justify-between gap-3 rounded-2xl border border-border/60 bg-background/50 p-3">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {messages.demo.recommendation.label}
                  </p>
                  <p className="mt-2 text-sm text-foreground">{messages.demo.recommendation.text}</p>
                </div>
                <Clock3 className="hidden size-5 shrink-0 text-gold md:block" />
              </div>

              <LinkButton
                href={localizedPath(ROUTES.demo)}
                size="lg"
                className="mt-5 w-full justify-center border-border/60 bg-background/75"
                onClick={() => trackCtaClick("showcase_to_demo", localizedPath(ROUTES.demo))}
              >
                {messages.home.hero.demo}
                <ArrowRight className="size-4" />
              </LinkButton>
            </Card>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
