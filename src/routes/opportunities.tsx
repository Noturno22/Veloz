import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Search, MapPin, Package, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { TKey } from "@/lib/translations";

export const Route = createFileRoute("/opportunities")({
  head: () => ({
    meta: [
      { title: "Opportunities — Zentra Trading" },
      { name: "description", content: "Browse live trading opportunities across agricultural, mineral, energy and industrial markets." },
      { property: "og:title", content: "Opportunities — Zentra Trading" },
      { property: "og:url", content: "/opportunities" },
    ],
    links: [{ rel: "canonical", href: "/opportunities" }],
  }),
  component: Opportunities,
});

const CAT_COLORS: Record<string, string> = {
  Agricultural: "bg-emerald-100 text-emerald-800",
  Minerals: "bg-amber-100 text-amber-800",
  Energy: "bg-orange-100 text-orange-800",
  Industrial: "bg-slate-200 text-slate-800",
};

function Opportunities() {
  const { t } = useI18n();
  const DEALS: { title: string; route: string; qty: string; typeKey: TKey; cat: keyof typeof CAT_COLORS; catKey: TKey }[] = [
    { title: "Coffee Export", route: "Angola → Europe", qty: "12,000 MT", typeKey: "opp.type.export", cat: "Agricultural", catKey: "comm.agricultural" },
    { title: "Gold Trading", route: "Africa → Asia", qty: "200 kg", typeKey: "opp.type.export", cat: "Minerals", catKey: "comm.minerals" },
    { title: "Crude Oil Supply", route: "Middle East → Global", qty: "2M Barrels", typeKey: "opp.type.supply", cat: "Energy", catKey: "comm.energy" },
    { title: "Steel Products", route: "China → Africa", qty: "8,500 MT", typeKey: "opp.type.import", cat: "Industrial", catKey: "comm.industrial" },
    { title: "Soybeans Bulk", route: "Brazil → China", qty: "30,000 MT", typeKey: "opp.type.export", cat: "Agricultural", catKey: "comm.agricultural" },
    { title: "Copper Cathodes", route: "Zambia → Europe", qty: "1,500 MT", typeKey: "opp.type.export", cat: "Minerals", catKey: "comm.minerals" },
  ];
  return (
    <>
      <PageHero
        eyebrow={t("opp.eyebrow")}
        title={<>{t("opp.titleA")} <span className="text-gold">{t("opp.titleB")}</span></>}
        description={t("opp.desc")}
      />
      <section className="container-x py-12">
        <div className="rounded-2xl border border-border bg-white p-4 shadow-card grid gap-3 md:grid-cols-[1fr_auto_auto_auto_auto] md:items-center">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input placeholder={t("opp.search")} className="w-full rounded-lg border border-input pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" />
          </div>
          <select className="rounded-lg border border-input bg-white px-3 py-2.5 text-sm">
            <option>{t("opp.allCommodities")}</option>
            <option>{t("comm.agricultural")}</option>
            <option>{t("comm.minerals")}</option>
            <option>{t("comm.energy")}</option>
            <option>{t("comm.industrial")}</option>
          </select>
          <select className="rounded-lg border border-input bg-white px-3 py-2.5 text-sm">
            <option>{t("opp.anyCountry")}</option><option>Angola</option><option>Brazil</option><option>China</option>
          </select>
          <select className="rounded-lg border border-input bg-white px-3 py-2.5 text-sm">
            <option>{t("opp.anyQty")}</option><option>{t("opp.qtySmall")}</option><option>{t("opp.qtyLarge")}</option>
          </select>
          <select className="rounded-lg border border-input bg-white px-3 py-2.5 text-sm">
            <option>{t("opp.anyType")}</option>
            <option>{t("opp.type.export")}</option>
            <option>{t("opp.type.import")}</option>
            <option>{t("opp.type.supply")}</option>
          </select>
        </div>
      </section>
      <section className="container-x pb-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {DEALS.map((d) => (
          <article key={d.title} className="hover-lift group flex flex-col rounded-2xl border border-border bg-white p-6 shadow-card">
            <div className="flex items-center justify-between">
              <span className={`text-xs font-semibold uppercase rounded-full px-2.5 py-1 ${CAT_COLORS[d.cat]}`}>{t(d.catKey)}</span>
              <span className="text-xs font-semibold text-gold">{t(d.typeKey)}</span>
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold text-[color:var(--navy)]">{d.title}</h3>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" />{d.route}</div>
              <div className="flex items-center gap-2"><Package className="h-4 w-4 text-gold" />{d.qty}</div>
            </div>
            <button className="mt-6 inline-flex items-center justify-between rounded-xl bg-[color:var(--accent)] px-4 py-2.5 text-sm font-semibold text-[color:var(--navy)] group-hover:bg-gradient-gold group-hover:text-[color:var(--gold-foreground)] transition">
              {t("common.viewOpportunity")} <ArrowRight className="h-4 w-4" />
            </button>
          </article>
        ))}
      </section>
    </>
  );
}
