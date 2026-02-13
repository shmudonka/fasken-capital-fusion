import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  { title: "Citizenship by Investment", areas: "6 programs" },
  { title: "Residency by Investment", areas: "4 programs" },
  { title: "Family Office Advisory", areas: null },
  { title: "Government Advisory", areas: null },
  { title: "Asset Protection", areas: null },
  { title: "Tax Planning", areas: null },
];

const practices = [
  { title: "Due Diligence", areas: null },
  { title: "Immigration Law", areas: "3 areas" },
  { title: "Real Estate Advisory", areas: null },
  { title: "Wealth Management", areas: null },
  { title: "Corporate Structuring", areas: null },
  { title: "Global Compliance", areas: null },
];

const ServicesSection = () => {
  return (
    <section id="services">
      {/* Section header */}
      <div className="bg-warm-beige py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-[15px]">
            Comprehensive advisory and legal services across the full spectrum of investment migration and global mobility.
          </p>
        </div>
      </div>

      {/* Breadcrumb bar */}
      <div className="border-b border-border">
        <div className="container flex items-center py-4 text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={12} className="mx-2" />
          <Link to="/services" className="text-foreground hover:text-primary transition-colors">Services</Link>
        </div>
      </div>

      {/* Two-column list */}
      <div className="container py-16">
        <div className="flex flex-col md:flex-row items-start gap-8 mb-16">
          <div className="w-full md:w-48 shrink-0 flex items-center gap-3">
            <div className="w-0 h-0 border-l-[12px] border-l-primary border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent" />
            <h3 className="text-xl font-serif text-foreground">Industries</h3>
          </div>
          <div className="flex-1 grid md:grid-cols-2 gap-0">
            {industries.map((item, i) => (
              <Link
                key={i}
                to="/services"
                className="group flex items-center justify-between py-5 px-4 border-b border-border hover:bg-warm-beige transition-colors"
              >
                <span className="font-serif text-[15px] text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </span>
                <div className="flex items-center gap-2">
                  {item.areas && (
                    <span className="text-[10px] text-muted-foreground bg-warm-beige group-hover:bg-background px-3 py-1 font-medium uppercase tracking-wider">
                      {item.areas}
                    </span>
                  )}
                  <ChevronRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-full md:w-48 shrink-0 flex items-center gap-3">
            <div className="w-0 h-0 border-l-[12px] border-l-primary border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent" />
            <h3 className="text-xl font-serif text-foreground">Practices</h3>
          </div>
          <div className="flex-1 grid md:grid-cols-2 gap-0">
            {practices.map((item, i) => (
              <Link
                key={i}
                to="/services"
                className="group flex items-center justify-between py-5 px-4 border-b border-border hover:bg-warm-beige transition-colors"
              >
                <span className="font-serif text-[15px] text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </span>
                <div className="flex items-center gap-2">
                  {item.areas && (
                    <span className="text-[10px] text-muted-foreground bg-warm-beige group-hover:bg-background px-3 py-1 font-medium uppercase tracking-wider">
                      {item.areas}
                    </span>
                  )}
                  <ChevronRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
