import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { WorldMap } from "@/components/site/WorldMap";
import {
  Target,
  Eye,
  Sparkles,
  ArrowRight,
  Globe,
  Shield,
  BarChart3,
  Ship,
  Truck,
  FileCheck,
  Users,
  Network,
  Award,
  Leaf,
  Recycle,
  Building2,
  TrendingUp,
  Scale,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { TKey } from "@/lib/translations";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Veloz" },
      {
        name: "description",
        content:
          "Veloz facilitates global commodity business through an international network of trusted partners.",
      },
      { property: "og:title", content: "About Us — Veloz" },
      { property: "og:url", content: "https://zentratrading.com/about" },
    ],
    links: [{ rel: "canonical", href: "https://zentratrading.com/about" }],
  }),
  component: About,
});

const STATS = [
  { value: "50+", key: "about.stats.countries" as TKey },
  { value: "850+", key: "about.stats.partners" as TKey },
  { value: "1,200+", key: "about.stats.projects" as TKey },
  { value: "15+", key: "about.stats.experience" as TKey },
  { value: "500+", key: "about.stats.clients" as TKey },
];

function About() {
  const { t } = useI18n();
  const VALUES: TKey[] = [
    "values.transparency",
    "values.integrity",
    "values.efficiency",
    "values.innovation",
    "values.trust",
  ];
  const CARDS: { icon: typeof Target; titleKey: TKey; descKey: TKey }[] = [
    {
      icon: Target,
      titleKey: "about.mission.t",
      descKey: "about.mission.d",
    },
    {
      icon: Eye,
      titleKey: "about.vision.t",
      descKey: "about.vision.d",
    },
    {
      icon: Sparkles,
      titleKey: "about.promise.t",
      descKey: "about.promise.d",
    },
  ];

  const COMMODITIES: { img: string; key: TKey }[] = [
    { img: "/images/about/agriculture.jpg", key: "about.commodities.agriculture" },
    { img: "/images/about/metals.jpg", key: "about.commodities.metals" },
    { img: "/images/about/energy.jpg", key: "about.commodities.energy" },
    { img: "/images/about/chemicals.jpg", key: "about.commodities.chemicals" },
    { img: "/images/about/raw-materials.jpg", key: "about.commodities.rawMaterials" },
  ];

  const SERVICES: { icon: typeof Globe; key: TKey }[] = [
    { icon: Globe, key: "about.services.globalTrading" },
    { icon: TrendingUp, key: "about.services.internationalSourcing" },
    { icon: Ship, key: "about.services.logistics" },
    { icon: Truck, key: "about.services.supplyChain" },
    { icon: FileCheck, key: "about.services.importExport" },
    { icon: Shield, key: "about.services.riskManagement" },
  ];

  const WHY: { icon: typeof Users; key: TKey }[] = [
    { icon: Users, key: "about.why.professionalTeam" },
    { icon: Network, key: "about.why.globalNetwork" },
    { icon: Award, key: "about.why.integrity" },
    { icon: CheckCircle, key: "about.why.reliability" },
    { icon: Scale, key: "about.why.compliance" },
    { icon: BarChart3, key: "about.why.operationalExcellence" },
  ];

  const TIMELINE: { key: TKey }[] = [
    { key: "about.timeline.supplier" },
    { key: "about.timeline.inspection" },
    { key: "about.timeline.documentation" },
    { key: "about.timeline.shipping" },
    { key: "about.timeline.delivery" },
    { key: "about.timeline.client" },
  ];

  const ESG: { icon: typeof Leaf; key: TKey }[] = [
    { icon: Leaf, key: "about.esg.sustainability" },
    { icon: Recycle, key: "about.esg.responsibleSourcing" },
    { icon: Building2, key: "about.esg.environmental" },
    { icon: Users, key: "about.esg.ethical" },
    { icon: Scale, key: "about.esg.compliance" },
  ];

  const CERTIFICATIONS = [
    "about.certifications.iso",
    "about.certifications.sgs",
    "about.certifications.intertek",
    "about.certifications.bureauVeritas",
  ];

  return (
    <>
      <PageHero
        eyebrow={t("about.eyebrow")}
        title={
          <>
            {t("about.titleA")}{" "}
            <span className="text-gold">{t("about.titleB")}</span>
          </>
        }
        description={t("about.desc")}
      />

      <section className="container-x py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow={t("about.whoWeAre.eyebrow")}
              title={t("about.whoWeAre.title")}
              description={t("about.whoWeAre.desc")}
            />
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-navy shadow-elegant">
              <img
                src="/images/about/company.jpg"
                alt={t("about.whoWeAre.imgAlt")}
                className="w-full h-full object-cover opacity-50"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-xl bg-gradient-gold opacity-20 blur-2xl" />
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="grid lg:grid-cols-3 gap-6">
          {CARDS.map((c) => (
            <div
              key={c.titleKey}
              className="hover-lift rounded-2xl border border-border bg-white p-7 shadow-card"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-[color:var(--gold-foreground)] shadow-gold">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-[color:var(--navy)]">
                {t(c.titleKey)}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {t(c.descKey)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-10">
        <div className="rounded-3xl bg-gradient-navy p-10 lg:p-14 text-white shadow-elegant">
          <SectionHeading
            eyebrow={t("about.values.eyebrow")}
            title={t("about.values.title")}
            light
          />
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {VALUES.map((v) => (
              <div
                key={v}
                className="rounded-xl border border-white/15 bg-white/5 p-5 text-center backdrop-blur-sm hover:bg-white/10 transition"
              >
                <div className="font-display text-xl font-semibold text-gold">
                  {t(v)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <SectionHeading
          eyebrow={t("about.commodities.eyebrow")}
          title={t("about.commodities.title")}
          description={t("about.commodities.desc")}
          center
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {COMMODITIES.map((c) => (
            <div
              key={c.key}
              className="group hover-lift rounded-2xl border border-border bg-white shadow-card overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gradient-navy">
                <img
                  src={c.img}
                  alt={t(c.key)}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-display text-base font-semibold text-[color:var(--navy)]">
                  {t(c.key)}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-navy text-white">
        <div className="container-x py-16 md:py-20">
          <SectionHeading
            eyebrow={t("about.services.eyebrow")}
            title={t("about.services.title")}
            description={t("about.services.desc")}
            center
            light
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <div
                key={s.key}
                className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-gold text-[color:var(--gold-foreground)] shadow-gold">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">
                  {t(s.key)}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <SectionHeading
          eyebrow={t("about.why.eyebrow")}
          title={t("about.why.title")}
          description={t("about.why.desc")}
          center
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY.map((w) => (
            <div
              key={w.key}
              className="hover-lift rounded-2xl border border-border bg-white p-6 shadow-card flex items-start gap-4"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-gold text-[color:var(--gold-foreground)] shadow-gold">
                <w.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-[color:var(--navy)]">
                  {t(w.key)}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <SectionHeading
          eyebrow={t("about.timeline.eyebrow")}
          title={t("about.timeline.title")}
          center
        />
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {TIMELINE.map((item, i) => (
            <div key={item.key} className="relative flex flex-col items-center text-center group">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-gold text-[color:var(--gold-foreground)] shadow-gold group-hover:scale-110 transition-transform duration-300">
                <span className="font-display text-sm font-bold">{i + 1}</span>
              </div>
              <div className="mt-3 font-display text-sm font-semibold text-[color:var(--navy)]">
                {t(item.key)}
              </div>
              {i < TIMELINE.length - 1 && (
                <ChevronRight className="hidden lg:block absolute -right-2.5 top-4 h-4 w-4 text-gold/40" />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <SectionHeading
          eyebrow={t("about.stats.eyebrow")}
          title={t("about.stats.title")}
          center
        />
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-5 gap-4">
          {STATS.map((s) => (
            <div
              key={s.key}
              className="rounded-2xl border border-border bg-white p-6 text-center shadow-card"
            >
              <div className="font-display text-3xl font-bold text-gold">
                {s.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                {t(s.key)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow={t("about.story.eyebrow")}
              title={t("about.story.title")}
              description={t("about.story.desc")}
            />
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-6 py-3 text-sm font-semibold text-[color:var(--gold-foreground)] shadow-gold"
            >
              {t("common.getInTouch")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="w-full">
            <WorldMap />
          </div>
        </div>
      </section>

      <section className="bg-gradient-navy text-white">
        <div className="container-x py-16 md:py-20">
          <SectionHeading
            eyebrow={t("about.esg.eyebrow")}
            title={t("about.esg.title")}
            description={t("about.esg.desc")}
            center
            light
          />
          <div className="mt-10 grid lg:grid-cols-2 gap-8 items-center">
            <div className="grid sm:grid-cols-2 gap-4">
              {ESG.map((e) => (
                <div
                  key={e.key}
                  className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-gold text-[color:var(--gold-foreground)]">
                    <e.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold text-white">
                    {t(e.key)}
                  </h3>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src="/images/about/esg.jpg"
                  alt={t("about.esg.imgAlt")}
                  className="w-full h-full object-cover opacity-40"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <SectionHeading
          eyebrow={t("about.certifications.eyebrow")}
          title={t("about.certifications.title")}
          center
        />
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {CERTIFICATIONS.map((c) => (
            <div
              key={c}
              className="w-40 h-20 rounded-xl border border-border bg-white shadow-card flex items-center justify-center hover-lift"
            >
              <span className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                {t(c)}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-16 md:pb-20">
        <div className="rounded-3xl bg-gradient-navy p-10 lg:p-14 text-white shadow-elegant text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1]">
            {t("about.cta.title")}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-white/75">
            {t("about.cta.desc")}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-[color:var(--gold-foreground)] shadow-gold"
            >
              {t("common.contactUs")} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              {t("about.cta.requestQuote")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
