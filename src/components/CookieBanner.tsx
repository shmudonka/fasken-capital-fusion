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
      <div className="bg-dark-surface border-t border-border">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] font-light text-foreground/60 leading-relaxed flex-1">
            We use cookies to improve your experience.{" "}
            <Link to="/cookies" className="text-primary hover:underline">More information</Link>
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <button onClick={decline} className="px-5 py-2 text-[12px] font-light border border-border text-foreground/50 hover:text-foreground hover:border-foreground/40 transition-colors">
              Decline
            </button>
            <button onClick={accept} className="btn-davies-filled text-[12px] py-2">
              Accept
            </button>
          </div>
          <button onClick={decline} className="absolute top-3 right-4 md:static p-1 text-foreground/30 hover:text-foreground transition-colors">
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
