import { Link } from "react-router-dom";
import { programs } from "@/data/programs";
import ScrollReveal from "@/components/ScrollReveal";

const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const ProgramsSection = () => (
  <section id="programs" className="bg-dark-surface py-24">
    <div className="container">
      <ScrollReveal>
        <h2 className="text-3xl md:text-[40px] font-light text-foreground mb-4">Representative Programs</h2>
        <p className="text-[15px] font-light text-muted-foreground max-w-2xl mb-4">
          <Link to="/programs" className="link-arrow">
            View All Programs <ArrowUpRight />
          </Link>
        </p>
      </ScrollReveal>

      <div className="mt-10 space-y-0">
        {programs.slice(0, 6).map((program, i) => (
          <ScrollReveal key={program.slug} delay={i * 0.05}>
            <Link
              to={`/programs/${program.slug}`}
              className="group flex items-start justify-between py-6 border-b border-border hover:bg-secondary/30 transition-colors px-2"
            >
              <div className="flex-1">
                <h3 className="text-[17px] font-light text-foreground group-hover:text-primary transition-colors mb-1">
                  {program.country}
                </h3>
                <p className="text-[13px] text-muted-foreground font-light">
                  {program.type} · Min. {program.minInvestment}
                </p>
              </div>
              <span className="text-[13px] text-muted-foreground font-light mt-1">
                Read More <ArrowUpRight />
              </span>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProgramsSection;
