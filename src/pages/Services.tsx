import { useState, useMemo } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { industries, practices } from "@/data/services";

const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const Services = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIndustries = useMemo(() => {
    if (!searchQuery) return industries;
    const q = searchQuery.toLowerCase();
    return industries.filter((item) => item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q));
  }, [searchQuery]);

  const filteredPractices = useMemo(() => {
    if (!searchQuery) return practices;
    const q = searchQuery.toLowerCase();
    return practices.filter((item) => item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q));
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHeader
          title="Services"
          description="Comprehensive advisory and legal services across the full spectrum of investment migration and global mobility."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
          searchPlaceholder="Search services"
          onSearch={setSearchQuery}
        />

        <div className="container py-16">
          {searchQuery && (
            <div className="mb-8 text-[13px] font-light text-muted-foreground">
              Showing results for: <strong className="text-foreground font-normal">"{searchQuery}"</strong>
            </div>
          )}

          {filteredIndustries.length > 0 && (
            <ScrollReveal>
              <div className="flex items-start gap-6 mb-8">
                <div className="w-[3px] bg-primary shrink-0 self-stretch min-h-[30px]" />
                <h2 className="text-2xl font-light text-foreground">Industries</h2>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-0 mb-16">
                {filteredIndustries.map((item) => (
                  <Link key={item.slug} to={`/services/${item.slug}`} className="group flex items-center justify-between py-5 px-5 border border-border -mt-px -ml-px hover:bg-secondary transition-colors">
                    <span className="text-[15px] font-light text-foreground group-hover:text-primary transition-colors">{item.title}</span>
                    <Plus size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          )}

          {filteredPractices.length > 0 && (
            <ScrollReveal delay={0.15}>
              <div className="flex items-start gap-6 mb-8">
                <div className="w-[3px] bg-primary shrink-0 self-stretch min-h-[30px]" />
                <h2 className="text-2xl font-light text-foreground">Practices</h2>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-0">
                {filteredPractices.map((item) => (
                  <Link key={item.slug} to={`/services/${item.slug}`} className="group flex items-center justify-between py-5 px-5 border border-border -mt-px -ml-px hover:bg-secondary transition-colors">
                    <span className="text-[15px] font-light text-foreground group-hover:text-primary transition-colors">{item.title}</span>
                    <Plus size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          )}

          {filteredIndustries.length === 0 && filteredPractices.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl font-light text-foreground mb-2">No services found</p>
              <p className="text-[13px] font-light text-muted-foreground">Try adjusting your search terms.</p>
            </div>
          )}
        </div>
      </main>
      <SiteFooter /><CookieBanner /><BackToTop />
    </div>
  );
};

export default Services;
