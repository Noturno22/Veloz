import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import agriImg from "@/assets/commodity-agricultural.jpg";
import mineralsImg from "@/assets/commodity-minerals.jpg";
import energyImg from "@/assets/commodity-energy.jpg";
import industrialImg from "@/assets/commodity-industrial.jpg";
import { useI18n } from "@/lib/i18n";
import type { TKey } from "@/lib/translations";

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

function Commodities() {
  const { t } = useI18n();
  const GROUPS: { titleKey: TKey; descKey: TKey; img: string; itemKeys: TKey[] }[] = [
    { titleKey: "commPage.agri.title", descKey: "commPage.agri.desc", img: agriImg, itemKeys: ["comm.item.coffee", "comm.item.soybeans", "comm.item.corn", "comm.item.rice", "comm.item.cocoa", "comm.item.sugar"] },
    { titleKey: "commPage.min.title", descKey: "commPage.min.desc", img: mineralsImg, itemKeys: ["comm.item.copper", "comm.item.ironOre", "comm.item.manganese", "comm.item.bauxite"] },
    { titleKey: "commPage.ene.title", descKey: "commPage.ene.desc", img: energyImg, itemKeys: ["comm.item.crudeOil", "comm.item.naturalGas", "comm.item.lpg", "comm.item.diesel", "comm.item.jetFuel"] },
    { titleKey: "commPage.ind.title", descKey: "commPage.ind.desc", img: industrialImg, itemKeys: ["comm.item.steel", "comm.item.aluminum", "comm.item.cement", "comm.item.constructionMaterials"] },
  ];
  return (
    <>
      <PageHero
        eyebrow={t("commPage.eyebrow")}
        title={<>{t("commPage.titleA")} <span className="text-gold">{t("commPage.titleB")}</span></>}
        description={t("commPage.desc")}
      />
      <section className="container-x py-16 space-y-10">
        {GROUPS.map((g, i) => (
          <div key={g.titleKey} className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="overflow-hidden rounded-3xl shadow-card">
              <img src={g.img} alt={t(g.titleKey)} className="w-full h-72 lg:h-96 object-cover hover:scale-105 transition duration-700" loading="lazy" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">{t("commPage.category")} {String(i+1).padStart(2,"0")}</div>
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-[color:var(--navy)]">{t(g.titleKey)}</h2>
              <p className="mt-3 text-muted-foreground">{t(g.descKey)}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.itemKeys.map((itk) => (
                  <span key={itk} className="rounded-full border border-border bg-white px-4 py-1.5 text-sm font-medium text-foreground/80">{t(itk)}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
