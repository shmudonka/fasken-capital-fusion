import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Programs", href: "/programs" },
  { label: "Insights", href: "/knowledge" },
  { label: "Careers", href: "/careers" },
];

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (href: string) => location.pathname === href;

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    navigate(`/knowledge?q=${encodeURIComponent(searchQuery.trim())}`);
    setSearchQuery("");
    setSearchOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
    if (e.key === "Escape") setSearchOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="border-b border-border">
        <div className="container flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <span className="text-[18px] font-light tracking-[0.35em] text-foreground uppercase">
              Citizenship Capital
            </span>
          </Link>

          {/* Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-[15px] font-light transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Search */}
          <div className="hidden lg:flex items-center">
            {searchOpen ? (
              <div className="flex items-center border-b border-foreground/30">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="bg-transparent text-[14px] font-light py-1 px-2 outline-none w-56 text-foreground placeholder:text-muted-foreground"
                  autoFocus
                />
                <button onClick={() => setSearchOpen(false)}>
                  <X size={16} className="text-muted-foreground hover:text-foreground transition-colors" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
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
          <nav className="container flex flex-col py-8 gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-[18px] font-light transition-colors ${
                  isActive(item.href) ? "text-primary" : "text-foreground/80 hover:text-primary"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-[18px] font-light text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
