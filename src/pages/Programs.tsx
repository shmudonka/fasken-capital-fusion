import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { programs } from "@/data/programs";

const ProgramCard = ({ program }: { program: typeof programs[0] }) => (
  <Link to={`/programs/${program.slug}`} className="group block border-b border-border hover:bg-warm-beige transition-colors">
    <div className="flex items-center justify-between py-6 px-4">
      <div className="flex-1">
        <h3 className="font-serif text-[17px] text-foreground group-hover:text-primary transition-colors mb-1">{program.country}</h3>
        <p className="text-[11px] text-muted-foreground uppercase tracking-[0.1em]">{program.type}</p>
      </div>
      <div className="hidden md:flex items-center gap-8 text-[12px] text-muted-foreground">
        <div className="text-right"><span className="block text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-0.5">Min. Investment</span><span className="text-foreground font-medium">{program.minInvestment}</span></div>
        <div className="text-right"><span className="block text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-0.5">Timeline</span><span className="text-foreground font-medium">{program.timeline}</span></div>
        <div className="text-right"><span className="block text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-0.5">Visa-Free</span><span className="text-foreground font-medium">{program.visaFree}</span></div>
      </div>
      <ChevronRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity ml-4 shrink-0" />
    </div>
  </Link>
);

const Programs = () => {
  const citizenshipPrograms = programs.filter(p => p.category === "citizenship");
  const residencyPrograms = programs.filter(p => p.category === "residency");

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHeader title="Global Citizen Programs" description="Explore our full portfolio of citizenship and residency by investment programs across the globe. Each program is carefully vetted and managed by our team of experts." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Programs" }]} searchPlaceholder="Filter programs" />
        <div className="container py-16">
          <div className="flex flex-col md:flex-row items-start gap-8 mb-20">
            <div className="w-full md:w-56 shrink-0 flex items-center gap-3 mb-4 md:mb-0 md:pt-6">
              <div className="w-0 h-0 border-l-[14px] border-l-primary border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" />
              <h2 className="text-2xl font-serif text-foreground">Citizenship</h2>
            </div>
            <div className="flex-1">{citizenshipPrograms.map((p) => <ProgramCard key={p.slug} program={p} />)}</div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-56 shrink-0 flex items-center gap-3 mb-4 md:mb-0 md:pt-6">
              <div className="w-0 h-0 border-l-[14px] border-l-primary border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" />
              <h2 className="text-2xl font-serif text-foreground">Residency</h2>
            </div>
            <div className="flex-1">{residencyPrograms.map((p) => <ProgramCard key={p.slug} program={p} />)}</div>
          </div>
        </div>
        <div className="bg-dark-surface py-20">
          <div className="container text-center">
            <h2 className="text-3xl font-serif text-dark-surface-foreground mb-4">Not sure which program is right for you?</h2>
            <p className="text-dark-surface-foreground/60 text-[15px] max-w-xl mx-auto mb-8">Our expert advisors will assess your profile and recommend the best program tailored to your needs.</p>
            <Link to="/contact" className="btn-fasken-outline-white">Schedule a Consultation</Link>
          </div>
        </div>
      </main>
      <SiteFooter />
      <CookieBanner />
      <BackToTop />
    </div>
  );
};

export default Programs;
