import { Link } from "react-router-dom";
import { articles } from "@/data/articles";
import ScrollReveal from "@/components/ScrollReveal";

const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const InsightsSection = () => (
  <section id="insights" className="py-24 bg-background">
    <div className="container">
      <ScrollReveal>
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl md:text-[40px] font-light text-foreground">News and Insights</h2>
          <Link to="/knowledge" className="hidden md:flex link-arrow">
            View All <ArrowUpRight />
          </Link>
        </div>
      </ScrollReveal>

      {/* Featured article */}
      {articles.filter(a => a.featured).slice(0, 1).map((article) => (
        <ScrollReveal key={article.slug}>
          <Link
            to={`/knowledge/${article.slug}`}
            className="group block relative mb-12 overflow-hidden"
          >
            <div className="bg-card h-64 md:h-80 flex items-end p-8 md:p-10">
              <div>
                <h3 className="text-2xl md:text-3xl font-light text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                  {article.title}
                </h3>
                <span className="text-[13px] text-muted-foreground font-light">{article.date}</span>
              </div>
            </div>
          </Link>
        </ScrollReveal>
      ))}

      {/* Article grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.filter(a => !a.featured).slice(0, 4).map((item, i) => (
          <ScrollReveal key={item.slug} delay={i * 0.08}>
            <Link
              to={`/knowledge/${item.slug}`}
              className="group block"
            >
              <div className="bg-card h-40 mb-0" />
              <div className="py-4">
                <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider block mb-2">
                  {item.category}
                </span>
                <h3 className="text-[16px] font-light text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                  {item.title}
                </h3>
                <span className="text-[12px] text-muted-foreground font-light">{item.date}</span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      <Link to="/knowledge" className="md:hidden link-arrow mt-8 block">
        View All <ArrowUpRight />
      </Link>
    </div>
  </section>
);

export default InsightsSection;
