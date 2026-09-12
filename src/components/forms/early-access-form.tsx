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

export function EarlyAccessForm() {
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
      setError("الوصول المبكر غير متاح حالياً. حاول مرة أخرى لاحقاً.");
    } finally {
      setLoading(false);
    }
  }

  if (submissionState === "submitted" || submissionState === "already_submitted") {
    return (
      <SuccessState
        title={submissionState === "already_submitted" ? "تم إرسال طلبك مسبقاً." : "تم تسجيل اهتمامك."}
        description={
          submissionState === "already_submitted"
            ? "تم إرسال طلب بهذا البريد الإلكتروني مسبقاً. سنبقيك على اطلاع بما نبنيه لاحقاً."
            : "تم إرسال طلبك بنجاح. سنبقيك على اطلاع بما نبنيه لاحقاً، دون أن يمثل ذلك قبولاً أو وعداً بإتاحة فورية."
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
        <FormField label="الاسم الأول" htmlFor="firstName" required>
          <Input
            id="firstName"
            value={form.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            required
            className="h-11"
          />
        </FormField>
        <FormField label="اسم العائلة" htmlFor="lastName" required>
          <Input
            id="lastName"
            value={form.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            required
            className="h-11"
          />
        </FormField>
      </div>

      <FormField label="البريد الإلكتروني" htmlFor="email" required>
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
        <p className="text-sm text-muted-foreground">جارٍ التحقق من الطلبات السابقة...</p>
      )}
      <FormField label="الدولة" htmlFor="country" required>
        <Select value={form.country} onValueChange={(v) => update("country", v ?? "")} required>
          <SelectTrigger className="h-11 w-full">
            <SelectValue placeholder="اختر الدولة" />
          </SelectTrigger>
          <SelectContent>
            {GCC_COUNTRIES.map((c) => (
              <SelectItem key={c.value} value={c.value}>
                {c.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>

      <div>
        <p className="mb-3 text-sm font-medium">أنا</p>
        <RadioGroup
          value={role}
          onValueChange={(v) => setRole(v as UserRole)}
          className="grid gap-3 sm:grid-cols-2"
        >
          {[
            { value: "restaurant_owner", label: "صاحب مطعم" },
            { value: "customer", label: "عميل" },
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
        label="اسم المطعم"
        htmlFor="restaurantName"
        hint={role === "customer" ? "اختياري" : undefined}
      >
        <Input
          id="restaurantName"
          value={form.restaurantName}
          onChange={(e) => update("restaurantName", e.target.value)}
          className="h-11"
        />
      </FormField>

      <FormField label="حجم المطعم" htmlFor="restaurantSize" required>
        <Select
          value={form.restaurantSize}
          onValueChange={(v) => update("restaurantSize", v ?? "")}
          required
        >
          <SelectTrigger className="h-11 w-full">
            <SelectValue placeholder="اختر الحجم" />
          </SelectTrigger>
          <SelectContent>
            {RESTAURANT_SIZES.map((s) => (
              <SelectItem key={s.value} value={s.value}>
                {s.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>

      <FormField label="نظام POS الحالي" htmlFor="currentPos" hint="اختياري">
        <Select value={form.currentPos} onValueChange={(v) => update("currentPos", v ?? "")}>
          <SelectTrigger className="h-11 w-full">
            <SelectValue placeholder="اختر النظام" />
          </SelectTrigger>
          <SelectContent>
            {POS_SYSTEMS.map((p) => (
              <SelectItem key={p.value} value={p.value}>
                {p.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>

      <FormField label="رسالة" htmlFor="message" hint="اختياري">
        <Textarea
          id="message"
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="أخبرنا عن تحديات مطعمك أو اهتماماتك..."
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
            إرسال طلب الوصول المبكر
          </>
        )}
      </Button>
    </motion.form>
  );
}
