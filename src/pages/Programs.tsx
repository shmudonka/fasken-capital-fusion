import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { programs } from "@/data/programs";

const ArrowUpRight = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block ml-1">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const ProgramCard = ({ program }: { program: typeof programs[0] }) => (
  <Link to={`/programs/${program.slug}`} className="group flex items-center justify-between py-6 border-b border-border hover:bg-secondary/30 transition-colors px-2">
    <div className="flex-1">
      <h3 className="text-[17px] font-light text-foreground group-hover:text-primary transition-colors mb-1">{program.country}</h3>
      <p className="text-[12px] font-light text-muted-foreground">{program.type}</p>
    </div>
    <div className="hidden md:flex items-center gap-8 text-[12px] font-light text-muted-foreground">
      <div className="text-right"><span className="block text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-0.5">Min. Investment</span><span className="text-foreground">{program.minInvestment}</span></div>
      <div className="text-right"><span className="block text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-0.5">Timeline</span><span className="text-foreground">{program.timeline}</span></div>
      <div className="text-right"><span className="block text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-0.5">Visa-Free</span><span className="text-foreground">{program.visaFree}</span></div>
    </div>
    <span className="text-muted-foreground group-hover:text-primary transition-colors ml-4"><ArrowUpRight /></span>
  </Link>
);

const Programs = () => {
  const citizenshipPrograms = programs.filter(p => p.category === "citizenship");
  const residencyPrograms = programs.filter(p => p.category === "residency");

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHeader
          title="Global Citizen Programs"
          description="Explore our comprehensive portfolio of citizenship and residency by investment programs across the globe."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Programs" }]}
          searchPlaceholder="Search programs"
        />

        <div className="container py-16">
          <ScrollReveal>
            <div className="flex items-start gap-6 mb-8">
              <div className="w-[3px] bg-primary shrink-0 self-stretch min-h-[30px]" />
              <h2 className="text-2xl font-light text-foreground">Citizenship</h2>
            </div>
            <div className="mb-16">
              {citizenshipPrograms.map((p) => <ProgramCard key={p.slug} program={p} />)}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex items-start gap-6 mb-8">
              <div className="w-[3px] bg-primary shrink-0 self-stretch min-h-[30px]" />
              <h2 className="text-2xl font-light text-foreground">Residency</h2>
            </div>
            <div>
              {residencyPrograms.map((p) => <ProgramCard key={p.slug} program={p} />)}
            </div>
          </ScrollReveal>
        </div>

        {/* CTA */}
        <section className="bg-dark-surface py-20">
          <div className="container">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-light text-foreground mb-3">Not sure which program is right for you?</h2>
                  <p className="text-[15px] font-light text-muted-foreground">Our expert advisors will assess your profile and recommend the best program.</p>
                </div>
                <Link to="/contact" className="btn-davies shrink-0">Schedule a Consultation</Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <SiteFooter /><CookieBanner /><BackToTop />
    </div>
  );
};

export default Programs;
