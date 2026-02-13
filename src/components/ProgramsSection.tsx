import { ArrowRight } from "lucide-react";
import programsBg from "@/assets/programs-bg.jpg";

const programs = [
  { country: "Antigua & Barbuda", type: "Citizenship by Investment" },
  { country: "Dominica", type: "Economic Citizenship Program" },
  { country: "Greece", type: "Golden Visa Program" },
  { country: "Grenada", type: "Citizenship by Investment" },
  { country: "Hungary", type: "Investor Residence Program" },
  { country: "Latvia", type: "Residency by Investment" },
  { country: "Malta", type: "Permanent Residency by Investment" },
  { country: "Portugal", type: "Golden Residence Permit" },
  { country: "Saint Lucia", type: "Citizenship by Investment" },
  { country: "St. Kitts & Nevis", type: "Citizenship by Investment" },
  { country: "Spain", type: "Residency Program" },
  { country: "USA EB-5", type: "Immigrant Investor Program" },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="relative py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={programsBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark-surface/90" />
      </div>

      <div className="relative z-10 container">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-dark-surface-foreground mb-4">
            Global Citizen Programs
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-dark-surface-foreground/70 max-w-2xl">
            Explore our comprehensive portfolio of citizenship and residency by investment programs across the globe.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {programs.map((program) => (
            <a
              key={program.country}
              href="#"
              className="group border border-dark-surface-foreground/10 p-6 hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              <h3 className="font-serif text-lg text-dark-surface-foreground mb-1 group-hover:text-primary transition-colors">
                {program.country}
              </h3>
              <p className="text-xs text-dark-surface-foreground/50 uppercase tracking-wider">
                {program.type}
              </p>
              <ArrowRight size={14} className="mt-4 text-dark-surface-foreground/30 group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
