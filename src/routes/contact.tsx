import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Mail, Phone, MapPin, Globe2, ArrowRight, ShieldCheck } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { TKey } from "@/lib/translations";
import { useState } from "react";
import { contactSchema, submitContact } from "@/lib/api";
import type { ContactInput } from "@/lib/api";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Zentra Trading" },
      { name: "description", content: "Reach Zentra Trading in Luanda, Angola. Phone, email and registration form for global commodity opportunities." },
      { property: "og:title", content: "Contact — Zentra Trading" },
      { property: "og:url", content: "https://zentratrading.com/contact" },
    ],
    links: [{ rel: "canonical", href: "https://zentratrading.com/contact" }],
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

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof ContactInput, string>>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("idle");
    setErrors({});
    const form = new FormData(e.currentTarget);
    const data: ContactInput = {
      fullName: form.get("fullName") as string,
      companyName: form.get("companyName") as string,
      email: form.get("email") as string,
      whatsapp: form.get("whatsapp") as string,
      country: form.get("country") as string,
      businessType: form.get("businessType") as string,
      message: form.get("message") as string,
    };
    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactInput, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ContactInput;
        fieldErrors[field] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    try {
      await submitContact({ data: result.data });
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

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

        <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-border bg-white p-7 shadow-card">
          <h2 className="font-display text-2xl font-bold text-[color:var(--navy)]">{t("common.joinZentra")}</h2>
          <p className="mt-1.5 text-sm text-muted-foreground">{t("form.contactIntro")}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Field label={t("form.fullName")} name="fullName" error={errors.fullName ? t(errors.fullName as TKey) : undefined} />
            <Field label={t("form.companyName")} name="companyName" error={errors.companyName ? t(errors.companyName as TKey) : undefined} />
            <Field label={t("form.emailShort")} name="email" type="email" error={errors.email ? t(errors.email as TKey) : undefined} />
            <Field label={t("form.whatsappShort")} name="whatsapp" error={errors.whatsapp ? t(errors.whatsapp as TKey) : undefined} />
            <SelectField
              label={t("form.country")}
              name="country"
              placeholder={t("form.selectPlaceholder")}
              options={["Angola","Nigeria","South Africa","Brazil","China","USA","Other"]}
              error={errors.country ? t(errors.country as TKey) : undefined}
            />
            <SelectField
              label={t("form.businessType")}
              name="businessType"
              placeholder={t("form.selectPlaceholder")}
              options={["biz.producer","biz.supplier","biz.exporter","biz.importer","biz.investor"]}
              i18n
              error={errors.businessType ? t(errors.businessType as TKey) : undefined}
            />
          </div>
          <Field label={t("form.tellUsTrade")} name="message" textarea />
          <button type="submit" className="mt-5 group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-gold px-5 py-3.5 text-sm font-semibold text-[color:var(--gold-foreground)] shadow-gold transition hover:translate-y-[-1px]">
            {t("common.joinZentra")} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </button>
          {status === "success" && (
            <p className="mt-3 text-xs text-emerald-600 text-center">{t("form.submitSuccess")}</p>
          )}
          {status === "error" && (
            <p className="mt-3 text-xs text-red-500 text-center">{t("form.submitError")}</p>
          )}
          <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-[color:var(--success)]" /> {t("form.secureConfidential")}
          </div>
        </form>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", textarea, error }: { label: string; name: string; type?: string; textarea?: boolean; error?: string }) {
  return (
    <div className={`${textarea ? "sm:col-span-2 mt-3" : ""}`}>
      <label htmlFor={`contact-${name}`} className="block text-xs font-medium text-foreground/70 mb-1.5">{label}</label>
      {textarea ? (
        <textarea id={`contact-${name}`} name={name} rows={4} className="w-full rounded-lg border border-input bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" />
      ) : (
        <input id={`contact-${name}`} name={name} type={type} className="w-full rounded-lg border border-input bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" />
      )}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

function SelectField({ label, name, options, placeholder, i18n, error }: { label: string; name: string; options: string[]; placeholder: string; i18n?: boolean; error?: string }) {
  const { t } = useI18n();
  return (
    <div className="block">
      <label htmlFor={`contact-${name}`} className="block text-xs font-medium text-foreground/70 mb-1.5">{label}</label>
      <select id={`contact-${name}`} name={name} className="w-full rounded-lg border border-input bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50">
        <option value="">{placeholder}</option>
        {options.map((o) => <option key={o} value={i18n ? o : o}>{i18n ? t(o as TKey) : o}</option>)}
      </select>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
