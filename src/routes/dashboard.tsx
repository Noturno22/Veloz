import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { LogOut, UserRound, BarChart3, Globe2, Handshake, TrendingUp, ArrowRight, Activity, Clock, Sparkles, Shield, Mail, Calendar, ExternalLink, Zap, MapPin, Package, Target, LineChart } from "lucide-react";
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

const KPIS = [
  { icon: BarChart3, label: "dash.totalVolume", value: "US$ 2.8B+", delta: "+18.2%", up: true, color: "gold", sparkPts: [12, 18, 14, 22, 28, 24, 32, 38, 34, 40, 42] },
  { icon: Handshake, label: "dash.activeTx", value: "1,200+", delta: "+14.7%", up: true, color: "emerald", sparkPts: [6, 8, 7, 10, 14, 12, 16, 18, 20, 22, 24] },
  { icon: Globe2, label: "dash.marketsAccess", value: "50+", delta: "+10.5%", up: true, color: "blue", sparkPts: [3, 5, 4, 7, 9, 8, 11, 13, 15, 17, 20] },
  { icon: TrendingUp, label: "dash.globalPartners", value: "850+", delta: "+21.3%", up: true, color: "purple", sparkPts: [10, 14, 12, 18, 22, 26, 24, 30, 34, 38, 42] },
];

const COLOR_MAP: Record<string, { card: string; glow: string; text: string; spark: string }> = {
  gold:    { card: "border-gold/20",   glow: "from-gold/5 via-transparent", text: "text-gold",     spark: "var(--gold)" },
  emerald: { card: "border-emerald-500/20", glow: "from-emerald-500/5 via-transparent", text: "text-emerald-600", spark: "#10b981" },
  blue:    { card: "border-blue-500/20",    glow: "from-blue-500/5 via-transparent",    text: "text-blue-600",    spark: "#3b82f6" },
  purple:  { card: "border-purple-500/20",  glow: "from-purple-500/5 via-transparent",  text: "text-purple-600",  spark: "#8b5cf6" },
};

function DashboardPage() {
  const { t } = useI18n();
  const { user, loading, logout } = useAuth();
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
      <div aria-hidden className="absolute -top-48 -right-48 h-96 w-96 rounded-full bg-gold/3 blur-3xl" />

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
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-gold transition-colors px-3 py-2 rounded-lg hover:bg-muted/50"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              {t("nav.home")}
            </Link>
            <button
              onClick={logout}
              className="inline-flex items-center gap-2 border border-border px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-foreground/60 hover:text-red-500 hover:border-red-500/30 hover:bg-red-500/5 transition-all rounded-xl"
            >
              <LogOut className="h-3.5 w-3.5" />
              {t("dash.logout")}
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {KPIS.map((k) => {
            const c = COLOR_MAP[k.color];
            return (
              <div key={k.label} className={`relative rounded-2xl bg-card border ${c.card} p-5 shadow-card overflow-hidden group hover:shadow-elegant transition-all duration-300`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${c.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`h-10 w-10 rounded-xl ${c.text} bg-gold-soft grid place-items-center`}>
                      <k.icon className="h-5 w-5" />
                    </div>
                    <Sparkline pts={k.sparkPts} color={c.spark} className="w-20 h-8" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-display text-[color:var(--navy)] dark:text-foreground">{k.value}</span>
                    <span className={`text-xs font-bold ${k.up ? "text-emerald-600" : "text-red-500"}`}>
                      {k.delta}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{t(k.label)}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-2 rounded-2xl bg-card border border-border p-6 shadow-card hover:shadow-elegant transition-all duration-300">
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
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted/80 transition-colors">
                  <div className="h-8 w-8 rounded-lg bg-gold/10 text-gold grid place-items-center shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Email</div>
                    <div className="font-medium text-foreground text-sm truncate">{user.email}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted/80 transition-colors">
                  <div className="h-8 w-8 rounded-lg bg-gold/10 text-gold grid place-items-center shrink-0">
                    <Shield className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">UID</div>
                    <div className="font-medium text-foreground text-xs font-mono truncate">{user.uid}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted/80 transition-colors">
                  <div className="h-8 w-8 rounded-lg bg-gold/10 text-gold grid place-items-center shrink-0">
                    <Activity className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{t("dash.status") || "Status"}</div>
                    <div className="font-medium text-foreground text-sm flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      {t("dash.verified") || "Verified Account"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="rounded-2xl bg-card border border-border p-6 shadow-card hover:shadow-elegant transition-all duration-300">
            <h2 className="font-display text-xl text-[color:var(--navy)] dark:text-foreground mb-5 flex items-center gap-2">
              <Zap className="h-5 w-5 text-gold" />
              {t("dash.quickLinks") || "Quick Links"}
            </h2>
            <div className="space-y-2.5">
              {[
                { to: "/opportunities", label: t("common.exploreOpportunities"), icon: Package, desc: t("dash.qlOppDesc") || "Browse live trading deals" },
                { to: "/commodities", label: t("nav.commodities"), icon: MapPin, desc: t("dash.qlCommDesc") || "View commodity portfolio" },
                { to: "/partnership", label: t("nav.partnership"), icon: Target, desc: t("dash.qlPartDesc") || "Become a partner" },
                { to: "/contact", label: t("common.contactUs"), icon: Mail, desc: t("dash.qlContactDesc") || "Get in touch with us" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 hover:border-gold/20 border border-transparent transition-all group"
                >
                  <div className="h-9 w-9 rounded-lg bg-gold-soft text-gold grid place-items-center shrink-0 group-hover:bg-gold group-hover:text-[var(--gold-foreground)] transition-all">
                    <link.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-foreground group-hover:text-gold transition-colors">
                      {link.label}
                    </div>
                    <div className="text-[11px] text-muted-foreground truncate">{link.desc}</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-gold transition-colors shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="mt-6 rounded-2xl bg-card border border-border p-6 shadow-card hover:shadow-elegant transition-all duration-300">
          <h2 className="font-display text-xl text-[color:var(--navy)] dark:text-foreground mb-5 flex items-center gap-2">
            <Activity className="h-5 w-5 text-gold" />
            {t("dash.recentActivity") || "Recent Activity"}
          </h2>
          <div className="space-y-0 divide-y divide-border/50">
            {[
              { icon: Handshake, title: t("dash.actTx") || "Transaction Completed", desc: t("dash.actTxDesc") || "Coffee export — Angola → Europe", time: "2h ago", color: "text-emerald-600" },
              { icon: UserRound, title: t("dash.actPartner") || "New Partner", desc: t("dash.actPartnerDesc") || "Verified supplier joined the network", time: "1d ago", color: "text-gold" },
              { icon: Globe2, title: t("dash.actMarket") || "Market Update", desc: t("dash.actMarketDesc") || "Crude oil prices up 3.2% this week", time: "2d ago", color: "text-blue-600" },
              { icon: TrendingUp, title: t("dash.actVolume") || "Volume Milestone", desc: t("dash.actVolumeDesc") || "Total trading volume exceeded US$ 2.8B", time: "3d ago", color: "text-purple-600" },
            ].map((act, i) => (
              <div key={i} className="flex items-center gap-4 py-3.5 first:pt-0 last:pb-0">
                <div className={`h-9 w-9 rounded-xl bg-muted ${act.color} grid place-items-center shrink-0`}>
                  <act.icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-foreground">{act.title}</div>
                  <div className="text-xs text-muted-foreground">{act.desc}</div>
                </div>
                <div className="text-[11px] text-muted-foreground shrink-0 flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {act.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Sparkline({ pts, color, className }: { pts: number[]; color: string; className?: string }) {
  const w = 80;
  const h = 32;
  const max = Math.max(...pts);
  const step = w / (pts.length - 1);
  const path = pts
    .map((v, i) => `${i === 0 ? "M" : "L"} ${i * step},${h - (v / max) * h}`)
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={className}>
      <defs>
        <linearGradient id={`sg-${color.replace(/[^a-zA-Z]/g, "")}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${path} L ${w},${h} L 0,${h} Z`} fill={`url(#sg-${color.replace(/[^a-zA-Z]/g, "")})`} />
      <path d={path} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
