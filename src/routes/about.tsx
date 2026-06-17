import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Target, Eye, Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Zentra Trading" },
      { name: "description", content: "Zentra Trading facilitates global commodity business through an international network of trusted partners." },
      { property: "og:title", content: "About Us — Zentra Trading" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const VALUES = ["Transparency", "Integrity", "Efficiency", "Innovation", "Trust"];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Zentra Trading"
        title={<>Bridging continents through <span className="text-gold">trusted commodity trading.</span></>}
        description="Zentra Trading facilitates global commodity business through an international network of trusted partners — connecting producers, exporters, importers and investors with confidence."
      />
      <section className="container-x py-16 grid lg:grid-cols-3 gap-6">
        {[
          { icon: Target, title: "Our Mission", text: "Connect markets and create sustainable commercial opportunities through transparent, secure trading." },
          { icon: Eye, title: "Our Vision", text: "To be the African reference in international commodity intermediation, recognized globally for excellence." },
          { icon: Sparkles, title: "Our Promise", text: "Premium service, end-to-end support and uncompromising integrity in every transaction we facilitate." },
        ].map((c) => (
          <div key={c.title} className="hover-lift rounded-2xl border border-border bg-white p-7 shadow-card">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-[color:var(--gold-foreground)] shadow-gold">
              <c.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold text-[color:var(--navy)]">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
          </div>
        ))}
      </section>
      <section className="container-x py-10">
        <div className="rounded-3xl bg-gradient-navy p-10 lg:p-14 text-white shadow-elegant">
          <SectionHeading
            eyebrow="Our Values"
            title="Five principles guide every trade we facilitate."
            light
          />
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {VALUES.map((v) => (
              <div key={v} className="rounded-xl border border-white/15 bg-white/5 p-5 text-center backdrop-blur-sm hover:bg-white/10 transition">
                <div className="font-display text-xl font-semibold text-gold">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container-x py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Built to make global trading simple."
              description="From our headquarters in Luanda, we operate as the strategic link between producers and buyers across five continents. We combine local insight with global infrastructure to unlock opportunities that move markets."
            />
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-6 py-3 text-sm font-semibold text-[color:var(--gold-foreground)] shadow-gold">
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: "50+", l: "Countries" },
              { v: "1,200+", l: "Transactions" },
              { v: "850+", l: "Partners" },
              { v: "$2.8B+", l: "Volume" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border bg-white p-6 text-center shadow-card">
                <div className="font-display text-3xl font-bold text-[color:var(--navy)]">{s.v}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
