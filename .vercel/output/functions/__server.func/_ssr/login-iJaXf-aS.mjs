import { o as __toESM } from "../_runtime.mjs";
import { A as require_react, d as Link, f as useNavigate, k as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useI18n } from "./i18n-CHWotKir.mjs";
import { B as ArrowLeft, M as EyeOff, f as ShieldCheck, j as Eye, z as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as auth } from "./firebase-BZtSKUGz.mjs";
import { n as useAuth } from "./auth-Dk7WZauZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-iJaXf-aS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const { t } = useI18n();
	const { login, resetPassword } = useAuth();
	const navigate = useNavigate();
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [showPw, setShowPw] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [resetMode, setResetMode] = (0, import_react.useState)(false);
	const [resetSent, setResetSent] = (0, import_react.useState)(false);
	const [resetLoading, setResetLoading] = (0, import_react.useState)(false);
	async function handleSubmit(e) {
		e.preventDefault();
		setError("");
		setLoading(true);
		try {
			await login(email, password);
			if (auth.currentUser) navigate({
				to: "/dashboard",
				replace: true
			});
			else navigate({
				to: "/dashboard",
				replace: true
			});
		} catch (err) {
			const errObj = err;
			const code = errObj?.code ?? "";
			if (code.includes("auth/invalid-credential") || code.includes("auth/user-not-found") || code.includes("auth/wrong-password")) setError("Invalid email or password. If you don't have an account, create one first.");
			else if (code.includes("auth/invalid-email")) setError("Invalid email format.");
			else if (code.includes("auth/too-many-requests")) setError("Too many attempts. Please try again later.");
			else if (code.includes("auth/invalid-login-credentials") || code.includes("auth/configuration-not-found")) setError("Login unavailable. Contact support or try again later.");
			else setError(code || errObj?.message || "Login failed");
		} finally {
			setLoading(false);
		}
	}
	async function handleReset(e) {
		e.preventDefault();
		setError("");
		setResetSent(false);
		setResetLoading(true);
		try {
			await resetPassword(email);
			setResetSent(true);
		} catch (err) {
			const errObj = err;
			const code = errObj?.code ?? "";
			if (code.includes("auth/user-not-found")) setError("No account found with this email.");
			else if (code.includes("auth/invalid-email")) setError("Invalid email format.");
			else if (code.includes("auth/configuration-not-found")) setError("Password reset unavailable. Contact support.");
			else setError(code || errObj?.message || "Reset failed");
		} finally {
			setResetLoading(false);
		}
	}
	if (resetMode) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[calc(100vh-6rem)] items-center justify-center px-4 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-full max-w-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-8 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-3xl font-bold text-[color:var(--navy)] dark:text-foreground",
							children: t("forgot.title")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: t("forgot.subtitle")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleReset,
						className: "mt-8 space-y-4",
						noValidate: true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "reset-email",
								className: "block text-sm font-medium text-foreground/70 mb-1.5",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "reset-email",
								type: "email",
								value: email,
								onChange: (e) => setEmail(e.target.value),
								placeholder: "you@company.com",
								required: true,
								className: "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
							})] }),
							error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-red-500 bg-red-50 dark:bg-red-950/30 rounded-lg px-3 py-2",
								children: error
							}),
							resetSent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg px-3 py-2",
								children: t("forgot.sent")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: resetLoading,
								className: "group w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-gold px-5 py-3.5 text-sm font-semibold text-[color:var(--gold-foreground)] shadow-gold transition hover:translate-y-[-1px] disabled:opacity-60",
								children: [resetLoading ? "Sending…" : t("forgot.title"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							setResetMode(false);
							setError("");
							setResetSent(false);
						},
						className: "mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground hover:text-gold transition-colors w-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), t("forgot.backToLogin")]
					})
				]
			})
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[calc(100vh-6rem)] items-center justify-center px-4 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-full max-w-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-border bg-card p-8 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-3xl font-bold text-[color:var(--navy)] dark:text-foreground",
							children: t("nav.login")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Access your Veloz account"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "mt-8 space-y-4",
						noValidate: true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "login-email",
								className: "block text-sm font-medium text-foreground/70 mb-1.5",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "login-email",
								type: "email",
								value: email,
								onChange: (e) => setEmail(e.target.value),
								placeholder: "you@company.com",
								required: true,
								className: "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "login-password",
								className: "block text-sm font-medium text-foreground/70 mb-1.5",
								children: "Password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "login-password",
									type: showPw ? "text" : "password",
									value: password,
									onChange: (e) => setPassword(e.target.value),
									placeholder: "••••••••",
									required: true,
									className: "w-full rounded-lg border border-input bg-background px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setShowPw((v) => !v),
									"aria-label": showPw ? "Hide password" : "Show password",
									className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
									children: showPw ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-end",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setResetMode(true),
									className: "text-xs text-muted-foreground hover:text-gold transition-colors",
									children: "Forgot password?"
								})
							}),
							error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-red-500 bg-red-50 dark:bg-red-950/30 rounded-lg px-3 py-2",
								children: error
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: loading,
								className: "group w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-gold px-5 py-3.5 text-sm font-semibold text-[color:var(--gold-foreground)] shadow-gold transition hover:translate-y-[-1px] disabled:opacity-60",
								children: [loading ? "Signing in…" : t("nav.login"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-center justify-center gap-1.5 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-[color:var(--success)]" }), "Secured with Firebase Authentication"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-center text-xs text-muted-foreground",
						children: [
							"Don't have an account?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/register",
								className: "text-gold font-semibold hover:underline",
								children: "Create one"
							})
						]
					})
				]
			})
		})
	});
}
//#endregion
export { LoginPage as component };
