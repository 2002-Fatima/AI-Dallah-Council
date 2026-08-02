export const siteConfig = {
  name: "مجلس الدلّة",
  nameEn: "AI Dallah",
  tagline: "شغّل مطعمك بذكاء. مدعوم بالذكاء الاصطناعي. مبني للخليج.",
  taglineEn: "Run Your Restaurant Smarter. Powered by AI. Built for the Gulf.",
  description:
    "نظام تشغيل ذكي لمطاعم الخليج — يبسّط العمليات، الامتثال، المدفوعات، والتحليلات في منصة عربية واحدة. مصمم خصيصاً لرواد الأعمال في السعودية والإمارات وقطر والكويت.",
  descriptionEn:
    "The AI Operating System for Gulf Restaurants — simplify operations, compliance, payments, and analytics in one Arabic-first platform.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aidallah.com",
  email: "hello@aidallah.com",
  locale: "ar_SA",
};

export const navLinks = [
  { href: "/platform", label: "المنصة" },
  { href: "/#features", label: "المميزات" },
  { href: "/pricing", label: "الأسعار" },
  { href: "/roadmap", label: "خارطة الطريق" },
  { href: "/about", label: "من نحن" },
  { href: "/insights", label: "رؤى" },
];

export const features = [
  {
    icon: "operations" as const,
    title: "تبسيط العمليات اليومية",
    description:
      "إدارة موحدة للطلبات، المخزون، والموظفين — بدلاً من التنقل بين أنظمة متفرقة لا تتواصل مع بعضها.",
  },
  {
    icon: "analytics" as const,
    title: "رؤية تشغيلية فورية",
    description:
      "لوحة تحكم عربية تعرض المبيعات، التكاليف، وأداء الفروع — لتتخذ قرارات أفضل في الوقت المناسب.",
  },
  {
    icon: "zatca" as const,
    title: "امتثال ZATCA بالذكاء الاصطناعي",
    description:
      "إعداد الفواتير وسير عمل الامتثال تلقائياً وفق متطلبات هيئة الزكاة والضريبة والجمارك السعودية.",
  },
  {
    icon: "mada" as const,
    title: "تكامل MADA للمدفوعات",
    description:
      "مصمم لأعمال الخليج مع دعم سلس لمدفوعات MADA وسير عمل الدفع الإقليمي — بدون تعقيدات تقنية.",
  },
  {
    icon: "automation" as const,
    title: "أتمتة المهام المتكررة",
    description:
      "تقليل العمل اليدوي في التقارير، القوائم، والمتابعة — ليركز فريقك على الضيافة لا على الأوراق.",
  },
  {
    icon: "compliance" as const,
    title: "امتثال وتقارير جاهزة",
    description:
      "تقارير مالية وتشغيلية متوافقة مع متطلبات المنطقة — جاهزة لرؤية 2030 والتحول الرقمي.",
  },
];

export const restaurants = [
  {
    name: "مطبخ نجد",
    cuisine: "مأكولات سعودية فاخرة",
    location: "الرياض",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    tag: "شريك مبكر",
  },
  {
    name: "بحر الخليج",
    cuisine: "مأكولات بحرية",
    location: "دبي",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    tag: "وصول مبكر",
  },
  {
    name: "ديرة القهوة",
    cuisine: "مقهى ومعجنات",
    location: "الدوحة",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    tag: "قائمة انتظار",
  },
  {
    name: "واحة الشام",
    cuisine: "مأكولات شامية",
    location: "جدة",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    tag: "قريباً",
  },
];

export const visionStats = [
  { value: "+٨٠", label: "مطعم في قائمة الانتظار" },
  { value: "٦", label: "دول خليجية" },
  { value: "١٠٠٪", label: "عربي أولاً" },
  { value: "٢٤/٧", label: "دعم محلي" },
];

export const testimonials = [
  {
    quote:
      "كنا ندير ٤ أنظمة مختلفة — طلبات، مدفوعات، تقارير، وامتثال. مجلس الدلّة يعدنا بمنصة واحدة تفهم سوقنا.",
    author: "فاطمة العتيبي",
    role: "مالكة، مطبخ نجد — الرياض",
    avatar: "ف",
  },
  {
    quote:
      "الامتثال لـ ZATCA كان أكبر تحدٍ لنا. فكرة أتمتة الفواتير والتقارير في منصة عربية — بالضبط ما نحتاجه.",
    author: "أحمد المنصوري",
    role: "مؤسس، بحر الخليج — دبي",
    avatar: "أ",
  },
  {
    quote:
      "أخيراً منصة تبني للخليج من الأساس — لغة عربية، RTL، MADA، والمناسبات المحلية. هذا ما ينقص السوق.",
    author: "نورة الكواري",
    role: "مديرة عمليات — الدوحة",
    avatar: "ن",
  },
];

export const footerLinks = {
  product: [
    { label: "المنصة", href: "/platform" },
    { label: "المميزات", href: "/#features" },
    { label: "الأسعار", href: "/pricing" },
    { label: "المؤسسات", href: "/enterprise" },
    { label: "خارطة الطريق", href: "/roadmap" },
  ],
  company: [
    { label: "من نحن", href: "/about" },
    { label: "الرؤى", href: "/insights" },
    { label: "الموارد", href: "/resources" },
    { label: "تواصل مع المبيعات", href: "/contact-sales" },
    { label: "الوصول المبكر", href: "/early-access" },
  ],
  legal: [
    { label: "سياسة الخصوصية", href: "/resources" },
    { label: "الشروط والأحكام", href: "/resources" },
  ],
};

export const roadmapItems = {
  completed: [
    { title: "منصة الهبوط", titleEn: "Landing Platform" },
    { title: "تجربة عربية أولاً", titleEn: "Arabic-first UX" },
    { title: "بنية RTL", titleEn: "RTL Architecture" },
    { title: "تصميم متجاوب", titleEn: "Responsive Design" },
    { title: "مصادقة Firebase", titleEn: "Firebase Authentication" },
    { title: "منصة التحقق من الطلب", titleEn: "Startup Validation Platform" },
  ],
  inProgress: [
    { title: "لوحة تحكم الموردين", titleEn: "Vendor Dashboard" },
    { title: "تحليلات المطاعم", titleEn: "Restaurant Analytics" },
    { title: "مساعد القائمة الذكي", titleEn: "AI Menu Assistant" },
    { title: "برنامج الوصول المبكر", titleEn: "Early Access Program" },
  ],
  planned: [
    { title: "امتثال ZATCA", titleEn: "ZATCA Compliance" },
    { title: "تكامل MADA", titleEn: "MADA Integration" },
    { title: "ذكاء المخزون", titleEn: "Inventory Intelligence" },
    { title: "توقع الطلب بالذكاء الاصطناعي", titleEn: "AI Demand Forecasting" },
    { title: "مساعد التسويق الذكي", titleEn: "AI Marketing Assistant" },
    { title: "الطلب الصوتي بالعربية", titleEn: "Arabic Voice Ordering" },
    { title: "التحليلات التنبؤية", titleEn: "Predictive Analytics" },
    { title: "وكلاء الذكاء الاصطناعي للمطاعم", titleEn: "Restaurant AI Agents" },
    { title: "ذكاء الحجوزات", titleEn: "Reservation Intelligence" },
    { title: "رؤى العملاء", titleEn: "Customer Insights" },
  ],
};

export const insightArticles = [
  {
    slug: "future-ai-gulf-restaurants",
    title: "مستقبل الذكاء الاصطناعي في مطاعم الخليج",
    excerpt:
      "كيف يُعيد الذكاء الاصطناعي تشكيل عمليات المطاعم في المنطقة — من التوقعات إلى الامتثال.",
    category: "استراتيجية",
    readTime: "٨ دقائق",
    date: "٢٠٢٦/٠٣/١٥",
    content: [
      "يشهد قطاع الضيافة في دول مجلس التعاون الخليجي تحولاً رقمياً غير مسبوق. مع رؤية 2030 في السعودية واستراتيجيات التحول الرقمي في الإمارات وقطر، أصبحت المطاعم أمام خيارين: التكيف أو التخلف عن المنافسة.",
      "لكن الذكاء الاصطناعي في المطاعم ليس مجرد موضة تقنية. المالكون لا يشترون «ذكاءً اصطناعياً» — بل يشترون تقليل التكاليف، تسريع العمليات، وامتثالاً أسهل. المنصات التي تفهم هذا الفارق هي التي ستنجح.",
      "في مجلس الدلّة، نبني نظام تشغيل يركز على النتائج التجارية: أتمتة الفواتير، توقع ذروة الطلب في رمضان، وتكامل MADA — كل ذلك بلغة عربية وثقافة محلية.",
    ],
  },
  {
    slug: "vision-2030-restaurant-tech",
    title: "رؤية 2030 وتقنية المطاعم",
    excerpt:
      "دور التحول الرقمي في قطاع الضيافة السعودي وكيف تستعد المطاعم للمستقبل.",
    category: "رؤية 2030",
    readTime: "٦ دقائق",
    date: "٢٠٢٦/٠٣/٠١",
    content: [
      "رؤية 2030 تضع قطاع الضيافة والسياحة في قلب الاقتصاد السعودي المتنوع. المطاعم ليست مجرد أماكن لتناول الطعام — بل محركات اقتصادية توظف آلاف العمال وتخدم ملايين الزوار.",
      "التقنية المناسبة تُمكّن أصحاب المطاعم من التركيز على الضيافة بدلاً من الأوراق. من امتثال ZATCA إلى تحليلات الأداء، المنصات العربية أصبحت ضرورة لا رفاهية.",
    ],
  },
  {
    slug: "arabic-first-digital-products",
    title: "المنتجات الرقمية العربية أولاً",
    excerpt:
      "لماذا يجب أن تُبنى منصات B2B للخليج بالعربية من اليوم الأول — وليس كترجمة لاحقة.",
    category: "تصميم المنتج",
    readTime: "٥ دقائق",
    date: "٢٠٢٦/٠٢/٢٠",
    content: [
      "ترجمة واجهة إنجليزية إلى العربية لا تكفي. RTL، التقويم الهجري، المناسبات المحلية، ومصطلحات الامتثال الخليجي — كلها تتطلب تصميماً أصيلاً من البداية.",
      "مجلس الدلّة مبني عربي أولاً: كل شاشة، كل تقرير، وكل تفاعل مصمم لرواد أعمال يفكرون ويعملون بالعربية.",
    ],
  },
  {
    slug: "restaurant-automation",
    title: "أتمتة المطاعم: من الفكرة إلى التطبيق",
    excerpt:
      "أين تبدأ المطاعم رحلة الأتمتة وما المهام التي يجب أتمتتها أولاً.",
    category: "عمليات",
    readTime: "٧ دقائق",
    date: "٢٠٢٦/٠٢/١٠",
    content: [
      "أكثر المهام التي تستهلك وقت أصحاب المطاعم: إعداد التقارير اليومية، متابعة المخزون، وإصدار الفواتير المتوافقة. هذه مهام متكررة وقابلة للأتمتة.",
      "الخطوة الأولى ليست «شراء ذكاء اصطناعي» — بل توحيد البيانات في منصة واحدة، ثم أتمتة ما يمكن أتمتته.",
    ],
  },
  {
    slug: "zatca-explained",
    title: "ZATCA مبسّطة: دليل أصحاب المطاعم",
    excerpt:
      "ما هي متطلبات هيئة الزكاة والضريبة والجمارك وكيف تؤثر على مطعمك.",
    category: "امتثال",
    readTime: "١٠ دقائق",
    date: "٢٠٢٦/٠١/٢٨",
    content: [
      "هيئة الزكاة والضريبة والجمارك (ZATCA) تفرض متطلبات فوترة إلكترونية على الأعمال في السعودية. المطاعم — كقطاع يتعامل بآلاف المعاملات يومياً — تحتاج حلولاً تلقائية.",
      "مجلس الدلّة يعمل على أتمتة إعداد الفواتير وسير عمل الامتثال — لتتفرغ لإدارة مطعمك لا لملاحقة المواعيد النظامية.",
    ],
  },
  {
    slug: "mada-explained",
    title: "MADA: مدفوعات مصممة للخليج",
    excerpt:
      "لماذا تكامل MADA ضروري لأي منصة مطاعم في المنطقة.",
    category: "مدفوعات",
    readTime: "٥ دقائق",
    date: "٢٠٢٦/٠١/١٥",
    content: [
      "MADA هي شبكة المدفوعات الوطنية في السعودية — ومعظم معاملات المطاعم المحلية تمر عبرها. أي منصة لا تدعم MADA بسلاسة تفقد جزءاً كبيراً من السوق.",
      "مجلس الدلّة يبني تكامل MADA من الأساس — لأن المطاعم الخليجية تستحق مدفوعات محلية لا حلولاً مستوردة.",
    ],
  },
  {
    slug: "ai-for-hospitality",
    title: "الذكاء الاصطناعي للضيافة: ما يهم فعلاً",
    excerpt:
      "تجاوز الضجيج التسويقي — ما القيمة الحقيقية للذكاء الاصطناعي في المطاعم؟",
    category: "استراتيجية",
    readTime: "٦ دقائق",
    date: "٢٠٢٦/٠١/٠٥",
    content: [
      "الذكاء الاصطناعي ليس منتجاً — بل تقنية تمكّن نتائج: توقع الطلب، تقليل الهدر، تحسين القوائم، وخدمة عملاء أسرع.",
      "المالكون الذين ينجحون يختارون منصات تُظهر ROI واضحاً — لا عروضاً تسويقية عن «ثورة الذكاء الاصطناعي».",
    ],
  },
];

export const comingSoonPages = {
  demo: {
    title: "شاهد العرض التوضيحي",
    subtitle: "استكشف كيف يعمل مجلس الدلّة — قريباً",
    description:
      "نعمل على عرض توضيحي تفاعلي يُظهر كيف تبسّط منصتنا عمليات مطعمك — من لوحة التحكم إلى الامتثال والمدفوعات.",
    badge: "قيد الإعداد",
  },
  pricing: {
    title: "الأسعار",
    subtitle: "خطط مرنة لمطاعم كل الأحجام",
    description:
      "نصمّم باقات تناسب المطاعم الفردية والسلاسل الكبيرة. سجّل في الوصول المبكر لتكون أول من يعرف الأسعار.",
    badge: "قريباً",
  },
  enterprise: {
    title: "المؤسسات",
    subtitle: "حلول مخصصة لسلاسل المطاعم الكبرى",
    description:
      "إدارة متعددة الفروع، تكاملات مخصصة، ودعم مخصص — تواصل مع فريق المبيعات لمعرفة المزيد.",
    badge: "تواصل معنا",
  },
  platform: {
    title: "المنصة",
    subtitle: "نظام تشغيل واحد لكل سير عمل مطعمك",
    description:
      "عمليات، مدفوعات، امتثال، تحليلات، وأتمتة — في منصة عربية واحدة مبنية للخليج.",
    badge: "قيد التطوير",
  },
  resources: {
    title: "الموارد",
    subtitle: "أدلة، وثائق، ومحتوى تعليمي",
    description:
      "نبني مكتبة موارد شاملة لأصحاب المطاعم — من دليل ZATCA إلى أفضل ممارسات التشغيل.",
    badge: "قريباً",
  },
};
