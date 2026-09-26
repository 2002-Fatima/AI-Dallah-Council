"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Loader2, ChefHat, User } from "lucide-react";
import { onAuthStateChanged } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { saveUserRole } from "@/lib/firebase/auth";
import { getFirebaseAuth, isFirebaseConfigured } from "@/lib/firebase/config";
import { ROUTES } from "@/lib/constants";
import type { UserRole } from "@/types";
import { cn } from "@/lib/utils";
import { useLocale } from "@/components/providers/locale-provider";
import { localePath } from "@/lib/i18n";
import { useDictionary } from "@/components/providers/locale-provider";

const roles = [
  {
    value: "restaurant_owner" as UserRole,
    key: "owner",
    icon: ChefHat,
  },
  {
    value: "customer" as UserRole,
    key: "customer",
    icon: User,
  },
] as const;

export function OnboardingForm() {
  const router = useRouter();
  const locale = useLocale();
  const messages = useDictionary();
  const localizedPath = (path: string) => localePath(path, locale);
  const [role, setRole] = useState<UserRole>("restaurant_owner");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    if (!isFirebaseConfigured()) {
      router.push(localePath(ROUTES.signup, locale));
      return;
    }
    const unsubscribe = onAuthStateChanged(getFirebaseAuth(), (user) => {
      if (!user) {
        router.push(localePath(ROUTES.signup, locale));
        return;
      }
      setUserEmail(user.email);
      setUserId(user.uid);
    });
    return () => unsubscribe();
  }, [locale, router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!userId || !userEmail) return;

    setLoading(true);
    setError("");
    try {
      await saveUserRole(userId, userEmail, role);
      router.push(localizedPath(ROUTES.earlyAccess));
    } catch {
      setError(messages.onboarding.error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      <div>
        <h2 className="text-xl font-bold">{messages.onboarding.title}</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {messages.onboarding.description}
        </p>
      </div>

      <RadioGroup
        value={role}
        onValueChange={(v) => setRole(v as UserRole)}
        className="gap-4"
      >
        {roles.map((r) => {
          const roleMessages = messages.onboarding.roles[r.key];
          return (
          <Label
            key={r.value}
            htmlFor={r.value}
            className={cn(
              "flex cursor-pointer items-start gap-4 rounded-2xl border p-5 transition-all",
              role === r.value
                ? "border-gold/50 bg-gold/5 shadow-lg shadow-gold/5"
                : "border-border/50 bg-card/50 hover:border-gold/30"
            )}
          >
            <RadioGroupItem value={r.value} id={r.value} className="mt-1" />
            <div className="flex flex-1 items-start gap-3">
              <span
                className={cn(
                  "flex size-10 shrink-0 items-center justify-center rounded-xl",
                  role === r.value ? "bg-gold/20 text-gold" : "bg-muted text-muted-foreground"
                )}
              >
                <r.icon className="size-5" />
              </span>
              <div>
                <p className="font-semibold">{roleMessages.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{roleMessages.description}</p>
              </div>
            </div>
          </Label>
          );
        })}
      </RadioGroup>

      {error && (
        <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {error}
        </p>
      )}

      <Button
        type="submit"
        disabled={loading || !userId}
        className="h-11 w-full bg-gradient-to-l from-gold to-gold-dim text-base font-semibold text-background hover:opacity-90"
      >
        {loading ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          messages.onboarding.submit
        )}
      </Button>
    </motion.form>
  );
}
