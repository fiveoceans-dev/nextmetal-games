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

          <div className="relative h-[600px] flex items-center justify-center">
            {/* 12 o'clock - $POKER */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 animate-fade-in-up">
              <div className="w-80 h-80 rounded-full border border-foreground/30 flex items-center justify-center hover:border-foreground/50 transition-all">
                <div className="text-center mb-8">
                  <h3 className="text-4xl font-bold mb-3 tracking-tight">$POKER</h3>
                  <p className="text-base text-muted-foreground px-8">Airdrop for<br/>verified players</p>
                </div>
              </div>
            </div>

            {/* 7 o'clock - LoL Players */}
            <div className="absolute bottom-0 left-[35%] transform -translate-x-1/2 -translate-y-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-80 h-80 rounded-full border border-foreground/30 flex items-center justify-center hover:border-foreground/50 transition-all">
                <div className="text-center mt-16">
                  <h3 className="text-3xl font-semibold mb-3">LoL Players</h3>
                  <p className="text-base text-muted-foreground px-8">Skilled gamers<br/>seeking rewards</p>
                </div>
              </div>
            </div>

            {/* 5 o'clock - Poker Players */}
            <div className="absolute bottom-0 right-[35%] transform translate-x-1/2 -translate-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-80 h-80 rounded-full border border-foreground/30 flex items-center justify-center hover:border-foreground/50 transition-all">
                <div className="text-center mt-16">
                  <h3 className="text-3xl font-semibold mb-3">Poker Players</h3>
                  <p className="text-base text-muted-foreground px-8">Onchain gaming<br/>community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
