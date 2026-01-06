import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import AcademicServices from "./pages/AcademicServices";
import ITServices from "./pages/ITServices";
import HRServices from "./pages/HRServices";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import VideoBackground from "@/components/shared/Videobackground";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Global Toasters */}
      <Toaster />
      <Sonner />

      {/* Video Background */}
      <VideoBackground />

      {/* Main App Router */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/academic" element={<AcademicServices />} />
          <Route path="/services/it" element={<ITServices />} />
          <Route path="/services/hr" element={<HRServices />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch-all for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
