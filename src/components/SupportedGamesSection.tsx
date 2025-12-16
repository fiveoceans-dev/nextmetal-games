import lolLogo from "@/assets/lol-logo.svg";
import starcraftLogo from "@/assets/starcraft-logo.svg";
import starcraft2Logo from "@/assets/starcraft2-logo.svg";

export const SupportedGamesSection = () => {
  const games = [
    { name: "League of Legends", status: "Live", logo: lolLogo, badgeClass: "bg-primary/10 text-primary" },
    { name: "StarCraft I", status: "Coming Soon", logo: starcraftLogo, badgeClass: "bg-muted text-muted-foreground" },
    { name: "StarCraft II", status: "Coming Soon", logo: starcraft2Logo, badgeClass: "bg-muted text-muted-foreground" },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] font-mono text-muted-foreground">Supported Games</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] mt-3">More Games Coming Soon</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {games.map((game) => (
            <div key={game.name} className="flex flex-col items-center gap-3 text-center">
              <img src={game.logo} alt={`${game.name} logo`} className="w-24 h-24 object-contain" />
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
