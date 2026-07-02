import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import agriImg from "@/assets/commodity-agricultural.jpg";
import mineralsImg from "@/assets/commodity-minerals.jpg";
import energyImg from "@/assets/commodity-energy.jpg";
import industrialImg from "@/assets/commodity-industrial.jpg";
import { useI18n } from "@/lib/i18n";
import type { TKey } from "@/lib/translations";
import { useState } from "react";
import { ArrowRight, Globe2, Handshake, TrendingUp, BarChart3 } from "lucide-react";

export const Route = createFileRoute("/commodities")({
  head: () => ({
    meta: [
      { title: "Commodities — Veloz" },
      { name: "description", content: "Agricultural, mineral, energy and industrial commodities traded across our global network." },
      { property: "og:title", content: "Commodities — Veloz" },
      { property: "og:url", content: "https://zentratrading.com/commodities" },
    ],
    links: [{ rel: "canonical", href: "https://zentratrading.com/commodities" }],
  }),
  component: Commodities,
});

const CATEGORIES = [
  { id: "agri", titleKey: "commPage.agri.title" as TKey, img: agriImg, color: "emerald" },
  { id: "min", titleKey: "commPage.min.title" as TKey, img: mineralsImg, color: "amber" },
  { id: "ene", titleKey: "commPage.ene.title" as TKey, img: energyImg, color: "orange" },
  { id: "ind", titleKey: "commPage.ind.title" as TKey, img: industrialImg, color: "slate" },
];

const CAT_COLORS: Record<string, { border: string; bg: string; text: string; tag: string }> = {
  emerald: { border: "border-emerald-500/20", bg: "bg-emerald-50 dark:bg-emerald-950/20", text: "text-emerald-700 dark:text-emerald-400", tag: "border-emerald-200 dark:border-emerald-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/30" },
  amber:   { border: "border-amber-500/20",   bg: "bg-amber-50 dark:bg-amber-950/20",   text: "text-amber-700 dark:text-amber-400",   tag: "border-amber-200 dark:border-amber-800 hover:bg-amber-50 dark:hover:bg-amber-900/30" },
  orange:  { border: "border-orange-500/20",  bg: "bg-orange-50 dark:bg-orange-950/20",  text: "text-orange-700 dark:text-orange-400",  tag: "border-orange-200 dark:border-orange-800 hover:bg-orange-50 dark:hover:bg-orange-900/30" },
  slate:   { border: "border-slate-500/20",   bg: "bg-slate-50 dark:bg-slate-950/20",   text: "text-slate-700 dark:text-slate-400",   tag: "border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900/30" },
};

type Group = {
  titleKey: TKey;
  descKey: TKey;
  img: string;
  itemKeys: TKey[];
  id: string;
  stats: { icon: typeof BarChart3; label: string; value: string }[];
};

function Commodities() {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState("");

  const GROUPS: Group[] = [
    { id: "agri", titleKey: "commPage.agri.title", descKey: "commPage.agri.desc", img: agriImg, itemKeys: ["comm.item.coffee", "comm.item.soybeans", "comm.item.corn", "comm.item.rice", "comm.item.cocoa", "comm.item.sugar"], stats: [
      { icon: BarChart3, label: "Volume", value: "US$ 840M+" },
      { icon: Handshake, label: "Active Deals", value: "340+" },
      { icon: Globe2, label: "Markets", value: "28" },
    ]},
    { id: "min", titleKey: "commPage.min.title", descKey: "commPage.min.desc", img: mineralsImg, itemKeys: ["comm.item.copper", "comm.item.ironOre", "comm.item.manganese", "comm.item.bauxite"], stats: [
      { icon: BarChart3, label: "Volume", value: "US$ 620M+" },
      { icon: Handshake, label: "Active Deals", value: "210+" },
      { icon: Globe2, label: "Markets", value: "22" },
    ]},
    { id: "ene", titleKey: "commPage.ene.title", descKey: "commPage.ene.desc", img: energyImg, itemKeys: ["comm.item.crudeOil", "comm.item.naturalGas", "comm.item.lpg", "comm.item.diesel", "comm.item.jetFuel"], stats: [
      { icon: BarChart3, label: "Volume", value: "US$ 1.2B+" },
      { icon: Handshake, label: "Active Deals", value: "180+" },
      { icon: Globe2, label: "Markets", value: "35" },
    ]},
    { id: "ind", titleKey: "commPage.ind.title", descKey: "commPage.ind.desc", img: industrialImg, itemKeys: ["comm.item.steel", "comm.item.aluminum", "comm.item.cement", "comm.item.constructionMaterials"], stats: [
      { icon: BarChart3, label: "Volume", value: "US$ 480M+" },
      { icon: Handshake, label: "Active Deals", value: "150+" },
      { icon: Globe2, label: "Markets", value: "18" },
    ]},
  ];

  const current = GROUPS.find((g) => g.id === activeTab);

  return (
    <>
      <PageHero
        eyebrow={t("commPage.eyebrow")}
        title={<>{t("commPage.titleA")} <span className="text-gold">{t("commPage.titleB")}</span></>}
        description={t("commPage.desc")}
      />

      {/* ====== Top Stats Strip ====== */}
      <section className="container-x -mt-6 mb-8">
        <div className="rounded-2xl bg-card border border-border shadow-card p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Globe2, value: "103", label: t("commPage.statMarkets") || "Markets Served" },
            { icon: Handshake, value: "880+", label: t("commPage.statDeals") || "Active Deals" },
            { icon: TrendingUp, value: "US$ 3.1B+", label: t("commPage.statVolume") || "Annual Volume" },
            { icon: BarChart3, value: "18", label: t("commPage.statCommodities") || "Commodities" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gold-soft text-gold grid place-items-center shrink-0">
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-xl text-[color:var(--navy)] dark:text-foreground">{s.value}</div>
                <div className="text-[11px] text-muted-foreground">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== Sticky Tab Navigation ====== */}
      <nav className="sticky top-20 z-20 container-x mb-8">
        <div className="rounded-xl bg-card border border-border shadow-card p-1.5 flex gap-1 overflow-x-auto">
          <button onClick={() => setActiveTab("")} className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg whitespace-nowrap ${!activeTab ? "bg-gold text-[var(--gold-foreground)] shadow-gold" : "text-muted-foreground"}`}>
            {t("commPage.all") || "All"}
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg whitespace-nowrap ${activeTab === c.id ? "bg-gold text-[var(--gold-foreground)] shadow-gold" : "text-muted-foreground"}`}
            >
              {t(c.titleKey)}
            </button>
          ))}
        </div>
      </nav>

      {/* ====== Commodity Groups ====== */}
      <section className="container-x pb-20 space-y-12">
        {GROUPS.filter((g) => !activeTab || g.id === activeTab).map((g, i) => {
          const cc = CAT_COLORS[g.id === "agri" ? "emerald" : g.id === "min" ? "amber" : g.id === "ene" ? "orange" : "slate"];
          return (
            <div key={g.id} className={`rounded-3xl ${cc.bg} border ${cc.border} overflow-hidden shadow-card`}>
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className={`relative overflow-hidden h-64 lg:h-full min-h-[300px] ${i % 2 ? "lg:order-2" : ""}`}>
                  <img src={g.img} alt={t(g.titleKey)} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${cc.text} bg-white/90 dark:bg-black/50 backdrop-blur-sm`}>
                      {t("commPage.category")} {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-[color:var(--navy)] dark:text-foreground">
                    {t(g.titleKey)}
                  </h2>
                  <p className="mt-3 text-muted-foreground">{t(g.descKey)}</p>

                  {/* Stats */}
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {g.stats.map((s) => (
                      <div key={s.label}>
                        <div className="flex items-center gap-1.5 text-gold">
                          <s.icon className="h-3.5 w-3.5" />
                          <span className="text-xs font-semibold text-muted-foreground">{s.label}</span>
                        </div>
                        <div className="font-display text-lg text-[color:var(--navy)] dark:text-foreground">{s.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {g.itemKeys.map((itk) => (
                      <Link
                        key={itk}
                        to="/opportunities"
                        className={`rounded-full border ${cc.tag} px-4 py-1.5 text-sm font-medium text-foreground/80`}
                      >
                        {t(itk)}
                      </Link>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to="/opportunities"
                    className="mt-6 inline-flex items-center gap-2 self-start rounded-xl bg-gold px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[var(--gold-foreground)] hover:brightness-110 shadow-gold"
                  >
                    {t("common.exploreOpportunities")} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
