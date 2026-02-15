import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const values = [
{ title: "Excellence", description: "We set the highest standards in everything we do, delivering meticulous due diligence and exceptional client outcomes." },
{ title: "Integrity", description: "Trust is the foundation of our practice. We operate with complete transparency and uphold the strictest ethical standards." },
{ title: "Innovation", description: "We continually refine our approach, applying technology and deep expertise to stay ahead of evolving regulations." },
{ title: "Global Perspective", description: "With offices in Toronto and Lahore, we bring a truly international outlook to every engagement." }];


const offices = [
{
  city: "Toronto, Canada",
  address: "55 Town Centre Court, Suite 700\nToronto, Ontario M1P 4X4",
  phone: "+1-416-290-0707"
},
{
  city: "Lahore, Pakistan",
  address: "Office 1004 Haly Tower\nLalak Jan Chowk, DHA Phase II\nLahore, Pakistan",
  phone: "+92-42-3455 1015"
}];


const About = () =>
<div className="min-h-screen bg-background">
    <SiteHeader />
    <main>
      <div className="relative min-h-[50vh] flex">
        <div className="relative z-10 w-full lg:w-1/2 bg-warm-beige flex flex-col justify-center px-8 md:px-16 lg:px-20 pt-32 pb-16 lg:pt-40 lg:pb-20">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-5">About Us</h1>
            <div className="w-12 h-[3px] bg-primary mb-6" />
            <p className="text-[15px] text-muted-foreground leading-relaxed max-w-md">In this fast-changing world, it takes vision and ambition to secure a better future. Javaid & Associates, Citizenship Capital Group is your trusted partner in global mobility.</p>
          </ScrollReveal>
        </div>
        <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full">
          <img alt="About Us" className="w-full h-full object-cover" src="/lovable-uploads/933f305c-67a9-477b-923e-7999d10c8588.jpg" /><div className="absolute inset-0 bg-foreground/10" />
        </div>
      </div>
      <div className="border-b border-border">
        <div className="container flex items-center py-4 text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link><ChevronRight size={11} className="mx-2" /><span className="text-foreground">About Us</span>
        </div>
      </div>
      <div className="container py-20">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          <ScrollReveal className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-6"><div className="w-0 h-0 border-l-[14px] border-l-primary border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" /><h2 className="text-2xl font-serif text-foreground">Overview</h2></div>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">Established in <strong>1999</strong>, Javaid & Associates, Citizenship Capital Group is the investment migration division of Javaid & Associates Law Firm, Pakistan. We are a trusted leader in investment migration advisory, helping high-net-worth individuals and families access new opportunities through citizenship and residency by investment programs worldwide.</p>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">Operating from <strong>two offices</strong> in Toronto, Canada and Lahore, Pakistan, our parent firm is a well-established legal practice with decades of experience. The Citizenship Capital Group operates as the firm's dedicated investment migration advisory division. We also have a separate Canadian practice, <strong>Javaid & Associates, Canada</strong>, serving clients across North America.</p>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">With a team of seasoned professionals, we deliver end-to-end solutions, from program selection and due diligence to application management and post-approval support.</p>
            <Link to="/experience" className="btn-fasken">Our Experience</Link>
          </ScrollReveal>
          <ScrollReveal className="lg:w-1/2" delay={0.2}>
            <img alt="Our office" className="w-full h-80 object-cover" src="/lovable-uploads/ef5e8b98-a29d-42df-bc18-2e0335e748cf.webp" />
          </ScrollReveal>
        </div>
      </div>
      <div className="bg-warm-beige py-20">
        <div className="container">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-12"><div className="w-0 h-0 border-l-[14px] border-l-primary border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" /><h2 className="text-2xl font-serif text-foreground">Our Values</h2></div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
            {values.map((value, i) =>
          <ScrollReveal key={i} delay={i * 0.1}>
                <div className="border-r last:border-r-0 border-border/40 px-6 py-2"><h3 className="font-serif text-lg text-foreground mb-3">{value.title}</h3><p className="text-[13px] text-muted-foreground leading-relaxed">{value.description}</p></div>
              </ScrollReveal>
          )}
          </div>
        </div>
      </div>
      <div className="bg-dark-surface py-20">
        <div className="container">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-12"><div className="w-0 h-0 border-l-[14px] border-l-primary border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" /><h2 className="text-2xl font-serif text-dark-surface-foreground">Our Offices</h2></div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl">
            {offices.map((office, i) =>
          <ScrollReveal key={office.city} delay={i * 0.15}>
                <Link to="/contact" className="group block">
                  <h3 className="font-serif text-lg text-dark-surface-foreground group-hover:text-primary transition-colors mb-3">{office.city}</h3>
                  <p className="text-[13px] text-dark-surface-foreground/50 whitespace-pre-line leading-relaxed mb-2">{office.address}</p>
                  <p className="text-[13px] text-dark-surface-foreground/50 mb-3">Tel: {office.phone}</p>
                  <span className="link-arrow text-dark-surface-foreground/50 group-hover:text-primary text-[10px]">View Office <ChevronRight size={10} /></span>
                </Link>
              </ScrollReveal>
          )}
          </div>
        </div>
      </div>
    </main>
    <SiteFooter /><CookieBanner /><BackToTop />
  </div>;


export default About;
