import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Database, Tag, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

const DatasetsSkeleton = () => (
  <section className="py-24 px-4">
    <div className="container mx-auto max-w-5xl">
      <div className="text-center mb-16 space-y-4">
        <Skeleton className="h-10 w-48 mx-auto" />
        <Skeleton className="h-6 w-64 mx-auto" />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <Skeleton key={i} className="h-48 rounded-lg" />
        ))}
      </div>
    </div>
  </section>
);

export const DatasetsSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <DatasetsSkeleton />;

  const datasets = [
    {
      icon: Database,
      name: "Raw",
      color: "primary",
      features: [
        "Screen + input, aligned",
        "Human-limited gameplay",
        "Time-synced streams",
      ],
    },
    {
      icon: Tag,
      name: "Annotated",
      color: "secondary",
      features: [
        "Raw + labels",
        "Phases & events",
        "Metadata for training",
      ],
    },
  ];

  return (
    <section id="datasets" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <p className="text-sm uppercase tracking-[0.35em] font-mono text-muted-foreground">Datasets · For AI Labs</p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground">
            Signals for <span className="text-primary">real AI.</span>
          </h2>
          <p className="text-lg text-foreground/80 font-mono">
            Raw or annotated. Your call.
          </p>
        </div>

        {/* Dataset Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {datasets.map((dataset, index) => (
            <div
              key={dataset.name}
              className={`cyber-card hover:border-${dataset.color} transition-all duration-300 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded bg-${dataset.color}/20 flex items-center justify-center`}>
                  <dataset.icon className={`w-6 h-6 text-${dataset.color}`} />
                </div>
                <h3 className="font-orbitron text-2xl font-bold">{dataset.name}</h3>
              </div>

              <ul className="space-y-3">
                {dataset.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-foreground/80 font-mono text-sm">
                    <span className={`w-1.5 h-1.5 rounded-full bg-${dataset.color}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm mt-4">
                {dataset.name === "Raw"
                  ? "Screen + input, aligned, human-limited."
                  : "Raw + labels, phases, metadata."}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-secondary hover:border-secondary hover:bg-secondary/10 hover:text-secondary rounded-full"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Talk to Us
          </Button>
        </div>
      </div>
    </section>
  );
};
