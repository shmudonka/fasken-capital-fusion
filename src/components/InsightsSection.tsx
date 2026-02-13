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
    title: "St. Kitts and Nevis Reshapes Its CBI Program Signaling a New Era of 'Meaningful Citizenship'",
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
    <section id="insights" className="py-24 bg-background">
      <div className="container">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              Latest Insights
            </h2>
            <div className="section-divider" />
          </div>
          <a href="#" className="hidden md:flex link-arrow">
            All Insights <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((item, i) => (
            <a
              key={i}
              href="#"
              className="group card-hover block border-t-2 border-primary pt-6"
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {item.category}
                </span>
                <span className="text-xs text-muted-foreground">{item.date}</span>
              </div>
              <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors leading-snug">
                {item.title}
              </h3>
              <span className="inline-flex items-center gap-1 mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
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
