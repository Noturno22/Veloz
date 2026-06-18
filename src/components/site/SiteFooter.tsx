import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { Logo } from "./Logo";
import { useI18n } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="mt-24 bg-[color:var(--navy)] text-[color:var(--navy-foreground)]">
      <div className="container-x py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="rounded-lg bg-white/95 inline-flex px-3 py-2">
            <Logo />
          </div>
          <p className="mt-5 text-sm text-white/70 max-w-xs">{t("footer.tagline")}</p>
          <div className="mt-5 flex gap-3">
            {[Linkedin, Twitter, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-full border border-white/15 hover:bg-gold hover:border-gold hover:text-[color:var(--gold-foreground)] transition" aria-label="Social">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">{t("footer.company")}</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li><Link to="/about" className="hover:text-gold">{t("nav.about")}</Link></li>
            <li><Link to="/how-it-works" className="hover:text-gold">{t("nav.howItWorks")}</Link></li>
            <li><Link to="/partnership" className="hover:text-gold">{t("nav.partnership")}</Link></li>
            <li><Link to="/insights" className="hover:text-gold">{t("nav.insights")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">{t("footer.commoditiesH")}</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            <li><Link to="/commodities" className="hover:text-gold">{t("comm.agricultural")}</Link></li>
            <li><Link to="/commodities" className="hover:text-gold">{t("comm.minerals")}</Link></li>
            <li><Link to="/commodities" className="hover:text-gold">{t("comm.energy")}</Link></li>
            <li><Link to="/commodities" className="hover:text-gold">{t("comm.industrial")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">{t("footer.contactH")}</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2.5"><MapPin className="h-4 w-4 mt-0.5 text-gold" />Luanda, Angola</li>
            <li className="flex items-start gap-2.5"><Phone className="h-4 w-4 mt-0.5 text-gold" />+244 926 599 991</li>
            <li className="flex items-start gap-2.5"><Mail className="h-4 w-4 mt-0.5 text-gold" />info@zentratrading.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Zentra Trading. {t("footer.rights")}</p>
          <p>{t("footer.slogan")}</p>
        </div>
      </div>
    </footer>
  );
}
