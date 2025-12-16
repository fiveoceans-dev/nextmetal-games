import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { MessageSquare } from "lucide-react";
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
      name: "Raw Data",
      subtitle: "Screen + input, aligned, human-limited.",
      features: [
        "Screen + input, aligned",
        "Human-limited gameplay",
        "Time-synced streams",
      ],
    },
    {
      name: "Annotated Data",
      subtitle: "Raw + labels, phases, metadata.",
      features: [
        "Raw + labels",
        "Phases & events",
        "Metadata for training",
      ],
    },
    {
      name: "Test Arena",
      subtitle: "Synthetic tasks + real replays for benchmarking agents.",
      features: [
        "Scenario loops",
        "Difficulty ladders",
        "Performance telemetry",
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
            Training Data for <span className="text-primary"> AGI.</span>
          </h2>
          <p className="text-lg text-foreground/80 font-mono">
            High quality datasets designed to train and benchmark advanced AGI agents in complex environments requiring multimodal understanding, strategic planning, and adaptive learning.
          </p>
        </div>

        {/* Dataset Cards */}
        <div className="grid md:grid-cols-3 gap-4 justify-items-center mb-12">
          {datasets.map((dataset, index) => (
            <div
              key={dataset.name}
              className="flex flex-col justify-between text-left animate-fade-in-up w-full md:w-[280px] border border-primary/20 rounded-3xl p-6"
              style={{ animationDelay: `${index * 0.1}s`, aspectRatio: "2.5 / 3.5" }}
            >
              <div className="mb-2">
                <h3 className="font-orbitron text-3xl font-bold">{dataset.name}</h3>
              </div>

              <ul className="space-y-3">
                {dataset.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-foreground/80 font-mono text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm mt-3">{dataset.subtitle}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 h-14 border-border hover:border-secondary hover:text-secondary rounded-full"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Talk to Us
          </Button>
        </div>
      </div>
    </section>
  );
};
