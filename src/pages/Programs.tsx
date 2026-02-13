import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const citizenshipPrograms = [
  {
    country: "Antigua & Barbuda",
    type: "Citizenship by Investment",
    minInvestment: "USD $100,000",
    timeline: "3-4 months",
    visaFree: "150+ countries",
  },
  {
    country: "Dominica",
    type: "Economic Citizenship Program",
    minInvestment: "USD $100,000",
    timeline: "2-3 months",
    visaFree: "140+ countries",
  },
  {
    country: "Grenada",
    type: "Citizenship by Investment",
    minInvestment: "USD $150,000",
    timeline: "3-4 months",
    visaFree: "145+ countries",
  },
  {
    country: "Malta",
    type: "Citizenship by Naturalization",
    minInvestment: "EUR €690,000",
    timeline: "12-36 months",
    visaFree: "185+ countries",
  },
  {
    country: "Saint Lucia",
    type: "Citizenship by Investment",
    minInvestment: "USD $100,000",
    timeline: "3-4 months",
    visaFree: "145+ countries",
  },
  {
    country: "St. Kitts & Nevis",
    type: "Citizenship by Investment",
    minInvestment: "USD $250,000",
    timeline: "3-6 months",
    visaFree: "155+ countries",
  },
];

const residencyPrograms = [
  {
    country: "Greece",
    type: "Golden Visa Program",
    minInvestment: "EUR €250,000",
    timeline: "2-3 months",
    visaFree: "Schengen Area",
  },
  {
    country: "Hungary",
    type: "Investor Residence Program",
    minInvestment: "EUR €250,000",
    timeline: "2-3 months",
    visaFree: "Schengen Area",
  },
  {
    country: "Latvia",
    type: "Residency by Investment",
    minInvestment: "EUR €50,000",
    timeline: "1-3 months",
    visaFree: "Schengen Area",
  },
  {
    country: "Portugal",
    type: "Golden Residence Permit",
    minInvestment: "EUR €500,000",
    timeline: "4-6 months",
    visaFree: "Schengen Area",
  },
  {
    country: "Spain",
    type: "Residency Program",
    minInvestment: "EUR €500,000",
    timeline: "2-3 months",
    visaFree: "Schengen Area",
  },
  {
    country: "USA EB-5",
    type: "Immigrant Investor Program",
    minInvestment: "USD $800,000",
    timeline: "24-36 months",
    visaFree: "N/A",
  },
];

const ProgramCard = ({ program }: { program: typeof citizenshipPrograms[0] }) => (
  <Link
    to="#"
    className="group block border-b border-border hover:bg-warm-beige transition-colors"
  >
    <div className="flex items-center justify-between py-6 px-4">
      <div className="flex-1">
        <h3 className="font-serif text-[17px] text-foreground group-hover:text-primary transition-colors mb-1">
          {program.country}
        </h3>
        <p className="text-[11px] text-muted-foreground uppercase tracking-[0.1em]">
          {program.type}
        </p>
      </div>
      <div className="hidden md:flex items-center gap-8 text-[12px] text-muted-foreground">
        <div className="text-right">
          <span className="block text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-0.5">Min. Investment</span>
          <span className="text-foreground font-medium">{program.minInvestment}</span>
        </div>
        <div className="text-right">
          <span className="block text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-0.5">Timeline</span>
          <span className="text-foreground font-medium">{program.timeline}</span>
        </div>
        <div className="text-right">
          <span className="block text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-0.5">Visa-Free</span>
          <span className="text-foreground font-medium">{program.visaFree}</span>
        </div>
      </div>
      <ChevronRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity ml-4 shrink-0" />
    </div>
  </Link>
);

const Programs = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHeader
          title="Global Citizen Programs"
          description="Explore our comprehensive portfolio of citizenship and residency by investment programs across the globe. Each program is carefully vetted and managed by our team of experts."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Programs" },
          ]}
          searchPlaceholder="Filter programs"
        />

        <div className="container py-16">
          {/* Citizenship Programs */}
          <div className="flex flex-col md:flex-row items-start gap-8 mb-20">
            <div className="w-full md:w-56 shrink-0 flex items-center gap-3 mb-4 md:mb-0 md:pt-6">
              <div className="w-0 h-0 border-l-[14px] border-l-primary border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" />
              <h2 className="text-2xl font-serif text-foreground">Citizenship</h2>
            </div>
            <div className="flex-1">
              {citizenshipPrograms.map((program, i) => (
                <ProgramCard key={i} program={program} />
              ))}
            </div>
          </div>

          {/* Residency Programs */}
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-56 shrink-0 flex items-center gap-3 mb-4 md:mb-0 md:pt-6">
              <div className="w-0 h-0 border-l-[14px] border-l-primary border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" />
              <h2 className="text-2xl font-serif text-foreground">Residency</h2>
            </div>
            <div className="flex-1">
              {residencyPrograms.map((program, i) => (
                <ProgramCard key={i} program={program} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-dark-surface py-20">
          <div className="container text-center">
            <h2 className="text-3xl font-serif text-dark-surface-foreground mb-4">
              Not sure which program is right for you?
            </h2>
            <p className="text-dark-surface-foreground/60 text-[15px] max-w-xl mx-auto mb-8">
              Our expert advisors will assess your profile and recommend the best citizenship or residency program tailored to your needs.
            </p>
            <Link to="/contact" className="btn-fasken-outline-white">
              Schedule a Consultation
            </Link>
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
