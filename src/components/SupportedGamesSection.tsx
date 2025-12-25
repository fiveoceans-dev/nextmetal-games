import lolLogo from "@/assets/lol-logo.svg";
import starcraftLogo from "@/assets/starcraft-logo.svg";
import starcraft2Logo from "@/assets/starcraft2-logo.svg";
import { useTranslation } from "react-i18next";

export const SupportedGamesSection = () => {
  const { t } = useTranslation();
  const games = [
    { name: t("supportedGames.games.lol"), status: t("supportedGames.status.live"), logo: lolLogo, badgeClass: "bg-primary/10 text-primary" },
    { name: t("supportedGames.games.starcraft"), status: t("supportedGames.status.comingSoon"), logo: starcraftLogo, badgeClass: "bg-muted text-muted-foreground" },
    { name: t("supportedGames.games.starcraft2"), status: t("supportedGames.status.comingSoon"), logo: starcraft2Logo, badgeClass: "bg-muted text-muted-foreground" },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mt-3">{t("supportedGames.title")}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {games.map((game) => (
            <div key={game.name} className="flex flex-col items-center gap-3 text-center">
              <img src={game.logo} alt={t("supportedGames.logoAlt", { name: game.name })} className="w-24 h-24 object-contain" />
              <p className="text-lg font-semibold">{game.name}</p>
              <span className={`text-xs px-3 py-1 rounded-full font-mono uppercase tracking-[0.15em] ${game.badgeClass}`}>
                {game.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
