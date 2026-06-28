import { o as __toESM } from "../_runtime.mjs";
import { A as require_react, d as Link, k as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useI18n } from "./i18n-CmMji885.mjs";
import { E as Handshake, I as ChartColumn, L as Building2, N as Earth, R as Briefcase, f as ShieldCheck, o as TrendingUp, z as ArrowRight } from "../_libs/lucide-react.mjs";
import { i as commodity_minerals_default, n as commodity_energy_default, r as commodity_industrial_default, t as commodity_agricultural_default } from "./commodity-industrial-CTVYvm41.mjs";
import { i as submitRegister, n as registerSchema } from "./api-gHQS2iF6.mjs";
import { t as hero_trading_default } from "./hero-trading-Dc-vF-GR.mjs";
import { a as Marker, i as Line, n as Geographies, r as Geography$1, t as ComposableMap } from "../_libs/react-simple-maps+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BgdaCAWv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
var HUBS = [
	{
		name: "New York",
		coords: [-74.006, 40.7128]
	},
	{
		name: "São Paulo",
		coords: [-46.6333, -23.5505]
	},
	{
		name: "Geneva",
		coords: [6.1432, 46.2044]
	},
	{
		name: "Luanda",
		coords: [13.2343, -8.8383]
	},
	{
		name: "Dubai",
		coords: [55.2708, 25.2048]
	},
	{
		name: "Singapore",
		coords: [103.8198, 1.3521]
	},
	{
		name: "Shanghai",
		coords: [121.4737, 31.2304]
	}
];
var ROUTES = [
	[3, 1],
	[3, 2],
	[3, 4],
	[4, 5],
	[5, 6],
	[2, 0],
	[0, 1]
];
function WorldMap() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComposableMap, {
			projection: "geoEqualEarth",
			projectionConfig: { scale: 155 },
			style: {
				width: "100%",
				height: "auto"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Geographies, {
					geography: GEO_URL,
					children: ({ geographies }) => geographies.map((geo) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Geography$1, {
						geography: geo,
						fill: "var(--gold-soft)",
						stroke: "var(--gold)",
						strokeOpacity: .35,
						strokeWidth: .4,
						style: {
							default: { outline: "none" },
							hover: {
								fill: "color-mix(in oklab, var(--gold) 35%, transparent)",
								outline: "none"
							},
							pressed: { outline: "none" }
						}
					}, geo.rsmKey))
				}),
				ROUTES.map(([a, b]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
					from: HUBS[a].coords,
					to: HUBS[b].coords,
					stroke: "var(--gold)",
					strokeWidth: 1,
					strokeOpacity: .55,
					strokeLinecap: "round",
					strokeDasharray: "3 4"
				}, `${a}-${b}`)),
				HUBS.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Marker, {
					coordinates: h.coords,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("circle", {
							r: 7,
							fill: "var(--gold)",
							fillOpacity: .18,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
								attributeName: "r",
								values: "4;12;4",
								dur: "2.6s",
								repeatCount: "indefinite",
								begin: `${i * .3}s`
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
								attributeName: "opacity",
								values: "0.6;0;0.6",
								dur: "2.6s",
								repeatCount: "indefinite",
								begin: `${i * .3}s`
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							r: 3,
							fill: "var(--gold)",
							stroke: "#fff",
							strokeWidth: 1
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							y: -10,
							textAnchor: "middle",
							className: "fill-foreground",
							style: {
								fontSize: 7,
								fontWeight: 600,
								letterSpacing: "0.05em"
							},
							children: h.name.toUpperCase()
						})
					]
				}, h.name))
			]
		})
	});
}
function HomePage() {
	const { t } = useI18n();
	const COUNTRIES = [
		"Angola",
		"Nigeria",
		"South Africa",
		"Brazil",
		"China",
		"USA",
		"UAE",
		"Singapore"
	];
	const BIZ_KEYS = [
		"biz.producer",
		"biz.supplier",
		"biz.exporter",
		"biz.importer",
		"biz.investor"
	];
	const STEPS = [
		{
			n: "1",
			icon: Building2,
			titleKey: "steps.s1.title",
			textKey: "steps.s1.text"
		},
		{
			n: "2",
			icon: ShieldCheck,
			titleKey: "steps.s2.title",
			textKey: "steps.s2.text"
		},
		{
			n: "3",
			icon: ChartColumn,
			titleKey: "steps.s3.title",
			textKey: "steps.s3.text"
		}
	];
	const STATS = [
		{
			icon: Earth,
			value: "50+",
			labelKey: "stats.countries"
		},
		{
			icon: Handshake,
			value: "1,200+",
			labelKey: "stats.transactions"
		},
		{
			icon: Briefcase,
			value: "850+",
			labelKey: "stats.partners"
		},
		{
			icon: TrendingUp,
			value: "US$ 2.8B+",
			labelKey: "stats.volume"
		}
	];
	const COMMODITIES = [
		{
			titleKey: "comm.agricultural",
			img: commodity_agricultural_default,
			itemKeys: [
				"comm.item.coffee",
				"comm.item.soybeans",
				"comm.item.corn",
				"comm.item.rice"
			]
		},
		{
			titleKey: "comm.minerals",
			img: commodity_minerals_default,
			itemKeys: [
				"comm.item.gold",
				"comm.item.diamonds",
				"comm.item.copper",
				"comm.item.ironOre"
			]
		},
		{
			titleKey: "comm.energy",
			img: commodity_energy_default,
			itemKeys: ["comm.item.oil", "comm.item.naturalGas"]
		},
		{
			titleKey: "comm.industrial",
			img: commodity_industrial_default,
			itemKeys: [
				"comm.item.steel",
				"comm.item.cement",
				"comm.item.aluminum"
			]
		}
	];
	const MARKET = [
		{
			nameKey: "dash.market.crudeOil",
			nameEn: "Crude Oil",
			price: "$84.45",
			change: "+2.35%",
			up: true
		},
		{
			nameKey: "dash.market.gold",
			nameEn: "Gold",
			price: "$2,395.50",
			change: "+1.25%",
			up: true
		},
		{
			nameKey: "dash.market.copper",
			nameEn: "Copper",
			price: "$9,125.00",
			change: "-0.45%",
			up: false
		},
		{
			nameKey: "dash.market.naturalGas",
			nameEn: "Natural Gas",
			price: "$2.75",
			change: "+3.45%",
			up: true
		}
	];
	const DIST = [
		{
			labelKey: "dash.dist.energy",
			labelEn: "Energy",
			value: 35,
			color: "#3b82f6"
		},
		{
			labelKey: "dash.dist.minerals",
			labelEn: "Minerals",
			value: 25,
			color: "#14b8a6"
		},
		{
			labelKey: "dash.dist.agricultural",
			labelEn: "Agricultural",
			value: 25,
			color: "#10b981"
		},
		{
			labelKey: "dash.dist.industrial",
			labelEn: "Industrial",
			value: 15,
			color: "#6366f1"
		}
	];
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [submitMsg, setSubmitMsg] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	async function handleRegister(e) {
		e.preventDefault();
		setStatus("idle");
		setSubmitMsg("");
		setErrors({});
		const form = new FormData(e.currentTarget);
		const data = {
			fullName: form.get("fullName"),
			companyName: form.get("companyName"),
			email: form.get("email"),
			whatsapp: form.get("whatsapp"),
			country: form.get("country"),
			businessType: form.get("businessType")
		};
		const result = registerSchema.safeParse(data);
		if (!result.success) {
			const fieldErrors = {};
			for (const issue of result.error.issues) {
				const field = issue.path[0];
				fieldErrors[field] = issue.message;
			}
			setErrors(fieldErrors);
			return;
		}
		try {
			await submitRegister(result.data);
			setStatus("success");
			setSubmitMsg(t("form.submitSuccess"));
			e.target.reset();
		} catch (err) {
			setStatus("error");
			setSubmitMsg(err instanceof Error ? err.message : t("form.submitError"));
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden border-b border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "absolute inset-0 opacity-[0.04]",
					style: {
						backgroundImage: "linear-gradient(var(--navy) 1px, transparent 1px), linear-gradient(90deg, var(--navy) 1px, transparent 1px)",
						backgroundSize: "56px 56px"
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative container-x py-12 lg:py-20 grid lg:grid-cols-[1.25fr_1fr] gap-12 items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-6",
							children: t("home.hero.eyebrow")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-[color:var(--navy)] dark:text-foreground",
							children: [
								t("home.hero.titleA"),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								t("home.hero.titleB")
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-foreground/65 leading-relaxed",
							children: t("home.hero.desc")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/partnership",
								className: "group inline-flex items-center gap-3 bg-gold px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--gold-foreground)] hover:brightness-110 shadow-gold transition-all",
								children: [t("common.becomeAPartner"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/opportunities",
								className: "group inline-flex items-center gap-3 border-2 border-[color:var(--navy)]/15 dark:border-white/20 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--navy)] dark:text-foreground hover:border-gold hover:text-gold transition-all",
								children: [t("common.exploreOpportunities"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex -space-x-2",
								children: [
									"var(--brand-green)",
									"#0A192F",
									"#3b82f6",
									"#10b981"
								].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-9 w-9 rounded-full border-2 border-background",
									style: { background: c }
								}, c))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-foreground/60",
								children: [
									t("home.hero.trustedBy"),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-foreground",
										children: "850+"
									}),
									" ",
									t("home.hero.trustedBySuffix")
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 -mx-[1.25rem] md:-mx-[2rem]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-[1.25rem] md:mx-[2rem] overflow-hidden rounded-xl border border-border/30 shadow-elegant",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: hero_trading_default,
									alt: t("home.hero.imgAlt"),
									className: "w-full block",
									fetchPriority: "high"
								})
							})
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:sticky lg:top-28",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-card border border-border shadow-elegant p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-2xl text-[color:var(--navy)] dark:text-foreground",
									children: t("common.joinZentra")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-foreground/60",
									children: t("form.heroIntro")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									className: "mt-6 space-y-3",
									onSubmit: handleRegister,
									noValidate: true,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "reg-name",
												className: "sr-only",
												children: t("form.fullName")
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "reg-name",
												name: "fullName",
												placeholder: t("form.fullName"),
												className: "w-full bg-background border border-border rounded-lg px-4 py-3 text-sm placeholder:text-foreground/40 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition"
											}),
											errors.fullName && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-red-500 mt-1",
												children: t(errors.fullName)
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "reg-company",
												className: "sr-only",
												children: t("form.companyName")
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "reg-company",
												name: "companyName",
												placeholder: t("form.companyName"),
												className: "w-full bg-background border border-border rounded-lg px-4 py-3 text-sm placeholder:text-foreground/40 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition"
											}),
											errors.companyName && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-red-500 mt-1",
												children: t(errors.companyName)
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "reg-email",
												className: "sr-only",
												children: t("form.email")
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "reg-email",
												name: "email",
												type: "email",
												placeholder: t("form.email"),
												className: "w-full bg-background border border-border rounded-lg px-4 py-3 text-sm placeholder:text-foreground/40 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition"
											}),
											errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-red-500 mt-1",
												children: t(errors.email)
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "reg-whatsapp",
												className: "sr-only",
												children: t("form.whatsapp")
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "reg-whatsapp",
												name: "whatsapp",
												placeholder: t("form.whatsapp"),
												className: "w-full bg-background border border-border rounded-lg px-4 py-3 text-sm placeholder:text-foreground/40 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition"
											}),
											errors.whatsapp && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-red-500 mt-1",
												children: t(errors.whatsapp)
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "reg-country",
												className: "sr-only",
												children: t("form.selectCountry")
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												id: "reg-country",
												name: "country",
												className: "w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground/80 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													children: t("form.selectCountry")
												}), COUNTRIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: c,
													children: c
												}, c))]
											}),
											errors.country && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-red-500 mt-1",
												children: t(errors.country)
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												htmlFor: "reg-biz",
												className: "sr-only",
												children: t("form.selectBusinessType")
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												id: "reg-biz",
												name: "businessType",
												className: "w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground/80 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													children: t("form.selectBusinessType")
												}), BIZ_KEYS.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: k,
													children: t(k)
												}, k))]
											}),
											errors.businessType && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-red-500 mt-1",
												children: t(errors.businessType)
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "submit",
											className: "group w-full flex items-center justify-center gap-3 bg-gold rounded-lg px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--gold-foreground)] hover:brightness-110 shadow-gold transition-all",
											children: [t("common.joinZentra"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })]
										}),
										status !== "idle" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: `text-xs rounded-lg px-3 py-2 text-center ${status === "success" ? "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30" : "text-red-500 bg-red-50 dark:bg-red-950/30"}`,
											children: submitMsg
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-center gap-2 text-[11px] text-foreground/50 pt-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-gold" }), t("form.secureGlobal")]
										})
									]
								})
							]
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 bg-muted/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl md:text-4xl text-[color:var(--navy)] dark:text-foreground mb-12",
							children: t("steps.title")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid md:grid-cols-3 gap-6 items-stretch",
							children: STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 group bg-card border border-border rounded-xl p-6 flex items-start gap-5 hover-lift",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-12 w-12 rounded-full border border-gold/40 text-gold grid place-items-center font-display text-xl shrink-0 group-hover:bg-gold group-hover:text-[color:var(--gold-foreground)] transition-all",
										children: s.n
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-6 w-6 text-gold mb-3" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-lg text-[color:var(--navy)] dark:text-foreground",
											children: t(s.titleKey)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm text-foreground/60 leading-relaxed",
											children: t(s.textKey)
										})
									] })]
								}), i < STEPS.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden md:flex items-center px-3 text-gold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5" })
								})]
							}, s.n))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 rounded-2xl bg-card border border-border p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 shadow-card",
							children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-12 w-12 rounded-full bg-gold-soft text-gold grid place-items-center shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-2xl md:text-3xl text-[color:var(--navy)] dark:text-foreground",
									children: s.value
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-foreground/55",
									children: t(s.labelKey)
								})] })]
							}, s.labelKey))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x grid lg:grid-cols-2 gap-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl md:text-4xl text-[color:var(--navy)] dark:text-foreground mb-8",
						children: t("dash.exploreTitle")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-2 gap-5",
						children: COMMODITIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/commodities",
							className: "group block rounded-2xl bg-card border border-border overflow-hidden hover-lift",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative h-40 overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: c.img,
									alt: t(c.titleKey),
									className: "absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700",
									loading: "lazy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-lg text-[color:var(--navy)] dark:text-foreground mb-3",
										children: t(c.titleKey)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-1.5 text-sm text-foreground/70",
										children: c.itemKeys.map((itk) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-gold" }), t(itk)]
										}, itk))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 flex justify-end",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "h-8 w-8 rounded-full bg-gold text-[color:var(--gold-foreground)] grid place-items-center group-hover:translate-x-1 transition-transform",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
										})
									})
								]
							})]
						}, c.titleKey))
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl md:text-4xl text-[color:var(--navy)] dark:text-foreground",
								children: t("home.dashTitle")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-foreground/60 mt-1",
								children: t("home.dashSubtitle")
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [
									{
										label: t("dash.totalVolume"),
										value: "US$ 2.8B+",
										delta: "+18.2%"
									},
									{
										label: t("dash.activeTx"),
										value: "1,200+",
										delta: "+14.7%"
									},
									{
										label: t("dash.globalPartners"),
										value: "850+",
										delta: "+21.3%"
									},
									{
										label: t("dash.marketsAccess"),
										value: "50+",
										delta: "+10.5%"
									}
								].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl bg-card border border-border p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] uppercase tracking-[0.18em] text-foreground/50 font-semibold",
										children: k.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex items-baseline justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-xl text-[color:var(--navy)] dark:text-foreground",
											children: k.value
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] font-bold text-emerald-600",
											children: k.delta
										})]
									})]
								}, k.label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl bg-card border border-border p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-semibold text-[color:var(--navy)] dark:text-foreground",
										children: t("dash.tradingOverview")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-2 text-[10px] uppercase tracking-[0.15em]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "px-2.5 py-1 rounded-full bg-gold/15 text-gold font-bold",
											children: t("dash.thisYear")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "px-2.5 py-1 rounded-full text-foreground/50",
											children: t("dash.lastYear")
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniChart, {})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid sm:grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl bg-card border border-border p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm font-semibold mb-3 text-[color:var(--navy)] dark:text-foreground",
										children: t("dash.commodityDistribution")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Donut, { data: DIST.map((d) => ({
											label: t(d.labelKey),
											value: d.value,
											color: d.color
										})) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "space-y-1.5 text-xs",
											children: DIST.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center gap-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "h-2 w-2 rounded-full",
														style: { background: d.color }
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-foreground/70",
														children: t(d.labelKey)
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "ml-auto font-semibold",
														children: [d.value, "%"]
													})
												]
											}, d.labelKey))
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl bg-card border border-border p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm font-semibold mb-3 text-[color:var(--navy)] dark:text-foreground",
										children: t("dash.liveMarket")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-2 text-xs",
										children: MARKET.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-foreground/70",
												children: t(m.nameKey)
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-baseline gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold",
													children: m.price
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: m.up ? "text-emerald-600 font-bold" : "text-red-500 font-bold",
													children: m.change
												})]
											})]
										}, m.nameKey))
									})]
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 border-t border-border bg-muted/30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl bg-card border border-border p-6 shadow-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorldMap, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-5",
							children: t("global.eyebrow")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-3xl md:text-5xl leading-tight text-[color:var(--navy)] dark:text-foreground",
							children: [
								t("global.titleA"),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								t("global.titleB")
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-foreground/65 leading-relaxed",
							children: t("global.desc")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-2.5 text-sm",
							children: [
								"global.b1",
								"global.b2",
								"global.b3",
								"global.b4"
							].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground/75",
									children: t(k)
								})]
							}, k))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/partnership",
							className: "mt-8 inline-flex items-center gap-3 bg-gold px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--gold-foreground)] hover:brightness-110 transition-all",
							children: [
								t("common.joinOurNetwork"),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
							]
						})
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-24 bg-gradient-navy text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x text-center max-w-3xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-4xl md:text-5xl leading-tight",
							children: [
								t("cta.titleA"),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-gold",
									children: t("cta.titleB")
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-white/70",
							children: t("cta.desc")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-4 justify-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/partnership",
								className: "inline-flex items-center gap-3 bg-gold px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--gold-foreground)] hover:brightness-110 transition-all",
								children: [
									t("common.becomeAPartner"),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "inline-flex items-center gap-3 border border-white/30 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[color:var(--navy)] transition-all",
								children: t("common.contactUs")
							})]
						})
					]
				})
			})
		]
	});
}
function MiniChart() {
	const pts = [
		10,
		14,
		12,
		18,
		22,
		20,
		26,
		30,
		28,
		34,
		38,
		42
	];
	const max = 50;
	const w = 320;
	const h = 110;
	const step = w / (pts.length - 1);
	const path = pts.map((v, i) => `${i === 0 ? "M" : "L"} ${i * step},${h - v / max * h}`).join(" ");
	const area = `${path} L ${w},${h} L 0,${h} Z`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: `0 0 ${w} ${h}`,
		className: "w-full h-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "ga",
				x1: "0",
				x2: "0",
				y1: "0",
				y2: "1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "var(--gold)",
					stopOpacity: "0.35"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "var(--gold)",
					stopOpacity: "0"
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: area,
				fill: "url(#ga)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: path,
				fill: "none",
				stroke: "var(--gold)",
				strokeWidth: "2"
			}),
			pts.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: i * step,
				cy: h - v / max * h,
				r: "2.5",
				fill: "var(--gold)"
			}, `pt-${i}`))
		]
	});
}
function Donut({ data }) {
	const total = data.reduce((s, d) => s + d.value, 0);
	const r = 32;
	const c = 2 * Math.PI * r;
	let acc = 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 90 90",
		className: "h-24 w-24 -rotate-90",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "45",
			cy: "45",
			r,
			fill: "none",
			stroke: "var(--muted)",
			strokeWidth: "10"
		}), data.map((d) => {
			const len = d.value / total * c;
			const seg = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "45",
				cy: "45",
				r,
				fill: "none",
				stroke: d.color,
				strokeWidth: "10",
				strokeDasharray: `${len} ${c - len}`,
				strokeDashoffset: -acc
			}, d.label);
			acc += len;
			return seg;
		})]
	});
}
//#endregion
export { HomePage as component };
