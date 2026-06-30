import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Globe2, Briefcase, Lightbulb, HandCoins, Truck } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { TKey } from "@/lib/translations";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "Serviços — Veloz" },
      { name: "description", content: "Conheça os nossos serviços de comércio global de commodities." },
      { property: "og:title", content: "Serviços — Veloz" },
      { property: "og:url", content: "https://zentratrading.com/how-it-works" },
    ],
    links: [{ rel: "canonical", href: "https://zentratrading.com/how-it-works" }],
  }),
  component: HowItWorks,
});

function HowItWorks() {
  const { t } = useI18n();
  const SERVICES: { icon: typeof ShieldCheck; titleKey: TKey; descKey: TKey }[] = [
    { icon: ShieldCheck, titleKey: "how.sv1.t", descKey: "how.sv1.d" },
    { icon: Globe2, titleKey: "how.sv2.t", descKey: "how.sv2.d" },
    { icon: Briefcase, titleKey: "how.sv3.t", descKey: "how.sv3.d" },
    { icon: Lightbulb, titleKey: "how.sv4.t", descKey: "how.sv4.d" },
    { icon: HandCoins, titleKey: "how.sv5.t", descKey: "how.sv5.d" },
    { icon: Truck, titleKey: "how.sv6.t", descKey: "how.sv6.d" },
  ];

  return (
    <section className="container-x py-16">
      <div className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">{t("how.services.eyebrow")}</div>
      <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[color:var(--navy)]">{t("how.services.title")}</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <div key={s.titleKey} className="hover-lift group rounded-2xl border border-border bg-white p-6 shadow-card">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--gold-soft)] text-[color:var(--navy)] group-hover:bg-gradient-gold group-hover:text-[color:var(--gold-foreground)] transition">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold text-[color:var(--navy)]">{t(s.titleKey)}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t(s.descKey)}</p>
            <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-gold underline-gold">
              {t("common.learnMore")} <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
