import { o as __toESM } from "../_runtime.mjs";
import { F as require_react, P as require_jsx_runtime, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useI18n } from "./i18n-D6bSP8Dt.mjs";
import { t as PageHero } from "./PageHero-CfQLEDlK.mjs";
import { I as Earth, M as ArrowRight, a as TrendingUp, x as Handshake, z as ChartColumn } from "../_libs/lucide-react.mjs";
import { i as commodity_minerals_default, n as commodity_energy_default, r as commodity_industrial_default, t as commodity_agricultural_default } from "./commodity-industrial-CTVYvm41.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/commodities-DTGPgQxY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATEGORIES = [
	{
		id: "agri",
		titleKey: "commPage.agri.title",
		img: commodity_agricultural_default,
		color: "emerald"
	},
	{
		id: "min",
		titleKey: "commPage.min.title",
		img: commodity_minerals_default,
		color: "amber"
	},
	{
		id: "ene",
		titleKey: "commPage.ene.title",
		img: commodity_energy_default,
		color: "orange"
	},
	{
		id: "ind",
		titleKey: "commPage.ind.title",
		img: commodity_industrial_default,
		color: "slate"
	}
];
var CAT_COLORS = {
	emerald: {
		border: "border-emerald-500/20",
		bg: "bg-emerald-50 dark:bg-emerald-950/20",
		text: "text-emerald-700 dark:text-emerald-400",
		tag: "border-emerald-200 dark:border-emerald-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
	},
	amber: {
		border: "border-amber-500/20",
		bg: "bg-amber-50 dark:bg-amber-950/20",
		text: "text-amber-700 dark:text-amber-400",
		tag: "border-amber-200 dark:border-amber-800 hover:bg-amber-50 dark:hover:bg-amber-900/30"
	},
	orange: {
		border: "border-orange-500/20",
		bg: "bg-orange-50 dark:bg-orange-950/20",
		text: "text-orange-700 dark:text-orange-400",
		tag: "border-orange-200 dark:border-orange-800 hover:bg-orange-50 dark:hover:bg-orange-900/30"
	},
	slate: {
		border: "border-slate-500/20",
		bg: "bg-slate-50 dark:bg-slate-950/20",
		text: "text-slate-700 dark:text-slate-400",
		tag: "border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900/30"
	}
};
function Commodities() {
	const { t } = useI18n();
	const [activeTab, setActiveTab] = (0, import_react.useState)("");
	const GROUPS = [
		{
			id: "agri",
			titleKey: "commPage.agri.title",
			descKey: "commPage.agri.desc",
			img: commodity_agricultural_default,
			itemKeys: [
				"comm.item.coffee",
				"comm.item.soybeans",
				"comm.item.corn",
				"comm.item.rice",
				"comm.item.cocoa",
				"comm.item.sugar"
			],
			stats: [
				{
					icon: ChartColumn,
					label: "Volume",
					value: "US$ 840M+"
				},
				{
					icon: Handshake,
					label: "Active Deals",
					value: "340+"
				},
				{
					icon: Earth,
					label: "Markets",
					value: "28"
				}
			]
		},
		{
			id: "min",
			titleKey: "commPage.min.title",
			descKey: "commPage.min.desc",
			img: commodity_minerals_default,
			itemKeys: [
				"comm.item.copper",
				"comm.item.ironOre",
				"comm.item.manganese",
				"comm.item.bauxite"
			],
			stats: [
				{
					icon: ChartColumn,
					label: "Volume",
					value: "US$ 620M+"
				},
				{
					icon: Handshake,
					label: "Active Deals",
					value: "210+"
				},
				{
					icon: Earth,
					label: "Markets",
					value: "22"
				}
			]
		},
		{
			id: "ene",
			titleKey: "commPage.ene.title",
			descKey: "commPage.ene.desc",
			img: commodity_energy_default,
			itemKeys: [
				"comm.item.crudeOil",
				"comm.item.naturalGas",
				"comm.item.lpg",
				"comm.item.diesel",
				"comm.item.jetFuel"
			],
			stats: [
				{
					icon: ChartColumn,
					label: "Volume",
					value: "US$ 1.2B+"
				},
				{
					icon: Handshake,
					label: "Active Deals",
					value: "180+"
				},
				{
					icon: Earth,
					label: "Markets",
					value: "35"
				}
			]
		},
		{
			id: "ind",
			titleKey: "commPage.ind.title",
			descKey: "commPage.ind.desc",
			img: commodity_industrial_default,
			itemKeys: [
				"comm.item.steel",
				"comm.item.aluminum",
				"comm.item.cement",
				"comm.item.constructionMaterials"
			],
			stats: [
				{
					icon: ChartColumn,
					label: "Volume",
					value: "US$ 480M+"
				},
				{
					icon: Handshake,
					label: "Active Deals",
					value: "150+"
				},
				{
					icon: Earth,
					label: "Markets",
					value: "18"
				}
			]
		}
	];
	GROUPS.find((g) => g.id === activeTab);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: t("commPage.eyebrow"),
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				t("commPage.titleA"),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gold",
					children: t("commPage.titleB")
				})
			] }),
			description: t("commPage.desc")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x -mt-6 mb-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl bg-card border border-border shadow-card p-6 grid grid-cols-2 md:grid-cols-4 gap-4",
				children: [
					{
						icon: Earth,
						value: "103",
						label: t("commPage.statMarkets") || "Markets Served"
					},
					{
						icon: Handshake,
						value: "880+",
						label: t("commPage.statDeals") || "Active Deals"
					},
					{
						icon: TrendingUp,
						value: "US$ 3.1B+",
						label: t("commPage.statVolume") || "Annual Volume"
					},
					{
						icon: ChartColumn,
						value: "18",
						label: t("commPage.statCommodities") || "Commodities"
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-10 w-10 rounded-xl bg-gold-soft text-gold grid place-items-center shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-xl text-[color:var(--navy)] dark:text-foreground",
						children: s.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] text-muted-foreground",
						children: s.label
					})] })]
				}, s.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "sticky top-20 z-20 container-x mb-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-card border border-border shadow-card p-1.5 flex gap-1 overflow-x-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setActiveTab(""),
					className: `px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all whitespace-nowrap ${!activeTab ? "bg-gold text-[var(--gold-foreground)] shadow-gold" : "text-muted-foreground hover:text-foreground"}`,
					children: t("commPage.all") || "All"
				}), CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setActiveTab(c.id),
					className: `px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all whitespace-nowrap ${activeTab === c.id ? "bg-gold text-[var(--gold-foreground)] shadow-gold" : "text-muted-foreground hover:text-foreground"}`,
					children: t(c.titleKey)
				}, c.id))]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x pb-20 space-y-12",
			children: GROUPS.filter((g) => !activeTab || g.id === activeTab).map((g, i) => {
				const cc = CAT_COLORS[g.id === "agri" ? "emerald" : g.id === "min" ? "amber" : g.id === "ene" ? "orange" : "slate"];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `rounded-3xl ${cc.bg} border ${cc.border} overflow-hidden shadow-card`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `relative overflow-hidden h-64 lg:h-full min-h-[300px] ${i % 2 ? "lg:order-2" : ""}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: g.img,
									alt: t(g.titleKey),
									className: "absolute inset-0 w-full h-full object-cover",
									loading: "lazy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute bottom-4 left-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: `text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${cc.text} bg-white/90 dark:bg-black/50 backdrop-blur-sm`,
										children: [
											t("commPage.category"),
											" ",
											String(i + 1).padStart(2, "0")
										]
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-8 lg:p-10 flex flex-col justify-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-3xl md:text-4xl font-bold text-[color:var(--navy)] dark:text-foreground",
									children: t(g.titleKey)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-muted-foreground",
									children: t(g.descKey)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 grid grid-cols-3 gap-4",
									children: g.stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5 text-gold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-semibold text-muted-foreground",
											children: s.label
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-lg text-[color:var(--navy)] dark:text-foreground",
										children: s.value
									})] }, s.label))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 flex flex-wrap gap-2",
									children: g.itemKeys.map((itk) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/opportunities",
										className: `rounded-full border ${cc.tag} px-4 py-1.5 text-sm font-medium text-foreground/80 transition-all`,
										children: t(itk)
									}, itk))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/opportunities",
									className: "mt-6 inline-flex items-center gap-2 self-start rounded-xl bg-gold px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[var(--gold-foreground)] hover:brightness-110 transition-all shadow-gold",
									children: [
										t("common.exploreOpportunities"),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
									]
								})
							]
						})]
					})
				}, g.id);
			})
		})
	] });
}
//#endregion
export { Commodities as component };
