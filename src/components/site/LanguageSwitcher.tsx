import { useEffect, useRef, useState } from "react";
import { Globe, Check } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { Lang } from "@/lib/translations";

const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "pt", label: "Português", flag: "🇵🇹" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "kg", label: "Kikongo", flag: "🇨🇩" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
];

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3 h-9 text-sm font-medium text-foreground/80 hover:text-foreground hover:border-gold"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Globe className="h-4 w-4" />
        {lang.toUpperCase()}
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border border-border bg-popover shadow-card z-50"
        >
          {LANGS.map((l) => {
            const active = l.code === lang;
            return (
              <li key={l.code}>
                <button
                  type="button"
                  onClick={() => { setLang(l.code); setOpen(false); }}
                  className={`flex w-full items-center justify-between gap-2 px-3 py-2.5 text-sm hover:bg-muted ${active ? "text-gold font-semibold" : "text-foreground"}`}
                >
                  <span className="flex items-center gap-2">
                    <span aria-hidden>{l.flag}</span>
                    {l.label}
                  </span>
                  {active && <Check className="h-4 w-4" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
