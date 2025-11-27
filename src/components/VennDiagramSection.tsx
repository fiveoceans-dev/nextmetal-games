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

          <div className="relative h-[600px] flex items-center justify-center">
            {/* Top Circle - LoL Players */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 animate-fade-in-up">
              <div className="w-64 h-64 rounded-full border border-foreground/20 flex items-center justify-center hover:border-foreground/40 transition-all">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-2">LoL Players</h3>
                  <p className="text-sm text-muted-foreground px-6">Skilled gamers seeking rewards</p>
                </div>
              </div>
            </div>

            {/* Bottom Left Circle - Poker Players */}
            <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-64 h-64 rounded-full border border-foreground/20 flex items-center justify-center hover:border-foreground/40 transition-all">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-2">Poker Players</h3>
                  <p className="text-sm text-muted-foreground px-6">Onchain gaming community</p>
                </div>
              </div>
            </div>

            {/* Bottom Right Circle - $POKER */}
            <div className="absolute bottom-0 right-1/4 transform translate-x-1/2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-64 h-64 rounded-full border-2 border-foreground flex items-center justify-center hover:scale-105 transition-all">
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-2 tracking-tight">$POKER</h3>
                  <p className="text-sm text-muted-foreground px-6">Airdrop for verified players</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
