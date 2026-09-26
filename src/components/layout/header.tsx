"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";
import { navLinks, siteConfig } from "@/lib/content";
import { ROUTES } from "@/lib/constants";
import { trackEarlyAccessClick, trackLoginClick } from "@/lib/analytics";
import { useAuth } from "@/components/providers/auth-provider";
import { useLocale } from "@/components/providers/locale-provider";
import { useDictionary } from "@/components/providers/locale-provider";
import { localePath } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const { user, loading: authLoading, logout } = useAuth();
  const locale = useLocale();
  const messages = useDictionary();
  const localizedPath = (path: string) => localePath(path, locale);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  async function handleLogout() {
    setLoggingOut(true);
    try {
      await logout();
      setAccountOpen(false);
      setOpen(false);
    } finally {
      setLoggingOut(false);
    }
  }

  const accountName = user?.displayName || user?.email || messages.navigation.account;
  const accountInitial = accountName.trim().charAt(0).toUpperCase();

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/50 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-18 sm:px-6 lg:px-8"
      >
        <Link href={localizedPath(ROUTES.home)} className="group flex items-center gap-2">
          <Image
            src="/Dallah-council-logo.webp"
            alt={siteConfig.name}
            width={100}
            height={100}
            className="h-auto w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={localizedPath(link.href)}
              className="text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              {messages.navigation[link.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {authLoading ? (
            <div className="h-9 w-32 animate-pulse rounded-lg bg-muted" aria-hidden="true" />
          ) : user ? (
            <div className="relative">
              <button
                type="button"
                className="flex h-10 items-center gap-2 rounded-lg border border-border/60 px-2 transition-colors hover:bg-muted"
                aria-expanded={accountOpen}
                aria-haspopup="menu"
                onClick={() => setAccountOpen((current) => !current)}
              >
                {user.photoURL ? (
                  <img src={user.photoURL} alt="" className="size-7 rounded-full object-cover" />
                ) : (
                  <span className="flex size-7 items-center justify-center rounded-full bg-gold/15 text-xs font-bold text-gold">
                    {accountInitial}
                  </span>
                )}
                <span className="max-w-32 truncate text-sm">{accountName}</span>
              </button>
              {accountOpen && (
                <div
                  className="absolute left-0 top-full z-50 mt-2 w-48 rounded-xl border border-border/60 bg-background/95 p-2 shadow-xl backdrop-blur-xl"
                  role="menu"
                >
                  <Link
                    href={localizedPath(ROUTES.profile)}
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-muted"
                    role="menuitem"
                    onClick={() => setAccountOpen(false)}
                  >
                    {messages.navigation.profile}
                  </Link>
                  <Link
                    href={localizedPath(ROUTES.earlyAccess)}
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-muted"
                    role="menuitem"
                    onClick={() => setAccountOpen(false)}
                  >
                    {messages.navigation.earlyAccess}
                  </Link>
                  <button
                    type="button"
                    className="w-full rounded-lg px-3 py-2 text-start text-sm text-destructive hover:bg-muted disabled:opacity-50"
                    role="menuitem"
                    disabled={loggingOut}
                    onClick={handleLogout}
                  >
                    {loggingOut ? messages.navigation.loggingOut : messages.navigation.logout}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <LinkButton
                href={localizedPath(ROUTES.login)}
                variant="ghost"
                size="sm"
                className="text-muted-foreground"
                onClick={() => trackLoginClick("header")}
              >
                {messages.navigation.login}
              </LinkButton>
              <LinkButton
                href={localizedPath(ROUTES.earlyAccess)}
                size="lg"
                className="bg-gradient-to-l from-gold to-gold-dim px-5 font-semibold text-background shadow-lg shadow-gold/25 hover:opacity-90"
                onClick={() => trackEarlyAccessClick("header")}
              >
                {messages.navigation.earlyAccess}
              </LinkButton>
            </>
          )}
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-lg border border-border/60 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? messages.navigation.menuClose : messages.navigation.menuOpen}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border/50 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={localizedPath(link.href)}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {messages.navigation[link.key]}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4 flex flex-col gap-2 border-t border-border/50 pt-4">
                {authLoading ? (
                  <div className="h-11 w-full animate-pulse rounded-lg bg-muted" aria-hidden="true" />
                ) : user ? (
                  <>
                    <LinkButton href={localizedPath(ROUTES.profile)} variant="outline" className="w-full" onClick={() => setOpen(false)}>
                      {messages.navigation.profile}
                    </LinkButton>
                    <LinkButton
                      href={localizedPath(ROUTES.earlyAccess)}
                      className="w-full bg-gradient-to-l from-gold to-gold-dim text-background"
                      onClick={() => setOpen(false)}
                    >
                      {messages.navigation.earlyAccess}
                    </LinkButton>
                    <button
                      type="button"
                      className="inline-flex h-9 items-center justify-center rounded-lg border border-border px-3 text-sm font-medium text-destructive hover:bg-muted disabled:opacity-50"
                      onClick={handleLogout}
                      disabled={loggingOut}
                    >
                      {loggingOut ? messages.navigation.loggingOut : messages.navigation.logout}
                    </button>
                  </>
                ) : (
                  <>
                    <LinkButton
                      href={localizedPath(ROUTES.login)}
                      variant="outline"
                      className="w-full"
                      onClick={() => trackLoginClick("mobile_menu")}
                    >
                      {messages.navigation.login}
                    </LinkButton>
                    <LinkButton
                      href={localizedPath(ROUTES.earlyAccess)}
                      className="w-full bg-gradient-to-l from-gold to-gold-dim text-background"
                      onClick={() => trackEarlyAccessClick("mobile_menu")}
                    >
                      {messages.navigation.earlyAccess}
                    </LinkButton>
                  </>
                )}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
