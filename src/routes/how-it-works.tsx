import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  ArrowRight, ShieldCheck, Globe2, Briefcase, Lightbulb, HandCoins, Truck,
  UserPlus, FileCheck, Handshake, Users, TrendingUp, HeartHandshake,
  Building2, BadgeCheck, Sparkles, Star, CheckCircle,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { TKey } from "@/lib/translations";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "Como Funciona — Veloz" },
      { name: "description", content: "Saiba como a Veloz facilita o comércio global de commodities de forma simples, segura e transparente." },
      { property: "og:title", content: "Como Funciona — Veloz" },
      { property: "og:url", content: "https://zentratrading.com/how-it-works" },
    ],
    links: [{ rel: "canonical", href: "https://zentratrading.com/how-it-works" }],
  }),
  component: HowItWorks,
});

const STEPS: { icon: typeof UserPlus; titleKey: TKey; descKey: TKey }[] = [
  { icon: UserPlus, titleKey: "how.s1.t", descKey: "how.s1.d" },
  { icon: FileCheck, titleKey: "how.s2.t", descKey: "how.s2.d" },
  { icon: Handshake, titleKey: "how.s3.t", descKey: "how.s3.d" },
  { icon: HeartHandshake, titleKey: "how.s4.t", descKey: "how.s4.d" },
  { icon: Building2, titleKey: "how.s5.t", descKey: "how.s5.d" },
  { icon: BadgeCheck, titleKey: "how.s6.t", descKey: "how.s6.d" },
  { icon: TrendingUp, titleKey: "how.s7.t", descKey: "how.s7.d" },
];

const SERVICES: { icon: typeof ShieldCheck; titleKey: TKey; descKey: TKey }[] = [
  { icon: ShieldCheck, titleKey: "how.sv1.t", descKey: "how.sv1.d" },
  { icon: Globe2, titleKey: "how.sv2.t", descKey: "how.sv2.d" },
  { icon: Briefcase, titleKey: "how.sv3.t", descKey: "how.sv3.d" },
  { icon: Lightbulb, titleKey: "how.sv4.t", descKey: "how.sv4.d" },
  { icon: HandCoins, titleKey: "how.sv5.t", descKey: "how.sv5.d" },
  { icon: Truck, titleKey: "how.sv6.t", descKey: "how.sv6.d" },
];

const TRUST: { icon: typeof CheckCircle; titleKey: TKey; descKey: TKey }[] = [
  { icon: CheckCircle, titleKey: "how.trust.verified", descKey: "how.trust.verifiedDesc" },
  { icon: ShieldCheck, titleKey: "how.trust.secure", descKey: "how.trust.secureDesc" },
  { icon: Sparkles, titleKey: "how.trust.support", descKey: "how.trust.supportDesc" },
];

function RevealOnScroll({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

function HowItWorks() {
  const { t } = useI18n();
  const [activeStep, setActiveStep] = useState(-1);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    STEPS.forEach((_, i) => {
      const el = stepRefs.current[i];
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep((prev) => Math.max(prev, i));
          }
        },
        { threshold: 0.4 },
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <PageHero
        eyebrow={t("how.eyebrow")}
        title={<>{t("how.titleA")} <span className="text-gold">{t("how.titleB")}</span></>}
        description={t("how.desc")}
        showSlideshow
      />

      <section className="container-x py-20 md:py-28">
        <RevealOnScroll>
          <SectionHeading
            eyebrow={t("how.steps.eyebrow")}
            title={t("how.steps.title")}
            description={t("how.steps.desc")}
            center
          />
        </RevealOnScroll>

        <div className="relative mt-16 lg:mt-20">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden lg:block" />
          <div
            className="absolute left-6 top-0 w-px bg-gradient-gold transition-all duration-1000 hidden lg:block"
            style={{ height: `${((activeStep + 1) / STEPS.length) * 100}%` }}
          />

          <div className="relative space-y-12 lg:space-y-16">
            {STEPS.map((s, i) => (
              <div
                key={s.titleKey}
                ref={(el) => { stepRefs.current[i] = el; }}
                className="relative lg:pl-16 group"
              >
                <div className="hidden lg:flex absolute left-[1.1rem] top-1 z-10 w-3 h-3 rounded-full transition-all duration-500"
                  style={{
                    backgroundColor: i <= activeStep ? "var(--gold)" : "var(--border)",
                    boxShadow: i <= activeStep ? "0 0 0 4px color-mix(in oklab, var(--gold) 25%, transparent)" : "none",
                  }}
                />

                <RevealOnScroll>
                  <div className="lg:flex items-start gap-8">
                    <div className="hidden lg:grid shrink-0 w-14 h-14 place-items-center rounded-2xl bg-gradient-gold text-[color:var(--gold-foreground)] shadow-gold group-hover:scale-105 transition-transform duration-300">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-4 lg:hidden mb-4">
                        <div className="grid w-12 h-12 shrink-0 place-items-center rounded-xl bg-gradient-gold text-[color:var(--gold-foreground)] shadow-gold group-hover:scale-105 transition-transform duration-300">
                          <s.icon className="h-5 w-5" />
                        </div>
                        <span className="font-display text-sm font-bold text-gold">0{i + 1}</span>
                      </div>
                      <div className="rounded-2xl border border-border bg-white p-6 lg:p-8 shadow-card hover:shadow-elegant transition-shadow duration-300">
                        <div className="hidden lg:flex items-center gap-3 mb-4">
                          <span className="font-display text-xs font-bold text-gold tracking-widest">STEP 0{i + 1}</span>
                          <span className="h-px flex-1 bg-border" />
                        </div>
                        <h3 className="font-display text-xl lg:text-2xl font-bold text-[color:var(--navy)]">
                          {t(s.titleKey)}
                        </h3>
                        <p className="mt-2 text-sm lg:text-base text-muted-foreground leading-relaxed">
                          {t(s.descKey)}
                        </p>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-navy text-white">
        <div className="container-x py-20 md:py-28">
          <RevealOnScroll>
            <SectionHeading
              eyebrow={t("how.services.eyebrow")}
              title={t("how.services.title")}
              description={t("how.steps.desc")}
              center
              light
            />
          </RevealOnScroll>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <RevealOnScroll key={s.titleKey}>
                <div className="group rounded-2xl border border-white/15 bg-white/5 p-6 lg:p-7 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-gold text-[color:var(--gold-foreground)] shadow-gold">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <span className="font-display text-xs font-bold text-gold/60 tracking-widest">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {t(s.titleKey)}
                  </h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">
                    {t(s.descKey)}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {t("common.learnMore")} <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <RevealOnScroll>
          <SectionHeading
            eyebrow={t("how.trust.eyebrow")}
            title={t("how.trust.title")}
            description={t("how.trust.desc")}
            center
          />
        </RevealOnScroll>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {TRUST.map((item) => (
            <RevealOnScroll key={item.titleKey}>
              <div className="group hover-lift rounded-2xl border border-border bg-white p-8 shadow-card text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-gold text-[color:var(--gold-foreground)] shadow-gold group-hover:scale-105 transition-transform duration-300">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-[color:var(--navy)]">
                  {t(item.titleKey)}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{t(item.descKey)}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="container-x pb-20 md:pb-28">
        <RevealOnScroll>
          <div className="rounded-3xl bg-gradient-navy p-10 lg:p-16 text-white shadow-elegant text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1]">
              {t("about.cta.title")}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-white/75">
              {t("about.cta.desc")}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-[color:var(--gold-foreground)] shadow-gold hover:opacity-90 transition-opacity"
              >
                {t("common.contactUs")} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                {t("about.cta.requestQuote")}
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
