import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Knowledge from "./pages/Knowledge";
import Contact from "./pages/Contact";
import Programs from "./pages/Programs";
import People from "./pages/People";
import PersonDetail from "./pages/PersonDetail";
import Experience from "./pages/Experience";
import ArticleDetail from "./pages/ArticleDetail";
import ProgramDetail from "./pages/ProgramDetail";
import Careers from "./pages/Careers";
import Events from "./pages/Events";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import Accessibility from "./pages/Accessibility";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/knowledge/:slug" element={<ArticleDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:slug" element={<ProgramDetail />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/:slug" element={<PersonDetail />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/events" element={<Events />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
