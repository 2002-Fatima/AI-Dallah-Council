export type UserRole = "restaurant_owner" | "customer";

export interface UserProfile {
  uid: string;
  email: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

export interface EarlyAccessSubmission {
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
}

export interface ContactSalesSubmission {
  businessName: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  message: string;
  createdAt: string;
}

export interface EmailSubscription {
  email: string;
  source: string;
  createdAt: string;
}

export type RoadmapStatus = "completed" | "in_progress" | "planned";

export interface RoadmapItem {
  title: string;
  titleEn?: string;
  status: RoadmapStatus;
}

export interface InsightArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  content: string[];
}

export type AnalyticsEvent =
  | "early_access_click"
  | "login_click"
  | "contact_submission"
  | "cta_conversion"
  | "page_view";
