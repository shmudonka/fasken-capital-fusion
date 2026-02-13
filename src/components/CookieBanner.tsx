import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("cookie-consent");
    if (!dismissed) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => { localStorage.setItem("cookie-consent", "accepted"); setVisible(false); };
  const decline = () => { localStorage.setItem("cookie-consent", "declined"); setVisible(false); };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] animate-slide-up">
      <div className="bg-dark-surface border-t border-dark-surface-foreground/10">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-[13px] text-dark-surface-foreground/70 leading-relaxed">
              We use cookies to improve your experience on our website. By browsing this website, you agree to our use of cookies.{" "}
              <Link to="/cookies" className="text-primary hover:underline">More information</Link>
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button onClick={decline} className="px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.15em] border border-dark-surface-foreground/20 text-dark-surface-foreground/60 hover:text-dark-surface-foreground hover:border-dark-surface-foreground/40 transition-colors">Decline</button>
            <button onClick={accept} className="btn-fasken-primary">Accept All Cookies</button>
          </div>
          <button onClick={decline} className="absolute top-3 right-4 md:static p-1 text-dark-surface-foreground/40 hover:text-dark-surface-foreground transition-colors"><X size={16} /></button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
