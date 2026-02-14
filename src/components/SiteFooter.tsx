import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ArrowUpRight = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const SiteFooter = () => (
  <footer className="bg-dark-surface text-dark-surface-foreground">
    <div className="border-t border-border">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <Link to="/" className="text-[16px] font-light tracking-[0.35em] text-foreground uppercase">
          Citizenship Capital
        </Link>

        {/* Right actions */}
        <div className="flex items-center gap-8">
          <a
            href="mailto:info@citizenshipcapitalgroup.com"
            className="flex items-center gap-2 text-[14px] font-light text-foreground/60 hover:text-primary transition-colors"
          >
            <Mail size={14} />
            Subscribe
          </a>
          <Link
            to="/contact"
            className="px-6 py-2.5 border border-primary text-[13px] font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-border">
      <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-foreground/35 font-light">
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>
        <p>© 2026 Javaid & Associates — Citizenship Capital Group</p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
