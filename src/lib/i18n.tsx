import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Lang, type TKey } from "./translations";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: TKey) => string };
const I18nContext = createContext<Ctx>({ lang: "en", setLang: () => {}, t: (k) => k });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("zentra-lang") as Lang | null;
      if (stored === "en" || stored === "pt" || stored === "fr" || stored === "zh" || stored === "kg" || stored === "ar" || stored === "es" || stored === "ru") {
        setLangState(stored);
        document.documentElement.lang = stored;
        return;
      }
      const nav = (navigator.language || "en").toLowerCase();
      let initial: Lang = "en";
      if (nav.startsWith("pt")) initial = "pt";
      else if (nav.startsWith("fr")) initial = "fr";
      else if (nav.startsWith("zh")) initial = "zh";
      else if (nav.startsWith("ar")) initial = "ar";
      else if (nav.startsWith("es")) initial = "es";
      else if (nav.startsWith("ru")) initial = "ru";
      setLangState(initial);
      document.documentElement.lang = initial;
    } catch { console.error("Failed to read language from localStorage"); }
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("zentra-lang", l);
      document.documentElement.lang = l;
    } catch { console.error("Failed to persist language to localStorage"); }
  }, []);

  const t = useCallback((k: TKey) => translations[lang][k] ?? translations.en[k] ?? k, [lang]);

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
