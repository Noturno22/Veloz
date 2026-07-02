import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Mail, Phone, MapPin, Globe2, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { TKey } from "@/lib/translations";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Veloz" },
      { name: "description", content: "Reach Veloz in London, UK. Phone, email." },
      { property: "og:title", content: "Contact — Veloz" },
      { property: "og:url", content: "https://zentratrading.com/contact" },
    ],
    links: [{ rel: "canonical", href: "https://zentratrading.com/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useI18n();
  const CONTACTS: { icon: typeof Mail; labelKey: TKey; value: string }[] = [
    { icon: MapPin, labelKey: "contact.address", value: "128 City Road, London, EC1V 2NX" },
    { icon: Phone, labelKey: "contact.phoneWa", value: "+44 7564155651" },
    { icon: Mail, labelKey: "contact.email", value: "info@veloz.com" },
    { icon: Globe2, labelKey: "contact.website", value: "www.veloz.com" },
  ];

  const [sent, setSent] = useState(false);

  function buildMailTo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("fullName") as string || "";
    const email = form.get("email") as string || "";
    const company = form.get("companyName") as string || "";
    const phone = form.get("whatsapp") as string || "";
    const country = form.get("country") as string || "";
    const bizType = form.get("businessType") as string || "";
    const message = form.get("message") as string || "";

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Phone: ${phone}`,
      `Country: ${country}`,
      `Business Type: ${bizType}`,
      ``,
      `Message:`,
      message,
    ].join("\n");

    window.location.href = `mailto:info@veloz.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow={t("contact.eyebrow")}
        title={<>{t("contact.titleA")} <span className="text-gold">{t("contact.titleB")}</span></>}
        description={t("contact.desc")}
      />
      <section className="container-x py-16 grid lg:grid-cols-[1fr_1.5fr] gap-10">
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
              title="Veloz — London, UK"
              src="https://www.google.com/maps?q=128+City+Road,+London,+EC1V+2NX,+UK&output=embed"
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form onSubmit={buildMailTo} noValidate className="rounded-2xl border border-border bg-white p-8 shadow-card">
          <h2 className="font-display text-3xl font-bold text-[color:var(--navy)]">{t("contact.formTitle")}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{t("contact.formSubtitle")}</p>
          <div className="mt-6 space-y-4">
            <Field label={t("form.fullName")} name="fullName" />
            <Field label={t("form.emailShort")} name="email" type="email" />
            <Field label={t("form.tellUsTrade")} name="message" textarea />
          </div>
          <button type="submit" className="mt-6 group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-gold px-5 py-4 text-base font-semibold text-[color:var(--gold-foreground)] shadow-gold">
            {t("contact.formSend")} <ArrowRight className="h-5 w-5" />
          </button>
          {sent && (
            <p className="mt-4 text-sm text-emerald-600 text-center">Email opened in your default mail client. Please send it to complete.</p>
          )}
        </form>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", textarea }: { label: string; name: string; type?: string; textarea?: boolean }) {
  return (
    <div className={`${textarea ? "sm:col-span-2" : ""}`}>
      <label htmlFor={`contact-${name}`} className="block text-sm font-medium text-foreground/70 mb-1.5">{label}</label>
      {textarea ? (
        <textarea id={`contact-${name}`} name={name} rows={6} className="w-full rounded-lg border border-input bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" />
      ) : (
        <input id={`contact-${name}`} name={name} type={type} className="w-full rounded-lg border border-input bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" />
      )}
    </div>
  );
}


