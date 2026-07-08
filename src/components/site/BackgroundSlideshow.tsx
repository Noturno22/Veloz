import { useState, useEffect } from "react";

const FOLDER_GLOBS: Record<string, Record<string, string>> = {
  Home: import.meta.glob<string>("/src/assets/IMG/Home/*.{jpg,jpeg,png,webp,svg}", { eager: true, query: "?url", import: "default" }),
  Analises: import.meta.glob<string>("/src/assets/IMG/Analises/*.{jpg,jpeg,png,webp,svg}", { eager: true, query: "?url", import: "default" }),
  Contacto: import.meta.glob<string>("/src/assets/IMG/Contacto/*.{jpg,jpeg,png,webp,svg}", { eager: true, query: "?url", import: "default" }),
  Parcerias: import.meta.glob<string>("/src/assets/IMG/Parcerias/*.{jpg,jpeg,png,webp,svg}", { eager: true, query: "?url", import: "default" }),
  commodites: import.meta.glob<string>("/src/assets/IMG/commodites/*.{jpg,jpeg,png,webp,svg}", { eager: true, query: "?url", import: "default" }),
};

function getImages(folder: string): string[] {
  const map = FOLDER_GLOBS[folder] ?? FOLDER_GLOBS["Home"];
  return Object.keys(map).sort().map((key) => map[key]);
}

const homeImages = getImages("Home");

export function BackgroundSlideshow({ images: customImages, folder }: { images?: string[]; folder?: string }) {
  const images = customImages ?? (folder ? getImages(folder) : homeImages);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const DURATION = 4000;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, DURATION + 1000);
    return () => clearInterval(interval);
  }, [images.length]);

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
            transition: "opacity 1s ease-in-out, transform 6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            willChange: "opacity, transform",
            zIndex: idx === active ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
}
