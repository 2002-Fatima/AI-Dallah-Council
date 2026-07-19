"use client";

import { motion } from "framer-motion";
import { Check, Circle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { RoadmapStatus } from "@/lib/types";

type RoadmapCardProps = {
  title: string;
  status: RoadmapStatus;
  index: number;
};

const statusConfig: Record<
  RoadmapStatus,
  { icon: typeof Check; color: string; bg: string }
> = {
  completed: {
    icon: Check,
    color: "text-emerald",
    bg: "bg-emerald/15 border-emerald/30",
  },
  in_progress: {
    icon: Loader2,
    color: "text-gold",
    bg: "bg-gold/15 border-gold/30",
  },
  planned: {
    icon: Circle,
    color: "text-muted-foreground",
    bg: "bg-muted/50 border-border/50",
  },
};

export function RoadmapCard({ title, status, index }: RoadmapCardProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -2 }}
      className={cn(
        "flex items-center gap-4 rounded-xl border p-4 backdrop-blur transition-colors",
        config.bg
      )}
    >
      <span
        className={cn(
          "flex size-9 shrink-0 items-center justify-center rounded-lg",
          status === "completed" && "bg-emerald/20",
          status === "in_progress" && "bg-gold/20",
          status === "planned" && "bg-muted"
        )}
      >
        <Icon
          className={cn(
            "size-4",
            config.color,
            status === "in_progress" && "animate-spin"
          )}
        />
      </span>
      <span className="font-medium">{title}</span>
    </motion.div>
  );
}
