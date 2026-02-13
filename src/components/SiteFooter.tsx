import { Mail, Phone, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const footerSections = [
  {
    title: "People", titleHref: "/people",
    links: [
      { label: "Our Advisors", href: "/people" },
      { label: "Leadership Team", href: "/people" },
    ],
  },
  {
    title: "Services", titleHref: "/services",
    links: [
      { label: "Citizenship by Investment", href: "/services/citizenship-by-investment" },
      { label: "Residency by Investment", href: "/services/residency-by-investment" },
      { label: "Family Office Advisory", href: "/services/family-office" },
      { label: "Government Advisory", href: "/services/government-advisory" },
      { label: "Due Diligence", href: "/services/due-diligence" },
      { label: "Tax Planning", href: "/services/tax-planning" },
    ],
  },
  {
    title: "Firm", titleHref: "/about",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Experience", href: "/experience" },
      { label: "Events", href: "/events" },
      { label: "Firm Leadership", href: "/people" },
    ],
  },
  {
    title: "Offices", titleHref: "/contact",
    links: [
      { label: "Dubai", href: "/contact" },
      { label: "London", href: "/contact" },
      { label: "Hong Kong", href: "/contact" },
      { label: "Montreal", href: "/contact" },
      { label: "Singapore", href: "/contact" },
    ],
  },
];

const SiteFooter = () => (
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
      {footerSections.map((section) => (
        <div key={section.title}>
          <Link to={section.titleHref} className="flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.15em] mb-5 text-dark-surface-foreground/80 hover:text-primary transition-colors">
            {section.title} <ChevronRight size={12} />
          </Link>
          <ul className="space-y-2.5">
            {section.links.map((link) => (
              <li key={link.label}><Link to={link.href} className="text-[13px] text-dark-surface-foreground/50 hover:text-primary transition-colors">{link.label}</Link></li>
            ))}
          </ul>
        </div>
      ))}
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-[0.15em] mb-5 text-dark-surface-foreground/80">Contact</h4>
        <div className="space-y-3 text-[13px] text-dark-surface-foreground/50">
          <a href="mailto:info@citizenshipcapital.com" className="flex items-center gap-2 hover:text-primary transition-colors"><Mail size={14} /> info@citizenshipcapital.com</a>
          <a href="tel:+15145685220" className="flex items-center gap-2 hover:text-primary transition-colors"><Phone size={14} /> +1 (514) 568-5220</a>
        </div>
        <div className="mt-8">
          <h4 className="text-xs font-semibold uppercase tracking-[0.15em] mb-3 text-dark-surface-foreground/80">Portals</h4>
          <div className="space-y-2">
            <Link to="/contact" className="flex items-center gap-1 text-[13px] text-dark-surface-foreground/50 hover:text-primary transition-colors">Client Portal <ChevronRight size={12} /></Link>
            <Link to="/contact" className="flex items-center gap-1 text-[13px] text-dark-surface-foreground/50 hover:text-primary transition-colors">Partner Portal <ChevronRight size={12} /></Link>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-dark-surface-foreground/10">
      <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link to="/knowledge" className="link-arrow text-dark-surface-foreground/60 hover:text-primary">Subscribe to our legal updates <ChevronRight size={12} /></Link>
      </div>
    </div>
    <div className="border-t border-dark-surface-foreground/10">
      <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-dark-surface-foreground/35">
        <p>© 2026 Citizenship Capital Group. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          <Link to="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
          <Link to="/accessibility" className="hover:text-primary transition-colors">Accessibility</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
