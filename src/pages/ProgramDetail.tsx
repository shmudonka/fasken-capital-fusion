import { useParams, Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import { ChevronRight, ArrowRight } from "lucide-react";
import { getProgramBySlug, programs } from "@/data/programs";

const ProgramDetail = () => {
  const { slug } = useParams();
  const program = getProgramBySlug(slug || "");

  if (!program) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <div className="container pt-40 pb-20 text-center">
          <h1 className="text-3xl font-serif text-foreground mb-4">Program Not Found</h1>
          <Link to="/programs" className="btn-davies">Back to Programs</Link>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const relatedPrograms = programs.filter(p => p.slug !== program.slug && p.category === program.category).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Split hero */}
        <div className="relative min-h-[45vh] flex">
          <div className="relative z-10 w-full lg:w-1/2 bg-background flex flex-col justify-center px-8 md:px-16 lg:px-20 pt-32 pb-12 lg:pt-40 lg:pb-16">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary mb-3">{program.type}</span>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">{program.country}</h1>
            <div className="w-12 h-[3px] bg-primary mb-6" />
            <p className="text-[14px] text-muted-foreground leading-relaxed max-w-md">{program.description.substring(0, 150)}...</p>
          </div>
          <div className="hidden lg:flex absolute right-0 top-0 w-1/2 h-full bg-dark-surface items-center justify-center">
            <div className="text-center">
              <div className="text-5xl font-serif text-dark-surface-foreground/20 mb-4">{program.visaFree}</div>
              <div className="text-[11px] uppercase tracking-wider text-dark-surface-foreground/40">Visa-Free Travel</div>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="border-b border-border">
          <div className="container flex items-center py-4 text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={11} className="mx-2" />
            <Link to="/programs" className="hover:text-primary transition-colors">Programs</Link>
            <ChevronRight size={11} className="mx-2" />
            <span className="text-foreground">{program.country}</span>
          </div>
        </div>

        {/* Key facts bar */}
        <div className="border-b border-border">
          <div className="container py-6 flex flex-wrap gap-8 md:gap-16">
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Min. Investment</span>
              <span className="text-[16px] font-serif text-foreground">{program.minInvestment}</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Processing Time</span>
              <span className="text-[16px] font-serif text-foreground">{program.timeline}</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Visa-Free Access</span>
              <span className="text-[16px] font-serif text-foreground">{program.visaFree}</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Program Type</span>
              <span className="text-[16px] font-serif text-foreground capitalize">{program.category}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="container py-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-0 h-0 border-l-[14px] border-l-primary border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" />
              <h2 className="text-2xl font-serif text-foreground">Overview</h2>
            </div>
            <p className="text-[15px] text-muted-foreground leading-relaxed">{program.description}</p>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-dark-surface py-16">
          <div className="container">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-[3px] bg-primary shrink-0 self-stretch min-h-[30px]" />
              <h2 className="text-2xl font-light text-foreground">Key Benefits</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-0">
              {program.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 py-5 px-4 border-b border-border">
                  <span className="text-primary shrink-0 mt-0.5">›</span>
                  <span className="text-[15px] font-light text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container py-16">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-[3px] bg-primary shrink-0 self-stretch min-h-[30px]" />
            <h2 className="text-2xl font-light text-foreground">Requirements</h2>
          </div>
          <div className="space-y-0 max-w-3xl">
            {program.requirements.map((req, i) => (
              <div key={i} className="flex items-start gap-3 py-4 border-b border-border">
                <span className="text-[11px] font-medium text-primary mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[15px] font-light text-muted-foreground">{req}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-dark-surface py-16">
          <div className="container">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-[3px] bg-primary shrink-0 self-stretch min-h-[30px]" />
              <h2 className="text-2xl font-light text-foreground">Application Process</h2>
            </div>
            <div className="space-y-0 max-w-3xl">
              {program.process.map((step, i) => (
                <div key={i} className="flex items-start gap-6 py-5 border-b border-border/40">
                  <span className="text-2xl font-serif text-primary shrink-0 w-10">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[15px] text-foreground">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-dark-surface py-16">
          <div className="container text-center">
            <h2 className="text-2xl font-serif text-dark-surface-foreground mb-4">
              Interested in {program.country}?
            </h2>
            <p className="text-dark-surface-foreground/60 text-[14px] max-w-lg mx-auto mb-8">
              Our advisors specialize in the {program.country} {program.type.toLowerCase()} and can guide you through every step of the process.
            </p>
            <Link to="/contact" className="btn-davies">
              Schedule a Consultation
            </Link>
          </div>
        </div>

        {/* Related Programs */}
        {relatedPrograms.length > 0 && (
          <div className="container py-16">
            <div className="flex items-end justify-between mb-8 pb-4 border-b border-border">
              <h2 className="text-2xl font-serif text-foreground">Related Programs</h2>
              <Link to="/programs" className="link-arrow">All Programs <ArrowRight size={12} /></Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPrograms.map((p) => (
                <Link key={p.slug} to={`/programs/${p.slug}`} className="group block py-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary block mb-2">{p.type}</span>
                  <h3 className="font-serif text-[17px] text-foreground group-hover:text-primary transition-colors mb-1">{p.country}</h3>
                  <span className="text-[12px] text-muted-foreground">From {p.minInvestment}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
      <SiteFooter />
      <CookieBanner />
      <BackToTop />
    </div>
  );
};

export default ProgramDetail;
