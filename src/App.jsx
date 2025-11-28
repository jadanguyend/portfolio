import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar appears on all pages */}
      <div className="pt-24"> {/* Add padding so content is below navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other pages later */}
        </Routes>
      </div>
    </Router>
  );
}
