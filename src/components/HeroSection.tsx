import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const slides = [
{
  category: "GLOBAL MOBILITY",
  title: "Access a world of visa-free travel and global mobility",
  link: "/programs",
  cta: "Explore Programs"
},
{
  category: "INVESTMENT PROGRAMS",
  title: "Freedom of mind to focus on what's important for you and your family",
  link: "/services",
  cta: "Our Services"
},
{
  category: "CITIZENSHIP",
  title: "Secure a better and safer future for your family",
  link: "/programs",
  cta: "Learn More"
},
{
  category: "ADVISORY",
  title: "Expand your horizons and unlock unimaginable possibilities",
  link: "/about",
  cta: "About Us"
},
{
  category: "YOUR FUTURE",
  title: "Realize your dreams and build the future you desire",
  link: "/contact",
  cta: "Get Started"
}];


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
    <section className="relative min-h-[85vh] flex overflow-hidden">
      {/* Left content panel */}
      <div className="relative z-10 w-full lg:w-[48%] bg-warm-beige flex flex-col justify-center px-8 md:px-16 lg:px-20 pt-36 pb-40 lg:pt-44 lg:pb-48">
        <div className="max-w-xl">
          <h1
            className="text-3xl md:text-4xl lg:text-[44px] font-serif leading-[1.18] text-foreground mb-6 transition-opacity duration-500"
            key={current}>

            {slides[current].title}
          </h1>
          <div className="w-12 h-[3px] bg-primary mb-8" />
          <p className="text-[14px] text-muted-foreground leading-relaxed mb-8 max-w-md">
            Javaid & Associates - Citizenship Capital Group empowers individuals and families to become global citizens through strategic investment migration solutions.
          </p>
          <Link to={slides[current].link} className="btn-fasken">
            {slides[current].cta}
          </Link>
        </div>
      </div>

      {/* Right image panel */}
      <div className="hidden lg:block absolute right-0 top-0 w-[52%] h-full">
        <img alt="" className="w-full h-full object-cover" src="/lovable-uploads/d0575d64-ea9e-41f2-82d6-ce2cd16c7293.jpg" />
        
      </div>

      {/* Navigation controls — centered like Fasken */}
      <div className="absolute bottom-[88px] left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 bg-dark-surface/80 backdrop-blur-sm">
        


        


        


      </div>

      {/* Slide tabs — Fasken numbered indicators */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="flex">
          {slides.map((slide, i) =>
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`flex-1 py-5 px-4 text-left transition-all duration-300 border-t-2 ${
            i === current ?
            "bg-dark-surface border-primary text-dark-surface-foreground triangle-accent" :
            "bg-dark-surface/90 border-transparent text-dark-surface-foreground/50 hover:text-dark-surface-foreground/80"}`
            }>

              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] block mb-1">
                {slide.category}
              </span>
              <span className="text-[12px] font-serif leading-tight block truncate hidden sm:block">
                {slide.title.length > 35 ? slide.title.substring(0, 35) + "..." : slide.title}
              </span>
              <span className="text-[22px] font-serif text-dark-surface-foreground/15 block mt-2 text-right">
                {String(i + 1).padStart(2, "0")}
              </span>
            </button>
          )}
        </div>
      </div>
    </section>);

};

export default HeroSection;