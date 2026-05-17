import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";
import About from "./pages/About";
import Sandbox from "./pages/Sandbox";
import LoadingScreen from "./components/LoadingScreen";
import Nomo from "./pages/case_studies/Nomo";
import Radar from "./pages/case_studies/Radar";
import Event from "./pages/case_studies/Event";
import NotFound from "./pages/NotFound";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Wrap routes in a component so we can access location */}
      <AppContent isLoading={isLoading} setIsLoading={setIsLoading} />
    </>
  );
}

function AppContent({ isLoading, setIsLoading }) {
  const location = useLocation();
  const isCaseStudy = location.pathname.startsWith("/case-studies");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-grayLight-10 dark:bg-grayDark-10">
      <CustomCursor />
      {!isCaseStudy && <Navbar />}

      <Routes>
        <Route path="/" element={<Home isLoading={isLoading} />} />
        <Route path="/sandbox" element={<Sandbox />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies/nomo" element={<Nomo />} />
        <Route path="/case-studies/radar" element={<Radar />} />
        <Route path="/case-studies/event" element={<Event />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}
    </div>
  );
}
