"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Loader2, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormField } from "@/components/forms/form-field";
import { GoogleAuthButton } from "@/components/forms/google-auth-button";
import { signUp } from "@/lib/firebase/auth";
import { isFirebaseConfigured } from "@/lib/firebase/config";
import { ROUTES } from "@/lib/constants";

export function SignupForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("كلمة المرور يجب أن تكون ٨ أحرف على الأقل");
      return;
    }
    if (password !== confirmPassword) {
      setError("كلمتا المرور غير متطابقتين");
      return;
    }

    setLoading(true);
    try {
      if (!isFirebaseConfigured()) {
        setError("Firebase غير مُعدّ. أضف متغيرات البيئة في .env.local");
        return;
      }
      await signUp(email, password);
      router.push(ROUTES.earlyAccess);
    } catch (err) {
      const message = err instanceof Error ? err.message : "";
      if (message.includes("email-already-in-use")) {
        setError("هذا البريد الإلكتروني مسجّل مسبقاً");
      } else if (message.includes("weak-password")) {
        setError("كلمة المرور ضعيفة. استخدم ٨ أحرف على الأقل");
      } else {
        setError("حدث خطأ. حاول مرة أخرى.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <GoogleAuthButton redirectTo={ROUTES.earlyAccess} />

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

      <FormField label="كلمة المرور" htmlFor="password" required hint="٨ أحرف على الأقل">
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

      <FormField label="تأكيد كلمة المرور" htmlFor="confirmPassword" required>
        <Input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
            <UserPlus className="size-4" />
            إنشاء حساب
          </>
        )}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        لديك حساب؟{" "}
        <Link href={ROUTES.login} className="text-gold hover:underline">
          تسجيل الدخول
        </Link>
      </p>
    </motion.form>
  );
}
