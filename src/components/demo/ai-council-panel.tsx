import { motion } from "framer-motion";
import { ArrowRight, Building2, Sparkles, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Perspective {
  key: "operations" | "business" | "customer";
  title: string;
  description: string;
  accent: string;
}

interface AiCouncilPanelProps {
  perspectives: Perspective[];
  synthesisTitle: string;
  synthesisText: string;
  recommendationTitle: string;
  recommendationText: string;
  humanDecisionTitle: string;
  humanDecisionText: string;
}

const perspectiveIcons = {
  operations: Sparkles,
  business: Building2,
  customer: Users,
} as const;

export function AiCouncilPanel({
  perspectives,
  synthesisTitle,
  synthesisText,
  recommendationTitle,
  recommendationText,
  humanDecisionTitle,
  humanDecisionText,
}: AiCouncilPanelProps) {
  return (
    <div className="relative mt-8 rounded-[28px] border border-border/60 bg-card/60 p-4 backdrop-blur-sm md:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">AI Council</p>
          <h3 className="mt-2 text-xl font-bold md:text-2xl">Decision support concept</h3>
        </div>
        <div className="rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-xs text-gold">
          Concept simulation
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {perspectives.map((perspective, index) => {
          const Icon = perspectiveIcons[perspective.key];

          return (
            <motion.div
              key={perspective.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={cn("h-full border-border/50 bg-background/50 p-0", perspective.accent)}>
                <CardHeader className="px-4 pt-4 pb-3">
                  <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{perspective.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">{perspective.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-5 rounded-2xl border border-gold/20 bg-gradient-to-r from-gold/8 via-transparent to-emerald/8 p-4 md:p-5"
      >
        <div className="mb-2 flex items-center gap-2 text-gold">
          <ArrowRight className="size-4" />
          <span className="text-xs font-medium uppercase tracking-[0.18em]">{synthesisTitle}</span>
        </div>
        <p className="text-sm leading-relaxed text-foreground/90">{synthesisText}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="mt-5 rounded-2xl border border-emerald/25 bg-emerald/5 p-4 md:p-5"
      >
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald">{recommendationTitle}</p>
        <p className="mt-2 text-lg font-semibold text-foreground">{recommendationText}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
        className="mt-5 rounded-2xl border border-border/50 bg-background/60 p-4"
      >
        <p className="text-sm font-medium text-foreground">{humanDecisionTitle}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{humanDecisionText}</p>
      </motion.div>
    </div>
  );
}
