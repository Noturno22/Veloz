import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Mail, Phone, MapPin, Globe2, ArrowRight, ShieldCheck } from "lucide-react";

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
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's connect your business to <span className="text-gold">global commodity markets.</span></>}
        description="Our trade desk responds within one business day. Reach us by phone, email, WhatsApp or fill in the registration form."
      />
      <section className="container-x py-16 grid lg:grid-cols-[1fr_1.1fr] gap-10">
        <div className="space-y-4">
          {[
            { icon: MapPin, label: "Address", value: "Luanda, Angola" },
            { icon: Phone, label: "Phone / WhatsApp", value: "+244 926 599 991" },
            { icon: Mail, label: "Email", value: "info@zentratrading.com" },
            { icon: Globe2, label: "Website", value: "www.zentratrading.com" },
          ].map((c) => (
            <div key={c.label} className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-card">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-gold text-[color:var(--gold-foreground)] shadow-gold">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
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
          <h2 className="font-display text-2xl font-bold text-[color:var(--navy)]">Join Zentra Trading</h2>
          <p className="mt-1.5 text-sm text-muted-foreground">Tell us about your business — we'll set up your trade profile.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Field label="Full Name" />
            <Field label="Company Name" />
            <Field label="Email" type="email" />
            <Field label="WhatsApp" />
            <SelectField label="Country" options={["Angola","Nigeria","South Africa","Brazil","China","USA","Other"]} />
            <SelectField label="Business Type" options={["Producer","Supplier","Exporter","Importer","Investor"]} />
          </div>
          <Field label="Tell us about your trade" textarea />
          <button className="mt-5 group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-gold px-5 py-3.5 text-sm font-semibold text-[color:var(--gold-foreground)] shadow-gold transition hover:translate-y-[-1px]">
            Join Zentra Trading <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </button>
          <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-[color:var(--success)]" /> Your information is secure and confidential.
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

function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-foreground/70 mb-1.5">{label}</span>
      <select className="w-full rounded-lg border border-input bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50">
        <option value="">Select…</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}
