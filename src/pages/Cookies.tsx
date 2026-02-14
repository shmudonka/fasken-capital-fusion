import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";

const Cookies = () => (
  <div className="min-h-screen bg-background">
    <SiteHeader />
    <main>
      <PageHeader title="Cookie Policy" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cookie Policy" }]} />
      <div className="container max-w-4xl py-16 space-y-8">
        <div>
          <h2 className="text-xl font-serif text-foreground mb-3">What Are Cookies</h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed">Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and improve your browsing experience. Javaid & Associates - Citizenship Capital Group uses cookies to ensure our website functions properly and to understand how visitors interact with our content.</p>
        </div>
        <div>
          <h2 className="text-xl font-serif text-foreground mb-3">Types of Cookies We Use</h2>
          <ul className="space-y-4">
            <li><p className="text-[15px] text-muted-foreground leading-relaxed"><strong className="text-foreground">Essential Cookies:</strong> Required for the website to function properly. These cannot be disabled.</p></li>
            <li><p className="text-[15px] text-muted-foreground leading-relaxed"><strong className="text-foreground">Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting anonymous usage data.</p></li>
            <li><p className="text-[15px] text-muted-foreground leading-relaxed"><strong className="text-foreground">Functional Cookies:</strong> Remember your preferences and settings to provide a personalized experience.</p></li>
            <li><p className="text-[15px] text-muted-foreground leading-relaxed"><strong className="text-foreground">Marketing Cookies:</strong> Used to track visitors across websites to display relevant advertisements.</p></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-serif text-foreground mb-3">Managing Cookies</h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed">You can control and manage cookies through your browser settings. Most browsers allow you to block or delete cookies. However, please note that disabling certain cookies may affect the functionality of our website.</p>
        </div>
        <div>
          <h2 className="text-xl font-serif text-foreground mb-3">Contact Us</h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed">If you have questions about our use of cookies, please contact us at info@citizenshipcapitalgroup.com.</p>
        </div>
        <p className="text-[12px] text-muted-foreground">Last updated: February 1, 2026</p>
      </div>
    </main>
    <SiteFooter />
    <CookieBanner />
    <BackToTop />
  </div>
);

export default Cookies;
