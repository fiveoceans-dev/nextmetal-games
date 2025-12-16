import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";

export const RewardsSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section id="rewards" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <Skeleton className="h-20 w-[500px] mx-auto mb-8" />
              <Skeleton className="h-8 w-96 mx-auto" />
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="minimal-card p-12">
                  <div className="mb-10">
                    <Skeleton className="h-24 w-32 mx-auto mb-3" />
                    <Skeleton className="h-6 w-24 mx-auto" />
                  </div>
                  <Skeleton className="h-8 w-40 mx-auto mb-3" />
                  <Skeleton className="h-6 w-full" />
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rewards" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-sm uppercase tracking-[0.35em] font-mono text-muted-foreground mb-4">Rewards · For Players</p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-[-0.03em]">Earn $METAL for verified gameplay.</h2>
          </div>

          <p className="text-sm uppercase tracking-[0.35em] font-mono text-muted-foreground text-center mb-8">
            Get paid to play. Climb tiers for better splits and merch.
          </p>

          <div className="grid md:grid-cols-2 gap-4 justify-items-center max-w-4xl mx-auto">
            <Card
              className="p-6 text-left animate-fade-in-up rounded-3xl border border-border/70 bg-background/60 backdrop-blur-sm shadow-sm w-full md:w-[280px] flex flex-col justify-between"
              style={{ aspectRatio: "2.5 / 3.5" }}
            >
              <h3 className="text-4xl font-bold tracking-tight">Gold</h3>
              <p className="text-lg text-muted-foreground">Base $METAL rate + swag.</p>
            </Card>

            <Card
              className="p-6 text-left animate-fade-in-up rounded-3xl border border-border/70 bg-background/60 backdrop-blur-sm shadow-sm w-full md:w-[280px] flex flex-col justify-between"
              style={{ animationDelay: '0.1s', aspectRatio: "2.5 / 3.5" }}
            >
              <h3 className="text-4xl font-bold tracking-tight">Platinum</h3>
              <p className="text-lg text-muted-foreground">2× $METAL rate + Swag+.</p>
            </Card>
          </div>

          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 h-14 border-border rounded-full hover:border-foreground/30 hover:bg-foreground/5 hover:text-foreground"
            >
              Join as a Player
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
