import type { ReactNode } from "react";
import { BackgroundSlideshow } from "./BackgroundSlideshow";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  showSlideshow = true,
  bgImages,
  imageFolder,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
  showSlideshow?: boolean;
  bgImages?: string[];
  imageFolder?: string;
}) {
  return (
    <section className="relative text-white">
      <div className="absolute inset-0 z-0">
        {bgImages
          ? <BackgroundSlideshow images={bgImages} />
          : showSlideshow && <BackgroundSlideshow folder={imageFolder} />}
      </div>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-navy/40 to-navy/10 z-[2]"
      />
      <div className="sticky top-0 z-[3] min-h-screen flex items-center">
        <div className="container-x py-20 md:py-28 w-full">
          <div className="inline-block">
            <span className="text-xs font-semibold uppercase tracking-[0.32em] bg-gold/20 text-gold px-4 py-1.5 rounded-full backdrop-blur-sm inline-block">
              {eyebrow}
            </span>
          </div>
          <h1
            className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] max-w-4xl"
            style={{
              textShadow: "0 2px 40px rgba(0,0,0,.5), 0 1px 10px rgba(0,0,0,.4)",
            }}
          >
            {title}
          </h1>
          {description && (
            <p
              className="mt-6 max-w-2xl text-base md:text-lg text-white/90 leading-relaxed"
              style={{
                textShadow: "0 1px 20px rgba(0,0,0,.4)",
              }}
            >
              {description}
            </p>
          )}
          {children && (
            <div className="mt-8">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
