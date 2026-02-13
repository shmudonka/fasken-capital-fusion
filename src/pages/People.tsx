import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { team } from "@/data/team";

const People = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHeader
          title="People"
          description="Our team of experienced investment migration professionals brings deep expertise across multiple jurisdictions and program types. Meet the people who make Citizenship Capital Group an industry leader."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "People" },
          ]}
          searchPlaceholder="Search our people"
        />

        <div className="container py-16">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-0 h-0 border-l-[14px] border-l-primary border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" />
            <h2 className="text-2xl font-serif text-foreground">Our Team</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
            {team.map((member) => (
              <Link
                key={member.slug}
                to={`/people/${member.slug}`}
                className="group block py-8 px-6 border-b border-r border-border hover:bg-warm-beige transition-colors"
              >
                <div className="w-16 h-16 bg-warm-beige group-hover:bg-primary/10 flex items-center justify-center mb-4 transition-colors">
                  <span className="text-xl font-serif text-primary">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-serif text-[17px] text-foreground group-hover:text-primary transition-colors mb-1">
                  {member.name}
                </h3>
                <p className="text-[13px] text-muted-foreground mb-1">{member.role}</p>
                <p className="text-[11px] text-primary uppercase tracking-wider mb-4">{member.location}</p>
                <span className="link-arrow text-muted-foreground group-hover:text-primary">
                  View Profile <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
      <CookieBanner />
      <BackToTop />
    </div>
  );
};

export default People;
