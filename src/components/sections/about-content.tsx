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
import { localePath } from "@/lib/i18n";

const problems = [
  { icon: ShoppingCart, label: "الطلبات", desc: "أنظمة منفصلة لكل قناة" },
  { icon: CreditCard, label: "المدفوعات", desc: "تكاملات معقدة ومتفرقة" },
  { icon: BarChart3, label: "التحليلات", desc: "بيانات مشتتة بلا رؤية موحدة" },
  { icon: FileCheck, label: "الامتثال", desc: "ZATCA والمتطلبات المحلية يدوياً" },
  { icon: Megaphone, label: "التسويق", desc: "حملات غير مترابطة بالعمليات" },
  { icon: Settings, label: "العمليات", desc: "مهام متكررة تستهلك الوقت" },
];

export function AboutContent() {
  const locale = useLocale();
  const localizedPath = (path: string) => localePath(path, locale);

  return (
    <>
      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Card className="border-border/50 bg-card/50 p-8 backdrop-blur md:p-12">
              <h2 className="text-2xl font-bold md:text-3xl">المشكلة</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                المطاعم في الخليج تعمل عبر أنظمة متعددة غير متصلة — طلبات في
                مكان، مدفوعات في آخر، تحليلات في ثالث، وامتثال يدوي في رابع.
                النتيجة: تكاليف أعلى، قرارات أبطأ، وإرهاق تشغيلي.
              </p>

              <StaggerContainer className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {problems.map((item) => (
                  <StaggerItem key={item.label}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="rounded-xl border border-border/50 bg-background/50 p-5"
                    >
                      <item.icon className="size-6 text-gold" />
                      <p className="mt-3 font-semibold">{item.label}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                    </motion.div>
                  </StaggerItem>
                ))}
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
                  <h2 className="text-2xl font-bold md:text-3xl">رؤيتنا</h2>
                </div>

                <p className="mt-6 text-xl leading-relaxed md:text-2xl">
                  بناء{" "}
                  <span className="bg-gradient-to-l from-gold to-gold-light bg-clip-text text-transparent">
                    نظام تشغيل ذكي واحد
                  </span>{" "}
                  يربط كل شيء — عمليات، مدفوعات، امتثال، تحليلات، وأتمتة.
                </p>

                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  مجلس الدلّة ليس منتج ذكاء اصطناعي — بل منصة تشغيل لمطاعم
                  الخليج. الذكاء الاصطناعي يعمل خلف الكواليس لتمكين نتائج
                  أعمال حقيقية: تكاليف أقل، امتثال أسهل، وقرارات أذكى.
                </p>

                <ul className="mt-8 space-y-4">
                  {[
                    "عربي أولاً — RTL، ثقافة محلية، مصطلحات خليجية",
                    "مبني للخليج — ندرس ZATCA وMADA وموسمية رمضان والمناسبات",
                    "شفاف — نشارك خارطة الطريق ونختبر ما يستحق البناء أولاً",
                  ].map((point) => (
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
                    انضم للوصول المبكر
                  </LinkButton>
                  <LinkButton href={localizedPath(ROUTES.roadmap)} variant="outline">
                    اطّلع على خارطة الطريق
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
