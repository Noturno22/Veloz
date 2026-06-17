import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Building2, FileCheck2, TrendingUp, ArrowRight, ShieldCheck, Globe2, Briefcase, Lightbulb, HandCoins, Truck } from "lucide-react";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — Zentra Trading" },
      { name: "description", content: "Three simple steps and six core services to start trading globally with Zentra Trading." },
      { property: "og:title", content: "How It Works — Zentra Trading" },
      { property: "og:url", content: "/how-it-works" },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
  component: HowItWorks,
});

const STEPS = [
  { n: "01", icon: Building2, title: "Create Business Profile", text: "Set up your company profile and share what you trade and where you operate." },
  { n: "02", icon: FileCheck2, title: "Verify Company Information", text: "Upload required documents — our compliance team verifies your credentials." },
  { n: "03", icon: TrendingUp, title: "Start Trading Opportunities", text: "Access live opportunities, partners and our trade desk to close your first deal." },
];

const SERVICES = [
  { icon: ShieldCheck, title: "Trade Facilitation", text: "Intermediation between buyers and sellers across borders." },
  { icon: Globe2, title: "Export Consulting", text: "Strategy, compliance and routes for your exports." },
  { icon: Briefcase, title: "Import Advisory", text: "Sourcing, contracts and delivery for importers." },
  { icon: Lightbulb, title: "Market Intelligence", text: "Real-time insight on prices, demand and risks." },
  { icon: HandCoins, title: "Investor Connections", text: "Match projects with global commodity investors." },
  { icon: Truck, title: "Logistics Support", text: "Shipping, customs and insurance coordination." },
];

function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title={<>Three steps to start <span className="text-gold">trading globally.</span></>}
        description="A simple onboarding designed for serious producers, traders and investors. Get verified, get connected, get trading."
      />
      <section className="container-x py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-border bg-white p-7 shadow-card hover-lift">
              <div className="absolute -top-3 right-6 rounded-full bg-gradient-gold px-3 py-1 text-xs font-bold text-[color:var(--gold-foreground)] shadow-gold">{s.n}</div>
              <s.icon className="h-9 w-9 text-[color:var(--navy)]" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-xl font-semibold text-[color:var(--navy)]">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container-x py-12">
        <div className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">Our Services</div>
        <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[color:var(--navy)]">Six services. One trusted partner.</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="hover-lift group rounded-2xl border border-border bg-white p-6 shadow-card">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--gold-soft)] text-[color:var(--navy)] group-hover:bg-gradient-gold group-hover:text-[color:var(--gold-foreground)] transition">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-[color:var(--navy)]">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-gold underline-gold">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
