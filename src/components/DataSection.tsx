import { Skeleton } from "@/components/ui/skeleton";
import { Monitor, Mouse, Clock, Camera, Shield, Keyboard } from "lucide-react";
import { useState, useEffect } from "react";

const DataSkeleton = () => (
  <section className="py-24 px-4 bg-card/50">
    <div className="container mx-auto max-w-5xl">
      <div className="text-center mb-16 space-y-4">
        <Skeleton className="h-10 w-48 mx-auto" />
        <Skeleton className="h-6 w-72 mx-auto" />
      </div>
      <div className="space-y-6">
        <Skeleton className="h-40 rounded-lg max-w-3xl mx-auto" />
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[0, 1].map((i) => (
            <Skeleton key={i} className="h-36 rounded-lg" />
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => (
            <Skeleton key={i} className="h-36 rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const DataSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <DataSkeleton />;

  const inputData = [
    {
      icon: Mouse,
      title: "Mouse inputs",
      description: "Every click, frame-aligned",
    },
    {
      icon: Keyboard,
      title: "Keyboard inputs",
      description: "Key-down / key-up streams",
    },
  ];

  const captureData = [
    {
      icon: Monitor,
      title: "Screen video",
      description: "Crisp captures of your gameplay",
    },
    {
      icon: Clock,
      title: "Timing",
      description: "Timestamps to sync everything",
    },
    {
      icon: Camera,
      title: "WebCamera (optional)",
      description: "Only if you toggle it on",
    },
  ];

  return (
    <section id="data" className="py-24 px-4 bg-card/50 relative">
      
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em]">
            Data <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">Collection</span>
          </h2>
          <p className="text-xl text-muted-foreground font-mono">
            Minimal capture. Maximum signal.
          </p>
        </div>

        {/* Control Message */}
        <div
          className="rounded-3xl border border-border/70 bg-background/60 backdrop-blur-sm p-6 shadow-sm flex flex-col items-center gap-4 max-w-3xl mx-auto text-center mb-10 animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          <div className="w-14 h-14 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h4 className="text-lg font-semibold tracking-tight">You're in Control</h4>
            <p className="text-muted-foreground">
              You decide what to share.
            </p>
          </div>
        </div>

        {/* Input Data Row */}
        <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-3xl mx-auto">
          {inputData.map((item, index) => (
            <div
              key={item.title}
              className="rounded-3xl border border-border/70 bg-background/60 backdrop-blur-sm p-6 shadow-sm text-center animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Capture Data Row */}
        <div className="grid md:grid-cols-3 gap-6">
          {captureData.map((item, index) => (
            <div
              key={item.title}
              className="rounded-3xl border border-border/70 bg-background/60 backdrop-blur-sm p-6 shadow-sm text-center animate-fade-in-up"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
