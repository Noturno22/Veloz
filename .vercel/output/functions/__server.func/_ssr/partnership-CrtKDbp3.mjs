import { A as require_jsx_runtime, d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useI18n } from "./i18n-D6t2vZen.mjs";
import { t as PageHero } from "./PageHero-CfQLEDlK.mjs";
import { P as ArrowRight, k as CircleCheck } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/partnership-CrtKDbp3.js
var import_jsx_runtime = require_jsx_runtime();
function Partnership() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: t("partner.eyebrow"),
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				t("partner.titleA"),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gold",
					children: t("partner.titleB")
				})
			] }),
			description: t("partner.desc")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x py-16 grid gap-6 md:grid-cols-3",
			children: [
				{
					titleKey: "partner.t1.title",
					textKey: "partner.t1.text",
					perks: [
						"partner.t1.p1",
						"partner.t1.p2",
						"partner.t1.p3"
					]
				},
				{
					titleKey: "partner.t2.title",
					textKey: "partner.t2.text",
					perks: [
						"partner.t2.p1",
						"partner.t2.p2",
						"partner.t2.p3"
					]
				},
				{
					titleKey: "partner.t3.title",
					textKey: "partner.t3.text",
					perks: [
						"partner.t3.p1",
						"partner.t3.p2",
						"partner.t3.p3"
					]
				}
			].map((tier) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hover-lift rounded-2xl border border-border bg-white p-7 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-semibold text-[color:var(--navy)]",
						children: t(tier.titleKey)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: t(tier.textKey)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-2 text-sm",
						children: tier.perks.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 mt-0.5 text-[color:var(--success)]" }),
								" ",
								t(p)
							]
						}, p))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-[color:var(--gold-foreground)] shadow-gold",
						children: [
							t("common.apply"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
						]
					})
				]
			}, tier.titleKey))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x pb-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-white p-8 shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold uppercase tracking-[0.32em] text-gold",
						children: t("partner.trusted.eyebrow")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-2xl md:text-3xl font-bold text-[color:var(--navy)]",
						children: t("partner.trusted.title")
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6",
					children: [
						"Nordbridge",
						"AuriCo",
						"MeridianAg",
						"Sahara Energy",
						"PortusLog",
						"ZenithSteel"
					].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-16 place-items-center rounded-xl bg-[color:var(--accent)] text-sm font-semibold tracking-wider text-[color:var(--navy)]/70",
						children: n.toUpperCase()
					}, n))
				})]
			})
		})
	] });
}
//#endregion
export { Partnership as component };
