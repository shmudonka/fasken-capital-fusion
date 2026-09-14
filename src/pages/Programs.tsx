import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { programs, type KeyFact, type Program } from "@/data/programs";

/**
 * Three summary stats for the list row. Programs with their own key facts use those,
 * skipping the first — it restates the program type already shown under the name.
 */
const cardFacts = (program: Program): KeyFact[] =>
  program.keyFacts?.slice(1, 4) ?? [
    { label: "Min. Investment", value: program.minInvestment },
    { label: "Timeline", value: program.timeline },
    { label: "Visa-Free", value: program.visaFree },
  ];

const ProgramCard = ({ program, index }: { program: Program; index: number }) => (
  <ScrollReveal delay={index * 0.05}>
    <Link to={`/programs/${program.slug}`} className="group block border-b border-border hover:bg-warm-beige transition-colors">
      <div className="flex items-center justify-between py-6 px-4">
        <div className="flex-1 min-w-0 pr-6">
          <h3 className="font-serif text-[17px] text-foreground group-hover:text-primary transition-colors mb-1">{program.country}</h3>
          <p className="text-[11px] text-muted-foreground uppercase tracking-[0.1em]">{program.type}</p>
        </div>
        <div className="hidden lg:flex items-center gap-8 text-[12px] text-muted-foreground shrink-0">
          {cardFacts(program).map((fact) => (
            <div key={fact.label} className="text-right w-36">
              <span className="block text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-0.5">{fact.label}</span>
              <span className="text-foreground font-medium">{fact.value}</span>
            </div>
          ))}
        </div>
        <ChevronRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity ml-4 shrink-0" />
      </div>
    </Link>
  </ScrollReveal>
);

const Programs = () => {
  const citizenshipPrograms = programs.filter(p => p.category === "citizenship");
  const residencyPrograms = programs.filter(p => p.category === "residency");
  const businessVisaPrograms = programs.filter(p => p.category === "business-visa");

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHeader title="Global Citizen Programs" description="Explore our full portfolio of citizenship and residency by investment programs, and U.S. treaty business visas, across the globe. Each program is carefully vetted and managed by our team of experts." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Programs" }]} searchPlaceholder="Filter programs" />
        <div className="container py-16">
          <div className="flex flex-col md:flex-row items-start gap-8 mb-20">
            <ScrollReveal className="w-full md:w-56 shrink-0">
              <div className="flex items-center gap-3 mb-4 md:mb-0 md:pt-6">
                <div className="w-0 h-0 border-l-[14px] border-l-primary border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" />
                <h2 className="text-2xl font-serif text-foreground">Citizenship</h2>
              </div>
            </ScrollReveal>
            <div className="flex-1">{citizenshipPrograms.map((p, i) => <ProgramCard key={p.slug} program={p} index={i} />)}</div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-8 mb-20">
            <ScrollReveal className="w-full md:w-56 shrink-0">
              <div className="flex items-center gap-3 mb-4 md:mb-0 md:pt-6">
                <div className="w-0 h-0 border-l-[14px] border-l-primary border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" />
                <h2 className="text-2xl font-serif text-foreground">Residency</h2>
              </div>
            </ScrollReveal>
            <div className="flex-1">{residencyPrograms.map((p, i) => <ProgramCard key={p.slug} program={p} index={i} />)}</div>
          </div>
          {businessVisaPrograms.length > 0 && (
            <div className="flex flex-col md:flex-row items-start gap-8">
              <ScrollReveal className="w-full md:w-56 shrink-0">
                <div className="flex items-center gap-3 mb-4 md:mb-0 md:pt-6">
                  <div className="w-0 h-0 border-l-[14px] border-l-primary border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" />
                  <h2 className="text-2xl font-serif text-foreground">U.S. Business Visas</h2>
                </div>
              </ScrollReveal>
              <div className="flex-1">{businessVisaPrograms.map((p, i) => <ProgramCard key={p.slug} program={p} index={i} />)}</div>
            </div>
          )}
        </div>
        <div className="bg-dark-surface py-20">
          <div className="container text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-serif text-dark-surface-foreground mb-4">Not sure which program is right for you?</h2>
              <p className="text-dark-surface-foreground/60 text-[15px] max-w-xl mx-auto mb-8">Our expert advisors will assess your profile and recommend the best program tailored to your needs.</p>
              <Link to="/contact" className="btn-fasken-outline-white">Schedule a Consultation</Link>
            </ScrollReveal>
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