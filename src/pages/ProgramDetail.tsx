import { useParams, Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronRight, ArrowRight } from "lucide-react";
import { categoryLabels, getProgramBySlug, programs } from "@/data/programs";

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="w-0 h-0 border-l-[14px] border-l-primary border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" />
    <h2 className="text-2xl font-serif text-foreground">{children}</h2>
  </div>
);

const ProgramDetail = () => {
  const { slug } = useParams();
  const program = getProgramBySlug(slug || "");

  if (!program) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <div className="container pt-40 pb-20 text-center">
          <h1 className="text-3xl font-serif text-foreground mb-4">Program Not Found</h1>
          <Link to="/programs" className="btn-fasken">Back to Programs</Link>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const relatedPrograms = programs.filter(p => p.slug !== program.slug && p.category === program.category).slice(0, 3);

  const keyFacts = program.keyFacts ?? [
    { label: "Min. Investment", value: program.minInvestment },
    { label: "Processing Time", value: program.timeline },
    { label: "Visa-Free Access", value: program.visaFree },
    { label: "Program Type", value: categoryLabels[program.category] },
  ];
  const overviewParagraphs = program.overview ?? [program.description];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Split hero */}
        <div className="relative min-h-[45vh] flex flex-col lg:flex-row">
          <div className="relative z-10 w-full lg:w-1/2 bg-warm-beige flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-20 pt-32 pb-8 lg:pt-40 lg:pb-16">
            <ScrollReveal>
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary mb-3 block">{program.type}</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground mb-4">{program.country}</h1>
              <div className="w-12 h-[3px] bg-primary mb-6" />
              <p className="text-[14px] text-muted-foreground leading-relaxed max-w-md">{program.summary ?? program.description}</p>
            </ScrollReveal>
          </div>
          <div className="relative w-full h-56 sm:h-64 lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full">
            <img src={program.image || "/placeholder.svg"} alt={program.country} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-dark-surface/30 pointer-events-none" />
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
          <div className="container py-6 grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-8 md:gap-16">
            {keyFacts.map((fact, i) => (
              <ScrollReveal key={fact.label} delay={0.1 + i * 0.05}>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-muted-foreground mb-1">{fact.label}</span>
                  <span className="text-[16px] font-serif text-foreground">{fact.value}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="container py-16">
          <ScrollReveal>
            <div className="max-w-3xl">
              <SectionHeading>Overview</SectionHeading>
              <div className="space-y-4">
                {overviewParagraphs.map((paragraph, i) => (
                  <p key={i} className="text-[15px] text-muted-foreground leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Benefits */}
        <div className="bg-warm-beige py-16">
          <div className="container">
            <ScrollReveal>
              <SectionHeading>{program.bestFit ? "Key Benefits and Best Fit" : "Key Benefits"}</SectionHeading>
            </ScrollReveal>
            {program.bestFit ? (
              <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                {[
                  { title: "Key Benefits", items: program.benefits },
                  { title: "Often a Strong Fit For", items: program.bestFit },
                ].map((column) => (
                  <div key={column.title}>
                    <ScrollReveal>
                      <h3 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary pb-4 border-b border-border/40">
                        {column.title}
                      </h3>
                    </ScrollReveal>
                    {column.items.map((item, i) => (
                      <ScrollReveal key={i} delay={i * 0.05}>
                        <div className="flex items-start gap-3 py-5 border-b border-border/40">
                          <ChevronRight size={14} className="text-primary shrink-0 mt-0.5" />
                          <span className="text-[15px] text-foreground">{item}</span>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-0">
                {program.benefits.map((benefit, i) => (
                  <ScrollReveal key={i} delay={i * 0.05}>
                    <div className="flex items-start gap-3 py-5 px-4 border-b border-border/40">
                      <ChevronRight size={14} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-[15px] text-foreground">{benefit}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Requirements */}
        <div className="container py-16">
          <ScrollReveal>
            <SectionHeading>{program.requirementsHeading ?? "Requirements"}</SectionHeading>
          </ScrollReveal>
          <div className="space-y-0 max-w-3xl">
            {program.requirements.map((req, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 py-4 border-b border-border">
                  <span className="text-[11px] font-semibold text-primary mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[15px] text-muted-foreground">{req}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="bg-warm-beige py-16">
          <div className="container">
            <ScrollReveal>
              <SectionHeading>{program.processHeading ?? "Application Process"}</SectionHeading>
            </ScrollReveal>
            <div className="space-y-0 max-w-3xl">
              {program.process.map((step, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <div className="flex items-start gap-6 py-5 border-b border-border/40">
                    <span className="text-2xl font-serif text-primary shrink-0 w-10">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[15px] text-foreground">{step}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Evidence */}
        {program.evidence && (
          <div className="container py-16">
            <ScrollReveal>
              <SectionHeading>{program.evidence.heading}</SectionHeading>
            </ScrollReveal>
            <div className="space-y-0 max-w-3xl">
              {program.evidence.items.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <div className="flex items-start gap-3 py-4 border-b border-border">
                    <ChevronRight size={14} className="text-primary shrink-0 mt-1" />
                    <span className="text-[15px] text-muted-foreground">{item}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            {program.evidence.note && (
              <ScrollReveal>
                <p className="max-w-3xl mt-8 border-l-2 border-primary pl-5 text-[15px] text-muted-foreground leading-relaxed">
                  {program.evidence.note}
                </p>
              </ScrollReveal>
            )}
          </div>
        )}

        {/* Comparison */}
        {program.comparison && (
          <div className="bg-warm-beige py-16">
            <div className="container">
              <ScrollReveal>
                <SectionHeading>{program.comparison.heading}</SectionHeading>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[640px] border-collapse text-left">
                    <thead>
                      <tr className="border-b-2 border-primary">
                        {program.comparison.columns.map((column) => (
                          <th
                            key={column}
                            scope="col"
                            className="py-4 pr-6 text-[10px] font-semibold uppercase tracking-[0.15em] text-primary align-bottom"
                          >
                            {column}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {program.comparison.rows.map((row) => (
                        <tr key={row[0]} className="border-b border-border/40 align-top">
                          <th scope="row" className="py-5 pr-6 text-[14px] font-serif font-normal text-foreground w-1/5">
                            {row[0]}
                          </th>
                          {row.slice(1).map((cell, i) => (
                            <td key={i} className="py-5 pr-6 text-[14px] text-muted-foreground leading-relaxed">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </ScrollReveal>
            </div>
          </div>
        )}

        {/* FAQs */}
        {program.faqs && program.faqs.length > 0 && (
          <div className="container py-16">
            <ScrollReveal>
              <SectionHeading>Frequently Asked Questions</SectionHeading>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Accordion type="single" collapsible className="max-w-3xl">
                {program.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left text-[15px] font-serif text-foreground hover:text-primary hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[15px] text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollReveal>
          </div>
        )}

        {/* CTA */}
        <div className="bg-dark-surface py-16">
          <div className="container text-center">
            <ScrollReveal>
              <h2 className="text-2xl font-serif text-dark-surface-foreground mb-4">
                Interested in {program.country}?
              </h2>
              <p className="text-dark-surface-foreground/60 text-[14px] max-w-2xl mx-auto mb-8">
                {program.ctaText ??
                  `Our advisors specialize in the ${program.country} ${program.type.toLowerCase()} and can guide you through every step of the process.`}
              </p>
              <Link to="/contact" className="btn-fasken-outline-white">
                Schedule a Consultation
              </Link>
            </ScrollReveal>
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
              {relatedPrograms.map((p, i) => (
                <ScrollReveal key={p.slug} delay={i * 0.1}>
                  <Link to={`/programs/${p.slug}`} className="group block py-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary block mb-2">{p.type}</span>
                    <h3 className="font-serif text-[17px] text-foreground group-hover:text-primary transition-colors mb-1">{p.country}</h3>
                    <span className="text-[12px] text-muted-foreground">
                      {p.keyFacts ? p.keyFacts[1].value : `From ${p.minInvestment}`}
                    </span>
                  </Link>
                </ScrollReveal>
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