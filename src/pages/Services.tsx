import { useState, useMemo } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { industries, practices } from "@/data/services";

const Services = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIndustries = useMemo(() => {
    if (!searchQuery) return industries;
    const q = searchQuery.toLowerCase();
    return industries.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const filteredPractices = useMemo(() => {
    if (!searchQuery) return practices;
    const q = searchQuery.toLowerCase();
    return practices.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHeader
          title="Services"
          description="Citizenship Capital Group provides comprehensive advisory and legal services across the full spectrum of investment migration, global mobility, and private client solutions."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
          searchPlaceholder="Filter services"
          onSearch={setSearchQuery}
        />
        <div className="container py-16">
          {searchQuery && (
            <div className="mb-8 text-[13px] text-muted-foreground">
              Showing results for: <strong className="text-foreground">"{searchQuery}"</strong>
            </div>
          )}
          {filteredIndustries.length > 0 && (
            <ScrollReveal>
              <div className="flex flex-col md:flex-row items-start gap-8 mb-20">
                <div className="w-full md:w-56 shrink-0 flex items-center gap-3 mb-4 md:mb-0 md:pt-5">
                  <div className="w-0 h-0 border-l-[14px] border-l-primary border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" />
                  <h2 className="text-2xl font-serif text-foreground">Industries</h2>
                </div>
                <div className="flex-1 grid md:grid-cols-2 gap-0">
                  {filteredIndustries.map((item, i) => (
                    <Link key={i} to={`/services/${item.slug}`} className="group flex items-center justify-between py-5 px-4 border-b border-border hover:bg-warm-beige transition-colors">
                      <span className="font-serif text-[15px] text-foreground group-hover:text-primary transition-colors">{item.title}</span>
                      <div className="flex items-center gap-2">
                        {item.areas && <span className="text-[10px] text-muted-foreground bg-warm-beige group-hover:bg-background px-3 py-1 font-medium uppercase tracking-wider">{item.areas}</span>}
                        <ChevronRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}
          {filteredPractices.length > 0 && (
            <ScrollReveal delay={0.15}>
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-full md:w-56 shrink-0 flex items-center gap-3 mb-4 md:mb-0 md:pt-5">
                  <div className="w-0 h-0 border-l-[14px] border-l-primary border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" />
                  <h2 className="text-2xl font-serif text-foreground">Practices</h2>
                </div>
                <div className="flex-1 grid md:grid-cols-2 gap-0">
                  {filteredPractices.map((item, i) => (
                    <Link key={i} to={`/services/${item.slug}`} className="group flex items-center justify-between py-5 px-4 border-b border-border hover:bg-warm-beige transition-colors">
                      <span className="font-serif text-[15px] text-foreground group-hover:text-primary transition-colors">{item.title}</span>
                      <div className="flex items-center gap-2">
                        {item.areas && <span className="text-[10px] text-muted-foreground bg-warm-beige group-hover:bg-background px-3 py-1 font-medium uppercase tracking-wider">{item.areas}</span>}
                        <ChevronRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}
          {filteredIndustries.length === 0 && filteredPractices.length === 0 && (
            <div className="text-center py-16">
              <p className="font-serif text-xl text-foreground mb-2">No services found</p>
              <p className="text-[13px] text-muted-foreground">Try adjusting your search terms.</p>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
      <CookieBanner />
      <BackToTop />
    </div>
  );
};

export default Services;
