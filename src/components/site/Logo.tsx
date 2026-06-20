import logoAsset from "@/assets/zentra-logo.png.asset.json";

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img
        src={logoAsset.url}
        alt="Zentra Trading"
        className="h-12 w-12 md:h-14 md:w-14 object-contain"
      />
      <div className="leading-none">
        <div className="font-display text-xl md:text-2xl font-bold tracking-tight text-[color:var(--navy)] dark:text-foreground">
          ZENTRA
        </div>
        <div className="mt-1 text-[9px] md:text-[10px] tracking-[0.45em] font-semibold text-foreground/60">
          TRADING
        </div>
      </div>
    </div>
  );
}
