import { Card } from "@/components/ui/card";

export const VennDiagramSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Mutual Interest</h2>
            <p className="text-muted-foreground text-lg">
              Where competitive gaming meets onchain innovation
            </p>
          </div>

          <div className="relative h-96 flex items-center justify-center">
            {/* Left Circle - LoL Players */}
            <div className="absolute left-0 md:left-1/4 transform -translate-x-1/2">
              <div className="w-64 h-64 rounded-full bg-primary/20 border-4 border-primary/40 flex items-center justify-center backdrop-blur-sm">
                <Card className="glass-card p-6 text-center max-w-[200px]">
                  <h3 className="text-xl font-bold text-primary mb-2">LoL Players</h3>
                  <p className="text-sm text-muted-foreground">Skilled gamers seeking rewards</p>
                </Card>
              </div>
            </div>

            {/* Right Circle - Poker Players */}
            <div className="absolute right-0 md:right-1/4 transform translate-x-1/2">
              <div className="w-64 h-64 rounded-full bg-accent/20 border-4 border-accent/40 flex items-center justify-center backdrop-blur-sm">
                <Card className="glass-card p-6 text-center max-w-[200px]">
                  <h3 className="text-xl font-bold text-accent mb-2">Poker Players</h3>
                  <p className="text-sm text-muted-foreground">Onchain gaming community</p>
                </Card>
              </div>
            </div>

            {/* Center Overlap */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <Card className="glass-card p-8 text-center max-w-[240px] border-2 border-primary/60 bg-gradient-to-br from-primary/10 to-accent/10">
                <h3 className="text-2xl font-bold mb-3 glow-text">$POKER Airdrop</h3>
                <p className="text-sm text-muted-foreground">
                  Verified LoL players receive tokens for permissionless poker
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
