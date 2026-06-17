import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  center,
  light,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className={`text-xs font-semibold uppercase tracking-[0.28em] ${light ? "text-gold" : "text-gold"}`}>
          {eyebrow}
        </div>
      )}
      <h2 className={`mt-3 font-display text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-[1.1] ${light ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base md:text-lg ${light ? "text-white/75" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
