export type FeatureKey =
  | "operations"
  | "analytics"
  | "zatca"
  | "mada"
  | "automation"
  | "compliance";

export type ProductConceptKey = "operations" | "analytics" | "compliance" | "payments";

export type ProblemKey =
  | "orders"
  | "payments"
  | "analytics"
  | "compliance"
  | "marketing"
  | "operations";

export type ArticleContentKey =
  | "futureAiGulfRestaurants"
  | "vision2030RestaurantTech"
  | "arabicFirstDigitalProducts"
  | "restaurantAutomation"
  | "zatcaExplained"
  | "madaExplained"
  | "aiForHospitality";

export interface ArticleMessages {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  content: readonly string[];
}

export interface RoadmapEntryMessages {
  title: string;
  titleEn: string;
}

export interface Dictionary {
  seo: {
    description: string;
    keywords: readonly string[];
  };
  common: {
    concept: string;
    readMore: string;
    optional: string;
    email: string;
    logoAlt: string;
    returnHome: string;
  };
  navigation: {
    about: string;
    demo: string;
    roadmap: string;
    insights: string;
    login: string;
    signup: string;
    profile: string;
    earlyAccess: string;
    logout: string;
    loggingOut: string;
    account: string;
    menuOpen: string;
    menuClose: string;
  };
  footer: {
    product: string;
    company: string;
    legal: string;
    rights: string;
    madeForGulf: string;
  };
  home: {
    hero: {
      badge: string;
      titleLead: string;
      titleHighlight: string;
      tagline: string;
      pitch: string;
      earlyAccess: string;
      demo: string;
      communityLetters: readonly string[];
      validationStrong: string;
      validationRest: string;
      concept: string;
      operationsEfficiency: string;
      conceptStatus: string;
      imageAlt: string;
      dashboardConcept: string;
      dashboardFeatures: string;
      futureTracks: string;
      discoverMore: string;
    };
    features: {
      badge: string;
      title: string;
      description: string;
      items: Record<FeatureKey, { title: string; description: string }>;
    };
    showcase: {
      badge: string;
      title: string;
      description: string;
      conceptLabel: string;
      items: Record<
        ProductConceptKey,
        { name: string; focus: string; location: string; tag: string }
      >;
    };
    vision: {
      badge: string;
      title: string;
      description: string;
      points: readonly string[];
      stats: readonly { value: string; label: string }[];
      imageAlt: string;
      vision2030: string;
      vision2030Description: string;
    };
    cta: {
      badge: string;
      title: string;
      titleHighlight: string;
      description: string;
      earlyAccess: string;
      demo: string;
      disclaimer: string;
    };
  };
  about: {
    metadata: { title: string; description: string };
    hero: { badge: string; title: string; subtitle: string; description: string };
    problem: {
      title: string;
      description: string;
      items: Record<ProblemKey, { label: string; description: string }>;
    };
    vision: {
      title: string;
      statementLead: string;
      statementHighlight: string;
      statementRest: string;
      description: string;
      points: readonly string[];
      earlyAccess: string;
      roadmap: string;
    };
  };
  demo: {
    metadata: { title: string; description: string };
    badge: string;
    subtitle: string;
    description: string;
    subscribeTitle: string;
    subscribeDescription: string;
    earlyAccess: string;
  };
  roadmap: {
    metadata: { title: string; description: string };
    hero: { badge: string; title: string; subtitle: string; description: string };
    stages: {
      completed: string;
      inProgress: string;
      planned: string;
      itemCount: string;
    };
    items: {
      completed: readonly RoadmapEntryMessages[];
      inProgress: readonly RoadmapEntryMessages[];
      planned: readonly RoadmapEntryMessages[];
    };
  };
  insights: {
    metadata: { title: string; description: string };
    hero: { badge: string; title: string; subtitle: string; description: string };
    back: string;
    articleCtaTitle: string;
    articleCtaDescription: string;
    articleCtaButton: string;
    articles: Record<ArticleContentKey, ArticleMessages>;
  };
  earlyAccess: {
    metadata: { title: string; description: string; openGraphTitle: string };
    hero: { badge: string; title: string; subtitle: string; description: string };
    form: {
      firstName: string;
      lastName: string;
      email: string;
      country: string;
      chooseCountry: string;
      rolePrompt: string;
      roleOwner: string;
      roleCustomer: string;
      restaurantName: string;
      restaurantSize: string;
      chooseSize: string;
      posSystem: string;
      choosePos: string;
      message: string;
      messagePlaceholder: string;
      checking: string;
      submit: string;
      unavailable: string;
      alreadySubmittedTitle: string;
      submittedTitle: string;
      alreadySubmittedDescription: string;
      submittedDescription: string;
      countryOptions: readonly string[];
      sizeOptions: readonly string[];
      posOptions: readonly string[];
    };
  };
  auth: {
    metadataLogin: { title: string; description: string };
    metadataSignup: { title: string; description: string };
    googleError: string;
    googleContinue: string;
    separator: string;
    login: {
      badge: string;
      title: string;
      description: string;
      firebaseNotConfigured: string;
      failed: string;
      invalidCredentials: string;
      userNotFound: string;
      genericError: string;
      checking: string;
      emailLabel: string;
      emailPlaceholder: string;
      passwordLabel: string;
      passwordPlaceholder: string;
      submit: string;
      noAccount: string;
      signupLink: string;
    };
    signup: {
      badge: string;
      title: string;
      description: string;
      passwordTooShort: string;
      passwordsMismatch: string;
      firebaseNotConfigured: string;
      emailAlreadyInUse: string;
      weakPassword: string;
      genericError: string;
      checking: string;
      emailLabel: string;
      emailPlaceholder: string;
      passwordLabel: string;
      passwordHint: string;
      passwordPlaceholder: string;
      confirmPasswordLabel: string;
      submit: string;
      hasAccount: string;
      loginLink: string;
    };
  };
  profile: {
    metadata: { title: string; description: string };
    hero: { badge: string; title: string; subtitle: string; description: string };
    accountFallback: string;
    noEmail: string;
    accountType: string;
    roleOwner: string;
    roleCustomer: string;
    roleUnset: string;
    initial: string;
    loadError: string;
    earlyAccess: string;
    logout: string;
    loggingOut: string;
    checking: string;
  };
  subscribe: {
    success: string;
    emailPlaceholder: string;
    submit: string;
    error: string;
  };
  onboarding: {
    roles: {
      owner: { label: string; description: string };
      customer: { label: string; description: string };
    };
    error: string;
    title: string;
    description: string;
    submit: string;
  };
}