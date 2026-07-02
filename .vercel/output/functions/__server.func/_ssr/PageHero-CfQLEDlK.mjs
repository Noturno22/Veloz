import { P as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-CfQLEDlK.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, description, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-gradient-navy text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 opacity-[0.12]",
				style: { backgroundImage: "radial-gradient(circle at 20% 20%, #D4A017 0, transparent 40%), radial-gradient(circle at 80% 60%, #D4A017 0, transparent 35%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 opacity-20",
				style: {
					backgroundImage: "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
					backgroundSize: "48px 48px",
					maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x relative py-20 md:py-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold uppercase tracking-[0.32em] text-gold",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] max-w-3xl",
						children: title
					}),
					description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-base md:text-lg text-white/75",
						children: description
					}),
					children
				]
			})
		]
	});
}
//#endregion
export { PageHero as t };
