import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { useState } from "react";
import { industries, practices } from "@/data/services";
import ScrollReveal from "@/components/ScrollReveal";

const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

type Tab = "all" | "industries" | "practices";

const ServicesSection = () => {
  const [tab, setTab] = useState<Tab>("all");

  const tabs: { label: string; value: Tab }[] = [
    { label: "All Services", value: "all" },
    { label: "Industries", value: "industries" },
    { label: "Practices", value: "practices" },
  ];

  const showIndustries = tab === "all" || tab === "industries";
  const showPractices = tab === "all" || tab === "practices";

  return (
    <section id="services" className="bg-background py-24">
      <div className="container">
        <ScrollReveal>
          <h2 className="text-3xl md:text-[40px] font-light text-foreground mb-3">Services</h2>
          <div className="flex items-center gap-6 mb-10 border-b border-border">
            {tabs.map((t) => (
              <button
                key={t.value}
                onClick={() => setTab(t.value)}
                className={`pb-3 text-[14px] font-light transition-colors border-b-2 -mb-px ${
                  tab === t.value
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {showIndustries && (
          <ScrollReveal>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-0 mb-8">
              {industries.slice(0, 6).map((item) => (
                <Link
                  key={item.slug}
                  to={`/services/${item.slug}`}
                  className="group flex items-center justify-between py-5 px-5 border border-border -mt-px -ml-px hover:bg-secondary transition-colors"
                >
                  <span className="text-[15px] font-light text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </span>
                  <Plus size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </ScrollReveal>
        )}

        {showPractices && (
          <ScrollReveal delay={0.1}>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-0">
              {practices.slice(0, 6).map((item) => (
                <Link
                  key={item.slug}
                  to={`/services/${item.slug}`}
                  className="group flex items-center justify-between py-5 px-5 border border-border -mt-px -ml-px hover:bg-secondary transition-colors"
                >
                  <span className="text-[15px] font-light text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </span>
                  <Plus size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </ScrollReveal>
        )}

        <ScrollReveal delay={0.2}>
          <div className="mt-10">
            <Link to="/services" className="link-arrow">
              View All Services <ArrowUpRight />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;
