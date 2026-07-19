"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormField } from "@/components/forms/form-field";
import { signIn, signUp } from "@/lib/firebase/auth";
import { isFirebaseConfigured } from "@/lib/firebase/config";
import { ROUTES } from "@/lib/constants";
import { trackFormSubmit } from "@/lib/analytics";

type AuthFormProps = {
  mode: "login" | "signup";
};

export function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const data = new FormData(e.currentTarget);
    const email = String(data.get("email"));
    const password = String(data.get("password"));

    try {
      if (!isFirebaseConfigured()) {
        if (mode === "signup") {
          router.push(ROUTES.onboarding);
        } else {
          router.push(ROUTES.home);
        }
        return;
      }

      if (mode === "signup") {
        await signUp(email, password);
        trackFormSubmit("signup");
        router.push(ROUTES.onboarding);
      } else {
        await signIn(email, password);
        trackFormSubmit("login");
        router.push(ROUTES.home);
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "حدث خطأ. يرجى المحاولة مرة أخرى.";
      if (message.includes("auth/invalid-credential")) {
        setError("البريد الإلكتروني أو كلمة المرور غير صحيحة.");
      } else if (message.includes("auth/email-already-in-use")) {
        setError("هذا البريد مسجّل مسبقاً. جرّب تسجيل الدخول.");
      } else if (message.includes("auth/weak-password")) {
        setError("كلمة المرور ضعيفة. استخدم ٦ أحرف على الأقل.");
      } else {
        setError("حدث خطأ. يرجى المحاولة مرة أخرى.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-3xl border border-border/50 bg-card/50 p-6 backdrop-blur md:p-10"
      >
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold">
            {mode === "login" ? "تسجيل الدخول" : "إنشاء حساب"}
          </h1>
          <p className="text-sm text-muted-foreground">
            {mode === "login"
              ? "مرحباً بعودتك إلى مجلس الدلّة"
              : "انضم إلى منصة التحقق من الطلب"}
          </p>
        </div>

        <FormField label="البريد الإلكتروني" htmlFor="email" required>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            dir="ltr"
            className="h-11 text-left"
          />
        </FormField>

        <FormField label="كلمة المرور" htmlFor="password" required>
          <Input
            id="password"
            name="password"
            type="password"
            required
            autoComplete={mode === "login" ? "current-password" : "new-password"}
            minLength={6}
            dir="ltr"
            className="h-11 text-left"
          />
        </FormField>

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
          ) : mode === "login" ? (
            "تسجيل الدخول"
          ) : (
            "إنشاء حساب"
          )}
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          {mode === "login" ? (
            <>
              ليس لديك حساب؟{" "}
              <Link href={ROUTES.signup} className="text-gold hover:underline">
                سجّل الآن
              </Link>
            </>
          ) : (
            <>
              لديك حساب؟{" "}
              <Link href={ROUTES.login} className="text-gold hover:underline">
                تسجيل الدخول
              </Link>
            </>
          )}
        </p>
      </form>
    </div>
  );
}
