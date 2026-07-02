import { P as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Marker, i as Line, n as Geographies, r as Geography$1, t as ComposableMap } from "../_libs/react-simple-maps+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/5-n4FpLkU2.js
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
var _1_default = "/assets/1-D49BDDZx.jpeg";
var _2_default = "/assets/2-rV88IuqX.jpeg";
var _3_default = "/assets/3-DhPRFmc0.jpeg";
var _4_default = "/assets/4-BbDdnKnz.jpeg";
var _5_default = "/assets/5-CReW2kNo.jpeg";
//#endregion
export { _4_default as a, _3_default as i, _1_default as n, _5_default as o, _2_default as r, WorldMap as t };
