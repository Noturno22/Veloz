import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { UserRound, ArrowRight, Shield, Mail, Calendar, Sparkles, ExternalLink, MapPin, Package, Target, LineChart } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { useI18n } from "@/lib/i18n";
import { auth } from "@/lib/firebase";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Veloz" },
      { name: "description", content: "Your Veloz dashboard." },
      { property: "og:title", content: "Dashboard — Veloz" },
      { property: "og:url", content: "https://zentratrading.com/dashboard" },
    ],
    links: [{ rel: "canonical", href: "https://zentratrading.com/dashboard" }],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  const { t } = useI18n();
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const redirected = useRef(false);

  useEffect(() => {
    if (!loading && !user && !auth.currentUser && !redirected.current) {
      redirected.current = true;
      navigate({ to: "/login" });
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="flex min-h-[calc(100vh-6rem)] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gold border-t-transparent" />
      </div>
    );
  }

  if (!user && !auth.currentUser) return null;

  const initials = (user.email ?? "U").charAt(0).toUpperCase();
  const memberSince = new Date(user.metadata?.creationTime ?? Date.now()).toLocaleDateString("en-US", { month: "long", year: "numeric" });

  return (
    <div className="min-h-[calc(100vh-6rem)] py-16 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 25% 25%, var(--gold) 0%, transparent 50%), radial-gradient(circle at 75% 75%, var(--brand-blue) 0%, transparent 50%)",
      }} />
      <div aria-hidden className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container-x relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-gradient-gold text-[var(--gold-foreground)] grid place-items-center shadow-gold">
              <LineChart className="h-7 w-7" />
            </div>
            <div>
              <h1 className="font-display text-3xl text-[color:var(--navy)] dark:text-foreground">
                {t("dash.title")}
              </h1>
              <p className="text-sm text-muted-foreground mt-0.5 flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-gold" />
                {t("dash.welcome").replace("{name}", user.email?.split("@")[0] ?? "")}
              </p>
            </div>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-gold transition-colors px-3 py-2 rounded-lg hover:bg-muted/50"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            {t("nav.home")}
          </Link>
        </div>

        {/* Layout: profile + links */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-2 rounded-2xl bg-card border border-border p-6 shadow-card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-xl text-[color:var(--navy)] dark:text-foreground flex items-center gap-2">
                <UserRound className="h-5 w-5 text-gold" />
                {t("dash.profile")}
              </h2>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                <Shield className="h-3 w-3 inline mr-1" />
                Active
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col items-center gap-3">
                <div className="h-20 w-20 rounded-2xl bg-gradient-gold text-[var(--gold-foreground)] grid place-items-center text-3xl font-bold font-display shadow-gold">
                  {initials}
                </div>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {t("dash.memberSince") || "Member since"} {memberSince}
                </span>
              </div>
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                  <div className="h-8 w-8 rounded-lg bg-gold/10 text-gold grid place-items-center shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Email</div>
                    <div className="font-medium text-foreground text-sm truncate">{user.email}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                  <div className="h-8 w-8 rounded-lg bg-gold/10 text-gold grid place-items-center shrink-0">
                    <Shield className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">UID</div>
                    <div className="font-medium text-foreground text-xs font-mono truncate">{user.uid}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="rounded-2xl bg-card border border-border p-6 shadow-card">
            <h2 className="font-display text-xl text-[color:var(--navy)] dark:text-foreground mb-5 flex items-center gap-2">
              <LineChart className="h-5 w-5 text-gold" />
              {t("dash.quickLinks") || "Quick Links"}
            </h2>
            <div className="space-y-2.5">
              {[
                { to: "/opportunities", label: t("common.exploreOpportunities"), icon: Package },
                { to: "/commodities", label: t("nav.commodities"), icon: MapPin },
                { to: "/partnership", label: t("nav.partnership"), icon: Target },
                { to: "/contact", label: t("common.contactUs"), icon: Mail },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 border border-transparent transition-all group"
                >
                  <div className="h-9 w-9 rounded-lg bg-gold-soft text-gold grid place-items-center shrink-0 group-hover:bg-gold group-hover:text-[var(--gold-foreground)] transition-all">
                    <link.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-foreground group-hover:text-gold transition-colors">
                      {link.label}
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-gold transition-colors shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
