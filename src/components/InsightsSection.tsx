import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { articles } from "@/data/articles";

const InsightsSection = () => (
  <section id="insights" className="py-20 bg-background">
    <div className="container">
      <div className="flex items-end justify-between mb-12 border-b border-border pb-6">
        <div className="flex items-center gap-3">
          <div className="w-0 h-0 border-l-[12px] border-l-primary border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent" />
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">Latest Insights</h2>
        </div>
        <Link to="/knowledge" className="hidden md:flex link-arrow">All Insights <ArrowRight size={12} /></Link>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0">
        {articles.slice(0, 6).map((item) => (
          <Link key={item.slug} to={`/knowledge/${item.slug}`} className="group block py-6 border-b border-border">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">{item.category}</span>
              <span className="text-[11px] text-muted-foreground">{item.date}</span>
            </div>
            <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors leading-snug mb-3">{item.title}</h3>
            <span className="link-arrow text-muted-foreground group-hover:text-primary">Read more <ArrowRight size={12} /></span>
          </Link>
        ))}
      </div>
      <Link to="/knowledge" className="md:hidden link-arrow mt-8 block text-center">All Insights <ArrowRight size={14} /></Link>
    </div>
  </section>
);

export default InsightsSection;
