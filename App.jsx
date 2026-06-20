import { useState } from "react";

// ── Import all pages
import HomePage    from "./pages/HomePage";
import AboutPage   from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage   from "./pages/LoginPage";
import SignupPage  from "./pages/SignupPage";
import SymptomsPage from "./pages/SymptomsPage";
import PrescriptionPage from "./pages/PrescriptionPage";

// ── Import shared components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ── Google Fonts (injected once here)
const fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

// ── Global base styles
const globalStyle = document.createElement("style");
globalStyle.textContent = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: 'Inter', sans-serif; color: #1A2B3C; background: #fff; overflow-x: hidden; }
  button { font-family: 'Inter', sans-serif; }
`;
document.head.appendChild(globalStyle);

// ── Pages that don't show the Navbar or Footer
const FULL_SCREEN_PAGES = ["login", "signup"];

export default function App() {
  // currentPage drives which page renders
  const [currentPage, setCurrentPage] = useState("home");

  // Helper so any child can navigate
  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Render the correct page based on state
  const renderPage = () => {
    switch (currentPage) {
      case "home":    return <HomePage    setPage={navigate} />;
      case "about":   return <AboutPage   setPage={navigate} />;
      case "contact": return <ContactPage setPage={navigate} />;
      case "login":   return <LoginPage   setPage={navigate} />;
      case "signup":  return <SignupPage  setPage={navigate} />;
      case "symptoms":return <SymptomsPage setPage={navigate} />;
      case "prescription":return <PrescriptionPage setPage={navigate} />;
      default:        return <HomePage    setPage={navigate} />;
    }
  };

  const isFullScreen = FULL_SCREEN_PAGES.includes(currentPage);

  return (
    <div>
      {/* Navbar is always visible */}
      <Navbar currentPage={currentPage} setPage={navigate} />

      {/* Page content — padded by navbar height on non-auth pages */}
      <main style={{ paddingTop: isFullScreen ? 0 : "70px" }}>
        {renderPage()}
      </main>

      {/* Footer hidden on login / signup */}
      {!isFullScreen && <Footer setPage={navigate} />}
    </div>
  );
}



