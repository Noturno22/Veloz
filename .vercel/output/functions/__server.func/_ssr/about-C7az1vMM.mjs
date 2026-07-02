import { r as __toESM } from "../_runtime.mjs";
import { F as require_react, P as require_jsx_runtime, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useI18n } from "./i18n-DsfmKptw.mjs";
import { C as _9_default$1, S as _8_default$1, _ as _3_default$1, a as _13_default$1, b as _6_default$1, c as _16_default$1, d as _19_default$1, f as _1_default$1, g as _2_default$1, h as _22_default$1, i as _12_default$1, l as _17_default$1, m as _21_default$1, n as _10_default$1, o as _14_default$1, p as _20_default$1, r as _11_default$1, s as _15_default$1, t as PageHero, u as _18_default$1, v as _4_default$1, x as _7_default$1, y as _5_default$1 } from "./PageHero-CMPu85X_.mjs";
import { a as _5_default$2, i as _4_default$2, n as _2_default$2, r as _3_default$2, t as _1_default$2 } from "./5-CyR0Syrm.mjs";
import { A as FileCheck, B as ArrowRight, E as Leaf, G as CircleCheckBig, H as Sparkles, J as ChartColumn, L as Building2, M as Eye, P as ChevronRight, _ as Network, a as TrendingUp, i as Truck, k as Globe, l as Ship, m as Recycle, n as Users, p as Scale, s as Target, u as Shield, z as Award } from "../_libs/lucide-react.mjs";
import { a as Marker, i as Line, n as Geographies, r as Geography$1, t as ComposableMap } from "../_libs/react-simple-maps+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-C7az1vMM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var _1_default = "/assets/1-W22PbaRv.jpg";
var _10_default = "/assets/10-_fhtIoQF.jpg";
var _11_default = "/assets/11-BjhLcKft.jpg";
var _12_default = "/assets/12-DwsXNRQu.jpg";
var _13_default = "/assets/13-Bxg6tqSm.jpg";
var _14_default = "/assets/14-SQ64TumF.jpg";
var _15_default = "/assets/15-BhxdJAwl.jpg";
var _16_default = "/assets/16-Dyi845J9.jpg";
var _17_default = "/assets/17-C-fiOb1c.jpg";
var _18_default = "/assets/18-Cv1BxXjw.jpg";
var _19_default = "/assets/19-BPQBMSUM.jpg";
var _2_default = "/assets/2-D12jVQ0-.jpg";
var _20_default = "/assets/20-2dKtwVKY.jpg";
var _21_default = "/assets/21-D7TJdoqw.jpg";
var _22_default = "/assets/22-eelKvSvX.jpg";
var _3_default = "/assets/3-Cg2GU8H1.jpg";
var _4_default = "/assets/4-DN20KFJJ.jpg";
var _5_default = "/assets/5-DJaLY05J.jpg";
var _6_default = "/assets/6-UZ_0MjE_.jpg";
var _7_default = "/assets/7-LzbiuyoT.jpg";
var _8_default = "/assets/8-sIrKFb7w.jpg";
var _9_default = "/assets/9-CKNLqftC.jpg";
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
		name: "London",
		coords: [-.1276, 51.5074]
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
var HOME_IMAGES = Object.values([
	_1_default$1,
	_10_default$1,
	_11_default$1,
	_12_default$1,
	_13_default$1,
	_14_default$1,
	_15_default$1,
	_16_default$1,
	_17_default$1,
	_18_default$1,
	_19_default$1,
	_2_default$1,
	_20_default$1,
	_21_default$1,
	_22_default$1,
	_3_default$1,
	_4_default$1,
	_5_default$1,
	_6_default$1,
	_7_default$1,
	_8_default$1,
	_9_default$1
]);
var CARROCEL_IMAGES = Object.values([
	_1_default,
	_10_default,
	_11_default,
	_12_default,
	_13_default,
	_14_default,
	_15_default,
	_16_default,
	_17_default,
	_18_default,
	_19_default,
	_2_default,
	_20_default,
	_21_default,
	_22_default,
	_3_default,
	_4_default,
	_5_default,
	_6_default,
	_7_default,
	_8_default,
	_9_default
]);
var STATS = [
	{
		value: "50+",
		numeric: 50,
		suffix: "+",
		key: "about.stats.countries"
	},
	{
		value: "850+",
		numeric: 850,
		suffix: "+",
		key: "about.stats.partners"
	},
	{
		value: "1,200+",
		numeric: 1200,
		suffix: "+",
		key: "about.stats.projects"
	},
	{
		value: "15+",
		numeric: 15,
		suffix: "+",
		key: "about.stats.experience"
	},
	{
		value: "500+",
		numeric: 500,
		suffix: "+",
		key: "about.stats.clients"
	}
];
function AnimatedCounter({ target, suffix }) {
	const [count, setCount] = (0, import_react.useState)(0);
	const ref = (0, import_react.useRef)(null);
	const hasAnimated = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting && !hasAnimated.current) {
				hasAnimated.current = true;
				const duration = 1500;
				const steps = 30;
				const increment = target / steps;
				let current = 0;
				const interval = setInterval(() => {
					current += increment;
					if (current >= target) {
						setCount(target);
						clearInterval(interval);
					} else setCount(Math.floor(current));
				}, duration / steps);
			}
		}, { threshold: .3 });
		observer.observe(el);
		return () => observer.disconnect();
	}, [target]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [count, suffix]
	});
}
var ORG_SCHEMA = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: "Veloz",
	url: "https://zentratrading.com",
	logo: "https://zentratrading.com/zentra-logo.png",
	description: "Veloz facilitates global commodity business through an international network of trusted partners.",
	address: {
		"@type": "PostalAddress",
		addressLocality: "London",
		addressCountry: "GB"
	}
};
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
	const COMMODITIES = [
		{
			img: _1_default$2,
			key: "about.commodities.agriculture"
		},
		{
			img: _2_default$2,
			key: "about.commodities.metals"
		},
		{
			img: _3_default$2,
			key: "about.commodities.energy"
		},
		{
			img: _4_default$2,
			key: "about.commodities.chemicals"
		},
		{
			img: _5_default$2,
			key: "about.commodities.rawMaterials"
		}
	];
	const SERVICES = [
		{
			icon: Globe,
			key: "about.services.globalTrading"
		},
		{
			icon: TrendingUp,
			key: "about.services.internationalSourcing"
		},
		{
			icon: Ship,
			key: "about.services.logistics"
		},
		{
			icon: Truck,
			key: "about.services.supplyChain"
		},
		{
			icon: FileCheck,
			key: "about.services.importExport"
		},
		{
			icon: Shield,
			key: "about.services.riskManagement"
		}
	];
	const WHY = [
		{
			icon: Users,
			key: "about.why.professionalTeam"
		},
		{
			icon: Network,
			key: "about.why.globalNetwork"
		},
		{
			icon: Award,
			key: "about.why.integrity"
		},
		{
			icon: CircleCheckBig,
			key: "about.why.reliability"
		},
		{
			icon: Scale,
			key: "about.why.compliance"
		},
		{
			icon: ChartColumn,
			key: "about.why.operationalExcellence"
		}
	];
	const TIMELINE = [
		{ key: "about.timeline.supplier" },
		{ key: "about.timeline.inspection" },
		{ key: "about.timeline.documentation" },
		{ key: "about.timeline.shipping" },
		{ key: "about.timeline.delivery" },
		{ key: "about.timeline.client" }
	];
	const ESG = [
		{
			icon: Leaf,
			key: "about.esg.sustainability"
		},
		{
			icon: Recycle,
			key: "about.esg.responsibleSourcing"
		},
		{
			icon: Building2,
			key: "about.esg.environmental"
		},
		{
			icon: Users,
			key: "about.esg.ethical"
		},
		{
			icon: Scale,
			key: "about.esg.compliance"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify(ORG_SCHEMA) }
		}),
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x relative py-20 md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-6 gap-4",
				children: CARROCEL_IMAGES.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "snap-start shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] first:ml-0 last:mr-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl overflow-hidden shadow-elegant aspect-[16/10] bg-navy/50",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img,
							alt: `Veloz carousel ${i + 1}`,
							className: "w-full h-full object-cover hover:scale-105 transition-transform duration-700",
							loading: i < 3 ? "eager" : "lazy"
						})
					})
				}, i))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-gradient-navy",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-6 gap-4",
				children: HOME_IMAGES.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "snap-start shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] first:ml-0 last:mr-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl overflow-hidden shadow-elegant aspect-[16/10] bg-navy/50",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img,
							alt: `Veloz global operations ${i + 1}`,
							className: "w-full h-full object-cover hover:scale-105 transition-transform duration-700",
							loading: i < 3 ? "eager" : "lazy"
						})
					})
				}, i))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[color:var(--navy)] to-transparent"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x py-16 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2 gap-10 lg:gap-16 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: t("about.whoWeAre.eyebrow"),
					title: t("about.whoWeAre.title"),
					description: t("about.whoWeAre.desc")
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-navy shadow-elegant",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/about/company.jpg",
							alt: t("about.whoWeAre.imgAlt"),
							className: "w-full h-full object-cover opacity-50",
							loading: "lazy"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-4 -left-4 w-24 h-24 rounded-xl bg-gradient-gold opacity-20 blur-2xl" })]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid lg:grid-cols-3 gap-6",
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
			})
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-16 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t("about.commodities.eyebrow"),
				title: t("about.commodities.title"),
				description: t("about.commodities.desc"),
				center: true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-5",
				children: COMMODITIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group hover-lift rounded-2xl border border-border bg-white shadow-card overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/3] overflow-hidden bg-gradient-navy",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: c.img,
							alt: t(c.key),
							className: "w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500",
							loading: "lazy"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-4 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-base font-semibold text-[color:var(--navy)]",
							children: t(c.key)
						})
					})]
				}, c.key))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-gradient-navy text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x py-16 md:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: t("about.services.eyebrow"),
					title: t("about.services.title"),
					description: t("about.services.desc"),
					center: true,
					light: true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
					children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-11 w-11 place-items-center rounded-lg bg-gradient-gold text-[color:var(--gold-foreground)] shadow-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-lg font-semibold text-white",
							children: t(s.key)
						})]
					}, s.key))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-16 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t("about.why.eyebrow"),
				title: t("about.why.title"),
				description: t("about.why.desc"),
				center: true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
				children: WHY.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hover-lift rounded-2xl border border-border bg-white p-6 shadow-card flex items-start gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-gold text-[color:var(--gold-foreground)] shadow-gold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w.icon, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-base font-semibold text-[color:var(--navy)]",
						children: t(w.key)
					}) })]
				}, w.key))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-16 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t("about.timeline.eyebrow"),
				title: t("about.timeline.title"),
				center: true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4",
				children: TIMELINE.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex flex-col items-center text-center group",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-12 w-12 place-items-center rounded-full bg-gradient-gold text-[color:var(--gold-foreground)] shadow-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-sm font-bold",
								children: i + 1
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 font-display text-sm font-semibold text-[color:var(--navy)]",
							children: t(item.key)
						}),
						i < TIMELINE.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "hidden lg:block absolute -right-2.5 top-4 h-4 w-4 text-gold/40" })
					]
				}, item.key))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-16 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t("about.stats.eyebrow"),
				title: t("about.stats.title"),
				center: true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid grid-cols-2 lg:grid-cols-5 gap-4",
				children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-white p-6 text-center shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-3xl font-bold text-gold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCounter, {
							target: s.numeric,
							suffix: s.suffix
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-wider text-muted-foreground mt-1",
						children: t(s.key)
					})]
				}, s.key))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x py-16 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2 gap-10 lg:gap-16 items-center",
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
					className: "w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorldMap, {})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-gradient-navy text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x py-16 md:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: t("about.esg.eyebrow"),
					title: t("about.esg.title"),
					description: t("about.esg.desc"),
					center: true,
					light: true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid lg:grid-cols-2 gap-8 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-2 gap-4",
						children: ESG.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 place-items-center rounded-lg bg-gradient-gold text-[color:var(--gold-foreground)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e.icon, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-base font-semibold text-white",
								children: t(e.key)
							})]
						}, e.key))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/about/esg.jpg",
								alt: t("about.esg.imgAlt"),
								className: "w-full h-full object-cover opacity-40",
								loading: "lazy"
							})
						})
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-16 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: t("about.certifications.eyebrow"),
				title: t("about.certifications.title"),
				center: true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 flex flex-wrap justify-center gap-6",
				children: [
					"about.certifications.iso",
					"about.certifications.sgs",
					"about.certifications.intertek",
					"about.certifications.bureauVeritas"
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-40 h-20 rounded-xl border border-border bg-white shadow-card flex items-center justify-center hover-lift",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider",
						children: t(c)
					})
				}, c))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x pb-16 md:pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl bg-gradient-navy p-10 lg:p-14 text-white shadow-elegant text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1]",
						children: t("about.cta.title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl mx-auto text-base md:text-lg text-white/75",
						children: t("about.cta.desc")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-[color:var(--gold-foreground)] shadow-gold",
							children: [
								t("common.contactUs"),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 text-sm font-semibold text-white",
							children: t("about.cta.requestQuote")
						})]
					})
				]
			})
		})
	] });
}
//#endregion
export { About as component };
