import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Sandbox from "./pages/Sandbox";
import LoadingScreen from "./components/LoadingScreen";
import Nomo from "./pages/case_studies/Nomo";

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

  return (
    <div className="min-h-screen bg-grayLight-10 dark:bg-grayDark-10">
      {!isCaseStudy && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sandbox" element={<Sandbox />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies/nomo" element={<Nomo />} />
      </Routes>

      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}
    </div>
  );
}
