import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="mt-24 bg-[#06111F] text-white border-t border-white/5">
      <div className="container-x py-24">
        <div className="flex flex-col md:flex-row justify-between items-start border-b border-white/10 pb-16 gap-12">
          <div className="max-w-sm">
            <img src="/zentra-logo.png" alt="Veloz" className="w-72 h-auto object-contain" />
            <p className="mt-5 text-sm text-white/50 leading-relaxed">{t("footer.tagline")}</p>
            <div className="mt-6 space-y-1 text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold">
              <p>London · São Paulo · Geneva · Singapore</p>
            </div>
            <div className="mt-6 flex gap-3">
              {([
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Facebook, label: "Facebook" },
              ] as const).map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="h-10 w-10 grid place-items-center border border-white/15 hover:bg-gold hover:border-gold hover:text-[color:var(--gold-foreground)] transition"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-20">
            <div className="space-y-5">
              <h4 className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold">{t("footer.company")}</h4>
              <nav className="flex flex-col space-y-3 text-white/50 text-sm">
                <Link to="/about" className="hover:text-white transition-colors">{t("nav.about")}</Link>
                <Link to="/how-it-works" className="hover:text-white transition-colors">{t("nav.howItWorks")}</Link>
                <Link to="/partnership" className="hover:text-white transition-colors">{t("nav.partnership")}</Link>
                <Link to="/insights" className="hover:text-white transition-colors">{t("nav.insights")}</Link>
              </nav>
            </div>
            <div className="space-y-5">
              <h4 className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold">{t("footer.commoditiesH")}</h4>
              <nav className="flex flex-col space-y-3 text-white/50 text-sm">
                <Link to="/commodities" className="hover:text-white transition-colors">{t("comm.agricultural")}</Link>
                <Link to="/commodities" className="hover:text-white transition-colors">{t("comm.minerals")}</Link>
                <Link to="/commodities" className="hover:text-white transition-colors">{t("comm.energy")}</Link>
                <Link to="/commodities" className="hover:text-white transition-colors">{t("comm.industrial")}</Link>
              </nav>
            </div>
            <div className="space-y-5">
              <h4 className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold">{t("footer.contactH")}</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="flex items-start gap-2.5"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />128 City Road, London, EC1V 2NX</li>
                <li className="flex items-start gap-2.5"><Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" />+44 7564155651</li>
                <li className="flex items-start gap-2.5"><Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" />info@veloz.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.25em] text-white/30 gap-4">
          <p>© {new Date().getFullYear()} Veloz Group. {t("footer.rights")}</p>
          <p className="text-white/40">{t("footer.slogan")}</p>
        </div>
      </div>
    </footer>
  );
}
