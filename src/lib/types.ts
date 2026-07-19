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
  createdAt: Date;
};

export type ContactSalesSubmission = {
  businessName: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  message: string;
  createdAt: Date;
};

export type EmailSubscription = {
  email: string;
  source: string;
  createdAt: Date;
};

export type UserProfile = {
  uid: string;
  email: string;
  role: UserRole;
  createdAt: Date;
};

export type RoadmapStatus = "completed" | "in_progress" | "planned";

export type RoadmapItem = {
  title: string;
  status: RoadmapStatus;
};

export type InsightArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
};
