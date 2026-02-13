import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHeader from "@/components/PageHeader";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Calendar } from "lucide-react";

const events = [
  {
    title: "Investment Migration Forum 2026",
    date: "March 15-17, 2026",
    location: "Dubai, UAE",
    description: "Join Citizenship Capital Group at the premier investment migration conference, featuring panels on program developments, regulatory trends, and market outlook.",
    type: "Conference",
  },
  {
    title: "Caribbean CBI Programs: What's New in 2026",
    date: "March 22, 2026",
    location: "Online Webinar",
    description: "A comprehensive webinar covering recent changes to Caribbean citizenship by investment programs, including St. Kitts & Nevis, Dominica, and Grenada.",
    type: "Webinar",
  },
  {
    title: "European Golden Visa Workshop",
    date: "April 5, 2026",
    location: "London, UK",
    description: "An interactive workshop exploring European residency by investment options, with a focus on Portugal, Greece, and Malta.",
    type: "Workshop",
  },
  {
    title: "Private Client Forum Asia",
    date: "April 18-19, 2026",
    location: "Singapore",
    description: "Citizenship Capital Group is a proud sponsor of the Private Client Forum Asia, focusing on wealth management and mobility solutions for Asian HNW families.",
    type: "Conference",
  },
  {
    title: "Tax Planning & Global Mobility Seminar",
    date: "May 8, 2026",
    location: "Montreal, Canada",
    description: "A seminar on the intersection of international tax planning and investment migration, co-hosted with leading international tax advisors.",
    type: "Seminar",
  },
  {
    title: "U.S. EB-5 Investor Summit",
    date: "May 20-21, 2026",
    location: "New York, USA",
    description: "An in-depth summit on the EB-5 Immigrant Investor Program, covering project selection, regulatory updates, and processing timeline expectations.",
    type: "Conference",
  },
];

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHeader
          title="Events"
          description="Stay connected with Citizenship Capital Group at industry conferences, webinars, workshops, and seminars around the world."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Events" },
          ]}
        />

        <div className="container py-16">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-0 h-0 border-l-[14px] border-l-primary border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent" />
            <h2 className="text-2xl font-serif text-foreground">Upcoming Events</h2>
          </div>

          <div className="space-y-0">
            {events.map((event, i) => (
              <Link key={i} to="/contact" className="group block py-8 px-4 border-b border-border hover:bg-warm-beige transition-colors -mx-4">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">{event.type}</span>
                  <span className="flex items-center gap-1.5 text-[12px] text-muted-foreground">
                    <Calendar size={12} /> {event.date}
                  </span>
                  <span className="flex items-center gap-1.5 text-[12px] text-muted-foreground">
                    <MapPin size={12} /> {event.location}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors mb-2">{event.title}</h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed max-w-3xl mb-3">{event.description}</p>
                <span className="link-arrow text-muted-foreground group-hover:text-primary">
                  Register <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
      <CookieBanner />
      <BackToTop />
    </div>
  );
};

export default Events;
