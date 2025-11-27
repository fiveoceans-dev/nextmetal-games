import { Card } from "@/components/ui/card";

export const ProjectInfoSection = () => {
  return (
    <section className="py-32 relative overflow-hidden border-b border-border">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <Card className="minimal-card p-12 animate-fade-in-up">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold tracking-tight">Monad</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                High-performance blockchain enabling fast, scalable gaming applications with low transaction costs.
              </p>
            </div>
          </Card>

          <Card className="minimal-card p-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold tracking-tight">PokerNFT</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Permissionless onchain poker platform where players compete with transparency and provable fairness.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
