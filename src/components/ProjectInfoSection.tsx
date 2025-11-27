import { Card } from "@/components/ui/card";
import { Coins, Zap } from "lucide-react";

export const ProjectInfoSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="glass-card p-8 animate-fade-in-up">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/20">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Monad</h3>
                <p className="text-muted-foreground leading-relaxed">
                  High-performance blockchain enabling fast, scalable gaming applications with low transaction costs.
                </p>
              </div>
            </div>
          </Card>

          <Card className="glass-card p-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/20">
                <Coins className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">PokerNFT</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Permissionless onchain poker platform where players compete with transparency and provable fairness.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
