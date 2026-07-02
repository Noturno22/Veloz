const images = Object.values(
  import.meta.glob<string>("/src/assets/carrocel/home/*.{jpg,jpeg,png,webp,avif}", {
    eager: true,
    query: "?url",
    import: "default",
  })
);

export function BackgroundSlideshow() {
  if (images.length === 0) return null;

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${images[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/20 z-[2]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30 z-[2]" />
    </div>
  );
}
