import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import GlobalCitizenSection from "@/components/GlobalCitizenSection";
import ServicesSection from "@/components/ServicesSection";
import ProgramsSection from "@/components/ProgramsSection";
import InsightsSection from "@/components/InsightsSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <GlobalCitizenSection />
        <ServicesSection />
        <ProgramsSection />
        <InsightsSection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
