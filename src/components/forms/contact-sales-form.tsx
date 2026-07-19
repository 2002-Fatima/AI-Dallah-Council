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
import { FormField } from "@/components/forms/form-field";
import { SuccessState } from "@/components/forms/success-state";
import { submitContactSales } from "@/lib/firebase/firestore";
import { isFirebaseConfigured } from "@/lib/firebase/config";
import { GCC_COUNTRIES } from "@/lib/constants";
import { trackContactSubmission } from "@/lib/analytics";

export function ContactSalesForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    businessName: "",
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    trackContactSubmission("contact_sales_form");

    try {
      if (isFirebaseConfigured()) {
        await submitContactSales({
          businessName: form.businessName.trim(),
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          country: form.country,
          message: form.message.trim(),
        });
      }
      setSubmitted(true);
    } catch {
      setError("حدث خطأ في الإرسال. حاول مرة أخرى.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <SuccessState
        title="تم استلام رسالتك"
        description="شكراً لتواصلك مع فريق المبيعات. سيراجع أحد مختصينا طلبك ويتواصل معك خلال ٢٤–٤٨ ساعة عمل."
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
      <FormField label="اسم النشاط التجاري" htmlFor="businessName" required>
        <Input
          id="businessName"
          value={form.businessName}
          onChange={(e) => update("businessName", e.target.value)}
          required
          className="h-11"
        />
      </FormField>

      <FormField label="الاسم" htmlFor="name" required>
        <Input
          id="name"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          required
          className="h-11"
        />
      </FormField>

      <div className="grid gap-6 sm:grid-cols-2">
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
        <FormField label="رقم الهاتف" htmlFor="phone" required>
          <Input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            required
            dir="ltr"
            placeholder="+966 5X XXX XXXX"
            className="h-11"
          />
        </FormField>
      </div>

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

      <FormField label="رسالتك" htmlFor="message" required>
        <Textarea
          id="message"
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="صف احتياجات مطعمك أو استفسارك..."
          rows={5}
          required
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
        className="h-12 w-full bg-gradient-to-l from-gold to-gold-dim text-base font-semibold text-background hover:opacity-90"
      >
        {loading ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <>
            <Send className="size-4" />
            إرسال الرسالة
          </>
        )}
      </Button>
    </motion.form>
  );
}
