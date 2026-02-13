import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import GlobalCitizenSection from "@/components/GlobalCitizenSection";
import ServicesSection from "@/components/ServicesSection";
import ProgramsSection from "@/components/ProgramsSection";
import InsightsSection from "@/components/InsightsSection";
import SiteFooter from "@/components/SiteFooter";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";

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
      <CookieBanner />
      <BackToTop />
    </div>
  );
};

export default Index;
