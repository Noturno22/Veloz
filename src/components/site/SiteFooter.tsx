import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useEffect, useRef } from "react";

const frameModules = import.meta.glob<{ default: string }>(
  "@/assets/onboarding/*.jpg",
  { eager: true, query: "?url", import: "default" },
);
const frameUrls = Object.values(frameModules) as string[];

function FooterBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || frameUrls.length === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imgs = frameUrls.map((url) => {
      const img = new Image();
      img.src = url;
      return img;
    });
    imgRef.current = imgs;

    let stopped = false;
    let lastTime = 0;
    const fps = 12;
    const interval = 1000 / fps;

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      if (canvas!.width !== w || canvas!.height !== h) {
        canvas!.width = w;
        canvas!.height = h;
      }
    }

    function animate(time: number) {
      if (stopped) return;
      resize();
      const delta = time - lastTime;
      if (delta >= interval) {
        lastTime = time - (delta % interval);
        const idx = frameRef.current % imgs.length;
        const img = imgs[idx];
        if (img.complete && img.naturalWidth > 0) {
          const cw = canvas!.width;
          const ch = canvas!.height;
          const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
          const iw = img.naturalWidth * scale;
          const ih = img.naturalHeight * scale;
          const ix = (cw - iw) / 2;
          const iy = (ch - ih) / 2;
          ctx!.clearRect(0, 0, cw, ch);
          ctx!.drawImage(img, ix, iy, iw, ih);
        }
        frameRef.current = (frameRef.current + 1) % imgs.length;
      }
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);

    return () => { stopped = true; };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
    />
  );
}

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="relative mt-24 bg-[#06111F] text-white border-t border-white/5 overflow-hidden">
      <FooterBackground />
      <div className="relative container-x pt-10 pb-16">
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
                  className="h-10 w-10 grid place-items-center border border-white/15 hover:bg-gold hover:border-gold hover:text-[color:var(--gold-foreground)]"
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
                <Link to="/about" className="hover:text-white">{t("nav.about")}</Link>
                <Link to="/how-it-works" className="hover:text-white">{t("nav.howItWorks")}</Link>
                <Link to="/partnership" className="hover:text-white">{t("nav.partnership")}</Link>
                <Link to="/insights" className="hover:text-white">{t("nav.insights")}</Link>
              </nav>
            </div>
            <div className="space-y-5">
              <h4 className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold">{t("footer.commoditiesH")}</h4>
              <nav className="flex flex-col space-y-3 text-white/50 text-sm">
                <Link to="/commodities" className="hover:text-white">{t("comm.agricultural")}</Link>
                <Link to="/commodities" className="hover:text-white">{t("comm.minerals")}</Link>
                <Link to="/commodities" className="hover:text-white">{t("comm.energy")}</Link>
                <Link to="/commodities" className="hover:text-white">{t("comm.industrial")}</Link>
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
