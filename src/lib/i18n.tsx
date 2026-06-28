import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Lang, type TKey } from "./translations";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: TKey) => string };
const I18nContext = createContext<Ctx>({ lang: "en", setLang: () => {}, t: (k) => k });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("zentra-lang") as Lang | null;
      if (stored === "en" || stored === "pt") {
        setLangState(stored);
        document.documentElement.lang = stored;
        return;
      }
      const nav = (navigator.language || "en").toLowerCase();
      const initial: Lang = nav.startsWith("pt") ? "pt" : "en";
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
