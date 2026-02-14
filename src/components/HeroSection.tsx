import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    category: "GLOBAL MOBILITY",
    title: "Access a world of visa-free travel and global mobility",
    link: "/programs",
    cta: "Explore Programs",
  },
  {
    category: "INVESTMENT PROGRAMS",
    title: "Freedom of mind to focus on what's important for you and your family",
    link: "/services",
    cta: "Our Services",
  },
  {
    category: "CITIZENSHIP",
    title: "Secure a better and safer future for your family",
    link: "/programs",
    cta: "Learn More",
  },
  {
    category: "ADVISORY",
    title: "Expand your horizons and unlock unimaginable possibilities",
    link: "/about",
    cta: "About Us",
  },
  {
    category: "YOUR FUTURE",
    title: "Realize your dreams and build the future you desire",
    link: "/contact",
    cta: "Get Started",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [paused]);

  const goTo = useCallback((i: number) => setCurrent(i), []);

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-dark-surface">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          alt=""
          className="w-full h-full object-cover opacity-30"
          src="/lovable-uploads/d0575d64-ea9e-41f2-82d6-ce2cd16c7293.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-surface via-dark-surface/95 to-dark-surface/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container pt-32 pb-40 lg:pt-40 lg:pb-48">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary mb-6 block">
                {slides[current].category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-serif leading-[1.12] text-dark-surface-foreground mb-8">
                {slides[current].title}
              </h1>
              <div className="w-16 h-[3px] bg-primary mb-8" />
              <p className="text-[15px] text-dark-surface-foreground/50 leading-relaxed mb-10 max-w-lg">
                Javaid & Associates — Citizenship Capital Group empowers individuals and families to become global citizens through strategic investment migration solutions.
              </p>
              <Link
                to={slides[current].link}
                className="btn-fasken-outline-white"
              >
                {slides[current].cta}
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide indicators — clean line style like DWPV */}
      <div className="absolute bottom-12 left-0 right-0 z-20">
        <div className="container">
          <div className="flex items-center gap-6 max-w-3xl">
            <button
              onClick={() => setPaused(!paused)}
              className="w-8 h-8 border border-dark-surface-foreground/30 flex items-center justify-center text-dark-surface-foreground/60 hover:text-primary hover:border-primary transition-colors"
              aria-label={paused ? "Play" : "Pause"}
            >
              {paused ? (
                <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor"><polygon points="0,0 10,6 0,12" /></svg>
              ) : (
                <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor"><rect x="0" y="0" width="3" height="12" /><rect x="7" y="0" width="3" height="12" /></svg>
              )}
            </button>
            <div className="flex items-center gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="relative h-[2px] transition-all duration-500"
                  style={{ width: i === current ? 48 : 24 }}
                  aria-label={`Slide ${i + 1}`}
                >
                  <span className="absolute inset-0 bg-dark-surface-foreground/20" />
                  {i === current && (
                    <motion.span
                      className="absolute inset-0 bg-primary"
                      layoutId="hero-indicator"
                      transition={{ duration: 0.4 }}
                    />
                  )}
                </button>
              ))}
            </div>
            <span className="text-[13px] text-dark-surface-foreground/30 font-serif ml-2">
              {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="hidden lg:block absolute right-24 top-1/4 bottom-1/4 w-px bg-dark-surface-foreground/10" />
    </section>
  );
};

export default HeroSection;
