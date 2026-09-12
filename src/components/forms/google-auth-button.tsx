"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { signInWithGoogle } from "@/lib/firebase/auth";
import { ROUTES } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";
import { trackLoginClick } from "@/lib/analytics";
import { GoogleIcon } from "@/components/shared/google-icon";

type Props = {
  redirectTo?: string;
  mode?: "login" | "signup";
};

export function GoogleAuthButton({
  redirectTo = ROUTES.home,
  mode = "signup",
}: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleGoogleLogin() {
    try {
      setLoading(true);
      setError("");
      if (mode === "signup") {
        trackEvent("signup_started", { method: "google" });
      } else {
        trackLoginClick("google");
      }

      await signInWithGoogle();

      if (mode === "signup") {
        trackEvent("signup_completed", { method: "google" });
      }
      router.push(redirectTo);
    } catch {
      setError("حدث خطأ في المصادقة باستخدام Google. حاول مرة أخرى.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-2">
      <Button
        type="button"
        variant="outline"
        className="h-12 w-full"
        onClick={handleGoogleLogin}
        disabled={loading}
      >
        {loading ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <>
            <GoogleIcon className="h-5 w-5" />
            المتابعة باستخدام Google
          </>
        )}
      </Button>
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}