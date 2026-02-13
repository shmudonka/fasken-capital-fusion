import { ArrowRight } from "lucide-react";

const GlobalCitizenSection = () => {
  return (
    <section id="citizenship" className="py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Become a Global Citizen
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-lg text-muted-foreground italic font-serif">
            Discover the power of a second citizenship. Live the life you were destined to live.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* High Net Worth Investors */}
          <div className="group card-hover border border-border p-8">
            <h3 className="text-xl font-serif text-foreground mb-4">
              High Net Worth Investors
            </h3>
            <div className="section-divider mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Citizenship Capital Group empowers high net worth individuals and families to become global citizens by investing in a second residence or citizenship and helps transform their aspirations into reality through highly personalized products and services.
            </p>
            <a href="#" className="link-arrow">
              Become a Global Citizen <ArrowRight size={14} />
            </a>
          </div>

          {/* Certified Partners */}
          <div className="group card-hover border border-border p-8">
            <h3 className="text-xl font-serif text-foreground mb-4">
              Certified Partners
            </h3>
            <div className="section-divider mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Citizenship Capital Group equips its Certified Partner network with tools, services, and training to deliver the best possible experience to clients seeking to invest in second residence or citizenship. Our partners advise clients on virtually any matter in any jurisdiction around the world.
            </p>
            <a href="#" className="link-arrow">
              Become a Partner <ArrowRight size={14} />
            </a>
          </div>

          {/* Government Agencies */}
          <div className="group card-hover border border-border p-8">
            <h3 className="text-xl font-serif text-foreground mb-4">
              Government Agencies
            </h3>
            <div className="section-divider mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Citizenship Capital Group enables government agencies as trusted partners in designing, developing, implementing, and running investor programs for residence and citizenship to help boost foreign investments in their countries.
            </p>
            <a href="#" className="link-arrow">
              Sovereign Partnerships <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalCitizenSection;
