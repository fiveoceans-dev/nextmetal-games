import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { VennDiagramSection } from "@/components/VennDiagramSection";
import { RewardsSection } from "@/components/RewardsSection";
import { ProjectInfoSection } from "@/components/ProjectInfoSection";
import { LeaderboardSection } from "@/components/LeaderboardSection";
import { ComplianceSection } from "@/components/ComplianceSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <VennDiagramSection />
      <RewardsSection />
      <ProjectInfoSection />
      <LeaderboardSection />
      <ComplianceSection />
      <Footer />
    </div>
  );
};

export default Index;
