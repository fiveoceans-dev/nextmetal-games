import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Download, Handshake, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const CTASkeleton = () => (
  <section className="py-32 px-4">
    <div className="container mx-auto max-w-3xl text-center space-y-8">
      <Skeleton className="h-16 w-3/4 mx-auto" />
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Skeleton className="h-14 w-48 mx-auto sm:mx-0" />
        <Skeleton className="h-14 w-48 mx-auto sm:mx-0" />
      </div>
    </div>
  </section>
);

export const CTASection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <CTASkeleton />;

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-3xl text-center relative z-10">
        {/* Headline */}
        <h2 className="font-orbitron text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
          Play. Earn <span className="text-accent neon-text-gold">$METAL</span>. Build real AI.
        </h2>
        <p className="text-xl text-muted-foreground mb-12 font-mono animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Play. Earn $METAL. Build real AI.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Button size="lg" className="cyber-btn text-lg px-8 h-14 pulse-glow rounded-full">
            <Download className="mr-2 h-5 w-5" />
            Install & Play
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 h-14 border-border hover:border-secondary hover:text-secondary rounded-full"
          >
            <Handshake className="mr-2 h-5 w-5" />
            Partner With Us
          </Button>
        </div>
      </div>
    </section>
  );
};
