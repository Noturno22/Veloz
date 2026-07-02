import { r as __toESM } from "../_runtime.mjs";
import { F as require_react, P as require_jsx_runtime, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useI18n } from "./i18n-CPgOiQ-I.mjs";
import { t as PageHero } from "./PageHero-BEUWKfMs.mjs";
import { B as ArrowRight, C as Mail, L as Building2, S as MapPin, d as ShieldCheck, f as Search, g as Package, h as Phone, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/opportunities-DvOnWu2p.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CAT_COLORS = {
	Agricultural: "bg-emerald-100 text-emerald-800",
	Minerals: "bg-amber-100 text-amber-800",
	Energy: "bg-orange-100 text-orange-800",
	Industrial: "bg-slate-200 text-slate-800"
};
var DEALS = [
	{
		id: "coffee",
		titleKey: "opp.title.coffeeExport",
		routeKey: "opp.route.angolaEurope",
		qtyKey: "opp.qty.coffee",
		typeKey: "opp.type.export",
		cat: "Agricultural",
		catKey: "comm.agricultural",
		country: "Angola"
	},
	{
		id: "crude",
		titleKey: "opp.title.crudeOilSupply",
		routeKey: "opp.route.middleEastGlobal",
		qtyKey: "opp.qty.oil",
		typeKey: "opp.type.supply",
		cat: "Energy",
		catKey: "comm.energy",
		country: "UAE"
	},
	{
		id: "steel",
		titleKey: "opp.title.steelProducts",
		routeKey: "opp.route.chinaAfrica",
		qtyKey: "opp.qty.steel",
		typeKey: "opp.type.import",
		cat: "Industrial",
		catKey: "comm.industrial",
		country: "China"
	},
	{
		id: "soybeans",
		titleKey: "opp.title.soybeansBulk",
		routeKey: "opp.route.brazilChina",
		qtyKey: "opp.qty.soybeans",
		typeKey: "opp.type.export",
		cat: "Agricultural",
		catKey: "comm.agricultural",
		country: "Brazil"
	},
	{
		id: "copper",
		titleKey: "opp.title.copperCathodes",
		routeKey: "opp.route.zambiaEurope",
		qtyKey: "opp.qty.copper",
		typeKey: "opp.type.export",
		cat: "Minerals",
		catKey: "comm.minerals",
		country: "Zambia"
	}
];
function Opportunities() {
	const { t } = useI18n();
	const [search, setSearch] = (0, import_react.useState)("");
	const [commodity, setCommodity] = (0, import_react.useState)("");
	const [country, setCountry] = (0, import_react.useState)("");
	const [quantity, setQuantity] = (0, import_react.useState)("");
	const [tradeType, setTradeType] = (0, import_react.useState)("");
	const [expandedId, setExpandedId] = (0, import_react.useState)(null);
	const filtered = DEALS.filter((d) => {
		if (search && !t(d.titleKey).toLowerCase().includes(search.toLowerCase())) return false;
		if (commodity && d.cat !== commodity) return false;
		if (country && d.country !== country) return false;
		if (tradeType && d.typeKey !== tradeType) return false;
		return true;
	});
	function toggleExpand(id) {
		setExpandedId((prev) => prev === id ? null : id);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: t("opp.eyebrow"),
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				t("opp.titleA"),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gold",
					children: t("opp.titleB")
				})
			] }),
			description: t("opp.desc")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-white dark:bg-card p-4 shadow-card grid gap-3 md:grid-cols-[1fr_auto_auto_auto_auto] md:items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: search,
							onChange: (e) => setSearch(e.target.value),
							placeholder: t("opp.search"),
							className: "w-full rounded-lg border border-input pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: commodity,
						onChange: (e) => setCommodity(e.target.value),
						className: "rounded-lg border border-input bg-white dark:bg-card px-3 py-2.5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: t("opp.allCommodities")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "Agricultural",
								children: t("comm.agricultural")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "Minerals",
								children: t("comm.minerals")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "Energy",
								children: t("comm.energy")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "Industrial",
								children: t("comm.industrial")
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: country,
						onChange: (e) => setCountry(e.target.value),
						className: "rounded-lg border border-input bg-white dark:bg-card px-3 py-2.5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: t("opp.anyCountry")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Angola" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Brazil" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "China" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Zambia" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "UAE" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: quantity,
						onChange: (e) => setQuantity(e.target.value),
						className: "rounded-lg border border-input bg-white dark:bg-card px-3 py-2.5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: t("opp.anyQty")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "small",
								children: t("opp.qtySmall")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "large",
								children: t("opp.qtyLarge")
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						value: tradeType,
						onChange: (e) => setTradeType(e.target.value),
						className: "rounded-lg border border-input bg-white dark:bg-card px-3 py-2.5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: t("opp.anyType")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "opp.type.export",
								children: t("opp.type.export")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "opp.type.import",
								children: t("opp.type.import")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "opp.type.supply",
								children: t("opp.type.supply")
							})
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x pb-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
			children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-span-full text-center py-20 text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "mx-auto h-12 w-12 mb-4 opacity-30" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg font-medium",
						children: t("opp.noResults") || "No opportunities match your filters."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							setSearch("");
							setCommodity("");
							setCountry("");
							setQuantity("");
							setTradeType("");
						},
						className: "mt-3 text-sm text-gold hover:underline",
						children: t("opp.clearFilters") || "Clear filters"
					})
				]
			}) : filtered.map((d) => {
				const isOpen = expandedId === d.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: `flex flex-col rounded-2xl border bg-white dark:bg-card shadow-card transition-all duration-300 ${isOpen ? "border-gold/40 shadow-elegant col-span-full md:col-span-2 lg:col-span-3" : "border-border hover-lift"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `p-6 ${isOpen ? "pb-4" : ""}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `text-xs font-semibold uppercase tracking-wider rounded-full px-2.5 py-1 ${CAT_COLORS[d.cat]}`,
									children: t(d.catKey)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold text-gold",
									children: t(d.typeKey)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-xl font-semibold text-[color:var(--navy)] dark:text-foreground",
								children: t(d.titleKey)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 space-y-2 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 shrink-0 text-gold" }), t(d.routeKey)]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-4 w-4 shrink-0 text-gold" }), t(d.qtyKey)]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => toggleExpand(d.id),
								className: `mt-6 w-full inline-flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold ${isOpen ? "bg-muted text-foreground" : "bg-gold text-[var(--gold-foreground)] hover:brightness-110 shadow-gold"}`,
								children: [isOpen ? t("common.close") || "Close" : t("common.viewOpportunity"), isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						]
					}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-border px-6 py-5 animate-fadeIn",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5",
							children: [
								{
									icon: Building2,
									label: t("opp.ref") || "Reference",
									value: `#VEL-${d.id.toUpperCase()}-2026`
								},
								{
									icon: ShieldCheck,
									label: t("opp.verified") || "Verified",
									value: t("opp.verifiedBadge") || "Seller Verified"
								},
								{
									icon: MapPin,
									label: t("opp.origin") || "Origin",
									value: d.country
								},
								{
									icon: Package,
									label: t("opp.estLeadTime") || "Lead Time",
									value: "15–30 days"
								}
							].map((info) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-8 w-8 rounded-lg bg-gold/10 text-gold grid place-items-center shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(info.icon, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold",
									children: info.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-medium text-[var(--navy)] dark:text-foreground",
									children: info.value
								})] })]
							}, info.label))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								className: "inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[var(--gold-foreground)] hover:brightness-110 shadow-gold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), t("common.contactSeller") || "Contact Seller"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://wa.me/447700000000?text=I'm%20interested%20in%20this%20opportunity",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-2 rounded-xl border border-gold/40 text-gold px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-gold hover:text-[var(--gold-foreground)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), "WhatsApp"]
							})]
						})]
					})]
				}, d.id);
			})
		})
	] });
}
//#endregion
export { Opportunities as component };
