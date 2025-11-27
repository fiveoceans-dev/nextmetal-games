import { Card } from "@/components/ui/card";

const leaderboardData = [
  { rank: 1, nickname: "ShadowStrike", tier: "Diamond I", allocation: "5000" },
  { rank: 2, nickname: "PhoenixRising", tier: "Diamond II", allocation: "5000" },
  { rank: 3, nickname: "IceQueen", tier: "Diamond III", allocation: "5000" },
  { rank: 4, nickname: "DragonSlayer", tier: "Platinum I", allocation: "2500" },
  { rank: 5, nickname: "StormBringer", tier: "Platinum II", allocation: "2500" },
];

export const LeaderboardSection = () => {
  return (
    <section className="py-32 relative overflow-hidden border-b border-border">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter">Leaderboard</h2>
            <p className="text-xl text-muted-foreground">
              Top verified players and their token allocations
            </p>
          </div>

          <Card className="minimal-card p-2">
            <div className="divide-y divide-border">
              {leaderboardData.map((player, index) => (
                <div
                  key={player.rank}
                  className="flex items-center justify-between p-6 hover:bg-muted/5 transition-colors animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 text-center">
                      <span className="text-2xl font-bold text-muted-foreground">{player.rank}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{player.nickname}</p>
                      <p className="text-sm text-muted-foreground">{player.tier}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">{player.allocation}</p>
                    <p className="text-xs text-muted-foreground tracking-wider">$POKER</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
