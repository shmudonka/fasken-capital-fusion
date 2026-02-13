import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Global Citizenship", href: "#citizenship" },
  { label: "Programs", href: "#programs" },
  { label: "Services", href: "#services" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top bar */}
      <div className="bg-dark-surface">
        <div className="container flex items-center justify-end gap-6 py-2 text-xs tracking-widest uppercase text-dark-surface-foreground/70">
          <a href="#careers" className="hover:text-primary transition-colors">Careers</a>
          <a href="#offices" className="hover:text-primary transition-colors">Offices</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex items-center justify-between py-4">
        <a href="#" className="flex flex-col">
          <span className="text-xl font-serif font-bold tracking-tight text-foreground leading-tight">
            Citizenship Capital
          </span>
          <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Group
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container flex flex-col py-4 gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
