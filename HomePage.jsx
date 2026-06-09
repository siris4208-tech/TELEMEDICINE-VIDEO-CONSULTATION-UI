export default function HomePage({ setPage }) {
  const features = [
    { icon: "🎥", title: "HD Video Consultations", desc: "Crystal-clear video calls with your doctor from any device — phone, tablet, or laptop." },
    { icon: "🔒", title: "HIPAA-Compliant Security", desc: "End-to-end encrypted sessions ensure your medical conversations stay completely private." },
    { icon: "⚡", title: "Same-Day Appointments", desc: "Consult a board-certified physician within hours. No waiting rooms, no travel." },
    { icon: "💊", title: "e-Prescriptions", desc: "Digital prescriptions sent directly to your nearest pharmacy after every consult." },
    { icon: "📋", title: "Digital Health Records", desc: "All consultations, notes, and prescriptions stored securely in one place." },
    { icon: "🌐", title: "24/7 Availability", desc: "Round-the-clock access to doctors across specialties — wherever you are." },
  ];

  const specialties = [
    { emoji: "🫀", name: "Cardiology" }, { emoji: "🧠", name: "Neurology" },
    { emoji: "🦷", name: "Dental" },     { emoji: "👁️", name: "Ophthalmology" },
    { emoji: "🦴", name: "Orthopedics" },{ emoji: "🫁", name: "Pulmonology" },
    { emoji: "🩺", name: "General" },    { emoji: "🧘", name: "Mental Health" },
    { emoji: "👶", name: "Pediatrics" }, { emoji: "🌿", name: "Dermatology" },
    { emoji: "💉", name: "Endocrinology" },{ emoji: "🧬", name: "Genetics" },
  ];

  const steps = [
    { n: "1", title: "Create your account", desc: "Sign up in under 2 minutes with your basic health information." },
    { n: "2", title: "Choose your doctor", desc: "Browse specialists by availability, ratings, and expertise." },
    { n: "3", title: "Join the video call", desc: "Connect securely from any device at your scheduled time." },
    { n: "4", title: "Receive care", desc: "Get diagnosis, e-prescriptions, referrals, and follow-up care digitally." },
  ];

  const testimonials = [
    { init: "RK", name: "Rajan Kumar", location: "Rajasthan", stars: 5, text: "I live 80 km from the nearest hospital. MediConnect let me consult a cardiologist from my phone in 20 minutes. Life-changing." },
    { init: "PM", name: "Priya Mehta", location: "Mumbai", stars: 5, text: "Got a dermatology consultation during my lunch break. The doctor sent an e-prescription within the hour. Absolutely seamless." },
    { init: "DS", name: "Dr. Deepak Singh", location: "Delhi", stars: 5, text: "As a doctor the platform is intuitive and lets me focus on patients. My consult notes sync automatically to their health records." },
  ];

  const nav = (id) => { setPage(id); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <>
      <style>{`
        /* ── HERO ── */
        .hero {
          background: linear-gradient(135deg, #005F73 0%, #0A9396 60%, #94D2BD 100%);
          padding: 96px 48px 88px; text-align: center; position: relative; overflow: hidden;
        }
        .hero::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(circle at 20% 50%, rgba(255,255,255,.06), transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(255,255,255,.04), transparent 40%);
          pointer-events: none;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,.15); border: 1px solid rgba(255,255,255,.3);
          color: #fff; padding: 7px 18px; border-radius: 24px;
          font-size: 13px; font-weight: 500; margin-bottom: 30px;
        }
        .hero h1 {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(34px, 6vw, 66px); color: #fff;
          line-height: 1.1; margin-bottom: 22px;
          max-width: 780px; margin-inline: auto;
        }
        .hero h1 em { font-style: italic; color: #94D2BD; }
        .hero-sub {
          color: rgba(255,255,255,.82); font-size: 18px; line-height: 1.65;
          max-width: 540px; margin: 0 auto 42px;
        }
        .hero-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
        .btn-white {
          padding: 14px 32px; border-radius: 10px; font-size: 15px; font-weight: 700;
          cursor: pointer; border: none; background: #fff; color: #005F73;
          transition: all .2s; font-family: 'Inter', sans-serif;
        }
        .btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,.2); }
        .btn-ghost {
          padding: 14px 32px; border-radius: 10px; font-size: 15px; font-weight: 600;
          cursor: pointer; border: 2px solid rgba(255,255,255,.65); background: transparent;
          color: #fff; transition: all .2s; font-family: 'Inter', sans-serif;
        }
        .btn-ghost:hover { background: rgba(255,255,255,.12); border-color: #fff; }

        /* ── STATS ── */
        .stats-bar {
          background: #fff; border-bottom: 1px solid #D0E8E8;
          padding: 30px 48px; display: flex; justify-content: center; flex-wrap: wrap;
        }
        .stat-item { text-align: center; padding: 0 44px; position: relative; }
        .stat-item + .stat-item::before {
          content: ''; position: absolute; left: 0; top: 10%; height: 80%;
          width: 1px; background: #D0E8E8;
        }
        .stat-num { font-family: 'DM Serif Display', serif; font-size: 36px; color: #0A9396; display: block; }
        .stat-lbl { font-size: 13px; color: #4A6070; font-weight: 500; margin-top: 3px; display: block; }

        /* ── SECTIONS ── */
        .home-section { padding: 80px 48px; max-width: 1100px; margin: 0 auto; }
        .sec-eyebrow {
          font-size: 11px; font-weight: 700; letter-spacing: 2.5px;
          text-transform: uppercase; color: #0A9396; margin-bottom: 12px;
        }
        .sec-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(26px, 4vw, 42px); color: #1A2B3C;
          margin-bottom: 14px; line-height: 1.15;
        }
        .sec-sub { font-size: 17px; color: #4A6070; line-height: 1.65; max-width: 540px; }

        /* ── FEATURES ── */
        .features-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 22px; margin-top: 52px;
        }
        .feature-card {
          background: #F7FBFB; border: 1px solid #D0E8E8; border-radius: 16px;
          padding: 32px 28px; transition: all .25s;
        }
        .feature-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(10,147,150,.1); border-color: #94D2BD; }
        .feature-icon {
          width: 52px; height: 52px; background: #E9F5F5; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          font-size: 26px; margin-bottom: 18px;
        }
        .feature-card h3 { font-size: 16px; font-weight: 700; color: #1A2B3C; margin-bottom: 10px; }
        .feature-card p { font-size: 14px; color: #4A6070; line-height: 1.65; }

        /* ── SPECIALTIES ── */
        .specialties-wrap { background: #F7FBFB; border-top: 1px solid #D0E8E8; padding: 80px 0; }
        .specialties-inner { max-width: 1100px; margin: 0 auto; padding: 0 48px; }
        .specialties-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(138px, 1fr));
          gap: 14px; margin-top: 48px;
        }
        .specialty-card {
          background: #fff; border: 1.5px solid #D0E8E8; border-radius: 14px;
          padding: 20px 12px; text-align: center; cursor: pointer; transition: all .2s;
        }
        .specialty-card:hover { border-color: #0A9396; background: #E9F5F5; transform: translateY(-3px); }
        .specialty-em { font-size: 30px; display: block; margin-bottom: 8px; }
        .specialty-name { font-size: 13px; font-weight: 600; color: #1A2B3C; }

        /* ── HOW IT WORKS ── */
        .steps-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 32px; margin-top: 52px;
        }
        .step-card { text-align: center; }
        .step-num {
          width: 54px; height: 54px; border-radius: 50%; background: #0A9396; color: #fff;
          font-family: 'DM Serif Display', serif; font-size: 24px;
          display: flex; align-items: center; justify-content: center; margin: 0 auto 18px;
        }
        .step-card h3 { font-size: 16px; font-weight: 700; margin-bottom: 8px; color: #1A2B3C; }
        .step-card p { font-size: 14px; color: #4A6070; line-height: 1.65; }

        /* ── TESTIMONIALS ── */
        .testimonials-wrap { background: #E9F5F5; border-top: 1px solid #D0E8E8; padding: 80px 48px; }
        .testimonials-inner { max-width: 1100px; margin: 0 auto; }
        .testimonials-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 22px; margin-top: 48px;
        }
        .testimonial-card { background: #fff; border: 1px solid #D0E8E8; border-radius: 16px; padding: 28px; }
        .testimonial-stars { color: #EE9B00; font-size: 16px; margin-bottom: 14px; }
        .testimonial-text { font-size: 15px; color: #1A2B3C; line-height: 1.65; margin-bottom: 20px; font-style: italic; }
        .testimonial-author { display: flex; align-items: center; gap: 12px; }
        .testimonial-avatar {
          width: 44px; height: 44px; border-radius: 50%; background: #0A9396;
          color: #fff; display: flex; align-items: center; justify-content: center;
          font-weight: 700; font-size: 15px; flex-shrink: 0;
        }
        .testimonial-name { font-weight: 700; font-size: 14px; color: #1A2B3C; }
        .testimonial-loc { font-size: 12px; color: #4A6070; }

        /* ── CTA BAND ── */
        .cta-band {
          background: linear-gradient(135deg, #005F73, #0A9396);
          padding: 72px 48px; text-align: center;
        }
        .cta-band h2 { font-family: 'DM Serif Display', serif; font-size: 38px; color: #fff; margin-bottom: 14px; }
        .cta-band p { color: rgba(255,255,255,.8); font-size: 17px; margin-bottom: 36px; }

        @media (max-width: 640px) {
          .hero, .home-section, .testimonials-wrap, .cta-band { padding-left: 20px; padding-right: 20px; }
          .specialties-inner { padding: 0 20px; }
          .stat-item { padding: 0 18px; }
        }
      `}</style>

      {/* HERO */}
      <section className="hero">
        <div className="hero-badge">✅ Trusted by 200,000+ patients across India</div>
        <h1>Your doctor is <em>one tap</em> away</h1>
        <p className="hero-sub">
          Skip the waiting room. MediConnect connects you with board-certified physicians
          via secure HD video — 24/7, any specialty.
        </p>
        <div className="hero-btns">
          <button className="btn-white" onClick={() => nav("signup")}>🎥 Book a Consultation</button>
          <button className="btn-ghost" onClick={() => nav("about")}>How it works →</button>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        {[["200K+","Patients Served"],["1,500+","Certified Doctors"],["40+","Specialties"],["< 2 hrs","Avg Wait Time"],["98%","Satisfaction Rate"]].map(([n,l]) => (
          <div className="stat-item" key={l}>
            <span className="stat-num">{n}</span>
            <span className="stat-lbl">{l}</span>
          </div>
        ))}
      </div>

      {/* FEATURES */}
      <div className="home-section">
        <div className="sec-eyebrow">Why MediConnect</div>
        <h2 className="sec-title">Healthcare built around your life</h2>
        <p className="sec-sub">Every feature was designed around one idea: medical care should fit your schedule.</p>
        <div className="features-grid">
          {features.map(f => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SPECIALTIES */}
      <div className="specialties-wrap">
        <div className="specialties-inner">
          <div className="sec-eyebrow">Specialties</div>
          <h2 className="sec-title">Find the right specialist</h2>
          <p className="sec-sub">Over 40 medical specialties, all accessible via video consultation.</p>
          <div className="specialties-grid">
            {specialties.map(s => (
              <div className="specialty-card" key={s.name} onClick={() => nav("signup")}>
                <span className="specialty-em">{s.emoji}</span>
                <span className="specialty-name">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="home-section">
        <div className="sec-eyebrow">The Process</div>
        <h2 className="sec-title">Care in four simple steps</h2>
        <div className="steps-grid">
          {steps.map(s => (
            <div className="step-card" key={s.n}>
              <div className="step-num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="testimonials-wrap">
        <div className="testimonials-inner">
          <div className="sec-eyebrow">Patient Stories</div>
          <h2 className="sec-title">What our patients say</h2>
          <div className="testimonials-grid">
            {testimonials.map(t => (
              <div className="testimonial-card" key={t.name}>
                <div className="testimonial-stars">{"★".repeat(t.stars)}</div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.init}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-loc">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA BAND */}
      <div className="cta-band">
        <h2>Ready to see a doctor today?</h2>
        <p>Join over 200,000 patients who've made the switch to telemedicine.</p>
        <div className="hero-btns">
          <button className="btn-white" onClick={() => nav("signup")}>Create Free Account →</button>
          <button className="btn-ghost" onClick={() => nav("login")}>I already have an account</button>
        </div>
      </div>
    </>
  );
}