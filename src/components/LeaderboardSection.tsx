import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trophy } from "lucide-react";

export const LeaderboardSection = () => {
  const leaderboardData = [
    { rank: 1, nickname: "ShadowBlade#NA1", tier: "Challenger", allocation: "10,000 $POKER" },
    { rank: 2, nickname: "DragonSlayer#EUW", tier: "Grandmaster", allocation: "7,500 $POKER" },
    { rank: 3, nickname: "NightHunter#KR", tier: "Master", allocation: "5,000 $POKER" },
    { rank: 4, nickname: "PhoenixRise#BR", tier: "Diamond I", allocation: "3,500 $POKER" },
    { rank: 5, nickname: "StormWarden#NA", tier: "Diamond II", allocation: "2,500 $POKER" },
    { rank: 6, nickname: "IronWill#LAN", tier: "Diamond III", allocation: "2,000 $POKER" },
    { rank: 7, nickname: "FlashStep#OCE", tier: "Platinum I", allocation: "1,500 $POKER" },
    { rank: 8, nickname: "VoidWalker#TR", tier: "Platinum II", allocation: "1,250 $POKER" },
    { rank: 9, nickname: "RuneMaster#EUNE", tier: "Platinum III", allocation: "1,000 $POKER" },
    { rank: 10, nickname: "BladeDancer#JP", tier: "Gold I", allocation: "750 $POKER" },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Trophy className="h-4 w-4" />
              <span className="text-sm font-semibold">Top Players</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">$POKER Token Leaderboard</h2>
            <p className="text-muted-foreground text-lg">
              Preview of token allocations based on verified ranks
            </p>
          </div>

          <Card className="glass-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle>Current Rankings & Allocations</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-border/50">
                    <TableHead className="w-20">Rank</TableHead>
                    <TableHead>Player</TableHead>
                    <TableHead>LoL Tier</TableHead>
                    <TableHead className="text-right">Token Allocation</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leaderboardData.map((player) => (
                    <TableRow key={player.rank} className="border-border/30">
                      <TableCell className="font-medium">
                        {player.rank <= 3 ? (
                          <span className="inline-flex items-center gap-1">
                            <Trophy className={`h-4 w-4 ${
                              player.rank === 1 ? 'text-primary' : 
                              player.rank === 2 ? 'text-muted-foreground' : 
                              'text-accent'
                            }`} />
                            {player.rank}
                          </span>
                        ) : (
                          player.rank
                        )}
                      </TableCell>
                      <TableCell className="font-medium">{player.nickname}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded text-xs font-semibold bg-primary/20 text-primary">
                          {player.tier}
                        </span>
                      </TableCell>
                      <TableCell className="text-right font-bold text-accent">
                        {player.allocation}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              * Allocations are estimates. Final distribution based on verified accounts at snapshot date.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
