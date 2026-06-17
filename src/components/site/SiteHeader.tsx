import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Globe, Menu, X, UserRound } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/commodities", label: "Commodities" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/insights", label: "Insights" },
  { to: "/partnership", label: "Partnership" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-card" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" aria-label="Zentra Trading home">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative text-sm font-medium transition-colors ${
                  active ? "text-gold" : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-1 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gold" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button className="flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-foreground transition">
            <Globe className="h-4 w-4" /> EN
          </button>
          <Link
            to="/contact"
            className="flex items-center gap-2 rounded-lg border border-gold/80 px-4 py-2 text-sm font-semibold text-foreground hover:bg-gold hover:text-[color:var(--gold-foreground)] transition-colors"
          >
            <UserRound className="h-4 w-4" /> Login
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 -mr-2 rounded-md hover:bg-muted"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur">
          <nav className="container-x py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-3 py-2.5 text-sm font-medium hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 rounded-lg bg-gradient-gold px-4 py-2.5 text-center text-sm font-semibold text-[color:var(--gold-foreground)]"
            >
              Join Zentra
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
