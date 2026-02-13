import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { team } from "@/data/team";

const values = [
  { title: "Excellence", description: "We set the highest standards in everything we do, delivering meticulous due diligence and exceptional client outcomes." },
  { title: "Integrity", description: "Trust is the foundation of our practice. We operate with complete transparency and uphold the strictest ethical standards." },
  { title: "Innovation", description: "We continually refine our approach, leveraging technology and deep expertise to navigate an evolving regulatory landscape." },
  { title: "Global Perspective", description: "With offices across multiple continents, we bring a truly international outlook to every engagement." },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <SiteHeader />
    <main>
      <div className="relative min-h-[50vh] flex">
        <div className="relative z-10 w-full lg:w-1/2 bg-warm-beige flex flex-col justify-center px-8 md:px-16 lg:px-20 pt-32 pb-16 lg:pt-40 lg:pb-20">
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-5">Firm</h1>
          <div className="w-12 h-[3px] bg-primary mb-6" />
          <p className="text-[15px] text-muted-foreground leading-relaxed max-w-md">In this fast-changing world, it takes vision and ambition to secure a better future. Javaid & Associates - Citizenship Capital Group is your trusted partner in global mobility.</p>
        </div>
        <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full">
          <img src={heroBg} alt="Firm" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-foreground/10" />
        </div>
      </div>
      <div className="border-b border-border">
        <div className="container flex items-center py-4 text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link><ChevronRight size={11} className="mx-2" /><span className="text-foreground">Firm</span>
        </div>
      </div>
      <div className="container py-20">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-6"><div className="w-0 h-0 border-l-[14px] border-l-primary border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" /><h2 className="text-2xl font-serif text-foreground">Overview</h2></div>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">Javaid & Associates - Citizenship Capital Group is the investment migration division of Javaid & Associates Law Firm, Pakistan. We are a global leader in investment migration advisory, empowering high-net-worth individuals and families to access new opportunities through citizenship and residency by investment programs worldwide.</p>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">Our parent firm, <strong>Javaid & Associates Law Firm</strong>, is a well-established legal practice in Pakistan with decades of experience. The Citizenship Capital Group operates as the firm's dedicated investment migration advisory division. We also have a separate Canadian practice, <strong>Javaid & Associates - Canada</strong>, serving clients across North America.</p>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">With a team of seasoned professionals across multiple offices, we deliver end-to-end solutions — from program selection and due diligence to application management and post-approval support.</p>
            <Link to="/people" className="btn-fasken">Meet Our Team</Link>
          </div>
          <div className="lg:w-1/2"><img src={heroBg} alt="Our office" className="w-full h-80 object-cover" /></div>
        </div>
      </div>
      <div className="bg-warm-beige py-20">
        <div className="container">
          <div className="flex items-center gap-3 mb-12"><div className="w-0 h-0 border-l-[14px] border-l-primary border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" /><h2 className="text-2xl font-serif text-foreground">Our Values</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
            {values.map((value, i) => (<div key={i} className="border-r last:border-r-0 border-border/40 px-6 py-2"><h3 className="font-serif text-lg text-foreground mb-3">{value.title}</h3><p className="text-[13px] text-muted-foreground leading-relaxed">{value.description}</p></div>))}
          </div>
        </div>
      </div>
      <div className="container py-20">
        <div className="flex items-end justify-between mb-12 border-b border-border pb-6">
          <div className="flex items-center gap-3"><div className="w-0 h-0 border-l-[14px] border-l-primary border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" /><h2 className="text-2xl font-serif text-foreground">Firm Leadership</h2></div>
          <Link to="/people" className="hidden md:flex link-arrow">View All People <ArrowRight size={12} /></Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
          {team.slice(0, 6).map((person) => (
            <Link key={person.slug} to={`/people/${person.slug}`} className="group block py-6 px-4 border-b border-border hover:bg-warm-beige transition-colors">
              <h3 className="font-serif text-[16px] text-foreground group-hover:text-primary transition-colors mb-1">{person.name}</h3>
              <p className="text-[12px] text-muted-foreground mb-0.5">{person.role}</p>
              <p className="text-[11px] text-primary uppercase tracking-wider">{person.location}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-dark-surface py-20">
        <div className="container">
          <div className="flex items-center gap-3 mb-12"><div className="w-0 h-0 border-l-[14px] border-l-primary border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" /><h2 className="text-2xl font-serif text-dark-surface-foreground">Our Offices</h2></div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {["Dubai", "London", "Hong Kong", "Montreal", "Singapore"].map((city) => (
              <Link key={city} to="/contact" className="group">
                <h3 className="font-serif text-lg text-dark-surface-foreground group-hover:text-primary transition-colors mb-1">{city}</h3>
                <span className="link-arrow text-dark-surface-foreground/50 group-hover:text-primary text-[10px]">View Office <ChevronRight size={10} /></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
    <SiteFooter /><CookieBanner /><BackToTop />
  </div>
);

export default About;
