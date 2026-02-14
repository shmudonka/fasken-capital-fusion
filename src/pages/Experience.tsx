import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { Clock, MapPin, CheckCircle, Users } from "lucide-react";

const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const stats = [
  { value: "30+", label: "Years of Experience", icon: Clock },
  { value: "2", label: "Global Offices", icon: MapPin },
  { value: "99%", label: "Case Win Rate", icon: CheckCircle },
  { value: "1,500+", label: "Clients Served", icon: Users },
];

const milestones = [
  { year: "1996", title: "Foundation", description: "Javaid & Associates Law Firm was established in Pakistan." },
  { year: "2003", title: "Caribbean Expansion", description: "Became one of the first authorized agents for St. Kitts & Nevis and Dominica citizenship programs." },
  { year: "2008", title: "European Practice", description: "Expanded into European residency programs, beginning with Portugal's Golden Visa." },
  { year: "2019", title: "1,000th Client", description: "Celebrated our 1,000th successful citizenship or residency application." },
  { year: "2026", title: "Industry Leadership", description: "Recognized as a premier investment migration advisory firm with over 1,500 cases." },
];

const Experience = () => (
  <div className="min-h-screen bg-background">
    <SiteHeader />
    <main>
      {/* Hero */}
      <div className="bg-background pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-light text-foreground mb-6">Experience</h1>
            <p className="text-[15px] font-light text-muted-foreground leading-relaxed max-w-2xl">
              Three decades of trusted advisory, an industry-leading approval rate, and a global presence that sets us apart.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Stats */}
      <section className="bg-dark-surface py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center py-8 px-4 border-r last:border-r-0 border-border">
                  <stat.icon size={22} className="mx-auto mb-3 text-primary" />
                  <div className="text-4xl md:text-5xl font-light text-foreground mb-2">{stat.value}</div>
                  <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-background py-24">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16">
            <ScrollReveal className="lg:w-1/2">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-[3px] bg-primary shrink-0 self-stretch min-h-[40px]" />
                <h2 className="text-2xl md:text-3xl font-light text-foreground">Our Track Record</h2>
              </div>
              <p className="text-[15px] font-light text-muted-foreground leading-relaxed mb-5">
                Since 1996, Javaid & Associates has been at the forefront of the investment migration industry. Our three decades of experience have given us unparalleled insight.
              </p>
              <p className="text-[15px] font-light text-muted-foreground leading-relaxed mb-5">
                Our 99% case approval rate is the result of rigorous pre-screening, meticulous documentation, and deep relationships with government agencies across every jurisdiction.
              </p>
              <p className="text-[15px] font-light text-muted-foreground leading-relaxed mb-8">
                With offices in Toronto and Lahore, we serve a truly global clientele with diverse expertise from law, finance, real estate, and government.
              </p>
              <Link to="/contact" className="link-arrow">Contact Us <ArrowUpRight /></Link>
            </ScrollReveal>
            <ScrollReveal className="lg:w-1/2" delay={0.15}>
              <div className="bg-card h-80 w-full" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-dark-surface py-24">
        <div className="container">
          <ScrollReveal>
            <div className="flex items-start gap-6 mb-14">
              <div className="w-[3px] bg-primary shrink-0 self-stretch min-h-[40px]" />
              <h2 className="text-2xl md:text-3xl font-light text-foreground">Our Journey</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-0">
            {milestones.map((milestone, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="flex items-start gap-8 py-6 border-b border-border">
                  <span className="text-2xl font-light text-primary shrink-0 w-20">{milestone.year}</span>
                  <div>
                    <h3 className="text-[17px] font-light text-foreground mb-1">{milestone.title}</h3>
                    <p className="text-[13px] font-light text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-20">
        <div className="container">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <h2 className="text-2xl md:text-3xl font-light text-foreground">Put our experience to work for you.</h2>
              <Link to="/contact" className="btn-davies">Contact Us Today</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
    <SiteFooter /><CookieBanner /><BackToTop />
  </div>
);

export default Experience;
