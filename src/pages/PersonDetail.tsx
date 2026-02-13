import { useParams, Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import { ChevronRight, Mail, Phone, ArrowRight } from "lucide-react";
import { getTeamMemberBySlug, team } from "@/data/team";

const PersonDetail = () => {
  const { slug } = useParams();
  const member = getTeamMemberBySlug(slug || "");

  if (!member) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <div className="container pt-40 pb-20 text-center">
          <h1 className="text-3xl font-serif text-foreground mb-4">Person Not Found</h1>
          <Link to="/people" className="btn-fasken">Back to People</Link>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const otherMembers = team.filter(m => m.slug !== member.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Split hero */}
        <div className="relative min-h-[40vh] flex">
          <div className="relative z-10 w-full lg:w-1/2 bg-warm-beige flex flex-col justify-center px-8 md:px-16 lg:px-20 pt-32 pb-12 lg:pt-40 lg:pb-16">
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-2">{member.name}</h1>
            <p className="text-[15px] text-muted-foreground mb-1">{member.role}</p>
            <p className="text-[13px] text-primary uppercase tracking-wider">{member.location}</p>
          </div>
          <div className="hidden lg:flex absolute right-0 top-0 w-1/2 h-full bg-dark-surface items-center justify-center">
            <span className="text-8xl font-serif text-dark-surface-foreground/10">
              {member.name.split(" ").map(n => n[0]).join("")}
            </span>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="border-b border-border">
          <div className="container flex items-center py-4 text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={11} className="mx-2" />
            <Link to="/people" className="hover:text-primary transition-colors">People</Link>
            <ChevronRight size={11} className="mx-2" />
            <span className="text-foreground">{member.name}</span>
          </div>
        </div>

        <div className="container py-16">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Bio */}
            <div className="lg:w-2/3">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-0 h-0 border-l-[14px] border-l-primary border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" />
                <h2 className="text-2xl font-serif text-foreground">Biography</h2>
              </div>
              {member.bio.map((para, i) => (
                <p key={i} className="text-[15px] text-muted-foreground leading-relaxed mb-5">{para}</p>
              ))}

              <div className="flex items-center gap-3 mt-12 mb-6">
                <div className="w-0 h-0 border-l-[14px] border-l-primary border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" />
                <h2 className="text-2xl font-serif text-foreground">Specializations</h2>
              </div>
              <ul className="space-y-3">
                {member.specializations.map((spec) => (
                  <li key={spec} className="flex items-center gap-3 py-3 border-b border-border text-[15px] text-foreground">
                    <ChevronRight size={14} className="text-primary shrink-0" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-warm-beige p-8 mb-8">
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-5">Contact</h3>
                <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-[14px] text-foreground hover:text-primary transition-colors mb-3">
                  <Mail size={14} className="text-primary" /> {member.email}
                </a>
                <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-[14px] text-foreground hover:text-primary transition-colors">
                  <Phone size={14} className="text-primary" /> {member.phone}
                </a>
              </div>

              <div className="bg-warm-beige p-8">
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-5">Office</h3>
                <Link to="/contact" className="font-serif text-[16px] text-foreground hover:text-primary transition-colors">
                  {member.location}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related people */}
        <div className="bg-warm-beige py-16">
          <div className="container">
            <div className="flex items-end justify-between mb-8 pb-4 border-b border-border/40">
              <h2 className="text-2xl font-serif text-foreground">Related People</h2>
              <Link to="/people" className="link-arrow">View All <ArrowRight size={12} /></Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {otherMembers.map((m) => (
                <Link key={m.slug} to={`/people/${m.slug}`} className="group">
                  <h3 className="font-serif text-[16px] text-foreground group-hover:text-primary transition-colors mb-1">{m.name}</h3>
                  <p className="text-[13px] text-muted-foreground mb-0.5">{m.role}</p>
                  <p className="text-[11px] text-primary uppercase tracking-wider">{m.location}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
      <CookieBanner />
      <BackToTop />
    </div>
  );
};

export default PersonDetail;
