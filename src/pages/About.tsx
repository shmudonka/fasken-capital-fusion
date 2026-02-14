import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";

const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const values = [
  { title: "Excellence", description: "We set the highest standards in everything we do, delivering meticulous due diligence and exceptional client outcomes." },
  { title: "Integrity", description: "Trust is the foundation of our practice. We operate with complete transparency and uphold the strictest ethical standards." },
  { title: "Innovation", description: "We continually refine our approach, leveraging technology and deep expertise to navigate an evolving regulatory landscape." },
  { title: "Global Perspective", description: "With offices in Toronto and Lahore, we bring a truly international outlook to every engagement." },
];

const offices = [
  { city: "Toronto, Canada", address: "55 Town Centre Court, Suite 700\nToronto, Ontario M1P 4X4", phone: "+1-416-290-0707" },
  { city: "Lahore, Pakistan", address: "Office 1004 Haly Tower\nLalak Jan Chowk, DHA Phase II\nLahore, Pakistan", phone: "+92-42-3455 1015" },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <SiteHeader />
    <main>
      {/* Hero */}
      <div className="bg-background pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-light text-foreground mb-6">About Us</h1>
            <p className="text-[15px] font-light text-muted-foreground leading-relaxed max-w-2xl">
              In this fast-changing world, it takes vision and ambition to secure a better future. Javaid & Associates — Citizenship Capital Group is your trusted partner in global mobility.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Overview */}
      <section className="bg-dark-surface py-24">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16">
            <ScrollReveal className="lg:w-1/2">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-[3px] bg-primary shrink-0 self-stretch min-h-[40px]" />
                <h2 className="text-2xl md:text-3xl font-light text-foreground">Overview</h2>
              </div>
              <p className="text-[15px] font-light text-muted-foreground leading-relaxed mb-6">
                With over <strong className="text-foreground font-normal">30 years of legal experience</strong>, Javaid & Associates — Citizenship Capital Group is the investment migration division of Javaid & Associates Law Firm, Pakistan. We are a trusted leader in investment migration advisory.
              </p>
              <p className="text-[15px] font-light text-muted-foreground leading-relaxed mb-6">
                Operating from <strong className="text-foreground font-normal">two offices</strong> in Toronto, Canada and Lahore, Pakistan, our parent firm is a well-established legal practice with decades of experience.
              </p>
              <p className="text-[15px] font-light text-muted-foreground leading-relaxed mb-8">
                With a team of seasoned professionals, we deliver end-to-end solutions — from program selection and due diligence to application management and post-approval support.
              </p>
              <Link to="/experience" className="link-arrow">
                Our Experience <ArrowUpRight />
              </Link>
            </ScrollReveal>
            <ScrollReveal className="lg:w-1/2" delay={0.2}>
              <div className="bg-card h-80 w-full" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-24">
        <div className="container">
          <ScrollReveal>
            <div className="flex items-start gap-6 mb-14">
              <div className="w-[3px] bg-primary shrink-0 self-stretch min-h-[40px]" />
              <h2 className="text-2xl md:text-3xl font-light text-foreground">Our Values</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
            {values.map((value, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="border-r last:border-r-0 border-border px-6 py-2">
                  <h3 className="text-[18px] font-light text-foreground mb-3">{value.title}</h3>
                  <p className="text-[13px] font-light text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="bg-dark-surface py-24">
        <div className="container">
          <ScrollReveal>
            <div className="flex items-start gap-6 mb-14">
              <div className="w-[3px] bg-primary shrink-0 self-stretch min-h-[40px]" />
              <h2 className="text-2xl md:text-3xl font-light text-foreground">Our Offices</h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl">
            {offices.map((office, i) => (
              <ScrollReveal key={office.city} delay={i * 0.15}>
                <Link to="/contact" className="group block">
                  <h3 className="text-[18px] font-light text-foreground group-hover:text-primary transition-colors mb-3">{office.city}</h3>
                  <p className="text-[13px] font-light text-muted-foreground whitespace-pre-line leading-relaxed mb-2">{office.address}</p>
                  <p className="text-[13px] font-light text-muted-foreground mb-4">Tel: {office.phone}</p>
                  <span className="link-arrow text-sm">View Office <ArrowUpRight /></span>
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

export default About;
