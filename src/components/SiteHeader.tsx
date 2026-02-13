import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";

const topBarLinks = [
  { label: "Careers", href: "#careers" },
  { label: "Offices", href: "#offices" },
  { label: "News", href: "#insights" },
  { label: "Events", href: "#" },
  { label: "Contact", href: "#contact" },
];

const navItems = [
  { label: "People", href: "#citizenship" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#programs" },
  { label: "Knowledge", href: "#insights" },
  { label: "Firm", href: "#contact", hasDropdown: true },
];

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background">
      {/* Top bar - Fasken style */}
      <div className="border-b border-border">
        <div className="container flex items-center justify-end gap-8 py-2">
          {topBarLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Main nav - Fasken style */}
      <div className="border-b border-border">
        <div className="container flex items-center justify-between py-5">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-none">
            <span className="text-[22px] font-serif font-bold tracking-tight text-foreground uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
              Citizenship Capital
            </span>
            <span className="text-[11px] tracking-[0.12em] text-muted-foreground italic font-serif mt-0.5">
              Own your future
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 text-[15px] text-foreground hover:text-primary transition-colors font-serif"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown size={14} className="text-muted-foreground" />}
              </a>
            ))}
          </nav>

          {/* Search */}
          <div className="hidden lg:flex items-center gap-3">
            {searchOpen ? (
              <div className="flex items-center border-b border-foreground/30">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="bg-transparent text-sm py-1 px-2 outline-none w-56 text-foreground placeholder:text-muted-foreground"
                  autoFocus
                  onBlur={() => setSearchOpen(false)}
                />
                <Search size={16} className="text-muted-foreground" />
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="text-[13px]">What are you looking for?</span>
                <Search size={16} />
              </button>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <nav className="container flex flex-col py-6 gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-base font-serif text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center border-b border-foreground/30 mt-4">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent text-sm py-2 px-0 outline-none flex-1 text-foreground placeholder:text-muted-foreground"
              />
              <Search size={16} className="text-muted-foreground" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
