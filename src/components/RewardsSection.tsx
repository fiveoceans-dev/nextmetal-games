import { Card } from "@/components/ui/card";

export const RewardsSection = () => {
  return (
    <section id="badges" className="py-32 relative overflow-hidden border-b border-border">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter">Token Allocation</h2>
            <p className="text-xl text-muted-foreground">
              Prove your rank and claim your share
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="minimal-card p-10 text-center animate-fade-in-up">
              <div className="mb-8">
                <div className="text-6xl font-bold mb-2">5K</div>
                <div className="text-sm text-muted-foreground tracking-wider uppercase">$POKER</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Diamond+</h3>
              <p className="text-sm text-muted-foreground">Top tier rewards for elite players</p>
            </Card>

            <Card className="minimal-card p-10 text-center animate-fade-in-up border-2 border-foreground" style={{ animationDelay: '0.1s' }}>
              <div className="mb-8">
                <div className="text-6xl font-bold mb-2">2.5K</div>
                <div className="text-sm text-muted-foreground tracking-wider uppercase">$POKER</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Platinum</h3>
              <p className="text-sm text-muted-foreground">Solid rewards for dedicated players</p>
            </Card>

            <Card className="minimal-card p-10 text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="mb-8">
                <div className="text-6xl font-bold mb-2">1K</div>
                <div className="text-sm text-muted-foreground tracking-wider uppercase">$POKER</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Gold & Below</h3>
              <p className="text-sm text-muted-foreground">Entry rewards for all verified players</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
