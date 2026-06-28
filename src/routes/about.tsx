import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Target, Eye, Sparkles, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { TKey } from "@/lib/translations";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Zentra Trading" },
      { name: "description", content: "Zentra Trading facilitates global commodity business through an international network of trusted partners." },
      { property: "og:title", content: "About Us — Zentra Trading" },
      { property: "og:url", content: "https://zentratrading.com/about" },
    ],
    links: [{ rel: "canonical", href: "https://zentratrading.com/about" }],
  }),
  component: About,
});

function About() {
  const { t } = useI18n();
  const VALUES: TKey[] = ["values.transparency", "values.integrity", "values.efficiency", "values.innovation", "values.trust"];
  const CARDS: { icon: typeof Target; titleKey: TKey; descKey: TKey }[] = [
    { icon: Target, titleKey: "about.mission.t", descKey: "about.mission.d" },
    { icon: Eye, titleKey: "about.vision.t", descKey: "about.vision.d" },
    { icon: Sparkles, titleKey: "about.promise.t", descKey: "about.promise.d" },
  ];
  return (
    <>
      <PageHero
        eyebrow={t("about.eyebrow")}
        title={<>{t("about.titleA")} <span className="text-gold">{t("about.titleB")}</span></>}
        description={t("about.desc")}
      />
      <section className="container-x py-16 grid lg:grid-cols-3 gap-6">
        {CARDS.map((c) => (
          <div key={c.titleKey} className="hover-lift rounded-2xl border border-border bg-white p-7 shadow-card">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-[color:var(--gold-foreground)] shadow-gold">
              <c.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold text-[color:var(--navy)]">{t(c.titleKey)}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t(c.descKey)}</p>
          </div>
        ))}
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
              <div key={v} className="rounded-xl border border-white/15 bg-white/5 p-5 text-center backdrop-blur-sm hover:bg-white/10 transition">
                <div className="font-display text-xl font-semibold text-gold">{t(v)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container-x py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeading
              eyebrow={t("about.story.eyebrow")}
              title={t("about.story.title")}
              description={t("about.story.desc")}
            />
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-6 py-3 text-sm font-semibold text-[color:var(--gold-foreground)] shadow-gold">
              {t("common.getInTouch")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: "50+", l: t("stats.countriesShort") },
              { v: "1,200+", l: t("stats.transactions") },
              { v: "850+", l: t("stats.partnersShort") },
              { v: "$2.8B+", l: t("stats.volumeShort") },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border bg-white p-6 text-center shadow-card">
                <div className="font-display text-3xl font-bold text-[color:var(--navy)]">{s.v}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
