import { k as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useI18n } from "./i18n-CmMji885.mjs";
import { t as PageHero } from "./PageHero-CfQLEDlK.mjs";
import { i as commodity_minerals_default, n as commodity_energy_default, r as commodity_industrial_default, t as commodity_agricultural_default } from "./commodity-industrial-CTVYvm41.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/commodities-BNGTAxhx.js
var import_jsx_runtime = require_jsx_runtime();
function Commodities() {
	const { t } = useI18n();
	const GROUPS = [
		{
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
			]
		},
		{
			titleKey: "commPage.min.title",
			descKey: "commPage.min.desc",
			img: commodity_minerals_default,
			itemKeys: [
				"comm.item.gold",
				"comm.item.diamonds",
				"comm.item.copper",
				"comm.item.ironOre",
				"comm.item.manganese",
				"comm.item.bauxite"
			]
		},
		{
			titleKey: "commPage.ene.title",
			descKey: "commPage.ene.desc",
			img: commodity_energy_default,
			itemKeys: [
				"comm.item.crudeOil",
				"comm.item.naturalGas",
				"comm.item.lpg",
				"comm.item.diesel",
				"comm.item.jetFuel"
			]
		},
		{
			titleKey: "commPage.ind.title",
			descKey: "commPage.ind.desc",
			img: commodity_industrial_default,
			itemKeys: [
				"comm.item.steel",
				"comm.item.aluminum",
				"comm.item.cement",
				"comm.item.constructionMaterials"
			]
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
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
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "container-x py-16 space-y-10",
		children: GROUPS.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `grid lg:grid-cols-2 gap-8 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-3xl shadow-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: g.img,
					alt: t(g.titleKey),
					className: "w-full h-72 lg:h-96 object-cover hover:scale-105 transition duration-700",
					loading: "lazy"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-xs font-semibold uppercase tracking-[0.28em] text-gold",
					children: [
						t("commPage.category"),
						" ",
						String(i + 1).padStart(2, "0")
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl md:text-4xl font-bold text-[color:var(--navy)]",
					children: t(g.titleKey)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted-foreground",
					children: t(g.descKey)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 flex flex-wrap gap-2",
					children: g.itemKeys.map((itk) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-border bg-white px-4 py-1.5 text-sm font-medium text-foreground/80",
						children: t(itk)
					}, itk))
				})
			] })]
		}, g.titleKey))
	})] });
}
//#endregion
export { Commodities as component };
