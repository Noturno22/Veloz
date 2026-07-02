import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Search, MapPin, Package, ArrowRight, X, Building2, ShieldCheck, Phone, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { TKey } from "@/lib/translations";
import { useState } from "react";

export const Route = createFileRoute("/opportunities")({
  head: () => ({
    meta: [
      { title: "Opportunities — Veloz" },
      { name: "description", content: "Browse live trading opportunities across agricultural, mineral, energy and industrial markets." },
      { property: "og:title", content: "Opportunities — Veloz" },
      { property: "og:url", content: "https://zentratrading.com/opportunities" },
    ],
    links: [{ rel: "canonical", href: "https://zentratrading.com/opportunities" }],
  }),
  component: Opportunities,
});

const CAT_COLORS: Record<string, string> = {
  Agricultural: "bg-emerald-100 text-emerald-800",
  Minerals: "bg-amber-100 text-amber-800",
  Energy: "bg-orange-100 text-orange-800",
  Industrial: "bg-slate-200 text-slate-800",
};

type Deal = {
  id: string;
  titleKey: TKey;
  routeKey: TKey;
  qtyKey: TKey;
  typeKey: TKey;
  cat: keyof typeof CAT_COLORS;
  catKey: TKey;
  country: string;
};

const DEALS: Deal[] = [
  { id: "coffee", titleKey: "opp.title.coffeeExport", routeKey: "opp.route.angolaEurope", qtyKey: "opp.qty.coffee", typeKey: "opp.type.export", cat: "Agricultural", catKey: "comm.agricultural", country: "Angola" },
  { id: "crude", titleKey: "opp.title.crudeOilSupply", routeKey: "opp.route.middleEastGlobal", qtyKey: "opp.qty.oil", typeKey: "opp.type.supply", cat: "Energy", catKey: "comm.energy", country: "UAE" },
  { id: "steel", titleKey: "opp.title.steelProducts", routeKey: "opp.route.chinaAfrica", qtyKey: "opp.qty.steel", typeKey: "opp.type.import", cat: "Industrial", catKey: "comm.industrial", country: "China" },
  { id: "soybeans", titleKey: "opp.title.soybeansBulk", routeKey: "opp.route.brazilChina", qtyKey: "opp.qty.soybeans", typeKey: "opp.type.export", cat: "Agricultural", catKey: "comm.agricultural", country: "Brazil" },
  { id: "copper", titleKey: "opp.title.copperCathodes", routeKey: "opp.route.zambiaEurope", qtyKey: "opp.qty.copper", typeKey: "opp.type.export", cat: "Minerals", catKey: "comm.minerals", country: "Zambia" },
];

function Opportunities() {
  const { t } = useI18n();
  const [search, setSearch] = useState("");
  const [commodity, setCommodity] = useState("");
  const [country, setCountry] = useState("");
  const [quantity, setQuantity] = useState("");
  const [tradeType, setTradeType] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = DEALS.filter((d) => {
    if (search && !t(d.titleKey).toLowerCase().includes(search.toLowerCase())) return false;
    if (commodity && d.cat !== commodity) return false;
    if (country && d.country !== country) return false;
    if (tradeType && d.typeKey !== tradeType) return false;
    return true;
  });

  function toggleExpand(id: string) {
    setExpandedId((prev) => (prev === id ? null : id));
  }

  return (
    <>
      <PageHero
        eyebrow={t("opp.eyebrow")}
        title={<>{t("opp.titleA")} <span className="text-gold">{t("opp.titleB")}</span></>}
        description={t("opp.desc")}
      />
      <section className="container-x py-12">
        <div className="rounded-2xl border border-border bg-white dark:bg-card p-4 shadow-card grid gap-3 md:grid-cols-[1fr_auto_auto_auto_auto] md:items-center">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t("opp.search")}
              className="w-full rounded-lg border border-input pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
            />
          </div>
          <select value={commodity} onChange={(e) => setCommodity(e.target.value)} className="rounded-lg border border-input bg-white dark:bg-card px-3 py-2.5 text-sm">
            <option value="">{t("opp.allCommodities")}</option>
            <option value="Agricultural">{t("comm.agricultural")}</option>
            <option value="Minerals">{t("comm.minerals")}</option>
            <option value="Energy">{t("comm.energy")}</option>
            <option value="Industrial">{t("comm.industrial")}</option>
          </select>
          <select value={country} onChange={(e) => setCountry(e.target.value)} className="rounded-lg border border-input bg-white dark:bg-card px-3 py-2.5 text-sm">
            <option value="">{t("opp.anyCountry")}</option>
            <option>Angola</option><option>Brazil</option><option>China</option>
            <option>Zambia</option><option>UAE</option>
          </select>
          <select value={quantity} onChange={(e) => setQuantity(e.target.value)} className="rounded-lg border border-input bg-white dark:bg-card px-3 py-2.5 text-sm">
            <option value="">{t("opp.anyQty")}</option>
            <option value="small">{t("opp.qtySmall")}</option>
            <option value="large">{t("opp.qtyLarge")}</option>
          </select>
          <select value={tradeType} onChange={(e) => setTradeType(e.target.value)} className="rounded-lg border border-input bg-white dark:bg-card px-3 py-2.5 text-sm">
            <option value="">{t("opp.anyType")}</option>
            <option value="opp.type.export">{t("opp.type.export")}</option>
            <option value="opp.type.import">{t("opp.type.import")}</option>
            <option value="opp.type.supply">{t("opp.type.supply")}</option>
          </select>
        </div>
      </section>

      <section className="container-x pb-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.length === 0 ? (
          <div className="col-span-full text-center py-20 text-muted-foreground">
            <Package className="mx-auto h-12 w-12 mb-4 opacity-30" />
            <p className="text-lg font-medium">{t("opp.noResults") || "No opportunities match your filters."}</p>
            <button onClick={() => { setSearch(""); setCommodity(""); setCountry(""); setQuantity(""); setTradeType(""); }} className="mt-3 text-sm text-gold hover:underline">
              {t("opp.clearFilters") || "Clear filters"}
            </button>
          </div>
        ) : filtered.map((d) => {
          const isOpen = expandedId === d.id;
          return (
            <article key={d.id} className={`flex flex-col rounded-2xl border bg-white dark:bg-card shadow-card transition-all duration-300 ${isOpen ? "border-gold/40 shadow-elegant col-span-full md:col-span-2 lg:col-span-3" : "border-border hover-lift"}`}>
              <div className={`p-6 ${isOpen ? "pb-4" : ""}`}>
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-semibold uppercase tracking-wider rounded-full px-2.5 py-1 ${CAT_COLORS[d.cat]}`}>{t(d.catKey)}</span>
                  <span className="text-xs font-semibold text-gold">{t(d.typeKey)}</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-[color:var(--navy)] dark:text-foreground">{t(d.titleKey)}</h3>
                <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0 text-gold" />{t(d.routeKey)}</div>
                  <div className="flex items-center gap-2"><Package className="h-4 w-4 shrink-0 text-gold" />{t(d.qtyKey)}</div>
                </div>
                <button
                  onClick={() => toggleExpand(d.id)}
                  className={`mt-6 w-full inline-flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold ${
                    isOpen
                      ? "bg-muted text-foreground"
                      : "bg-gold text-[var(--gold-foreground)] hover:brightness-110 shadow-gold"
                  }`}
                >
                  {isOpen ? t("common.close") || "Close" : t("common.viewOpportunity")}
                  {isOpen ? <X className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                </button>
              </div>

              {isOpen && (
                <div className="border-t border-border px-6 py-5 animate-fadeIn">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
                    {[
                      { icon: Building2, label: t("opp.ref") || "Reference", value: `#VEL-${d.id.toUpperCase()}-2026` },
                      { icon: ShieldCheck, label: t("opp.verified") || "Verified", value: t("opp.verifiedBadge") || "Seller Verified" },
                      { icon: MapPin, label: t("opp.origin") || "Origin", value: d.country },
                      { icon: Package, label: t("opp.estLeadTime") || "Lead Time", value: "15–30 days" },
                    ].map((info) => (
                      <div key={info.label} className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-lg bg-gold/10 text-gold grid place-items-center shrink-0">
                          <info.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{info.label}</div>
                          <div className="text-sm font-medium text-[var(--navy)] dark:text-foreground">{info.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[var(--gold-foreground)] hover:brightness-110 shadow-gold"
                    >
                      <Mail className="h-4 w-4" />
                      {t("common.contactSeller") || "Contact Seller"}
                    </Link>
                    <a
                      href="https://wa.me/447700000000?text=I'm%20interested%20in%20this%20opportunity"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-gold/40 text-gold px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-gold hover:text-[var(--gold-foreground)]"
                    >
                      <Phone className="h-4 w-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </section>
    </>
  );
}
