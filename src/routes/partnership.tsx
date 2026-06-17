import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/partnership")({
  head: () => ({
    meta: [
      { title: "Partnership — Zentra Trading" },
      { name: "description", content: "Join 850+ partners trading globally with Zentra Trading. Become a producer, supplier, exporter, importer or investor partner." },
      { property: "og:title", content: "Partnership — Zentra Trading" },
      { property: "og:url", content: "/partnership" },
    ],
    links: [{ rel: "canonical", href: "/partnership" }],
  }),
  component: Partnership,
});

const TIERS = [
  { title: "Producer Partner", text: "Direct access to international buyers for your harvest or production.", perks: ["Verified buyer network", "Price discovery", "Logistics support"] },
  { title: "Trade Partner", text: "Exporters and importers gain a verified pipeline of opportunities.", perks: ["Curated deal flow", "Compliance support", "Trade desk"] },
  { title: "Investor Partner", text: "Access vetted commodity-backed opportunities and trade financing.", perks: ["Project pipeline", "Risk assessment", "Co-investment"] },
];

function Partnership() {
  return (
    <>
      <PageHero
        eyebrow="Partnership"
        title={<>Grow with a <span className="text-gold">trusted global network.</span></>}
        description="850+ partners across 50+ countries trust Zentra Trading to connect them to the right counterparties. Choose your partnership tier."
      />
      <section className="container-x py-16 grid gap-6 md:grid-cols-3">
        {TIERS.map((t) => (
          <div key={t.title} className="hover-lift rounded-2xl border border-border bg-white p-7 shadow-card">
            <h3 className="font-display text-xl font-semibold text-[color:var(--navy)]">{t.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t.text}</p>
            <ul className="mt-5 space-y-2 text-sm">
              {t.perks.map((p) => (
                <li key={p} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-[color:var(--success)]" /> {p}</li>
              ))}
            </ul>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-[color:var(--gold-foreground)] shadow-gold">
              Apply <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </section>
      <section className="container-x pb-16">
        <div className="rounded-2xl border border-border bg-white p-8 shadow-card">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">Trusted Globally</div>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold text-[color:var(--navy)]">850+ partners across five continents</h2>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {["Nordbridge", "AuriCo", "MeridianAg", "Sahara Energy", "PortusLog", "ZenithSteel"].map((n) => (
              <div key={n} className="grid h-16 place-items-center rounded-xl bg-[color:var(--accent)] text-sm font-semibold tracking-wider text-[color:var(--navy)]/70">
                {n.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
