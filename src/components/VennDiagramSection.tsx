import { Card } from "@/components/ui/card";

export const VennDiagramSection = () => {
  return (
    <section id="discover" className="py-32 relative overflow-hidden border-b border-border">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter">Mutual Interest</h2>
            <p className="text-xl text-muted-foreground">
              Where competitive gaming meets onchain innovation
            </p>
          </div>

          <div className="relative h-[500px] flex items-center justify-center">
            {/* Left Circle - LoL Players */}
            <div className="absolute left-0 md:left-1/4 transform -translate-x-1/2">
              <div className="w-80 h-80 rounded-full border-2 border-foreground/10 flex items-center justify-center">
                <Card className="minimal-card p-8 text-center max-w-[220px]">
                  <h3 className="text-xl font-semibold mb-3">LoL Players</h3>
                  <p className="text-sm text-muted-foreground">Skilled gamers seeking rewards</p>
                </Card>
              </div>
            </div>

            {/* Right Circle - Poker Players */}
            <div className="absolute right-0 md:right-1/4 transform translate-x-1/2">
              <div className="w-80 h-80 rounded-full border-2 border-foreground/10 flex items-center justify-center">
                <Card className="minimal-card p-8 text-center max-w-[220px]">
                  <h3 className="text-xl font-semibold mb-3">Poker Players</h3>
                  <p className="text-sm text-muted-foreground">Onchain gaming community</p>
                </Card>
              </div>
            </div>

            {/* Center Overlap */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <Card className="minimal-card p-10 text-center max-w-[280px] border-2 border-foreground bg-card">
                <h3 className="text-3xl font-bold mb-4 tracking-tight">$POKER Airdrop</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
