import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { LogOut, UserRound, BarChart3, Globe2, Handshake, TrendingUp, ArrowRight } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { useI18n } from "@/lib/i18n";

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
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
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

  if (!user) return null;

  return (
    <div className="min-h-[calc(100vh-6rem)] py-16">
      <div className="container-x">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="font-display text-3xl text-[color:var(--navy)] dark:text-foreground">
              {t("dash.title")}
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              {t("dash.welcome").replace("{name}", user.email ?? "")}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-gold transition-colors"
            >
              {t("nav.home")}
            </Link>
            <button
              onClick={logout}
              className="inline-flex items-center gap-2 border border-border px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-foreground/60 hover:text-red-500 hover:border-red-500/30 transition-all rounded-lg"
            >
              <LogOut className="h-3.5 w-3.5" />
              {t("dash.logout")}
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {[
            { icon: BarChart3, label: t("dash.totalVolume"), value: "US$ 2.8B+" },
            { icon: Handshake, label: t("dash.activeTx"), value: "1,200+" },
            { icon: Globe2, label: t("dash.marketsAccess"), value: "50+" },
            { icon: TrendingUp, label: t("dash.globalPartners"), value: "850+" },
          ].map((k) => (
            <div key={k.label} className="rounded-xl bg-card border border-border p-5 shadow-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-gold-soft text-gold grid place-items-center">
                  <k.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="text-2xl font-display text-[color:var(--navy)] dark:text-foreground">{k.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{k.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl bg-card border border-border p-6 shadow-card">
            <h2 className="font-display text-xl text-[color:var(--navy)] dark:text-foreground mb-4">
              {t("dash.profile")}
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <UserRound className="h-5 w-5 text-gold" />
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="font-medium text-foreground">{user.email}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <ShieldIcon />
                <div>
                  <div className="text-xs text-muted-foreground">UID</div>
                  <div className="font-medium text-foreground text-xs font-mono">{user.uid}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-card border border-border p-6 shadow-card">
            <h2 className="font-display text-xl text-[color:var(--navy)] dark:text-foreground mb-4">
              Quick Links
            </h2>
            <div className="space-y-2">
              {[
                { to: "/opportunities", label: t("common.exploreOpportunities") },
                { to: "/commodities", label: t("nav.commodities") },
                { to: "/partnership", label: t("nav.partnership") },
                { to: "/contact", label: t("common.contactUs") },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <span className="text-sm font-medium text-foreground/80 group-hover:text-gold transition-colors">
                    {link.label}
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-gold transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShieldIcon() {
  return (
    <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}
