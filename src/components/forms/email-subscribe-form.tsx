"use client";

import { useState } from "react";
import { Mail, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { subscribeEmail } from "@/lib/firebase/firestore";
import { isFirebaseConfigured } from "@/lib/firebase/config";
import { useDictionary } from "@/components/providers/locale-provider";

interface EmailSubscribeFormProps {
  source: string;
  className?: string;
}

export function EmailSubscribeForm({ source, className }: EmailSubscribeFormProps) {
  const messages = useDictionary();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    try {
      if (!isFirebaseConfigured()) {
        setStatus("error");
        return;
      }
      await subscribeEmail({ email: email.trim(), source });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-sm text-emerald">
        {messages.subscribe.success}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Mail className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="email"
            placeholder={messages.subscribe.emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-11 pr-10"
            dir="ltr"
          />
        </div>
        <Button
          type="submit"
          disabled={status === "loading"}
          className="h-11 bg-gradient-to-l from-gold to-gold-dim px-6 text-background hover:opacity-90"
        >
          {status === "loading" ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            messages.subscribe.submit
          )}
        </Button>
      </div>
      {status === "error" && (
        <p className="mt-2 text-xs text-destructive">
          {messages.subscribe.error}
        </p>
      )}
    </form>
  );
}
