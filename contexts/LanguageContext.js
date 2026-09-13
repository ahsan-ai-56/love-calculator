import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext({
  lang: "en",
  toggleLang: () => {},
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  // Remember the user's choice across visits
  useEffect(() => {
    const saved = window.localStorage.getItem("site-lang");
    if (saved === "hi" || saved === "en") setLang(saved);
  }, []);

  function toggleLang() {
    setLang((prev) => {
      const next = prev === "en" ? "hi" : "en";
      window.localStorage.setItem("site-lang", next);
      return next;
    });
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
