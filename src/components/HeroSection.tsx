import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { HeroSkeleton } from "@/components/HeroSkeleton";

export const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <HeroSkeleton />;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-background via-card to-background">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="lava-lamp lava-lamp--pink" />
        <div className="lava-lamp lava-lamp--indigo" />
        <div className="absolute inset-0 opacity-30 mix-blend-soft-light bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.04)_0,_rgba(255,255,255,0)_45%)]" />
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="animate-fade-in-up">
            <div className="relative overflow-hidden py-2">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,_rgba(250,250,250,0),_rgba(250,250,250,0.15),_rgba(250,250,250,0))]" />
              <div className="flex whitespace-nowrap text-sm font-mono uppercase tracking-[0.35em] text-foreground/70 marquee-track">
                <span className="px-6">Play Games. Earn Rewards.</span>
                <span className="px-6">Play Games. Earn Rewards.</span>
                <span className="px-6">Play Games. Earn Rewards.</span>
                <span className="px-6">Play Games. Earn Rewards.</span>
                <span className="px-6">Play Games. Earn Rewards.</span>
                <span className="px-6">Play Games. Earn Rewards.</span>
                <span className="px-6">Play Games. Earn Rewards.</span>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.05s' }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-[-0.04em]">
              AI that learns by
              <br />
              <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">playing games.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-mono">
              Play. Earn <span className="text-primary font-semibold">$METAL</span>. Train AGI.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <Button size="lg" className="text-lg px-8 h-14 rounded-full shadow-sm hover:shadow-md">
              For Gamers
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 h-14 border-border rounded-full hover:border-foreground/30 hover:bg-foreground/5 hover:text-foreground"
            >
              For Developers
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
