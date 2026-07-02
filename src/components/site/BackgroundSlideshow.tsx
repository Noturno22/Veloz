import { useState, useEffect } from "react";

const imagesMap = import.meta.glob<string>("/src/assets/IMG/Home/*.{jpg,png}", {
  eager: true,
  query: "?url",
  import: "default",
});

const images = Object.keys(imagesMap).sort().map((key) => imagesMap[key]);

export function BackgroundSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const DURATION = 5000;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, DURATION + 1500);
    return () => clearInterval(interval);
  }, []);

  if (images.length === 0) return null;

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      {images.map((src, idx) => (
        <div
          key={idx}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: idx === active ? 1 : 0,
            transform: idx === active ? "scale(1.08)" : "scale(1)",
            transition:
              "opacity 1.5s ease-in-out, transform 8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            willChange: "opacity, transform",
            zIndex: idx === active ? 1 : 0,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black/30 z-[2]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30 z-[2]" />
    </div>
  );
}
