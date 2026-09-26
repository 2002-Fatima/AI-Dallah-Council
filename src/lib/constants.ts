import { localePath } from "@/lib/i18n";

export const ROUTES = {
  home: localePath("/"),
  login: localePath("/login"),
  signup: localePath("/signup"),
  profile: localePath("/profile"),
  earlyAccess: localePath("/early-access"),
  about: localePath("/about"),
  demo: localePath("/demo"),
  roadmap: localePath("/roadmap"),
  insights: localePath("/insights"),
} as const;

export const GCC_COUNTRIES = [
  { value: "sa" },
  { value: "ae" },
  { value: "qa" },
  { value: "kw" },
  { value: "bh" },
  { value: "om" },
] as const;

export const RESTAURANT_SIZES = [
  { value: "single" },
  { value: "small" },
  { value: "medium" },
  { value: "large" },
  { value: "chain" },
  { value: "na" },
] as const;

export const POS_SYSTEMS = [
  { value: "foodics", label: "Foodics" },
  { value: "sapaad", label: "Sapaad" },
  { value: "oracle", label: "Oracle MICROS" },
  { value: "lightspeed", label: "Lightspeed" },
  { value: "square", label: "Square" },
  { value: "custom" },
  { value: "none" },
  { value: "other" },
] as const;

export const FIRESTORE_COLLECTIONS = {
  users: "users",
  earlyAccess: "earlyAccess",
  emailSubscriptions: "emailSubscriptions",
} as const;
