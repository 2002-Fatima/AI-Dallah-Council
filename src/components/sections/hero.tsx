"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Building2,
  Play,
  Star,
  TrendingUp,
  Layers,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { siteConfig } from "@/lib/content";
import { ROUTES } from "@/lib/constants";
import { trackEarlyAccessClick, trackCtaClick } from "@/lib/analytics";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24 pb-20 md:pt-28 md:pb-28">
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="absolute -top-32 right-1/4 size-[500px] rounded-full bg-gold/10 blur-[120px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 size-[400px] rounded-full bg-emerald/10 blur-[100px]"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div
        className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        <div className="space-y-8 text-center lg:text-start">
          <motion.div variants={item}>
            <Badge className="border-gold/20 bg-gold/10 px-4 py-1.5 text-gold">
              <Layers className="ml-1.5 size-3.5" />
              نظام تشغيل للمطاعم · مبني للخليج
            </Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="text-foreground">شغّل مطعمك</span>
            <br />
            <span className="bg-gradient-to-l from-gold via-gold-light to-gold bg-clip-text text-transparent">
              بذكاء أكبر
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0"
          >
            {siteConfig.tagline}. منصة واحدة تبسّط العمليات، الامتثال، المدفوعات،
            والتحليلات — مصممة خصيصاً لمطاعم السعودية والإمارات وقطر والكويت.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <LinkButton
              href={ROUTES.earlyAccess}
              size="lg"
              className="h-12 w-full bg-gradient-to-l from-gold to-gold-dim px-8 text-base font-semibold text-background shadow-xl shadow-gold/30 hover:opacity-90 sm:w-auto"
              onClick={() => trackEarlyAccessClick("hero_primary")}
            >
              انضم للوصول المبكر
              <ArrowLeft className="size-4" />
            </LinkButton>
            <LinkButton
              href={ROUTES.demo}
              variant="outline"
              size="lg"
              className="h-12 w-full border-border/60 bg-card/50 backdrop-blur sm:w-auto"
              onClick={() => trackCtaClick("watch_demo", ROUTES.demo)}
            >
              <Play className="size-4 fill-current" />
              شاهد العرض التوضيحي
            </LinkButton>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center justify-center gap-6 lg:justify-start"
          >
            <div className="flex items-center gap-2">
              <span className="flex -space-x-2 space-x-reverse">
                {["ف", "أ", "ن"].map((letter) => (
                  <span
                    key={letter}
                    className="flex size-8 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-gold/80 to-emerald/80 text-xs font-bold text-background"
                  >
                    {letter}
                  </span>
                ))}
              </span>
              <span className="text-sm text-muted-foreground">
                <strong className="text-foreground">مرحلة تحقق</strong> لفهم
                ما يستحق البناء أولاً
              </span>
            </div>
            <div className="flex items-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-gold" />
              ))}
              <span className="mr-1 text-sm text-muted-foreground">
                مفهوم عربي أولاً
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div variants={item} className="relative">
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-gold/20 bg-card/40 p-1 shadow-2xl shadow-gold/10 backdrop-blur"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="absolute -left-4 top-8 z-10 rounded-2xl border border-border/60 bg-card/90 p-4 shadow-xl backdrop-blur"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-emerald/20">
                  <TrendingUp className="size-5 text-emerald" />
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">كفاءة التشغيل</p>
                      <p className="text-lg font-bold text-gold">مفهوم</p>
                </div>
              </div>
            </motion.div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem]">
              <Image
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=85"
                alt="مطعم خليجي حديث مع لوحة تحكم ذكية"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <motion.div
                className="absolute bottom-4 right-4 left-4 rounded-2xl border border-gold/30 bg-background/80 p-4 backdrop-blur-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-gold/20">
                    <Building2 className="size-5 text-gold" />
                  </span>
                  <div className="flex-1 text-start">
                    <p className="text-xs text-muted-foreground">
                      تصور لوحة التشغيل الموحدة
                    </p>
                    <p className="text-sm font-medium">
                      طلبات · مدفوعات · امتثال · تحليلات — في مكان واحد
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-emerald/30 bg-card/90 px-5 py-3 shadow-lg backdrop-blur lg:block"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <p className="text-xs text-emerald">مسارات مستقبلية</p>
            <p className="font-semibold">ZATCA · MADA</p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Link
          href="#features"
          className="flex flex-col items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-gold"
        >
          <span>اكتشف المزيد</span>
          <span className="block h-8 w-px bg-gradient-to-b from-gold to-transparent" />
        </Link>
      </motion.div>
    </section>
  );
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};
