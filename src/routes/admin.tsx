import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Users,
  MessageSquare,
  Trash2,
  CheckCircle2,
  Loader2,
  BarChart3,
  TrendingUp,
  Globe2,
  Handshake,
  Mail,
  Phone,
  Building2,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import {
  fetchLeads,
  fetchContacts,
  deleteLead,
  deleteContact,
  updateLeadStatus,
  updateContactStatus,
  formatTimestamp,
  type Lead,
  type Contact,
} from "@/lib/admin";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Veloz" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

type Tab = "overview" | "leads" | "contacts";

function AdminPage() {
  const { t } = useI18n();
  const [tab, setTab] = useState<Tab>("overview");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setLoading(true);
    try {
      const [leadsData, contactsData] = await Promise.all([
        fetchLeads(),
        fetchContacts(),
      ]);
      setLeads(leadsData);
      setContacts(contactsData);
    } catch (err) {
      console.error("Failed to load admin data", err);
    } finally {
      setLoading(false);
    }
  }

  async function handleDeleteLead(id: string) {
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

  async function handleDeleteContact(id: string) {
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

  async function handleMarkLeadRead(id: string) {
    try {
      await updateLeadStatus(id, "read");
      setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status: "read" } : l)));
    } catch (err) {
      console.error("Failed to update lead", err);
    }
  }

  async function handleMarkContactRead(id: string) {
    try {
      await updateContactStatus(id, "read");
      setContacts((prev) => prev.map((c) => (c.id === id ? { ...c, status: "read" } : c)));
    } catch (err) {
      console.error("Failed to update contact", err);
    }
  }

  const newLeads = leads.filter((l) => l.status !== "read");
  const newContacts = contacts.filter((c) => c.status !== "read");

  const TABS: { id: Tab; label: string; icon: typeof Users; count?: number }[] = [
    { id: "overview", label: t("admin.overview"), icon: BarChart3 },
    { id: "leads", label: t("admin.leads"), icon: Users, count: newLeads.length },
    { id: "contacts", label: t("admin.contacts"), icon: MessageSquare, count: newContacts.length },
  ];

  return (
    <div className="min-h-[calc(100vh-6rem)] bg-muted/30">
      <div className="border-b border-border bg-card">
        <div className="container-x flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-gold transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              {t("admin.backToSite")}
            </Link>
            <span className="text-sm text-muted-foreground">|</span>
            <h1 className="font-display text-lg text-[color:var(--navy)] dark:text-foreground">
              {t("admin.title")}
            </h1>
          </div>
          <span className="text-xs text-muted-foreground">Admin</span>
        </div>
      </div>

      <div className="container-x py-6">
        <div className="flex gap-1 p-1 rounded-xl bg-card border border-border w-fit mb-8">
          {TABS.map((tItem) => (
            <button
              key={tItem.id}
              onClick={() => setTab(tItem.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition ${
                tab === tItem.id
                  ? "bg-[color:var(--brand-green)] text-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <tItem.icon className="h-3.5 w-3.5" />
              {tItem.label}
              {tItem.count !== undefined && tItem.count > 0 && (
                <span className="ml-1 h-5 min-w-5 flex items-center justify-center rounded-full bg-red-500 text-white text-[10px] font-bold px-1.5">
                  {tItem.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-gold" />
          </div>
        ) : (
          <>
            {tab === "overview" && (
              <OverviewTab leads={leads} contacts={contacts} t={t} />
            )}
            {tab === "leads" && (
              <LeadsTab
                leads={leads}
                onDelete={handleDeleteLead}
                onMarkRead={handleMarkLeadRead}
                actionLoading={actionLoading}
                t={t}
              />
            )}
            {tab === "contacts" && (
              <ContactsTab
                contacts={contacts}
                onDelete={handleDeleteContact}
                onMarkRead={handleMarkContactRead}
                actionLoading={actionLoading}
                t={t}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

function OverviewTab({
  leads,
  contacts,
  t,
}: {
  leads: Lead[];
  contacts: Contact[];
  t: (k: string) => string;
}) {
  const newLeads = leads.filter((l) => l.status !== "read");
  const newContacts = contacts.filter((c) => c.status !== "read");

  const STATS = [
    { icon: Users, label: t("admin.totalLeads"), value: leads.length, color: "text-blue" },
    { icon: MessageSquare, label: t("admin.totalContacts"), value: contacts.length, color: "text-orange" },
    { icon: TrendingUp, label: t("admin.recentLeads"), value: newLeads.length, color: "text-green" },
    { icon: CheckCircle2, label: t("admin.recentContacts"), value: newContacts.length, color: "text-green" },
  ];

  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="rounded-xl bg-card border border-border p-5 shadow-card"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-full bg-gold-soft grid place-items-center">
                <s.icon className={`h-5 w-5 ${s.color}`} />
              </div>
            </div>
            <div className="text-2xl font-display text-[color:var(--navy)] dark:text-foreground">
              {s.value}
            </div>
            <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-xl bg-card border border-border p-5 shadow-card">
          <h3 className="font-display text-lg text-[color:var(--navy)] dark:text-foreground mb-4">
            {t("admin.recentLeads")}
          </h3>
          {leads.length === 0 ? (
            <p className="text-sm text-muted-foreground">{t("admin.noLeads")}</p>
          ) : (
            <div className="space-y-2">
              {leads.slice(0, 5).map((lead) => (
                <div
                  key={lead.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Building2 className="h-4 w-4 text-muted-foreground shrink-0" />
                    <div className="truncate">
                      <div className="text-sm font-medium text-foreground truncate">
                        {lead.fullName}
                      </div>
                      <div className="text-xs text-muted-foreground truncate">
                        {lead.companyName}
                      </div>
                    </div>
                  </div>
                  <div className="text-[10px] text-muted-foreground shrink-0 ml-3">
                    {formatTimestamp(lead.createdAt)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="rounded-xl bg-card border border-border p-5 shadow-card">
          <h3 className="font-display text-lg text-[color:var(--navy)] dark:text-foreground mb-4">
            {t("admin.recentContacts")}
          </h3>
          {contacts.length === 0 ? (
            <p className="text-sm text-muted-foreground">{t("admin.noContacts")}</p>
          ) : (
            <div className="space-y-2">
              {contacts.slice(0, 5).map((c) => (
                <div
                  key={c.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
                    <div className="truncate">
                      <div className="text-sm font-medium text-foreground truncate">
                        {c.fullName}
                      </div>
                      <div className="text-xs text-muted-foreground truncate">
                        {c.email}
                      </div>
                    </div>
                  </div>
                  <div className="text-[10px] text-muted-foreground shrink-0 ml-3">
                    {formatTimestamp(c.createdAt)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function LeadsTab({
  leads,
  onDelete,
  onMarkRead,
  actionLoading,
  t,
}: {
  leads: Lead[];
  onDelete: (id: string) => void;
  onMarkRead: (id: string) => void;
  actionLoading: string | null;
  t: (k: string) => string;
}) {
  return (
    <div className="rounded-xl bg-card border border-border shadow-card overflow-hidden">
      <div className="p-5 border-b border-border">
        <h3 className="font-display text-lg text-[color:var(--navy)] dark:text-foreground">
          {t("admin.leads")}
        </h3>
        <p className="text-xs text-muted-foreground mt-1">
          {t("admin.leadsSubtitle")}
        </p>
      </div>
      {leads.length === 0 ? (
        <div className="p-10 text-center">
          <Users className="h-10 w-10 text-muted-foreground/50 mx-auto mb-3" />
          <p className="text-sm text-muted-foreground">{t("admin.noLeads")}</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <Th>{t("admin.fullName")}</Th>
                <Th>{t("admin.company")}</Th>
                <Th>{t("admin.email")}</Th>
                <Th>{t("admin.whatsapp")}</Th>
                <Th>{t("admin.country")}</Th>
                <Th>{t("admin.businessType")}</Th>
                <Th>{t("admin.date")}</Th>
                <Th>{t("admin.status")}</Th>
                <Th>{t("admin.actions")}</Th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-b border-border hover:bg-muted/20 transition"
                >
                  <Td>{lead.fullName}</Td>
                  <Td>{lead.companyName}</Td>
                  <Td>
                    <a
                      href={`mailto:${lead.email}`}
                      className="text-gold hover:underline"
                    >
                      {lead.email}
                    </a>
                  </Td>
                  <Td>
                    <a
                      href={`https://wa.me/${lead.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:underline"
                    >
                      {lead.whatsapp}
                    </a>
                  </Td>
                  <Td>{lead.country}</Td>
                  <Td>{lead.businessType}</Td>
                  <Td className="text-[10px] whitespace-nowrap">
                    {formatTimestamp(lead.createdAt)}
                  </Td>
                  <Td>
                    {lead.status === "read" ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-muted-foreground">
                        <CheckCircle2 className="h-3 w-3" />
                        {t("admin.read")}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-green">
                        {t("admin.new")}
                      </span>
                    )}
                  </Td>
                  <Td>
                    <div className="flex items-center gap-1">
                      {lead.status !== "read" && (
                        <IconButton
                          onClick={() => onMarkRead(lead.id)}
                          label={t("admin.markRead")}
                          icon={<CheckCircle2 className="h-3.5 w-3.5" />}
                        />
                      )}
                      <IconButton
                        onClick={() => onDelete(lead.id)}
                        label={t("admin.delete")}
                        icon={
                          actionLoading === lead.id ? (
                            <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          ) : (
                            <Trash2 className="h-3.5 w-3.5" />
                          )
                        }
                        danger
                      />
                    </div>
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function ContactsTab({
  contacts,
  onDelete,
  onMarkRead,
  actionLoading,
  t,
}: {
  contacts: Contact[];
  onDelete: (id: string) => void;
  onMarkRead: (id: string) => void;
  actionLoading: string | null;
  t: (k: string) => string;
}) {
  return (
    <div className="space-y-4">
      {contacts.length === 0 ? (
        <div className="rounded-xl bg-card border border-border p-10 text-center shadow-card">
          <MessageSquare className="h-10 w-10 text-muted-foreground/50 mx-auto mb-3" />
          <p className="text-sm text-muted-foreground">{t("admin.noContacts")}</p>
        </div>
      ) : (
        contacts.map((c) => (
          <div
            key={c.id}
            className="rounded-xl bg-card border border-border p-5 shadow-card"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-9 w-9 rounded-full bg-gold-soft grid place-items-center shrink-0">
                    <Building2 className="h-4 w-4 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display text-base text-[color:var(--navy)] dark:text-foreground">
                      {c.fullName}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {c.companyName}
                    </p>
                  </div>
                  {c.status === "read" ? (
                    <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-semibold text-muted-foreground">
                      <CheckCircle2 className="h-3 w-3" />
                      {t("admin.read")}
                    </span>
                  ) : (
                    <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-semibold text-green">
                      {t("admin.new")}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-muted-foreground ml-1">
                  <span className="flex items-center gap-1">
                    <Mail className="h-3 w-3" /> {c.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="h-3 w-3" /> {c.whatsapp}
                  </span>
                  <span className="flex items-center gap-1">
                    <Globe2 className="h-3 w-3" /> {c.country}
                  </span>
                  <span>
                    {t("admin.businessType")}: {c.businessType}
                  </span>
                  <span>{formatTimestamp(c.createdAt)}</span>
                </div>
                {c.message && (
                  <div className="mt-3 p-3 rounded-lg bg-muted/50 text-sm text-foreground/80 ml-1">
                    {c.message}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-1 shrink-0">
                {c.status !== "read" && (
                  <IconButton
                    onClick={() => onMarkRead(c.id)}
                    label={t("admin.markRead")}
                    icon={<CheckCircle2 className="h-3.5 w-3.5" />}
                  />
                )}
                <IconButton
                  onClick={() => onDelete(c.id)}
                  label={t("admin.delete")}
                  icon={
                    actionLoading === c.id ? (
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    ) : (
                      <Trash2 className="h-3.5 w-3.5" />
                    )
                  }
                  danger
                />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
      {children}
    </th>
  );
}

function Td({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <td className={`px-4 py-3 text-sm text-foreground/80 ${className ?? ""}`}>
      {children}
    </td>
  );
}

function IconButton({
  onClick,
  label,
  icon,
  danger,
}: {
  onClick: () => void;
  label: string;
  icon: React.ReactNode;
  danger?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      title={label}
      aria-label={label}
      className={`p-2 rounded-lg transition ${
        danger
          ? "text-muted-foreground hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30"
          : "text-muted-foreground hover:text-gold hover:bg-gold-soft"
      }`}
    >
      {icon}
    </button>
  );
}
