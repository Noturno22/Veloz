import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-navy text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #D4A017 0, transparent 40%), radial-gradient(circle at 80% 60%, #D4A017 0, transparent 35%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div className="container-x relative py-20 md:py-28">
        <div className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">{eyebrow}</div>
        <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base md:text-lg text-white/75">{description}</p>
        )}
        {children}
      </div>
    </section>
  );
}
