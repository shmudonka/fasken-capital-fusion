import { useParams, Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import { ChevronRight, ArrowRight } from "lucide-react";
import { getArticleBySlug, articles } from "@/data/articles";

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = getArticleBySlug(slug || "");

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <div className="container pt-40 pb-20 text-center">
          <h1 className="text-3xl font-serif text-foreground mb-4">Article Not Found</h1>
          <Link to="/knowledge" className="btn-fasken">Back to Knowledge</Link>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const relatedArticles = articles.filter(a => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Header */}
        <div className="bg-warm-beige pt-32 pb-12 lg:pt-40 lg:pb-16">
          <div className="container max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">{article.category}</span>
              <span className="text-[11px] text-muted-foreground">{article.date}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-[42px] font-serif text-foreground leading-[1.18]">{article.title}</h1>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="border-b border-border">
          <div className="container flex items-center py-4 text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={11} className="mx-2" />
            <Link to="/knowledge" className="hover:text-primary transition-colors">Knowledge</Link>
            <ChevronRight size={11} className="mx-2" />
            <span className="text-foreground truncate max-w-[200px]">{article.title}</span>
          </div>
        </div>

        {/* Content */}
        <div className="container max-w-4xl py-16">
          <div className="mb-8">
            <p className="text-[17px] text-foreground font-medium leading-relaxed">{article.excerpt}</p>
          </div>
          <div className="w-12 h-[3px] bg-primary mb-8" />
          {article.content.map((para, i) => (
            <p key={i} className="text-[15px] text-muted-foreground leading-[1.8] mb-6">{para}</p>
          ))}

          <div className="mt-12 pt-8 border-t border-border">
            <Link to="/contact" className="btn-fasken">
              Speak to an Advisor
            </Link>
          </div>
        </div>

        {/* Related */}
        <div className="bg-warm-beige py-16">
          <div className="container">
            <div className="flex items-end justify-between mb-8 pb-4 border-b border-border/40">
              <h2 className="text-2xl font-serif text-foreground">Related Insights</h2>
              <Link to="/knowledge" className="link-arrow">All Insights <ArrowRight size={12} /></Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((a) => (
                <Link key={a.slug} to={`/knowledge/${a.slug}`} className="group">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary block mb-2">{a.category}</span>
                  <h3 className="font-serif text-[16px] text-foreground group-hover:text-primary transition-colors leading-snug mb-2">{a.title}</h3>
                  <span className="text-[11px] text-muted-foreground">{a.date}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
      <CookieBanner />
      <BackToTop />
    </div>
  );
};

export default ArticleDetail;
