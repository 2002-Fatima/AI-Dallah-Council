"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { saveUserRole } from "@/lib/firebase/auth";
import { getFirebaseAuth, isFirebaseConfigured } from "@/lib/firebase/config";
import { ROUTES } from "@/lib/constants";
import { trackFormSubmit } from "@/lib/analytics";
import type { UserRole } from "@/lib/types";
import { cn } from "@/lib/utils";

export function RoleOnboardingForm() {
  const router = useRouter();
  const [role, setRole] = useState<UserRole>("restaurant_owner");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isFirebaseConfigured()) {
        const user = getFirebaseAuth().currentUser;
        if (!user) {
          router.push(ROUTES.login);
          return;
        }
        await saveUserRole(user.uid, user.email ?? "", role);
      }
      trackFormSubmit("role_onboarding");
      router.push(ROUTES.earlyAccess);
    } catch {
      setError("حدث خطأ. يرجى المحاولة مرة أخرى.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md space-y-8 rounded-3xl border border-border/50 bg-card/50 p-6 backdrop-blur md:p-10"
    >
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">أنا أنضم كـ</h1>
        <p className="text-sm text-muted-foreground">
          ساعدنا نفهم احتياجاتك بشكل أفضل
        </p>
      </div>

      <RadioGroup
        value={role}
        onValueChange={(v) => setRole(v as UserRole)}
        className="grid gap-4"
      >
        {[
          {
            value: "restaurant_owner" as const,
            label: "صاحب مطعم",
            description: "أُدير مطعماً أو سلسلة مطاعم في الخليج",
          },
          {
            value: "customer" as const,
            label: "عميل",
            description: "أهتم بتجربة المطاعم والخدمات",
          },
        ].map((option) => (
          <label
            key={option.value}
            htmlFor={`onboard-${option.value}`}
            className={cn(
              "flex cursor-pointer items-start gap-4 rounded-2xl border border-border/50 bg-background/50 p-5 transition-all hover:border-gold/30",
              role === option.value && "border-gold/40 bg-gold/5 shadow-lg shadow-gold/5"
            )}
          >
            <RadioGroupItem
              value={option.value}
              id={`onboard-${option.value}`}
              className="mt-1"
            />
            <div>
              <p className="font-semibold">{option.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {option.description}
              </p>
            </div>
          </label>
        ))}
      </RadioGroup>

      {error && (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}

      <Button
        type="submit"
        disabled={loading}
        size="lg"
        className="h-12 w-full bg-gradient-to-l from-gold to-gold-dim text-base font-semibold text-background shadow-lg shadow-gold/25 hover:opacity-90"
      >
        {loading ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            جاري...
          </>
        ) : (
          "متابعة"
        )}
      </Button>
    </form>
  );
}
