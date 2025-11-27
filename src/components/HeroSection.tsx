import { Button } from "@/components/ui/button";
import { Shield, Coins, Award, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/lol-hero-bg.png";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-primary/30">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Powered by Monad & ZK Proofs</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in-up">
            Prove Your League of Legends Rank
            <br />
            Get Airdrop <span className="text-primary glow-text">$POKER</span> Token
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button variant="outline" size="xl" onClick={() => navigate("/dashboard")}>
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
