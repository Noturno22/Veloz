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
  const POSTS: { catKey: TKey; titleKey: TKey; date: string; read: string }[] = [
    { catKey: "insights.cat.market", titleKey: "insights.p1", date: "Jun 12, 2026", read: "5" },
    { catKey: "insights.cat.energy", titleKey: "insights.p2", date: "Jun 04, 2026", read: "6" },
    { catKey: "insights.cat.agri", titleKey: "insights.p3", date: "May 28, 2026", read: "4" },
    { catKey: "insights.cat.export", titleKey: "insights.p4", date: "May 19, 2026", read: "7" },
    { catKey: "insights.cat.import", titleKey: "insights.p5", date: "May 02, 2026", read: "5" },
    { catKey: "insights.cat.market", titleKey: "insights.p6", date: "Apr 21, 2026", read: "6" },
  ];
  return (
    <>
      <PageHero
        eyebrow={t("insights.eyebrow")}
        title={<>{t("insights.titleA")} <span className="text-gold">{t("insights.titleB")}</span></>}
        description={t("insights.desc")}
      />
      <section className="container-x py-10 flex flex-wrap gap-2">
        {CATS.map((c, i) => (
          <button key={c} className={`rounded-full px-4 py-2 text-sm font-medium border transition ${i === 0 ? "bg-[color:var(--brand-green)] text-white border-[color:var(--brand-green)]" : "border-border bg-card hover:border-gold"}`}>
            {t(c)}
          </button>
        ))}
      </section>
      <section className="container-x pb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((p) => (
          <article key={p.titleKey} className="hover-lift group overflow-hidden rounded-2xl border border-border bg-white shadow-card">
            <div className="h-44 bg-gradient-navy relative">
              <div
                aria-hidden
                className="absolute inset-0 opacity-40"
                style={{ background: "radial-gradient(circle at 20% 20%, var(--brand-green) 0%, transparent 60%)" }}
              />
              <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[color:var(--navy)]">
                {t(p.catKey)}
              </span>
            </div>
            <div className="p-6">
              <div className="text-xs text-muted-foreground">{p.date} · {p.read} {t("common.minRead")}</div>
              <h3 className="mt-2 font-display text-lg font-semibold text-[color:var(--navy)] group-hover:text-gold transition">
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
