import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
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
            <div className="lg:w-1/2">
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
            </div>
            <div className="lg:w-1/2 space-y-4">
              <div className="bg-warm-beige p-8">
                <Briefcase size={20} className="text-primary mb-3" />
                <h3 className="font-serif text-lg text-foreground mb-2">Professional Development</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">Ongoing training, conference attendance, and mentorship from senior leaders in the industry.</p>
              </div>
              <div className="bg-warm-beige p-8">
                <MapPin size={20} className="text-primary mb-3" />
                <h3 className="font-serif text-lg text-foreground mb-2">Global Opportunities</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">Work across multiple offices and jurisdictions, with opportunities for international assignments.</p>
              </div>
              <div className="bg-warm-beige p-8">
                <Users size={20} className="text-primary mb-3" />
                <h3 className="font-serif text-lg text-foreground mb-2">Collaborative Culture</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">A diverse, inclusive team united by a shared commitment to client excellence and ethical practice.</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-8">
            <div className="w-0 h-0 border-l-[14px] border-l-primary border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" />
            <h2 className="text-2xl font-serif text-foreground">Current Openings</h2>
          </div>
          <div className="space-y-0">
            {openings.map((job, i) => (
              <Link key={i} to="/contact" className="group flex items-center justify-between py-6 px-4 border-b border-border hover:bg-warm-beige transition-colors -mx-4">
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
