import { P as require_jsx_runtime, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useI18n } from "./i18n-D6bSP8Dt.mjs";
import { E as ExternalLink, M as ArrowRight, R as ChartLine, _ as MapPin, f as Package, s as Target, v as Mail } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-DyHOhv_c.js
var import_jsx_runtime = require_jsx_runtime();
function DashboardPage() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-[calc(100vh-6rem)] py-16 relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 opacity-[0.015] pointer-events-none",
				style: { backgroundImage: "radial-gradient(circle at 25% 25%, var(--gold) 0%, transparent 50%), radial-gradient(circle at 75% 75%, var(--brand-blue) 0%, transparent 50%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x relative z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-14 w-14 rounded-2xl bg-gradient-gold text-[var(--gold-foreground)] grid place-items-center shadow-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartLine, { className: "h-7 w-7" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-3xl text-[color:var(--navy)] dark:text-foreground",
							children: t("dash.title")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground mt-0.5 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartLine, { className: "h-3.5 w-3.5 text-gold" }), "Your trading command center"]
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-gold transition-colors px-3 py-2 rounded-lg hover:bg-muted/50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5" }), t("nav.home")]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-w-lg mx-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-card border border-border p-6 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-xl text-[color:var(--navy)] dark:text-foreground mb-5 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartLine, { className: "h-5 w-5 text-gold" }), t("dash.quickLinks")]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2.5",
							children: [
								{
									to: "/opportunities",
									label: t("common.exploreOpportunities"),
									icon: Package
								},
								{
									to: "/commodities",
									label: t("nav.commodities"),
									icon: MapPin
								},
								{
									to: "/partnership",
									label: t("nav.partnership"),
									icon: Target
								},
								{
									to: "/contact",
									label: t("common.contactUs"),
									icon: Mail
								}
							].map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: link.to,
								className: "flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 border border-transparent transition-all group",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-9 w-9 rounded-lg bg-gold-soft text-gold grid place-items-center shrink-0 group-hover:bg-gold group-hover:text-[var(--gold-foreground)] transition-all",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(link.icon, { className: "h-4 w-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex-1 min-w-0",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-semibold text-foreground group-hover:text-gold transition-colors",
											children: link.label
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-muted-foreground group-hover:text-gold transition-colors shrink-0" })
								]
							}, link.to))
						})]
					})
				})]
			})
		]
	});
}
//#endregion
export { DashboardPage as component };
