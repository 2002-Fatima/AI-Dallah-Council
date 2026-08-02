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
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        <Link href="/" className="group flex items-center gap-2">
          <Image
            src="/logo.webp"
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
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LinkButton
            href={ROUTES.login}
            variant="ghost"
            size="sm"
            className="text-muted-foreground"
            onClick={() => trackLoginClick("header")}
          >
            تسجيل الدخول
          </LinkButton>
          <LinkButton
            href={ROUTES.earlyAccess}
            size="lg"
            className="bg-gradient-to-l from-gold to-gold-dim px-5 font-semibold text-background shadow-lg shadow-gold/25 hover:opacity-90"
            onClick={() => trackEarlyAccessClick("header")}
          >
            انضم للوصول المبكر
          </LinkButton>
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-lg border border-border/60 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
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
            className="overflow-hidden border-b border-border/50 bg-background/95 backdrop-blur-xl md:hidden"
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
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4 flex flex-col gap-2 border-t border-border/50 pt-4">
                <LinkButton
                  href={ROUTES.login}
                  variant="outline"
                  className="w-full"
                  onClick={() => trackLoginClick("mobile_menu")}
                >
                  تسجيل الدخول
                </LinkButton>
                <LinkButton
                  href={ROUTES.earlyAccess}
                  className="w-full bg-gradient-to-l from-gold to-gold-dim text-background"
                  onClick={() => trackEarlyAccessClick("mobile_menu")}
                >
                  انضم للوصول المبكر
                </LinkButton>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
