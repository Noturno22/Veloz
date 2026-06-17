import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Zentra Trading" },
      { name: "description", content: "Market intelligence, trade news and sector reports from Zentra Trading." },
      { property: "og:title", content: "Insights — Zentra Trading" },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: Insights,
});

const CATS = ["All", "Commodities Market", "Export News", "Import Trends", "Energy Sector", "Agriculture Sector"];

const POSTS = [
  { cat: "Commodities Market", title: "Global commodity prices stabilize as trade flows rebound", date: "Jun 12, 2026", read: "5 min" },
  { cat: "Energy Sector", title: "Crude oil markets navigate a new era of demand", date: "Jun 04, 2026", read: "6 min" },
  { cat: "Agriculture Sector", title: "African coffee exports hit record volumes in Q2", date: "May 28, 2026", read: "4 min" },
  { cat: "Export News", title: "Trade corridors connecting Africa and Asia expand", date: "May 19, 2026", read: "7 min" },
  { cat: "Import Trends", title: "Industrial materials demand reshapes shipping routes", date: "May 02, 2026", read: "5 min" },
  { cat: "Commodities Market", title: "Gold remains the safe-haven of choice for institutions", date: "Apr 21, 2026", read: "6 min" },
];

function Insights() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={<>Market intelligence for <span className="text-gold">decisive traders.</span></>}
        description="Sector reports, market analysis and trade news curated by the Zentra Trading research desk."
      />
      <section className="container-x py-10 flex flex-wrap gap-2">
        {CATS.map((c, i) => (
          <button key={c} className={`rounded-full px-4 py-2 text-sm font-medium border transition ${i===0 ? "bg-[color:var(--navy)] text-white border-[color:var(--navy)]" : "border-border bg-white hover:border-gold"}`}>
            {c}
          </button>
        ))}
      </section>
      <section className="container-x pb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((p, i) => (
          <article key={i} className="hover-lift group overflow-hidden rounded-2xl border border-border bg-white shadow-card">
            <div className="h-44 bg-gradient-navy relative">
              <div
                aria-hidden
                className="absolute inset-0 opacity-40"
                style={{ background: "radial-gradient(circle at 20% 20%, #D4A017 0%, transparent 60%)" }}
              />
              <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[color:var(--navy)]">
                {p.cat}
              </span>
            </div>
            <div className="p-6">
              <div className="text-xs text-muted-foreground">{p.date} · {p.read} read</div>
              <h3 className="mt-2 font-display text-lg font-semibold text-[color:var(--navy)] group-hover:text-gold transition">
                {p.title}
              </h3>
              <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold underline-gold">
                Read article <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
