"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { signInWithGoogle } from "@/lib/firebase/auth";
import { ROUTES } from "@/lib/constants";

type Props = {
  redirectTo?: string;
};

export function GoogleAuthButton({
  redirectTo = ROUTES.home,
}: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleGoogleLogin() {
    try {
      setLoading(true);

      await signInWithGoogle();

      router.push(redirectTo);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      type="button"
      variant="outline"
      className="w-full h-12"
      onClick={handleGoogleLogin}
      disabled={loading}
    >
      {loading ? (
        <Loader2 className="size-4 animate-spin" />
      ) : (
        <>
          <img
            src="/icons/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          المتابعة باستخدام Google
        </>
      )}
    </Button>
  );
}