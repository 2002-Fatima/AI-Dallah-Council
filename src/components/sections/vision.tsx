"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Target } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/shared/fade-in";
import { useDictionary } from "@/components/providers/locale-provider";

export function VisionSection() {
  const messages = useDictionary();

  return (
    <section id="vision" className="relative py-20 md:py-28">
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, oklch(0.75 0.12 85 / 0.08), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn direction="right">
            <SectionHeader
              badge={messages.home.vision.badge}
              title={messages.home.vision.title}
              description={messages.home.vision.description}
              align="start"
              className="mb-0"
            />

            <motion.ul
              className="mt-8 space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {messages.home.vision.points.map((point) => (
                <motion.li
                  key={point}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald/20">
                    <Target className="size-3.5 text-emerald" />
                  </span>
                  {point}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.08 } },
              }}
            >
              {messages.home.vision.stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl border border-border/50 bg-card/50 p-4 text-center backdrop-blur transition-colors hover:border-gold/30"
                >
                  <p className="text-2xl font-bold text-gold md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </FadeIn>

          <FadeIn direction="left" delay={0.15}>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-l from-gold/20 via-transparent to-emerald/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-gold/20 shadow-2xl">
                <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
                  <Image
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=85"
                    alt={messages.home.vision.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                </div>
                <motion.div
                  className="absolute bottom-6 right-6 left-6 rounded-2xl border border-gold/30 bg-background/90 p-5 backdrop-blur-md"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-gold/20">
                      <Sparkles className="size-6 text-gold" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gold">
                        {messages.home.vision.vision2030}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {messages.home.vision.vision2030Description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
