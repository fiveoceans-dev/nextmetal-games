import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <span className="text-2xl font-bold tracking-tighter">Next Metal Skills</span>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#rewards" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/60 transition-colors">
            Rewards
          </a>
          <a href="#data" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/60 transition-colors">
            Data
          </a>
          <a href="#datasets" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/60 transition-colors">
            Datasets
          </a>
        </div>

        <Button onClick={() => navigate("/auth")} size="default" className="rounded-full">
          Get Started
        </Button>
      </div>
    </nav>
  );
};
