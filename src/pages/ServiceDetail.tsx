import { useParams, Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import { getServiceBySlug, industries, practices } from "@/data/services";
import { ChevronRight } from "lucide-react";
import NotFound from "./NotFound";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) return <NotFound />;

  const isIndustry = industries.some(s => s.slug === slug);
  const relatedItems = (isIndustry ? industries : practices).filter(s => s.slug !== slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHeader
          title={service.title}
          description={service.description}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
        />
        <div className="container py-16">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="md:col-span-2">
              {service.areas && (
                <div className="flex items-center gap-2 mb-8">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary bg-primary/5 px-3 py-1.5">{service.areas}</span>
                </div>
              )}
              <div className="space-y-6">
                {service.details.map((paragraph, i) => (
                  <p key={i} className="text-[15px] text-muted-foreground leading-[1.8]">{paragraph}</p>
                ))}
              </div>
              <div className="mt-12 pt-8 border-t border-border">
                <Link to="/contact" className="btn-davies">Schedule a Consultation</Link>
              </div>
            </div>
            <aside>
              <div className="border border-border p-6 mb-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-0 h-0 border-l-[10px] border-l-primary border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" />
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground">Related {isIndustry ? "Industries" : "Practices"}</h3>
                </div>
                <div className="space-y-0">
                  {relatedItems.map((item) => (
                    <Link key={item.slug} to={`/services/${item.slug}`} className="group flex items-center justify-between py-3.5 border-b border-border last:border-b-0 hover:text-primary transition-colors">
                      <span className="font-serif text-[14px] text-foreground group-hover:text-primary transition-colors">{item.title}</span>
                      <ChevronRight size={14} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="bg-card p-6">
                <h3 className="font-serif text-lg text-foreground mb-3">Need Expert Guidance?</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-5">Our advisors are ready to discuss your specific situation and recommend the best path forward.</p>
                <Link to="/contact" className="link-arrow text-primary hover:text-foreground">Contact Us <ChevronRight size={12} /></Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <SiteFooter />
      <CookieBanner />
      <BackToTop />
    </div>
  );
};

export default ServiceDetail;
