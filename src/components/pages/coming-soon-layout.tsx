"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Play,
  Tag,
  Building2,
  Layers,
  BookOpen,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/pages/page-hero";
import { EmailSubscribeForm } from "@/components/forms/email-subscribe-form";
import { ROUTES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  play: Play,
  tag: Tag,
  building: Building2,
  layers: Layers,
  book: BookOpen,
};

type ComingSoonLayoutProps = {
  pageKey: "demo" | "pricing" | "enterprise" | "platform" | "resources";
  title: string;
  description: string;
  badge: string;
  icon: keyof typeof iconMap;
  features?: string[];
};

export function ComingSoonLayout({
  pageKey,
  title,
  description,
  badge,
  icon,
  features = [],
}: ComingSoonLayoutProps) {
  const Icon = iconMap[icon] ?? Rocket;

  return (
    <>
      <PageHero badge={badge} title={title} description={description} />

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="flex flex-col justify-center p-8 md:p-12">
                    <div className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-gold/15">
                      <Icon className="size-8 text-gold" />
                    </div>
                    <Badge
                      variant="outline"
                      className="mb-4 w-fit border-emerald/30 bg-emerald/10 text-emerald"
                    >
                      {badge}
                    </Badge>
                    <h2 className="text-xl font-bold md:text-2xl">
                      قيد التطوير — قريباً
                    </h2>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {description}
                    </p>

                    {features.length > 0 && (
                      <ul className="mt-6 space-y-3">
                        {features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <span className="size-1.5 rounded-full bg-gold" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <Link href={ROUTES.earlyAccess}>
                        <Button className="w-full bg-gradient-to-l from-gold to-gold-dim font-semibold text-background hover:opacity-90 sm:w-auto">
                          انضم للوصول المبكر
                        </Button>
                      </Link>
                      {pageKey === "enterprise" && (
                        <Link href={ROUTES.contactSales}>
                          <Button variant="outline" className="w-full sm:w-auto">
                            تواصل مع المبيعات
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>

                  <div className="relative flex min-h-[280px] items-center justify-center bg-gradient-to-bl from-gold/10 via-transparent to-emerald/10 p-8">
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="relative"
                    >
                      <div className="absolute -inset-8 rounded-full bg-gold/10 blur-3xl" />
                      <div className="relative rounded-3xl border border-gold/20 bg-card/80 p-8 shadow-2xl backdrop-blur">
                        <Icon className="mx-auto size-20 text-gold/60" />
                        <p className="mt-4 text-center text-sm font-medium text-muted-foreground">
                          Launching Soon
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 rounded-2xl border border-border/50 bg-card/30 p-6 text-center md:p-8"
          >
            <h3 className="text-lg font-semibold">أبقَ على اطلاع</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              اشترك ليصلك إشعار عند إطلاق {title}
            </p>
            <EmailSubscribeForm
              source={pageKey}
              className="mx-auto mt-6 max-w-md"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
