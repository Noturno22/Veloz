import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { TKey } from "@/lib/translations";

export const Route = createFileRoute("/partnership")({
  head: () => ({
    meta: [
      { title: "Partnership — Zentra Trading" },
      { name: "description", content: "Join 850+ partners trading globally with Zentra Trading. Become a producer, supplier, exporter, importer or investor partner." },
      { property: "og:title", content: "Partnership — Zentra Trading" },
      { property: "og:url", content: "https://zentratrading.com/partnership" },
    ],
    links: [{ rel: "canonical", href: "https://zentratrading.com/partnership" }],
  }),
  component: Partnership,
});

function Partnership() {
  const { t } = useI18n();
  const TIERS: { titleKey: TKey; textKey: TKey; perks: TKey[] }[] = [
    { titleKey: "partner.t1.title", textKey: "partner.t1.text", perks: ["partner.t1.p1", "partner.t1.p2", "partner.t1.p3"] },
    { titleKey: "partner.t2.title", textKey: "partner.t2.text", perks: ["partner.t2.p1", "partner.t2.p2", "partner.t2.p3"] },
    { titleKey: "partner.t3.title", textKey: "partner.t3.text", perks: ["partner.t3.p1", "partner.t3.p2", "partner.t3.p3"] },
  ];
  return (
    <>
      <PageHero
        eyebrow={t("partner.eyebrow")}
        title={<>{t("partner.titleA")} <span className="text-gold">{t("partner.titleB")}</span></>}
        description={t("partner.desc")}
      />
      <section className="container-x py-16 grid gap-6 md:grid-cols-3">
        {TIERS.map((tier) => (
          <div key={tier.titleKey} className="hover-lift rounded-2xl border border-border bg-white p-7 shadow-card">
            <h3 className="font-display text-xl font-semibold text-[color:var(--navy)]">{t(tier.titleKey)}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t(tier.textKey)}</p>
            <ul className="mt-5 space-y-2 text-sm">
              {tier.perks.map((p) => (
                <li key={p} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-[color:var(--success)]" /> {t(p)}</li>
              ))}
            </ul>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-[color:var(--gold-foreground)] shadow-gold">
              {t("common.apply")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </section>
      <section className="container-x pb-16">
        <div className="rounded-2xl border border-border bg-white p-8 shadow-card">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">{t("partner.trusted.eyebrow")}</div>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold text-[color:var(--navy)]">{t("partner.trusted.title")}</h2>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {["Nordbridge", "AuriCo", "MeridianAg", "Sahara Energy", "PortusLog", "ZenithSteel"].map((n) => (
              <div key={n} className="grid h-16 place-items-center rounded-xl bg-[color:var(--accent)] text-sm font-semibold tracking-wider text-[color:var(--navy)]/70">
                {n.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
