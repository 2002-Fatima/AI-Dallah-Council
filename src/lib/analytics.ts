"use client";

import { track as vercelTrack } from "@vercel/analytics";
import type { AnalyticsEvent } from "@/types";

export function trackEvent(
  event: AnalyticsEvent,
  properties?: Record<string, string | number | boolean>
): void {
  try {
    vercelTrack(event, properties);
  } catch {
    // Analytics should never block user flows
  }
}

export function trackCtaClick(label: string, destination: string): void {
  trackEvent("cta_conversion", { label, destination });
}

export function trackEarlyAccessClick(source: string): void {
  trackEvent("early_access_click", { source });
}

export function trackLoginClick(source: string): void {
  trackEvent("login_click", { source });
}

export function trackContactSubmission(source: string): void {
  trackEvent("contact_submission", { source });
}

export function trackFormSubmit(form: string): void {
  trackEvent("form_submit", { form });
}
