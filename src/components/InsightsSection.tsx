import { ArrowRight } from "lucide-react";

const insights = [
  {
    date: "February 12, 2026",
    category: "Industry News",
    title: "Which Alternative Residencies Americans Are Choosing in 2026",
  },
  {
    date: "February 6, 2026",
    category: "Industry News",
    title: "St. Kitts and Nevis Reshapes Its CBI Program Signaling a New Era",
  },
  {
    date: "January 28, 2026",
    category: "Knowledge",
    title: "Understanding Rejection Risks for CBI Applicants",
  },
  {
    date: "January 27, 2026",
    category: "Knowledge",
    title: "What the EU's Latest Stance Means for Caribbean CBI Holders",
  },
  {
    date: "January 20, 2026",
    category: "Analysis",
    title: "How Policy Changes Shape RCBI Decisions",
  },
  {
    date: "January 15, 2026",
    category: "Industry News",
    title: "Greece Plans Golden Visa Fix for Backdated Residence Permits",
  },
];

const InsightsSection = () => {
  return (
    <section id="insights" className="py-20 bg-background">
      <div className="container">
        {/* Section header - Fasken style */}
        <div className="flex items-end justify-between mb-12 border-b border-border pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-0 h-0 border-l-[12px] border-l-primary border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent" />
              <h2 className="text-3xl md:text-4xl font-serif text-foreground">
                Latest Insights
              </h2>
            </div>
          </div>
          <a href="#" className="hidden md:flex link-arrow">
            All Insights <ArrowRight size={12} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0">
          {insights.map((item, i) => (
            <a
              key={i}
              href="#"
              className="group block py-6 border-b border-border"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">
                  {item.category}
                </span>
                <span className="text-[11px] text-muted-foreground">{item.date}</span>
              </div>
              <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors leading-snug mb-3">
                {item.title}
              </h3>
              <span className="link-arrow text-muted-foreground group-hover:text-primary">
                Read more <ArrowRight size={12} />
              </span>
            </a>
          ))}
        </div>

        <a href="#" className="md:hidden link-arrow mt-8 block text-center">
          All Insights <ArrowRight size={14} />
        </a>
      </div>
    </section>
  );
};

export default InsightsSection;
