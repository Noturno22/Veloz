import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, UserRound } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useI18n } from "@/lib/i18n";
import type { TKey } from "@/lib/translations";

const NAV: { to: string; key: TKey }[] = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/commodities", key: "nav.commodities" },
  { to: "/how-it-works", key: "nav.howItWorks" },
  { to: "/insights", key: "nav.insights" },
  { to: "/partnership", key: "nav.partnership" },
  { to: "/contact", key: "nav.contact" },
];

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "border-white/10 bg-[color:var(--background)]/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-24 items-center justify-between">
        <Link to="/" aria-label="Zentra Trading home" className="flex items-center">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative text-[10px] font-bold uppercase tracking-[0.3em] transition-colors ${
                  active ? "text-gold" : "text-foreground/60 hover:text-gold"
                }`}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <Link
            to="/contact"
            className="ml-1 inline-flex items-center gap-2 bg-gold px-7 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--gold-foreground)] hover:brightness-110 transition-all"
          >
            <UserRound className="h-3.5 w-3.5" /> {t("nav.login")}
          </Link>
        </div>

        <div className="flex lg:hidden items-center gap-1">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            aria-label={t("common.openMenu")}
            className="p-2 -mr-2 rounded-md hover:bg-muted text-foreground"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[color:var(--background)]/95 backdrop-blur">
          <nav className="container-x py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-3 py-2.5 text-xs font-bold uppercase tracking-[0.25em] hover:bg-white/5 text-foreground/80"
              >
                {t(item.key)}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 bg-gold px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--gold-foreground)]"
            >
              {t("common.joinZentra")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
