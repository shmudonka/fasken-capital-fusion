import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Briefcase, Users } from "lucide-react";

const openings = [
  { title: "Senior Immigration Advisor", location: "Toronto", type: "Full-time", department: "Advisory" },
  { title: "Compliance Analyst", location: "Lahore", type: "Full-time", department: "Compliance" },
  { title: "Client Relations Manager", location: "Toronto", type: "Full-time", department: "Client Services" },
  { title: "Legal Counsel, Investment Programs", location: "Toronto", type: "Full-time", department: "Legal" },
  { title: "Due Diligence Specialist", location: "Lahore", type: "Full-time", department: "Compliance" },
  { title: "Marketing Coordinator", location: "Toronto", type: "Full-time", department: "Marketing" },
  { title: "Associate Advisor, Caribbean Programs", location: "Lahore", type: "Full-time", department: "Advisory" },
  { title: "Administrative Assistant", location: "Lahore", type: "Full-time", department: "Operations" },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHeader
          title="Careers"
          description="Join a team of exceptional professionals leading the investment migration industry. We are always looking for talented individuals who share our commitment to excellence and client service."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Careers" },
          ]}
          searchPlaceholder="Search openings"
        />

        <div className="container py-16">
          <div className="flex flex-col lg:flex-row gap-16 mb-20">
            <ScrollReveal className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-0 h-0 border-l-[14px] border-l-primary border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" />
                <h2 className="text-2xl font-serif text-foreground">Why Join Us</h2>
              </div>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-5">
                At Javaid & Associates - Citizenship Capital Group, we believe that our people are our greatest asset. We foster an environment of intellectual curiosity, professional growth, and mutual respect.
              </p>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-5">
                Our team members work with high-net-worth individuals and families from around the world, managing complex international regulations and delivering life-changing outcomes. Every day brings new challenges and opportunities.
              </p>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                We offer competitive compensation, strong benefits, opportunities for international travel, and a clear path for career advancement within a rapidly growing global firm.
              </p>
            </ScrollReveal>
            <div className="lg:w-1/2 space-y-4">
              {[
                { icon: Briefcase, title: "Professional Development", desc: "Ongoing training, conference attendance, and mentorship from senior leaders in the industry." },
                { icon: MapPin, title: "Global Opportunities", desc: "Work across multiple offices and jurisdictions, with opportunities for international assignments." },
                { icon: Users, title: "Collaborative Culture", desc: "A diverse, inclusive team united by a shared commitment to client excellence and ethical practice." },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={0.2 + i * 0.1}>
                  <div className="bg-warm-beige p-8">
                    <item.icon size={20} className="text-primary mb-3" />
                    <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-0 h-0 border-l-[14px] border-l-primary border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" />
              <h2 className="text-2xl font-serif text-foreground">Current Openings</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-0">
            {openings.map((job, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <Link to="/contact" className="group flex items-center justify-between py-6 px-4 border-b border-border hover:bg-warm-beige transition-colors -mx-4">
                  <div>
                    <h3 className="font-serif text-[16px] text-foreground group-hover:text-primary transition-colors mb-1">{job.title}</h3>
                    <div className="flex items-center gap-4 text-[12px] text-muted-foreground">
                      <span>{job.location}</span>
                      <span>{job.type}</span>
                      <span>{job.department}</span>
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </Link>
              </ScrollReveal>
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

export default Careers;