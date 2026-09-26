"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";
import { ROUTES } from "@/lib/constants";
import { useLocale } from "@/components/providers/locale-provider";
import { localePath } from "@/lib/i18n";
import { useDictionary } from "@/components/providers/locale-provider";

interface SuccessStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}

export function SuccessState({
  title,
  description,
  actionLabel,
  actionHref,
}: SuccessStateProps) {
  const locale = useLocale();
  const messages = useDictionary();
  const destination = actionHref ?? localePath(ROUTES.home, locale);
  const label = actionLabel ?? messages.common.returnHome;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-lg text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-emerald/15"
      >
        <CheckCircle2 className="size-10 text-emerald" />
      </motion.div>
      <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
        {description}
      </p>
      <LinkButton
        href={destination}
        className="mt-8 bg-gradient-to-l from-gold to-gold-dim text-background hover:opacity-90"
      >
        {label}
      </LinkButton>
    </motion.div>
  );
}
