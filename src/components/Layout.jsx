// src/components/Layout.jsx
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main content: add padding-top equal to navbar height */}
      <main className="flex-1 pt-20 md:pt-16">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
