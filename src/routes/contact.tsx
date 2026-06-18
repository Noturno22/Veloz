import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Mail, Phone, MapPin, Globe2, ArrowRight, ShieldCheck } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { TKey } from "@/lib/translations";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Zentra Trading" },
      { name: "description", content: "Reach Zentra Trading in Luanda, Angola. Phone, email and registration form for global commodity opportunities." },
      { property: "og:title", content: "Contact — Zentra Trading" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useI18n();
  const CONTACTS: { icon: typeof Mail; labelKey: TKey; value: string }[] = [
    { icon: MapPin, labelKey: "contact.address", value: "Luanda, Angola" },
    { icon: Phone, labelKey: "contact.phoneWa", value: "+244 926 599 991" },
    { icon: Mail, labelKey: "contact.email", value: "info@zentratrading.com" },
    { icon: Globe2, labelKey: "contact.website", value: "www.zentratrading.com" },
  ];
  return (
    <>
      <PageHero
        eyebrow={t("contact.eyebrow")}
        title={<>{t("contact.titleA")} <span className="text-gold">{t("contact.titleB")}</span></>}
        description={t("contact.desc")}
      />
      <section className="container-x py-16 grid lg:grid-cols-[1fr_1.1fr] gap-10">
        <div className="space-y-4">
          {CONTACTS.map((c) => (
            <div key={c.labelKey} className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-card">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-gold text-[color:var(--gold-foreground)] shadow-gold">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{t(c.labelKey)}</div>
                <div className="font-display text-lg font-semibold text-[color:var(--navy)]">{c.value}</div>
              </div>
            </div>
          ))}
          <div className="overflow-hidden rounded-2xl border border-border shadow-card">
            <iframe
              title="Zentra Trading — Luanda, Angola"
              src="https://www.google.com/maps?q=Luanda,Angola&output=embed"
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form onSubmit={(e)=>e.preventDefault()} className="rounded-2xl border border-border bg-white p-7 shadow-card">
          <h2 className="font-display text-2xl font-bold text-[color:var(--navy)]">{t("common.joinZentra")}</h2>
          <p className="mt-1.5 text-sm text-muted-foreground">{t("form.contactIntro")}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Field label={t("form.fullName")} />
            <Field label={t("form.companyName")} />
            <Field label={t("form.emailShort")} type="email" />
            <Field label={t("form.whatsappShort")} />
            <SelectField
              label={t("form.country")}
              placeholder={t("form.selectPlaceholder")}
              options={["Angola","Nigeria","South Africa","Brazil","China","USA","Other"]}
            />
            <SelectField
              label={t("form.businessType")}
              placeholder={t("form.selectPlaceholder")}
              options={[t("biz.producer"),t("biz.supplier"),t("biz.exporter"),t("biz.importer"),t("biz.investor")]}
            />
          </div>
          <Field label={t("form.tellUsTrade")} textarea />
          <button className="mt-5 group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-gold px-5 py-3.5 text-sm font-semibold text-[color:var(--gold-foreground)] shadow-gold transition hover:translate-y-[-1px]">
            {t("common.joinZentra")} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </button>
          <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-[color:var(--success)]" /> {t("form.secureConfidential")}
          </div>
        </form>
      </section>
    </>
  );
}

function Field({ label, type = "text", textarea }: { label: string; type?: string; textarea?: boolean }) {
  return (
    <label className={`block ${textarea ? "sm:col-span-2 mt-3" : ""}`}>
      <span className="block text-xs font-medium text-foreground/70 mb-1.5">{label}</span>
      {textarea ? (
        <textarea rows={4} className="w-full rounded-lg border border-input bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" />
      ) : (
        <input type={type} className="w-full rounded-lg border border-input bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" />
      )}
    </label>
  );
}

function SelectField({ label, options, placeholder }: { label: string; options: string[]; placeholder: string }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-foreground/70 mb-1.5">{label}</span>
      <select className="w-full rounded-lg border border-input bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50">
        <option value="">{placeholder}</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}
