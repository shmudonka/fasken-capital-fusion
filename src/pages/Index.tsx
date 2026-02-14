import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import GlobalCitizenSection from "@/components/GlobalCitizenSection";
import ServicesSection from "@/components/ServicesSection";
import ProgramsSection from "@/components/ProgramsSection";
import InsightsSection from "@/components/InsightsSection";
import SiteFooter from "@/components/SiteFooter";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";

const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <GlobalCitizenSection />
        <ServicesSection />

        {/* Testimonial quote section */}
        <section className="bg-background py-20">
          <div className="container">
            <ScrollReveal>
              <div className="flex items-start gap-6 max-w-3xl">
                <div className="w-[3px] bg-primary shrink-0 self-stretch min-h-[60px]" />
                <blockquote className="text-2xl md:text-3xl font-light text-foreground/80 leading-relaxed italic font-serif">
                  "Their dedication to client service is unparalleled. We would rank them as number one in investment migration advisory."
                </blockquote>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <ProgramsSection />
        <InsightsSection />

        {/* Our People / About CTA */}
        <section className="bg-dark-surface py-24">
          <div className="container">
            <div className="flex flex-col md:flex-row items-start gap-16">
              <ScrollReveal className="md:w-1/2">
                <div className="bg-card h-72 w-full" />
              </ScrollReveal>
              <ScrollReveal className="md:w-1/2" delay={0.15}>
                <h2 className="text-3xl md:text-[40px] font-light text-foreground mb-6">About Us</h2>
                <p className="text-[15px] font-light text-muted-foreground leading-relaxed mb-8">
                  With over 30 years of legal experience, our team possesses deep expertise and remarkable bench strength. We have only one goal in mind — your success.
                </p>
                <Link to="/about" className="link-arrow">
                  Learn More <ArrowUpRight />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Careers CTA */}
        <section className="bg-background py-20">
          <div className="container">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <h2 className="text-2xl md:text-3xl font-light text-foreground">
                  Become part of a dynamic team.
                </h2>
                <Link to="/careers" className="link-arrow">
                  Explore Careers <ArrowUpRight />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <SiteFooter />
      <CookieBanner />
      <BackToTop />
    </div>
  );
};

export default Index;
