export const ComplianceSection = () => {
  return (
    <section id="legal" className="py-40 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-10 tracking-tight">Riot Games API Compliance</h2>
          </div>

          <div className="max-w-3xl mx-auto text-base text-muted-foreground leading-relaxed space-y-8 text-center">
            <p>
              Airdrop isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.
            </p>
            <p>
              This application uses the Riot Games API to verify League of Legends player ranks and achievements. All data is used in compliance with Riot Games' Terms of Service and API Terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
