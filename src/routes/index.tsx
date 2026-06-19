import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown, ShieldCheck, CheckCircle2, Activity } from "lucide-react";
import heroImg from "@/assets/hero-trading.jpg";
import agriImg from "@/assets/commodity-agricultural.jpg";
import mineralsImg from "@/assets/commodity-minerals.jpg";
import energyImg from "@/assets/commodity-energy.jpg";
import industrialImg from "@/assets/commodity-industrial.jpg";
import { useI18n } from "@/lib/i18n";
import type { TKey } from "@/lib/translations";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zentra Trading — Global Commodity Trading Made Simple" },
      { name: "description", content: "Connecting producers, suppliers, exporters, importers and investors through secure and efficient global commodity trading solutions." },
      { property: "og:title", content: "Zentra Trading — Global Commodity Trading Made Simple" },
      { property: "og:description", content: "Worldwide commodity marketplace for agricultural, mineral, energy and industrial trading." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useI18n();

  const STATS: { value: string; labelKey: TKey }[] = [
    { value: "50+", labelKey: "stats.countries" },
    { value: "1,200+", labelKey: "stats.transactions" },
    { value: "850+", labelKey: "stats.partners" },
    { value: "US$ 2.8B+", labelKey: "stats.volume" },
  ];

  const DIVISIONS: { titleKey: TKey; descKey: TKey; img: string; offset?: boolean }[] = [
    { titleKey: "comm.agricultural", descKey: "comm.agriBlurb", img: agriImg },
    { titleKey: "comm.energy", descKey: "comm.energyBlurb", img: energyImg, offset: true },
    { titleKey: "comm.minerals", descKey: "comm.mineralsBlurb", img: mineralsImg },
  ];

  const MARKET = [
    { name: "Brent Crude", price: "$84.12", change: "+1.24%", up: true },
    { name: "Gold (oz)", price: "$2,395.50", change: "+1.05%", up: true },
    { name: "Copper LME", price: "$9,125.00", change: "-0.45%", up: false },
    { name: "Soybeans", price: "$1,182.4", change: "+0.82%", up: true },
    { name: "Natural Gas", price: "$2.84", change: "+3.10%", up: true },
  ];

  const COUNTRIES = ["Angola", "Nigeria", "South Africa", "Brazil", "China", "USA"];
  const BIZ_KEYS: TKey[] = ["biz.producer", "biz.supplier", "biz.exporter", "biz.importer", "biz.investor"];

  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt={t("home.hero.imgAlt")}
            className="w-full h-full object-cover grayscale opacity-40"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--background)] via-[color:var(--background)]/85 to-[color:var(--background)]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--background)] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 container-x py-24 lg:py-32 w-full animate-rise">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase">
              {t("home.hero.eyebrow")}
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl lg:text-[7.5rem] leading-[0.95] max-w-5xl">
            {t("home.hero.titleA")}<br />
            <span className="italic font-normal text-gold">{t("home.hero.titleB")}</span>
          </h1>

          <div className="mt-12 flex flex-col md:flex-row md:items-end gap-10 max-w-4xl">
            <p className="text-base md:text-lg text-foreground/60 font-light leading-relaxed max-w-md">
              {t("home.hero.desc")}
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="/partnership"
                className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[color:var(--gold-foreground)] hover:brightness-110 transition-all"
              >
                {t("common.becomeAPartner")}
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
              </Link>
              <a
                href="#divisions"
                aria-label="Scroll down"
                className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-[color:var(--gold-foreground)] transition-all duration-500"
              >
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Live ticker bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-[#000D1A]/80 backdrop-blur-xl py-4 overflow-hidden">
          <div className="flex gap-12 items-center px-6 animate-[ticker_40s_linear_infinite] whitespace-nowrap">
            {[...MARKET, ...MARKET].map((m, i) => (
              <div key={i} className="flex items-center gap-3 text-[11px] tracking-[0.15em] font-semibold">
                <span className="text-white/40 uppercase">{m.name}</span>
                <span className="text-white">{m.price}</span>
                <span className={m.up ? "text-emerald-400" : "text-red-400"}>{m.change}</span>
                <span className="text-white/10">·</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERFORMANCE BAND */}
      <section className="py-24 lg:py-32 bg-white/[0.03] border-b border-white/10">
        <div className="container-x">
          <div className="grid md:grid-cols-4 gap-12 lg:gap-16">
            {STATS.map((s) => (
              <div key={s.labelKey} className="group">
                <div className="font-display text-5xl lg:text-6xl text-gold mb-4 group-hover:scale-110 transition-transform duration-500 origin-left">
                  {s.value}
                </div>
                <div className="h-px w-12 bg-gold/40 mb-4 group-hover:w-24 transition-all duration-500" />
                <div className="text-[10px] uppercase tracking-[0.25em] text-foreground/40 font-bold">
                  {t(s.labelKey)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO / DIVISIONS */}
      <section id="divisions" className="py-32 lg:py-40">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-5 mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-gold" />
                <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase">
                  {t("home.commTitle")}
                </span>
              </div>
              <h2 className="font-display text-4xl lg:text-6xl leading-tight mb-8">
                {t("home.divisions.title") /* fallback if missing */ || "Core Commodity Divisions"}
              </h2>
              <p className="text-foreground/50 leading-relaxed mb-10 max-w-md">
                {t("home.divisions.desc") /* fallback */ || ""}
              </p>
              <Link to="/how-it-works" className="flex items-center gap-4 group w-fit">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">
                  {t("common.learnMore")}
                </span>
                <div className="w-10 h-px bg-gold group-hover:w-20 transition-all" />
              </Link>
            </div>

            <div className="col-span-12 grid md:grid-cols-3 gap-10 lg:gap-12">
              {DIVISIONS.map((d) => (
                <div key={d.titleKey} className={`space-y-6 ${d.offset ? "md:pt-24" : ""}`}>
                  <Link to="/commodities" className="block aspect-[3/4] overflow-hidden">
                    <img
                      src={d.img}
                      alt={t(d.titleKey)}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
                      loading="lazy"
                    />
                  </Link>
                  <div>
                    <h3 className="font-display text-2xl lg:text-3xl mb-3">{t(d.titleKey)}</h3>
                    <p className="text-foreground/40 text-sm leading-relaxed">{t(d.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LIVE MARKET + JOIN FORM SPLIT */}
      <section className="py-24 lg:py-32 border-y border-white/10 bg-white/[0.02]">
        <div className="container-x grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Activity className="h-4 w-4 text-gold" />
              <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase">
                {t("dash.liveMarket")}
              </span>
              <span className="ml-auto flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-foreground/40">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Live
              </span>
            </div>
            <h2 className="font-display text-3xl lg:text-5xl mb-10 leading-tight">
              {t("global.titleA")} <span className="italic text-gold">{t("global.titleB")}</span>
            </h2>
            <ul className="divide-y divide-white/10">
              {MARKET.map((m) => (
                <li key={m.name} className="flex items-center justify-between py-4">
                  <span className="text-sm font-medium">{m.name}</span>
                  <div className="flex items-baseline gap-6">
                    <span className="font-display text-lg text-foreground">{m.price}</span>
                    <span className={`text-xs font-bold tracking-wider ${m.up ? "text-emerald-400" : "text-red-400"}`}>
                      {m.change}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              {(["global.b1","global.b2","global.b3","global.b4"] as TKey[]).map((k) => (
                <div key={k} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <span className="text-foreground/70">{t(k)}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase">
                {t("common.joinZentra")}
              </span>
            </div>
            <h2 className="font-display text-3xl lg:text-5xl mb-4 leading-tight">
              {t("cta.titleA")} <span className="italic text-gold">{t("cta.titleB")}</span>
            </h2>
            <p className="text-foreground/50 mb-8 max-w-md">{t("form.heroIntro")}</p>

            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              {([
                { ph: "form.fullName" as TKey },
                { ph: "form.companyName" as TKey },
                { ph: "form.email" as TKey },
                { ph: "form.whatsapp" as TKey },
              ]).map((f) => (
                <input
                  key={f.ph}
                  placeholder={t(f.ph)}
                  className="w-full bg-white/[0.04] border border-white/15 px-5 py-4 text-sm placeholder:text-foreground/40 focus:outline-none focus:border-gold transition"
                />
              ))}
              <div className="grid grid-cols-2 gap-3">
                <select className="w-full bg-white/[0.04] border border-white/15 px-5 py-4 text-sm text-foreground/70 focus:outline-none focus:border-gold transition">
                  <option>{t("form.selectCountry")}</option>
                  {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
                </select>
                <select className="w-full bg-white/[0.04] border border-white/15 px-5 py-4 text-sm text-foreground/70 focus:outline-none focus:border-gold transition">
                  <option>{t("form.selectBusinessType")}</option>
                  {BIZ_KEYS.map((k) => <option key={k}>{t(k)}</option>)}
                </select>
              </div>
              <button
                type="submit"
                className="group mt-3 w-full flex items-center justify-center gap-3 bg-gold px-6 py-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[color:var(--gold-foreground)] hover:brightness-110 transition-all"
              >
                {t("common.joinZentra")}
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
              </button>
              <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] text-foreground/40 pt-2">
                <ShieldCheck className="h-3.5 w-3.5 text-gold" />
                {t("form.secureGlobal")}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* GLOBAL REACH MAP */}
      <section className="py-32">
        <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase">
                {t("global.eyebrow")}
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-6xl leading-tight mb-8">
              {t("global.titleA")}<br/><span className="italic text-gold">{t("global.titleB")}</span>
            </h2>
            <p className="text-foreground/50 leading-relaxed mb-10 max-w-md">
              {t("global.desc")}
            </p>
            <Link
              to="/partnership"
              className="inline-flex items-center gap-3 border border-white/20 px-8 py-4 text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-gold hover:border-gold hover:text-[color:var(--gold-foreground)] transition-all"
            >
              {t("common.joinOurNetwork")} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="relative">
            <WorldMap />
          </div>
        </div>
      </section>

      {/* CINEMATIC CTA */}
      <section className="relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0">
          <img src={industrialImg} alt="" className="w-full h-full object-cover grayscale opacity-20" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--background)] via-[color:var(--background)]/90 to-[color:var(--background)]/60" />
        </div>
        <div className="relative container-x py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-gold" />
              <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase">{t("nav.contact")}</span>
            </div>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.95] mb-10">
              {t("cta.titleA")} <span className="italic text-gold">{t("cta.titleB")}</span>
            </h2>
            <p className="text-foreground/60 text-lg max-w-xl mb-12">{t("cta.desc")}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/partnership"
                className="inline-flex items-center gap-3 bg-gold px-10 py-5 text-[10px] font-bold uppercase tracking-[0.25em] text-[color:var(--gold-foreground)] hover:brightness-110 transition-all"
              >
                {t("common.becomeAPartner")} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-white/20 px-10 py-5 text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-white hover:text-[color:var(--background)] transition-all"
              >
                {t("common.contactUs")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function WorldMap() {
  const HUBS: { cx: number; cy: number; label: string }[] = [
    { cx: 180, cy: 160, label: "NY" },
    { cx: 240, cy: 240, label: "São Paulo" },
    { cx: 410, cy: 140, label: "Geneva" },
    { cx: 440, cy: 230, label: "Luanda" },
    { cx: 560, cy: 180, label: "Dubai" },
    { cx: 670, cy: 200, label: "Singapore" },
    { cx: 700, cy: 140, label: "Shanghai" },
  ];
  return (
    <svg viewBox="0 0 800 400" className="w-full h-auto">
      <defs>
        <radialGradient id="bg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="rgba(197,160,89,0.06)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <rect width="800" height="400" fill="url(#bg)" />
      <g fill="rgba(255,255,255,0.18)">
        {Array.from({ length: 420 }).map((_, i) => {
          const x = (i * 47) % 800;
          const y = ((i * 73) % 360) + 20;
          const r = ((i * 11) % 10) > 7 ? 1.8 : 1.1;
          return <circle key={i} cx={x} cy={y} r={r} />;
        })}
      </g>
      {HUBS.flatMap((a, i) =>
        HUBS.slice(i + 1).map((b, j) => (
          <line
            key={`${i}-${j}`}
            x1={a.cx} y1={a.cy} x2={b.cx} y2={b.cy}
            stroke="rgba(197,160,89,0.15)"
            strokeWidth="0.6"
            strokeDasharray="3 4"
          />
        ))
      )}
      {HUBS.map((h, i) => (
        <g key={i}>
          <circle cx={h.cx} cy={h.cy} r="10" fill="rgba(197,160,89,0.15)">
            <animate attributeName="r" values="6;14;6" dur="2.6s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
            <animate attributeName="opacity" values="0.6;0;0.6" dur="2.6s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
          </circle>
          <circle cx={h.cx} cy={h.cy} r="3.5" fill="#C5A059" />
        </g>
      ))}
    </svg>
  );
}
