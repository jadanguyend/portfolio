import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LoadingScreen from "./components/LoadingScreen";
import Nomo from "./pages/case_studies/Nomo";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* App always mounts */}
      <Navbar />

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
