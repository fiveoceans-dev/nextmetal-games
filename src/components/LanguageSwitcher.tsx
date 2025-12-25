import { Globe } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTranslation } from "react-i18next";
import { LANGUAGE_OPTIONS } from "@/i18n/languages";

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage || i18n.language;

  return (
    <Select value={currentLanguage} onValueChange={(value) => i18n.changeLanguage(value)}>
      <SelectTrigger
        aria-label={t("nav.languageAria")}
        className="h-10 w-[180px] rounded-full border border-border/70 bg-background/60 text-xs font-semibold uppercase tracking-[0.25em] text-foreground/70 hover:text-foreground"
      >
        <Globe className="h-4 w-4 mr-2" />
        <SelectValue placeholder={t("nav.language")} />
      </SelectTrigger>
      <SelectContent>
        {LANGUAGE_OPTIONS.map((language) => (
          <SelectItem key={language.code} value={language.code}>
            {language.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
