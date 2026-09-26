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
import { getDictionary } from "@/lib/i18n/dictionaries";

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
  const messages = getDictionary(locale);

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${siteConfig.name} | ${siteConfig.taglineEn}`,
      template: `%s | ${siteConfig.name}`,
    },
    description: messages.seo.description,
    keywords: [...messages.seo.keywords],
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
      description: messages.seo.description,
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: messages.seo.description,
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
  const dictionary = getDictionary(locale);

  return (
    <html
      lang={locale}
      dir={localeConfig[locale].direction}
      className={`${cairo.variable} dark h-full scroll-smooth antialiased`}
    >
      <head>
        <StructuredData description={dictionary.seo.description} />
        <meta name="application-name" content={siteConfig.name} />
        <meta name="apple-mobile-web-app-title" content={siteConfig.name} />
      </head>
      <body className="min-h-full bg-background font-sans text-foreground">
        <AuthProvider>
          <LocaleProvider locale={locale} dictionary={dictionary}>
            {children}
          </LocaleProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
