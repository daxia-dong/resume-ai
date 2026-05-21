import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import zh from "./zh.json";
import es from "./es.json";
import fr from "./fr.json";
import pt from "./pt.json";
import de from "./de.json";
import ja from "./ja.json";
import ko from "./ko.json";
import ru from "./ru.json";
import hi from "./hi.json";
import ar from "./ar.json";
import it from "./it.json";

const savedLang = typeof window !== "undefined" ? localStorage.getItem("lang") : null;

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en }, zh: { translation: zh }, es: { translation: es },
    fr: { translation: fr }, pt: { translation: pt }, de: { translation: de },
    ja: { translation: ja }, ko: { translation: ko }, ru: { translation: ru },
    hi: { translation: hi }, ar: { translation: ar }, it: { translation: it },
  },
  lng: savedLang || "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
