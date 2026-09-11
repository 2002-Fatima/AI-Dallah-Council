export type UserRole = "restaurant_owner" | "customer";

export type EarlyAccessSubmission = {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  restaurantName?: string;
  restaurantSize: string;
  currentPos?: string;
  role: UserRole;
  message?: string;
  createdAt: string;
};

export type EmailSubscription = {
  email: string;
  source: string;
  createdAt: string;
};

export type UserProfile = {
  uid: string;
  email: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
};

export type RoadmapStatus = "completed" | "in_progress" | "planned";

export type RoadmapItem = {
  title: string;
  titleEn?: string;
  status: RoadmapStatus;
};

export type InsightArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  content: string[];
  image?: string;
};

export type AnalyticsEvent =
  | "early_access_submitted"
  | "signup_started"
  | "signup_completed"
  | "early_access_click"
  | "login_click"
  | "contact_submission"
  | "cta_conversion"
  | "form_submit";
