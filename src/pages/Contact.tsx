import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const offices = [
  {
    city: "Toronto, Canada",
    address: "55 Town Centre Court, Suite 700, Toronto, Ontario M1P 4X4",
    phone: "+1-416-290-0707",
    mobile: "+1-416-616-1972",
    mobileLabel: "Mob/WhatsApp",
    email: "canada@javaidassociates.com",
  },
  {
    city: "Lahore, Pakistan",
    address: "Office 1004 Haly Tower, Lalak Jan Chowk, DHA Phase II, Lahore, Pakistan",
    phone: "+92-42-3455-1015",
    mobile: "+92-345-220-6000",
    mobileLabel: "WhatsApp",
    mobile2: "+92-311-147-7772",
    mobile2Label: "Mob",
    email: "pakistan@javaidassociates.com",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHeader
          title="Contact Us"
          description="Get in touch with our team of investment migration specialists. We're here to help you navigate the path to global citizenship."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Contact" },
          ]}
        />

        <div className="container py-16">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Form */}
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-0 h-0 border-l-[14px] border-l-primary border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" />
                <h2 className="text-2xl font-serif text-foreground">Send Us a Message</h2>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2">
                    Interested In
                  </label>
                  <select className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary transition-colors">
                    <option value="">Select a service</option>
                    <option>Citizenship by Investment</option>
                    <option>Residency by Investment</option>
                    <option>Tax Planning</option>
                    <option>Family Office Advisory</option>
                    <option>Government Advisory</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 accent-primary" required />
                  <label className="text-[12px] text-muted-foreground leading-relaxed">
                    I consent to having Javaid & Associates - Citizenship Capital Group collect my personal information pursuant to its{" "}
                    <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                  </label>
                </div>
                <button type="submit" className="btn-fasken-primary">
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* Quick Contact */}
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-0 h-0 border-l-[14px] border-l-primary border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" />
                <h2 className="text-2xl font-serif text-foreground">General Inquiries</h2>
              </div>
              <div className="space-y-4 mb-12">
                <a href="mailto:info@javaidassociates.com" className="flex items-center gap-3 text-[14px] text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={16} className="text-primary" /> info@javaidassociates.com
                </a>
                <a href="tel:+14162900707" className="flex items-center gap-3 text-[14px] text-muted-foreground hover:text-primary transition-colors">
                  <Phone size={16} className="text-primary" /> +1-416-290-0707
                </a>
              </div>

              <div className="flex items-center gap-3 mb-8">
                <div className="w-0 h-0 border-l-[14px] border-l-primary border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" />
                <h2 className="text-2xl font-serif text-foreground">Our Offices</h2>
              </div>
              <div className="space-y-0">
                {offices.map((office) => (
                  <div key={office.city} className="py-5 border-b border-border">
                    <h3 className="font-serif text-[16px] text-foreground mb-2">{office.city}</h3>
                    <div className="flex items-start gap-2 text-[13px] text-muted-foreground mb-1">
                      <MapPin size={14} className="text-primary shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </div>
                     <div className="flex items-center gap-2 text-[13px] text-muted-foreground mb-1 ml-[22px]">
                       <Phone size={12} className="text-primary shrink-0" />
                       <a href={`tel:${office.phone}`} className="hover:text-primary transition-colors">Tel: {office.phone}</a>
                     </div>
                     {office.mobile && (
                       <div className="flex items-center gap-2 text-[13px] text-muted-foreground mb-1 ml-[22px]">
                         <Phone size={12} className="text-primary shrink-0" />
                         <a href={`tel:${office.mobile}`} className="hover:text-primary transition-colors">{office.mobileLabel}: {office.mobile}</a>
                       </div>
                     )}
                     {office.mobile2 && (
                       <div className="flex items-center gap-2 text-[13px] text-muted-foreground mb-1 ml-[22px]">
                         <Phone size={12} className="text-primary shrink-0" />
                         <a href={`tel:${office.mobile2}`} className="hover:text-primary transition-colors">{office.mobile2Label}: {office.mobile2}</a>
                       </div>
                     )}
                     <div className="flex items-center gap-2 text-[13px] text-muted-foreground ml-[22px]">
                       <Mail size={12} className="text-primary shrink-0" />
                       <a href={`mailto:${office.email}`} className="hover:text-primary transition-colors">{office.email}</a>
                     </div>
                  </div>
                ))}
              </div>
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

export default Contact;
