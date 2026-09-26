"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { FormField } from "@/components/forms/form-field";
import { SuccessState } from "@/components/forms/success-state";
import {
  GCC_COUNTRIES,
  RESTAURANT_SIZES,
  POS_SYSTEMS,
} from "@/lib/constants";
import { trackEarlyAccessClick, trackEvent } from "@/lib/analytics";
import type { UserRole } from "@/types";
import { cn } from "@/lib/utils";
import { useDictionary } from "@/components/providers/locale-provider";

export function EarlyAccessForm() {
  const messages = useDictionary();
  const copy = messages.earlyAccess.form;
  const [submissionState, setSubmissionState] = useState<
    "unknown" | "checking" | "submitted" | "already_submitted"
  >("unknown");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [role, setRole] = useState<UserRole>("restaurant_owner");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    restaurantName: "",
    restaurantSize: "",
    currentPos: "",
    message: "",
  });

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (field === "email") setSubmissionState("unknown");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSubmissionState("checking");
    trackEarlyAccessClick("early_access_form");

    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          country: form.country,
          restaurantName: form.restaurantName,
          restaurantSize: form.restaurantSize,
          currentPos: form.currentPos,
          role,
          message: form.message,
        }),
      });

      const result = (await response.json()) as { result?: "created" | "already_exists" };
      if (!response.ok || !result.result) {
        throw new Error("Early Access submission failed");
      }
      if (result.result === "already_exists") {
        setSubmissionState("already_submitted");
        return;
      }
      trackEvent("early_access_submitted", { role, country: form.country });
      setSubmissionState("submitted");
    } catch {
      setSubmissionState("unknown");
      setError(copy.unavailable);
    } finally {
      setLoading(false);
    }
  }

  if (submissionState === "submitted" || submissionState === "already_submitted") {
    return (
      <SuccessState
        title={submissionState === "already_submitted" ? copy.alreadySubmittedTitle : copy.submittedTitle}
        description={
          submissionState === "already_submitted"
            ? copy.alreadySubmittedDescription
            : copy.submittedDescription
        }
      />
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label={copy.firstName} htmlFor="firstName" required>
          <Input
            id="firstName"
            value={form.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            required
            className="h-11"
          />
        </FormField>
        <FormField label={copy.lastName} htmlFor="lastName" required>
          <Input
            id="lastName"
            value={form.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            required
            className="h-11"
          />
        </FormField>
      </div>

      <FormField label={copy.email} htmlFor="email" required>
        <Input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          required
          dir="ltr"
          className="h-11"
        />
      </FormField>
      {submissionState === "checking" && (
        <p className="text-sm text-muted-foreground">{copy.checking}</p>
      )}
      <FormField label={copy.country} htmlFor="country" required>
        <Select value={form.country} onValueChange={(v) => update("country", v ?? "")} required>
          <SelectTrigger className="h-11 w-full">
            <SelectValue placeholder={copy.chooseCountry} />
          </SelectTrigger>
          <SelectContent>
            {GCC_COUNTRIES.map((c, index) => (
              <SelectItem key={c.value} value={c.value}>
                {copy.countryOptions[index]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>

      <div>
        <p className="mb-3 text-sm font-medium">{copy.rolePrompt}</p>
        <RadioGroup
          value={role}
          onValueChange={(v) => setRole(v as UserRole)}
          className="grid gap-3 sm:grid-cols-2"
        >
          {[
            { value: "restaurant_owner", label: copy.roleOwner },
            { value: "customer", label: copy.roleCustomer },
          ].map((r) => (
            <Label
              key={r.value}
              htmlFor={`role-${r.value}`}
              className={cn(
                "flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-colors",
                role === r.value ? "border-gold/50 bg-gold/5" : "border-border/50"
              )}
            >
              <RadioGroupItem value={r.value} id={`role-${r.value}`} />
              {r.label}
            </Label>
          ))}
        </RadioGroup>
      </div>

      <FormField
        label={copy.restaurantName}
        htmlFor="restaurantName"
        hint={role === "customer" ? messages.common.optional : undefined}
      >
        <Input
          id="restaurantName"
          value={form.restaurantName}
          onChange={(e) => update("restaurantName", e.target.value)}
          className="h-11"
        />
      </FormField>

      <FormField label={copy.restaurantSize} htmlFor="restaurantSize" required>
        <Select
          value={form.restaurantSize}
          onValueChange={(v) => update("restaurantSize", v ?? "")}
          required
        >
          <SelectTrigger className="h-11 w-full">
            <SelectValue placeholder={copy.chooseSize} />
          </SelectTrigger>
          <SelectContent>
            {RESTAURANT_SIZES.map((s, index) => (
              <SelectItem key={s.value} value={s.value}>
                {copy.sizeOptions[index]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>

      <FormField label={copy.posSystem} htmlFor="currentPos" hint={messages.common.optional}>
        <Select value={form.currentPos} onValueChange={(v) => update("currentPos", v ?? "")}>
          <SelectTrigger className="h-11 w-full">
            <SelectValue placeholder={copy.choosePos} />
          </SelectTrigger>
          <SelectContent>
            {POS_SYSTEMS.map((p, index) => (
              <SelectItem key={p.value} value={p.value}>
                {copy.posOptions[index]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>

      <FormField label={copy.message} htmlFor="message" hint={messages.common.optional}>
        <Textarea
          id="message"
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder={copy.messagePlaceholder}
          rows={4}
        />
      </FormField>

      {error && (
        <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {error}
        </p>
      )}

      <Button
        type="submit"
        disabled={loading || submissionState === "checking"}
        className="h-12 w-full bg-gradient-to-l from-gold to-gold-dim text-base font-semibold text-background hover:opacity-90"
      >
        {loading ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <>
            <Send className="size-4" />
            {copy.submit}
          </>
        )}
      </Button>
    </motion.form>
  );
}
