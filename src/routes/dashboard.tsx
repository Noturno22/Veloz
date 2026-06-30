import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, MapPin, Package, Target, LineChart, Mail } from "lucide-react";
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

  return (
    <div className="min-h-[calc(100vh-6rem)] py-16 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 25% 25%, var(--gold) 0%, transparent 50%), radial-gradient(circle at 75% 75%, var(--brand-blue) 0%, transparent 50%)",
      }} />
      <div aria-hidden className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container-x relative z-10">
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
                <LineChart className="h-3.5 w-3.5 text-gold" />
                Your trading command center
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

        <div className="max-w-lg mx-auto">
          <div className="rounded-2xl bg-card border border-border p-6 shadow-card">
            <h2 className="font-display text-xl text-[color:var(--navy)] dark:text-foreground mb-5 flex items-center gap-2">
              <LineChart className="h-5 w-5 text-gold" />
              {t("dash.quickLinks")}
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
