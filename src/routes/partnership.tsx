import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

import { SectionHeading } from "@/components/site/SectionHeading";
import {
  CheckCircle2,
  Handshake,
  Globe,
  Building2,
  TrendingUp,
  CircleDollarSign,
  Network,
  ShieldCheck,
  BadgeCheck,
  Leaf,
  Award,
  ArrowRight,
  Users,
  Factory,
  Landmark,
  Target,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { TKey } from "@/lib/translations";

export const Route = createFileRoute("/partnership")({
  head: () => ({
    meta: [
      { title: "Partnership — Veloz" },
      {
        name: "description",
        content:
          "Join 850+ partners trading globally with Veloz. Become a producer, supplier, exporter, importer or investor partner.",
      },
      { property: "og:title", content: "Partnership — Veloz" },
      { property: "og:url", content: "https://zentratrading.com/partnership" },
    ],
    links: [{ rel: "canonical", href: "https://zentratrading.com/partnership" }],
  }),
  component: Partnership,
});

function Partnership() {
  const { t } = useI18n();
  const TIERS: { titleKey: TKey; textKey: TKey; perks: TKey[] }[] = [
    {
      titleKey: "partner.t1.title",
      textKey: "partner.t1.text",
      perks: ["partner.t1.p1", "partner.t1.p2", "partner.t1.p3"],
    },
    {
      titleKey: "partner.t2.title",
      textKey: "partner.t2.text",
      perks: ["partner.t2.p1", "partner.t2.p2", "partner.t2.p3"],
    },
    {
      titleKey: "partner.t3.title",
      textKey: "partner.t3.text",
      perks: ["partner.t3.p1", "partner.t3.p2", "partner.t3.p3"],
    },
  ];

  const BENEFITS = [
    {
      icon: TrendingUp,
      title: "Market Expansion",
      desc: "Access new geographic markets and diversified commodity channels across our global network.",
    },
    {
      icon: Building2,
      title: "Institutional Strength",
      desc: "Strengthen your institutional presence with a trusted partner in global commodity trade.",
    },
    {
      icon: CircleDollarSign,
      title: "Investment Access",
      desc: "Gain access to vetted investment opportunities and trade financing solutions.",
    },
    {
      icon: Network,
      title: "Technology & Innovation",
      desc: "Leverage cutting-edge trade technology, real-time analytics and digital supply chain tools.",
    },
    {
      icon: Leaf,
      title: "Sustainable Development",
      desc: "Participate in ESG-driven initiatives and sustainable commodity sourcing programs.",
    },
    {
      icon: Globe,
      title: "Global Opportunities",
      desc: "Connect with international counterparties across 50+ countries and 5 continents.",
    },
    {
      icon: Handshake,
      title: "Joint Growth",
      desc: "Grow together through revenue-sharing models and co-investment structures.",
    },
  ];

  const PROCESS = [
    {
      icon: Handshake,
      title: "Initial Contact",
      desc: "Reach out through our form or direct channel. We respond within 24 hours.",
    },
    {
      icon: ShieldCheck,
      title: "Evaluation",
      desc: "Our team assesses your profile, business model and market alignment.",
    },
    {
      icon: Target,
      title: "Strategic Alignment",
      desc: "We align goals, define scope and outline the partnership framework.",
    },
    {
      icon: BadgeCheck,
      title: "Formalization",
      desc: "Sign the partnership agreement and complete compliance & documentation.",
    },
    {
      icon: Network,
      title: "Implementation",
      desc: "Onboarding, system integration and first trade operations begin.",
    },
    {
      icon: TrendingUp,
      title: "Joint Growth",
      desc: "Continuous support, performance reviews and expanding collaboration.",
    },
  ];

  const TRUST_ITEMS = [
    { icon: BadgeCheck, label: "Transparency" },
    { icon: ShieldCheck, label: "Security" },
    { icon: Handshake, label: "Cooperation" },
    { icon: TrendingUp, label: "Growth" },
    { icon: Leaf, label: "Sustainability" },
    { icon: Award, label: "Commitment" },
    { icon: Globe, label: "Credibility" },
  ];

  const HIGHLIGHTS = [
    { icon: Users, value: "350+", label: "National Partnerships" },
    { icon: Globe, value: "500+", label: "International Partnerships" },
    { icon: Target, value: "120+", label: "Active Projects" },
    { icon: Factory, value: "4", label: "Commodity Sectors" },
    { icon: Landmark, value: "18", label: "Commodity Chains" },
    { icon: Leaf, value: "25+", label: "Sustainable Initiatives" },
    { icon: Award, value: "12", label: "Social Impact Programs" },
    { icon: Network, value: "6", label: "Innovation Hubs" },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("partner.eyebrow")}
        title={
          <>
            {t("partner.titleA")} <span className="text-gold">{t("partner.titleB")}</span>
          </>
        }
        description={t("partner.desc")}
        imageFolder="Parcerias"
      />
      <section className="container-x py-16 grid gap-6 md:grid-cols-3">
        {TIERS.map((tier) => (
          <div
            key={tier.titleKey}
            className="hover-lift rounded-2xl border border-border bg-white p-7 shadow-card"
          >
            <h3 className="font-display text-xl font-semibold text-[color:var(--navy)]">
              {t(tier.titleKey)}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{t(tier.textKey)}</p>
            <ul className="mt-5 space-y-2 text-sm">
              {tier.perks.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-[color:var(--success)]" /> {t(p)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section className="container-x pb-16">
        <div className="rounded-2xl border border-border bg-white p-8 shadow-card">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">
              {t("partner.trusted.eyebrow")}
            </div>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold text-[color:var(--navy)]">
              {t("partner.trusted.title")}
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Nordbridge",
              "AuriCo",
              "MeridianAg",
              "Sahara Energy",
              "PortusLog",
              "ZenithSteel",
            ].map((n) => (
              <div
                key={n}
                className="grid h-16 place-items-center rounded-xl bg-[color:var(--accent)] text-sm font-semibold tracking-wider text-white/70"
              >
                {n.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Strategic Partnerships */}
      <section className="container-x py-16 border-t border-border">
        <SectionHeading
          eyebrow={t("partner.benefits.eyebrow")}
          title={t("partner.benefits.title")}
          center
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="group hover-lift rounded-2xl border border-border bg-white p-6 shadow-card"
            >
              <div className="h-10 w-10 rounded-xl bg-gold-soft text-gold grid place-items-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-semibold text-[color:var(--navy)]">
                {b.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Process */}
      <section className="bg-muted/40 py-16">
        <div className="container-x">
          <SectionHeading
            eyebrow={t("partner.process.eyebrow")}
            title={t("partner.process.title")}
            center
          />
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {PROCESS.map((s, i) => (
              <div key={s.title} className="relative">
                <div className="group flex flex-col items-center text-center rounded-2xl border border-border bg-white p-6 shadow-card hover-lift">
                  <div className="h-12 w-12 rounded-full bg-gold-soft text-gold grid place-items-center mb-4 group-hover:bg-gold group-hover:text-[color:var(--gold-foreground)] transition-colors duration-300">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-1">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-sm font-semibold text-[color:var(--navy)]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
                {i < PROCESS.length - 1 && (
                  <div className="hidden xl:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-gold/40">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="container-x py-16">
        <SectionHeading
          eyebrow={t("partner.trust.eyebrow")}
          title={t("partner.trust.title")}
          center
        />
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.label}
              className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-white px-5 py-2.5 shadow-sm hover:border-gold/40 hover:shadow-md transition-all duration-300"
            >
              <item.icon className="h-4 w-4 text-gold" />
              <span className="text-sm font-medium text-[color:var(--navy)]">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Institutional Highlights */}
      <section className="bg-muted/40 py-16">
        <div className="container-x">
          <SectionHeading
            eyebrow={t("partner.highlights.eyebrow")}
            title={t("partner.highlights.title")}
            center
          />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5">
            {HIGHLIGHTS.map((h) => (
              <div
                key={h.label}
                className="group hover-lift rounded-2xl border border-border bg-white p-6 shadow-card text-center"
              >
                <div className="h-10 w-10 rounded-xl bg-gold-soft text-gold grid place-items-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <h.icon className="h-5 w-5" />
                </div>
                <div className="font-display text-2xl font-bold text-[color:var(--navy)]">
                  {h.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
