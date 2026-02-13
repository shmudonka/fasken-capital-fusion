import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const slides = [
  {
    tagline: "IT'S ALL ABOUT ACCESS",
    title: "Access a world of visa-free travel and global mobility",
  },
  {
    tagline: "IT'S ALL ABOUT FREEDOM",
    title: "Freedom of mind to focus on what's important for you and your family",
  },
  {
    tagline: "IT'S ALL ABOUT SECURITY",
    title: "Secure a better and safer future for your family",
  },
  {
    tagline: "IT'S ALL ABOUT OPPORTUNITY",
    title: "Expand your horizons and unlock unimaginable possibilities",
  },
  {
    tagline: "IT'S ALL ABOUT YOUR FUTURE",
    title: "Realize your dreams and build the future you desire",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content - Fasken split layout */}
      <div className="relative z-10 container grid lg:grid-cols-2 gap-12 items-center py-32">
        <div className="space-y-6">
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">
            {slides[current].tagline}
          </p>
          <div className="section-divider" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-primary-foreground">
            {slides[current].title}
          </h1>
          <a href="#programs" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-foreground border border-primary-foreground/30 px-8 py-3 hover:bg-primary hover:border-primary transition-all duration-300">
            Learn More
          </a>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4">
        <button onClick={prev} className="p-2 text-primary-foreground/70 hover:text-primary transition-colors" aria-label="Previous slide">
          <ChevronLeft size={24} />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-primary-foreground/40"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button onClick={next} className="p-2 text-primary-foreground/70 hover:text-primary transition-colors" aria-label="Next slide">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
