import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, ShieldCheck, BarChart3, Globe2, Handshake, TrendingUp, Briefcase } from "lucide-react";
import heroImg from "@/assets/hero-trading.jpg";
import agriImg from "@/assets/commodity-agricultural.jpg";
import mineralsImg from "@/assets/commodity-minerals.jpg";
import energyImg from "@/assets/commodity-energy.jpg";
import industrialImg from "@/assets/commodity-industrial.jpg";
import carrocel1 from "@/assets/carrocel/1.jpeg";
import carrocel2 from "@/assets/carrocel/2.jpeg";
import carrocel3 from "@/assets/carrocel/3.jpeg";
import carrocel4 from "@/assets/carrocel/4.jpeg";
import carrocel5 from "@/assets/carrocel/5.jpeg";
import { useI18n } from "@/lib/i18n";
import type { TKey } from "@/lib/translations";
import { WorldMap } from "@/components/site/WorldMap";
import { useState, useEffect } from "react";
import { registerSchema, submitRegister } from "@/lib/api";
import type { RegisterInput } from "@/lib/api";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Veloz — Global Commodity Trading Made Simple" },
      { name: "description", content: "Connecting producers, suppliers, exporters, importers and investors through secure and efficient global commodity trading solutions." },
      { property: "og:title", content: "Veloz — Global Commodity Trading Made Simple" },
      { property: "og:description", content: "Worldwide commodity marketplace for agricultural, mineral, energy and industrial trading." },
      { property: "og:url", content: "https://zentratrading.com/" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "https://zentratrading.com/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const { user, loading, signInWithGoogle } = useAuth();
  const { t } = useI18n();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gold border-t-transparent" />
      </div>
    );
  }

  if (!user) {
    return <LandingGate onGoogleSignIn={signInWithGoogle} />;
  }

  return <HomeContent />;
}

function LandingGate({ onGoogleSignIn }: { onGoogleSignIn: () => Promise<void> }) {
  const { t } = useI18n();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleGoogleSignIn() {
    setLoading(true);
    setError("");
    try {
      await onGoogleSignIn();
    } catch (err: unknown) {
      const e = err as { code?: string };
      if (e.code === "auth/popup-closed-by-user") return;
      if (e.code === "auth/popup-blocked") {
        setError("Popup blocked. Please allow popups for this site and try again.");
        return;
      }
      if (e.code === "auth/unauthorized-domain") {
        setError("This domain is not authorized for Google sign-in. Contact the administrator.");
        return;
      }
      setError(t("landing.error"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06111F]/85 via-[#06111F]/60 to-[#06111F]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06111F]/50 to-transparent" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute -top-48 -right-48 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute -bottom-48 -left-48 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="absolute top-1/4 left-1/4 h-px w-32 rotate-45 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-1/3 right-1/4 h-px w-48 -rotate-12 bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      <div className="relative z-10 w-full max-w-md mx-auto px-4">
        <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-10 shadow-2xl border border-white/10 text-center">
          <div className="flex justify-center mb-6">
            <img
              src="/zentra-logo.png"
              alt="Veloz"
              className="h-28 w-auto md:h-32 md:w-auto object-contain drop-shadow-lg"
            />
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
            Veloz
          </h1>
          <p className="text-white/50 text-sm mb-10 max-w-xs mx-auto leading-relaxed">
            {t("landing.tagline")}
          </p>

          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="group w-full flex items-center justify-center gap-3 bg-white hover:bg-white/90 text-[#1a1a1a] rounded-xl px-6 py-4 font-semibold text-sm transition-all hover:shadow-lg hover:shadow-white/20 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            {loading ? t("landing.signingIn") : t("landing.continueGoogle")}
          </button>

          {error && (
            <p className="mt-4 text-xs text-red-400 bg-red-950/50 rounded-lg px-3 py-2">{error}</p>
          )}

          <div className="mt-8 flex items-center gap-3">
            <span className="h-px flex-1 bg-white/10" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">{t("landing.or")}</span>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <p className="mt-6 text-xs text-white/40">
            {t("landing.existingUser")}{" "}
            <Link to="/login" className="text-gold font-semibold hover:underline transition-colors">
              {t("landing.signInEmail")}
            </Link>
          </p>

          <p className="mt-4 text-xs text-white/40">
            {t("landing.newHere")}{" "}
            <Link to="/register" className="text-gold font-semibold hover:underline transition-colors">
              {t("landing.createAccount")}
            </Link>
          </p>

          <div className="mt-8 flex items-center justify-center gap-2 text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">
            <ShieldCheck className="h-3.5 w-3.5 text-gold" />
            {t("landing.secured")}
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeContent() {
  const { t } = useI18n();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const COUNTRIES = ["United Kingdom", "Angola", "Nigeria", "South Africa", "Brazil", "China", "USA", "UAE", "Singapore"];
  const BIZ_KEYS: TKey[] = ["biz.producer", "biz.supplier", "biz.exporter", "biz.importer", "biz.investor"];

  const STEPS = [
    { n: "1", icon: Building2, titleKey: "steps.s1.title" as TKey, textKey: "steps.s1.text" as TKey },
    { n: "2", icon: ShieldCheck, titleKey: "steps.s2.title" as TKey, textKey: "steps.s2.text" as TKey },
    { n: "3", icon: BarChart3, titleKey: "steps.s3.title" as TKey, textKey: "steps.s3.text" as TKey },
  ];

  const STATS = [
    { icon: Globe2, value: "50+", labelKey: "stats.countries" as TKey },
    { icon: Handshake, value: "1,200+", labelKey: "stats.transactions" as TKey },
    { icon: Briefcase, value: "850+", labelKey: "stats.partners" as TKey },
    { icon: TrendingUp, value: "US$ 2.8B+", labelKey: "stats.volume" as TKey },
  ];

  const COMMODITIES: { titleKey: TKey; img: string; itemKeys: TKey[] }[] = [
    { titleKey: "comm.agricultural", img: agriImg, itemKeys: ["comm.item.coffee", "comm.item.soybeans", "comm.item.corn", "comm.item.rice"] },
    { titleKey: "comm.minerals", img: mineralsImg, itemKeys: ["comm.item.copper", "comm.item.ironOre"] },
    { titleKey: "comm.energy", img: energyImg, itemKeys: ["comm.item.oil", "comm.item.naturalGas"] },
    { titleKey: "comm.industrial", img: industrialImg, itemKeys: ["comm.item.steel", "comm.item.cement", "comm.item.aluminum"] },
  ];

  const MARKET: { nameKey: TKey; nameEn: string; price: string; change: string; up: boolean }[] = [
    { nameKey: "dash.market.crudeOil", nameEn: "Crude Oil", price: "$84.45", change: "+2.35%", up: true },
    { nameKey: "dash.market.copper", nameEn: "Copper", price: "$9,125.00", change: "-0.45%", up: false },
    { nameKey: "dash.market.naturalGas", nameEn: "Natural Gas", price: "$2.75", change: "+3.45%", up: true },
  ];

  const DIST: { labelKey: TKey; labelEn: string; value: number; color: string }[] = [
    { labelKey: "dash.dist.energy", labelEn: "Energy", value: 35, color: "#3b82f6" },
    { labelKey: "dash.dist.minerals", labelEn: "Minerals", value: 25, color: "#14b8a6" },
    { labelKey: "dash.dist.agricultural", labelEn: "Agricultural", value: 25, color: "#10b981" },
    { labelKey: "dash.dist.industrial", labelEn: "Industrial", value: 15, color: "#6366f1" },
  ];

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitMsg, setSubmitMsg] = useState("");
  const [errors, setErrors] = useState<Partial<Record<keyof RegisterInput, string>>>({});

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("idle");
    setSubmitMsg("");
    setErrors({});
    const form = new FormData(e.currentTarget);
    const data: RegisterInput = {
      fullName: form.get("fullName") as string,
      companyName: form.get("companyName") as string,
      email: form.get("email") as string,
      whatsapp: form.get("whatsapp") as string,
      country: form.get("country") as string,
      businessType: form.get("businessType") as string,
    };
    const result = registerSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof RegisterInput, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof RegisterInput;
        fieldErrors[field] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    try {
      await submitRegister(result.data);
      setStatus("success");
      setSubmitMsg(t("form.submitSuccess"));
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setSubmitMsg(err instanceof Error ? err.message : t("form.submitError"));
    }
  }

  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--navy) 1px, transparent 1px), linear-gradient(90deg, var(--navy) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="relative container-x py-12 lg:py-20">
          <div className="grid lg:grid-cols-[1.25fr_1fr] gap-12 items-start">
            {/* Left: copy */}
            <div>
              <div className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-6">
                {t("home.hero.eyebrow")}
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-[color:var(--navy)] dark:text-foreground">
                {t("home.hero.titleA")}<br />{t("home.hero.titleB")}
              </h1>
              <p className="mt-6 max-w-xl text-foreground/65 leading-relaxed">
                {t("home.hero.desc")}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/partnership"
                  className="group inline-flex items-center gap-3 bg-gold px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--gold-foreground)] hover:brightness-110 shadow-gold transition-all"
                >
                  {t("common.becomeAPartner")}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/opportunities"
                  className="group inline-flex items-center gap-3 border-2 border-[color:var(--navy)]/15 dark:border-white/20 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--navy)] dark:text-foreground hover:border-gold hover:text-gold transition-all"
                >
                  {t("common.exploreOpportunities")}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {["var(--brand-green)", "#0A192F", "#3b82f6", "#10b981"].map((c) => (
                    <div key={c} className="h-9 w-9 rounded-full border-2 border-background" style={{ background: c }} />
                  ))}
                </div>
                <p className="text-sm text-foreground/60">
                  {t("home.hero.trustedBy")} <span className="font-semibold text-foreground">850+</span> {t("home.hero.trustedBySuffix")}
                </p>
              </div>
            </div>

            {/* Right: Join form card */}
            <div className="lg:sticky lg:top-28">
              <div className="rounded-2xl bg-card border border-border shadow-elegant p-8">
                <h2 className="font-display text-2xl text-[color:var(--navy)] dark:text-foreground">
                  {t("common.joinZentra")}
                </h2>
                <p className="mt-2 text-sm text-foreground/60">{t("form.heroIntro")}</p>

                <form className="mt-6 space-y-3" onSubmit={handleRegister} noValidate>
                  <div>
                    <label htmlFor="reg-name" className="sr-only">{t("form.fullName")}</label>
                    <input
                      id="reg-name"
                      name="fullName"
                      placeholder={t("form.fullName")}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm placeholder:text-foreground/40 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition"
                    />
                    {errors.fullName && <p className="text-xs text-red-500 mt-1">{t(errors.fullName as TKey)}</p>}
                  </div>
                  <div>
                    <label htmlFor="reg-company" className="sr-only">{t("form.companyName")}</label>
                    <input
                      id="reg-company"
                      name="companyName"
                      placeholder={t("form.companyName")}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm placeholder:text-foreground/40 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition"
                    />
                    {errors.companyName && <p className="text-xs text-red-500 mt-1">{t(errors.companyName as TKey)}</p>}
                  </div>
                  <div>
                    <label htmlFor="reg-email" className="sr-only">{t("form.email")}</label>
                    <input
                      id="reg-email"
                      name="email"
                      type="email"
                      placeholder={t("form.email")}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm placeholder:text-foreground/40 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition"
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{t(errors.email as TKey)}</p>}
                  </div>
                  <div>
                    <label htmlFor="reg-whatsapp" className="sr-only">{t("form.whatsapp")}</label>
                    <input
                      id="reg-whatsapp"
                      name="whatsapp"
                      placeholder={t("form.whatsapp")}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm placeholder:text-foreground/40 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition"
                    />
                    {errors.whatsapp && <p className="text-xs text-red-500 mt-1">{t(errors.whatsapp as TKey)}</p>}
                  </div>
                  <div>
                    <label htmlFor="reg-country" className="sr-only">{t("form.selectCountry")}</label>
                    <select
                      id="reg-country"
                      name="country"
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground/80 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition"
                    >
                      <option value="">{t("form.selectCountry")}</option>
                      {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                    {errors.country && <p className="text-xs text-red-500 mt-1">{t(errors.country as TKey)}</p>}
                  </div>
                  <div>
                    <label htmlFor="reg-biz" className="sr-only">{t("form.selectBusinessType")}</label>
                    <select
                      id="reg-biz"
                      name="businessType"
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground/80 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition"
                    >
                      <option value="">{t("form.selectBusinessType")}</option>
                      {BIZ_KEYS.map((k) => <option key={k} value={k}>{t(k)}</option>)}
                    </select>
                    {errors.businessType && <p className="text-xs text-red-500 mt-1">{t(errors.businessType as TKey)}</p>}
                  </div>
                  <button
                    type="submit"
                    className="group w-full flex items-center justify-center gap-3 bg-gold rounded-lg px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--gold-foreground)] hover:brightness-110 shadow-gold transition-all"
                  >
                    {t("common.joinZentra")}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </button>
                  {status !== "idle" && (
                    <p className={`text-xs rounded-lg px-3 py-2 text-center ${
                      status === "success" ? "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30" : "text-red-500 bg-red-50 dark:bg-red-950/30"
                    }`}>
                      {submitMsg}
                    </p>
                  )}
                  <div className="flex items-center justify-center gap-2 text-[11px] text-foreground/50 pt-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-gold" />
                    {t("form.secureGlobal")}
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Carousel - 80% width centered */}
          <div className="mt-16 mx-auto max-w-[80%]">
            <div className="overflow-hidden rounded-xl border border-border/30 shadow-elegant relative">
              {[
                { src: carrocel1, alt: "Slide 1" },
                { src: carrocel2, alt: "Slide 2" },
                { src: carrocel3, alt: "Slide 3" },
                { src: carrocel4, alt: "Slide 4" },
                { src: carrocel5, alt: "Slide 5" },
              ].map((img, idx) => (
                <img
                  key={idx}
                  src={img.src}
                  alt={img.alt}
                  className={`w-full aspect-video object-cover block transition-opacity duration-700 ${idx === currentImage ? "opacity-100" : "opacity-0 absolute inset-0"}`}
                  fetchPriority={idx === 0 ? "high" : "low"}
                />
              ))}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {[0, 1, 2, 3, 4].map((i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`h-2 w-2 rounded-full transition-all ${i === currentImage ? "bg-gold w-6" : "bg-white/50 hover:bg-white/80"}`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY STEPS */}
      <section className="py-20 bg-muted/40">
        <div className="container-x">
          <h2 className="font-display text-3xl md:text-4xl text-[color:var(--navy)] dark:text-foreground mb-12">
            {t("steps.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {STEPS.map((s, i) => (
              <div key={s.n} className="relative flex">
                <div className="flex-1 group bg-card border border-border rounded-xl p-6 flex items-start gap-5 hover-lift">
                  <div className="h-12 w-12 rounded-full border border-gold/40 text-gold grid place-items-center font-display text-xl shrink-0 group-hover:bg-gold group-hover:text-[color:var(--gold-foreground)] transition-all">
                    {s.n}
                  </div>
                  <div>
                    <s.icon className="h-6 w-6 text-gold mb-3" />
                    <h3 className="font-display text-lg text-[color:var(--navy)] dark:text-foreground">{t(s.titleKey)}</h3>
                    <p className="mt-2 text-sm text-foreground/60 leading-relaxed">{t(s.textKey)}</p>
                  </div>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="hidden md:flex items-center px-3 text-gold">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* STATS ROW */}
          <div className="mt-10 rounded-2xl bg-card border border-border p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 shadow-card">
            {STATS.map((s) => (
              <div key={s.labelKey} className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gold-soft text-gold grid place-items-center shrink-0">
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-2xl md:text-3xl text-[color:var(--navy)] dark:text-foreground">{s.value}</div>
                  <div className="text-xs text-foreground/55">{t(s.labelKey)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMODITIES + DASHBOARD */}
      <section className="py-20">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          {/* Commodities cards */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-[color:var(--navy)] dark:text-foreground mb-8">
              {t("dash.exploreTitle")}
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {COMMODITIES.map((c) => (
                <Link
                  to="/commodities"
                  key={c.titleKey}
                  className="group block rounded-2xl bg-card border border-border overflow-hidden hover-lift"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={c.img}
                      alt={t(c.titleKey)}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg text-[color:var(--navy)] dark:text-foreground mb-3">
                      {t(c.titleKey)}
                    </h3>
                    <ul className="space-y-1.5 text-sm text-foreground/70">
                      {c.itemKeys.map((itk) => (
                        <li key={itk} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                          {t(itk)}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex justify-end">
                      <span className="h-8 w-8 rounded-full bg-gold text-[color:var(--gold-foreground)] grid place-items-center group-hover:translate-x-1 transition-transform">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Dashboard mock */}
          <div className="space-y-5">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-[color:var(--navy)] dark:text-foreground">
                {t("home.dashTitle")}
              </h2>
              <p className="text-sm text-foreground/60 mt-1">{t("home.dashSubtitle")}</p>
            </div>

            {/* KPI grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: t("dash.totalVolume"), value: "US$ 2.8B+", delta: "+18.2%" },
                { label: t("dash.activeTx"), value: "1,200+", delta: "+14.7%" },
                { label: t("dash.globalPartners"), value: "850+", delta: "+21.3%" },
                { label: t("dash.marketsAccess"), value: "50+", delta: "+10.5%" },
              ].map((k) => (
                <div key={k.label} className="rounded-xl bg-card border border-border p-4">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-foreground/50 font-semibold">{k.label}</div>
                  <div className="mt-2 flex items-baseline justify-between">
                    <span className="font-display text-xl text-[color:var(--navy)] dark:text-foreground">{k.value}</span>
                    <span className="text-[11px] font-bold text-emerald-600">{k.delta}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Trading overview chart */}
            <div className="rounded-xl bg-card border border-border p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-[color:var(--navy)] dark:text-foreground">{t("dash.tradingOverview")}</span>
                <div className="flex gap-2 text-[10px] uppercase tracking-[0.15em]">
                  <span className="px-2.5 py-1 rounded-full bg-gold/15 text-gold font-bold">{t("dash.thisYear")}</span>
                  <span className="px-2.5 py-1 rounded-full text-foreground/50">{t("dash.lastYear")}</span>
                </div>
              </div>
              <MiniChart />
            </div>

            {/* Distribution + live market */}
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-xl bg-card border border-border p-5">
                <div className="text-sm font-semibold mb-3 text-[color:var(--navy)] dark:text-foreground">{t("dash.commodityDistribution")}</div>
                <div className="flex items-center gap-4">
                  <Donut data={DIST.map(d => ({ label: t(d.labelKey), value: d.value, color: d.color }))} />
                  <ul className="space-y-1.5 text-xs">
                    {DIST.map((d) => (
                      <li key={d.labelKey} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full" style={{ background: d.color }} />
                        <span className="text-foreground/70">{t(d.labelKey)}</span>
                        <span className="ml-auto font-semibold">{d.value}%</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="rounded-xl bg-card border border-border p-5">
                <div className="text-sm font-semibold mb-3 text-[color:var(--navy)] dark:text-foreground">{t("dash.liveMarket")}</div>
                <ul className="space-y-2 text-xs">
                  {MARKET.map((m) => (
                    <li key={m.nameKey} className="flex items-center justify-between">
                      <span className="text-foreground/70">{t(m.nameKey)}</span>
                      <span className="flex items-baseline gap-2">
                        <span className="font-semibold">{m.price}</span>
                        <span className={m.up ? "text-emerald-600 font-bold" : "text-red-500 font-bold"}>{m.change}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORLD MAP / GLOBAL REACH */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container-x grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
          <div className="rounded-2xl bg-card border border-border p-6 shadow-card">
            <WorldMap />
          </div>
          <div>
            <div className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-5">
              {t("global.eyebrow")}
            </div>
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-[color:var(--navy)] dark:text-foreground">
              {t("global.titleA")}<br />{t("global.titleB")}
            </h2>
            <p className="mt-5 text-foreground/65 leading-relaxed">{t("global.desc")}</p>
            <ul className="mt-6 space-y-2.5 text-sm">
              {(["global.b1","global.b2","global.b3","global.b4"] as TKey[]).map((k) => (
                <li key={k} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  <span className="text-foreground/75">{t(k)}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/partnership"
              className="mt-8 inline-flex items-center gap-3 bg-gold px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--gold-foreground)] hover:brightness-110 transition-all"
            >
              {t("common.joinOurNetwork")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-navy text-white">
        <div className="container-x text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            {t("cta.titleA")} <span className="italic text-gold">{t("cta.titleB")}</span>
          </h2>
          <p className="mt-5 text-white/70">{t("cta.desc")}</p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              to="/partnership"
              className="inline-flex items-center gap-3 bg-gold px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--gold-foreground)] hover:brightness-110 transition-all"
            >
              {t("common.becomeAPartner")} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-white/30 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[color:var(--navy)] transition-all"
            >
              {t("common.contactUs")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function MiniChart() {
  const pts = [10, 14, 12, 18, 22, 20, 26, 30, 28, 34, 38, 42];
  const max = 50;
  const w = 320;
  const h = 110;
  const step = w / (pts.length - 1);
  const path = pts
    .map((v, i) => `${i === 0 ? "M" : "L"} ${i * step},${h - (v / max) * h}`)
    .join(" ");
  const area = `${path} L ${w},${h} L 0,${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-28">
      <defs>
        <linearGradient id="ga" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#ga)" />
      <path d={path} fill="none" stroke="var(--gold)" strokeWidth="2" />
      {pts.map((v, i) => (
        <circle key={`pt-${i}`} cx={i * step} cy={h - (v / max) * h} r="2.5" fill="var(--gold)" />
      ))}
    </svg>
  );
}

function Donut({ data }: { data: { label: string; value: number; color: string }[] }) {
  const total = data.reduce((s, d) => s + d.value, 0);
  const r = 32;
  const c = 2 * Math.PI * r;
  let acc = 0;
  return (
    <svg viewBox="0 0 90 90" className="h-24 w-24 -rotate-90">
      <circle cx="45" cy="45" r={r} fill="none" stroke="var(--muted)" strokeWidth="10" />
      {data.map((d) => {
        const len = (d.value / total) * c;
        const seg = (
          <circle
            key={d.label}
            cx="45"
            cy="45"
            r={r}
            fill="none"
            stroke={d.color}
            strokeWidth="10"
            strokeDasharray={`${len} ${c - len}`}
            strokeDashoffset={-acc}
          />
        );
        acc += len;
        return seg;
      })}
    </svg>
  );
}
