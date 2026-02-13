import { ArrowRight, ChevronRight } from "lucide-react";
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
      {/* Background */}
      <div className="absolute inset-0">
        <img src={programsBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark-surface/92" />
      </div>

      <div className="relative z-10 container">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-0 h-0 border-l-[12px] border-l-primary border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent" />
          <h2 className="text-3xl md:text-4xl font-serif text-dark-surface-foreground">
            Global Citizen Programs
          </h2>
        </div>
        <div className="section-divider mb-6" />
        <p className="text-dark-surface-foreground/60 max-w-2xl text-[15px] mb-12">
          Explore our comprehensive portfolio of citizenship and residency by investment programs across the globe.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {programs.map((program) => (
            <a
              key={program.country}
              href="#"
              className="group flex items-center justify-between border-b border-dark-surface-foreground/10 py-5 px-4 hover:bg-dark-surface-foreground/5 transition-all duration-200"
            >
              <div>
                <h3 className="font-serif text-[15px] text-dark-surface-foreground group-hover:text-primary transition-colors">
                  {program.country}
                </h3>
                <p className="text-[10px] text-dark-surface-foreground/40 uppercase tracking-[0.1em] mt-0.5">
                  {program.type}
                </p>
              </div>
              <ChevronRight size={16} className="text-dark-surface-foreground/20 group-hover:text-primary transition-colors shrink-0" />
            </a>
          ))}
        </div>

        <div className="mt-10">
          <a href="#" className="btn-fasken-outline-white">
            View All Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
