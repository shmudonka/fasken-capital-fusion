import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";

const Accessibility = () => (
  <div className="min-h-screen bg-background">
    <SiteHeader />
    <main>
      <PageHeader title="Accessibility" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Accessibility" }]} />
      <div className="container max-w-4xl py-16 space-y-8">
        <div>
          <h2 className="text-xl font-serif text-foreground mb-3">Our Commitment</h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed">Citizenship Capital Group is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>
        </div>
        <div>
          <h2 className="text-xl font-serif text-foreground mb-3">Standards</h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed">We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone.</p>
        </div>
        <div>
          <h2 className="text-xl font-serif text-foreground mb-3">Measures Taken</h2>
          <ul className="space-y-2 text-[15px] text-muted-foreground leading-relaxed list-disc list-inside">
            <li>Semantic HTML structure for screen reader compatibility</li>
            <li>Sufficient color contrast ratios throughout the site</li>
            <li>Keyboard navigation support for all interactive elements</li>
            <li>Alternative text for all meaningful images</li>
            <li>Clear and consistent navigation patterns</li>
            <li>Resizable text without loss of functionality</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-serif text-foreground mb-3">Feedback</h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed">We welcome your feedback on the accessibility of our website. If you encounter accessibility barriers or have suggestions for improvement, please contact us at accessibility@citizenshipcapital.com or call +1 (514) 568-5220.</p>
        </div>
        <p className="text-[12px] text-muted-foreground">Last updated: February 1, 2026</p>
      </div>
    </main>
    <SiteFooter />
    <CookieBanner />
    <BackToTop />
  </div>
);

export default Accessibility;
