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
                <div key={i} className="rounded-3xl border border-border/70 bg-background/60 backdrop-blur-sm p-12 shadow-sm">
                  <Skeleton className="h-24 w-32 mx-auto mb-4" />
                  <Skeleton className="h-8 w-40 mx-auto mb-3" />
                  <Skeleton className="h-6 w-full" />
                </div>
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
          
          <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em]">
            Earn Rewards
          </h2>
          <p className="text-xl text-muted-foreground font-mono">
            Get paid to play. Climb tiers for better splits and merch.
          </p>
        </div>

          <div className="grid md:grid-cols-3 gap-4 justify-items-center max-w-5xl mx-auto">
            <div
              className="p-6 text-left animate-fade-in-up rounded-3xl border border-slate-300/50 bg-slate-200/15 w-full md:w-[280px] flex flex-col justify-between shadow-sm"
              style={{ animationDelay: '0.05s', aspectRatio: "2.5 / 3.5" }}
            >
              <div className="text-sm uppercase tracking-[0.35em] text-slate-900/70 mb-4">Silver</div>
              <h3 className="text-4xl font-bold tracking-tight mb-2 text-slate-900">10 METAL / H</h3>
              <p className="text-sm text-slate-900/70">Anyone can join and start earning rewards.</p>
            </div>

            <div
              className="p-6 text-left animate-fade-in-up rounded-3xl border border-amber-300/50 bg-amber-200/15 w-full md:w-[280px] flex flex-col justify-between shadow-sm"
              style={{ aspectRatio: "2.5 / 3.5" }}
            >
              <div className="text-sm uppercase tracking-[0.35em] text-amber-900/70 mb-4">Gold</div>
              <h3 className="text-4xl font-bold tracking-tight mb-2 text-amber-900">25 METAL / H</h3>
              <p className="text-sm text-amber-900/80">For long term members and supporters.</p>
            </div>

            <div
              className="p-6 text-left animate-fade-in-up rounded-3xl border border-zinc-300/60 bg-zinc-100/40 w-full md:w-[280px] flex flex-col justify-between shadow-sm"
              style={{ animationDelay: '0.1s', aspectRatio: "2.5 / 3.5" }}
            >
              <div className="text-sm uppercase tracking-[0.35em] text-zinc-900/70 mb-4">Platinum</div>
              <h3 className="text-4xl font-bold tracking-tight mb-2 text-zinc-900">50 METAL / H</h3>
              <p className="text-sm text-zinc-900/70">For high skilled and professional players.</p>
            </div>
          </div>

          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 h-14 border-border rounded-full hover:border-foreground/30 hover:bg-foreground/5 hover:text-foreground"
            >
              Play & Earn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
