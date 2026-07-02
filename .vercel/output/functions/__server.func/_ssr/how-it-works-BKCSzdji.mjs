import { P as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useI18n } from "./i18n-D6bSP8Dt.mjs";
import { I as Earth, M as ArrowRight, S as HandCoins, b as Lightbulb, i as Truck, j as Briefcase, l as ShieldCheck } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/how-it-works-BKCSzdji.js
var import_jsx_runtime = require_jsx_runtime();
function HowItWorks() {
	const { t } = useI18n();
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-x py-16",
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
	});
}
//#endregion
export { HowItWorks as component };
