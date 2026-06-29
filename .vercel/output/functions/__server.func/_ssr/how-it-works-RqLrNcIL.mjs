import { k as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useI18n } from "./i18n-CHWotKir.mjs";
import { t as PageHero } from "./PageHero-CfQLEDlK.mjs";
import { D as HandCoins, L as Building2, N as Earth, R as Briefcase, T as Lightbulb, a as Truck, f as ShieldCheck, k as FileCheckCorner, o as TrendingUp, z as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/how-it-works-RqLrNcIL.js
var import_jsx_runtime = require_jsx_runtime();
function HowItWorks() {
	const { t } = useI18n();
	const STEPS = [
		{
			n: "01",
			icon: Building2,
			titleKey: "how.s1.t",
			descKey: "how.s1.d"
		},
		{
			n: "02",
			icon: FileCheckCorner,
			titleKey: "how.s2.t",
			descKey: "how.s2.d"
		},
		{
			n: "03",
			icon: TrendingUp,
			titleKey: "how.s3.t",
			descKey: "how.s3.d"
		}
	];
	const SERVICES = [
		{
			icon: ShieldCheck,
			titleKey: "how.sv1.t",
			descKey: "how.sv1.d"
		},
		{
			icon: Earth,
			titleKey: "how.sv2.t",
			descKey: "how.sv2.d"
		},
		{
			icon: Briefcase,
			titleKey: "how.sv3.t",
			descKey: "how.sv3.d"
		},
		{
			icon: Lightbulb,
			titleKey: "how.sv4.t",
			descKey: "how.sv4.d"
		},
		{
			icon: HandCoins,
			titleKey: "how.sv5.t",
			descKey: "how.sv5.d"
		},
		{
			icon: Truck,
			titleKey: "how.sv6.t",
			descKey: "how.sv6.d"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: t("how.eyebrow"),
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				t("how.titleA"),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gold",
					children: t("how.titleB")
				})
			] }),
			description: t("how.desc")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: STEPS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative rounded-2xl border border-border bg-white p-7 shadow-card hover-lift",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -top-3 right-6 rounded-full bg-gradient-gold px-3 py-1 text-xs font-bold text-[color:var(--gold-foreground)] shadow-gold",
							children: s.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
							className: "h-9 w-9 text-[color:var(--navy)]",
							strokeWidth: 1.5
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 font-display text-xl font-semibold text-[color:var(--navy)]",
							children: t(s.titleKey)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: t(s.descKey)
						})
					]
				}, s.n))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-semibold uppercase tracking-[0.32em] text-gold",
					children: t("how.services.eyebrow")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl md:text-4xl font-bold text-[color:var(--navy)]",
					children: t("how.services.title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hover-lift group rounded-2xl border border-border bg-white p-6 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--gold-soft)] text-[color:var(--navy)] group-hover:bg-gradient-gold group-hover:text-[color:var(--gold-foreground)] transition",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-6 w-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-display text-lg font-semibold text-[color:var(--navy)]",
								children: t(s.titleKey)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: t(s.descKey)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-gold underline-gold",
								children: [
									t("common.learnMore"),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })
								]
							})
						]
					}, s.titleKey))
				})
			]
		})
	] });
}
//#endregion
export { HowItWorks as component };
