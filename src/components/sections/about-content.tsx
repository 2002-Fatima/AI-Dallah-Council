"use client";

import { motion } from "framer-motion";
import {
  ShoppingCart,
  CreditCard,
  BarChart3,
  FileCheck,
  Megaphone,
  Settings,
  Sparkles,
  Target,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/fade-in";
import { ROUTES } from "@/lib/constants";
import { useLocale } from "@/components/providers/locale-provider";
import { useDictionary } from "@/components/providers/locale-provider";
import { localePath } from "@/lib/i18n";
import { problemKeys } from "@/lib/content";

export function AboutContent() {
  const locale = useLocale();
  const messages = useDictionary();
  const localizedPath = (path: string) => localePath(path, locale);

  return (
    <>
      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Card className="border-border/50 bg-card/50 p-8 backdrop-blur md:p-12">
              <h2 className="text-2xl font-bold md:text-3xl">{messages.about.problem.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {messages.about.problem.description}
              </p>

              <StaggerContainer className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {problemKeys.map((key) => {
                  const item = messages.about.problem.items[key];
                  const Icon = {
                    orders: ShoppingCart,
                    payments: CreditCard,
                    analytics: BarChart3,
                    compliance: FileCheck,
                    marketing: Megaphone,
                    operations: Settings,
                  }[key];
                  return (
                  <StaggerItem key={item.label}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="rounded-xl border border-border/50 bg-background/50 p-5"
                    >
                      <Icon className="size-6 text-gold" />
                      <p className="mt-3 font-semibold">{item.label}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                    </motion.div>
                  </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </Card>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0.15}>
            <Card className="relative overflow-hidden border-gold/30 bg-gradient-to-bl from-card via-card to-gold/5 p-8 md:p-12">
              <motion.div
                className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-gold/15 blur-[80px]"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 6, repeat: Infinity }}
              />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-gold/20">
                    <Sparkles className="size-6 text-gold" />
                  </span>
                  <h2 className="text-2xl font-bold md:text-3xl">{messages.about.vision.title}</h2>
                </div>

                <p className="mt-6 text-xl leading-relaxed md:text-2xl">
                  {messages.about.vision.statementLead}
                  <span className="bg-gradient-to-l from-gold to-gold-light bg-clip-text text-transparent">
                    {messages.about.vision.statementHighlight}
                  </span>{" "}
                  {messages.about.vision.statementRest}
                </p>

                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  {messages.about.vision.description}
                </p>

                <ul className="mt-8 space-y-4">
                  {messages.about.vision.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-muted-foreground">
                      <Target className="mt-1 size-4 shrink-0 text-emerald" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <LinkButton
                    href={localizedPath(ROUTES.earlyAccess)}
                    className="bg-gradient-to-l from-gold to-gold-dim text-background hover:opacity-90"
                  >
                    {messages.about.vision.earlyAccess}
                  </LinkButton>
                  <LinkButton href={localizedPath(ROUTES.roadmap)} variant="outline">
                    {messages.about.vision.roadmap}
                  </LinkButton>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
