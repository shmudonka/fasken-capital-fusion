import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { industries, practices } from "@/data/services";
import ScrollReveal from "@/components/ScrollReveal";

const ServicesSection = () => (
  <section id="services">
    <div className="bg-warm-beige py-16">
      <div className="container text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-[15px]">Comprehensive advisory and legal services across the full spectrum of investment migration and global mobility.</p>
        </ScrollReveal>
      </div>
    </div>
    <div className="border-b border-border" />
    <div className="container py-16">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row items-start gap-8 mb-16">
          <div className="w-full md:w-48 shrink-0 flex items-center gap-3">
            <div className="w-0 h-0 border-l-[12px] border-l-primary border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent" />
            <h3 className="text-xl font-serif text-foreground">Industries</h3>
          </div>
          <div className="flex-1 grid md:grid-cols-2 gap-0">
            {industries.slice(0, 6).map((item) => (
              <Link key={item.slug} to={`/services/${item.slug}`} className="group flex items-center justify-between py-5 px-4 border-b border-border hover:bg-warm-beige transition-colors">
                <span className="font-serif text-[15px] text-foreground group-hover:text-primary transition-colors">{item.title}</span>
                <div className="flex items-center gap-2">
                  {item.areas && <span className="text-[10px] text-muted-foreground bg-warm-beige group-hover:bg-background px-3 py-1 font-medium uppercase tracking-wider">{item.areas}</span>}
                  <ChevronRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-full md:w-48 shrink-0 flex items-center gap-3">
            <div className="w-0 h-0 border-l-[12px] border-l-primary border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent" />
            <h3 className="text-xl font-serif text-foreground">Practices</h3>
          </div>
          <div className="flex-1 grid md:grid-cols-2 gap-0">
            {practices.slice(0, 6).map((item) => (
              <Link key={item.slug} to={`/services/${item.slug}`} className="group flex items-center justify-between py-5 px-4 border-b border-border hover:bg-warm-beige transition-colors">
                <span className="font-serif text-[15px] text-foreground group-hover:text-primary transition-colors">{item.title}</span>
                <div className="flex items-center gap-2">
                  {item.areas && <span className="text-[10px] text-muted-foreground bg-warm-beige group-hover:bg-background px-3 py-1 font-medium uppercase tracking-wider">{item.areas}</span>}
                  <ChevronRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ServicesSection;
