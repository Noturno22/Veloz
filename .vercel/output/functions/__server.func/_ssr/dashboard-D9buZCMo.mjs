import { o as __toESM } from "../_runtime.mjs";
import { A as require_react, d as Link, f as useNavigate, k as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useI18n } from "./i18n-CHWotKir.mjs";
import { E as Handshake, I as ChartColumn, N as Earth, S as LogOut, o as TrendingUp, r as UserRound, z as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as auth } from "./firebase-BZtSKUGz.mjs";
import { n as useAuth } from "./auth-Dk7WZauZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-D9buZCMo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DashboardPage() {
	const { t } = useI18n();
	const { user, loading, logout } = useAuth();
	const navigate = useNavigate();
	const redirected = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (!loading && !user && !auth.currentUser && !redirected.current) {
			redirected.current = true;
			navigate({ to: "/login" });
		}
	}, [
		user,
		loading,
		navigate
	]);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[calc(100vh-6rem)] items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-8 animate-spin rounded-full border-4 border-gold border-t-transparent" })
	});
	if (!user && !auth.currentUser) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-[calc(100vh-6rem)] py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl text-[color:var(--navy)] dark:text-foreground",
						children: t("dash.title")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground mt-1",
						children: t("dash.welcome").replace("{name}", user.email ?? "")
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-gold transition-colors",
							children: t("nav.home")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: logout,
							className: "inline-flex items-center gap-2 border border-border px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-foreground/60 hover:text-red-500 hover:border-red-500/30 transition-all rounded-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-3.5 w-3.5" }), t("dash.logout")]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8",
					children: [
						{
							icon: ChartColumn,
							label: t("dash.totalVolume"),
							value: "US$ 2.8B+"
						},
						{
							icon: Handshake,
							label: t("dash.activeTx"),
							value: "1,200+"
						},
						{
							icon: Earth,
							label: t("dash.marketsAccess"),
							value: "50+"
						},
						{
							icon: TrendingUp,
							label: t("dash.globalPartners"),
							value: "850+"
						}
					].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-card border border-border p-5 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-3 mb-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-10 w-10 rounded-full bg-gold-soft text-gold grid place-items-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(k.icon, { className: "h-5 w-5" })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-2xl font-display text-[color:var(--navy)] dark:text-foreground",
								children: k.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground mt-1",
								children: k.label
							})
						]
					}, k.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-3 gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-2 rounded-2xl bg-card border border-border p-6 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl text-[color:var(--navy)] dark:text-foreground mb-4",
							children: t("dash.profile")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 p-3 rounded-lg bg-muted/50",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "h-5 w-5 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-medium text-foreground",
									children: user.email
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 p-3 rounded-lg bg-muted/50",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldIcon, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: "UID"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-medium text-foreground text-xs font-mono",
									children: user.uid
								})] })]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-card border border-border p-6 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl text-[color:var(--navy)] dark:text-foreground mb-4",
							children: "Quick Links"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2",
							children: [
								{
									to: "/opportunities",
									label: t("common.exploreOpportunities")
								},
								{
									to: "/commodities",
									label: t("nav.commodities")
								},
								{
									to: "/partnership",
									label: t("nav.partnership")
								},
								{
									to: "/contact",
									label: t("common.contactUs")
								}
							].map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: link.to,
								className: "flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium text-foreground/80 group-hover:text-gold transition-colors",
									children: link.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-muted-foreground group-hover:text-gold transition-colors" })]
							}, link.to))
						})]
					})]
				})
			]
		})
	});
}
function ShieldIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		className: "h-5 w-5 text-gold",
		fill: "none",
		viewBox: "0 0 24 24",
		stroke: "currentColor",
		strokeWidth: 2,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			strokeLinecap: "round",
			strokeLinejoin: "round",
			d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
		})
	});
}
//#endregion
export { DashboardPage as component };
