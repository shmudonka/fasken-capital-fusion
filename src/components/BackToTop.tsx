import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 border border-foreground/20 rounded-full flex items-center justify-center text-foreground/40 hover:text-primary hover:border-primary transition-all duration-300 bg-background/80 backdrop-blur-sm"
      aria-label="Back to top"
    >
      <ArrowDown size={18} className="rotate-180" />
    </button>
  );
};

export default BackToTop;
