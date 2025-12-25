const LOCALE_MAP: Record<string, string> = {
  ar: "ar",
  en: "en",
  fr: "fr",
  de: "de",
  id: "id",
  it: "it",
  ja: "ja",
  ko: "ko-KR",
  pl: "pl",
  "pt-BR": "pt-BR",
  "pt-PT": "pt-PT",
  ru: "ru",
  "zh-Hans": "zh-CN",
  "zh-Hant": "zh-TW",
  "es-419": "es-419",
  "es-ES": "es-ES",
  th: "th",
  tr: "tr",
  uk: "uk",
  vi: "vi",
};

export const getLocaleForLanguage = (language: string) =>
  LOCALE_MAP[language] || language;
