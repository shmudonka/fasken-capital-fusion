import { Mail, Phone, ChevronRight } from "lucide-react";

const footerSections = [
  {
    title: "People",
    links: ["Our Advisors", "Leadership Team"],
  },
  {
    title: "Services",
    links: ["Citizenship by Investment", "Residency by Investment", "Family Planning", "Government Advisory", "Due Diligence", "Tax Planning"],
  },
  {
    title: "Firm",
    links: ["About Us", "Careers", "Responsible Business", "Equity & Inclusion", "Firm Leadership"],
  },
  {
    title: "Offices",
    links: ["Dubai", "London", "Hong Kong", "Montreal", "Singapore"],
  },
];

const SiteFooter = () => {
  return (
    <footer id="contact" className="bg-dark-surface text-dark-surface-foreground">
      {/* CTA Bar - Fasken style */}
      <div className="border-b border-dark-surface-foreground/10">
        <div className="container py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-serif mb-2">Ready to become a global citizen?</h3>
            <p className="text-dark-surface-foreground/50 text-sm">
              Contact our team for a confidential consultation.
            </p>
          </div>
          <a href="#" className="btn-fasken-primary">
            Get Started
          </a>
        </div>
      </div>

      {/* Footer grid - Fasken style with chevron links */}
      <div className="container py-14 grid md:grid-cols-5 gap-8">
        {footerSections.map((section) => (
          <div key={section.title}>
            <a href="#" className="flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.15em] mb-5 text-dark-surface-foreground/80 hover:text-primary transition-colors">
              {section.title}
              <ChevronRight size={12} />
            </a>
            <ul className="space-y-2.5">
              {section.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[13px] text-dark-surface-foreground/50 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact column */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.15em] mb-5 text-dark-surface-foreground/80">
            Contact
          </h4>
          <div className="space-y-3 text-[13px] text-dark-surface-foreground/50">
            <a href="mailto:info@citizenshipcapital.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={14} /> info@citizenshipcapital.com
            </a>
            <a href="tel:+15145685220" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={14} /> +1 (514) 568-5220
            </a>
          </div>

          {/* Portals section - Fasken style */}
          <div className="mt-8">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] mb-3 text-dark-surface-foreground/80">
              Portals
            </h4>
            <div className="space-y-2">
              <a href="#" className="flex items-center gap-1 text-[13px] text-dark-surface-foreground/50 hover:text-primary transition-colors">
                Client Portal <ChevronRight size={12} />
              </a>
              <a href="#" className="flex items-center gap-1 text-[13px] text-dark-surface-foreground/50 hover:text-primary transition-colors">
                Partner Portal <ChevronRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe bar */}
      <div className="border-t border-dark-surface-foreground/10">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#" className="link-arrow text-dark-surface-foreground/60 hover:text-primary">
            Subscribe to our legal updates <ChevronRight size={12} />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-surface-foreground/10">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-dark-surface-foreground/35">
          <p>© 2026 Citizenship Capital Group. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
