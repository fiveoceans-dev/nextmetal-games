import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-base font-semibold tracking-tight">
            Next Metal
          </div>
          
          <div className="text-base text-muted-foreground">{t("footer.rights")}</div>
        </div>
      </div>
    </footer>
  );
};
