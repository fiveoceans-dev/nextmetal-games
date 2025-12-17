import { Button } from "@/components/ui/button";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();
  const navItems = useMemo(
    () => [
      { id: "home", label: "Home", href: "#home" },
      { id: "rewards", label: "Rewards", href: "#rewards" },
      { id: "data", label: "Data", href: "#data" },
      { id: "datasets", label: "Datasets", href: "#datasets" },
    ],
    [],
  );
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 4;
      let current = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;

        const { offsetTop, offsetHeight } = section;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          current = item.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/60">
      <div className="container mx-auto px-6 h-16 flex items-center gap-4 justify-between">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="inline-flex items-center h-10 px-4 gap-3 rounded-full hover:bg-foreground/5 transition-colors"
        >
          <img src="/logo.svg" alt="NextMetal logo" className="h-16 w-16" />
          <span className="text-sm md:text-base font-semibold tracking-tight">Next Metal</span>
        </button>

        <div className="hidden md:flex items-center h-10 rounded-full border border-border/80 bg-background/60 backdrop-blur-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex items-center justify-center px-5 h-10 rounded-full text-[11px] font-semibold uppercase tracking-[0.25em] transition-colors ${
                  isActive
                    ? "text-foreground bg-foreground/10"
                    : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <Button
          onClick={() => navigate("/auth")}
          size="default"
          className="rounded-full h-10 px-5 text-xs font-semibold uppercase tracking-[0.25em]"
        >
          Get Started
        </Button>
      </div>
    </nav>
  );
};
