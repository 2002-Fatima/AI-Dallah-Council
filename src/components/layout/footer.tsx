import Link from "next/link";
import Image from "next/image";
import { footerLinks, siteConfig } from "@/lib/content";
import { ROUTES } from "@/lib/constants";
import { localePath, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n/dictionaries";

export function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();
  const localizedPath = (path: string) => localePath(path, locale);
  const messages = getDictionary(locale);

  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href={localizedPath(ROUTES.home)} className="inline-flex items-center gap-2">
              <Image src="/Dallah-council-logo.webp" alt={messages.common.logoAlt} width={100} height={100} className="w-auto h-auto" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {messages.seo.description}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-gold">{messages.footer.product}</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.key}>
                  <Link
                    href={localizedPath(link.href)}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {messages.navigation[link.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-gold">{messages.footer.company}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.key}>
                  <Link
                    href={localizedPath(link.href)}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {messages.navigation[link.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {footerLinks.legal.length > 0 && (
            <div>
              <h4 className="mb-4 text-sm font-semibold text-gold">{messages.footer.legal}</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={localizedPath(link.href)}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.key}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {year} {siteConfig.name}. {messages.footer.rights}
          </p>
          <p className="text-sm text-muted-foreground">
            {messages.footer.madeForGulf}
          </p>
        </div>
      </div>
    </footer>
  );
}
