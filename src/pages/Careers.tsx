import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";

const ArrowUpRight = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block ml-1">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const openings = [
  { title: "Senior Immigration Advisor", location: "Toronto", type: "Full-time", department: "Advisory" },
  { title: "Compliance Analyst", location: "Lahore", type: "Full-time", department: "Compliance" },
  { title: "Client Relations Manager", location: "Toronto", type: "Full-time", department: "Client Services" },
  { title: "Legal Counsel, European Programs", location: "Toronto", type: "Full-time", department: "Legal" },
  { title: "Due Diligence Specialist", location: "Lahore", type: "Full-time", department: "Compliance" },
  { title: "Associate Advisor", location: "Toronto", type: "Full-time", department: "Advisory" },
];

const Careers = () => (
  <div className="min-h-screen bg-background">
    <SiteHeader />
    <main>
      {/* Hero */}
      <div className="bg-background pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-light text-foreground mb-6">Careers</h1>
            <p className="text-[15px] font-light text-muted-foreground leading-relaxed max-w-2xl mb-8">
              If you are ready to work on complex global challenges and possess a relentless drive to succeed on behalf of your clients, join us.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/contact" className="link-arrow">Open Positions <ArrowUpRight /></Link>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Carousel section - Davies style */}
      <section className="bg-dark-surface py-24">
        <div className="container">
          <ScrollReveal>
            <div className="bg-card h-72 w-full max-w-3xl mx-auto mb-10" />
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-light text-foreground mb-6">Join a Winning Team</h2>
              <blockquote className="text-[15px] font-light text-muted-foreground leading-relaxed italic font-serif mb-6">
                "Our team members work with high-net-worth individuals and families from around the world, navigating complex international regulations and delivering life-changing outcomes."
              </blockquote>
              <Link to="/about" className="link-arrow">About Our Firm <ArrowUpRight /></Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Openings */}
      <section className="bg-background py-24">
        <div className="container">
          <ScrollReveal>
            <div className="flex items-start gap-6 mb-10">
              <div className="w-[3px] bg-primary shrink-0 self-stretch min-h-[30px]" />
              <h2 className="text-2xl md:text-3xl font-light text-foreground">Current Openings</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-0">
            {openings.map((job, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <Link to="/contact" className="group flex items-center justify-between py-6 border-b border-border hover:bg-secondary/30 transition-colors px-2">
                  <div>
                    <h3 className="text-[16px] font-light text-foreground group-hover:text-primary transition-colors mb-1">{job.title}</h3>
                    <div className="flex items-center gap-4 text-[12px] font-light text-muted-foreground">
                      <span>{job.location}</span>
                      <span>{job.type}</span>
                      <span>{job.department}</span>
                    </div>
                  </div>
                  <span className="text-muted-foreground group-hover:text-primary transition-colors"><ArrowUpRight /></span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
    <SiteFooter /><CookieBanner /><BackToTop />
  </div>
);

export default Careers;
