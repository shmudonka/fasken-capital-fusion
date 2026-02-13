import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

const filters = ["Types", "Year", "Topics", "Industries", "Programs"];

const Knowledge = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

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
          <div className="flex flex-wrap gap-3 mb-10">
            {filters.map((filter) => (
              <button key={filter} onClick={() => setActiveFilter(activeFilter === filter ? null : filter)} className={`flex items-center gap-2 px-5 py-3 border text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors ${activeFilter === filter ? "border-primary text-primary" : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"}`}>
                {filter} <ChevronDown size={12} className={`transition-transform ${activeFilter === filter ? "rotate-180" : ""}`} />
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between mb-8 text-[13px] text-muted-foreground">
            <span>Results <strong className="text-foreground">1-{articles.length}</strong> of <strong className="text-foreground">{articles.length}</strong></span>
            <div className="flex items-center gap-2">
              <span>Sort by:</span>
              <select className="border border-border bg-background px-3 py-1.5 text-[12px] text-foreground outline-none">
                <option>Date Descending</option><option>Date Ascending</option><option>Relevance</option>
              </select>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {articles.filter(a => a.featured).map((article) => (
              <Link key={article.slug} to={`/knowledge/${article.slug}`} className="group block">
                <div className="relative h-48 bg-warm-beige mb-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-background/90 px-2 py-1">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-primary"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-foreground">Featured</span>
                  </div>
                </div>
                <div className="border border-t-0 border-border p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">{article.category}</span>
                    <span className="text-[11px] text-muted-foreground">{article.date}</span>
                  </div>
                  <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors leading-snug mb-2">{article.title}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed line-clamp-2 mb-3">{article.excerpt}</p>
                  <span className="link-arrow text-muted-foreground group-hover:text-primary">Read more <ArrowRight size={12} /></span>
                </div>
              </Link>
            ))}
          </div>
          <div className="space-y-0">
            {articles.filter(a => !a.featured).map((article) => (
              <Link key={article.slug} to={`/knowledge/${article.slug}`} className="group flex items-start justify-between py-6 border-b border-border hover:bg-warm-beige transition-colors px-4 -mx-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">{article.category}</span>
                    <span className="text-[11px] text-muted-foreground">{article.date}</span>
                  </div>
                  <h3 className="font-serif text-[16px] text-foreground group-hover:text-primary transition-colors leading-snug mb-1">{article.title}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed line-clamp-1">{article.excerpt}</p>
                </div>
                <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors mt-4 shrink-0 ml-4" />
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
