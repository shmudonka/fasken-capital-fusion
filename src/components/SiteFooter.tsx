import { Mail, Phone } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer id="contact" className="bg-dark-surface text-dark-surface-foreground">
      {/* CTA Bar */}
      <div className="border-b border-dark-surface-foreground/10">
        <div className="container py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-serif mb-1">Ready to become a global citizen?</h3>
            <p className="text-dark-surface-foreground/60 text-sm">
              Contact our team for a confidential consultation.
            </p>
          </div>
          <a
            href="#"
            className="px-8 py-3 bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-widest hover:bg-primary/90 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Footer grid */}
      <div className="container py-12 grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-serif text-lg mb-4">Citizenship Capital Group</h4>
          <p className="text-sm text-dark-surface-foreground/60 leading-relaxed">
            Empowering individuals, families, and governments through investment migration solutions worldwide.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-4 text-dark-surface-foreground/80">
            Programs
          </h4>
          <ul className="space-y-2 text-sm text-dark-surface-foreground/60">
            <li><a href="#" className="hover:text-primary transition-colors">Antigua & Barbuda</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Dominica</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Greece</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Grenada</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Malta</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Portugal</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">St. Kitts & Nevis</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-4 text-dark-surface-foreground/80">
            Company
          </h4>
          <ul className="space-y-2 text-sm text-dark-surface-foreground/60">
            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Our Team</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Insights</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-4 text-dark-surface-foreground/80">
            Contact
          </h4>
          <div className="space-y-3 text-sm text-dark-surface-foreground/60">
            <a href="mailto:info@citizenshipcapital.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={14} /> info@citizenshipcapital.com
            </a>
            <a href="tel:+15145685220" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={14} /> +1 (514) 568-5220
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-surface-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-dark-surface-foreground/40">
          <p>© 2026 Citizenship Capital Group. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
