import { r as __toESM } from "../_runtime.mjs";
import { F as require_react, P as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useI18n } from "./i18n-CPgOiQ-I.mjs";
import { t as PageHero } from "./PageHero-CMPu85X_.mjs";
import { B as ArrowRight, C as Mail, S as MapPin, W as Earth, h as Phone } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-ImFCxSjt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	const { t } = useI18n();
	const CONTACTS = [
		{
			icon: MapPin,
			labelKey: "contact.address",
			value: "128 City Road, London, EC1V 2NX"
		},
		{
			icon: Phone,
			labelKey: "contact.phoneWa",
			value: "+44 7564155651"
		},
		{
			icon: Mail,
			labelKey: "contact.email",
			value: "info@veloz.com"
		},
		{
			icon: Earth,
			labelKey: "contact.website",
			value: "www.veloz.com"
		}
	];
	const [sent, setSent] = (0, import_react.useState)(false);
	function buildMailTo(e) {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const name = form.get("fullName") || "";
		const email = form.get("email") || "";
		const company = form.get("companyName") || "";
		const phone = form.get("whatsapp") || "";
		const country = form.get("country") || "";
		const bizType = form.get("businessType") || "";
		const message = form.get("message") || "";
		const body = [
			`Name: ${name}`,
			`Email: ${email}`,
			`Company: ${company}`,
			`Phone: ${phone}`,
			`Country: ${country}`,
			`Business Type: ${bizType}`,
			``,
			`Message:`,
			message
		].join("\n");
		window.location.href = `mailto:info@veloz.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(body)}`;
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: t("contact.eyebrow"),
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			t("contact.titleA"),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gold",
				children: t("contact.titleB")
			})
		] }),
		description: t("contact.desc"),
		showSlideshow: false
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-x py-16 grid lg:grid-cols-[1fr_1.5fr] gap-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [CONTACTS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-11 w-11 place-items-center rounded-xl bg-gradient-gold text-[color:var(--gold-foreground)] shadow-gold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-wider text-muted-foreground",
					children: t(c.labelKey)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-lg font-semibold text-[color:var(--navy)]",
					children: c.value
				})] })]
			}, c.labelKey)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-2xl border border-border shadow-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "Veloz — London, UK",
					src: "https://www.google.com/maps?q=128+City+Road,+London,+EC1V+2NX,+UK&output=embed",
					className: "h-72 w-full",
					loading: "lazy",
					referrerPolicy: "no-referrer-when-downgrade"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: buildMailTo,
			noValidate: true,
			className: "rounded-2xl border border-border bg-white p-8 shadow-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-bold text-[color:var(--navy)]",
					children: t("contact.formTitle")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: t("contact.formSubtitle")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("form.fullName"),
							name: "fullName"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("form.emailShort"),
							name: "email",
							type: "email"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("form.tellUsTrade"),
							name: "message",
							textarea: true
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "submit",
					className: "mt-6 group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-gold px-5 py-4 text-base font-semibold text-[color:var(--gold-foreground)] shadow-gold",
					children: [
						t("contact.formSend"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5" })
					]
				}),
				sent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-emerald-600 text-center",
					children: "Email opened in your default mail client. Please send it to complete."
				})
			]
		})]
	})] });
}
function Field({ label, name, type = "text", textarea }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `${textarea ? "sm:col-span-2" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor: `contact-${name}`,
			className: "block text-sm font-medium text-foreground/70 mb-1.5",
			children: label
		}), textarea ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			id: `contact-${name}`,
			name,
			rows: 6,
			className: "w-full rounded-lg border border-input bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id: `contact-${name}`,
			name,
			type,
			className: "w-full rounded-lg border border-input bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
		})]
	});
}
//#endregion
export { Contact as component };
