"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, Mail, UserRound } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { LinkButton } from "@/components/ui/link-button";
import { ROUTES } from "@/lib/constants";
import { getUserProfile } from "@/lib/firebase/firestore";
import { useAuth } from "@/components/providers/auth-provider";
import type { UserProfile } from "@/types";
import { useLocale } from "@/components/providers/locale-provider";
import { localePath } from "@/lib/i18n";

export function ProfileContent() {
  const router = useRouter();
  const locale = useLocale();
  const localizedPath = (path: string) => localePath(path, locale);
  const { user, loading, logout } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [profileError, setProfileError] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    if (loading || user) return;

    router.replace(localePath(ROUTES.login, locale));
  }, [loading, locale, router, user]);

  useEffect(() => {
    if (!user) return;

    let cancelled = false;
    getUserProfile(user.uid)
      .then((nextProfile) => {
        if (!cancelled) setProfile(nextProfile);
      })
      .catch(() => {
        if (!cancelled) setProfileError(true);
      });

    return () => {
      cancelled = true;
    };
  }, [user]);

  if (loading || !user) {
    return <ProfileLoadingState />;
  }

  const displayName = user.displayName || "حساب مجلس الدلّة";
  const initials = (user.displayName || user.email || "م").trim().charAt(0).toUpperCase();

  async function handleLogout() {
    setLoggingOut(true);
    try {
      await logout();
      router.replace(localizedPath(ROUTES.login));
    } finally {
      setLoggingOut(false);
    }
  }

  return (
    <>
      <PageHero
        badge="حسابك"
        title="الملف الشخصي"
        subtitle="إدارة معلومات حسابك"
        description="راجع معلومات حسابك واستكشف خطوة الوصول المبكر بشكل مستقل."
      />
      <section className="mx-auto max-w-2xl px-4 pb-24 sm:px-6">
        <div className="rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur md:p-10">
          <div className="flex items-center gap-4">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt={displayName}
                className="size-16 rounded-full object-cover"
              />
            ) : (
              <span className="flex size-16 items-center justify-center rounded-full bg-gold/15 text-2xl font-bold text-gold">
                {initials}
              </span>
            )}
            <div className="min-w-0">
              <h2 className="truncate text-xl font-bold">{displayName}</h2>
              <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="size-4 shrink-0" />
                <span className="truncate">{user.email || "لا يوجد بريد إلكتروني"}</span>
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-4 border-t border-border/50 pt-6">
            <div className="flex items-center gap-3 text-sm">
              <UserRound className="size-4 text-gold" />
              <span className="text-muted-foreground">نوع الحساب</span>
              <span className="mr-auto font-medium">
                {profile?.role === "restaurant_owner" ? "صاحب مطعم" : profile?.role === "customer" ? "عميل" : "لم يُحدد بعد"}
              </span>
            </div>
            {profileError && (
              <p className="text-sm text-muted-foreground">
                تعذر تحميل تفاصيل الملف الإضافية حالياً.
              </p>
            )}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton
              href={localizedPath(ROUTES.earlyAccess)}
              className="bg-gradient-to-l from-gold to-gold-dim text-background hover:opacity-90"
            >
              الوصول المبكر
            </LinkButton>
            <button
              type="button"
              onClick={handleLogout}
              disabled={loggingOut}
              className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-border px-3 text-sm font-medium transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-50"
            >
              <LogOut className="size-4" />
              {loggingOut ? "جارٍ تسجيل الخروج" : "تسجيل الخروج"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

function ProfileLoadingState() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-2xl items-center justify-center px-4 py-24 sm:px-6">
      <p className="text-muted-foreground">جارٍ التحقق من الحساب...</p>
    </section>
  );
}
