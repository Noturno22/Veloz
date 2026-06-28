import { o as __toESM } from "../_runtime.mjs";
import { A as require_react, c as lazyRouteComponent, d as Link, i as useRouterState, k as require_jsx_runtime, l as createFileRoute, n as Scripts, o as createRouter, p as useRouter, r as HeadContent, s as Outlet, u as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useI18n, t as I18nProvider } from "./i18n-BRFjHTm3.mjs";
import { A as Facebook, F as Check, O as Globe, S as LogOut, b as MapPin, d as Shield, g as Moon, i as Twitter, l as Sun, m as Phone, r as UserRound, t as X, v as MessageCircle, w as Linkedin, x as Mail, y as Menu } from "../_libs/lucide-react.mjs";
import { n as useAuth, t as AuthProvider } from "./auth-C8nhe0CZ.mjs";
import { o as isAdminEmail } from "./admin-Crrx1Pow.mjs";
import { t as hero_trading_default } from "./hero-trading-Dc-vF-GR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-1MZ1lbbI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-D0fc_esa.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function Logo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/zentra-logo.png",
			alt: "Veloz",
			className: "h-14 w-auto md:h-16 md:w-auto object-contain"
		})
	});
}
var ThemeContext = (0, import_react.createContext)({
	theme: "light",
	setTheme: () => {},
	toggle: () => {}
});
function apply(t) {
	const root = document.documentElement;
	root.classList.toggle("dark", t === "dark");
	root.style.colorScheme = t;
}
function ThemeProvider({ children }) {
	const [theme, setThemeState] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		try {
			const initial = localStorage.getItem("zentra-theme") ?? "light";
			setThemeState(initial);
			apply(initial);
		} catch {
			console.error("Failed to read theme from localStorage");
		}
	}, []);
	const setTheme = (0, import_react.useCallback)((t) => {
		setThemeState(t);
		try {
			localStorage.setItem("zentra-theme", t);
		} catch {
			console.error("Failed to persist theme to localStorage");
		}
		apply(t);
	}, []);
	const toggle = (0, import_react.useCallback)(() => setTheme(theme === "dark" ? "light" : "dark"), [theme, setTheme]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
		value: {
			theme,
			setTheme,
			toggle
		},
		children
	});
}
var useTheme = () => (0, import_react.useContext)(ThemeContext);
function ThemeToggle({ className = "" }) {
	const { theme, toggle } = useTheme();
	const { t } = useI18n();
	const isDark = theme === "dark";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: toggle,
		"aria-label": isDark ? t("nav.theme.light") : t("nav.theme.dark"),
		title: isDark ? t("nav.theme.light") : t("nav.theme.dark"),
		className: `grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground/80 hover:text-foreground hover:border-gold transition ${className}`,
		children: isDark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" })
	});
}
var LANGS = [{
	code: "en",
	label: "English",
	flag: "🇬🇧"
}, {
	code: "pt",
	label: "Português",
	flag: "🇵🇹"
}];
function LanguageSwitcher({ className = "" }) {
	const { lang, setLang } = useI18n();
	const [open, setOpen] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const onClick = (e) => {
			if (ref.current && !ref.current.contains(e.target)) setOpen(false);
		};
		document.addEventListener("mousedown", onClick);
		return () => document.removeEventListener("mousedown", onClick);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: `relative ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setOpen((v) => !v),
			className: "flex items-center gap-1.5 rounded-full border border-border bg-card px-3 h-9 text-sm font-medium text-foreground/80 hover:text-foreground hover:border-gold transition",
			"aria-haspopup": "listbox",
			"aria-expanded": open,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-4 w-4" }), lang.toUpperCase()]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			role: "listbox",
			className: "absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border border-border bg-popover shadow-card z-50",
			children: LANGS.map((l) => {
				const active = l.code === lang;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						setLang(l.code);
						setOpen(false);
					},
					className: `flex w-full items-center justify-between gap-2 px-3 py-2.5 text-sm hover:bg-muted ${active ? "text-gold font-semibold" : "text-foreground"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							children: l.flag
						}), l.label]
					}), active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })]
				}) }, l.code);
			})
		})]
	});
}
var NAV = [
	{
		to: "/",
		key: "nav.home"
	},
	{
		to: "/about",
		key: "nav.about"
	},
	{
		to: "/commodities",
		key: "nav.commodities"
	},
	{
		to: "/how-it-works",
		key: "nav.howItWorks"
	},
	{
		to: "/insights",
		key: "nav.insights"
	},
	{
		to: "/partnership",
		key: "nav.partnership"
	},
	{
		to: "/contact",
		key: "nav.contact"
	}
];
function SiteHeader() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const { t } = useI18n();
	const { user, logout } = useAuth();
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => setOpen(false), [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `sticky top-0 z-50 transition-all duration-300 border-b ${scrolled ? "border-white/10 bg-[color:var(--background)]/90 backdrop-blur-md" : "border-transparent bg-[color:var(--background)]/40 backdrop-blur-sm"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x flex h-24 items-center justify-between gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					"aria-label": "Veloz home",
					className: "flex items-center shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-6 xl:gap-8",
					children: NAV.map((item) => {
						const active = pathname === item.to;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							"aria-current": active ? "page" : void 0,
							className: `relative whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors ${active ? "text-gold" : "text-foreground/70 hover:text-gold"}`,
							children: [t(item.key), active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-2 left-0 right-0 h-[2px] bg-gold" })]
						}, item.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden lg:flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitcher, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
						user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								isAdminEmail(user.email) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/admin",
									className: "inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-gold hover:brightness-110 transition-all",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-3 w-3" }), "Admin"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/dashboard",
									className: "text-[10px] font-semibold text-foreground/60 hover:text-gold truncate max-w-28 transition-colors",
									children: user.email
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: logout,
									"aria-label": "Sign out",
									className: "inline-flex items-center gap-1.5 border border-border px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-foreground/60 hover:text-red-500 hover:border-red-500/30 transition-all",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-3 w-3" })
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/login",
							className: "ml-1 inline-flex items-center gap-2 bg-gold px-7 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--gold-foreground)] hover:brightness-110 transition-all",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "h-3.5 w-3.5" }),
								" ",
								t("nav.login")
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex lg:hidden items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitcher, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": t("common.openMenu"),
							className: "p-2 -mr-2 rounded-md hover:bg-muted text-foreground",
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6" })
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:hidden border-t border-white/10 bg-[color:var(--background)]/95 backdrop-blur",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "container-x py-4 flex flex-col gap-1",
				children: [NAV.map((item) => {
					const active = pathname === item.to;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						"aria-current": active ? "page" : void 0,
						className: `rounded-md px-3 py-2.5 text-xs font-bold uppercase tracking-[0.25em] hover:bg-white/5 ${active ? "text-gold" : "text-foreground/80"}`,
						children: t(item.key)
					}, item.to);
				}), user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					isAdminEmail(user.email) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/admin",
						className: "rounded-md px-3 py-2.5 text-xs font-bold uppercase tracking-[0.25em] text-gold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-3.5 w-3.5 inline mr-1" }), "Admin"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/dashboard",
						className: "rounded-md px-3 py-2.5 text-xs font-bold uppercase tracking-[0.25em] text-gold",
						children: t("dash.title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: logout,
						className: "mt-2 border border-white/20 px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-foreground/60",
						children: [
							"Sign out (",
							user.email,
							")"
						]
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/login",
					className: "mt-2 bg-gold px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--gold-foreground)]",
					children: t("nav.login")
				})]
			})
		})]
	});
}
function SiteFooter() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-24 bg-[#06111F] text-white border-t border-white/5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row justify-between items-start border-b border-white/10 pb-16 gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/zentra-logo.png",
								alt: "Veloz",
								className: "h-10 w-10 object-contain"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-display text-3xl font-bold uppercase tracking-tighter",
								children: ["Veloz", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold",
									children: "."
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-sm text-white/50 leading-relaxed",
							children: t("footer.tagline")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 space-y-1 text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Luanda · São Paulo · Geneva · Singapore" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex gap-3",
							children: [
								{
									Icon: Linkedin,
									label: "LinkedIn"
								},
								{
									Icon: Twitter,
									label: "Twitter"
								},
								{
									Icon: Facebook,
									label: "Facebook"
								}
							].map(({ Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "h-10 w-10 grid place-items-center border border-white/15 hover:bg-gold hover:border-gold hover:text-[color:var(--gold-foreground)] transition",
								"aria-label": label,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
							}, label))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-gold text-[10px] uppercase tracking-[0.3em] font-bold",
								children: t("footer.company")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
								className: "flex flex-col space-y-3 text-white/50 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/about",
										className: "hover:text-white transition-colors",
										children: t("nav.about")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/how-it-works",
										className: "hover:text-white transition-colors",
										children: t("nav.howItWorks")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/partnership",
										className: "hover:text-white transition-colors",
										children: t("nav.partnership")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/insights",
										className: "hover:text-white transition-colors",
										children: t("nav.insights")
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-gold text-[10px] uppercase tracking-[0.3em] font-bold",
								children: t("footer.commoditiesH")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
								className: "flex flex-col space-y-3 text-white/50 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/commodities",
										className: "hover:text-white transition-colors",
										children: t("comm.agricultural")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/commodities",
										className: "hover:text-white transition-colors",
										children: t("comm.minerals")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/commodities",
										className: "hover:text-white transition-colors",
										children: t("comm.energy")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/commodities",
										className: "hover:text-white transition-colors",
										children: t("comm.industrial")
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-gold text-[10px] uppercase tracking-[0.3em] font-bold",
								children: t("footer.contactH")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-3 text-sm text-white/60",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 mt-0.5 text-gold shrink-0" }), "Luanda, Angola"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 mt-0.5 text-gold shrink-0" }), "+244 926 599 991"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 mt-0.5 text-gold shrink-0" }), "info@veloz.com"]
									})
								]
							})]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.25em] text-white/30 gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Veloz Group. ",
					t("footer.rights")
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-white/40",
					children: t("footer.slogan")
				})]
			})]
		})
	});
}
function WhatsAppFab() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: "https://wa.me/244926599991",
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": t("common.whatsappAria"),
		className: "fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full text-white shadow-gold transition-transform hover:scale-110",
		style: { background: "linear-gradient(135deg,#25D366,#128C7E)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-7 w-7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-25"
		})]
	});
}
var initScript = `
(function(){
  try {
    var t = localStorage.getItem('zentra-theme');
    if (!t) t = 'light';
    if (t === 'dark') document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = t;
    var l = localStorage.getItem('zentra-lang');
    if (!l) l = ((navigator.language||'en').toLowerCase().indexOf('pt')===0) ? 'pt' : 'en';
    document.documentElement.lang = l;
  } catch(e) {}
})();
`;
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-[color:var(--gold-foreground)] shadow-gold",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl font-semibold text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-md bg-gradient-gold px-4 py-2 text-sm font-semibold text-[color:var(--gold-foreground)]",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-md border border-input bg-background px-4 py-2 text-sm font-medium",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$12 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Veloz — Global Commodity Trading Made Simple" },
			{
				name: "description",
				content: "Veloz connects producers, suppliers, exporters, importers and investors through secure and efficient global commodity trading."
			},
			{
				name: "author",
				content: "Veloz"
			},
			{
				property: "og:site_name",
				content: "Veloz"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#0B1F3A"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/zentra-logo.png"
			},
			{
				rel: "shortcut icon",
				type: "image/png",
				href: "/zentra-logo.png"
			},
			{
				rel: "apple-touch-icon",
				href: "/zentra-logo.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap"
			}
		],
		scripts: [{ children: initScript }]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })] });
}
function RootComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFab, {})
		]
	}) }) }) });
}
var $$splitComponentImporter$11 = () => import("./register-D9Z32deA.mjs");
var Route$11 = createFileRoute("/register")({
	head: () => ({
		meta: [
			{ title: "Create Account — Veloz" },
			{
				name: "description",
				content: "Create your Veloz account and access global commodity opportunities."
			},
			{
				property: "og:title",
				content: "Create Account — Veloz"
			},
			{
				property: "og:url",
				content: "https://zentratrading.com/register"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://zentratrading.com/register"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./partnership-DSpFqoph.mjs");
var Route$10 = createFileRoute("/partnership")({
	head: () => ({
		meta: [
			{ title: "Partnership — Veloz" },
			{
				name: "description",
				content: "Join 850+ partners trading globally with Veloz. Become a producer, supplier, exporter, importer or investor partner."
			},
			{
				property: "og:title",
				content: "Partnership — Veloz"
			},
			{
				property: "og:url",
				content: "https://zentratrading.com/partnership"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://zentratrading.com/partnership"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./opportunities-CiXFj1_C.mjs");
var Route$9 = createFileRoute("/opportunities")({
	head: () => ({
		meta: [
			{ title: "Opportunities — Veloz" },
			{
				name: "description",
				content: "Browse live trading opportunities across agricultural, mineral, energy and industrial markets."
			},
			{
				property: "og:title",
				content: "Opportunities — Veloz"
			},
			{
				property: "og:url",
				content: "https://zentratrading.com/opportunities"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://zentratrading.com/opportunities"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./login-KNn7EdRU.mjs");
var Route$8 = createFileRoute("/login")({
	head: () => ({
		meta: [
			{ title: "Login — Veloz" },
			{
				name: "description",
				content: "Access your Veloz account."
			},
			{
				property: "og:title",
				content: "Login — Veloz"
			},
			{
				property: "og:url",
				content: "https://zentratrading.com/login"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://zentratrading.com/login"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./insights-CUOvm2lb.mjs");
var Route$7 = createFileRoute("/insights")({
	head: () => ({
		meta: [
			{ title: "Insights — Veloz" },
			{
				name: "description",
				content: "Market intelligence, trade news and sector reports from Veloz."
			},
			{
				property: "og:title",
				content: "Insights — Veloz"
			},
			{
				property: "og:url",
				content: "https://zentratrading.com/insights"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://zentratrading.com/insights"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./how-it-works-BpcrBW65.mjs");
var Route$6 = createFileRoute("/how-it-works")({
	head: () => ({
		meta: [
			{ title: "How It Works — Veloz" },
			{
				name: "description",
				content: "Three simple steps and six core services to start trading globally with Veloz."
			},
			{
				property: "og:title",
				content: "How It Works — Veloz"
			},
			{
				property: "og:url",
				content: "https://zentratrading.com/how-it-works"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://zentratrading.com/how-it-works"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./dashboard-D2fkTIQS.mjs");
var Route$5 = createFileRoute("/dashboard")({
	head: () => ({
		meta: [
			{ title: "Dashboard — Veloz" },
			{
				name: "description",
				content: "Your Veloz dashboard."
			},
			{
				property: "og:title",
				content: "Dashboard — Veloz"
			},
			{
				property: "og:url",
				content: "https://zentratrading.com/dashboard"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://zentratrading.com/dashboard"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./contact-BD6LhqVT.mjs");
var Route$4 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact — Veloz" },
			{
				name: "description",
				content: "Reach Veloz in Luanda, Angola. Phone, email and registration form for global commodity opportunities."
			},
			{
				property: "og:title",
				content: "Contact — Veloz"
			},
			{
				property: "og:url",
				content: "https://zentratrading.com/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://zentratrading.com/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./commodities-BDLYr0xX.mjs");
var Route$3 = createFileRoute("/commodities")({
	head: () => ({
		meta: [
			{ title: "Commodities — Veloz" },
			{
				name: "description",
				content: "Agricultural, mineral, energy and industrial commodities traded across our global network."
			},
			{
				property: "og:title",
				content: "Commodities — Veloz"
			},
			{
				property: "og:url",
				content: "https://zentratrading.com/commodities"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://zentratrading.com/commodities"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./admin-BsDEiaFk.mjs");
var Route$2 = createFileRoute("/admin")({
	head: () => ({ meta: [{ title: "Admin — Veloz" }, {
		name: "robots",
		content: "noindex, nofollow"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-Dvv6yyy2.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About Us — Veloz" },
			{
				name: "description",
				content: "Veloz facilitates global commodity business through an international network of trusted partners."
			},
			{
				property: "og:title",
				content: "About Us — Veloz"
			},
			{
				property: "og:url",
				content: "https://zentratrading.com/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://zentratrading.com/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-ArUqSMj3.mjs");
var Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Veloz — Global Commodity Trading Made Simple" },
			{
				name: "description",
				content: "Connecting producers, suppliers, exporters, importers and investors through secure and efficient global commodity trading solutions."
			},
			{
				property: "og:title",
				content: "Veloz — Global Commodity Trading Made Simple"
			},
			{
				property: "og:description",
				content: "Worldwide commodity marketplace for agricultural, mineral, energy and industrial trading."
			},
			{
				property: "og:url",
				content: "https://zentratrading.com/"
			},
			{
				property: "og:image",
				content: hero_trading_default
			}
		],
		links: [{
			rel: "canonical",
			href: "https://zentratrading.com/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var RegisterRoute = Route$11.update({
	id: "/register",
	path: "/register",
	getParentRoute: () => Route$12
});
var PartnershipRoute = Route$10.update({
	id: "/partnership",
	path: "/partnership",
	getParentRoute: () => Route$12
});
var OpportunitiesRoute = Route$9.update({
	id: "/opportunities",
	path: "/opportunities",
	getParentRoute: () => Route$12
});
var LoginRoute = Route$8.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$12
});
var InsightsRoute = Route$7.update({
	id: "/insights",
	path: "/insights",
	getParentRoute: () => Route$12
});
var HowItWorksRoute = Route$6.update({
	id: "/how-it-works",
	path: "/how-it-works",
	getParentRoute: () => Route$12
});
var DashboardRoute = Route$5.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$12
});
var ContactRoute = Route$4.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$12
});
var CommoditiesRoute = Route$3.update({
	id: "/commodities",
	path: "/commodities",
	getParentRoute: () => Route$12
});
var AdminRoute = Route$2.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$12
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$12
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$12
	}),
	AboutRoute,
	AdminRoute,
	CommoditiesRoute,
	ContactRoute,
	DashboardRoute,
	HowItWorksRoute,
	InsightsRoute,
	LoginRoute,
	OpportunitiesRoute,
	PartnershipRoute,
	RegisterRoute
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
