import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/lol-hero-bg.png";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-5" />
        <div className="absolute inset-0 bg-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.1] tracking-tighter">
              Prove Your League of Legends Rank
              <br />
              Get Airdrop $POKER Token
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Verify your rank. Mint your achievement. Join the future of gaming.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button size="xl" onClick={() => navigate("/dashboard")} className="group">
              Join Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
