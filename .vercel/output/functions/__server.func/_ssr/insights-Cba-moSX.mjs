import { k as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useI18n } from "./i18n-CmMji885.mjs";
import { t as PageHero } from "./PageHero-CfQLEDlK.mjs";
import { z as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/insights-Cba-moSX.js
var import_jsx_runtime = require_jsx_runtime();
function Insights() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: t("insights.eyebrow"),
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				t("insights.titleA"),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gold",
					children: t("insights.titleB")
				})
			] }),
			description: t("insights.desc")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x py-10 flex flex-wrap gap-2",
			children: [
				"insights.cat.all",
				"insights.cat.market",
				"insights.cat.export",
				"insights.cat.import",
				"insights.cat.energy",
				"insights.cat.agri"
			].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: `rounded-full px-4 py-2 text-sm font-medium border transition ${i === 0 ? "bg-[color:var(--brand-green)] text-white border-[color:var(--brand-green)]" : "border-border bg-card hover:border-gold"}`,
				children: t(c)
			}, c))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x pb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
			children: [
				{
					catKey: "insights.cat.market",
					titleKey: "insights.p1",
					date: "Jun 12, 2026",
					read: "5"
				},
				{
					catKey: "insights.cat.energy",
					titleKey: "insights.p2",
					date: "Jun 04, 2026",
					read: "6"
				},
				{
					catKey: "insights.cat.agri",
					titleKey: "insights.p3",
					date: "May 28, 2026",
					read: "4"
				},
				{
					catKey: "insights.cat.export",
					titleKey: "insights.p4",
					date: "May 19, 2026",
					read: "7"
				},
				{
					catKey: "insights.cat.import",
					titleKey: "insights.p5",
					date: "May 02, 2026",
					read: "5"
				},
				{
					catKey: "insights.cat.market",
					titleKey: "insights.p6",
					date: "Apr 21, 2026",
					read: "6"
				}
			].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "hover-lift group overflow-hidden rounded-2xl border border-border bg-white shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "h-44 bg-gradient-navy relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute inset-0 opacity-40",
						style: { background: "radial-gradient(circle at 20% 20%, var(--brand-green) 0%, transparent 60%)" }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[color:var(--navy)]",
						children: t(p.catKey)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-muted-foreground",
							children: [
								p.date,
								" · ",
								p.read,
								" ",
								t("common.minRead")
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-lg font-semibold text-[color:var(--navy)] group-hover:text-gold transition",
							children: t(p.titleKey)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold underline-gold",
							children: [
								t("common.readArticle"),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
							]
						})
					]
				})]
			}, p.titleKey))
		})
	] });
}
//#endregion
export { Insights as component };
