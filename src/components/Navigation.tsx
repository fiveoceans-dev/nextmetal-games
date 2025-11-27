import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <span className="text-lg font-semibold tracking-tight">monad.passport</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#discover" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Discover
          </a>
          <a href="#badges" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Badges
          </a>
          <a href="#legal" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Legal
          </a>
        </div>

        <Button onClick={() => navigate("/auth")} size="sm">
          Get Started
        </Button>
      </div>
    </nav>
  );
};
