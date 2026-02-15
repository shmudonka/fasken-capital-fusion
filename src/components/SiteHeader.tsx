import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Search, ChevronDown, User } from "lucide-react";

const topBarLinks = [
{ label: "Careers", href: "/careers" },
{ label: "News", href: "/knowledge" },
{ label: "Contact", href: "/contact" }];


const navItems = [
{ label: "About Us", href: "/about" },
{ label: "Services", href: "/services" },
{ label: "Experience", href: "/experience" },
{ label: "Knowledge", href: "/knowledge" },
{ label: "Programs", href: "/programs" }];


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
        <div className="container flex items-center justify-end gap-8 py-2">
          {topBarLinks.map((link) =>
          <Link key={link.label} to={link.href} className="text-[11px] font-semibold uppercase tracking-[0.15em] text-foreground/70 hover:text-primary transition-colors hidden md:block">{link.label}</Link>
          )}
          <div className="hidden md:flex items-center gap-4 ml-4 pl-4 border-l border-border">
            


          </div>
        </div>
      </div>
      <div className="border-b border-border bg-background">
        <div className="container flex items-center justify-between py-5">
          <Link to="/" className="flex flex-col leading-none">
            <span className="text-[20px] font-serif font-bold tracking-tight text-foreground uppercase">Javaid & Associates</span>
            <span className="text-[10px] tracking-[0.12em] text-muted-foreground font-serif mt-0.5 uppercase">Citizenship Capital Group</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) =>
            <Link key={item.label} to={item.href} className={`text-[15px] transition-colors font-serif ${isActive(item.href) ? "text-primary" : "text-foreground hover:text-primary"}`}>
                {item.label}
              </Link>
            )}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            {searchOpen ?
            <div className="flex items-center border-b border-foreground/30">
                <input
                type="text"
                placeholder="What are you looking for?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent text-sm py-1 px-2 outline-none w-56 text-foreground placeholder:text-muted-foreground"
                autoFocus />

                <button onClick={handleSearch}>
                  <Search size={16} className="text-muted-foreground hover:text-foreground transition-colors" />
                </button>
              </div> :

            <button onClick={() => setSearchOpen(true)} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <span className="text-[13px]">What are you looking for?</span>
                <Search size={16} />
              </button>
            }
          </div>
          <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {mobileOpen &&
      <div className="lg:hidden bg-background border-b border-border">
          <nav className="container flex flex-col py-6 gap-5">
            {navItems.map((item) =>
          <Link key={item.label} to={item.href} className={`text-base font-serif transition-colors ${isActive(item.href) ? "text-primary" : "text-foreground hover:text-primary"}`} onClick={() => setMobileOpen(false)}>{item.label}</Link>
          )}
            <div className="border-t border-border pt-4 mt-2 flex flex-col gap-3">
              {topBarLinks.map((link) =>
            <Link key={link.label} to={link.href} className="text-[12px] font-semibold uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>{link.label}</Link>
            )}
            </div>
          </nav>
        </div>
      }
    </header>);

};

export default SiteHeader;