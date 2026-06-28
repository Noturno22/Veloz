import { d as Link, k as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useI18n } from "./i18n-CmMji885.mjs";
import { t as PageHero } from "./PageHero-CfQLEDlK.mjs";
import { c as Target, j as Eye, u as Sparkles, z as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-Dukp7xFK.js
var import_jsx_runtime = require_jsx_runtime();
function SectionHeading({ eyebrow, title, description, center, light }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `max-w-2xl ${center ? "mx-auto text-center" : ""}`,
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `text-xs font-semibold uppercase tracking-[0.28em] ${light ? "text-gold" : "text-gold"}`,
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: `mt-3 font-display text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-[1.1] ${light ? "text-white" : "text-foreground"}`,
				children: title
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-4 text-base md:text-lg ${light ? "text-white/75" : "text-muted-foreground"}`,
				children: description
			})
		]
	});
}
function About() {
	const { t } = useI18n();
	const VALUES = [
		"values.transparency",
		"values.integrity",
		"values.efficiency",
		"values.innovation",
		"values.trust"
	];
	const CARDS = [
		{
			icon: Target,
			titleKey: "about.mission.t",
			descKey: "about.mission.d"
		},
		{
			icon: Eye,
			titleKey: "about.vision.t",
			descKey: "about.vision.d"
		},
		{
			icon: Sparkles,
			titleKey: "about.promise.t",
			descKey: "about.promise.d"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: t("about.eyebrow"),
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				t("about.titleA"),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gold",
					children: t("about.titleB")
				})
			] }),
			description: t("about.desc")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x py-16 grid lg:grid-cols-3 gap-6",
			children: CARDS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hover-lift rounded-2xl border border-border bg-white p-7 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-[color:var(--gold-foreground)] shadow-gold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-6 w-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 font-display text-xl font-semibold text-[color:var(--navy)]",
						children: t(c.titleKey)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: t(c.descKey)
					})
				]
			}, c.titleKey))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x py-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl bg-gradient-navy p-10 lg:p-14 text-white shadow-elegant",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: t("about.values.eyebrow"),
					title: t("about.values.title"),
					light: true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-4",
					children: VALUES.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl border border-white/15 bg-white/5 p-5 text-center backdrop-blur-sm hover:bg-white/10 transition",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-xl font-semibold text-gold",
							children: t(v)
						})
					}, v))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2 gap-10 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: t("about.story.eyebrow"),
					title: t("about.story.title"),
					description: t("about.story.desc")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					className: "mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-6 py-3 text-sm font-semibold text-[color:var(--gold-foreground)] shadow-gold",
					children: [
						t("common.getInTouch"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-4",
					children: [
						{
							v: "50+",
							l: t("stats.countriesShort")
						},
						{
							v: "1,200+",
							l: t("stats.transactions")
						},
						{
							v: "850+",
							l: t("stats.partnersShort")
						},
						{
							v: "$2.8B+",
							l: t("stats.volumeShort")
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-white p-6 text-center shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-3xl font-bold text-[color:var(--navy)]",
							children: s.v
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-wider text-muted-foreground mt-1",
							children: s.l
						})]
					}, s.l))
				})]
			})
		})
	] });
}
//#endregion
export { About as component };
