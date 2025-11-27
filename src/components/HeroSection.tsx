import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/lol-hero-bg.png";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-5" />
        <div className="absolute inset-0 bg-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-7xl md:text-9xl font-bold leading-[1.1] tracking-tighter">
              Prove Your League of Legends Rank
              <br />
              Get Airdrop $POKER Token
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Verify your rank. Mint your achievement. Join the future of gaming.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button size="xl" onClick={() => navigate("/dashboard")} className="group text-lg px-16 h-16">
              Join Now
              <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
