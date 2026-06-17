import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import agriImg from "@/assets/commodity-agricultural.jpg";
import mineralsImg from "@/assets/commodity-minerals.jpg";
import energyImg from "@/assets/commodity-energy.jpg";
import industrialImg from "@/assets/commodity-industrial.jpg";

export const Route = createFileRoute("/commodities")({
  head: () => ({
    meta: [
      { title: "Commodities — Zentra Trading" },
      { name: "description", content: "Agricultural, mineral, energy and industrial commodities traded across our global network." },
      { property: "og:title", content: "Commodities — Zentra Trading" },
      { property: "og:url", content: "/commodities" },
    ],
    links: [{ rel: "canonical", href: "/commodities" }],
  }),
  component: Commodities,
});

const GROUPS = [
  { title: "Agricultural", img: agriImg, items: ["Coffee", "Soybeans", "Corn", "Rice", "Cocoa", "Sugar"], desc: "Sourced directly from farmers and producers across Africa, the Americas and Asia." },
  { title: "Minerals", img: mineralsImg, items: ["Gold", "Diamonds", "Copper", "Iron Ore", "Manganese", "Bauxite"], desc: "Certified mineral exports with full traceability and chain-of-custody documentation." },
  { title: "Energy", img: energyImg, items: ["Crude Oil", "Natural Gas", "LPG", "Diesel", "Jet Fuel"], desc: "Reliable supply contracts and spot trading across global energy markets." },
  { title: "Industrial", img: industrialImg, items: ["Steel", "Aluminum", "Cement", "Construction Materials"], desc: "Industrial inputs for infrastructure, manufacturing and construction projects worldwide." },
];

function Commodities() {
  return (
    <>
      <PageHero
        eyebrow="Our Commodities"
        title={<>Four sectors. <span className="text-gold">One global marketplace.</span></>}
        description="From agricultural staples to industrial inputs, Zentra Trading intermediates every category required to power global commerce."
      />
      <section className="container-x py-16 space-y-10">
        {GROUPS.map((g, i) => (
          <div key={g.title} className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="overflow-hidden rounded-3xl shadow-card">
              <img src={g.img} alt={g.title} className="w-full h-72 lg:h-96 object-cover hover:scale-105 transition duration-700" loading="lazy" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Category {String(i+1).padStart(2,"0")}</div>
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-[color:var(--navy)]">{g.title} Commodities</h2>
              <p className="mt-3 text-muted-foreground">{g.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="rounded-full border border-border bg-white px-4 py-1.5 text-sm font-medium text-foreground/80">{it}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
