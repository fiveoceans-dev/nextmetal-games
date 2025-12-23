import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const RewardsSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  
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
            Receive <span className="text-primary font-semibold">$METAL</span> rewards for every hour you play.
          </p>
        </div>

          <div className="grid md:grid-cols-3 gap-4 justify-items-center max-w-5xl mx-auto">
            <div
              className="relative p-6 text-left animate-fade-in-up rounded-3xl border border-slate-300 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 w-full md:w-[280px] flex flex-col justify-between shadow-sm text-black overflow-hidden"
              style={{ animationDelay: '0.05s', aspectRatio: "2.5 / 3.5" }}
            >
              <div className="pointer-events-none absolute -inset-10 rotate-45 bg-gradient-to-r from-white/80 via-white/10 to-white/80 opacity-80" />
              <div className="text-sm uppercase tracking-[0.35em] text-black/70 mb-4 relative z-10">Silver</div>
              <h3 className="text-4xl font-bold tracking-tight mb-2 text-black relative z-10">10 METAL / H</h3>
              <p className="text-sm text-black/70 relative z-10">Anyone can join and start earning rewards.</p>
            </div>

            <div
              className="relative p-6 text-left animate-fade-in-up rounded-3xl border border-amber-400 bg-gradient-to-br from-amber-100 via-amber-200 to-yellow-50 w-full md:w-[280px] flex flex-col justify-between shadow-sm text-black overflow-hidden"
              style={{ aspectRatio: "2.5 / 3.5" }}
            >
              <div className="pointer-events-none absolute -inset-10 rotate-45 bg-gradient-to-r from-white/80 via-white/10 to-white/80 opacity-80" />
              <div className="text-sm uppercase tracking-[0.35em] text-black/70 mb-4 relative z-10">Gold</div>
              <h3 className="text-4xl font-bold tracking-tight mb-2 text-black relative z-10">25 METAL / H</h3>
              <p className="text-sm text-black/70 relative z-10">For long term members and supporters.</p>
            </div>

            <div
              className="relative p-6 text-left animate-fade-in-up rounded-3xl border border-zinc-300 bg-gradient-to-br from-zinc-100 via-sky-100 to-slate-200 w-full md:w-[280px] flex flex-col justify-between shadow-sm text-black overflow-hidden"
              style={{ animationDelay: '0.1s', aspectRatio: "2.5 / 3.5" }}
            >
              <div className="pointer-events-none absolute -inset-10 rotate-45 bg-gradient-to-r from-sky-200/80 via-sky-100/10 to-sky-200/80 opacity-80" />
              <div className="text-sm uppercase tracking-[0.35em] text-black/70 mb-4 relative z-10">Platinum</div>
              <h3 className="text-4xl font-bold tracking-tight mb-2 text-black relative z-10">50 METAL / H</h3>
              <p className="text-sm text-black/70 relative z-10">For high skilled and professional players.</p>
            </div>
          </div>

          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button
              onClick={() => navigate("/auth")}
              size="lg"
              className="text-lg px-8 h-14 rounded-full shadow-sm hover:shadow-md"
            >
              Play & Earn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
