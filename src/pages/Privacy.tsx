import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";

const Privacy = () => (
  <div className="min-h-screen bg-background">
    <SiteHeader />
    <main>
      <PageHeader title="Privacy Policy" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <div className="container max-w-4xl py-16 space-y-8">
        <div>
          <h2 className="text-xl font-serif text-foreground mb-3">Introduction</h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed">Citizenship Capital Group ("we," "our," or "us") is committed to protecting the privacy and security of our clients, website visitors, and other individuals whose personal data we process. This Privacy Policy outlines how we collect, use, disclose, and protect your information.</p>
        </div>
        <div>
          <h2 className="text-xl font-serif text-foreground mb-3">Information We Collect</h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-3">We may collect the following categories of personal information:</p>
          <ul className="space-y-2 text-[15px] text-muted-foreground leading-relaxed list-disc list-inside">
            <li>Contact information (name, email address, phone number, mailing address)</li>
            <li>Identity documents (passport copies, national ID, photographs)</li>
            <li>Financial information (source of funds documentation, bank statements, tax records)</li>
            <li>Professional information (employment history, business ownership details)</li>
            <li>Family information (details of dependents included in applications)</li>
            <li>Website usage data (IP address, browser type, pages visited, cookies)</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-serif text-foreground mb-3">How We Use Your Information</h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed">We use personal information to provide our investment migration advisory services, process citizenship and residency applications, conduct due diligence, comply with legal obligations, communicate with you about our services, and improve our website and client experience.</p>
        </div>
        <div>
          <h2 className="text-xl font-serif text-foreground mb-3">Data Sharing</h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed">We may share your personal information with government agencies as required for citizenship and residency applications, due diligence service providers, legal and financial advisors, and regulatory authorities as required by law. We do not sell personal information to third parties.</p>
        </div>
        <div>
          <h2 className="text-xl font-serif text-foreground mb-3">Data Security</h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, access controls, and regular security assessments.</p>
        </div>
        <div>
          <h2 className="text-xl font-serif text-foreground mb-3">Your Rights</h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed">Depending on your jurisdiction, you may have the right to access, correct, delete, or port your personal data, as well as the right to object to or restrict certain processing activities. To exercise your rights, please contact us at privacy@citizenshipcapital.com.</p>
        </div>
        <div>
          <h2 className="text-xl font-serif text-foreground mb-3">Contact Us</h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed">For questions about this Privacy Policy or our data practices, please contact our Data Protection Officer at privacy@citizenshipcapital.com or write to us at our London office address.</p>
        </div>
        <p className="text-[12px] text-muted-foreground">Last updated: February 1, 2026</p>
      </div>
    </main>
    <SiteFooter />
    <CookieBanner />
    <BackToTop />
  </div>
);

export default Privacy;
