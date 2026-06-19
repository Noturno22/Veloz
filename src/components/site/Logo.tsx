import logoAsset from "@/assets/zentra-logo.png.asset.json";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={logoAsset.url}
        alt="Zentra Trading"
        className={`h-20 md:h-24 w-auto object-contain ${variant === "light" ? "brightness-0 invert" : ""}`}
        width={240}
        height={96}
      />
    </div>
  );
}
