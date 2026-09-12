"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Loader2, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GoogleAuthButton } from "@/components/forms/google-auth-button";
import { FormField } from "@/components/forms/form-field";
import { signIn } from "@/lib/firebase/auth";
import { isFirebaseConfigured } from "@/lib/firebase/config";
import { ROUTES } from "@/lib/constants";
import { trackLoginClick } from "@/lib/analytics";
import { useAuth } from "@/components/providers/auth-provider";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, loading: authLoading } = useAuth();

  useEffect(() => {
    if (!authLoading && user) {
      router.replace(ROUTES.home);
    }
  }, [authLoading, router, user]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    trackLoginClick("login_form");

    try {
      if (!isFirebaseConfigured()) {
        setError("Firebase غير مُعدّ. أضف متغيرات البيئة في .env.local");
        return;
      }
      await signIn(email, password);
      router.push(ROUTES.home);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "فشل تسجيل الدخول";
      if (message.includes("invalid-credential") || message.includes("wrong-password")) {
        setError("البريد الإلكتروني أو كلمة المرور غير صحيحة");
      } else if (message.includes("user-not-found")) {
        setError("لا يوجد حساب بهذا البريد الإلكتروني");
      } else {
        setError("حدث خطأ. حاول مرة أخرى.");
      }
    } finally {
      setLoading(false);
    }
  }

  if (authLoading || user) {
    return <p className="py-8 text-center text-muted-foreground">جارٍ التحقق من الحساب...</p>;
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <GoogleAuthButton redirectTo={ROUTES.home} mode="login" />

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>

        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-3 text-muted-foreground">
            أو
          </span>
        </div>
      </div>
      <FormField label="البريد الإلكتروني" htmlFor="email" required>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@restaurant.com"
          required
          dir="ltr"
          className="h-11"
        />
      </FormField>

      <FormField label="كلمة المرور" htmlFor="password" required>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          required
          dir="ltr"
          className="h-11"
        />
      </FormField>

      {error && (
        <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {error}
        </p>
      )}

      <Button
        type="submit"
        disabled={loading}
        className="h-11 w-full bg-gradient-to-l from-gold to-gold-dim text-base font-semibold text-background hover:opacity-90"
      >
        {loading ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <>
            <LogIn className="size-4" />
            تسجيل الدخول
          </>
        )}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        ليس لديك حساب؟{" "}
        <Link href={ROUTES.signup} className="text-gold hover:underline">
          إنشاء حساب
        </Link>
      </p>
    </motion.form>
  );
}
