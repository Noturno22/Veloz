import logoAsset from "@/assets/zentra-logo.png.asset.json";

export function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <img
        src={logoAsset.url}
        alt="Zentra Trading"
        className="h-10 w-10 md:h-11 md:w-11 object-contain"
      />
      <div className="leading-none">
        <div className="font-display text-lg md:text-xl font-bold tracking-tight text-[color:var(--navy)] dark:text-foreground">
          ZENTRA
        </div>
        <div className="mt-1 text-[8px] md:text-[9px] tracking-[0.45em] font-semibold text-foreground/60">
          TRADING
        </div>
      </div>
    </div>
  );
}
