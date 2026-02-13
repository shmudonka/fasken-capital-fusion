import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Pause } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const slides = [
  {
    category: "GLOBAL MOBILITY",
    title: "Access a world of visa-free travel and global mobility",
  },
  {
    category: "INVESTMENT PROGRAMS",
    title: "Freedom of mind to focus on what's important for you and your family",
  },
  {
    category: "CITIZENSHIP",
    title: "Secure a better and safer future for your family",
  },
  {
    category: "ADVISORY",
    title: "Expand your horizons and unlock unimaginable possibilities",
  },
  {
    category: "YOUR FUTURE",
    title: "Realize your dreams and build the future you desire",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="relative min-h-[80vh] flex overflow-hidden">
      {/* Left content panel - Fasken warm beige */}
      <div className="relative z-10 w-full lg:w-1/2 bg-warm-beige flex flex-col justify-center px-8 md:px-16 lg:px-20 py-32">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-4xl lg:text-[42px] font-serif leading-[1.2] text-foreground mb-6">
            {slides[current].title}
          </h1>
          <div className="section-divider mb-8" />
          <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-md">
            Citizenship Capital Group empowers individuals and families to become global citizens through strategic investment migration solutions.
          </p>
          <a href="#programs" className="btn-fasken">
            Learn More
          </a>
        </div>
      </div>

      {/* Right image panel - Fasken style */}
      <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/20" />
      </div>

      {/* Navigation arrows - Fasken centered style */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        <button onClick={prev} className="p-1.5 text-foreground/50 hover:text-primary transition-colors" aria-label="Previous slide">
          <ChevronLeft size={20} />
        </button>
        <button onClick={next} className="p-1.5 text-foreground/50 hover:text-primary transition-colors" aria-label="Next slide">
          <ChevronRight size={20} />
        </button>
        <button onClick={() => setPaused(!paused)} className="p-1.5 text-foreground/50 hover:text-primary transition-colors" aria-label="Pause">
          <Pause size={16} />
        </button>
      </div>

      {/* Slide indicators - Fasken numbered tabs at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="container">
          <div className="flex">
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`flex-1 py-5 px-4 text-left transition-all duration-300 border-t-2 ${
                  i === current
                    ? "bg-dark-surface border-primary text-dark-surface-foreground triangle-accent"
                    : "bg-dark-surface/80 border-transparent text-dark-surface-foreground/60 hover:text-dark-surface-foreground"
                }`}
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] block mb-1">
                  {slide.category}
                </span>
                <span className="text-[13px] font-serif leading-tight block truncate">
                  {slide.title.length > 40 ? slide.title.substring(0, 40) + "..." : slide.title}
                </span>
                <span className="text-[22px] font-serif text-dark-surface-foreground/20 block mt-2 text-right">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
