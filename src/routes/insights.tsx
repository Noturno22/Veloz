import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { TKey } from "@/lib/translations";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Veloz" },
      { name: "description", content: "Market intelligence, trade news and sector reports from Veloz." },
      { property: "og:title", content: "Insights — Veloz" },
      { property: "og:url", content: "https://zentratrading.com/insights" },
    ],
    links: [{ rel: "canonical", href: "https://zentratrading.com/insights" }],
  }),
  component: Insights,
});

function Insights() {
  const { t } = useI18n();
  const CATS: TKey[] = ["insights.cat.all", "insights.cat.market", "insights.cat.export", "insights.cat.import", "insights.cat.energy", "insights.cat.agri"];
  const POSTS: { catKey: TKey; titleKey: TKey; date: string; read: string; img: string }[] = [
    { catKey: "insights.cat.market", titleKey: "insights.p1", date: "Jun 12, 2026", read: "5", img: "https://images.pexels.com/photos/7109239/pexels-photo-7109239.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { catKey: "insights.cat.energy", titleKey: "insights.p2", date: "Jun 04, 2026", read: "6", img: "https://images.pexels.com/photos/10653885/pexels-photo-10653885.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { catKey: "insights.cat.agri", titleKey: "insights.p3", date: "May 28, 2026", read: "4", img: "https://images.pexels.com/photos/5715854/pexels-photo-5715854.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { catKey: "insights.cat.export", titleKey: "insights.p4", date: "May 19, 2026", read: "7", img: "https://images.pexels.com/photos/21299740/pexels-photo-21299740.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { catKey: "insights.cat.import", titleKey: "insights.p5", date: "May 02, 2026", read: "5", img: "https://images.pexels.com/photos/30515366/pexels-photo-30515366.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { catKey: "insights.cat.market", titleKey: "insights.p6", date: "Apr 21, 2026", read: "6", img: "https://images.pexels.com/photos/33000099/pexels-photo-33000099.jpeg?auto=compress&cs=tinysrgb&w=800" },
  ];
  return (
    <>
      <PageHero
        eyebrow={t("insights.eyebrow")}
        title={<>{t("insights.titleA")} <span className="text-gold">{t("insights.titleB")}</span></>}
        description={t("insights.desc")}
        imageFolder="Analises"
      />
      <section className="container-x py-10 flex flex-wrap gap-2">
        {CATS.map((c, i) => (
          <button key={c} className={`rounded-full px-4 py-2 text-sm font-medium border ${i === 0 ? "bg-[color:var(--brand-green)] text-white border-[color:var(--brand-green)]" : "border-border bg-card"}`}>
            {t(c)}
          </button>
        ))}
      </section>
      <section className="container-x pb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((p) => (
          <article key={p.titleKey} className="hover-lift group overflow-hidden rounded-2xl border border-border bg-white shadow-card">
            <div className="h-44 relative overflow-hidden bg-[color:var(--navy)]">
              <img src={p.img} alt="" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
              <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[color:var(--navy)]">
                {t(p.catKey)}
              </span>
            </div>
            <div className="p-6">
              <div className="text-xs text-muted-foreground">{p.date} · {p.read} {t("common.minRead")}</div>
              <h3 className="mt-2 font-display text-lg font-semibold text-[color:var(--navy)]">
                {t(p.titleKey)}
              </h3>
              <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold underline-gold">
                {t("common.readArticle")} <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
