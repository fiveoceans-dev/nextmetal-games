import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Star, TrendingUp } from "lucide-react";

export const RewardsSection = () => {
  const rewards = [
    {
      icon: Trophy,
      title: "Rank-Based Allocation",
      description: "Higher ranks receive larger $POKER token allocations in the airdrop",
      color: "text-primary"
    },
    {
      icon: Star,
      title: "Verified Skills",
      description: "Only verified League of Legends accounts qualify for rewards",
      color: "text-accent"
    },
    {
      icon: TrendingUp,
      title: "Early Access",
      description: "Get priority access to PokerNFT platform features and tournaments",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">
              Rewards for Skilled Players
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Link your account, verify your rank, and claim your $POKER tokens
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {rewards.map((reward, index) => {
              const Icon = reward.icon;
              return (
                <Card 
                  key={index}
                  className="glass-card animate-fade-in-up hover:border-primary/30 transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-3 rounded-lg bg-card/80 ${reward.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{reward.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{reward.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
