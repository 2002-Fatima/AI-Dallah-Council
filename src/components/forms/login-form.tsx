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
import { useLocale } from "@/components/providers/locale-provider";
import { localePath } from "@/lib/i18n";
import { useDictionary } from "@/components/providers/locale-provider";

export function LoginForm() {
  const router = useRouter();
  const locale = useLocale();
  const messages = useDictionary();
  const copy = messages.auth.login;
  const localizedPath = (path: string) => localePath(path, locale);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, loading: authLoading } = useAuth();

  useEffect(() => {
    if (!authLoading && user) {
      router.replace(localePath(ROUTES.home, locale));
    }
  }, [authLoading, locale, router, user]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    trackLoginClick("login_form");

    try {
      if (!isFirebaseConfigured()) {
        setError(copy.firebaseNotConfigured);
        return;
      }
      await signIn(email, password);
      router.push(localizedPath(ROUTES.home));
    } catch (err) {
      const message =
        err instanceof Error ? err.message : copy.failed;
      if (message.includes("invalid-credential") || message.includes("wrong-password")) {
        setError(copy.invalidCredentials);
      } else if (message.includes("user-not-found")) {
        setError(copy.userNotFound);
      } else {
        setError(copy.genericError);
      }
    } finally {
      setLoading(false);
    }
  }

  if (authLoading || user) {
    return <p className="py-8 text-center text-muted-foreground">{copy.checking}</p>;
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <GoogleAuthButton redirectTo={localizedPath(ROUTES.home)} mode="login" />

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>

        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-3 text-muted-foreground">
            {messages.auth.separator}
          </span>
        </div>
      </div>
      <FormField label={copy.emailLabel} htmlFor="email" required>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={copy.emailPlaceholder}
          required
          dir="ltr"
          className="h-11"
        />
      </FormField>

      <FormField label={copy.passwordLabel} htmlFor="password" required>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={copy.passwordPlaceholder}
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
            {copy.submit}
          </>
        )}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        {copy.noAccount}{" "}
        <Link href={localizedPath(ROUTES.signup)} className="text-gold hover:underline">
          {copy.signupLink}
        </Link>
      </p>
    </motion.form>
  );
}
