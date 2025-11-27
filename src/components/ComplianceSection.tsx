export const ComplianceSection = () => {
  return (
    <section className="py-16 relative overflow-hidden" id="legal">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="p-8 rounded-lg bg-muted/20 border border-border/30 animate-fade-in-up">
            <h3 className="text-xl font-semibold mb-4">Riot Games API Compliance</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              PokerNFT is not endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games 
              or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games 
              are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc. 
              We comply with all Riot Games API Terms of Service and use only publicly available data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
