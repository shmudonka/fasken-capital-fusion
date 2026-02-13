import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs: Breadcrumb[];
  searchPlaceholder?: string;
}

const PageHeader = ({ title, description, breadcrumbs, searchPlaceholder }: PageHeaderProps) => {
  return (
    <>
      {/* Warm beige hero header — Fasken style */}
      <div className="bg-warm-beige pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-5">{title}</h1>
          {description && (
            <p className="text-muted-foreground max-w-2xl mx-auto text-[15px] leading-relaxed">
              {description}
            </p>
          )}
          {searchPlaceholder && (
            <div className="mt-8 max-w-lg mx-auto">
              <div className="flex items-center border border-border bg-background">
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  className="flex-1 bg-transparent text-sm py-3.5 px-5 outline-none text-foreground placeholder:text-muted-foreground"
                />
                <button className="px-4 text-muted-foreground hover:text-foreground transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Breadcrumb bar — Fasken style */}
      <div className="border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center">
                {i > 0 && <ChevronRight size={11} className="mx-2" />}
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-primary transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-foreground">{crumb.label}</span>
                )}
              </span>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3 text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
            <span>Share</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
