import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronDown, X } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

const ArrowUpRight = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block ml-1">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const filterOptions: Record<string, string[]> = {
  Types: ["Industry News", "Knowledge", "Analysis", "Guide"],
  Year: ["2026", "2025"],
  Topics: ["Citizenship by Investment", "Residency by Investment", "Due Diligence", "Tax Planning", "EU Policy", "Global Mobility"],
};

const Knowledge = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [openFilter, setOpenFilter] = useState<string | null>(null);
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});
  const [sortOrder, setSortOrder] = useState<string>("desc");

  useEffect(() => {
    const q = searchParams.get("q");
    if (q) setSearchQuery(q);
  }, [searchParams]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSearchParams(query ? { q: query } : {});
  };

  const toggleFilter = (group: string, value: string) => {
    setActiveFilters((prev) => {
      const current = prev[group] || [];
      const updated = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
      if (updated.length === 0) { const next = { ...prev }; delete next[group]; return next; }
      return { ...prev, [group]: updated };
    });
  };

  const clearAllFilters = () => { setActiveFilters({}); setOpenFilter(null); setSearchQuery(""); setSearchParams({}); };
  const hasActiveFilters = Object.keys(activeFilters).length > 0 || !!searchQuery;

  const filteredArticles = useMemo(() => {
    let result = [...articles];
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter((a) => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.category.toLowerCase().includes(q) || a.content.some((c) => c.toLowerCase().includes(q)));
    }
    if (activeFilters.Types?.length) result = result.filter((a) => activeFilters.Types.includes(a.category));
    if (activeFilters.Year?.length) result = result.filter((a) => activeFilters.Year.some((y) => a.date.includes(y)));
    if (activeFilters.Topics?.length) result = result.filter((a) => activeFilters.Topics.some((t) => a.title.toLowerCase().includes(t.toLowerCase()) || a.excerpt.toLowerCase().includes(t.toLowerCase())));
    result.sort((a, b) => { const da = new Date(a.date).getTime(); const db = new Date(b.date).getTime(); return sortOrder === "desc" ? db - da : da - db; });
    return result;
  }, [activeFilters, sortOrder, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHeader
          title="Expert Perspectives"
          description="Rely on our innovative thinking and analysis to navigate future trends and challenges with confidence."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Insights" }]}
          searchPlaceholder="Search our news and insights"
          onSearch={handleSearch}
        />

        <div className="container py-12">
          {searchQuery && (
            <div className="mb-6 flex items-center gap-3">
              <span className="text-[13px] font-light text-muted-foreground">
                Results for: <strong className="text-foreground font-normal">"{searchQuery}"</strong>
              </span>
              <button onClick={() => handleSearch("")} className="text-primary hover:text-primary/80 transition-colors"><X size={14} /></button>
            </div>
          )}

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            {Object.keys(filterOptions).map((filter) => {
              const isOpen = openFilter === filter;
              const count = activeFilters[filter]?.length || 0;
              return (
                <div key={filter} className="relative">
                  <button
                    onClick={() => setOpenFilter(isOpen ? null : filter)}
                    className={`flex items-center gap-2 px-5 py-3 border text-[12px] font-light transition-colors ${
                      count > 0 || isOpen ? "border-primary text-primary" : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                    }`}
                  >
                    {filter}
                    {count > 0 && <span className="bg-primary text-primary-foreground text-[9px] w-4 h-4 flex items-center justify-center">{count}</span>}
                    <ChevronDown size={12} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="absolute top-full left-0 mt-1 bg-card border border-border shadow-lg z-20 min-w-[220px]">
                      {filterOptions[filter].map((option) => {
                        const isSelected = activeFilters[filter]?.includes(option);
                        return (
                          <button key={option} onClick={() => toggleFilter(filter, option)}
                            className={`w-full text-left px-4 py-3 text-[13px] font-light border-b border-border last:border-b-0 transition-colors ${isSelected ? "text-primary" : "text-foreground hover:bg-secondary"}`}
                          >{option}</button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
            {hasActiveFilters && (
              <button onClick={clearAllFilters} className="flex items-center gap-1.5 px-4 py-3 text-[12px] font-light text-muted-foreground hover:text-primary transition-colors">
                <X size={12} /> Clear All
              </button>
            )}
          </div>

          {/* Results */}
          <div className="flex items-center justify-between mb-8 text-[13px] font-light text-muted-foreground">
            <span>{filteredArticles.length} results</span>
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="border border-border bg-card px-3 py-1.5 text-[12px] text-foreground outline-none font-light">
              <option value="desc">Newest First</option>
              <option value="asc">Oldest First</option>
            </select>
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl font-light text-foreground mb-2">No articles found</p>
              <p className="text-[13px] font-light text-muted-foreground mb-6">Try adjusting your filters.</p>
              <button onClick={clearAllFilters} className="btn-davies">Clear Filters</button>
            </div>
          )}

          {/* Featured */}
          {filteredArticles.filter(a => a.featured).length > 0 && (
            <ScrollReveal>
              <Link to={`/knowledge/${filteredArticles.filter(a => a.featured)[0].slug}`} className="group block relative mb-12">
                <div className="bg-card h-64 md:h-80 flex items-end p-8 md:p-10">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-light text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                      {filteredArticles.filter(a => a.featured)[0].title}
                    </h3>
                    <span className="text-[13px] font-light text-muted-foreground">{filteredArticles.filter(a => a.featured)[0].date}</span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          )}

          {/* Article list */}
          <div className="space-y-0">
            {filteredArticles.filter(a => !a.featured).map((article, i) => (
              <ScrollReveal key={article.slug} delay={i * 0.03}>
                <Link to={`/knowledge/${article.slug}`} className="group flex items-start justify-between py-6 border-b border-border hover:bg-secondary/30 transition-colors px-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">{article.category}</span>
                      <span className="text-[11px] text-muted-foreground">{article.date}</span>
                    </div>
                    <h3 className="text-[16px] font-light text-foreground group-hover:text-primary transition-colors leading-snug">{article.title}</h3>
                  </div>
                  <span className="text-muted-foreground group-hover:text-primary transition-colors mt-2 shrink-0 ml-4">
                    <ArrowUpRight />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter /><CookieBanner /><BackToTop />
    </div>
  );
};

export default Knowledge;
