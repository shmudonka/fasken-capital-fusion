import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Search, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpeg";

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
          <Link to="/" className="flex items-center gap-3 leading-none">
            <img src={logo} alt="Javaid & Associates" className="h-10 w-10 object-contain rounded-sm" />
            <div className="flex flex-col">
              <span className="text-[18px] sm:text-[20px] font-serif font-bold tracking-tight text-foreground uppercase">Javaid & Associates</span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.12em] text-muted-foreground font-serif mt-0.5 uppercase">Citizenship Capital Group</span>
            </div>
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
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 top-0 z-[60] bg-background"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <Link to="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
                <img src={logo} alt="Javaid & Associates" className="h-10 w-10 object-contain rounded-sm" />
                <div className="flex flex-col">
                  <span className="text-[18px] font-serif font-bold tracking-tight text-foreground uppercase">Javaid & Associates</span>
                  <span className="text-[9px] tracking-[0.12em] text-muted-foreground font-serif mt-0.5 uppercase">Citizenship Capital Group</span>
                </div>
              </Link>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X size={24} className="text-foreground" />
              </button>
            </div>
            <nav className="flex flex-col px-6 pt-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={item.href}
                    className={`flex items-center justify-between py-4 border-b border-border/50 text-lg font-serif transition-colors ${isActive(item.href) ? "text-primary" : "text-foreground hover:text-primary"}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                    <ChevronRight size={18} className="text-muted-foreground" />
                  </Link>
                </motion.div>
              ))}
              <div className="pt-8 flex flex-col gap-4">
                {topBarLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (navItems.length + i) * 0.06, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={link.href}
                      className="text-[12px] font-semibold uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>);

};

export default SiteHeader;