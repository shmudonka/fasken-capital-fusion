import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { programs } from "@/data/programs";
import programsBg from "@/assets/programs-bg.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const ProgramsSection = () =>
<section id="programs" className="relative py-24 overflow-hidden">
    <div className="absolute inset-0">
      <img src={programsBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-dark-surface/95 opacity-70 pointer-events-none" />
    </div>
    <div className="relative z-10 container">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-0 h-0 border-l-[12px] border-l-primary border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent" />
          <h2 className="text-3xl md:text-4xl font-serif text-dark-surface-foreground">Global Citizen Programs</h2>
        </div>
        <div className="w-12 h-[3px] bg-primary mb-6" />
        <p className="text-dark-surface-foreground/60 max-w-2xl text-[15px] mb-12">Explore our full portfolio of citizenship and residency by investment programs across the globe.</p>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
        {programs.map((program, i) =>
      <ScrollReveal key={program.slug} delay={i * 0.05} direction="none">
            <Link to={`/programs/${program.slug}`} className="group flex items-center justify-between border-b border-dark-surface-foreground/10 py-5 px-4 hover:bg-dark-surface-foreground/5 transition-all duration-200">
              <div>
                <h3 className="font-serif text-[15px] text-dark-surface-foreground group-hover:text-primary transition-colors">{program.country}</h3>
                <p className="text-[10px] text-dark-surface-foreground/40 uppercase tracking-[0.1em] mt-0.5">{program.type}</p>
              </div>
              <ChevronRight size={16} className="text-dark-surface-foreground/20 group-hover:text-primary transition-colors shrink-0" />
            </Link>
          </ScrollReveal>
      )}
      </div>
      <ScrollReveal delay={0.3}>
        <div className="mt-10"><Link to="/programs" className="btn-fasken-outline-white">View All Programs</Link></div>
      </ScrollReveal>
    </div>
  </section>;


export default ProgramsSection;