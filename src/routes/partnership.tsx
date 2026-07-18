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
      titleKey: "partner.benefit.1.title" as TKey,
      descKey: "partner.benefit.1.desc" as TKey,
    },
    {
      icon: Building2,
      titleKey: "partner.benefit.2.title" as TKey,
      descKey: "partner.benefit.2.desc" as TKey,
    },
    {
      icon: CircleDollarSign,
      titleKey: "partner.benefit.3.title" as TKey,
      descKey: "partner.benefit.3.desc" as TKey,
    },
    {
      icon: Network,
      titleKey: "partner.benefit.4.title" as TKey,
      descKey: "partner.benefit.4.desc" as TKey,
    },
    {
      icon: Leaf,
      titleKey: "partner.benefit.5.title" as TKey,
      descKey: "partner.benefit.5.desc" as TKey,
    },
    {
      icon: Globe,
      titleKey: "partner.benefit.6.title" as TKey,
      descKey: "partner.benefit.6.desc" as TKey,
    },
    {
      icon: Handshake,
      titleKey: "partner.benefit.7.title" as TKey,
      descKey: "partner.benefit.7.desc" as TKey,
    },
  ];

  const PROCESS = [
    {
      icon: Handshake,
      titleKey: "partner.process.step1.title" as TKey,
      descKey: "partner.process.step1.desc" as TKey,
    },
    {
      icon: ShieldCheck,
      titleKey: "partner.process.step2.title" as TKey,
      descKey: "partner.process.step2.desc" as TKey,
    },
    {
      icon: Target,
      titleKey: "partner.process.step3.title" as TKey,
      descKey: "partner.process.step3.desc" as TKey,
    },
    {
      icon: BadgeCheck,
      titleKey: "partner.process.step4.title" as TKey,
      descKey: "partner.process.step4.desc" as TKey,
    },
    {
      icon: Network,
      titleKey: "partner.process.step5.title" as TKey,
      descKey: "partner.process.step5.desc" as TKey,
    },
    {
      icon: TrendingUp,
      titleKey: "partner.process.step6.title" as TKey,
      descKey: "partner.process.step6.desc" as TKey,
    },
  ];

  const TRUST_ITEMS = [
    { icon: BadgeCheck, labelKey: "partner.trust.item1" as TKey },
    { icon: ShieldCheck, labelKey: "partner.trust.item2" as TKey },
    { icon: Handshake, labelKey: "partner.trust.item3" as TKey },
    { icon: TrendingUp, labelKey: "partner.trust.item4" as TKey },
    { icon: Leaf, labelKey: "partner.trust.item5" as TKey },
    { icon: Award, labelKey: "partner.trust.item6" as TKey },
    { icon: Globe, labelKey: "partner.trust.item7" as TKey },
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
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              "continent.africa",
              "continent.america",
              "continent.asia",
              "continent.europe",
              "continent.oceania",
            ].map((key) => (
              <div
                key={key}
                className="grid h-16 place-items-center rounded-xl bg-[color:var(--accent)] text-sm font-semibold tracking-wider text-white/70"
              >
                {t(key as TKey).toUpperCase()}
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
              key={b.titleKey}
              className="group hover-lift rounded-2xl border border-border bg-white p-6 shadow-card"
            >
              <div className="h-10 w-10 rounded-xl bg-gold-soft text-gold grid place-items-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-semibold text-[color:var(--navy)]">
                {t(b.titleKey)}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t(b.descKey)}</p>
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
              <div key={s.titleKey} className="relative">
                <div className="group flex flex-col items-center text-center rounded-2xl border border-border bg-white p-6 shadow-card hover-lift">
                  <div className="h-12 w-12 rounded-full bg-gold-soft text-gold grid place-items-center mb-4 group-hover:bg-gold group-hover:text-[color:var(--gold-foreground)] transition-colors duration-300">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-1">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-sm font-semibold text-[color:var(--navy)]">
                    {t(s.titleKey)}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{t(s.descKey)}</p>
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
              key={item.labelKey}
              className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-white px-5 py-2.5 shadow-sm hover:border-gold/40 hover:shadow-md transition-all duration-300"
            >
              <item.icon className="h-4 w-4 text-gold" />
              <span className="text-sm font-medium text-[color:var(--navy)]">{t(item.labelKey)}</span>
            </div>
          ))}
        </div>
      </section>

    </>
  );
}
