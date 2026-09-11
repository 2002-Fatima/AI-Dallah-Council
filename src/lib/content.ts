export const siteConfig = {
  name: "مجلس الدلّة",
  nameEn: "AI Dallah",
  tagline: "شغّل مطعمك بذكاء. مدعوم بالذكاء الاصطناعي. مبني للخليج.",
  taglineEn: "Run Your Restaurant Smarter. Powered by AI. Built for the Gulf.",
  description:
    "رؤية نظام تشغيل ذكي لمطاعم الخليج — تجربة عربية أولاً نستكشف من خلالها العمليات، الامتثال، المدفوعات، والتحليلات التي تستحق أن تُبنى.",
  descriptionEn:
    "An Arabic-first AI operating system concept for Gulf restaurants, currently validating which workflows and capabilities should be built first.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aidallah.com",
  email: "hello@aidallah.com",
  locale: "ar_SA",
};

export const navLinks = [
  { href: "/about", label: "من نحن" },
  { href: "/demo", label: "العرض التوضيحي" },
  { href: "/roadmap", label: "خارطة الطريق" },
  { href: "/insights", label: "رؤى" },
];

export const features = [
  {
    icon: "operations" as const,
    title: "تبسيط العمليات اليومية",
    description:
      "نستكشف كيف يمكن لتجربة موحدة أن تربط الطلبات، المخزون، والموظفين بدلاً من التنقل بين أنظمة متفرقة.",
  },
  {
    icon: "analytics" as const,
    title: "رؤية تشغيلية فورية",
    description:
      "مفهوم لوحة عربية تساعد أصحاب المطاعم على فهم المبيعات، التكاليف، وأداء الفروع في الوقت المناسب.",
  },
  {
    icon: "zatca" as const,
    title: "سير عمل ZATCA مستقبلاً",
    description:
      "نبحث متطلبات الفوترة والامتثال في السعودية كجزء من القدرات التي قد تُبنى مستقبلاً، وليس كتكامل متاح حالياً.",
  },
  {
    icon: "mada" as const,
    title: "مدفوعات MADA في الرؤية المستقبلية",
    description:
      "نستكشف احتياجات المدفوعات المحلية مثل MADA ضمن تصور منصة مبنية للخليج، دون تكامل مباشر حالياً.",
  },
  {
    icon: "automation" as const,
    title: "أتمتة المهام المتكررة",
    description:
      "مساحة لاستكشاف أتمتة التقارير، القوائم، والمتابعة مع فهم ما يستحق الأولوية في أول نسخة.",
  },
  {
    icon: "compliance" as const,
    title: "امتثال وتقارير جاهزة",
    description:
      "اتجاه مستقبلي لتقارير مالية وتشغيلية تراعي متطلبات المنطقة والتحول الرقمي.",
  },
];

export const productConcepts = [
  {
    name: "مركز العمليات",
    focus: "طلبات ومهام يومية",
    location: "مفهوم مستقبلي",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    tag: "مفهوم منتج",
  },
  {
    name: "الرؤية التشغيلية",
    focus: "بيانات وتحليلات عربية",
    location: "مسار استكشاف",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    tag: "تجربة مستكشفة",
  },
  {
    name: "سير عمل الامتثال",
    focus: "ZATCA ومتطلبات السوق",
    location: "قدرة مخططة",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    tag: "مستقبلي",
  },
  {
    name: "المدفوعات المحلية",
    focus: "MADA واحتياجات الخليج",
    location: "قدرة مخططة",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    tag: "مسار مستقبلي",
  },
];

export const visionStats = [
  { value: "١", label: "رؤية عربية أولاً" },
  { value: "٦", label: "أسواق خليجية ندرسها" },
  { value: "٣", label: "أسئلة تحقق رئيسية" },
  { value: "١", label: "مرحلة تحقق حالية" },
];

export const footerLinks = {
  product: [
    { label: "العرض التوضيحي", href: "/demo" },
    { label: "خارطة الطريق", href: "/roadmap" },
  ],
  company: [
    { label: "من نحن", href: "/about" },
    { label: "الرؤى", href: "/insights" },
    { label: "الوصول المبكر", href: "/early-access" },
  ],
  legal: [] as { label: string; href: string }[],
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
    { title: "برنامج الوصول المبكر", titleEn: "Early Access Program" },
  ],
  planned: [
    { title: "لوحة تحكم الموردين", titleEn: "Vendor Dashboard" },
    { title: "تحليلات المطاعم", titleEn: "Restaurant Analytics" },
    { title: "مساعد القائمة الذكي", titleEn: "AI Menu Assistant" },
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
      "في مجلس الدلّة، نستكشف نظام تشغيل يركز على النتائج التجارية: أتمتة الفواتير، فهم ذروة الطلب في رمضان، واحتياجات المدفوعات المحلية مثل MADA — كل ذلك بلغة عربية وثقافة محلية.",
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
      "مجلس الدلّة يُصمم عربي أولاً: نختبر كيف ينبغي أن تُبنى الشاشات والتقارير والتفاعلات لرواد أعمال يفكرون ويعملون بالعربية.",
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
      "تساعد هذه المتطلبات في تحديد ما ينبغي أن يتضمنه سير عمل مستقبلي للفواتير والامتثال؛ مجلس الدلّة لا يقدم تكاملاً مع ZATCA حالياً.",
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
      "تساعد أهمية MADA في تحديد متطلبات أي تكامل مستقبلي؛ مجلس الدلّة لا يقدم تكاملاً مباشراً مع MADA حالياً.",
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
      "نعمل على عرض توضيحي تفاعلي يشرح تصورنا لتبسيط عمليات المطعم — من لوحة التحكم إلى مسارات الامتثال والمدفوعات. هذا تصور للمنتج وليس نظاماً تشغيلياً متاحاً حالياً.",
    badge: "قيد الإعداد",
  },
};
