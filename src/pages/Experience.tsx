import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Award, MapPin, Users, CheckCircle, Globe, Shield, TrendingUp, Clock } from "lucide-react";


const stats = [
{ value: "25+", label: "Years of Experience", icon: Clock },
{ value: "2", label: "Global Offices", icon: MapPin },
{ value: "99%", label: "Case Win Rate", icon: CheckCircle },
{ value: "10,000+", label: "Clients Served", icon: Users }];

const milestones = [
{ year: "1999", title: "Foundation", description: "Javaid & Associates Law Firm was established in Lahore, Pakistan, laying the groundwork for what would become a trusted legal and advisory practice." },
{ year: "2003", title: "Caribbean Expansion", description: "Became one of the first authorized agents for St. Kitts & Nevis and Dominica citizenship by investment programs, establishing deep government relationships." },
{ year: "2008", title: "European Practice Launch", description: "Expanded into European residency programs, beginning with Portugal's Golden Visa and Malta's permanent residency program." },
{ year: "2012", title: "Toronto Office", description: "Opened our Toronto office to serve the North American market, establishing Javaid & Associates, Canada as a dedicated Canadian practice." },
{ year: "2019", title: "1,000th Client Milestone", description: "Celebrated our 1,000th successful citizenship or residency application, maintaining our industry-leading 99% approval rate." },
{ year: "2023", title: "Citizenship Capital Group Launch", description: "Launched the Citizenship Capital Group as a dedicated investment migration advisory division, formalizing our expertise under a distinct brand." },
{ year: "2026", title: "Industry Leadership", description: "Today, Javaid & Associates - Citizenship Capital Group is recognized as one of the premier investment migration advisory firms, with over 1,500 successful cases across 12 programs." }];

const recognitions = [
{ title: "Best Investment Migration Advisory Firm", source: "Global Finance Awards 2025" },
{ title: "Top Citizenship by Investment Advisory", source: "International Advisory Awards 2024" },
{ title: "Excellence in Client Service", source: "Private Client Awards 2024" },
{ title: "Most Trusted CBI Advisory", source: "Wealth Management Review 2023" },
{ title: "Best Caribbean CBI Practice", source: "Investment Migration Insider 2023" },
{ title: "Outstanding Due Diligence Standards", source: "Compliance Excellence Awards 2022" }];

const Experience = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHeader
          title="Experience"
          description="Over 25 years of trusted legal expertise in investment migration, citizenship planning, and global advisory services."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Experience" }
          ]}
        />

        {/* Stats */}
        <div className="bg-dark-surface py-16">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
              {stats.map((stat, i) =>
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center py-8 px-4 border-r last:border-r-0 border-dark-surface-foreground/10">
                  <stat.icon size={24} className="mx-auto mb-3 text-primary" />
                  <div className="text-4xl md:text-5xl font-serif text-dark-surface-foreground mb-2">{stat.value}</div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-dark-surface-foreground/50">{stat.label}</div>
                </div>
              </ScrollReveal>
              )}
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="container py-20">
          <div className="flex flex-col lg:flex-row gap-16">
            <ScrollReveal className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-0 h-0 border-l-[14px] border-l-primary border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" />
                <h2 className="text-2xl font-serif text-foreground">Our Track Record</h2>
              </div>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-5">
                Since 1999, Javaid & Associates has been a leader in the investment migration industry. Over 25 years of experience have given us deep insight into the nuances of citizenship and residency programs worldwide.
              </p>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-5">
                Our 99% case approval rate is the result of rigorous pre-screening, meticulous documentation, and deep relationships with government agencies across every jurisdiction we serve. We do not submit applications unless we are confident of success.
              </p>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">
                With offices in Toronto and Lahore, we serve a truly global clientele. Our team brings diverse expertise from law, finance, real estate, and government.
              </p>
              <Link to="/contact" className="btn-fasken">
                Contact Us
              </Link>
            </ScrollReveal>
            <div className="lg:w-1/2 space-y-6">
              {[
                { icon: Globe, title: "Global Reach", desc: "Active programs in 12 countries across the Caribbean, Europe, and North America, with a network spanning 40+ partner jurisdictions." },
                { icon: Shield, title: "Compliance First", desc: "Industry-leading compliance framework with multi-layered due diligence, AML screening, and continuous monitoring of regulatory developments." },
                { icon: TrendingUp, title: "Results Driven", desc: "Over 1,500 successful applications and counting, with the highest approval rate in the investment migration industry." },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={0.2 + i * 0.1}>
                  <div className="bg-warm-beige p-8">
                    <item.icon size={24} className="text-primary mb-4" />
                    <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-warm-beige py-20">
          <div className="container">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-12">
                <div className="w-0 h-0 border-l-[14px] border-l-primary border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" />
                <h2 className="text-2xl font-serif text-foreground">Our Journey</h2>
              </div>
            </ScrollReveal>
            <div className="space-y-0">
              {milestones.map((milestone, i) =>
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex items-start gap-8 py-6 border-b border-border/40">
                  <span className="text-2xl font-serif text-primary shrink-0 w-20">{milestone.year}</span>
                  <div>
                    <h3 className="font-serif text-[17px] text-foreground mb-1">{milestone.title}</h3>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </ScrollReveal>
              )}
            </div>
          </div>
        </div>

        {/* Recognitions */}
        <div className="bg-dark-surface py-20">
          <div className="container">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-12">
                <div className="w-0 h-0 border-l-[14px] border-l-primary border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" />
                <h2 className="text-2xl font-serif text-dark-surface-foreground">Industry Recognition</h2>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl">
              {recognitions.map((recognition, i) =>
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-warm-beige p-6">
                  <Award size={24} className="text-primary mb-3" />
                  <h3 className="font-serif text-lg text-foreground mb-1">{recognition.title}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{recognition.source}</p>
                </div>
              </ScrollReveal>
              )}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-dark-surface py-20">
          <div className="container text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-serif text-dark-surface-foreground mb-4">
                Put our experience to work for you
              </h2>
              <p className="text-dark-surface-foreground/60 text-[15px] max-w-xl mx-auto mb-8">
                Schedule a confidential consultation with our team to discuss how our decades of expertise can help you achieve your global mobility goals.
              </p>
              <Link to="/contact" className="btn-fasken-outline-white">
                Contact Us Today
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </main>
      <SiteFooter />
      <CookieBanner />
      <BackToTop />
    </div>);
};

export default Experience;
