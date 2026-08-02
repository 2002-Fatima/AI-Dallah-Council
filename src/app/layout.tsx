import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/content";
import { StructuredData } from "@/components/shared/structured-data";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.taglineEn}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.png",
  },
  keywords: [
    "مجلس الدلّة",
    "مطاعم الخليج",
    "نظام تشغيل مطاعم",
    "ZATCA",
    "MADA",
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
    canonical: siteConfig.url,
    languages: {
      "ar-SA": siteConfig.url,
      "en-US": siteConfig.url,
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    alternateLocale: "en_US",
    url: siteConfig.url,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} dark h-full scroll-smooth antialiased`}
    >
      <head>
        <StructuredData />
        <meta name="application-name" content={siteConfig.name} />
        <meta name="apple-mobile-web-app-title" content={siteConfig.name} />
        <meta property="og:locale:alternate" content="en_US" />
      </head>
      <body className="min-h-full bg-background font-sans text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
