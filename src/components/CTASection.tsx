import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";

const CTASkeleton = () => (
  <section className="py-32 px-4">
    <div className="container mx-auto max-w-3xl text-center space-y-8">
      <Skeleton className="h-16 w-3/4 mx-auto" />
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Skeleton className="h-14 w-48 mx-auto sm:mx-0 rounded-full" />
        <Skeleton className="h-14 w-48 mx-auto sm:mx-0 rounded-full" />
      </div>
    </div>
  </section>
);

export const CTASection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <CTASkeleton />;

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.06)_0,_rgba(0,0,0,0)_48%)]" />
      </div>

      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.03em] mb-4 animate-fade-in-up">
          Play. Earn. Build AGI.
        </h2>
        <div className="text-lg text-muted-foreground font-mono max-w-3xl mx-auto space-y-2">
          <p>
            Help us reach Artificial General Intelligence.
          </p>
        </div>
      </div>
    </section>
  );
};
