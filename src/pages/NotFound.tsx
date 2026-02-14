import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="pt-32 pb-24 lg:pt-40">
        <div className="container">
          <h1 className="text-3xl font-light text-foreground mb-4">
            We are sorry, the page you are looking for cannot be found.
          </h1>
          <p className="text-[15px] font-light text-muted-foreground">
            Please return to the{" "}
            <Link to="/" className="text-primary hover:underline">homepage</Link>.
          </p>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
};

export default NotFound;
