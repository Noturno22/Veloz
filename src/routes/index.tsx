import { Fragment } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Building2, FileCheck2, TrendingUp, Globe2, Handshake, Users, BarChart3, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-trading.jpg";
import agriImg from "@/assets/commodity-agricultural.jpg";
import mineralsImg from "@/assets/commodity-minerals.jpg";
import energyImg from "@/assets/commodity-energy.jpg";
import industrialImg from "@/assets/commodity-industrial.jpg";
import { SectionHeading } from "@/components/site/SectionHeading";
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
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useI18n();

  const STATS: { icon: typeof Globe2; value: string; labelKey: TKey }[] = [
    { icon: Globe2, value: "50+", labelKey: "stats.countries" },
    { icon: Handshake, value: "1,200+", labelKey: "stats.transactions" },
    { icon: Users, value: "850+", labelKey: "stats.partners" },
    { icon: BarChart3, value: "US$ 2.8B+", labelKey: "stats.volume" },
  ];

  const STEPS: { n: string; icon: typeof Building2; titleKey: TKey; textKey: TKey }[] = [
    { n: "1", icon: Building2, titleKey: "steps.s1.title", textKey: "steps.s1.text" },
    { n: "2", icon: FileCheck2, titleKey: "steps.s2.title", textKey: "steps.s2.text" },
    { n: "3", icon: TrendingUp, titleKey: "steps.s3.title", textKey: "steps.s3.text" },
  ];

  const COMMODITIES: { titleKey: TKey; items: string[]; img: string }[] = [
    { titleKey: "comm.agricultural", items: ["Coffee", "Soybeans", "Corn", "Rice"], img: agriImg },
    { titleKey: "comm.minerals", items: ["Gold", "Diamonds", "Copper", "Iron Ore"], img: mineralsImg },
    { titleKey: "comm.energy", items: ["Oil", "Natural Gas", "Fuel Products"], img: energyImg },
    { titleKey: "comm.industrial", items: ["Steel", "Aluminum", "Cement"], img: industrialImg },
  ];

  const MARKET_INSIGHTS = [
    { name: "Crude Oil", price: "$84.45", change: "+2.35%", up: true },
    { name: "Gold", price: "$2,395.50", change: "+1.25%", up: true },
    { name: "Copper", price: "$9,125.00", change: "-0.45%", up: false },
    { name: "Natural Gas", price: "$2.75", change: "+3.45%", up: true },
  ];

  const FORM_FIELDS: { phKey: TKey; icon: string }[] = [
    { phKey: "form.fullName", icon: "👤" },
    { phKey: "form.companyName", icon: "🏢" },
    { phKey: "form.email", icon: "✉" },
    { phKey: "form.whatsapp", icon: "📞" },
  ];

  const COUNTRIES = ["Angola", "Nigeria", "South Africa", "Brazil", "China", "USA"];
  const BIZ_KEYS: TKey[] = ["biz.producer", "biz.supplier", "biz.exporter", "biz.importer", "biz.investor"];

  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 80% 0%, color-mix(in oklab, var(--gold) 18%, transparent), transparent 60%), linear-gradient(180deg, color-mix(in oklab, var(--background) 96%, var(--gold) 4%) 0%, var(--background) 70%)",
          }}
        />
        <div className="container-x pt-10 lg:pt-14 pb-16 lg:pb-24">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-start">
            <div className="animate-rise">
              <div className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">
                {t("home.hero.eyebrow")}
              </div>
              <h1 className="mt-5 font-display text-[2.5rem] sm:text-5xl lg:text-[3.75rem] font-bold leading-[1.02] text-[color:var(--navy)]">
                {t("home.hero.titleA")}<br />{t("home.hero.titleB")}
              </h1>
              <p className="mt-5 max-w-xl text-base md:text-lg text-muted-foreground">
                {t("home.hero.desc")}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/partnership"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-[color:var(--gold-foreground)] shadow-gold transition hover:translate-y-[-2px]"
                >
                  {t("common.becomeAPartner")}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/opportunities"
                  className="group inline-flex items-center gap-2 rounded-xl border border-[color:var(--navy)]/15 bg-white/70 px-6 py-3.5 text-sm font-semibold text-[color:var(--navy)] hover:bg-white"
                >
                  {t("common.exploreOpportunities")}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[0,1,2,3].map((i) => (
                    <div key={i} className="h-9 w-9 rounded-full ring-2 ring-white shadow-sm overflow-hidden bg-gradient-navy">
                      <img
                        src={`https://i.pravatar.cc/80?img=${10 + i}`}
                        alt=""
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  {t("home.hero.trustedBy")} <span className="font-semibold text-foreground">850+</span> {t("home.hero.trustedBySuffix")}
                </p>
              </div>

              <div className="relative mt-10 rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src={heroImg}
                  alt={t("home.hero.imgAlt")}
                  className="w-full h-[320px] sm:h-[400px] object-cover"
                  width={1600}
                  height={1100}
                  fetchPriority="high"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[color:var(--navy)]/30 via-transparent to-transparent" />
              </div>
            </div>

            <div className="lg:sticky lg:top-28 animate-rise">
              <div className="glass rounded-2xl p-7 shadow-elegant">
                <h2 className="font-display text-2xl font-bold text-[color:var(--navy)]">
                  {t("common.joinZentra")}
                </h2>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {t("form.heroIntro")}
                </p>
                <form className="mt-5 space-y-3" onSubmit={(e) => e.preventDefault()}>
                  {FORM_FIELDS.map((f) => (
                    <div key={f.phKey} className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base text-muted-foreground">{f.icon}</span>
                      <input
                        placeholder={t(f.phKey)}
                        className="w-full rounded-lg border border-input bg-white pl-10 pr-3 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
                      />
                    </div>
                  ))}
                  <select className="w-full rounded-lg border border-input bg-white px-3.5 py-3 text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50">
                    <option>{t("form.selectCountry")}</option>
                    {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
                  </select>
                  <select className="w-full rounded-lg border border-input bg-white px-3.5 py-3 text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50">
                    <option>{t("form.selectBusinessType")}</option>
                    {BIZ_KEYS.map((k) => <option key={k}>{t(k)}</option>)}
                  </select>
                  <button
                    type="submit"
                    className="group mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-gold px-4 py-3.5 text-sm font-semibold text-[color:var(--gold-foreground)] shadow-gold transition hover:translate-y-[-1px]"
                  >
                    {t("common.joinZentra")}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </button>
                  <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground pt-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-[color:var(--success)]" />
                    {t("form.secureGlobal")}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="container-x py-12 lg:py-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-[color:var(--navy)]">
          {t("steps.title")}
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center">
          {STEPS.map((s, i) => (
            <Fragment key={s.n}>
              <div className="hover-lift rounded-2xl border border-border bg-white p-6 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[color:var(--gold-soft)] text-sm font-bold text-[color:var(--navy)]">
                    {s.n}
                  </div>
                  <s.icon className="h-7 w-7 text-[color:var(--navy)]" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[color:var(--navy)]">{t(s.titleKey)}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{t(s.textKey)}</p>
                  </div>
                </div>
              </div>
              {i < STEPS.length - 1 && (
                <ArrowRight className="mx-auto hidden md:block h-5 w-5 text-gold" />
              )}
            </Fragment>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-white shadow-card grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border">
          {STATS.map((s) => (
            <div key={s.labelKey} className="flex items-center gap-4 p-6">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--gold-soft)]">
                <s.icon className="h-5 w-5 text-[color:var(--navy)]" />
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-[color:var(--navy)]">{s.value}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{t(s.labelKey)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMMODITIES + DASHBOARD */}
      <section className="container-x py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[color:var(--navy)]">
              {t("home.commTitle")}
            </h2>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {COMMODITIES.map((c) => (
                <div key={c.titleKey} className="hover-lift group rounded-2xl border border-border bg-white p-5 shadow-card">
                  <h3 className="font-display text-lg font-semibold text-[color:var(--navy)]">{t(c.titleKey)}<br/><span className="text-base font-normal text-muted-foreground">{t("comm.commoditiesWord")}</span></h3>
                  <div className="mt-3 flex gap-5">
                    <ul className="flex-1 space-y-1.5 text-sm">
                      {c.items.map((it) => (
                        <li key={it} className="flex items-center gap-2 text-foreground/80">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {it}
                        </li>
                      ))}
                    </ul>
                    <div className="h-24 w-28 rounded-xl overflow-hidden shrink-0">
                      <img src={c.img} alt={t(c.titleKey)} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" />
                    </div>
                  </div>
                  <Link to="/commodities" className="mt-4 inline-flex items-center justify-center h-8 w-8 rounded-full bg-gradient-gold text-[color:var(--gold-foreground)] shadow-gold">
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {[
                { l: t("dash.totalVolume"), v: "US$ 2.8B+", d: "+18.2%" },
                { l: t("dash.activeTx"), v: "1,200+", d: "+14.7%" },
                { l: t("dash.globalPartners"), v: "850+", d: "+21.3%" },
                { l: t("dash.marketsAccess"), v: "50+", d: "+10.5%" },
              ].map((k) => (
                <div key={k.l} className="rounded-xl border border-border bg-white p-4 shadow-card">
                  <div className="text-[11px] text-muted-foreground">{k.l}</div>
                  <div className="mt-1 flex items-baseline gap-2">
                    <div className="font-display text-lg font-bold text-[color:var(--navy)]">{k.v}</div>
                    <div className="text-xs font-semibold text-[color:var(--success)]">{k.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-border bg-white p-5 shadow-card">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-[color:var(--navy)]">{t("dash.tradingOverview")}</h4>
                <div className="flex gap-1 text-[11px]">
                  <span className="rounded-full bg-[color:var(--gold-soft)] px-2 py-0.5 font-medium text-[color:var(--navy)]">{t("dash.thisYear")}</span>
                  <span className="rounded-full px-2 py-0.5 text-muted-foreground">{t("dash.lastYear")}</span>
                </div>
              </div>
              <svg viewBox="0 0 320 120" className="mt-3 w-full h-28">
                <defs>
                  <linearGradient id="cf" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#D4A017" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#D4A017" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,90 L40,80 L80,70 L120,75 L160,55 L200,45 L240,40 L280,28 L320,18 L320,120 L0,120 Z" fill="url(#cf)" />
                <path d="M0,90 L40,80 L80,70 L120,75 L160,55 L200,45 L240,40 L280,28 L320,18" stroke="#D4A017" strokeWidth="2.5" fill="none" />
                {[[0,90],[40,80],[80,70],[120,75],[160,55],[200,45],[240,40],[280,28],[320,18]].map(([x,y],i)=>(
                  <circle key={i} cx={x} cy={y} r="2.5" fill="#0B1F3A" />
                ))}
              </svg>
              <div className="mt-1 flex justify-between text-[10px] text-muted-foreground">
                {["Jan","Feb","Mar","Apr","May","Jun","Jul"].map(m=> <span key={m}>{m}</span>)}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-white p-5 shadow-card">
              <h4 className="text-sm font-semibold text-[color:var(--navy)]">{t("dash.liveMarket")}</h4>
              <ul className="mt-3 divide-y divide-border text-sm">
                {MARKET_INSIGHTS.map((m) => (
                  <li key={m.name} className="flex items-center justify-between py-2">
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-gold" />
                      {m.name}
                    </span>
                    <span className="flex items-center gap-3">
                      <span className="font-medium text-foreground">{m.price}</span>
                      <span className={`text-xs font-semibold ${m.up ? "text-[color:var(--success)]" : "text-[color:var(--destructive)]"}`}>{m.change}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL REACH */}
      <section className="container-x py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center rounded-3xl border border-border bg-white p-8 lg:p-12 shadow-card overflow-hidden">
          <div>
            <SectionHeading
              eyebrow={t("global.eyebrow")}
              title={<>{t("global.titleA")}<br /><span className="text-gold">{t("global.titleB")}</span></>}
              description={t("global.desc")}
            />
            <ul className="mt-6 space-y-3 text-sm">
              {(["global.b1","global.b2","global.b3","global.b4"] as TKey[]).map((k) => (
                <li key={k} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-[color:var(--success)] shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{t(k)}</span>
                </li>
              ))}
            </ul>
            <Link to="/partnership" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-navy px-6 py-3 text-sm font-semibold text-white">
              {t("common.joinOurNetwork")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative h-72 lg:h-96 rounded-2xl bg-[color:var(--accent)] overflow-hidden">
            <WorldMap />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-navy p-10 lg:p-16 text-white shadow-elegant">
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, #D4A017 0%, transparent 70%)" }}
          />
          <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                {t("cta.titleA")} <span className="text-gold">{t("cta.titleB")}</span>
              </h2>
              <p className="mt-3 text-white/75 max-w-xl">
                {t("cta.desc")}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link to="/partnership" className="rounded-xl bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-[color:var(--gold-foreground)] shadow-gold">
                {t("common.becomeAPartner")}
              </Link>
              <Link to="/contact" className="rounded-xl border border-white/25 px-6 py-3.5 text-sm font-semibold hover:bg-white/10">
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
  return (
    <svg viewBox="0 0 800 400" className="w-full h-full">
      <defs>
        <radialGradient id="bg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#F4F6F8" />
          <stop offset="100%" stopColor="#E7ECF2" />
        </radialGradient>
      </defs>
      <rect width="800" height="400" fill="url(#bg)" />
      <g fill="#9AAAC2" opacity="0.6">
        {Array.from({ length: 380 }).map((_, i) => {
          const x = (i * 53) % 800;
          const y = ((i * 71) % 360) + 20;
          const r = ((i * 13) % 10) > 7 ? 2 : 1.3;
          return <circle key={i} cx={x} cy={y} r={r} />;
        })}
      </g>
      {[
        ["120,180","320,90","620,160"],
        ["180,260","420,210","680,260"],
        ["100,140","260,300","540,320"],
      ].map((pts, i) => (
        <g key={i}>
          <polyline points={pts.join(" ")} fill="none" stroke="#D4A017" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.8" />
          {pts.map((p,j)=>{const [x,y]=p.split(",");return <circle key={j} cx={x} cy={y} r="4" fill="#D4A017" />;})}
        </g>
      ))}
    </svg>
  );
}
