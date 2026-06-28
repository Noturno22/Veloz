import { o as __toESM } from "../_runtime.mjs";
import { A as require_react, k as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useI18n } from "./i18n-CmMji885.mjs";
import { t as PageHero } from "./PageHero-CfQLEDlK.mjs";
import { N as Earth, b as MapPin, f as ShieldCheck, m as Phone, x as Mail, z as ArrowRight } from "../_libs/lucide-react.mjs";
import { r as submitContact, t as contactSchema } from "./api-gHQS2iF6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CcUUkG-j.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	const { t } = useI18n();
	const CONTACTS = [
		{
			icon: MapPin,
			labelKey: "contact.address",
			value: "Luanda, Angola"
		},
		{
			icon: Phone,
			labelKey: "contact.phoneWa",
			value: "+244 926 599 991"
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
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [errors, setErrors] = (0, import_react.useState)({});
	async function handleSubmit(e) {
		e.preventDefault();
		setStatus("idle");
		setErrors({});
		const form = new FormData(e.currentTarget);
		const data = {
			fullName: form.get("fullName"),
			companyName: form.get("companyName"),
			email: form.get("email"),
			whatsapp: form.get("whatsapp"),
			country: form.get("country"),
			businessType: form.get("businessType"),
			message: form.get("message")
		};
		const result = contactSchema.safeParse(data);
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
			await submitContact(result.data);
			setStatus("success");
			e.target.reset();
		} catch {
			setStatus("error");
		}
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
		description: t("contact.desc")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-x py-16 grid lg:grid-cols-[1fr_1.1fr] gap-10",
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
					title: "Veloz — Luanda, Angola",
					src: "https://www.google.com/maps?q=Luanda,Angola&output=embed",
					className: "h-72 w-full",
					loading: "lazy",
					referrerPolicy: "no-referrer-when-downgrade"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit,
			noValidate: true,
			className: "rounded-2xl border border-border bg-white p-7 shadow-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-bold text-[color:var(--navy)]",
					children: t("common.joinZentra")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 text-sm text-muted-foreground",
					children: t("form.contactIntro")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid gap-3 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("form.fullName"),
							name: "fullName",
							error: errors.fullName ? t(errors.fullName) : void 0
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("form.companyName"),
							name: "companyName",
							error: errors.companyName ? t(errors.companyName) : void 0
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("form.emailShort"),
							name: "email",
							type: "email",
							error: errors.email ? t(errors.email) : void 0
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("form.whatsappShort"),
							name: "whatsapp",
							error: errors.whatsapp ? t(errors.whatsapp) : void 0
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
							label: t("form.country"),
							name: "country",
							placeholder: t("form.selectPlaceholder"),
							options: [
								"Angola",
								"Nigeria",
								"South Africa",
								"Brazil",
								"China",
								"USA",
								"Other"
							],
							error: errors.country ? t(errors.country) : void 0
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
							label: t("form.businessType"),
							name: "businessType",
							placeholder: t("form.selectPlaceholder"),
							options: [
								"biz.producer",
								"biz.supplier",
								"biz.exporter",
								"biz.importer",
								"biz.investor"
							],
							i18n: true,
							error: errors.businessType ? t(errors.businessType) : void 0
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t("form.tellUsTrade"),
					name: "message",
					textarea: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "submit",
					className: "mt-5 group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-gold px-5 py-3.5 text-sm font-semibold text-[color:var(--gold-foreground)] shadow-gold transition hover:translate-y-[-1px]",
					children: [
						t("common.joinZentra"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })
					]
				}),
				status === "success" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs text-emerald-600 text-center",
					children: t("form.submitSuccess")
				}),
				status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs text-red-500 text-center",
					children: t("form.submitError")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-[color:var(--success)]" }),
						" ",
						t("form.secureConfidential")
					]
				})
			]
		})]
	})] });
}
function Field({ label, name, type = "text", textarea, error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `${textarea ? "sm:col-span-2 mt-3" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: `contact-${name}`,
				className: "block text-xs font-medium text-foreground/70 mb-1.5",
				children: label
			}),
			textarea ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				id: `contact-${name}`,
				name,
				rows: 4,
				className: "w-full rounded-lg border border-input bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: `contact-${name}`,
				name,
				type,
				className: "w-full rounded-lg border border-input bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-red-500 mt-1",
				children: error
			})
		]
	});
}
function SelectField({ label, name, options, placeholder, i18n, error }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: `contact-${name}`,
				className: "block text-xs font-medium text-foreground/70 mb-1.5",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				id: `contact-${name}`,
				name,
				className: "w-full rounded-lg border border-input bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "",
					children: placeholder
				}), options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: i18n ? o : o,
					children: i18n ? t(o) : o
				}, o))]
			}),
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-red-500 mt-1",
				children: error
			})
		]
	});
}
//#endregion
export { Contact as component };
