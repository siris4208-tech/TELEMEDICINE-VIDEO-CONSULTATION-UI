export default function Footer({ setPage }) {
  const nav = (id) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .footer {
          background: #1A2B3C; color: rgba(255,255,255,0.65);
          padding: 56px 48px 28px;
        }
        .footer-grid {
          display: grid; grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 40px; max-width: 1100px; margin: 0 auto 44px;
        }
        .footer-brand-logo {
          display: flex; align-items: center; gap: 10px; margin-bottom: 14px;
          font-family: 'DM Serif Display', serif; font-size: 20px; color: #fff;
        }
        .footer-brand-icon {
          width: 32px; height: 32px; background: #0A9396; border-radius: 8px;
          display: flex; align-items: center; justify-content: center; font-size: 17px;
        }
        .footer-brand p { font-size: 13px; line-height: 1.7; }
        .footer-col h4 {
          font-size: 11px; font-weight: 700; color: #fff; margin-bottom: 16px;
          text-transform: uppercase; letter-spacing: 1.8px;
        }
        .footer-col-link {
          display: block; font-size: 13px; color: rgba(255,255,255,0.6);
          margin-bottom: 10px; cursor: pointer; background: none; border: none;
          font-family: 'Inter', sans-serif; text-align: left; padding: 0;
          transition: color 0.2s;
        }
        .footer-col-link:hover { color: #94D2BD; }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px;
          text-align: center; font-size: 13px; max-width: 1100px; margin: 0 auto;
        }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .footer { padding: 40px 20px 24px; }
          .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-logo">
              <div className="footer-brand-icon">🏥</div>
              MediConnect
            </div>
            <p>Bridging patients and physicians through secure, high-quality video consultations — anytime, anywhere in India.</p>
          </div>

          <div className="footer-col">
            <h4>Platform</h4>
            <button className="footer-col-link" onClick={() => nav("home")}>Home</button>
            <button className="footer-col-link" onClick={() => nav("about")}>About Us</button>
            <button className="footer-col-link" onClick={() => nav("contact")}>Contact Us</button>
            <button className="footer-col-link" onClick={() => nav("signup")}>Create Account</button>
          </div>

          <div className="footer-col">
            <h4>Specialties</h4>
            <button className="footer-col-link">Cardiology</button>
            <button className="footer-col-link">Dermatology</button>
            <button className="footer-col-link">Mental Health</button>
            <button className="footer-col-link">Pediatrics</button>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <button className="footer-col-link" onClick={() => nav("contact")}>Contact Us</button>
            <button className="footer-col-link">Help Center</button>
            <button className="footer-col-link">Privacy Policy</button>
            <button className="footer-col-link">Terms of Use</button>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 MediConnect Technologies Pvt. Ltd. · Not a substitute for emergency services — call <strong style={{color:"#94D2BD"}}>112</strong> in emergencies.
        </div>
      </footer>
    </>
  );
}