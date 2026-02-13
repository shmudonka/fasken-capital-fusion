import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  { title: "Citizenship by Investment", areas: "6 programs", slug: "citizenship-by-investment" },
  { title: "Residency by Investment", areas: "4 programs", slug: "residency-by-investment" },
  { title: "Family Office Advisory", areas: null, slug: "family-office" },
  { title: "Government Advisory", areas: null, slug: "government-advisory" },
  { title: "Asset Protection & Structuring", areas: null, slug: "asset-protection" },
  { title: "Tax Planning & Optimization", areas: null, slug: "tax-planning" },
  { title: "Real Estate Advisory", areas: "3 areas", slug: "real-estate" },
  { title: "Wealth Management", areas: null, slug: "wealth-management" },
];

const practices = [
  { title: "Due Diligence & Compliance", areas: null },
  { title: "Immigration Law", areas: "3 areas" },
  { title: "Corporate Structuring", areas: null },
  { title: "Global Compliance", areas: null },
  { title: "International Tax Law", areas: null },
  { title: "Private Client Services", areas: null },
  { title: "Cross-Border Transactions", areas: null },
  { title: "Regulatory Affairs", areas: null },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHeader
          title="Services"
          description="Citizenship Capital Group provides comprehensive advisory and legal services across the full spectrum of investment migration, global mobility, and private client solutions."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services" },
          ]}
          searchPlaceholder="Filter services"
        />

        <div className="container py-16">
          {/* Industries */}
          <div className="flex flex-col md:flex-row items-start gap-8 mb-20">
            <div className="w-full md:w-56 shrink-0 flex items-center gap-3 mb-4 md:mb-0 md:pt-5">
              <div className="w-0 h-0 border-l-[14px] border-l-primary border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" />
              <h2 className="text-2xl font-serif text-foreground">Industries</h2>
            </div>
            <div className="flex-1 grid md:grid-cols-2 gap-0">
              {industries.map((item, i) => (
                <Link
                  key={i}
                  to="#"
                  className="group flex items-center justify-between py-5 px-4 border-b border-border hover:bg-warm-beige transition-colors"
                >
                  <span className="font-serif text-[15px] text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </span>
                  <div className="flex items-center gap-2">
                    {item.areas && (
                      <span className="text-[10px] text-muted-foreground bg-warm-beige group-hover:bg-background px-3 py-1 font-medium uppercase tracking-wider">
                        {item.areas}
                      </span>
                    )}
                    <ChevronRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Practices */}
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-56 shrink-0 flex items-center gap-3 mb-4 md:mb-0 md:pt-5">
              <div className="w-0 h-0 border-l-[14px] border-l-primary border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" />
              <h2 className="text-2xl font-serif text-foreground">Practices</h2>
            </div>
            <div className="flex-1 grid md:grid-cols-2 gap-0">
              {practices.map((item, i) => (
                <Link
                  key={i}
                  to="#"
                  className="group flex items-center justify-between py-5 px-4 border-b border-border hover:bg-warm-beige transition-colors"
                >
                  <span className="font-serif text-[15px] text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </span>
                  <div className="flex items-center gap-2">
                    {item.areas && (
                      <span className="text-[10px] text-muted-foreground bg-warm-beige group-hover:bg-background px-3 py-1 font-medium uppercase tracking-wider">
                        {item.areas}
                      </span>
                    )}
                    <ChevronRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
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

export default Services;
