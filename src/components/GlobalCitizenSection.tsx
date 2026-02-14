import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const cards = [
  {
    category: "GUIDE",
    date: "February 2026",
    title: "Become a Global Citizen",
    description:
      "Javaid & Associates — Citizenship Capital Group empowers high net worth individuals and families to become global citizens by investing in a second residence or citizenship.",
    link: "Become a Global Citizen",
    href: "/programs",
  },
  {
    category: "PARTNERSHIPS",
    title: "Join Our Certified Partner Network",
    description:
      "Javaid & Associates equips its Certified Partner network with tools, services, and training to deliver the best possible experience to clients.",
    link: "Become a Partner",
    href: "/contact",
  },
  {
    category: "GOVERNMENT",
    title: "Sovereign Partnership Solutions",
    description:
      "Javaid & Associates enables government agencies as trusted partners in designing, developing, and implementing investor programs for residence and citizenship.",
    link: "Sovereign Partnerships",
    href: "/services",
  },
];

const GlobalCitizenSection = () => {
  return (
    <section id="citizenship" className="py-20 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-0">
          {cards.map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <Link
                to={card.href}
                className="group block border-b md:border-b-0 md:border-r last:border-r-0 border-border p-8 lg:p-10 hover:bg-warm-beige transition-colors duration-300 h-full"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">
                    {card.category}
                  </span>
                  {card.date && (
                    <span className="text-[11px] text-muted-foreground">{card.date}</span>
                  )}
                </div>
                <h3 className="text-xl font-serif text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {card.description}
                </p>
                <span className="link-arrow group-hover:text-primary">
                  {card.link} <ArrowRight size={12} />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalCitizenSection;
