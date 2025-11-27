export const VennDiagramSection = () => {
  return (
    <section id="discover" className="py-40 relative overflow-hidden border-b border-border">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24 animate-fade-in-up">
            <h2 className="text-6xl md:text-7xl font-bold mb-8 tracking-tighter">Mutual Interest</h2>
            <p className="text-2xl text-muted-foreground">
              Where competitive gaming meets onchain innovation
            </p>
          </div>

          <div className="relative h-[550px] flex items-center justify-center">
            {/* Top Center Circle - $POKER */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 animate-fade-in-up">
              <div className="w-80 h-80 rounded-full border border-foreground/30 flex items-center justify-center hover:border-foreground/50 transition-all">
                <div className="text-center">
                  <h3 className="text-4xl font-bold mb-3 tracking-tight">$POKER</h3>
                  <p className="text-base text-muted-foreground px-8">Airdrop for<br/>verified players</p>
                </div>
              </div>
            </div>

            {/* Bottom Left Circle - LoL Players */}
            <div className="absolute bottom-0 left-1/3 transform -translate-x-1/2 translate-y-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-80 h-80 rounded-full border border-foreground/30 flex items-center justify-center hover:border-foreground/50 transition-all">
                <div className="text-center mt-12">
                  <h3 className="text-3xl font-semibold mb-3">LoL Players</h3>
                  <p className="text-base text-muted-foreground px-8">Skilled gamers<br/>seeking rewards</p>
                </div>
              </div>
            </div>

            {/* Bottom Right Circle - Poker Players */}
            <div className="absolute bottom-0 right-1/3 transform translate-x-1/2 translate-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-80 h-80 rounded-full border border-foreground/30 flex items-center justify-center hover:border-foreground/50 transition-all">
                <div className="text-center mt-12">
                  <h3 className="text-3xl font-semibold mb-3">Poker Players</h3>
                  <p className="text-base text-muted-foreground px-8">Onchain gaming<br/>community</p>
                </div>
              </div>
            </div>
            
            {/* Center intersection label */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-center bg-background px-4 py-2 rounded border border-foreground">
                <p className="text-sm font-semibold tracking-wider">INTERSECTION</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
