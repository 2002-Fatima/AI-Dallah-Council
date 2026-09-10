"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Play } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";
import { FadeIn } from "@/components/shared/fade-in";
import { ROUTES } from "@/lib/constants";
import { trackEarlyAccessClick, trackCtaClick } from "@/lib/analytics";

export function CtaSection() {
  return (
    <section id="cta" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-bl from-card via-card to-gold/5 p-8 md:p-14"
            whileHover={{ scale: 1.005 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <motion.div
              className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-gold/20 blur-[80px]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            <div className="relative mx-auto max-w-2xl text-center">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm text-gold">
                برنامج الوصول المبكر — مفتوح الآن
              </span>

              <h2 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                كن من أوائل شركاء
                <span className="mt-2 block bg-gradient-to-l from-gold to-gold-light bg-clip-text text-transparent">
                  مجلس الدلّة في الخليج
                </span>
              </h2>

              <p className="mt-4 text-lg text-muted-foreground">
                نضمّ حالياً أول شركاء المطاعم عبر المنطقة. سجّل اهتمامك
                وسنتواصل معك فور فتح الوصول المبكر.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <LinkButton
                  href={ROUTES.earlyAccess}
                  size="lg"
                  className="h-12 w-full bg-gradient-to-l from-gold to-gold-dim px-8 text-base font-semibold text-background shadow-xl shadow-gold/30 sm:w-auto"
                  onClick={() => trackEarlyAccessClick("cta_section")}
                >
                  انضم للوصول المبكر
                  <ArrowLeft className="size-4" />
                </LinkButton>
                <LinkButton
                  href={ROUTES.demo}
                  variant="outline"
                  size="lg"
                  className="h-12 w-full border-border/60 sm:w-auto"
                  onClick={() => trackCtaClick("watch_demo", ROUTES.demo)}
                >
                  <Play className="size-4 fill-current" />
                  شاهد العرض التوضيحي
                </LinkButton>
              </div>

              <p className="mt-6 text-xs text-muted-foreground">
                بدون التزام · أولوية للشركاء المبكرين · دعم عربي مخصص
              </p>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
