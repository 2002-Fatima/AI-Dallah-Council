"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type SuccessStateProps = {
  title: string;
  description: string;
  className?: string;
};

export function SuccessState({ title, description, className }: SuccessStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "rounded-3xl border border-emerald/30 bg-gradient-to-bl from-card via-card to-emerald/5 p-10 text-center md:p-14",
        className
      )}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-emerald/20"
      >
        <CheckCircle2 className="size-8 text-emerald" />
      </motion.div>
      <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-md text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
