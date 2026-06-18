import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { useI18n } from "@/lib/i18n";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const { t } = useI18n();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? t("nav.theme.light") : t("nav.theme.dark")}
      title={isDark ? t("nav.theme.light") : t("nav.theme.dark")}
      className={`grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground/80 hover:text-foreground hover:border-gold transition ${className}`}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
