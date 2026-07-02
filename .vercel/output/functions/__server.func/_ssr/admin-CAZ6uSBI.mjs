import { r as __toESM } from "../_runtime.mjs";
import { F as require_react, P as require_jsx_runtime, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useI18n } from "./i18n-DsfmKptw.mjs";
import { C as Mail, J as ChartColumn, K as CircleCheck, L as Building2, U as LoaderCircle, V as ArrowLeft, W as Earth, a as TrendingUp, h as Phone, n as Users, o as Trash2, y as MessageSquare } from "../_libs/lucide-react.mjs";
import { initializeApp } from "firebase/app";
import { collection, deleteDoc, doc, getDocs, getFirestore, orderBy, query, updateDoc } from "firebase/firestore";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-CAZ6uSBI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var db = getFirestore(initializeApp({
	apiKey: "AIzaSyCbxKTcEcVycoONjQEt0zAF4I2qbJY1LC0",
	authDomain: "zentra-connect.firebaseapp.com",
	projectId: "zentra-connect",
	storageBucket: "zentra-connect.firebasestorage.app",
	messagingSenderId: "455943726644",
	appId: "1:455943726644:web:05474c2640bf8bb2124c61"
}));
async function fetchLeads() {
	return (await getDocs(query(collection(db, "leads"), orderBy("createdAt", "desc")))).docs.map((d) => ({
		id: d.id,
		...d.data()
	}));
}
async function fetchContacts() {
	return (await getDocs(query(collection(db, "contacts"), orderBy("createdAt", "desc")))).docs.map((d) => ({
		id: d.id,
		...d.data()
	}));
}
async function deleteLead(id) {
	await deleteDoc(doc(db, "leads", id));
}
async function deleteContact(id) {
	await deleteDoc(doc(db, "contacts", id));
}
async function updateLeadStatus(id, status) {
	await updateDoc(doc(db, "leads", id), { status });
}
async function updateContactStatus(id, status) {
	await updateDoc(doc(db, "contacts", id), { status });
}
function formatTimestamp(ts) {
	if (!ts) return "—";
	return ts.toDate().toLocaleString();
}
function AdminPage() {
	const { t } = useI18n();
	const [tab, setTab] = (0, import_react.useState)("overview");
	const [leads, setLeads] = (0, import_react.useState)([]);
	const [contacts, setContacts] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [actionLoading, setActionLoading] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		loadData();
	}, []);
	async function loadData() {
		setLoading(true);
		try {
			const [leadsData, contactsData] = await Promise.all([fetchLeads(), fetchContacts()]);
			setLeads(leadsData);
			setContacts(contactsData);
		} catch (err) {
			console.error("Failed to load admin data", err);
		} finally {
			setLoading(false);
		}
	}
	async function handleDeleteLead(id) {
		setActionLoading(id);
		try {
			await deleteLead(id);
			setLeads((prev) => prev.filter((l) => l.id !== id));
		} catch (err) {
			console.error("Failed to delete lead", err);
		} finally {
			setActionLoading(null);
		}
	}
	async function handleDeleteContact(id) {
		setActionLoading(id);
		try {
			await deleteContact(id);
			setContacts((prev) => prev.filter((c) => c.id !== id));
		} catch (err) {
			console.error("Failed to delete contact", err);
		} finally {
			setActionLoading(null);
		}
	}
	async function handleMarkLeadRead(id) {
		try {
			await updateLeadStatus(id, "read");
			setLeads((prev) => prev.map((l) => l.id === id ? {
				...l,
				status: "read"
			} : l));
		} catch (err) {
			console.error("Failed to update lead", err);
		}
	}
	async function handleMarkContactRead(id) {
		try {
			await updateContactStatus(id, "read");
			setContacts((prev) => prev.map((c) => c.id === id ? {
				...c,
				status: "read"
			} : c));
		} catch (err) {
			console.error("Failed to update contact", err);
		}
	}
	const newLeads = leads.filter((l) => l.status !== "read");
	const newContacts = contacts.filter((c) => c.status !== "read");
	const TABS = [
		{
			id: "overview",
			label: t("admin.overview"),
			icon: ChartColumn
		},
		{
			id: "leads",
			label: t("admin.leads"),
			icon: Users,
			count: newLeads.length
		},
		{
			id: "contacts",
			label: t("admin.contacts"),
			icon: MessageSquare,
			count: newContacts.length
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-[calc(100vh-6rem)] bg-muted/30",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-b border-border bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x flex items-center justify-between h-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), t("admin.backToSite")]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted-foreground",
							children: "|"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-lg text-[color:var(--navy)] dark:text-foreground",
							children: t("admin.title")
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted-foreground",
					children: "Admin"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x py-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-1 p-1 rounded-xl bg-card border border-border w-fit mb-8",
				children: TABS.map((tItem) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setTab(tItem.id),
					className: `flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider ${tab === tItem.id ? "bg-[color:var(--brand-green)] text-white shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(tItem.icon, { className: "h-3.5 w-3.5" }),
						tItem.label,
						tItem.count !== void 0 && tItem.count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-1 h-5 min-w-5 flex items-center justify-center rounded-full bg-red-500 text-white text-[10px] font-bold px-1.5",
							children: tItem.count
						})
					]
				}, tItem.id))
			}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-center py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-8 w-8 animate-spin text-gold" })
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				tab === "overview" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverviewTab, {
					leads,
					contacts,
					t
				}),
				tab === "leads" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadsTab, {
					leads,
					onDelete: handleDeleteLead,
					onMarkRead: handleMarkLeadRead,
					actionLoading,
					t
				}),
				tab === "contacts" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactsTab, {
					contacts,
					onDelete: handleDeleteContact,
					onMarkRead: handleMarkContactRead,
					actionLoading,
					t
				})
			] })]
		})]
	});
}
function OverviewTab({ leads, contacts, t }) {
	const newLeads = leads.filter((l) => l.status !== "read");
	const newContacts = contacts.filter((c) => c.status !== "read");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				{
					icon: Users,
					label: t("admin.totalLeads"),
					value: leads.length,
					color: "text-blue"
				},
				{
					icon: MessageSquare,
					label: t("admin.totalContacts"),
					value: contacts.length,
					color: "text-orange"
				},
				{
					icon: TrendingUp,
					label: t("admin.recentLeads"),
					value: newLeads.length,
					color: "text-green"
				},
				{
					icon: CircleCheck,
					label: t("admin.recentContacts"),
					value: newContacts.length,
					color: "text-green"
				}
			].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-card border border-border p-5 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-3 mb-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-10 w-10 rounded-full bg-gold-soft grid place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: `h-5 w-5 ${s.color}` })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-2xl font-display text-[color:var(--navy)] dark:text-foreground",
						children: s.value
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground mt-1",
						children: s.label
					})
				]
			}, s.label))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid lg:grid-cols-2 gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-card border border-border p-5 shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg text-[color:var(--navy)] dark:text-foreground mb-4",
					children: t("admin.recentLeads")
				}), leads.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: t("admin.noLeads")
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: leads.slice(0, 5).map((lead) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between p-3 rounded-lg bg-muted/50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-4 w-4 text-muted-foreground shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "truncate",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-medium text-foreground truncate",
									children: lead.fullName
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground truncate",
									children: lead.companyName
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] text-muted-foreground shrink-0 ml-3",
							children: formatTimestamp(lead.createdAt)
						})]
					}, lead.id))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-card border border-border p-5 shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg text-[color:var(--navy)] dark:text-foreground mb-4",
					children: t("admin.recentContacts")
				}), contacts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: t("admin.noContacts")
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: contacts.slice(0, 5).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between p-3 rounded-lg bg-muted/50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-muted-foreground shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "truncate",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-medium text-foreground truncate",
									children: c.fullName
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground truncate",
									children: c.email
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] text-muted-foreground shrink-0 ml-3",
							children: formatTimestamp(c.createdAt)
						})]
					}, c.id))
				})]
			})]
		})]
	});
}
function LeadsTab({ leads, onDelete, onMarkRead, actionLoading, t }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-card border border-border shadow-card overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-5 border-b border-border",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-lg text-[color:var(--navy)] dark:text-foreground",
				children: t("admin.leads")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground mt-1",
				children: t("admin.leadsSubtitle")
			})]
		}), leads.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-10 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-10 w-10 text-muted-foreground/50 mx-auto mb-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: t("admin.noLeads")
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-border bg-muted/30",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: t("admin.fullName") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: t("admin.company") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: t("admin.email") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: t("admin.whatsapp") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: t("admin.country") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: t("admin.businessType") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: t("admin.date") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: t("admin.status") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { children: t("admin.actions") })
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: leads.map((lead) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-border hover:bg-muted/20 transition",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: lead.fullName }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: lead.companyName }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${lead.email}`,
							className: "text-gold hover:underline",
							children: lead.email
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `https://wa.me/${lead.whatsapp.replace(/\D/g, "")}`,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-gold hover:underline",
							children: lead.whatsapp
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: lead.country }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: lead.businessType }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
							className: "text-[10px] whitespace-nowrap",
							children: formatTimestamp(lead.createdAt)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: lead.status === "read" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1 text-[10px] font-semibold text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3 w-3" }), t("admin.read")]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex items-center gap-1 text-[10px] font-semibold text-green",
							children: t("admin.new")
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1",
							children: [lead.status !== "read" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
								onClick: () => onMarkRead(lead.id),
								label: t("admin.markRead"),
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
								onClick: () => onDelete(lead.id),
								label: t("admin.delete"),
								icon: actionLoading === lead.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" }),
								danger: true
							})]
						}) })
					]
				}, lead.id)) })]
			})
		})]
	});
}
function ContactsTab({ contacts, onDelete, onMarkRead, actionLoading, t }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-4",
		children: contacts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl bg-card border border-border p-10 text-center shadow-card",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-10 w-10 text-muted-foreground/50 mx-auto mb-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: t("admin.noContacts")
			})]
		}) : contacts.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-xl bg-card border border-border p-5 shadow-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-9 w-9 rounded-full bg-gold-soft grid place-items-center shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-4 w-4 text-gold" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-display text-base text-[color:var(--navy)] dark:text-foreground",
									children: c.fullName
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: c.companyName
								})] }),
								c.status === "read" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "ml-auto inline-flex items-center gap-1 text-[10px] font-semibold text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3 w-3" }), t("admin.read")]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-auto inline-flex items-center gap-1 text-[10px] font-semibold text-green",
									children: t("admin.new")
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-x-6 gap-y-1 text-xs text-muted-foreground ml-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3 w-3" }),
										" ",
										c.email
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3 w-3" }),
										" ",
										c.whatsapp
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "h-3 w-3" }),
										" ",
										c.country
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									t("admin.businessType"),
									": ",
									c.businessType
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatTimestamp(c.createdAt) })
							]
						}),
						c.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 p-3 rounded-lg bg-muted/50 text-sm text-foreground/80 ml-1",
							children: c.message
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1 shrink-0",
					children: [c.status !== "read" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
						onClick: () => onMarkRead(c.id),
						label: t("admin.markRead"),
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
						onClick: () => onDelete(c.id),
						label: t("admin.delete"),
						icon: actionLoading === c.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" }),
						danger: true
					})]
				})]
			})
		}, c.id))
	});
}
function Th({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
		className: "px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
		children
	});
}
function Td({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
		className: `px-4 py-3 text-sm text-foreground/80 ${className ?? ""}`,
		children
	});
}
function IconButton({ onClick, label, icon, danger }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick,
		title: label,
		"aria-label": label,
		className: `p-2 rounded-lg ${danger ? "text-muted-foreground hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30" : "text-muted-foreground hover:text-gold hover:bg-gold-soft"}`,
		children: icon
	});
}
//#endregion
export { AdminPage as component };
