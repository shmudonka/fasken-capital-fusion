import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const GlobalCitizenSection = () => {
  return (
    <section className="bg-dark-surface py-24">
      <div className="container">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex items-start gap-6 max-w-2xl">
              <div className="w-[3px] bg-primary shrink-0 self-stretch min-h-[80px]" />
              <h2 className="text-3xl md:text-[40px] font-light leading-[1.3] text-foreground">
                Discover how we find solutions to your most challenging matters.
              </h2>
            </div>
            <Link to="/services" className="link-arrow shrink-0">
              View Services <ArrowUpRight />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GlobalCitizenSection;
