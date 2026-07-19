"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { EmailSubscribeForm } from "@/components/forms/email-subscribe-form";
import { FadeIn } from "@/components/shared/fade-in";
import { ArrowLeft, Construction } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";
import { ROUTES } from "@/lib/constants";

interface ComingSoonPageProps {
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  source: string;
  showEarlyAccess?: boolean;
}

export function ComingSoonPage({
  title,
  subtitle,
  description,
  badge,
  source,
  showEarlyAccess = true,
}: ComingSoonPageProps) {
  return (
    <div className="relative min-h-[80vh] py-24 md:py-32">
      <motion.div
        className="pointer-events-none absolute top-1/4 right-1/4 size-96 rounded-full bg-gold/8 blur-[120px]"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <motion.div
              className="mx-auto mb-8 flex size-24 items-center justify-center rounded-3xl border border-gold/20 bg-gold/10"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Construction className="size-12 text-gold" />
            </motion.div>

            <Badge className="mb-6 border-gold/30 bg-gold/10 px-4 py-1.5 text-gold">
              {badge}
            </Badge>

            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              {title}
            </h1>
            <p className="mt-3 text-xl text-gold">{subtitle}</p>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur">
            <h3 className="mb-2 text-center font-semibold">
              اشترك للحصول على التحديثات
            </h3>
            <p className="mb-6 text-center text-sm text-muted-foreground">
              كن أول من يعرف عند إطلاق هذه الميزة
            </p>
            <EmailSubscribeForm source={source} />
          </div>

          {showEarlyAccess && (
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <LinkButton
                href={ROUTES.earlyAccess}
                className="bg-gradient-to-l from-gold to-gold-dim text-background hover:opacity-90"
              >
                انضم للوصول المبكر
                <ArrowLeft className="size-4" />
              </LinkButton>
              <LinkButton href={ROUTES.contactSales} variant="outline">
                تواصل مع المبيعات
              </LinkButton>
            </div>
          )}
        </FadeIn>
      </div>
    </div>
  );
}
