import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
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

  // Hide global navbar for all case study pages
  const isCaseStudy = location.pathname.startsWith("/case-studies");

  return (
    <>
      {/* Show Navbar only if NOT a case study */}
      {!isCaseStudy && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies/nomo" element={<Nomo />} />
      </Routes>

      {/* Loading overlay */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}
    </>
  );
}
