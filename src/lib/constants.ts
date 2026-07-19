export const ROUTES = {
  home: "/",
  login: "/login",
  signup: "/signup",
  onboarding: "/onboarding",
  earlyAccess: "/early-access",
  contactSales: "/contact-sales",
  demo: "/demo",
  pricing: "/pricing",
  enterprise: "/enterprise",
  platform: "/platform",
  resources: "/resources",
  roadmap: "/roadmap",
  about: "/about",
  insights: "/insights",
} as const;

export const GCC_COUNTRIES = [
  { value: "sa", label: "المملكة العربية السعودية" },
  { value: "ae", label: "الإمارات العربية المتحدة" },
  { value: "qa", label: "قطر" },
  { value: "kw", label: "الكويت" },
  { value: "bh", label: "البحرين" },
  { value: "om", label: "عُمان" },
] as const;

export const RESTAURANT_SIZES = [
  { value: "single", label: "فرع واحد" },
  { value: "small", label: "٢–٥ فروع" },
  { value: "medium", label: "٦–١٥ فرعاً" },
  { value: "large", label: "أكثر من ١٥ فرعاً" },
  { value: "chain", label: "سلسلة مطاعم" },
  { value: "na", label: "غير مطبّق (عميل)" },
] as const;

export const POS_SYSTEMS = [
  { value: "foodics", label: "Foodics" },
  { value: "sapaad", label: "Sapaad" },
  { value: "oracle", label: "Oracle MICROS" },
  { value: "lightspeed", label: "Lightspeed" },
  { value: "square", label: "Square" },
  { value: "custom", label: "نظام مخصص" },
  { value: "none", label: "لا يوجد نظام POS" },
  { value: "other", label: "أخرى" },
] as const;

export const FIRESTORE_COLLECTIONS = {
  users: "users",
  earlyAccess: "earlyAccess",
  contactSales: "contactSales",
  emailSubscriptions: "emailSubscriptions",
} as const;
