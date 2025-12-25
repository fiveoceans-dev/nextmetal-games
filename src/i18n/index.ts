import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { DEFAULT_LANGUAGE, RTL_LANGUAGES } from "./languages";
import { resources, supportedLanguages } from "./resources";

export const LANGUAGE_STORAGE_KEY = "nextmetal-language";

const updateDocumentLanguage = (language: string) => {
  document.documentElement.lang = language;
  document.documentElement.dir = RTL_LANGUAGES.has(language) ? "rtl" : "ltr";
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: supportedLanguages,
    lng: DEFAULT_LANGUAGE,
    nonExplicitSupportedLngs: true,
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
      lookupLocalStorage: LANGUAGE_STORAGE_KEY,
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

updateDocumentLanguage(i18n.language);
i18n.on("languageChanged", updateDocumentLanguage);

export default i18n;
