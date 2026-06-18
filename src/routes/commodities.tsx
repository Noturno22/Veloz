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
      { title: "Commodities — Zentra Trading" },
      { name: "description", content: "Agricultural, mineral, energy and industrial commodities traded across our global network." },
      { property: "og:title", content: "Commodities — Zentra Trading" },
      { property: "og:url", content: "/commodities" },
    ],
    links: [{ rel: "canonical", href: "/commodities" }],
  }),
  component: Commodities,
});

function Commodities() {
  const { t } = useI18n();
  const GROUPS: { titleKey: TKey; descKey: TKey; img: string; items: string[] }[] = [
    { titleKey: "commPage.agri.title", descKey: "commPage.agri.desc", img: agriImg, items: ["Coffee", "Soybeans", "Corn", "Rice", "Cocoa", "Sugar"] },
    { titleKey: "commPage.min.title", descKey: "commPage.min.desc", img: mineralsImg, items: ["Gold", "Diamonds", "Copper", "Iron Ore", "Manganese", "Bauxite"] },
    { titleKey: "commPage.ene.title", descKey: "commPage.ene.desc", img: energyImg, items: ["Crude Oil", "Natural Gas", "LPG", "Diesel", "Jet Fuel"] },
    { titleKey: "commPage.ind.title", descKey: "commPage.ind.desc", img: industrialImg, items: ["Steel", "Aluminum", "Cement", "Construction Materials"] },
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
                {g.items.map((it) => (
                  <span key={it} className="rounded-full border border-border bg-white px-4 py-1.5 text-sm font-medium text-foreground/80">{it}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
