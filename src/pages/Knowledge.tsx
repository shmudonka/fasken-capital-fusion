import { useState, useMemo } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import { ArrowRight, ChevronDown, X } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

const filterOptions: Record<string, string[]> = {
  Types: ["Industry News", "Knowledge", "Analysis", "Guide"],
  Year: ["2026", "2025"],
  Topics: ["Citizenship by Investment", "Residency by Investment", "Due Diligence", "Tax Planning", "EU Policy", "Global Mobility"],
  Industries: ["Investment Migration", "Real Estate", "Government Advisory", "Private Client"],
  Programs: ["St. Kitts & Nevis", "Portugal", "Greece", "Malta", "Caribbean"],
};

const Knowledge = () => {
  const [openFilter, setOpenFilter] = useState<string | null>(null);
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});
  const [sortOrder, setSortOrder] = useState<string>("desc");

  const toggleFilter = (group: string, value: string) => {
    setActiveFilters((prev) => {
      const current = prev[group] || [];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      if (updated.length === 0) {
        const next = { ...prev };
        delete next[group];
        return next;
      }
      return { ...prev, [group]: updated };
    });
  };

  const clearAllFilters = () => {
    setActiveFilters({});
    setOpenFilter(null);
  };

  const hasActiveFilters = Object.keys(activeFilters).length > 0;

  const filteredArticles = useMemo(() => {
    let result = [...articles];

    // Filter by Types (matches category)
    if (activeFilters.Types?.length) {
      result = result.filter((a) => activeFilters.Types.includes(a.category));
    }

    // Filter by Year
    if (activeFilters.Year?.length) {
      result = result.filter((a) => activeFilters.Year.some((y) => a.date.includes(y)));
    }

    // Filter by Topics (search in title + excerpt)
    if (activeFilters.Topics?.length) {
      result = result.filter((a) =>
        activeFilters.Topics.some(
          (t) =>
            a.title.toLowerCase().includes(t.toLowerCase()) ||
            a.excerpt.toLowerCase().includes(t.toLowerCase()) ||
            a.content.some((c) => c.toLowerCase().includes(t.toLowerCase()))
        )
      );
    }

    // Filter by Industries
    if (activeFilters.Industries?.length) {
      result = result.filter((a) =>
        activeFilters.Industries.some(
          (ind) =>
            a.title.toLowerCase().includes(ind.toLowerCase()) ||
            a.excerpt.toLowerCase().includes(ind.toLowerCase()) ||
            a.content.some((c) => c.toLowerCase().includes(ind.toLowerCase()))
        )
      );
    }

    // Filter by Programs
    if (activeFilters.Programs?.length) {
      result = result.filter((a) =>
        activeFilters.Programs.some(
          (p) =>
            a.title.toLowerCase().includes(p.toLowerCase()) ||
            a.excerpt.toLowerCase().includes(p.toLowerCase()) ||
            a.content.some((c) => c.toLowerCase().includes(p.toLowerCase()))
        )
      );
    }

    // Sort
    result.sort((a, b) => {
      const da = new Date(a.date).getTime();
      const db = new Date(b.date).getTime();
      return sortOrder === "desc" ? db - da : da - db;
    });

    return result;
  }, [activeFilters, sortOrder]);

  const featuredArticles = filteredArticles.filter((a) => a.featured);
  const listArticles = filteredArticles.filter((a) => !a.featured);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHeader
          title="Knowledge"
          description="Good client service includes sharing expertise with colleagues and clients. Explore our publications, guides, and insights on the investment migration developments that matter to you."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Knowledge" }]}
          searchPlaceholder="Search for a topic"
        />
        <div className="container py-12">
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-3 mb-4">
            {Object.keys(filterOptions).map((filter) => {
              const isOpen = openFilter === filter;
              const count = activeFilters[filter]?.length || 0;
              return (
                <div key={filter} className="relative">
                  <button
                    onClick={() => setOpenFilter(isOpen ? null : filter)}
                    className={`flex items-center gap-2 px-5 py-3 border text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors ${
                      count > 0 || isOpen
                        ? "border-primary text-primary"
                        : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                    }`}
                  >
                    {filter}
                    {count > 0 && (
                      <span className="bg-primary text-primary-foreground text-[9px] w-4 h-4 flex items-center justify-center font-bold">
                        {count}
                      </span>
                    )}
                    <ChevronDown size={12} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="absolute top-full left-0 mt-1 bg-background border border-border shadow-lg z-20 min-w-[220px]">
                      {filterOptions[filter].map((option) => {
                        const isSelected = activeFilters[filter]?.includes(option);
                        return (
                          <button
                            key={option}
                            onClick={() => toggleFilter(filter, option)}
                            className={`w-full text-left px-4 py-3 text-[13px] border-b border-border last:border-b-0 transition-colors ${
                              isSelected
                                ? "bg-primary/5 text-primary font-medium"
                                : "text-foreground hover:bg-warm-beige"
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="flex items-center gap-1.5 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors"
              >
                <X size={12} /> Clear All
              </button>
            )}
          </div>

          {/* Active filter tags */}
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2 mb-8">
              {Object.entries(activeFilters).map(([group, values]) =>
                values.map((val) => (
                  <button
                    key={`${group}-${val}`}
                    onClick={() => toggleFilter(group, val)}
                    className="flex items-center gap-1.5 bg-primary/5 text-primary text-[11px] font-medium px-3 py-1.5 hover:bg-primary/10 transition-colors"
                  >
                    {val} <X size={10} />
                  </button>
                ))
              )}
            </div>
          )}

          {/* Results bar */}
          <div className="flex items-center justify-between mb-8 text-[13px] text-muted-foreground">
            <span>
              Results <strong className="text-foreground">1-{filteredArticles.length}</strong> of{" "}
              <strong className="text-foreground">{filteredArticles.length}</strong>
            </span>
            <div className="flex items-center gap-2">
              <span>Sort by:</span>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="border border-border bg-background px-3 py-1.5 text-[12px] text-foreground outline-none"
              >
                <option value="desc">Date Descending</option>
                <option value="asc">Date Ascending</option>
              </select>
            </div>
          </div>

          {/* No results */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="font-serif text-xl text-foreground mb-2">No articles found</p>
              <p className="text-[13px] text-muted-foreground mb-6">Try adjusting your filters to find what you're looking for.</p>
              <button onClick={clearAllFilters} className="btn-fasken">Clear Filters</button>
            </div>
          )}

          {/* Featured cards */}
          {featuredArticles.length > 0 && (
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {featuredArticles.map((article) => (
                <Link key={article.slug} to={`/knowledge/${article.slug}`} className="group block">
                  <div className="relative h-48 bg-warm-beige mb-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-background/90 px-2 py-1">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-foreground">Featured</span>
                    </div>
                  </div>
                  <div className="border border-t-0 border-border p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">{article.category}</span>
                      <span className="text-[11px] text-muted-foreground">{article.date}</span>
                    </div>
                    <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                      {article.title}
                    </h3>
                    <p className="text-[13px] text-muted-foreground leading-relaxed line-clamp-2 mb-3">{article.excerpt}</p>
                    <span className="link-arrow text-muted-foreground group-hover:text-primary">
                      Read more <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* List articles */}
          <div className="space-y-0">
            {listArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/knowledge/${article.slug}`}
                className="group flex items-start justify-between py-6 border-b border-border hover:bg-warm-beige transition-colors px-4 -mx-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">{article.category}</span>
                    <span className="text-[11px] text-muted-foreground">{article.date}</span>
                  </div>
                  <h3 className="font-serif text-[16px] text-foreground group-hover:text-primary transition-colors leading-snug mb-1">
                    {article.title}
                  </h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed line-clamp-1">{article.excerpt}</p>
                </div>
                <ArrowRight
                  size={16}
                  className="text-muted-foreground group-hover:text-primary transition-colors mt-4 shrink-0 ml-4"
                />
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
      <CookieBanner />
      <BackToTop />
    </div>
  );
};

export default Knowledge;
