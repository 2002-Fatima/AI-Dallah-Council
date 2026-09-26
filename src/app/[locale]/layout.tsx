import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { Cairo } from "next/font/google";
import "../globals.css";
import { siteConfig } from "@/lib/content";
import { StructuredData } from "@/components/shared/structured-data";
import { AuthProvider } from "@/components/providers/auth-provider";
import { LocaleProvider } from "@/components/providers/locale-provider";
import { isLocale, LOCALES, localeConfig, localePath } from "@/lib/i18n";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${siteConfig.name} | ${siteConfig.taglineEn}`,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
      "مجلس الدلّة",
      "مطاعم الخليج",
      "نظام تشغيل مطاعم مستقبلي",
      "ZATCA product context",
      "MADA product context",
      "ذكاء اصطناعي",
      "السعودية",
      "الإمارات",
      "رؤية 2030",
      "مطاعم",
      "B2B SaaS",
      "Gulf restaurants",
      "restaurant operations",
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: {
      canonical: new URL(localePath("/", locale), siteConfig.url),
    },
    openGraph: {
      type: "website",
      locale: localeConfig[locale].openGraphLocale,
      url: new URL(localePath("/", locale), siteConfig.url).toString(),
      siteName: siteConfig.name,
      title: `${siteConfig.name} | ${siteConfig.taglineEn}`,
      description: siteConfig.description,
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
      creator: "@aidallah",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: "technology",
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={locale}
      dir={localeConfig[locale].direction}
      className={`${cairo.variable} dark h-full scroll-smooth antialiased`}
    >
      <head>
        <StructuredData />
        <meta name="application-name" content={siteConfig.name} />
        <meta name="apple-mobile-web-app-title" content={siteConfig.name} />
      </head>
      <body className="min-h-full bg-background font-sans text-foreground">
        <AuthProvider>
          <LocaleProvider locale={locale}>{children}</LocaleProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
