import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";

const Terms = () => (
  <div className="min-h-screen bg-background">
    <SiteHeader />
    <main>
      <PageHeader title="Terms of Service" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]} />
      <div className="container max-w-4xl py-16 space-y-8">
        <div>
          <h2 className="text-xl font-serif text-foreground mb-3">Acceptance of Terms</h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed">By accessing and using the Javaid & Associates - Citizenship Capital Group website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.</p>
        </div>
        <div>
          <h2 className="text-xl font-serif text-foreground mb-3">Services</h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed">Javaid & Associates - Citizenship Capital Group provides investment migration advisory services, including but not limited to citizenship by investment, residency by investment, due diligence, tax planning, and related advisory services. Our services are subject to individual engagement agreements with each client.</p>
        </div>
        <div>
          <h2 className="text-xl font-serif text-foreground mb-3">No Legal Advice</h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed">The information provided on this website is for general informational purposes only and does not constitute legal, tax, or immigration advice. Each individual's circumstances are unique, and you should consult with qualified professionals before making any decisions related to citizenship or residency by investment.</p>
        </div>
        <div>
          <h2 className="text-xl font-serif text-foreground mb-3">Intellectual Property</h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed">All content on this website, including text, graphics, logos, and images, is the property of Javaid & Associates - Citizenship Capital Group and is protected by international copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our prior written consent.</p>
        </div>
        <div>
          <h2 className="text-xl font-serif text-foreground mb-3">Limitation of Liability</h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed">Javaid & Associates - Citizenship Capital Group shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services. Our total liability shall not exceed the fees paid by you for the specific services giving rise to the claim.</p>
        </div>
        <div>
          <h2 className="text-xl font-serif text-foreground mb-3">Governing Law</h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed">These Terms of Service shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
        </div>
        <p className="text-[12px] text-muted-foreground">Last updated: February 1, 2026</p>
      </div>
    </main>
    <SiteFooter />
    <CookieBanner />
    <BackToTop />
  </div>
);

export default Terms;
