import { Mail, Phone, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const footerSections = [
{
  title: "About Us", titleHref: "/about",
  links: [
  { label: "Our Firm", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Careers", href: "/careers" }]

},
{
  title: "Services", titleHref: "/services",
  links: [
  { label: "Citizenship by Investment", href: "/services/citizenship-by-investment" },
  { label: "Residency by Investment", href: "/services/residency-by-investment" },
  { label: "Family Office Advisory", href: "/services/family-office" },
  { label: "Government Advisory", href: "/services/government-advisory" },
  { label: "Due Diligence", href: "/services/due-diligence" },
  { label: "Tax Planning", href: "/services/tax-planning" }]

},
{
  title: "Programs", titleHref: "/programs",
  links: [
  { label: "Caribbean Programs", href: "/programs/st-kitts-nevis" },
  { label: "European Programs", href: "/programs/portugal-golden-visa" },
  { label: "All Programs", href: "/programs" }]

},
{
  title: "Offices", titleHref: "/contact",
  links: [
  { label: "Toronto, Canada", href: "/contact" },
  { label: "Lahore, Pakistan", href: "/contact" }]

}];


const SiteFooter = () =>
<footer className="bg-dark-surface text-dark-surface-foreground">
    <div className="border-b border-dark-surface-foreground/10">
      <div className="container py-14 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-2xl font-serif mb-2">Ready to become a global citizen?</h3>
          <p className="text-dark-surface-foreground/50 text-sm">Contact our team for a confidential consultation.</p>
        </div>
        <Link to="/contact" className="btn-fasken-primary">Get Started</Link>
      </div>
    </div>
    <div className="container py-14 grid md:grid-cols-5 gap-8">
      {footerSections.map((section) =>
    <div key={section.title}>
          <Link to={section.titleHref} className="flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.15em] mb-5 text-dark-surface-foreground/80 hover:text-primary transition-colors">
            {section.title} <ChevronRight size={12} />
          </Link>
          <ul className="space-y-2.5">
            {section.links.map((link) =>
        <li key={link.label}><Link to={link.href} className="text-[13px] text-dark-surface-foreground/50 hover:text-primary transition-colors">{link.label}</Link></li>
        )}
          </ul>
        </div>
    )}
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-[0.15em] mb-5 text-dark-surface-foreground/80">Contact</h4>
        <div className="space-y-3 text-[13px] text-dark-surface-foreground/50">
          <a href="mailto:info@citizenshipcapitalgroup.com" className="flex items-center gap-2 hover:text-primary transition-colors"><Mail size={14} /> info@citizenshipcapitalgroup.com</a>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-dark-surface-foreground/40 mt-4 mb-1">Canada</p>
          <a href="tel:+14162900707" className="flex items-center gap-2 hover:text-primary transition-colors"><Phone size={14} /> +1 416 290 0707</a>
          <a href="https://wa.me/14166161972" className="flex items-center gap-2 hover:text-primary transition-colors"><Phone size={14} /> WhatsApp: +1 416 616 1972</a>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-dark-surface-foreground/40 mt-4 mb-1">Pakistan</p>
          <a href="tel:+924234551015" className="flex items-center gap-2 hover:text-primary transition-colors"><Phone size={14} /> +92 42 3455 1015</a>
          <a href="https://wa.me/923032206000" className="flex items-center gap-2 hover:text-primary transition-colors"><Phone size={14} /> WhatsApp: +92 303 220 6000</a>
        </div>
      </div>
    </div>
    <div className="border-t border-dark-surface-foreground/10">
      <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-dark-surface-foreground/35">
        <p>© 2026 Javaid & Associates - Citizenship Capital Group. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          <Link to="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
          <Link to="/accessibility" className="hover:text-primary transition-colors">Accessibility</Link>
        </div>
      </div>
    </div>
  </footer>;


export default SiteFooter;