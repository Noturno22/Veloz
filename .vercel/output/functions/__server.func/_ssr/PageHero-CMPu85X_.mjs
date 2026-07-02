import { r as __toESM } from "../_runtime.mjs";
import { F as require_react, P as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-CMPu85X_.js
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
var imagesMap = /* #__PURE__ */ Object.assign({
	"/src/assets/IMG/Home/1.jpg": _1_default,
	"/src/assets/IMG/Home/10.jpg": _10_default,
	"/src/assets/IMG/Home/11.jpg": _11_default,
	"/src/assets/IMG/Home/12.jpg": _12_default,
	"/src/assets/IMG/Home/13.jpg": _13_default,
	"/src/assets/IMG/Home/14.jpg": _14_default,
	"/src/assets/IMG/Home/15.jpg": _15_default,
	"/src/assets/IMG/Home/16.jpg": _16_default,
	"/src/assets/IMG/Home/17.jpg": _17_default,
	"/src/assets/IMG/Home/18.jpg": _18_default,
	"/src/assets/IMG/Home/19.jpg": _19_default,
	"/src/assets/IMG/Home/2.jpg": _2_default,
	"/src/assets/IMG/Home/20.jpg": _20_default,
	"/src/assets/IMG/Home/21.jpg": _21_default,
	"/src/assets/IMG/Home/22.jpg": _22_default,
	"/src/assets/IMG/Home/3.jpg": _3_default,
	"/src/assets/IMG/Home/4.jpg": _4_default,
	"/src/assets/IMG/Home/5.jpg": _5_default,
	"/src/assets/IMG/Home/6.jpg": _6_default,
	"/src/assets/IMG/Home/7.jpg": _7_default,
	"/src/assets/IMG/Home/8.jpg": _8_default,
	"/src/assets/IMG/Home/9.jpg": _9_default,
	"/src/assets/IMG/Home/ChatGPT Image 2_07_2026, 16_43_33.png": "/assets/ChatGPT%20Image%202_07_2026_%2016_43_33-DD_Z_n9o.png",
	"/src/assets/IMG/Home/ChatGPT Image 2_07_2026, 16_47_19.png": "/assets/ChatGPT%20Image%202_07_2026_%2016_47_19-H5uwkqVO.png"
});
var images = Object.keys(imagesMap).sort().map((key) => imagesMap[key]);
function BackgroundSlideshow() {
	const [active, setActive] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const interval = setInterval(() => {
			setActive((prev) => (prev + 1) % images.length);
		}, 6500);
		return () => clearInterval(interval);
	}, []);
	if (images.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "absolute inset-0 overflow-hidden pointer-events-none",
		children: images.map((src, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0",
			style: {
				backgroundImage: `url(${src})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				opacity: idx === active ? 1 : 0,
				transform: idx === active ? "scale(1.08)" : "scale(1)",
				transition: "opacity 1.5s ease-in-out, transform 8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
				willChange: "opacity, transform",
				zIndex: idx === active ? 1 : 0
			}
		}, idx))
	});
}
function PageHero({ eyebrow, title, description, children, showSlideshow = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative text-white",
		children: [
			showSlideshow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackgroundSlideshow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 bg-gradient-to-b from-navy/40 to-navy/10 z-[2]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sticky top-0 min-h-screen flex items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x py-20 md:py-28 w-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-block animate-fade-in",
							style: { animation: "fadeInUp 0.8s ease-out" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold uppercase tracking-[0.32em] bg-gold/20 text-gold px-4 py-1.5 rounded-full backdrop-blur-sm inline-block",
								children: eyebrow
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-6 font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] max-w-4xl animate-fade-in",
							style: {
								animation: "fadeInUp 0.8s ease-out 0.15s both",
								textShadow: "0 2px 40px rgba(0,0,0,.5), 0 1px 10px rgba(0,0,0,.4)"
							},
							children: title
						}),
						description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-base md:text-lg text-white/90 leading-relaxed animate-fade-in",
							style: {
								animation: "fadeInUp 0.8s ease-out 0.3s both",
								textShadow: "0 1px 20px rgba(0,0,0,.4)"
							},
							children: description
						}),
						children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 animate-fade-in",
							style: { animation: "fadeInUp 0.8s ease-out 0.45s both" },
							children
						})
					]
				})
			})
		]
	});
}
//#endregion
export { _9_default as C, _8_default as S, _3_default as _, _13_default as a, _6_default as b, _16_default as c, _19_default as d, _1_default as f, _2_default as g, _22_default as h, _12_default as i, _17_default as l, _21_default as m, _10_default as n, _14_default as o, _20_default as p, _11_default as r, _15_default as s, PageHero as t, _18_default as u, _4_default as v, _7_default as x, _5_default as y };
