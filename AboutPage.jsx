export default function AboutPage({ setPage }) {
  const nav = (id) => { setPage(id); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const values = [
    { icon: "🎯", title: "Patient First", desc: "Every product decision starts with one question: does this make care more accessible or safer for the patient?" },
    { icon: "🔬", title: "Clinical Rigour", desc: "All physicians are board-certified, background-verified, and continuously peer-reviewed for quality of care." },
    { icon: "📊", title: "Radical Transparency", desc: "We publish our pricing, wait times, and outcomes data publicly. You should know exactly what you're getting." },
    { icon: "🔐", title: "Privacy as a Right", desc: "HIPAA compliance is our floor, not our ceiling. We collect only the data necessary to deliver care." },
  ];

  const team = [
    { init: "RS", name: "Dr. Rina Sharma", role: "Chief Medical Officer", bio: "Cardiologist with 18 yrs experience. Former AIIMS faculty. Leads clinical standards and physician network quality." },
    { init: "AK", name: "Arjun Kapoor", role: "CEO & Co-Founder", bio: "Serial health-tech founder. Previously built digital health platforms reaching 3M+ patients across India." },
    { init: "PM", name: "Priya Menon", role: "Head of Engineering", bio: "HIPAA-compliant platforms at scale. Expert in real-time video infrastructure and medical data security." },
    { init: "VS", name: "Vikram Singh", role: "Head of Product", bio: "Designs experiences that make complex medical workflows feel effortlessly simple for patients and doctors." },
  ];

  const milestones = [
    { year: "2020", event: "MediConnect founded in Bengaluru by a team of doctors and engineers." },
    { year: "2021", event: "Reached 10,000 consultations. Launched in 8 Indian states." },
    { year: "2022", event: "Series A funding. Expanded to 40+ specialties and 28 states." },
    { year: "2023", event: "Crossed 100,000 patients. Launched e-prescription and health records." },
    { year: "2026", event: "200,000+ patients, 1,500+ doctors, expanding internationally." },
  ];

  return (
    <>
      <style>{`
        .about-hero {
          background: #E9F5F5; padding: 80px 48px; text-align: center;
          border-bottom: 1px solid #D0E8E8;
        }
        .about-eyebrow {
          font-size: 11px; font-weight: 700; letter-spacing: 2.5px;
          text-transform: uppercase; color: #0A9396; margin-bottom: 12px;
        }
        .about-hero h1 {
          font-family: 'DM Serif Display', serif; font-size: clamp(34px, 5vw, 52px);
          color: #005F73; margin-bottom: 18px; line-height: 1.15;
        }
        .about-hero p {
          font-size: 18px; color: #4A6070; max-width: 600px; margin: 0 auto; line-height: 1.7;
        }

        .about-mission {
          max-width: 1100px; margin: 0 auto; padding: 80px 48px;
          display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center;
        }
        .mission-text .about-eyebrow { text-align: left; }
        .mission-text h2 {
          font-family: 'DM Serif Display', serif; font-size: 38px;
          color: #1A2B3C; margin-bottom: 20px; line-height: 1.2;
        }
        .mission-text p { font-size: 16px; color: #4A6070; line-height: 1.75; margin-bottom: 16px; }
        .mission-visual {
          background: linear-gradient(135deg, #E9F5F5, rgba(148,210,189,.25));
          border: 1px solid #D0E8E8; border-radius: 20px; padding: 64px;
          text-align: center; font-size: 96px;
        }

        .milestones-wrap { background: #F7FBFB; border-top: 1px solid #D0E8E8; padding: 80px 48px; }
        .milestones-inner { max-width: 700px; margin: 0 auto; }
        .milestones-inner .about-eyebrow { text-align: center; }
        .milestones-inner h2 {
          font-family: 'DM Serif Display', serif; font-size: 38px;
          color: #1A2B3C; margin-bottom: 48px; text-align: center;
        }
        .milestone-item { display: flex; gap: 24px; margin-bottom: 28px; align-items: flex-start; }
        .milestone-year {
          min-width: 60px; font-family: 'DM Serif Display', serif; font-size: 20px;
          color: #0A9396; font-weight: 400; padding-top: 2px;
        }
        .milestone-dot {
          width: 14px; height: 14px; border-radius: 50%; background: #0A9396;
          margin-top: 5px; flex-shrink: 0; position: relative;
        }
        .milestone-dot::after {
          content: ''; position: absolute; left: 6px; top: 14px;
          width: 2px; height: calc(100% + 14px); background: #D0E8E8;
        }
        .milestone-item:last-child .milestone-dot::after { display: none; }
        .milestone-event { font-size: 15px; color: #4A6070; line-height: 1.65; padding-top: 2px; }

        .values-wrap { padding: 80px 48px; border-top: 1px solid #D0E8E8; }
        .values-inner { max-width: 1100px; margin: 0 auto; }
        .values-inner .about-eyebrow, .values-inner .sec-title-about { text-align: center; }
        .sec-title-about {
          font-family: 'DM Serif Display', serif; font-size: 38px;
          color: #1A2B3C; margin-bottom: 48px; text-align: center;
        }
        .values-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 22px;
        }
        .value-card {
          background: #F7FBFB; border: 1px solid #D0E8E8; border-radius: 14px;
          padding: 28px; border-top: 3px solid #0A9396;
        }
        .value-card h3 { font-size: 16px; font-weight: 700; margin-bottom: 10px; color: #1A2B3C; }
        .value-card p { font-size: 14px; color: #4A6070; line-height: 1.65; }

        .team-wrap { max-width: 1100px; margin: 0 auto; padding: 80px 48px; }
        .team-wrap .about-eyebrow, .team-title { text-align: center; }
        .team-title {
          font-family: 'DM Serif Display', serif; font-size: 38px;
          color: #1A2B3C; margin-bottom: 48px;
        }
        .team-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
          gap: 24px;
        }
        .team-card {
          text-align: center; padding: 32px 20px;
          background: #F7FBFB; border: 1px solid #D0E8E8; border-radius: 16px;
          transition: all .2s;
        }
        .team-card:hover { transform: translateY(-4px); box-shadow: 0 10px 28px rgba(10,147,150,.1); }
        .team-avatar {
          width: 80px; height: 80px; border-radius: 50%; background: #0A9396;
          margin: 0 auto 16px; display: flex; align-items: center; justify-content: center;
          font-family: 'DM Serif Display', serif; font-size: 26px; color: #fff;
        }
        .team-name { font-size: 15px; font-weight: 700; margin-bottom: 4px; color: #1A2B3C; }
        .team-role { font-size: 13px; color: #0A9396; font-weight: 600; margin-bottom: 10px; }
        .team-bio { font-size: 13px; color: #4A6070; line-height: 1.6; }

        .about-cta {
          background: linear-gradient(135deg, #005F73, #0A9396);
          padding: 72px 48px; text-align: center;
        }
        .about-cta h2 { font-family: 'DM Serif Display', serif; font-size: 38px; color: #fff; margin-bottom: 14px; }
        .about-cta p { color: rgba(255,255,255,.8); font-size: 17px; margin-bottom: 36px; }
        .about-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
        .btn-white-about {
          padding: 14px 32px; border-radius: 10px; font-size: 15px; font-weight: 700;
          cursor: pointer; border: none; background: #fff; color: #005F73;
          transition: all .2s; font-family: 'Inter', sans-serif;
        }
        .btn-white-about:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,.2); }
        .btn-ghost-about {
          padding: 14px 32px; border-radius: 10px; font-size: 15px; font-weight: 600;
          cursor: pointer; border: 2px solid rgba(255,255,255,.65); background: transparent;
          color: #fff; transition: all .2s; font-family: 'Inter', sans-serif;
        }
        .btn-ghost-about:hover { background: rgba(255,255,255,.12); border-color: #fff; }

        @media (max-width: 900px) {
          .about-mission { grid-template-columns: 1fr; gap: 36px; }
        }
        @media (max-width: 640px) {
          .about-hero, .about-mission, .milestones-wrap,
          .values-wrap, .team-wrap, .about-cta { padding-left: 20px; padding-right: 20px; }
        }
      `}</style>

      {/* HERO */}
      <div className="about-hero">
        <div className="about-eyebrow">Our Story</div>
        <h1>Healthcare without barriers</h1>
        <p>MediConnect was founded on a simple belief: geography and time should never be the reason someone can't see a doctor.</p>
      </div>

      {/* MISSION */}
      <div className="about-mission">
        <div className="mission-text">
          <div className="about-eyebrow">Our Mission</div>
          <h2>Democratising access to quality medical care</h2>
          <p>In 2020, our founders watched family members in rural India wait weeks for specialist appointments that urban patients could get in days. That gap — geographical, economic, logistical — is what we set out to close.</p>
          <p>Today, MediConnect connects patients in 28 states with over 1,500 verified physicians across 40+ specialties. We have facilitated more than 200,000 consultations, and we're just getting started.</p>
        </div>
        <div className="mission-visual">🏥</div>
      </div>

      {/* MILESTONES */}
      <div className="milestones-wrap">
        <div className="milestones-inner">
          <div className="about-eyebrow" style={{textAlign:"center"}}>Our Journey</div>
          <h2>Building the future of healthcare</h2>
          {milestones.map(m => (
            <div className="milestone-item" key={m.year}>
              <span className="milestone-year">{m.year}</span>
              <div className="milestone-dot" />
              <p className="milestone-event">{m.event}</p>
            </div>
          ))}
        </div>
      </div>

      {/* VALUES */}
      <div className="values-wrap">
        <div className="values-inner">
          <div className="about-eyebrow">What drives us</div>
          <h2 className="sec-title-about">Our core values</h2>
          <div className="values-grid">
            {values.map(v => (
              <div className="value-card" key={v.title}>
                <h3>{v.icon} {v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TEAM */}
      <div className="team-wrap">
        <div className="about-eyebrow">The people behind it</div>
        <h2 className="team-title">Meet our leadership</h2>
        <div className="team-grid">
          {team.map(m => (
            <div className="team-card" key={m.name}>
              <div className="team-avatar">{m.init}</div>
              <div className="team-name">{m.name}</div>
              <div className="team-role">{m.role}</div>
              <div className="team-bio">{m.bio}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="about-cta">
        <h2>Join our growing network</h2>
        <p>Are you a doctor? Apply to join 1,500+ physicians on MediConnect.</p>
        <div className="about-btns">
          <button className="btn-white-about" onClick={() => nav("signup")}>Apply as a Doctor →</button>
          <button className="btn-ghost-about" onClick={() => nav("contact")}>Contact our team</button>
        </div>
      </div>
    </>
  );
}