import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const filters = ["Types", "Year", "Topics", "Industries", "Programs"];

const articles = [
  {
    featured: true,
    image: true,
    date: "February 12, 2026",
    category: "Industry News",
    title: "Which Alternative Residencies Americans Are Choosing in 2026",
    excerpt: "With growing global uncertainty, an increasing number of American families are exploring second residency options in Europe, the Caribbean, and beyond.",
  },
  {
    featured: true,
    image: true,
    date: "February 6, 2026",
    category: "Industry News",
    title: "St. Kitts and Nevis Reshapes Its CBI Program Signaling a New Era",
    excerpt: "The government of St. Kitts and Nevis has introduced sweeping changes to its citizenship by investment program, setting new standards for due diligence.",
  },
  {
    featured: true,
    image: true,
    date: "January 28, 2026",
    category: "Knowledge",
    title: "Understanding Rejection Risks for CBI Applicants",
    excerpt: "A comprehensive analysis of the most common grounds for rejection in citizenship by investment applications across multiple jurisdictions.",
  },
  {
    featured: false,
    date: "January 27, 2026",
    category: "Knowledge",
    title: "What the EU's Latest Stance Means for Caribbean CBI Holders",
    excerpt: "Recent statements from the European Commission signal evolving attitudes toward Caribbean citizenship by investment programs.",
  },
  {
    featured: false,
    date: "January 20, 2026",
    category: "Analysis",
    title: "How Policy Changes Shape RCBI Decisions",
    excerpt: "An in-depth look at how evolving regulations in key jurisdictions are influencing investor choices.",
  },
  {
    featured: false,
    date: "January 15, 2026",
    category: "Industry News",
    title: "Greece Plans Golden Visa Fix for Backdated Residence Permits",
    excerpt: "Greek authorities announce measures to address processing backlogs in the Golden Visa program.",
  },
  {
    featured: false,
    date: "January 10, 2026",
    category: "Guide",
    title: "The Complete Guide to Portuguese Residency by Investment in 2026",
    excerpt: "Everything you need to know about Portugal's evolving Golden Residence Permit program.",
  },
  {
    featured: false,
    date: "January 5, 2026",
    category: "Knowledge",
    title: "Tax Implications of Dual Citizenship: What Investors Should Know",
    excerpt: "Understanding the tax obligations that come with holding citizenship in multiple jurisdictions.",
  },
  {
    featured: false,
    date: "December 20, 2025",
    category: "Analysis",
    title: "Global Mobility Index 2026: Key Findings and Trends",
    excerpt: "Our annual analysis of passport strength and global mobility patterns reveals shifting dynamics.",
  },
];

const Knowledge = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHeader
          title="Knowledge"
          description="Good client service includes sharing expertise with colleagues and clients. Explore our publications, guides, and insights on the investment migration developments that matter to you."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Knowledge" },
          ]}
          searchPlaceholder="Search for a topic"
        />

        <div className="container py-12">
          {/* Filters — Fasken style */}
          <div className="flex flex-wrap gap-3 mb-10">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(activeFilter === filter ? null : filter)}
                className={`flex items-center gap-2 px-5 py-3 border text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors ${
                  activeFilter === filter
                    ? "border-primary text-primary"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {filter}
                <ChevronDown size={12} className={`transition-transform ${activeFilter === filter ? "rotate-180" : ""}`} />
              </button>
            ))}
          </div>

          {/* Results count */}
          <div className="flex items-center justify-between mb-8 text-[13px] text-muted-foreground">
            <span>Results <strong className="text-foreground">1-9</strong> of <strong className="text-foreground">87</strong></span>
            <div className="flex items-center gap-2">
              <span>Sort by:</span>
              <select className="border border-border bg-background px-3 py-1.5 text-[12px] text-foreground outline-none">
                <option>Date Descending</option>
                <option>Date Ascending</option>
                <option>Relevance</option>
              </select>
            </div>
          </div>

          {/* Featured cards — Fasken style with images */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {articles.filter(a => a.featured).map((article, i) => (
              <Link key={i} to="#" className="group block">
                <div className="relative h-48 bg-warm-beige mb-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-background/90 px-2 py-1">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-primary"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-foreground">Featured</span>
                  </div>
                </div>
                <div className="border border-t-0 border-border p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">
                      {article.category}
                    </span>
                    <span className="text-[11px] text-muted-foreground">{article.date}</span>
                  </div>
                  <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                    {article.title}
                  </h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                    {article.excerpt}
                  </p>
                  <span className="link-arrow text-muted-foreground group-hover:text-primary">
                    Read more <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* List articles — Fasken style */}
          <div className="space-y-0">
            {articles.filter(a => !a.featured).map((article, i) => (
              <Link
                key={i}
                to="#"
                className="group flex items-start justify-between py-6 border-b border-border hover:bg-warm-beige transition-colors px-4 -mx-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">
                      {article.category}
                    </span>
                    <span className="text-[11px] text-muted-foreground">{article.date}</span>
                  </div>
                  <h3 className="font-serif text-[16px] text-foreground group-hover:text-primary transition-colors leading-snug mb-1">
                    {article.title}
                  </h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed line-clamp-1">
                    {article.excerpt}
                  </p>
                </div>
                <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors mt-4 shrink-0 ml-4" />
              </Link>
            ))}
          </div>

          {/* Pagination — Fasken style */}
          <div className="flex items-center justify-center gap-1 mt-12">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`w-10 h-10 flex items-center justify-center text-[13px] transition-colors ${
                  page === 1
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-warm-beige"
                }`}
              >
                {page}
              </button>
            ))}
            <button className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-warm-beige">
              <ArrowRight size={14} />
            </button>
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
