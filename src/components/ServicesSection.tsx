import { ArrowRight, ChevronRight } from "lucide-react";

const industries = [
  { title: "Citizenship by Investment", areas: "6 programs" },
  { title: "Residency by Investment", areas: "4 programs" },
  { title: "Family Planning & Advisory", areas: null },
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
      {/* Fasken-style page header with warm beige bg */}
      <div className="bg-warm-beige py-20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-[15px]">
            Citizenship Capital Group provides comprehensive advisory and legal services across the full spectrum of investment migration and global mobility.
          </p>
        </div>
      </div>

      {/* Breadcrumb bar */}
      <div className="border-b border-border">
        <div className="container flex items-center py-4 text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Home</a>
          <ChevronRight size={12} className="mx-2" />
          <span className="text-foreground">Services</span>
        </div>
      </div>

      {/* Services list - Fasken two-column with red triangle */}
      <div className="container py-16">
        {/* Industries */}
        <div className="flex items-start gap-8 mb-16">
          <div className="w-48 shrink-0 flex items-center gap-3">
            <div className="w-0 h-0 border-l-[12px] border-l-primary border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent" />
            <h3 className="text-xl font-serif text-foreground">Industries</h3>
          </div>
          <div className="flex-1 grid md:grid-cols-2 gap-0">
            {industries.map((item, i) => (
              <a
                key={i}
                href="#"
                className="group flex items-center justify-between py-5 px-4 border-b border-border hover:bg-warm-beige transition-colors"
              >
                <span className="font-serif text-[15px] text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </span>
                <div className="flex items-center gap-2">
                  {item.areas && (
                    <span className="text-[11px] text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                      {item.areas}
                    </span>
                  )}
                  <ChevronRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Practices */}
        <div className="flex items-start gap-8">
          <div className="w-48 shrink-0 flex items-center gap-3">
            <div className="w-0 h-0 border-l-[12px] border-l-primary border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent" />
            <h3 className="text-xl font-serif text-foreground">Practices</h3>
          </div>
          <div className="flex-1 grid md:grid-cols-2 gap-0">
            {practices.map((item, i) => (
              <a
                key={i}
                href="#"
                className="group flex items-center justify-between py-5 px-4 border-b border-border hover:bg-warm-beige transition-colors"
              >
                <span className="font-serif text-[15px] text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </span>
                <div className="flex items-center gap-2">
                  {item.areas && (
                    <span className="text-[11px] text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                      {item.areas}
                    </span>
                  )}
                  <ChevronRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
