import { Shield, Globe, Users, Building } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Citizenship by Investment",
    description: "Obtain a second citizenship through government-approved investment programs in select countries worldwide.",
  },
  {
    icon: Shield,
    title: "Residency by Investment",
    description: "Secure permanent residency through strategic investments, providing freedom of movement and access to new opportunities.",
  },
  {
    icon: Users,
    title: "Family Planning & Advisory",
    description: "Comprehensive advisory services tailored to families seeking global mobility, asset protection, and diversification strategies.",
  },
  {
    icon: Building,
    title: "Government Advisory",
    description: "Partnering with sovereign nations to design, implement, and manage investor immigration programs that drive foreign investment.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-warm-gray">
      <div className="container">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Our Services
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground">
            Citizenship Capital Group provides end-to-end advisory and legal services across the full spectrum of investment migration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-background p-8 card-hover border border-border"
            >
              <service.icon size={28} className="text-primary mb-4" />
              <h3 className="font-serif text-lg text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
