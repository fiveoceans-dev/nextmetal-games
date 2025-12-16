import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto px-6 h-16 grid grid-cols-2 md:grid-cols-3 items-center">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="justify-self-start inline-flex items-center h-10 px-4 rounded-full hover:bg-foreground/5 transition-colors"
        >
          <span className="text-sm md:text-base font-semibold tracking-tight">Next Metal Skills</span>
        </button>

        <div className="hidden md:flex justify-self-center items-center rounded-full bg-foreground/5 ring-1 ring-foreground/10 p-1">
          <a
            href="#rewards"
            className="inline-flex items-center justify-center h-10 px-5 rounded-full text-xs font-semibold uppercase tracking-[0.25em] text-foreground/70 hover:text-foreground hover:bg-background/70 transition-colors"
          >
            Players
          </a>
          <a
            href="#data"
            className="inline-flex items-center justify-center h-10 px-5 rounded-full text-xs font-semibold uppercase tracking-[0.25em] text-foreground/70 hover:text-foreground hover:bg-background/70 transition-colors"
          >
            Data
          </a>
          <a
            href="#datasets"
            className="inline-flex items-center justify-center h-10 px-5 rounded-full text-xs font-semibold uppercase tracking-[0.25em] text-foreground/70 hover:text-foreground hover:bg-background/70 transition-colors"
          >
            Labs
          </a>
        </div>

        <Button
          onClick={() => navigate("/auth")}
          size="default"
          className="justify-self-end rounded-full h-10 px-5 text-xs font-semibold uppercase tracking-[0.25em]"
        >
          Get Started
        </Button>
      </div>
    </nav>
  );
};
