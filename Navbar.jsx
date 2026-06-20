import { useState } from "react";

export default function Navbar({ currentPage, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
     { id: "symptoms", label: "Symptoms" },
  { id: "prescription", label: "Prescription" },
    { id: "contact", label: "Contact Us" },
  ];

  const navigate = (id) => {
    setPage(id);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .navbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 999;
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid #D0E8E8;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 48px; height: 70px;
          box-shadow: 0 2px 20px rgba(0,95,115,0.08);
        }
        .navbar-logo {
          display: flex; align-items: center; gap: 10px; cursor: pointer; user-select: none;
        }
        .navbar-logo-icon {
          width: 40px; height: 40px; background: #0A9396; border-radius: 11px;
          display: flex; align-items: center; justify-content: center; font-size: 22px;
        }
        .navbar-logo-text {
          font-family: 'DM Serif Display', serif; font-size: 22px; color: #005F73; font-weight: 400;
        }
        .navbar-links { display: flex; align-items: center; gap: 4px; }
        .nav-link {
          padding: 8px 18px; border-radius: 8px; font-size: 14px; font-weight: 500;
          cursor: pointer; border: none; background: none; color: #4A6070;
          transition: all 0.2s; font-family: 'Inter', sans-serif;
        }
        .nav-link:hover { background: #E9F5F5; color: #005F73; }
        .nav-link.active { background: #E9F5F5; color: #005F73; font-weight: 600; }
        .nav-login {
          padding: 9px 22px; border-radius: 9px; font-size: 14px; font-weight: 600;
          cursor: pointer; background: none; color: #0A9396; border: 1.5px solid #0A9396;
          transition: all 0.2s; font-family: 'Inter', sans-serif; margin-left: 6px;
        }
        .nav-login:hover { background: #E9F5F5; }
        .nav-signup {
          padding: 9px 22px; border-radius: 9px; font-size: 14px; font-weight: 600;
          cursor: pointer; background: #0A9396; color: #fff; border: none;
          transition: all 0.2s; font-family: 'Inter', sans-serif; margin-left: 6px;
        }
        .nav-signup:hover { background: #005F73; transform: translateY(-1px); box-shadow: 0 4px 14px rgba(10,147,150,.3); }
        .nav-hamburger {
          display: none; background: none; border: none; font-size: 26px;
          cursor: pointer; color: #1A2B3C; padding: 4px;
        }
        .mobile-menu {
          display: none; position: fixed; top: 70px; left: 0; right: 0;
          background: #fff; border-bottom: 1px solid #D0E8E8;
          padding: 14px 24px 20px; z-index: 998;
          flex-direction: column; gap: 6px;
          box-shadow: 0 8px 28px rgba(0,0,0,.1);
        }
        .mobile-menu.open { display: flex; }
        .mobile-nav-btn {
          padding: 12px 16px; border-radius: 9px; font-size: 15px; font-weight: 500;
          cursor: pointer; border: none; background: none; color: #1A2B3C;
          text-align: left; font-family: 'Inter', sans-serif; transition: background 0.2s;
        }
        .mobile-nav-btn:hover { background: #E9F5F5; }
        .mobile-divider { height: 1px; background: #D0E8E8; margin: 6px 0; }
        @media (max-width: 768px) {
          .navbar { padding: 0 20px; }
          .navbar-links { display: none; }
          .nav-hamburger { display: block; }
        }
      `}</style>

      <nav className="navbar">
        <div className="navbar-logo" onClick={() => navigate("home")}>
          <div className="navbar-logo-icon">🏥</div>
          <span className="navbar-logo-text">MediConnect</span>
        </div>

        <div className="navbar-links">
          {links.map((l) => (
            <button
              key={l.id}
              className={`nav-link${currentPage === l.id ? " active" : ""}`}
              onClick={() => navigate(l.id)}
            >
              {l.label}
            </button>
          ))}
          <button className="nav-login" onClick={() => navigate("login")}>Log In</button>
          <button className="nav-signup" onClick={() => navigate("signup")}>Get Started</button>
        </div>

        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {links.map((l) => (
          <button key={l.id} className="mobile-nav-btn" onClick={() => navigate(l.id)}>
            {l.label}
          </button>
        ))}
        <div className="mobile-divider" />
        <button className="mobile-nav-btn" onClick={() => navigate("login")}>🔐 Log In</button>
        <button className="mobile-nav-btn" onClick={() => navigate("signup")}>✅ Get Started Free</button>
      </div>
    </>
  );
}