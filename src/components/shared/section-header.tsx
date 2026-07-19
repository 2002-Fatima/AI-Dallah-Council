import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/shared/fade-in";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "center" | "start";
};

export function SectionHeader({
  badge,
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <FadeIn
      className={cn(
        "mb-12 max-w-2xl space-y-4 md:mb-16",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <Badge
          variant="outline"
          className="border-gold/30 bg-gold/10 px-3 py-1 text-gold"
        >
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
